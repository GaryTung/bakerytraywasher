#!/usr/bin/env node
/**
 * IndexNow submission script for bakerytraywasher.com
 *
 * Reads dist/sitemap-*.xml after `npm run build`, extracts all URLs,
 * and POSTs them to the IndexNow endpoint. Bing, Yandex, Seznam, Naver,
 * and Yep all share the same protocol — one submission notifies all
 * participating engines.
 *
 * Usage:
 *   npm run build
 *   npm run indexnow
 *
 * Or submit specific URLs:
 *   node scripts/indexnow-submit.mjs https://bakerytraywasher.com/blog/foo/
 */
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const HOST = 'bakerytraywasher.com';
const KEY = 'f3e7a2b8c9d14e6f5a8b3c2d7e9f4a1b';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = 'https://api.indexnow.org/IndexNow';
const BATCH_SIZE = 10000; // IndexNow allows up to 10,000 URLs per request

async function collectFromSitemaps() {
  const distDir = new URL('../dist/', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1');
  let files;
  try {
    files = await readdir(distDir);
  } catch (e) {
    console.error(`Cannot read ${distDir} — did you run \`npm run build\`?`);
    process.exit(1);
  }
  const sitemapFiles = files.filter((f) => f.startsWith('sitemap-') && f.endsWith('.xml'));
  if (sitemapFiles.length === 0) {
    console.error('No sitemap files found in dist/. Did the build succeed?');
    process.exit(1);
  }
  const urls = new Set();
  for (const file of sitemapFiles) {
    const xml = await readFile(join(distDir, file), 'utf8');
    const matches = xml.matchAll(/<loc>([^<]+)<\/loc>/g);
    for (const m of matches) urls.add(m[1].trim());
  }
  return [...urls];
}

async function submit(urls) {
  if (urls.length === 0) {
    console.log('No URLs to submit.');
    return;
  }
  // Batch if necessary
  for (let i = 0; i < urls.length; i += BATCH_SIZE) {
    const batch = urls.slice(i, i + BATCH_SIZE);
    const body = {
      host: HOST,
      key: KEY,
      keyLocation: KEY_LOCATION,
      urlList: batch,
    };
    console.log(`Submitting batch ${Math.floor(i / BATCH_SIZE) + 1}: ${batch.length} URLs ...`);
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(body),
    });
    const text = await res.text();
    if (res.ok || res.status === 202) {
      console.log(`  ✓ ${res.status} ${res.statusText}`);
    } else {
      console.error(`  ✗ ${res.status} ${res.statusText} — ${text}`);
      console.error(`  IndexNow status codes:`);
      console.error(`    200 / 202 = accepted`);
      console.error(`    400 = bad request (check key/host)`);
      console.error(`    403 = key not found at keyLocation`);
      console.error(`    422 = URL doesn't match host`);
      console.error(`    429 = rate limited`);
      process.exit(1);
    }
  }
  console.log(`\nDone. Submitted ${urls.length} URLs to IndexNow.`);
  console.log(`Bing, Yandex, Seznam, Naver, and Yep will fetch the changes.`);
}

const args = process.argv.slice(2);
const urls = args.length > 0 ? args : await collectFromSitemaps();
console.log(`Found ${urls.length} URLs. Key location: ${KEY_LOCATION}`);
await submit(urls);
