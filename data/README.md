Preview data is the unmodified version 2 output of the standalone parser, generated
from the local h3js/h3 checkout at commit
`48d650be89422cd5d06f4cd7a02fcbf4300d96df`.

Generated with:

```sh
npm run parse -- /tmp/cartograph-preview-h3 --out data/preview-repository.mts
```

The output includes every coverage record. Unresolved imports do not
become edges. Folding and rendering are derived separately, without changing the
parser data. This fixture needs no database or network at runtime.

The Python fixture is unmodified parser output from
`/home/ronald/PycharmProjects/runweaver-ml/src/runweaver_ml/dataset_management`,
repository commit `a138a19831461820dbda3b254de9ca43f55b6d6f` (the checkout's only
reported change was deletion of the unrelated `README_VERSIONS.md`).

```sh
npm run parse -- /home/ronald/PycharmProjects/runweaver-ml/src/runweaver_ml/dataset_management --out data/preview-python-repository.mts
npm run check:python-parser
```

Open `/preview?example=python` for this fixture; `/preview` or
`/preview?example=typescript` retains the original h3 example. Both use the same
shell and map component, folding and layout. Only example data and its label vary.
Language categories use a generic fallback label for registered languages.

Comparison using the parent repository: dataset_management has 29 files and 108
edges with both endpoints in that component; phase_control has 22 files and 60
such edges. The selected dataset_management directory is parsed independently,
so dependencies outside that directory remain external or unresolved.

Phase 04a terminal results: 31 discovered entries = 29 Python graph files + 2
skipped Markdown files; 106 unique internal edges; 225 import coverage records =
176 resolved + 48 external + 1 unresolved. Regular package initialization is
included, so one import statement can yield multiple resolved records. The
unresolved form is `from .layout.dataset_iteration_policy import *` in
`engine/multi_dataset_manager.py:5`. Missing local modules share the external
bucket with standard-library and installed packages, without environment lookup.

Folding produces 8 nodes and 24 edges, with no singleton nodes or missing
endpoints. The real input was parsed twice and matched the fixture exactly.
Existing TypeScript parser and Phase 4 map checks pass unchanged (201 files,
565 internal edges, 15 folded nodes, 52 folded edges).
