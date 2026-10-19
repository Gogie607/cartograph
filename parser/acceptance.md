# Phase 3 terminal acceptance

Run on 2026-10-18 using Node 24.21.0 and ts-morph 28.0.0, including language dispatch
and version 2 output.

| Repository | Files found | Parsed | Skipped | Exact parent folders | Edges |
| --- | ---: | ---: | ---: | ---: | ---: |
| Cartograph, including this report | 71 | 34 | 37 | 14 | 44 |
| TanStack Query | 3,656 | 1,191 | 2,465 | 376 | 1,469 |

Cartograph skips: 34 unsupported non-source files and 3 Git-ignored files. The
`.git/`, `.next/` and `node_modules/` directories are reported as pruned entries,
outside the file totals. TanStack Query skips: 2,423 unsupported files and 42
symbolic links. Each individual skipped file and its reason is included in both the
terminal report and the typed output. Every output file has its exact parent folder.

The external repository was shallow-cloned from `https://github.com/TanStack/query`
at commit `a8fe350b8a5dc3a0c0e68bcd72caf29c2cdd2223`. No dependencies were installed
in that clone. Of 247 re-export occurrences, 231 resolve to parsed files. The other
16 are fully accounted for: 12 refer to repository packages without a resolvable
workspace/build entry, and 4 target unsupported `.svelte` files. Each has a path,
line, specifier and named reason in the output; none creates a guessed edge.

Cartograph has 107 import occurrences: 47 resolved, 58 external, 1 excluded CSS
import, and 1 computed dynamic import in the verification script that cannot be
resolved statically. TanStack Query has 4,572 occurrences: 1,669 resolved, 1,599
external, 94 excluded and 1,210 unresolved. Missing dependencies/workspace entries
are reported; the clone is not made to appear fully resolved.

The controlled rename check starts with a resolved import, renames its target and
reruns the parser. It produces exactly one unresolved import, `src/main.ts:1` ->
`./leaf`, with the reason that TypeScript cannot resolve the local path. The fixture
is restored and removed afterward.

Typed output is written with `satisfies ParsedRepository`, imported back into Node,
and compared with the original result. The generated fixture and both repository
outputs are separately checked with strict TypeScript. Additional terminal checks
cover aliases, barrels, literal/computed dynamic imports, duplicate edges, fan
counts, package boundaries, NodeNext modes, malformed source, Git exclusions,
symlinks, containment and deterministic output.

Language dispatch checks: a mixed fixture has 4 files (1 TypeScript, 1 JavaScript,
1 Python, 1 unknown), with 2 parsed and 2 explicitly skipped. Its single edge comes
from a real TypeScript-to-JavaScript import. A Python-only fixture has 2 files,
0 parsed, 2 skipped, 0 imports and 0 edges. A replacement TypeScript registration
is invoked for supported files only; an empty registry falls back for every file.
All per-language counts reconcile. The TanStack run preserves all 1,191 previous
file records and 1,469 edges, adding only language metadata to those records.

Commands:

```bash
npm run parse -- . --out /tmp/cartograph-language-project.mts
npm run parse -- /tmp/cartograph-phase3-query --out /tmp/cartograph-language-query.mts
npm run check:parser
```

The output paths must be new. Complete path-by-path reports from this run are in
`/tmp/cartograph-language-project.log` and
`/tmp/cartograph-language-query.log`.
