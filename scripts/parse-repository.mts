import { parseRepository } from "../parser/index.mts";
import { summarizeRepository, writeRepository } from "../parser/output.mts";

async function main() {
  const args = process.argv.slice(2);
  if (args.includes("--help")) {
    console.log("Usage: npm run parse -- <directory> [--out <result.mts>] [--parser <id>]\nThe output file must not already exist.");
    return;
  }
  const directory = args.shift();
  if (!directory || directory.startsWith("--")) throw new Error("Provide a repository directory. Use --help for usage.");
  let output: string | undefined;
  let parser: string | undefined;
  while (args.length) {
    const flag = args.shift();
    const value = args.shift();
    if (!value || value.startsWith("--")) throw new Error(`Missing value for ${flag}`);
    if (flag === "--out" && !output) output = value;
    else if (flag === "--parser" && !parser) parser = value;
    else throw new Error(`Unexpected argument: ${flag}`);
  }
  const result = await parseRepository(directory, { parser });
  console.log(summarizeRepository(result));
  if (output) {
    await writeRepository(result, output);
    console.log(`Typed result written to ${output}`);
  }
}

await main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});
