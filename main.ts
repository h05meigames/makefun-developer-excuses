// make.fun bounty: u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3
// "Make the AI Judge Laugh: Developer Excuses" — writes one funny
// single-line excuse a developer gives when code breaks in production:
// the blame shifts to a Stack Overflow answer with 4,000 upvotes,
// zero tests, and a warning comment the developer read as a dare.
// Node 22, standard library only.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "It wasn\u2019t my bug \u2014 the Stack Overflow answer I copied had 4,000 upvotes, zero tests, and one comment saying \u201cdo not use in production,\u201d which I read as a dare.";

// Guard: the gate requires /output/entry.txt to be 1–200 characters,
// a single line, and not only whitespace. Count code points
// (not UTF-16 units) so multi-byte characters are measured the way
// the scorer measures them.
const length = [...line].length;
if (length < 1 || length > 200) {
  throw new Error(`Entry must be 1-200 characters, got ${length}.`);
}
if (line.trim().length === 0) {
  throw new Error("Entry must not be whitespace-only.");
}
if (line.includes("\n") || line.includes("\r")) {
  throw new Error("Entry must be a single line without embedded newlines.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log("Wrote /output/entry.txt");
