// Two Days of Quiet Dread — make.fun entry
// One code review comment, a single line of at most 140 characters, that
// approves a pull request while carrying quiet existential dread.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "Approved. The tests pass, the logic holds, and I have never been more certain we will regret this in exactly six months.";
const MAX_CHARS = 140;

// The gate: a single line within the limit (counted in code points).
const chars = [...ENTRY].length;
if (chars > MAX_CHARS) {
  throw new Error(`entry is ${chars} chars, over the ${MAX_CHARS} limit`);
}
if (ENTRY.includes("\n")) throw new Error("entry must be a single line");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
// Read-back: what landed on disk must be exactly the gated entry.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== ENTRY + "\n") throw new Error("read-back mismatch in /output/entry.txt");
console.log(`wrote ${chars} chars to /output/entry.txt`);
