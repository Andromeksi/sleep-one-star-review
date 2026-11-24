import { mkdirSync, writeFileSync } from "node:fs";

// One-star review of sleep, written deadpan as a complaint about a
// subscription service that cannot be cancelled. One line, 153 characters,
// inside the bounty's 160-character gate. No trailing newline: the gate
// counts every character in /output/entry.txt.
const REVIEW =
  "One star. Sleep promised a free lifetime trial, then auto-renewed with unskippable dreams and a 3 a.m. insomnia update — cannot cancel, cannot recommend.";

mkdirSync("/output", { recursive: true });
if (REVIEW.length > 160 || REVIEW.length < 1) {
  throw new Error(`review is ${REVIEW.length} characters, must be 1-160`);
}
writeFileSync("/output/entry.txt", REVIEW, "utf8");
