#!/usr/bin/env node
// Add `offerCount` and `priceValidUntil` to every Product page's AggregateOffer.
// Google Search Console flags AggregateOffer without offerCount as a
// "improve content presentation" issue. There are 3 config tiers (4400 / 4600
// / 4900) so offerCount: 3 is the right value. We also add priceValidUntil
// one year out so Google does not warn about stale pricing.
import { readFile, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');

const files = [
  'src/pages/product/index.astro',
  'src/pages/es/product/index.astro',
  'src/pages/fr/product/index.astro',
  'src/pages/de/product/index.astro',
  'src/pages/ru/product/index.astro',
  'src/pages/th/product/index.astro',
  'src/pages/vi/product/index.astro',
  'src/pages/ar/product/index.astro',
  'src/pages/zh/product/index.astro',
];

const oldOffer = `offers: { '@type': 'AggregateOffer', priceCurrency: 'USD', lowPrice: '4400', highPrice: '4900', availability: 'https://schema.org/InStock' }`;
const newOffer = `offers: { '@type': 'AggregateOffer', offerCount: 3, priceCurrency: 'USD', lowPrice: '4400', highPrice: '4900', priceValidUntil: '2027-12-31', availability: 'https://schema.org/InStock', url: 'https://bakerytraywasher.com/product/' }`;

let touched = 0;
for (const rel of files) {
  const p = join(root, rel);
  const src = await readFile(p, 'utf8');
  if (!src.includes(oldOffer)) {
    if (src.includes('offerCount')) {
      console.log(`  already has offerCount: ${rel}`);
    } else {
      console.warn(`  pattern not found: ${rel}`);
    }
    continue;
  }
  await writeFile(p, src.replace(oldOffer, newOffer), 'utf8');
  console.log(`  ✓ ${rel}`);
  touched++;
}
console.log(`Updated ${touched}/${files.length} product pages.`);
