import assert from "node:assert/strict";
import { repository as typescript } from "../data/preview-repository.mts";
import { repository as python } from "../data/preview-python-repository.mts";
import { categoryCounts, repositoryDetails } from "../map/details.mts";
import { foldRepository } from "../map/folding.mts";

for (const [name, repository] of [["TypeScript", typescript], ["Python", python]] as const) {
  const before = structuredClone(repository);
  const details = repositoryDetails(repository.files, repository.edges);
  let dependencies = 0, dependents = 0;
  for (const file of repository.files) {
    const neighbours = details.neighbours.get(file.path)!;
    assert.equal(neighbours.dependencies.length, file.fanOut);
    assert.equal(neighbours.dependents.length, file.fanIn);
    assert.equal(new Set(neighbours.dependencies).size, neighbours.dependencies.length);
    assert.equal(new Set(neighbours.dependents).size, neighbours.dependents.length);
    for (const target of neighbours.dependencies) {
      assert.ok(details.byPath.has(target));
      assert.ok(details.neighbours.get(target)!.dependents.includes(file.path));
    }
    dependencies += neighbours.dependencies.length;
    dependents += neighbours.dependents.length;
  }
  assert.equal(dependencies, repository.edges.length);
  assert.equal(dependents, repository.edges.length);
  assert.equal(details.entryFiles.length + details.mostImported.length, repository.files.length);
  assert.ok(details.entryFiles.every((file) => file.fanIn === 0));
  assert.ok(details.mostImported.every((file, index, files) => file.fanIn > 0 && (index === 0 || files[index - 1].fanIn >= file.fanIn)));
  assert.equal(details.unidentified, repository.files.filter((file) => file.role === null).length);
  for (const folder of foldRepository(repository.files, repository.edges).nodes) {
    assert.equal(categoryCounts(folder.files).reduce((sum, [, count]) => sum + count, 0), folder.files.length);
  }
  assert.deepEqual(repositoryDetails([...repository.files].reverse(), [...repository.edges].reverse()).mostImported, details.mostImported);
  assert.deepEqual(repositoryDetails([...repository.files].reverse(), [...repository.edges].reverse()).entryFiles, details.entryFiles);
  assert.deepEqual(repository, before, "Detail calculations mutated parser output");
  console.log(`${name}: ${repository.files.length} files; ${dependencies} dependency rows = ${dependents} dependent rows = ${repository.edges.length} edges; ${details.entryFiles.length} starting files; ${details.unidentified} unidentified.`);
}
assert.deepEqual(repositoryDetails([], []).entryFiles, []);
assert.throws(() => repositoryDetails([], [{ source: "missing", target: "also-missing", kinds: ["import"] }]), /Missing detail endpoint/);
console.log("Detail counts, rankings, category totals, real endpoints, empty input and purity passed.");
