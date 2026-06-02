#!/usr/bin/env node
// Add image thumbnails to every /[locale]/what-it-washes/index.astro hub
// page (and the EN /what-it-washes/index.astro). Uses /images/what-it-washes/
// {slug}.webp for the 9 regular items and /images/600x400-tray-comparison.webp
// for the flagship baking-trays-600x400 card.
import { readFile, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');

const hubs = [
  'src/pages/what-it-washes/index.astro',
  'src/pages/es/what-it-washes/index.astro',
  'src/pages/fr/what-it-washes/index.astro',
  'src/pages/de/what-it-washes/index.astro',
  'src/pages/ru/what-it-washes/index.astro',
  'src/pages/th/what-it-washes/index.astro',
  'src/pages/vi/what-it-washes/index.astro',
  'src/pages/ar/what-it-washes/index.astro',
  'src/pages/zh/what-it-washes/index.astro',
];

const IMG = (slug) =>
  slug === 'baking-trays-600x400'
    ? '/images/600x400-tray-comparison.webp'
    : `/images/what-it-washes/${slug}.webp`;

// The new items array literal (every hub uses the same 10 slugs, same flagship).
const itemsBlock = `const items = [
  { slug: 'baking-trays-600x400', flagship: true, img: '${IMG('baking-trays-600x400')}' },
  { slug: 'sheet-pans',                            img: '${IMG('sheet-pans')}' },
  { slug: 'mixing-bowls',                          img: '${IMG('mixing-bowls')}' },
  { slug: 'cake-pans',                             img: '${IMG('cake-pans')}' },
  { slug: 'pizza-pans',                            img: '${IMG('pizza-pans')}' },
  { slug: 'frying-baskets',                        img: '${IMG('frying-baskets')}' },
  { slug: 'stockpots',                             img: '${IMG('stockpots')}' },
  { slug: 'dishes-plates',                         img: '${IMG('dishes-plates')}' },
  { slug: 'utensils-mixers',                       img: '${IMG('utensils-mixers')}' },
  { slug: 'large-bakeware',                        img: '${IMG('large-bakeware')}' },
];`;

// The previous items array (across all hubs) — match the common pattern.
const itemsRegex = /const items = \[\s*\{ slug: 'baking-trays-600x400', flagship: true \},[\s\S]*?\{ slug: 'large-bakeware' \},?\s*\];/;

// The new card JSX — adds an <img> above the existing label.
// Each hub's locale-prefixed href stays as-is because we don't replace it.
const cardRegexes = [
  // EN form: href={`/what-it-washes/${it.slug}/`}
  {
    re: /\{items\.map\(\(it\) => \(\s*<a href=\{`\/what-it-washes\/\$\{it\.slug\}\/`\} class=\{`card hover:scale-\[1\.02\] transition \$\{it\.flagship \? 'border-2 border-bakery-orange' : ''\}`\}>\s*\{it\.flagship && <p class="eyebrow text-bakery-orange">⭐ \{flagshipLabel\[locale\]\}<\/p>\}\s*<h3 class="text-lg mb-2 mt-1">\{washesNames\[it\.slug\]\[locale\]\}<\/h3>\s*<\/a>\s*\)\)\}/,
    out: `{items.map((it) => (
        <a href={\`/what-it-washes/\${it.slug}/\`} class={\`card !p-0 overflow-hidden hover:scale-[1.03] transition flex flex-col \${it.flagship ? 'ring-2 ring-bakery-orange' : ''}\`}>
          <img src={it.img} alt={washesNames[it.slug][locale]} class="w-full aspect-[4/3] object-cover" loading="lazy" />
          <div class="p-4">
            {it.flagship && <p class="eyebrow text-bakery-orange mb-1">⭐ {flagshipLabel[locale]}</p>}
            <h3 class="text-base">{washesNames[it.slug][locale]}</h3>
          </div>
        </a>
      ))}`,
  },
  // Locale form: href={\`/{locale}/what-it-washes/\${it.slug}/\`}
  {
    re: /\{items\.map\(\(it\) => \(\s*<a href=\{`\/([a-z]{2})\/what-it-washes\/\$\{it\.slug\}\/`\} class=\{`card hover:scale-\[1\.02\] transition \$\{it\.flagship \? 'border-2 border-bakery-orange' : ''\}`\}>\s*\{it\.flagship && <p class="eyebrow text-bakery-orange">⭐ \{flagshipLabel\[locale\]\}<\/p>\}\s*<h3 class="text-lg mb-2 mt-1">\{washesNames\[it\.slug\]\[locale\]\}<\/h3>\s*<\/a>\s*\)\)\}/,
    out: (m, loc) => `{items.map((it) => (
        <a href={\`/${loc}/what-it-washes/\${it.slug}/\`} class={\`card !p-0 overflow-hidden hover:scale-[1.03] transition flex flex-col \${it.flagship ? 'ring-2 ring-bakery-orange' : ''}\`}>
          <img src={it.img} alt={washesNames[it.slug][locale]} class="w-full aspect-[4/3] object-cover" loading="lazy" />
          <div class="p-4">
            {it.flagship && <p class="eyebrow text-bakery-orange mb-1">⭐ {flagshipLabel[locale]}</p>}
            <h3 class="text-base">{washesNames[it.slug][locale]}</h3>
          </div>
        </a>
      ))}`,
  },
];

// Also tighten the grid breakpoints to suit thumbnails better:
// before: grid sm:grid-cols-2 lg:grid-cols-3 gap-5
// after:  grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4
const gridFrom = `<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">`;
const gridTo   = `<div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">`;

let touched = 0;
for (const rel of hubs) {
  const p = join(root, rel);
  let src;
  try { src = await readFile(p, 'utf8'); } catch { console.warn(`  skip (not found): ${rel}`); continue; }

  let modified = src;

  // 1. Replace the items array
  if (itemsRegex.test(modified)) {
    modified = modified.replace(itemsRegex, itemsBlock);
  } else {
    console.warn(`  items regex didn't match in ${rel} — leaving items as-is`);
  }

  // 2. Replace the card JSX (try both forms)
  let cardReplaced = false;
  for (const { re, out } of cardRegexes) {
    if (re.test(modified)) {
      modified = modified.replace(re, out);
      cardReplaced = true;
      break;
    }
  }
  if (!cardReplaced) {
    console.warn(`  card regex didn't match in ${rel} — leaving cards as-is`);
  }

  // 3. Tighten the grid
  if (modified.includes(gridFrom)) modified = modified.replace(gridFrom, gridTo);

  if (modified !== src) {
    await writeFile(p, modified, 'utf8');
    touched++;
    console.log(`  ✓ ${rel}`);
  }
}
console.log(`Updated ${touched}/${hubs.length} what-it-washes hub pages.`);
