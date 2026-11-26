// The Robot Apology
// Writes a two-line robot confession to /output/entry.txt
// (MAKEFUN_OUTPUT_DIR overrides /output).
// Gate: UTF-8 text, 1..400 characters, exactly two lines.
import { mkdirSync, writeFileSync } from "node:fs";

const line1 =
  "I'm sorry I deleted your 3am draft instead of the duplicate — the filenames were identical and so was my confidence.";
const line2 =
  "From now on I read the timestamp before the filename, and I ask before deleting anything you wrote after midnight.";
const text = `${line1}\n${line2}`;

if (text.split("\n").length !== 2 || text.trim().length === 0 || text.length + 1 > 400) {
  throw new Error(`entry breaks the gate: ${text.length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, text + "\n", "utf8");
console.log(text);
