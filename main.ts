import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Every holiday the six o'clock train left while I was still counting the carriages, and I never once reached the last one before the tail lights turned the corner.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
