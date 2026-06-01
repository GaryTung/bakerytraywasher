#!/usr/bin/env node
// Replace the English seed zh: values in vsdata.ts with idiomatic Simplified Chinese.
// Each replacement is keyed by the en value (which the seed script copied verbatim
// into zh), so we can do safe targeted substitutions without touching other locales.
import { readFile, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');
const file = join(root, 'src/i18n/vsdata.ts');

// Each entry: [exact English text used as the zh seed, idiomatic Chinese replacement]
const replacements = [
  // vsCards — name + desc
  ['vs US Category Leader',                                                                                  '对比美国头部品牌'],
  ['JD-3 vs the leading US hood-type bakery dishwasher. Significantly lower capex, fits 600×400 trays.',     'JD-3 与美国领头的揭盖式烘焙洗碗机对比。资本支出明显更低，可容纳 600×400 mm 烤盘。'],
  ['vs US Mid-Tier',                                                                                          '对比美国中端品牌'],
  ['Lower capex, larger chamber, 600×400 tray compatibility.',                                                '资本支出更低、洗涤腔体更大、兼容 600×400 mm 烤盘。'],
  ['vs US/Italian Bakery-Spec Model',                                                                         '对比美国/意大利烘焙专用机型'],
  ['600×400 compatibility, built-in heat recovery option, lower total cost.',                                 '兼容 600×400 mm 烤盘、可选内置热回收模块、综合成本更低。'],
  ['vs German Premium',                                                                                       '对比德国高端品牌'],
  ['Significantly lower capex at equivalent CE certifications.',                                              '同等 CE 认证水平下，资本支出明显更低。'],
  ['vs Manual Washing',                                                                                       '对比人工手洗'],
  ['The highest-ROI comparison. 4-month payback math.',                                                       '投资回报率最高的对比。4 个月回本的核心算式就在这里。'],
  ['Undercounter vs Hood-Type',                                                                               '台下式 vs 揭盖式'],
  ['Which architecture is right for your kitchen?',                                                           '哪种结构更适合您的厨房？'],
  ['vs Used Equipment',                                                                                       '对比二手设备'],
  ['Should you buy a used premium-brand washer instead?',                                                     '与其买新机，要不要直接买一台二手的高端品牌？我们逐项分析。'],

  // vsIntro
  ['Honest side-by-side comparisons so you can make a confident decision. We use factual, publicly-documented specs in each comparison and avoid quoting unverified competitor prices.',
   '诚实的对比，帮您做出有信心的决定。每个对比都基于公开可查的规格参数，对来源不明的竞品售价我们不会引用。'],
];

let src = await readFile(file, 'utf8');
let total = 0;
for (const [en, zh] of replacements) {
  const pattern = `zh: '${en.replace(/'/g, "\\'")}'`;
  if (src.includes(pattern)) {
    src = src.replace(pattern, `zh: '${zh.replace(/'/g, "\\'")}'`);
    total++;
    continue;
  }
  // Also try double-quoted form (rare, but possible)
  const pattern2 = `zh: "${en}"`;
  if (src.includes(pattern2)) {
    src = src.replace(pattern2, `zh: "${zh.replace(/"/g, '\\"')}"`);
    total++;
  }
}
await writeFile(file, src, 'utf8');
console.log(`vsdata.ts: replaced ${total}/${replacements.length} zh seed values with Chinese.`);
