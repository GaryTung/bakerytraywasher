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
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const HOST = 'bakerytraywasher.com';
const KEY = 'f3e7a2b8c9d14e6f5a8b3c2d7e9f4a1b';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
// All these endpoints propagate to all participating search engines.
// Try Bing first (most reliable globally), then Yandex as fallback.
const ENDPOINTS = [
  'https://www.bing.com/indexnow',
  'https://yandex.com/indexnow',
  'https://api.indexnow.org/IndexNow',
];
const BATCH_SIZE = 10000; // IndexNow allows up to 10,000 URLs per request

async function collectFromSitemaps() {
  const distDir = resolve(dirname(fileURLToPath(import.meta.url)), '..', 'dist');
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

async function submitToEndpoint(endpoint, body) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 30000);
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
    const text = await res.text();
    return { ok: res.ok || res.status === 202, status: res.status, statusText: res.statusText, body: text };
  } catch (e) {
    return { ok: false, error: e.message || String(e) };
  } finally {
    clearTimeout(timer);
  }
}

async function submit(urls) {
  if (urls.length === 0) {
    console.log('No URLs to submit.');
    return;
  }
  let anySuccess = false;
  for (let i = 0; i < urls.length; i += BATCH_SIZE) {
    const batch = urls.slice(i, i + BATCH_SIZE);
    const body = {
      host: HOST,
      key: KEY,
      keyLocation: KEY_LOCATION,
      urlList: batch,
    };
    const batchNum = Math.floor(i / BATCH_SIZE) + 1;
    console.log(`\nBatch ${batchNum}: ${batch.length} URLs`);
    for (const endpoint of ENDPOINTS) {
      console.log(`  → ${endpoint} ...`);
      const r = await submitToEndpoint(endpoint, body);
      if (r.ok) {
        console.log(`    ✓ ${r.status} ${r.statusText}`);
        anySuccess = true;
      } else if (r.error) {
        console.log(`    ✗ ${r.error}`);
      } else {
        console.log(`    ✗ ${r.status} ${r.statusText} — ${r.body || ''}`);
      }
    }
  }
  if (anySuccess) {
    console.log(`\nDone. Submitted ${urls.length} URLs. Participating engines propagate to each other,`);
    console.log(`so even one successful endpoint reaches Bing, Yandex, Seznam, Naver, Yep.`);
  } else {
    console.error(`\nAll endpoints failed. Check network access (api.indexnow.org / Bing / Yandex may be blocked).`);
    console.error(`IndexNow status codes:`);
    console.error(`  200 / 202 = accepted`);
    console.error(`  400 = bad request    403 = key not found at keyLocation`);
    console.error(`  422 = URL/host mismatch    429 = rate limited`);
    process.exit(1);
  }
}

const args = process.argv.slice(2);
const urls = args.length > 0 ? args : await collectFromSitemaps();
console.log(`Found ${urls.length} URLs. Key location: ${KEY_LOCATION}`);
await submit(urls);
