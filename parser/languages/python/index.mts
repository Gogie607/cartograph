import { spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import { lstat, readFile } from "node:fs/promises";
import { basename, dirname, join, posix } from "node:path";
import { fileURLToPath } from "node:url";
import type { LanguageParser, LanguageParseResult } from "../contract.mts";
import type { ImportRecord } from "../../types.mts";

interface SyntaxImport {
  form: "import" | "from" | "dynamic";
  module: string;
  names: string[];
  level: number;
  line: number;
  column: number;
  expression: string;
}
interface SyntaxFile { path: string; error: string | null; imports: SyntaxImport[]; bindings: string[] }
function syntaxFiles(value: unknown): SyntaxFile[] {
  if (!Array.isArray(value)) throw new Error("Invalid Python syntax response");
  return value.map((file: unknown) => {
    if (typeof file !== "object" || file === null || !("path" in file) || typeof file.path !== "string" ||
        !("error" in file) || (file.error !== null && typeof file.error !== "string") || !("bindings" in file) || !Array.isArray(file.bindings) || !file.bindings.every((name: unknown) => typeof name === "string") || !("imports" in file) || !Array.isArray(file.imports)) {
      throw new Error("Invalid Python syntax file");
    }
    const imports = file.imports.map((item: unknown): SyntaxImport => {
      if (typeof item !== "object" || item === null || !("form" in item) ||
          (item.form !== "import" && item.form !== "from" && item.form !== "dynamic") ||
          !("module" in item) || typeof item.module !== "string" || !("names" in item) || !Array.isArray(item.names) ||
          !item.names.every((name: unknown) => typeof name === "string") ||
          !("level" in item) || typeof item.level !== "number" || !("line" in item) || typeof item.line !== "number" ||
          !("column" in item) || typeof item.column !== "number" || !("expression" in item) || typeof item.expression !== "string") {
        throw new Error("Invalid Python syntax import");
      }
      return { form: item.form, module: item.module, names: item.names, level: item.level, line: item.line, column: item.column, expression: item.expression };
    });
    return { path: file.path, error: file.error, imports, bindings: file.bindings };
  });
}

export const pythonParser: LanguageParser = {
  id: "python", extensions: { ".py": "python", ".pyw": "python", ".pyi": "python" },
  async parse({ root, files: selected, excludedFiles, adapter }): Promise<LanguageParseResult> {
    const skipped = new Map(excludedFiles);
    const contents = new Map<string, string>();
    const hashes = new Map<string, string>();
    for (const { path } of selected) {
      try {
        const info = await lstat(join(root, path));
        if (!info.isFile()) { skipped.set(path, info.isSymbolicLink() ? "Symbolic link is not followed" : "Not a regular file"); continue; }
        const bytes = await readFile(join(root, path));
        hashes.set(path, createHash("sha256").update(bytes).digest("hex"));
        contents.set(path, new TextDecoder("utf-8", { fatal: true }).decode(bytes));
      } catch (error) { skipped.set(path, `Could not read source: ${error instanceof Error ? error.message : String(error)}`); }
    }
    // Isolated Python, without site initialization: only our helper runs, never target code.
    const response = spawnSync("python3", ["-I", "-S", fileURLToPath(new URL("./syntax.py", import.meta.url))], {
      input: JSON.stringify([...contents].map(([path, text]) => ({ path, text }))), encoding: "utf8", timeout: 30_000, maxBuffer: 64 * 1024 * 1024,
    });
    if (response.error || response.status !== 0) throw new Error(`Python AST parser failed (python3 required): ${response.error?.message ?? response.stderr}`);
    const syntax = syntaxFiles(JSON.parse(response.stdout));
    for (const source of syntax) if (source.error) { skipped.set(source.path, `Syntax error: ${source.error}`); contents.delete(source.path); }
    const allPaths = new Set([...selected.map((file) => file.path), ...excludedFiles.keys()]);
    const packageDirs = new Set([...allPaths].filter((path) => /(?:^|\/)__init__\.py$/.test(path)).map((path) => posix.dirname(path)));
    const identities = new Map<string, { name: string; packageName: string; boundary: string }>();
    const modules = new Map<string, string[]>();
    for (const path of allPaths) {
      if (!/\.(py|pyw|pyi)$/.test(path)) continue;
      let folder = posix.dirname(path);
      const parts: string[] = [];
      while (folder !== "." && packageDirs.has(folder)) {
        parts.unshift(posix.basename(folder));
        folder = posix.dirname(folder);
      }
      const isInit = posix.basename(path) === "__init__.py";
      const rootedPackage = folder === "." && allPaths.has("__init__.py");
      if (rootedPackage) parts.unshift(basename(root));
      const packageName = parts.join(".");
      if (!isInit) parts.push(posix.basename(path).replace(/\.(py|pyw|pyi)$/, ""));
      // Missing package markers in arbitrary nested directories are ambiguous.
      if (folder !== "." && folder !== "src") continue;
      const name = parts.join(".");
      identities.set(path, { name, packageName, boundary: rootedPackage ? "." : packageName ? posix.join(folder, packageName.split(".")[0]) : "." });
      modules.set(name, [...(modules.get(name) ?? []), path]);
    }
    const isPackage = (path: string) => path === "__init__.py" || path.endsWith("/__init__.py");
    const bindings = new Map(syntax.map((file) => [file.path, new Set(file.bindings)]));
    type Resolution = Pick<ImportRecord, "outcome" | "target" | "reason">;
    function resolveModule(name: string): Resolution {
      if (!modules.has(name)) return { outcome: "external", target: null, reason: "No unique repository module; standard library, installed, missing or namespace module is external" };
      const parts = name.split(".");
      for (let i = 1; i < parts.length; i++) {
        const parents = modules.get(parts.slice(0, i).join(".")) ?? [];
        if (parents.length !== 1 || !isPackage(parents[0])) return { outcome: "unresolved", target: null, reason: "Parent package is missing or ambiguous; namespace resolution is not guessed" };
        if (!contents.has(parents[0])) return { outcome: "excluded", target: null, reason: skipped.get(parents[0]) ?? "Parent package excluded" };
      }
      const candidates = modules.get(name) ?? [];
      if (candidates.length > 1) return { outcome: "unresolved", target: null, reason: "Ambiguous module: multiple repository files match" };
      const target = candidates[0];
      if (target && contents.has(target)) return { outcome: "resolved", target, reason: "Resolved Python module to repository file" };
      if (target) return { outcome: "excluded", target: null, reason: skipped.get(target) ?? "Module source was excluded" };
      return { outcome: "external", target: null, reason: "No unique repository module; standard library, installed, missing or namespace module is external" };
    }
    const imports: ImportRecord[] = [];
    for (const source of syntax) {
      if (!contents.has(source.path)) continue;
      for (const item of source.imports) {
        const kind = item.form === "dynamic" ? "dynamic-import" : "import";
        function record(specifier: string | null, resolution: Resolution) {
          imports.push({ source: source.path, line: item.line, column: item.column, kind, specifier, expression: item.expression, ...resolution });
        }
        if (item.form === "dynamic") { record(null, { outcome: "unresolved", target: null, reason: "Dynamic import is not resolved statically" }); continue; }
        if (item.names.includes("*")) { record(`${".".repeat(item.level)}${item.module}.*`, { outcome: "unresolved", target: null, reason: "Star import names are not resolved statically" }); continue; }
        let base = item.module;
        if (item.level) {
          const identity = identities.get(source.path);
          const parts = identity?.packageName.split(".").filter(Boolean) ?? [];
          if (!parts.length || item.level > parts.length) {
            record(`${".".repeat(item.level)}${base}`, { outcome: "unresolved", target: null, reason: "Relative import escapes or has no unambiguous package context" }); continue;
          }
          base = [...parts.slice(0, parts.length - item.level + 1), ...base.split(".").filter(Boolean)].join(".");
        }
        // Python loads each regular parent package on the way to a dotted module.
        const parents = base.split(".");
        for (let i = 1; i < parents.length; i++) {
          const name = parents.slice(0, i).join(".");
          const targets = modules.get(name) ?? [];
          if (targets.length === 1 && isPackage(targets[0])) record(name, resolveModule(name));
        }
        if (item.form === "import") { record(base, resolveModule(base)); continue; }
        const baseResolution = resolveModule(base);
        record(`${".".repeat(item.level)}${item.module}`, baseResolution);
        for (const name of item.names) {
          const child = `${base}.${name}`;
          // A from-import can name an attribute. Only a real child of a package
          // is an additional file dependency; never guess a file for a symbol.
          const targets = modules.get(base) ?? [];
          if (modules.has(child) && targets.length === 1 && isPackage(targets[0]) && !bindings.get(targets[0])?.has(name)) record(child, resolveModule(child));
        }
      }
    }
    const files = [...contents].map(([path, text]) => ({
      path, language: "python", folder: dirname(path).replaceAll("\\", "/"), module: identities.get(path)?.boundary ?? ".",
      lineCount: text.length === 0 ? 0 : text.split(/\r\n|\r|\n/).length - (/\r\n$|[\r\n]$/.test(text) ? 1 : 0),
      contentHash: hashes.get(path)!, isModule: true, isDeclaration: path.endsWith(".pyi"),
      role: adapter.classifyFile({ path, language: "python", text }), fanIn: 0, fanOut: 0,
    }));
    const boundaries = [...new Set(files.map((file) => file.module))].map((path) => ({ path, name: path === "." ? null : posix.basename(path) }));
    return { files, imports, modules: boundaries, skipped: selected.filter((file) => skipped.has(file.path)).map((file) => ({ ...file, reason: skipped.get(file.path)! })), configurations: [] };
  },
};
