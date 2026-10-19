import { extname } from "node:path";
import type { LanguageParser } from "./contract.mts";
import { noParseParser } from "./no-parse.mts";
import { pythonParser } from "./python/index.mts";
import { typescriptParser } from "./typescript/index.mts";

// Recognizing an extension makes no claim that its language can be parsed.
const knownExtensions: Readonly<Record<string, string>> = {
  ...typescriptParser.extensions,
  ".py": "python", ".pyi": "python", ".pyw": "python",
  ".go": "go", ".rs": "rust", ".java": "java", ".cs": "csharp",
  ".rb": "ruby", ".php": "php", ".c": "c", ".cpp": "cpp",
  ".cc": "cpp", ".cxx": "cpp", ".swift": "swift", ".kt": "kotlin",
};

export const defaultLanguageParsers: readonly LanguageParser[] = [typescriptParser, pythonParser];

export function createParserRegistry(parsers: readonly LanguageParser[] = defaultLanguageParsers) {
  const extensions = new Map<string, { language: string; parser: LanguageParser }>();
  const ids = new Set<string>();
  for (const parser of parsers) {
    if (parser.id === noParseParser.id || ids.has(parser.id)) throw new Error(`Duplicate or reserved parser ID: ${parser.id}`);
    ids.add(parser.id);
    for (const [extension, language] of Object.entries(parser.extensions)) {
      if (!extension.startsWith(".") || extension !== extension.toLowerCase() || !language || language === "unknown") {
        throw new Error(`Invalid language registration: ${parser.id} ${extension}`);
      }
      if (extensions.has(extension)) throw new Error(`Multiple parsers registered for ${extension}`);
      extensions.set(extension, { language, parser });
    }
  }
  return {
    select(paths: readonly string[], explicit?: string) {
      if (explicit && !ids.has(explicit)) throw new Error(`Unknown parser: ${explicit}`);
      const counts = new Map<LanguageParser, number>();
      for (const path of paths) {
        const parser = extensions.get(extname(path).toLowerCase())?.parser;
        if (parser) counts.set(parser, (counts.get(parser) ?? 0) + 1);
      }
      const ranked = [...counts].sort(([a, x], [b, y]) => y - x || a.id.localeCompare(b.id));
      const summary = ranked.map(([parser, count]) => `${parser.id}: ${count} source files`).join("; ");
      if (!explicit && ranked.length > 1 && ranked[0][1] === ranked[1][1]) {
        throw new Error(`Ambiguous mixed-language repository (${summary}); select an explicit parser with --parser <id>`);
      }
      const selected = explicit ? parsers.find((parser) => parser.id === explicit) : ranked[0]?.[0];
      return { parser: selected, message: `Source-file detection: ${summary || "no supported sources"}. Selected parser: ${selected?.id ?? "none"}${explicit ? " (explicit)" : ""}${ranked.length > 1 ? "; mixed repository: other parsers' source files are skipped" : ""}` };
    },
    detect(path: string) {
      const extension = extname(path).toLowerCase();
      return extensions.get(extension) ?? { language: knownExtensions[extension] ?? "unknown", parser: noParseParser };
    },
  };
}
