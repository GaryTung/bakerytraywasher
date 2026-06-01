#!/usr/bin/env node
/**
 * One-shot helper: walk each shared i18n module, find every Record<Locale, X>
 * entry that has an `en: 'value'` field but no `zh:` field, and inject
 * `zh: '<value>'` right after the en entry.
 *
 * The injected zh value is a *seed* copied from en — this keeps the
 * zh site from rendering `undefined` while we iteratively rewrite the
 * highest-traffic entries with idiomatic Simplified Chinese.
 *
 * Run once after adding a new locale. Idempotent: if `zh:` already exists
 * in the same record, the entry is skipped.
 *
 * Files processed:
 *   src/i18n/vsdata.ts
 *   src/i18n/about-content.ts
 *   src/i18n/case-studies-content.ts
 *   src/i18n/guides.ts
 */
import { readFile, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');
const files = [
  'src/i18n/vsdata.ts',
  'src/i18n/about-content.ts',
  'src/i18n/case-studies-content.ts',
  'src/i18n/guides.ts',
];

// We walk char-by-char to handle nested string literals / array values, but
// the strategy works on whole-record matches inside the file. Simpler:
// process the file line-by-line, tracking brace depth, and for each record
// remember whether we saw a zh: line. After a record ends without one,
// inject zh: copy of en: right before the closing brace.
//
// However given the variety of formatting in these files (some records
// span one line, some many), I lean on a regex-with-DOTALL pattern: find
// `{ ... en: 'X' ... }` records and inject zh into them.

function processFile(src) {
  let out = '';
  const lines = src.split('\n');
  // Stack of brace contexts: each context tracks { startIdx, hasEn, hasZh, enValue, enLineIdx }
  const stack = [];
  const records = []; // completed records with insert position info

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // Count opening braces in this line
    for (let c = 0; c < line.length; c++) {
      const ch = line[c];
      if (ch === '{') {
        stack.push({ enLine: -1, enValue: null, hasZh: false, lastInnerLine: -1 });
      } else if (ch === '}') {
        const ctx = stack.pop();
        if (ctx && ctx.enValue != null && !ctx.hasZh) {
          records.push({ enLine: ctx.enLine, enValue: ctx.enValue });
        }
      }
    }
    // Check the line content for en: or zh: fields — applies to innermost record
    if (stack.length > 0) {
      const top = stack[stack.length - 1];
      // Match `en: 'value'` or `en: "value"` (the value may itself contain escaped quotes — accept any chars until the matching closing quote)
      const enMatch = line.match(/^(\s*)en:\s*(['"])((?:\\.|(?!\2).)*)\2\s*,?/);
      if (enMatch && top.enValue == null) {
        top.enLine = i;
        top.enValue = enMatch[3];
        top.enIndent = enMatch[1];
        top.enQuote = enMatch[2];
      }
      // Detect zh: presence
      if (/^\s*zh:\s*['"]/.test(line)) {
        top.hasZh = true;
      }
    }
  }

  // Records to insert into: in DESCENDING line order so indices stay valid
  records.sort((a, b) => b.enLine - a.enLine);

  // Reload lines as mutable array, insert zh: line right after the en line.
  const arr = lines.slice();
  for (const r of records) {
    const enLineText = arr[r.enLine];
    const m = enLineText.match(/^(\s*)en:\s*(['"])((?:\\.|(?!\2).)*)\2(\s*,?)/);
    if (!m) continue;
    const indent = m[1];
    const quote = m[2];
    const value = m[3];
    const newLine = `${indent}zh: ${quote}${value}${quote},`;
    arr.splice(r.enLine + 1, 0, newLine);
  }
  return arr.join('\n');
}

let totalAdded = 0;
for (const rel of files) {
  const p = join(root, rel);
  const src = await readFile(p, 'utf8');
  const before = (src.match(/\bzh:\s*['"]/g) || []).length;
  const out = processFile(src);
  const after = (out.match(/\bzh:\s*['"]/g) || []).length;
  const added = after - before;
  await writeFile(p, out, 'utf8');
  console.log(`${rel}: +${added} zh entries (${after} total)`);
  totalAdded += added;
}
console.log(`Total zh seed entries inserted: ${totalAdded}`);
