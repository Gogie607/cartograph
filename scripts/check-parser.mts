import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { mkdtemp, mkdir, writeFile, rename, rm, symlink } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { parseRepository, type ParsedRepository, type LanguageParser } from "../parser/index.mts";
import { typescriptParser } from "../parser/languages/typescript/index.mts";
import { writeRepository } from "../parser/output.mts";
import { buildGraph } from "../parser/graph.mts";

const temporary = await mkdtemp(join(tmpdir(), "cartograph-parser-check-"));
const fixture = join(temporary, "repository");
async function put(path: string, text: string) {
  await mkdir(dirname(join(fixture, path)), { recursive: true });
  await writeFile(join(fixture, path), text);
}
function reconciles(result: ParsedRepository) {
  const { files, imports } = result.coverage;
  assert.equal(files.found, files.parsed + files.skipped);
  assert.equal(files.skipped, files.details.length);
  assert.ok(files.details.every((skip) => skip.reason.length > 0));
  assert.equal(imports.found, imports.resolved + imports.external + imports.excluded + imports.unresolved);
  assert.equal(imports.found, imports.records.length);
  assert.equal(imports.found, Object.values(imports.byKind).reduce((sum, count) => sum + count.found, 0));
  assert.equal(result.version, 2);
  assert.equal(result.languages.reduce((sum, language) => sum + language.found, 0), files.found);
  for (const language of result.languages) {
    assert.equal(language.found, language.parsed + language.skipped);
    assert.equal(language.parsed, result.files.filter((file) => file.language === language.language).length);
    assert.equal(language.skipped, files.details.filter((file) => file.language === language.language).length);
  }
  const nodes = new Set(result.files.map((file) => file.path));
  for (const file of result.files) assert.equal(file.folder, dirname(file.path).replaceAll("\\", "/"));
  for (const edge of result.edges) assert.ok(nodes.has(edge.source) && nodes.has(edge.target));
}

try {
  await put("package.json", JSON.stringify({ name: "fixture", dependencies: { "declared-package": "*" } }));
  await put("tsconfig.json", JSON.stringify({ compilerOptions: {
    module: "ESNext", moduleResolution: "Bundler", baseUrl: ".", paths: { "@/*": ["src/*"] },
  } }));
  await put("src/main.ts", 'import { value } from "./leaf";\nexport const result = value;\n');
  const leaf = 'export const value = 1;\r\nexport type Value = number;\r\n';
  await put("src/leaf.ts", leaf);
  const baseline = await parseRepository(fixture);
  reconciles(baseline);
  assert.equal(baseline.coverage.imports.unresolved, 0);
  assert.equal(baseline.edges.length, 1);
  assert.equal(baseline.files.find((file) => file.path === "src/leaf.ts")?.lineCount, 2);
  assert.equal(baseline.files.find((file) => file.path === "src/leaf.ts")?.contentHash, createHash("sha256").update(leaf).digest("hex"));

  await rename(join(fixture, "src/leaf.ts"), join(fixture, "src/renamed.ts"));
  const renamed = await parseRepository(fixture);
  reconciles(renamed);
  assert.equal(renamed.coverage.imports.unresolved, 1);
  const missing = renamed.coverage.imports.records.find((record) => record.outcome === "unresolved");
  assert.equal(missing?.specifier, "./leaf");
  assert.match(missing?.reason ?? "", /could not resolve this local path/);
  console.log(`Rename check: exactly 1 unresolved import (${missing?.source}:${missing?.line} -> ${missing?.specifier}); ${missing?.reason}`);
  await rename(join(fixture, "src/renamed.ts"), join(fixture, "src/leaf.ts"));

  await put("src/barrel/index.ts", 'export * from "../leaf";\n');
  await put("src/style.css", "body {}\n");
  await put("src/broken.ts", "export const = ;\n");
  await put("src/main.ts", [
    'import { value } from "@/leaf";',
    'import type { Value } from "@/leaf";',
    'export { value as again } from "./leaf";',
    'export * from "./barrel";',
    'const lazy = () => import("./leaf.js");',
    'const path = "./leaf"; const unknown = () => import(path);',
    'import "./style.css";',
    'import "node:fs";',
    'import "declared-package";',
    'import "not-declared";',
    'import "./broken";',
    'require("./not-in-phase-three");',
    'type Query = import("./leaf").Value;',
  ].join("\n"));
  const complete = await parseRepository(fixture);
  reconciles(complete);
  assert.equal(complete.edges.length, 3);
  assert.equal(complete.coverage.imports.byKind["re-export"].found, 3);
  assert.equal(complete.coverage.imports.byKind["re-export"].resolved, 3);
  assert.deepEqual(complete.edges.find((edge) => edge.source === "src/main.ts" && edge.target === "src/leaf.ts")?.kinds, ["dynamic-import", "import", "re-export"]);
  assert.equal(complete.files.find((file) => file.path === "src/main.ts")?.fanOut, 2);
  assert.equal(complete.files.find((file) => file.path === "src/leaf.ts")?.fanIn, 2);
  assert.equal(complete.coverage.imports.unresolved, 2);
  assert.ok(complete.coverage.imports.records.some((record) => record.outcome === "excluded" && record.reason.includes("Syntax error")));
  assert.ok(complete.coverage.files.details.some((file) => file.path === "src/broken.ts" && file.reason.includes("Syntax error")));
  assert.ok(complete.files.every((file) => file.role === null));
  const beforeGraph = structuredClone(complete.files);
  buildGraph(complete.files, complete.coverage.imports.records);
  assert.deepEqual(complete.files, beforeGraph, "Graph calculation mutated its input");

  await put("packages/nested/package.json", '{"name":"nested"}');
  await put("packages/nested/tsconfig.json", '{"compilerOptions":{"baseUrl":".","paths":{"local/*":["source/*"]}}}');
  await put("packages/nested/source/entry.ts", 'export * from "local/leaf";');
  await put("packages/nested/source/leaf.ts", 'export const nested = true;');
  await put("src/workspace-import.ts", 'import "nested";');
  await put("src/escape.ts", 'import "../../outside";');
  await writeFile(join(temporary, "outside.ts"), "export const outside = true;");
  await symlink(join(temporary, "outside.ts"), join(fixture, "src/link.ts"));
  await put("src/link-import.ts", 'import "./link";');
  const nested = await parseRepository(fixture);
  reconciles(nested);
  assert.ok(nested.edges.some((edge) => edge.source === "packages/nested/source/entry.ts" && edge.target === "packages/nested/source/leaf.ts"));
  assert.equal(nested.files.find((file) => file.path === "packages/nested/source/leaf.ts")?.module, "packages/nested");
  assert.ok(nested.coverage.imports.records.some((record) => record.source === "src/workspace-import.ts" && record.outcome === "unresolved" && record.reason.includes("Repository package")));
  assert.ok(nested.coverage.imports.records.some((record) => record.source === "src/escape.ts" && record.outcome === "external"));
  assert.ok(nested.coverage.imports.records.some((record) => record.source === "src/link-import.ts" && record.outcome === "external"));
  assert.ok(nested.coverage.files.details.some((file) => file.path === "src/link.ts" && file.reason.includes("Symbolic link")));

  await put("packages/node-modes/package.json", '{"name":"node-modes","type":"module"}');
  await put("packages/node-modes/tsconfig.json", '{"compilerOptions":{"module":"NodeNext"}}');
  await put("packages/node-modes/leaf.ts", "export const value = 1;");
  await put("packages/node-modes/entry.mts", 'import "./leaf"; import "./leaf.js"; const lazy = () => import("./leaf.js");');
  await put("packages/node-modes/entry.cts", 'import "./leaf";');
  const nodeModes = await parseRepository(fixture);
  reconciles(nodeModes);
  const modeRecords = nodeModes.coverage.imports.records.filter((record) => record.source.startsWith("packages/node-modes/"));
  assert.equal(modeRecords.filter((record) => record.outcome === "unresolved").length, 1);
  assert.ok(modeRecords.some((record) => record.source.endsWith("entry.mts") && record.specifier === "./leaf" && record.outcome === "unresolved"));
  assert.ok(modeRecords.some((record) => record.source.endsWith("entry.cts") && record.outcome === "resolved"));

  execFileSync("git", ["init", "--quiet", fixture]);
  await put(".gitignore", "ignored/\nnode_modules/\n*.secret.ts\n");
  await put("ignored/hidden.ts", "export const hidden = true;");
  await put("token.secret.ts", "export const token = 'fixture';");
  await put("src/ignored-import.ts", 'import "../ignored/hidden";');
  await put("node_modules/excluded/index.ts", "export const dependency = true;");
  const gitResult = await parseRepository(fixture);
  reconciles(gitResult);
  assert.equal(gitResult.coverage.inventory, "git");
  assert.ok(gitResult.coverage.excludedEntries.some((entry) => entry.path === "ignored/"));
  assert.ok(gitResult.coverage.files.details.some((file) => file.path === "token.secret.ts" && file.reason === "Ignored by Git"));
  assert.ok(gitResult.coverage.imports.records.some((record) => record.source === "src/ignored-import.ts" && record.outcome === "excluded"));
  assert.deepEqual(await parseRepository(fixture), gitResult, "Parser output is not deterministic");

  const mixed = join(temporary, "mixed");
  await mkdir(mixed);
  await writeFile(join(mixed, "main.ts"), 'import "./helper.js"; import "./task.py";');
  await writeFile(join(mixed, "helper.js"), "export const helper = true;");
  await writeFile(join(mixed, "task.py"), "from missing import thing\n");
  await writeFile(join(mixed, "file.xyz"), "unknown source");
  let dispatches = 0;
  const replacement: LanguageParser = {
    ...typescriptParser, id: "replacement-typescript",
    async parse(context) {
      dispatches++;
      assert.ok(context.files.every((file) => ["typescript", "javascript"].includes(file.language)));
      return typescriptParser.parse(context);
    },
  };
  const mixedResult = await parseRepository(mixed, { parsers: [replacement] });
  reconciles(mixedResult);
  assert.equal(dispatches, 1);
  assert.equal(mixedResult.coverage.files.found, 4);
  assert.equal(mixedResult.files.length, 2);
  assert.equal(mixedResult.edges.length, 1);
  assert.equal(mixedResult.coverage.files.skipped, 2);
  assert.ok(mixedResult.languages.some((language) => language.language === "typescript" && language.parser === replacement.id));
  assert.ok(mixedResult.languages.some((language) => language.language === "python" && language.parser === "none"));
  assert.ok(mixedResult.coverage.files.details.some((file) => file.path === "task.py" && file.language === "python" && file.reason.includes("No parser available")));
  assert.ok(mixedResult.coverage.files.details.some((file) => file.path === "file.xyz" && file.language === "unknown"));
  assert.ok(mixedResult.coverage.imports.records.some((record) => record.specifier === "./task.py" && record.outcome === "excluded"));

  const unsupported = join(temporary, "unsupported");
  await mkdir(unsupported);
  await writeFile(join(unsupported, "main.py"), "from helper import value\n");
  await writeFile(join(unsupported, "helper.py"), "value = 1\n");
  const unsupportedResult = await parseRepository(unsupported, { parsers: [replacement] });
  reconciles(unsupportedResult);
  assert.equal(dispatches, 1, "TypeScript parser was called for a Python-only repository");
  assert.equal(unsupportedResult.coverage.files.found, 2);
  assert.equal(unsupportedResult.coverage.files.skipped, 2);
  assert.equal(unsupportedResult.files.length, 0);
  assert.equal(unsupportedResult.edges.length, 0);
  assert.equal(unsupportedResult.coverage.imports.found, 0);
  const noRegisteredParser = await parseRepository(mixed, { parsers: [] });
  reconciles(noRegisteredParser);
  assert.equal(noRegisteredParser.files.length, 0);
  assert.ok(noRegisteredParser.languages.some((language) => language.language === "typescript" && language.parser === "none"));
  await assert.rejects(parseRepository(mixed, { parsers: [typescriptParser, replacement] }), /Multiple parsers registered/);
  console.log("Language dispatch: mixed repository 4 found = 2 parsed + 2 skipped; Python-only 2 found = 0 parsed + 2 skipped, 0 edges; parser replacement verified.");

  const output = join(temporary, "result.mts");
  await writeRepository(gitResult, output);
  const imported: { repository: ParsedRepository } = await import(pathToFileURL(output).href);
  assert.deepEqual(imported.repository, gitResult);
  execFileSync(process.execPath, [resolve("node_modules/typescript/bin/tsc"), "--noEmit", "--strict", "--target", "ES2022", "--module", "NodeNext", "--moduleResolution", "NodeNext", "--allowImportingTsExtensions", "--skipLibCheck", output], { stdio: "pipe" });
  await assert.rejects(writeRepository(gitResult, output), /EEXIST/);
  console.log("Parser checks passed: aliases, nested packages, barrel and dynamic imports, deduplication, fan counts, syntax skips, exclusions, containment, determinism, typed output and read-back.");
} finally {
  await rm(temporary, { recursive: true, force: true });
}
