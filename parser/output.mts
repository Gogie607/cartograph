import { mkdir, writeFile } from "node:fs/promises";
import { dirname, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { portable } from "./inventory.mts";
import type { ParsedRepository } from "./types.mts";

export async function writeRepository(result: ParsedRepository, outputPath: string) {
  const absolute = resolve(outputPath);
  if (!/\.m?ts$/.test(absolute)) throw new Error("Typed output must use a .ts or .mts extension.");
  let contract = portable(relative(dirname(absolute), fileURLToPath(new URL("./types.mts", import.meta.url))));
  if (!contract.startsWith(".")) contract = `./${contract}`;
  const source = `import type { ParsedRepository } from ${JSON.stringify(contract)};\n\nexport const repository = ${JSON.stringify(result, null, 2)} satisfies ParsedRepository;\n`;
  await mkdir(dirname(absolute), { recursive: true });
  await writeFile(absolute, source, { encoding: "utf8", flag: "wx" });
}

export function summarizeRepository(result: ParsedRepository): string {
  const { files, imports } = result.coverage;
  const lines = [
    `Files found: ${files.found}; parsed: ${files.parsed}; skipped: ${files.skipped} (${result.coverage.inventory} inventory)`,
    `Folders: ${new Set(result.files.map((file) => file.folder)).size}; package modules: ${result.modules.length}; edges: ${result.edges.length}`,
    `Imports: ${imports.found}; resolved: ${imports.resolved}; external: ${imports.external}; excluded: ${imports.excluded}; unresolved: ${imports.unresolved}`,
  ];
  for (const [kind, count] of Object.entries(imports.byKind)) {
    lines.push(`${kind}: ${count.found} found, ${count.resolved} resolved, ${count.external} external, ${count.excluded} excluded, ${count.unresolved} unresolved`);
  }
  for (const language of result.languages) {
    lines.push(`Language ${language.language}: parser ${language.parser}; ${language.found} found, ${language.parsed} parsed, ${language.skipped} skipped`);
  }
  for (const skip of files.details) lines.push(`Skipped ${skip.path}: ${skip.reason}`);
  for (const entry of result.coverage.excludedEntries) lines.push(`Excluded entry ${entry.path}: ${entry.reason}`);
  for (const report of result.coverage.configurations) {
    for (const message of report.messages) lines.push(`Configuration ${report.path}: ${message}`);
  }
  for (const record of imports.records.filter((record) => record.outcome === "unresolved")) {
    lines.push(`Unresolved ${record.source}:${record.line}:${record.column} ${record.expression}: ${record.reason}`);
  }
  const gaps = new Map<string, number>();
  for (const record of imports.records.filter((record) => record.kind === "re-export" && record.outcome !== "resolved")) {
    const reason = `${record.outcome}: ${record.reason}`;
    gaps.set(reason, (gaps.get(reason) ?? 0) + 1);
  }
  for (const [reason, count] of gaps) lines.push(`Re-export gap: ${count} (${reason})`);
  return lines.join("\n");
}
