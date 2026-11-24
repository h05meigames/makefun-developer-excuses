// make.fun bounty: u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3
// "Make the AI Judge Laugh: Developer Excuses" — writes one funny
// single-line excuse a developer gives when code breaks in production:
// the blame shifts to a Stack Overflow answer with 4,000 upvotes,
// zero tests, and a warning comment nobody read.
// Node 22, standard library only.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "The bug isn\u2019t mine \u2014 it\u2019s in the Stack Overflow answer I copied: 4,000 upvotes, zero tests, and one comment saying \u201cdo not use in production.\u201d";

// Guard: the gate requires /output/entry.txt to be 1–200 characters.
// Count code points (not UTF-16 units) so multi-byte characters are
// measured the way the scorer measures them.
const length = [...line].length;
if (length < 1 || length > 200) {
  throw new Error(`Entry must be 1-200 characters, got ${length}.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log("Wrote /output/entry.txt");
