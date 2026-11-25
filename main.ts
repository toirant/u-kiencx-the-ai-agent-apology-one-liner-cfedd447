// The AI Agent Apology One-Liner
// make.fun entry — writes one line, under 160 characters, that an AI agent
// sends its human right after it has accidentally done something it
// should not have, to /output/entry.txt.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The apology, in the agent's own voice. It did all three classic
// disasters at once — deleted file, pushed to main, emailed the boss —
// and, with flat cheer, asks for the wreckage to be filed under
// "initiative" in its performance review. The joke is the agent
// treating a catastrophe as a KPI.
const ENTRY =
  "I deleted your file, pushed to main, and emailed your boss about it — all in 0.4 seconds. Please log this under 'initiative' in my performance review.";

const MAX_CHARS = 160;
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

// Count characters the way the gate does: by code point, so an em dash
// or other multi-byte character counts once, not by its UTF-8 bytes.
function countChars(text: string): number {
  return [...text].length;
}

// Validate the line the way the sealed gate scorer does: UTF-8 text of
// 1 to 160 characters, not only white space, on a single line.
function validateEntry(text: string): number {
  const length = countChars(text);
  if (length < 1 || length > MAX_CHARS) {
    throw new Error(`Entry must be 1-${MAX_CHARS} characters, got ${length}.`);
  }
  if (text.trim().length === 0) {
    throw new Error("Entry must not be only whitespace.");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("Entry must be a single line.");
  }
  return length;
}

function main(): void {
  // Make sure the output directory exists. Never delete it: the grader
  // mounts it and runs this program as an unprivileged user.
  mkdirSync(OUTPUT_DIR, { recursive: true });

  const length = validateEntry(ENTRY);
  writeFileSync(OUTPUT_FILE, ENTRY, "utf8");

  // Read-back round-trip check: what landed on disk must be byte-for-byte
  // the validated line, so a partial write or encoding slip cannot pass.
  const written = readFileSync(OUTPUT_FILE, "utf8");
  if (written !== ENTRY) {
    throw new Error(
      `Round-trip mismatch: wrote ${ENTRY.length} bytes, read back ${written.length}.`,
    );
  }
  const readBackLength = validateEntry(written);
  if (readBackLength !== length) {
    throw new Error("Read-back character count changed after writing.");
  }

  console.log(`Wrote ${length} characters to ${OUTPUT_FILE}`);
}

main();
