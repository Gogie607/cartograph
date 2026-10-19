# Phase 04a — Python repository parser

**Goal.** A Python repository produces the same kind of file-and-dependency graph as a TypeScript repository, using the existing parser selection hooks and without changing the canvas.

## Build

- Keep TypeScript as the primary, existing parser. Add a Python parser through the language-selection mechanism introduced earlier. Do not replace the TypeScript parser or introduce a second graph format.
- Detect the language from the repository's source files, not from its name. Select the appropriate parser automatically for a repository dominated by supported Python or TypeScript files. If detection is ambiguous or the repository mixes languages, report that clearly rather than silently choosing the wrong parser. An explicit parser selection may be used to resolve ambiguity.
- Parse Python source statically. Use Python's syntax tree or an equivalent reliable parser. Do not import, execute, or evaluate repository code to discover dependencies.
- Discover Python source files and their module relationships, including import x, import x.y, from x import y, relative imports, and package __init__.py files. Resolve dependencies to files inside the selected repository where possible.
- Treat imports of the standard library, installed packages, and otherwise unresolved modules as external. Do not invent internal edges for them. Preserve useful diagnostics or counts for unresolved imports without making them canvas nodes unless the existing graph contract already supports that.
- Produce the existing typed parser output unchanged. File identities, paths, categories, and edge endpoints must follow the same conventions the TypeScript parser uses. Adapt Python analysis to that contract; do not adapt the canvas to Python.
- Reuse the existing repository traversal, exclusion rules, language-dispatch hooks, and graph validation where available. Keep Python-specific import resolution inside the Python parser.
- Run the Python parser against a real Python repository with meaningful package nesting and cross-module imports. Check a representative output fixture into the project using the same scaffolding approach as Phase 4.
- Render that output through the existing Phase 4 preview and canvas. Folding, panels, edge routing, selection highlighting, and layout must work without Python-specific rendering branches.

## Constraints


- Do not modify the Phase 4 shell, canvas, folding algorithm, layout rules, or visual styling to accommodate Python. A parser output mismatch is a parser or contract issue, not a reason to special-case the view.
- Preserve existing TypeScript parsing behavior and its tests. Parser selection must not regress the TypeScript example.
- Do not install or execute the target Python project's dependencies. No runtime introspection, imports, or code execution.
- Resolve relative imports using Python package/module paths, not naive string matching. Handle __init__.py and from package import module where the imported name resolves to a repository file.
- Avoid false internal edges. Dynamic imports, star imports, namespace-package ambiguity, and names that cannot be resolved statically may remain unresolved; report limitations rather than guessing.
- Exclude generated environments and irrelevant directories using existing project conventions (for example .venv, venv, __pycache__, and build artifacts where applicable).
- Keep the parser replaceable. Do not hard-code Python versus TypeScript branching throughout the application.
- This phase adds repository dependency parsing, not Python class/function call graphs, runtime data flow, component nodes, or a new graph designer.
- Use the local python package /home/ronald/PycharmProjects/runweaver-ml as a test subject. Select either sub component that produces the most nodes/edges

## Acceptance check

Count these and report the numbers. No browser, no judgement.
1. Language selection: A Python fixture selects the Python parser, and the existing TypeScript fixture still selects the TypeScript parser. Ambiguous or mixed-language selection is handled explicitly.
2. File coverage: Report discovered Python files, emitted graph files/nodes, internal import edges, and unresolved or external imports for the selected Python repository.
3. Import correctness: Tests cover absolute imports, dotted imports, from ... import ..., relative imports, package __init__.py, and a genuinely external import. Assert the expected internal edges and absence of invented edges.
4. Graph integrity: Every internal edge refers to source and target files that exist in the emitted graph. Output conforms to the existing TypeScript graph contract, with no canvas-specific or Python-only schema fields.
5. Regression: Existing TypeScript parser and Phase 4 map checks continue to pass. The same Python input produces deterministic output.
Then two of mine, five seconds each:
6. Open the Python repository in the existing preview. It shows the familiar folded map; opening a folder reveals file rows, and the edges reconnect to those rows.
7. Select a Python file or folded panel. Its relevant edges highlight and unrelated elements dim, exactly as they do for TypeScript. No separate Python canvas is involved.
Report: Which Python repository was used, how the language was detected, the counts above, any import forms left unresolved, and whether existing TypeScript behavior changed. Stop after this phase; do not begin Phase 5.