"""Parse supplied source text only. Never load modules from the repository."""
import ast
import json
import sys

results = []
for source in json.load(sys.stdin):
    try:
        tree = ast.parse(source["text"], filename=source["path"])
        bindings = set()
        def collect_bindings(node):
            if isinstance(node, (ast.FunctionDef, ast.AsyncFunctionDef, ast.ClassDef)):
                bindings.add(node.name)
                return
            if isinstance(node, ast.Name) and isinstance(node.ctx, ast.Store):
                bindings.add(node.id)
            if isinstance(node, ast.Import):
                bindings.update(name.asname or name.name.split(".")[0] for name in node.names)
            if isinstance(node, ast.ImportFrom):
                bindings.update(name.asname or name.name for name in node.names)
            for child in ast.iter_child_nodes(node):
                collect_bindings(child)
        collect_bindings(tree)
        imports = []
        for node in ast.walk(tree):
            if not isinstance(node, (ast.Import, ast.ImportFrom, ast.Call)):
                continue
            common = dict(line=node.lineno, column=node.col_offset + 1,
                          expression=ast.get_source_segment(source["text"], node) or "") if hasattr(node, "lineno") else {}
            if isinstance(node, ast.Import):
                for name in node.names:
                    imports.append(dict(common, form="import", module=name.name, names=[], level=0))
            elif isinstance(node, ast.ImportFrom):
                imports.append(dict(common, form="from", module=node.module or "",
                                    names=[name.name for name in node.names], level=node.level))
            elif isinstance(node, ast.Call):
                target = node.func
                if (isinstance(target, ast.Name) and target.id == "__import__") or (
                    isinstance(target, ast.Attribute) and target.attr == "import_module"
                ):
                    imports.append(dict(common, form="dynamic", module="", names=[], level=0))
        results.append(dict(path=source["path"], error=None, imports=imports, bindings=sorted(bindings)))
    except (SyntaxError, ValueError, RecursionError) as error:
        results.append(dict(path=source["path"], error=str(error), imports=[], bindings=[]))
json.dump(results, sys.stdout)
