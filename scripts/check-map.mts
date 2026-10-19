import assert from "node:assert/strict";
import { repository } from "../data/preview-repository.mts";
import { foldRepository, uniqueLabels } from "../map/folding.mts";
import { layoutFolders } from "../map/layout.mts";
import type { ParsedFile } from "../parser/types.mts";

const result = foldRepository(repository.files, repository.edges);
const ids = new Set(result.nodes.map((node) => node.id));
assert.ok(result.nodes.length <= 24);
assert.ok(result.nodes.every((node) => node.files.length > 1));
assert.equal(result.nodes.reduce((sum, node) => sum + node.files.length, 0), repository.files.length);
assert.equal(result.owner.size, repository.files.length);
assert.ok(result.edges.every((edge) => ids.has(edge.source) && ids.has(edge.target)));
assert.equal(result.edges.reduce((sum, edge) => sum + edge.count, 0), repository.edges.filter((edge) => result.owner.get(edge.source) !== result.owner.get(edge.target)).length);
for (const node of result.nodes) {
  assert.equal(node.fanIn, new Set(repository.edges.filter((edge) => result.owner.get(edge.target) === node.id && result.owner.get(edge.source) !== node.id).map((edge) => edge.source)).size);
}
assert.deepEqual(foldRepository([...repository.files].reverse(), [...repository.edges].reverse()).nodes, result.nodes);
assert.deepEqual(foldRepository([...repository.files].reverse(), [...repository.edges].reverse()).edges, result.edges);
const boxes = result.nodes.map((node) => ({ id: node.id, width: 160, height: 64 + Math.round(Math.sqrt(node.fanIn) * 14) }));
const positions = layoutFolders(boxes, result.edges);
assert.deepEqual(layoutFolders(boxes, result.edges), positions);
assert.deepEqual(layoutFolders([...boxes].reverse(), [...result.edges].reverse()), positions);
for (const box of boxes) {
  const point = positions.get(box.id);
  assert.ok(point && Number.isFinite(point.x) && Number.isFinite(point.y));
}
for (let i = 0; i < boxes.length; i++) for (let j = i + 1; j < boxes.length; j++) {
  const a = boxes[i], b = boxes[j], pa = positions.get(a.id)!, pb = positions.get(b.id)!;
  assert.ok(pa.x + a.width <= pb.x || pb.x + b.width <= pa.x || pa.y + a.height <= pb.y || pb.y + b.height <= pa.y, `${a.id} overlaps ${b.id}`);
}

function file(path: string): ParsedFile {
  return { path, folder: path.includes("/") ? path.slice(0, path.lastIndexOf("/")) : ".", module: ".", language: "typescript", lineCount: 1, contentHash: "fixture", isModule: true, isDeclaration: false, role: null, fanIn: 0, fanOut: 0 };
}
// Deep siblings must accumulate into their parent before that parent's decision.
const nested = foldRepository(["one/a/x.ts", "one/b/y.ts", "two/c/z.ts", "two/d/w.ts"].map(file), []);
assert.deepEqual(nested.nodes.map((node) => [node.id, node.files.length]), [["one", 2], ["two", 2]]);
// Every threshold is recomputed from the original directories, not previous merges.
const many = Array.from({ length: 25 }, (_, i) => [file(`p${i}/a.ts`), file(`p${i}/b.ts`)]).flat();
const raised = foldRepository(many, []);
assert.equal(raised.threshold, 3);
assert.deepEqual(raised.nodes.map((node) => [node.id, node.files.length]), [[".", 50]]);
const labels = uniqueLabels(["packages/a/src", "packages/b/src", "examples/react", "examples/react/index.ts", "packages/a/index.ts"]);
assert.equal(new Set(labels.values()).size, labels.size);
assert.equal(labels.get("packages/a/src"), "a/src");
assert.equal(labels.get("examples/react"), "react");

const expanded = boxes.map((box, index) => index % 3 === 0 ? { ...box, width: 480, height: 312 } : box);
const expandedPositions = layoutFolders(expanded, result.edges);
for (let i = 0; i < expanded.length; i++) for (let j = i + 1; j < expanded.length; j++) {
  const a = expanded[i], b = expanded[j], pa = expandedPositions.get(a.id)!, pb = expandedPositions.get(b.id)!;
  assert.ok(pa.x + a.width <= pb.x || pb.x + b.width <= pa.x || pa.y + a.height <= pb.y || pb.y + b.height <= pa.y, `Expanded ${a.id} overlaps ${b.id}`);
}

console.log(`Files: ${repository.files.length}; folded nodes: ${result.nodes.length}; files/node: ${(repository.files.length / result.nodes.length).toFixed(1)}; threshold: ${result.threshold}`);
console.log(`Files/node range: ${Math.min(...result.nodes.map((node) => node.files.length))}–${Math.max(...result.nodes.map((node) => node.files.length))}; singleton nodes: 0`);
console.log(`Folded edges: ${result.edges.length}; parser edges: ${repository.edges.length}; absent endpoints: 0`);
console.log("Deepest-first folding, fresh thresholds, exact accounting, fan-in, unique labels and deterministic non-overlapping layout passed.");
