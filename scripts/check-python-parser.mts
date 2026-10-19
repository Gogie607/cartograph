import assert from "node:assert/strict";
import { mkdtemp, mkdir, writeFile, rm, symlink } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { createHash } from "node:crypto";
import { parseRepository, type ParsedRepository } from "../parser/index.mts";
import { repository } from "../data/preview-python-repository.mts";
import { foldRepository } from "../map/folding.mts";
import { layoutFolders } from "../map/layout.mts";
import { fileCategory } from "../map/categories.mts";

const root = await mkdtemp(join(tmpdir(), "cartograph-python-"));
async function put(path: string, text = "") {
  await mkdir(dirname(join(root, path)), { recursive: true });
  await writeFile(join(root, path), text);
}
function integrity(result: ParsedRepository) {
  const paths = new Set(result.files.map((file) => file.path));
  for (const edge of result.edges) assert.ok(paths.has(edge.source) && paths.has(edge.target));
  assert.equal(result.coverage.files.found, result.files.length + result.coverage.files.skipped);
  const imports = result.coverage.imports;
  assert.equal(imports.found, imports.resolved + imports.external + imports.unresolved + imports.excluded);
  assert.ok(imports.records.every((record) => record.outcome === "resolved" ? paths.has(record.target!) : record.target === null));
  assert.deepEqual(Object.keys(result).sort(), ["version", "adapter", "languages", "modules", "files", "edges", "coverage"].sort());
  for (const file of result.files) {
    assert.deepEqual(Object.keys(file).sort(), ["path", "language", "folder", "module", "lineCount", "contentHash", "isModule", "isDeclaration", "role", "fanIn", "fanOut"].sort());
  }
}
try {
  await put("pkg/__init__.py");
  await put("pkg/leaf.py", "value = 1\n");
  await put("pkg/nested/__init__.py");
  await put("pkg/nested/worker.py", "from .. import leaf\nfrom . import helper\nfrom ...escape import missing\n");
  await put("pkg/nested/helper.py", "value = 2\n");
  const text = [
    "import pkg", "import pkg.leaf", "from pkg import leaf", "from pkg.leaf import value",
    "from pkg.nested import worker", "import os", "import definitely_not_installed", "from pkg import *",
    "__import__('pkg.leaf')", "raise RuntimeError('repository code must never execute')",
  ].join("\n") + "\n";
  await put("main.py", text);
  await put(".venv/bogus.py", "this must not be read");
  await put("venv/bogus.py", "this must not be read");
  await put("__pycache__/bogus.py", "this must not be read");
  const result = await parseRepository(root);
  integrity(result);
  assert.equal(result.files.length, 6);
  assert.equal(result.languages.find((language) => language.language === "python")?.parser, "python");
  const edges = (source: string) => result.edges.filter((edge) => edge.source === source).map((edge) => edge.target).sort();
  assert.deepEqual(edges("main.py"), ["pkg/__init__.py", "pkg/leaf.py", "pkg/nested/__init__.py", "pkg/nested/worker.py"]);
  assert.deepEqual(edges("pkg/nested/worker.py"), ["pkg/__init__.py", "pkg/leaf.py", "pkg/nested/__init__.py", "pkg/nested/helper.py"]);
  for (const specifier of ["os", "definitely_not_installed"]) {
    assert.equal(result.coverage.imports.records.find((record) => record.specifier === specifier)?.outcome, "external");
  }
  assert.equal(result.coverage.imports.unresolved, 3);
  assert.equal(result.files.find((file) => file.path === "main.py")?.contentHash, createHash("sha256").update(text).digest("hex"));
  assert.equal(result.files.find((file) => file.path === "main.py")?.lineCount, 10);
  assert.ok(result.files.every((file) => fileCategory(file) === "Python"));
  assert.equal(result.coverage.excludedEntries.length, 3);
  assert.deepEqual(await parseRepository(root), result);
  // Each specified form must independently resolve to the expected real file.
  for (const expression of ["import pkg.leaf", "from pkg import leaf", "from pkg.leaf import value"]) {
    assert.ok(result.coverage.imports.records.some((record) => record.expression === expression && record.target === "pkg/leaf.py"));
  }
  await put("pkg/broken.py", "def invalid(:\n");
  await put("pkg/broken_import.py", "import pkg.broken\n");
  await symlink(join(root, "pkg/leaf.py"), join(root, "pkg/link.py"));
  await put("pkg/link_import.py", "import pkg.link\n");
  await put("namespace/leaf.py", "value = 1\n");
  await put("namespace_import.py", "import namespace.leaf\n");
  await put("collision.py", "value = 1\n");
  await put("collision/__init__.py", "value = 2\n");
  await put("collision_import.py", "import collision\n");
  const limitations = await parseRepository(root);
  integrity(limitations);
  assert.ok(limitations.coverage.files.details.some((file) => file.path === "pkg/broken.py" && file.reason.includes("Syntax error")));
  assert.ok(limitations.coverage.files.details.some((file) => file.path === "pkg/link.py" && file.reason.includes("Symbolic link")));
  for (const specifier of ["pkg.broken", "pkg.link"]) assert.ok(limitations.coverage.imports.records.some((record) => record.specifier === specifier && record.outcome === "excluded"));
  assert.ok(limitations.coverage.imports.records.some((record) => record.specifier === "namespace.leaf" && record.outcome === "external"));
  assert.ok(limitations.coverage.imports.records.some((record) => record.specifier === "collision" && record.outcome === "unresolved"));

  // A package attribute can shadow a real child file; do not invent that edge.
  const bomText = "\ufeffimport os\n";
  await put("bom.py", bomText);
  const bom = await parseRepository(root);
  assert.equal(bom.files.find((file) => file.path === "bom.py")?.contentHash, createHash("sha256").update(bomText).digest("hex"));
  await put("shadow/__init__.py", "leaf = 42\n");
  await put("shadow/leaf.py", "value = 1\n");
  await put("shadow_import.py", "from shadow import leaf\n");
  const shadow = await parseRepository(root);
  assert.ok(shadow.edges.some((edge) => edge.source === "shadow_import.py" && edge.target === "shadow/__init__.py"));
  assert.ok(!shadow.edges.some((edge) => edge.source === "shadow_import.py" && edge.target === "shadow/leaf.py"));
  await put("rooted/__init__.py");
  await put("rooted/leaf.py", "value = 1\n");
  await put("rooted/entry.py", "from . import leaf\nimport rooted.leaf\n");
  const rooted = await parseRepository(join(root, "rooted"));
  assert.deepEqual(rooted.edges.filter((edge) => edge.source === "entry.py").map((edge) => edge.target), ["__init__.py", "leaf.py"]);
  await put("source/src/package/__init__.py");
  await put("source/src/package/leaf.py", "value = 1\n");
  await put("source/main.py", "from package import leaf\n");
  const sourceLayout = await parseRepository(join(root, "source"));
  assert.deepEqual(sourceLayout.edges.map((edge) => edge.target), ["src/package/__init__.py", "src/package/leaf.py"]);

  const mixed = join(root, "mixed");
  await put("mixed/main.py", "from helper import value\n");
  await put("mixed/helper.py", "value = 1\n");
  await put("mixed/entry.ts", "export const value = 1;\n");
  const dominant = await parseRepository(mixed);
  assert.equal(dominant.files.length, 2);
  assert.ok(dominant.files.every((file) => file.language === "python"));
  assert.ok(dominant.coverage.files.details.some((file) => file.path === "entry.ts" && file.reason.includes("Not selected")));
  assert.match(dominant.coverage.configurations[0].messages[0], /mixed repository/);
  await put("mixed/leaf.ts", "export const value = 1;\n");
  await assert.rejects(parseRepository(mixed), /Ambiguous mixed-language.*--parser/);
  const explicit = await parseRepository(mixed, { parser: "typescript" });
  assert.equal(explicit.files.length, 2);
  assert.ok(explicit.files.every((file) => file.language === "typescript"));
  await put("mixed/third.ts", "export const value = 1;\n");
  assert.ok((await parseRepository(mixed)).files.every((file) => file.language === "typescript"));
  await assert.rejects(parseRepository(mixed, { parser: "missing" }), /Unknown parser/);

  integrity(repository);
  const folded = foldRepository(repository.files, repository.edges);
  const owners = new Set(folded.nodes.map((node) => node.id));
  assert.ok(folded.nodes.length <= 24 && folded.nodes.every((node) => node.files.length > 1));
  assert.equal(folded.nodes.reduce((sum, node) => sum + node.files.length, 0), repository.files.length);
  assert.ok(folded.edges.every((edge) => owners.has(edge.source) && owners.has(edge.target)));
  const boxes = folded.nodes.map((node) => ({ id: node.id, width: 480, height: 312 }));
  const positions = layoutFolders(boxes, folded.edges);
  assert.deepEqual(layoutFolders([...boxes].reverse(), [...folded.edges].reverse()), positions);
  for (let i = 0; i < boxes.length; i++) for (let j = i + 1; j < boxes.length; j++) {
    const a = positions.get(boxes[i].id)!, b = positions.get(boxes[j].id)!;
    assert.ok(a.x + 480 <= b.x || b.x + 480 <= a.x || a.y + 312 <= b.y || b.y + 312 <= a.y);
  }
  console.log("Python import forms: 7 checked (absolute, dotted, from-module, from-package, relative, package init, external); 0 invented endpoints.");
  console.log("Selection: Python and TypeScript majorities, tied ambiguity, explicit override and unknown parser checked. Syntax skips, symlinks, namespaces, collisions, exclusions and determinism passed.");
  console.log(`Python fixture: ${repository.files.length} files, ${repository.edges.length} internal edges, ${repository.coverage.imports.external} external, ${repository.coverage.imports.unresolved} unresolved; ${folded.nodes.length} folded nodes, ${folded.edges.length} folded edges; 0 singletons or missing endpoints.`);
} finally {
  await rm(root, { recursive: true, force: true });
}
