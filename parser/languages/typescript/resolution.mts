import { builtinModules } from "node:module";
import { existsSync, readFileSync, realpathSync } from "node:fs";
import { dirname, isAbsolute, join, relative, resolve, sep } from "node:path";
import { ts, type SourceFile } from "ts-morph";
import { portable } from "../../inventory.mts";
import type { ConfigurationReport, ImportOutcome } from "../../types.mts";

const builtins = new Set(builtinModules.map((name) => name.replace(/^node:/, "")));
export const inside = (root: string, path: string) => {
  const delta = relative(root, path);
  return delta !== ".." && !delta.startsWith(`..${sep}`) && !isAbsolute(delta);
};

interface Configuration {
  options: ts.CompilerOptions;
  messages: string[];
  cache: ts.ModuleResolutionCache;
}
interface PackageBoundary { path: string; name: string | null; dependencies: Set<string> }
interface Resolution { outcome: ImportOutcome; target: string | null; reason: string }

export function createResolver(root: string, parsedPaths: Set<string>, skipped: Map<string, string>) {
  const configurations = new Map<string, Configuration>();
  const packages = new Map<string, PackageBoundary>();
  const reports = new Map<string, ConfigurationReport>();
  const defaults: ts.CompilerOptions = {
    module: ts.ModuleKind.ESNext, moduleResolution: ts.ModuleResolutionKind.Bundler,
    target: ts.ScriptTarget.ESNext, allowJs: true, jsx: ts.JsxEmit.Preserve, resolveJsonModule: true,
  };

  function nearest(file: string, names: string[]) {
    let folder = dirname(file);
    while (inside(root, folder)) {
      for (const name of names) {
        const path = join(folder, name);
        if (existsSync(path)) return path;
      }
      if (folder === root) break;
      folder = dirname(folder);
    }
    return null;
  }

  function configuration(file: string) {
    const path = nearest(file, ["tsconfig.json", "jsconfig.json"]);
    const key = path ?? "<default>";
    const existing = configurations.get(key);
    if (existing) return existing;
    let options = defaults;
    let messages: string[] = [];
    if (path) {
      const config = ts.parseJsonSourceFileConfigFileContent(
        ts.readJsonConfigFile(path, ts.sys.readFile),
        { ...ts.sys, readDirectory: () => [] }, dirname(path), undefined, path,
      );
      // Selection belongs to the inventory. "No inputs" is immaterial to resolution options.
      messages = config.errors.filter((error) => error.code !== 18003)
        .map((error) => `TS${error.code}: ${ts.flattenDiagnosticMessageText(error.messageText, " ")}`);
      options = config.options;
      reports.set(path, { path: portable(relative(root, path)), messages });
    }
    const result = { options, messages, cache: ts.createModuleResolutionCache(root, (name) => name, options) };
    configurations.set(key, result);
    return result;
  }

  function packageFor(file: string): PackageBoundary {
    const path = nearest(file, ["package.json"]);
    const key = path ?? root;
    const existing = packages.get(key);
    if (existing) return existing;
    const result: PackageBoundary = { path: path ? portable(relative(root, dirname(path))) || "." : ".", name: null, dependencies: new Set() };
    if (path) {
      try {
        const data: unknown = JSON.parse(readFileSync(path, "utf8"));
        if (typeof data !== "object" || data === null || Array.isArray(data)) throw new Error("Expected an object");
        if ("name" in data && typeof data.name === "string") result.name = data.name;
        for (const field of ["dependencies", "devDependencies", "peerDependencies", "optionalDependencies"]) {
          const group: unknown = Reflect.get(data, field);
          if (group && typeof group === "object" && !Array.isArray(group)) {
            for (const name of Object.keys(group)) result.dependencies.add(name);
          }
        }
      } catch (error) {
        reports.set(path, { path: portable(relative(root, path)), messages: [`Invalid package manifest: ${error instanceof Error ? error.message : String(error)}`] });
      }
    }
    packages.set(key, result);
    return result;
  }

  function resolveImport(specifier: string, source: SourceFile, literal?: ts.StringLiteralLike): Resolution {
    const external = (reason: string): Resolution => ({ outcome: "external", target: null, reason });
    if (builtins.has(specifier.replace(/^node:/, ""))) return external("Node.js built-in module");
    if (/^(?:https?|data):/.test(specifier)) return external("URL import points outside the repository");
    const config = configuration(source.getFilePath());
    if (config.messages.length) return { outcome: "unresolved", target: null, reason: `Invalid compiler configuration: ${config.messages.join("; ")}` };
    // In-memory ASTs have no package context. Let TypeScript recover the real
    // Node16/NodeNext format from disk before choosing import-vs-require resolution.
    source.compilerNode.impliedNodeFormat = ts.getImpliedNodeFormatForFile(source.getFilePath(), undefined, ts.sys, config.options);
    const mode = literal ? ts.getModeForUsageLocation(source.compilerNode, literal, config.options) : undefined;
    const resolved = ts.resolveModuleName(specifier, source.getFilePath(), config.options, ts.sys, config.cache, undefined, mode).resolvedModule;
    if (resolved) {
      const absolute = realpathSync(resolved.resolvedFileName);
      if (!inside(root, absolute) || absolute.split(sep).includes("node_modules")) return external("TypeScript resolved a dependency outside the selected repository source");
      const target = portable(relative(root, absolute));
      if (parsedPaths.has(target)) return { outcome: "resolved", target, reason: "TypeScript resolved to a parsed repository file" };
      return { outcome: "excluded", target, reason: skipped.get(target) ?? "Resolved file is outside the selected Git inventory" };
    }
    // An exact non-code target can be reported as excluded, but never turned into an edge.
    if (specifier.startsWith(".") || isAbsolute(specifier)) {
      const exact = resolve(dirname(source.getFilePath()), specifier);
      if (existsSync(exact) && !inside(root, realpathSync(exact))) return external("Import target is outside the repository");
      if (existsSync(exact) && skipped.has(portable(relative(root, exact)))) {
        const target = portable(relative(root, exact));
        return { outcome: "excluded", target, reason: skipped.get(target) ?? "Excluded target" };
      }
      return { outcome: "unresolved", target: null, reason: "TypeScript could not resolve this local path to a file (missing target or incompatible module resolution)" };
    }
    const packageName = specifier.startsWith("@") ? specifier.split("/").slice(0, 2).join("/") : specifier.split("/")[0];
    const alias = Object.keys(config.options.paths ?? {}).some((pattern) => {
      const star = pattern.indexOf("*");
      return star < 0 ? pattern === specifier : specifier.startsWith(pattern.slice(0, star)) && specifier.endsWith(pattern.slice(star + 1));
    });
    if (!alias) {
      if ([...packages.values()].some((boundary) => boundary.name === packageName)) {
        return { outcome: "unresolved", target: null, reason: "Repository package has no TypeScript-resolvable entry (workspace link or built output may be absent)" };
      }
      let folder = dirname(source.getFilePath());
      while (inside(root, folder)) {
        const boundary = packageFor(join(folder, "__module_lookup__.ts"));
        if (boundary.dependencies.has(packageName) && boundary.name !== packageName) {
          return external("Declared package dependency; no local file resolved (dependency may not be installed)");
        }
        if (folder === root) break;
        folder = dirname(folder);
      }
    }
    return { outcome: "unresolved", target: null, reason: alias ? "Configured path alias has no resolvable target" : "No resolvable local module or declared external package" };
  }

  return { resolveImport, packageFor, reports };
}
