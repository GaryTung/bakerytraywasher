#!/usr/bin/env node
/**
 * Site architecture audit:
 * 1) List all rendered routes (dist/**index.html files)
 * 2) Build a link graph from internal <a href> tags
 * 3) Report:
 *    - Orphans: pages with 0 inbound links (excluding obvious roots)
 *    - Per-locale untranslated-English-leak detection
 */
import { readdir, readFile } from 'node:fs/promises';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const distDir = join(here, '..', 'dist');

// 1) Walk dist for all index.html → routes
async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...await walk(p));
    else if (e.name === 'index.html') out.push(p);
  }
  return out;
}

const fileToRoute = (f) => {
  let r = '/' + relative(distDir, f).replace(/\\/g, '/').replace(/index\.html$/, '');
  if (!r.endsWith('/')) r += '/';
  return r;
};

const files = await walk(distDir);
const routes = new Set(files.map(fileToRoute));
console.log(`Indexed ${routes.size} routes.\n`);

// 2) Build inbound-link map
const inbound = new Map();      // route → Set<origin route>
for (const r of routes) inbound.set(r, new Set());

const linkRe = /href="([^"#?]+)/g;

for (const f of files) {
  const html = await readFile(f, 'utf8');
  const fromRoute = fileToRoute(f);
  let m;
  while ((m = linkRe.exec(html)) !== null) {
    let href = m[1];
    if (!href.startsWith('/')) continue;          // skip external/anchors
    if (!href.endsWith('/')) href += '/';
    // strip query/fragment already removed by regex
    if (routes.has(href) && href !== fromRoute) inbound.get(href).add(fromRoute);
  }
}

// 3) Find orphans (excluding the homepage and locale homepages — they are roots)
const localeHomes = new Set(['/', '/es/', '/fr/', '/de/', '/ru/', '/th/', '/vi/', '/ar/']);
const orphans = [];
for (const r of routes) {
  if (localeHomes.has(r)) continue;
  if (inbound.get(r).size === 0) orphans.push(r);
}

console.log(`== ORPHAN PAGES (no inbound internal links) ==`);
console.log(`Count: ${orphans.length}\n`);

// Group orphans by locale prefix for readability
const groups = {};
for (const o of orphans) {
  const m = o.match(/^\/([a-z]{2})\//);
  const key = m && ['es','fr','de','ru','th','vi','ar'].includes(m[1]) ? m[1] : 'en';
  (groups[key] ||= []).push(o);
}
for (const k of Object.keys(groups).sort()) {
  console.log(`-- ${k.toUpperCase()} (${groups[k].length})`);
  for (const o of groups[k].slice(0, 200)) console.log(`   ${o}`);
  console.log();
}

// 4) Per-locale English leak detection
// Words/phrases that should NEVER appear in non-EN visible text.
const englishMarkers = [
  // Nav and CTA labels
  '>Home<', '>Pricing<', '>Blog<', '>FAQ<', '>About<', '>Contact<',
  '>Case Studies<', '>Get a Quote<', '>Resources<',
  // Common headings
  '>Frequently Asked Questions<',
  '>Why Your Bakery<',
  'Ready to end manual',
  'We reply within 12',
  'Get a Custom Quote',
  'Honest, Transparent Pricing',
  'Honest Pricing',
  'See DDP Landed Prices',
  'Most popular<',
  'View detail',
  'Free On Board',
  // Footer
  'All rights reserved',
];

const localeDirs = ['es', 'fr', 'de', 'ru', 'th', 'vi', 'ar'];
console.log(`\n== ENGLISH LEAK SCAN (per locale) ==\n`);

for (const loc of localeDirs) {
  const locFiles = files.filter((f) => fileToRoute(f).startsWith(`/${loc}/`));
  const hits = [];
  for (const f of locFiles) {
    const html = await readFile(f, 'utf8');
    // Restrict to <body> region to avoid hreflang/meta noise
    const bodyMatch = html.match(/<body[\s\S]*<\/body>/i);
    const body = bodyMatch ? bodyMatch[0] : html;
    for (const marker of englishMarkers) {
      if (body.includes(marker)) hits.push({ route: fileToRoute(f), marker });
    }
  }
  console.log(`-- ${loc.toUpperCase()} (${hits.length} leaks across ${locFiles.length} pages)`);
  // De-dupe by route+marker
  const byMarker = {};
  for (const h of hits) (byMarker[h.marker] ||= []).push(h.route);
  for (const m of Object.keys(byMarker)) {
    const routesForMarker = byMarker[m];
    console.log(`   "${m}" → ${routesForMarker.length} page(s):`);
    for (const r of routesForMarker.slice(0, 10)) console.log(`     ${r}`);
    if (routesForMarker.length > 10) console.log(`     ...+${routesForMarker.length - 10} more`);
  }
  console.log();
}
