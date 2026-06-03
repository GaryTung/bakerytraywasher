#!/usr/bin/env node
// Wrap multi-line tldr="..."+\n"..."+\n..."..." into tldr={"..." + ... + "..."}.
import { readFile, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');
const files = [
  'src/pages/zh/blog/five-failure-modes-commercial-dishwasher.astro',
  'src/pages/es/blog/five-failure-modes-commercial-dishwasher.astro',
  'src/pages/fr/blog/five-failure-modes-commercial-dishwasher.astro',
  'src/pages/de/blog/five-failure-modes-commercial-dishwasher.astro',
  'src/pages/ru/blog/five-failure-modes-commercial-dishwasher.astro',
  'src/pages/th/blog/five-failure-modes-commercial-dishwasher.astro',
  'src/pages/vi/blog/five-failure-modes-commercial-dishwasher.astro',
  'src/pages/ar/blog/five-failure-modes-commercial-dishwasher.astro',
];

for (const rel of files) {
  const p = join(root, rel);
  const src = await readFile(p, 'utf8');
  const lines = src.split('\n');
  const startIdx = lines.findIndex((l) => /^\s*tldr="/.test(l));
  if (startIdx < 0) {
    console.warn(`  no tldr= in ${rel}`);
    continue;
  }
  // Find the line where the tldr block ends — the first line at index >= startIdx
  // that ends with `"` (with possible trailing whitespace) and DOES NOT end with `"+`.
  let endIdx = -1;
  for (let i = startIdx; i < lines.length; i++) {
    const trimmed = lines[i].replace(/\s+$/, '');
    if (trimmed.endsWith('"+')) continue;
    if (trimmed.endsWith('"')) { endIdx = i; break; }
  }
  if (endIdx < 0) {
    console.warn(`  no tldr end in ${rel}`);
    continue;
  }
  // Replace `tldr="` at start with `tldr={"` and add a closing `}` to the last line.
  lines[startIdx] = lines[startIdx].replace(/tldr="/, 'tldr={"');
  lines[endIdx] = lines[endIdx].replace(/"\s*$/, '"}');
  await writeFile(p, lines.join('\n'), 'utf8');
  console.log(`  ✓ ${rel} (lines ${startIdx + 1}–${endIdx + 1})`);
}
