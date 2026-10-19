import { createHash } from "node:crypto";
import { lstat, readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { Node, Project, SyntaxKind, ts, type SourceFile } from "ts-morph";
import { portable } from "../../inventory.mts";
import { createResolver } from "./resolution.mts";
import type { ImportKind, ImportRecord, ParsedFile } from "../../types.mts";
import type { LanguageParser, LanguageParserContext, LanguageParseResult } from "../contract.mts";

async function parseTypeScript({ root, files: selectedFiles, excludedFiles, adapter }: LanguageParserContext): Promise<LanguageParseResult> {
  const skipped = new Map(excludedFiles);
  const languages = new Map(selectedFiles.map(({ path, language }) => [path, language]));
  const sources = new Map<string, SourceFile>();
  const contents = new Map<string, string>();
  // Parsing is in memory; resolution separately reads disk with TypeScript's own resolver.
  const project = new Project({ useInMemoryFileSystem: true, skipLoadingLibFiles: true, compilerOptions: { allowJs: true } });
  for (const { path } of selectedFiles) {
    if (skipped.has(path)) continue;
    try {
      const absolute = join(root, path);
      const info = await lstat(absolute);
      if (!info.isFile()) { skipped.set(path, info.isSymbolicLink() ? "Symbolic link is not followed" : "Not a regular file"); continue; }
      const bytes = await readFile(absolute);
      const text = new TextDecoder("utf-8", { fatal: true, ignoreBOM: true }).decode(bytes);
      const source = project.createSourceFile(absolute, text);
      sources.set(path, source);
      contents.set(path, text);
    } catch (error) {
      skipped.set(path, `Could not read or parse file: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  // Add the complete inventory before asking for diagnostics, avoiding one rebuilt
  // TypeScript program for every file. Files with syntax errors never become nodes.
  const invalid: SourceFile[] = [];
  const program = project.getProgram();
  for (const [path, source] of sources) {
    const diagnostics = program.getSyntacticDiagnostics(source);
    if (diagnostics.length) {
      skipped.set(path, diagnostics.map((diagnostic) => `Syntax error TS${diagnostic.getCode()}: ${ts.flattenDiagnosticMessageText(diagnostic.compilerObject.messageText, " ")}`).join("; "));
      sources.delete(path);
      contents.delete(path);
      invalid.push(source);
    }
  }
  for (const source of invalid) project.removeSourceFile(source);

  const resolver = createResolver(root, new Set(sources.keys()), skipped);
  // Discover package identities before resolving: an unbuilt workspace package
  // must not be mistaken for an external dependency merely because its link is absent.
  for (const source of sources.values()) resolver.packageFor(source.getFilePath());
  const files: ParsedFile[] = [];
  const imports: ImportRecord[] = [];
  const modules = new Map<string, { path: string; name: string | null }>();
  for (const [path, source] of sources) {
    const text = contents.get(path);
    if (text === undefined) throw new Error(`Missing parsed content: ${path}`);
    const language = languages.get(path);
    if (!language) throw new Error(`Missing detected language: ${path}`);
    const boundary = resolver.packageFor(source.getFilePath());
    modules.set(boundary.path, { path: boundary.path, name: boundary.name });
    files.push({
      path, language, folder: portable(dirname(path)), module: boundary.path,
      lineCount: text.length === 0 ? 0 : text.split(/\r\n|\r|\n/).length - (/\r\n$|[\r\n]$/.test(text) ? 1 : 0),
      contentHash: createHash("sha256").update(text).digest("hex"),
      isModule: ts.isExternalModule(source.compilerNode), isDeclaration: source.isDeclarationFile(),
      role: adapter.classifyFile({ path, language, text }), fanIn: 0, fanOut: 0,
    });

    function record(node: Node, kind: ImportKind, literal?: Node, excludedReason?: string) {
      const position = source.getLineAndColumnAtPos(node.getStart());
      const specifier = literal && (Node.isStringLiteral(literal) || Node.isNoSubstitutionTemplateLiteral(literal)) ? literal.getLiteralText() : null;
      const location = literal && (Node.isStringLiteral(literal) || Node.isNoSubstitutionTemplateLiteral(literal)) ? literal.compilerNode : undefined;
      const resolution = excludedReason
        ? { outcome: "excluded" as const, target: null, reason: excludedReason }
        : specifier === null
          ? { outcome: "unresolved" as const, target: null, reason: "Dynamic import is not a literal string; target cannot be determined statically" }
          : resolver.resolveImport(specifier, source, location);
      imports.push({ source: path, ...position, kind, specifier, expression: (literal ?? node).getText(), ...resolution });
    }

    source.forEachDescendant((node) => {
      if (Node.isImportDeclaration(node)) record(node, "import", node.getModuleSpecifier());
      else if (Node.isExportDeclaration(node)) {
        const specifier = node.getModuleSpecifier();
        if (specifier) record(node, "re-export", specifier);
      } else if (Node.isCallExpression(node) && node.getExpression().getKind() === SyntaxKind.ImportKeyword) {
        record(node, "dynamic-import", node.getArguments()[0]);
      } else if (Node.isImportEqualsDeclaration(node) && ts.isExternalModuleReference(node.compilerNode.moduleReference)) {
        record(node, "import", node.getDescendantsOfKind(SyntaxKind.StringLiteral)[0], "Import-equals require() syntax is outside this phase");
      } else if (Node.isImportTypeNode(node)) {
        const argument = node.getArgument();
        record(node, "import", Node.isLiteralTypeNode(argument) ? argument.getLiteral() : undefined, "Type-query import() syntax is outside this phase");
      }
    });
  }
  return {
    files, imports,
    modules: [...modules.values()].sort((a, b) => a.path.localeCompare(b.path)),
    skipped: selectedFiles.flatMap(({ path, language }) => {
      const reason = skipped.get(path);
      return reason ? [{ path, language, reason }] : [];
    }),
    configurations: [...resolver.reports.values()].sort((a, b) => a.path.localeCompare(b.path)),
  };
}

export const typescriptParser: LanguageParser = {
  id: "typescript",
  extensions: {
    ".ts": "typescript", ".tsx": "typescript", ".mts": "typescript", ".cts": "typescript",
    ".js": "javascript", ".jsx": "javascript", ".mjs": "javascript", ".cjs": "javascript",
  },
  parse: parseTypeScript,
};
