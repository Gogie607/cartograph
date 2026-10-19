import { lstat, realpath } from "node:fs/promises";
import { noFrameworkAdapter, type FrameworkAdapter } from "./adapters.mts";
import { buildGraph } from "./graph.mts";
import { inventory } from "./inventory.mts";
import { createParserRegistry } from "./languages/registry.mts";
import { noParseParser } from "./languages/no-parse.mts";
import type { LanguageFile, LanguageParseResult, LanguageParser } from "./languages/contract.mts";
import type { ImportCounts, ImportKind, ParsedRepository, SkippedFile } from "./types.mts";

const emptyCounts = (): ImportCounts => ({ found: 0, resolved: 0, external: 0, excluded: 0, unresolved: 0 });

export interface ParseOptions {
  adapter?: FrameworkAdapter;
  parser?: string;
  parsers?: readonly LanguageParser[];
}

export async function parseRepository(directory: string, options: ParseOptions = {}): Promise<ParsedRepository> {
  const root = await realpath(directory);
  if (!(await lstat(root)).isDirectory()) throw new Error(`Not a directory: ${directory}`);
  const adapter = options.adapter ?? noFrameworkAdapter;
  const registry = createParserRegistry(options.parsers);
  const entries = await inventory(root);
  const selection = registry.select(entries.paths.filter((path) => !entries.skipped.has(path)), options.parser);
  const skipped = new Map<string, SkippedFile>();
  const groups = new Map<LanguageParser, LanguageFile[]>();
  const languages = new Map<string, { language: string; parser: string; found: number; parsed: number; skipped: number }>();

  for (const path of entries.paths) {
    const detected = registry.detect(path);
    const { language } = detected;
    const notSelected = detected.parser !== noParseParser && detected.parser !== selection.parser;
    const parser = notSelected ? noParseParser : detected.parser;
    const report = languages.get(language) ?? { language, parser: parser.id, found: 0, parsed: 0, skipped: 0 };
    if (report.parser !== parser.id) throw new Error(`Language ${language} is assigned to multiple parsers`);
    report.found++;
    languages.set(language, report);
    const reason = entries.skipped.get(path) ?? (notSelected ? `Not selected: ${detected.parser.id}; ${selection.message}` : undefined);
    if (reason) skipped.set(path, { path, language, reason });
    else {
      const group = groups.get(parser) ?? [];
      group.push({ path, language });
      groups.set(parser, group);
    }
  }

  const results: LanguageParseResult[] = [];
  // Establish unsupported targets before any concrete parser resolves imports.
  const batches = [...groups].sort(([a], [b]) => a === noParseParser ? -1 : b === noParseParser ? 1 : a.id.localeCompare(b.id));
  for (const [parser, files] of batches) {
    const result = await parser.parse({ root, files, adapter, excludedFiles: new Map([...skipped].map(([path, file]) => [path, file.reason])) });
    const assigned = new Map(files.map((file) => [file.path, file.language]));
    const accounted = new Set<string>();
    for (const file of [...result.files, ...result.skipped]) {
      if (assigned.get(file.path) !== file.language || accounted.has(file.path)) throw new Error(`Parser ${parser.id} returned an unexpected or duplicate file: ${file.path}`);
      accounted.add(file.path);
    }
    if (accounted.size !== assigned.size) throw new Error(`Parser ${parser.id} did not account for every assigned file`);
    for (const file of result.skipped) {
      if (!file.reason) throw new Error(`Parser ${parser.id} skipped ${file.path} without a reason`);
      skipped.set(file.path, file);
    }
    results.push(result);
  }

  const files = results.flatMap((result) => result.files).sort((a, b) => a.path.localeCompare(b.path));
  const imports = results.flatMap((result) => result.imports).sort((a, b) => a.source.localeCompare(b.source) || a.line - b.line || a.column - b.column);
  const counts = emptyCounts();
  const byKind: Record<ImportKind, ImportCounts> = { import: emptyCounts(), "re-export": emptyCounts(), "dynamic-import": emptyCounts() };
  for (const record of imports) {
    counts.found++; counts[record.outcome]++;
    byKind[record.kind].found++; byKind[record.kind][record.outcome]++;
  }
  for (const file of files) {
    const report = languages.get(file.language);
    if (!report) throw new Error(`Missing language report for ${file.path}`);
    report.parsed++;
  }
  for (const file of skipped.values()) {
    const report = languages.get(file.language);
    if (!report) throw new Error(`Missing language report for ${file.path}`);
    report.skipped++;
  }
  const modules = new Map(results.flatMap((result) => result.modules).map((module) => [module.path, module]));
  return {
    version: 2, adapter: adapter.name,
    languages: [...languages.values()].sort((a, b) => a.language.localeCompare(b.language)),
    modules: [...modules.values()].sort((a, b) => a.path.localeCompare(b.path)),
    ...buildGraph(files, imports),
    coverage: {
      inventory: entries.mode,
      files: { found: entries.paths.length, parsed: files.length, skipped: skipped.size, details: [...skipped.values()].sort((a, b) => a.path.localeCompare(b.path)) },
      excludedEntries: entries.excludedEntries,
      imports: { ...counts, byKind, records: imports },
      configurations: [{ path: ".", messages: [selection.message] }, ...results.flatMap((result) => result.configurations)].sort((a, b) => a.path.localeCompare(b.path)),
    },
  };
}

export type { ParsedRepository, ParsedFile, DependencyEdge, ImportRecord } from "./types.mts";
export type { LanguageParser, LanguageParserContext, LanguageParseResult } from "./languages/contract.mts";
export { defaultLanguageParsers } from "./languages/registry.mts";
