// Midnight Fridge Roast — entry program (rev 2, FINAL).
// Writes one roast line about a smart fridge that refuses to open after
// midnight to /output/entry.txt. Gate: UTF-8, 1-200 chars, one line.
import { mkdirSync, writeFileSync } from "node:fs";

// Rev 2 (FINAL, self-judge winner): "won't open" is tighter and more
// spoken than "refuses to open"; dropping "but" tightens the punchline.
const ROAST =
  "My smart fridge won't open after midnight — it trusts me with Wi-Fi, not with cheese at 12:01.";

if (ROAST.length < 1 || ROAST.length > 200)
  throw new Error(`expected 1-200 chars, got ${ROAST.length}`);
if (ROAST.trim().length === 0) throw new Error("entry is only whitespace");
if (ROAST.includes("\n")) throw new Error("entry must be one line");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
console.log(`wrote ${ROAST.length} chars: ${ROAST}`);
