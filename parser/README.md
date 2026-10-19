# Standalone repository parser

Requires Node 24 (native TypeScript stripping), the installed dependencies, and
`python3` for Python analysis. No target-project dependencies are installed or run.

```bash
npm run parse -- .
npm run parse -- /path/to/repository --out /tmp/repository-map.mts
npm run check:parser
npm run check:python-parser
```

The output path must be new. Output is a TypeScript module exporting `repository`
with `satisfies ParsedRepository`; its relative type import points at `types.mts`.
The parser also exports `parseRepository(directory, { adapter?, parsers?, parser? }?)` for plain scripts.
It reads disk only. Cloning is a separate operation.

## Language dispatch

Source extensions determine language, never repository names. TypeScript (including
JavaScript) and Python are registered concrete parsers. The parser with the most
supported source files is selected automatically. Other supported languages are
skipped with the selection counts and reason; a configuration coverage message
reports mixed repositories. Ties fail explicitly. Use `--parser python` or
`--parser typescript` (or the API's `parser` option) to choose explicitly.
Ignored entries do not vote. Unknown and unregistered languages use `noParseParser`
and emit named skips, with no invented nodes or edges.

`LanguageParser` in `languages/contract.mts` accepts assigned files and returns the
shared files/imports/modules/skips/configuration contract. It exposes no compiler
or syntax-tree types. Repository inventory, dispatch, coverage, and graph calculations
are outside the concrete parser. TypeScript's AST and resolver live together under
`languages/typescript/`. A registration supplies its ID, extension/language mapping,
and parse implementation; adding or replacing one requires no change to the walker.

The `parsers` option replaces the registry for a call. To extend it, pass
`[...defaultLanguageParsers, yourParser]`. To replace TypeScript, pass the replacement
alone. An empty registry uses the fallback for every file. Duplicate registrations
and parsers that fail to account for their assigned files fail loudly.

## Selection and file accounting

Git repositories use Git's tracked and non-ignored untracked inventory, including
whole source directories without a file-count or size cutoff. Ignored individual
files have a skip reason. Ignored directories and `.git/` are reported as pruned
entries, without pretending to count files inside them. In a directory without Git,
both inventory modes prune dependency and generated directories: `node_modules`,
`.git`, `.venv`, `venv`, `__pycache__`, Python tool caches, `*.egg-info`, `build`
and `dist`. It does
not interpret ignore files outside a Git repository. Git failures other than
"not a repository" or a missing Git executable fail loudly.

`found = parsed + skipped` counts inventoried file entries, excluding the reported
pruned directories. Every skipped entry has a path, detected language and reason.
With the current registry, only `.ts`, `.tsx`,
`.mts`, `.cts`, `.js`, `.jsx`, `.mjs`, `.cjs`, `.py`, `.pyw`, and `.pyi` become nodes. Declaration files are
included. Non-source files, unreadable or invalid UTF-8 files, symbolic links, and
syntax failures are reported as skipped. No source is executed.

`folder` is always the exact parent directory relative to the repository (`.` for
the root), never a top-level approximation. In the TypeScript implementation,
`module` is the nearest package.json
directory, also repository-relative; `modules` includes its actual package name
where present. `isModule` separately records TypeScript's external-module predicate.
Line counts include a final unterminated line but not a phantom line after a final
newline. SHA-256 covers the original UTF-8 content, including a BOM if present.

## Imports and graph contract

ts-morph reads import declarations (including type-only and side-effect imports),
re-exports, and dynamic imports. Dynamic string literals and substitution-free
template literals resolve; computed expressions are unresolved with a named reason.
Every occurrence has a source location, expression, kind, outcome, target when
known, and reason. Type-query `import()` and import-equals `require()` syntax are
explicitly excluded; ordinary `require()` calls are outside phase 3.

Resolution uses the TypeScript compiler bundled with ts-morph, the nearest
`tsconfig.json` or `jsconfig.json`, and its inherited options. This includes path
aliases, index files and TypeScript's `.js` to `.ts` resolution. Without a config,
the default is ESNext with Bundler resolution. Compiler configuration errors are
reported and prevent affected imports from being guessed. Config include/exclude
patterns do not truncate the structural file inventory.

A graph edge exists only when the selected parser resolves an import to another parsed
repository file. External dependencies, ignored or unsupported targets, and failures
remain coverage records. A declared external package without installed dependencies
is labeled as such; it never creates a file node. A known repository package with
an absent workspace link or built entry remains unresolved. Undeclared unresolved packages
and aliases remain unresolved. Imports that escape the repository, including through
symlinks, are external. CSS, JSON and other non-code targets never become edges.

Edges are unique directed source/target pairs, preserving the distinct import kinds.
Fan-in and fan-out count those unique pairs, not import occurrences. `buildGraph`
is a pure function and rejects endpoints absent from the file list. Output version
2 lives in `types.mts`, adding language information to files, skips and repository
reports; version 1 outputs must be regenerated. Paths are portable, repository-relative paths. All occurrence
records remain in the output, including the full set of failure examples.

`FrameworkAdapter` is the boundary for file classification. The only implementation
in this phase is `noFrameworkAdapter`, which returns no roles. There is no framework
detection, framework-specific parsing, UI, database access, or network access here.
Framework classification receives path, language and source text, independently
of the language parser's private AST representation.

## Python resolution

The Node parser reads regular UTF-8 files and sends text to our isolated helper via
stdin. `python3 -I -S` runs Python's `ast.parse`, without importing, compiling for
execution, evaluating, or running repository code. Missing Python, a helper failure,
or a timeout fails loudly. Syntax errors produce named skips.

Regular packages require contiguous `__init__.py` markers. Root modules, ordinary
packages, `src/` packages and a selected package directory are supported. `module`
is the top package directory inside the selected root (or `.`); `isModule` is true
for Python sources and `.pyi` files are declarations. Package initialization and
resolved leaf modules both produce real file dependencies. From-imports resolve a
child file only when the base is a unique package and the name is not already
bound in its source. Module attributes do not become invented file nodes.

Standard-library, installed, missing and namespace modules without a unique local
match are external; no environment or dependency search is performed. Duplicate
module identities, invalid relative package traversal and star imports remain
unresolved. Recognizable `__import__` and `.import_module` calls are reported as
unresolved dynamic imports; aliased or custom loaders are not recovered. Packages
with nonstandard source roots or runtime path changes are not guessed. Package
binding detection is conservative and may omit child edges for conditional bindings.
Non-UTF-8 source is skipped. These limitations stay in coverage, not in the canvas.

## Verification

`check:parser` creates and removes temporary fixtures. It checks accounting, exact
folders, aliases, nested package/config boundaries, barrel and dynamic imports,
edge deduplication, fan counts, syntax errors, exclusions, symlinks, deterministic
output, a single unresolved import after a rename, and compilation/read-back of a
generated typed data file. It also verifies mixed-language dispatch, the Python-only
fallback, replacement of the registered TypeScript parser, and an empty registry.
It uses Node assertions, Git and the existing TypeScript
compiler; no test package or browser driver is installed.

`check:python-parser` checks seven import forms, both automatic majority choices,
ties, explicit selection, exclusions, syntax errors, symlinks, namespace and module
ambiguity, attribute shadowing, root/src packages, deterministic output, the shared
contract and Python fixture folding/layout. Browser acceptance remains manual.
