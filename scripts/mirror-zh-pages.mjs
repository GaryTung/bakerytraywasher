#!/usr/bin/env node
// Mirror the Thai (th) locale page tree into a Chinese (zh) page tree.
//
// Why Thai as the template? Because TH has the most-recent full coverage
// (every page exists), and the file structure is identical for every
// non-EN locale (they all share the same layouts). The actual displayed
// content comes from the shared i18n modules + locale prop on each layout,
// so swapping `locale: 'th'` → `locale: 'zh'` automatically gets us the
// Chinese version of everything that's data-driven.
//
// For pages that hand-author their text inline (homepage, blog stub
// articles, FAQ items, blog posts), we mirror them as a starting point
// here, then overwrite the highest-traffic ones with idiomatic Chinese
// rewrites in a follow-up commit.

import { readdir, readFile, writeFile, mkdir, stat } from 'node:fs/promises';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');

const srcDir = join(root, 'src/pages/th');
const dstDir = join(root, 'src/pages/zh');

async function walk(dir, out = []) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) await walk(p, out);
    else if (e.name.endsWith('.astro')) out.push(p);
  }
  return out;
}

const files = await walk(srcDir);
let written = 0;

for (const srcFile of files) {
  const relPath = relative(srcDir, srcFile);
  const dstFile = join(dstDir, relPath);
  await mkdir(dirname(dstFile), { recursive: true });

  let src = await readFile(srcFile, 'utf8');

  // Universal substitutions: any 'th' literal that refers to the locale.
  src = src.replace(/locale = 'th' as const/g, "locale = 'zh' as const");
  src = src.replace(/locale='th'/g, "locale='zh'");
  src = src.replace(/locale: 'th'/g, "locale: 'zh'");
  src = src.replace(/const locale = "th"/g, 'const locale = "zh"');

  // URL prefixes inside the source: `/th/...` → `/zh/...`
  // ONLY when used as a route inside the site (skip if part of a longer
  // word like "thailand" or "though"). We require a / before and either
  // / or end-of-segment after.
  src = src.replace(/(['"`])\/th\//g, '$1/zh/');
  src = src.replace(/(['"`])\/th(['"`])/g, '$1/zh$2');

  await writeFile(dstFile, src, 'utf8');
  written++;
}
console.log(`Mirrored ${written} Thai pages → src/pages/zh/`);
