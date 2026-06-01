#!/usr/bin/env node
// Fill all remaining zh seed values across vsdata.ts and guides.ts with
// idiomatic Simplified Chinese.
import { readFile, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');

// =====================================================================
// vsdata.ts — remaining entries: whyJd3Wins, table labels, case studies,
// plus a few standalone Record<Locale, string> blocks that the seed script
// didn't catch because they don't follow the en: 'X' pattern strictly.
// =====================================================================
const vsdataReplacements = [
  // whyJd3WinsLabel
  ['Why JD-3 wins', 'JD-3 胜出的原因'],

  // whyJd3WinsItems (each bullet)
  ['Fits 600×400 mm European Bakery Norm trays',                                                 '兼容 600×400 mm 欧标烘焙烤盘'],
  ['180 baking trays per hour throughput',                                                       '每小时清洗 180 个烤盘'],
  ['6 trays per cycle, 2-minute cycle time',                                                     '每次 6 个烤盘，单次循环 2 分钟'],
  ['SUS304 stainless steel + CE-certified safety',                                               'SUS304 食品级不锈钢，通过 CE 安全认证'],
  ['Significantly lower capex at equivalent CE compliance',                                      '同等 CE 合规水平下，资本支出明显更低'],
  ['4-week production + DDP delivery to your door',                                              '4 周生产 + DDP 直送上门'],

  // vsTableLabels
  ['Rack size',           '洗碗筐尺寸'],
  ['600×400 mm trays',    '兼容 600×400 mm 烤盘'],
  ['Throughput',          '清洗能力'],
  ['Cycle time',          '单次循环时间'],
  ['Price',               '价格'],

  // competitor labels
  ['Varies',                  '视情况而定'],
  ['Significantly higher',    '明显更高'],

  // Case studies — names + locations + savings labels
  ['Seoul Café Chain (12 locations)',                 '首尔咖啡连锁（12 家门店）'],
  ['Seoul, South Korea',                              '韩国首尔'],
  ['Melbourne Patisserie',                            '墨尔本法式甜品店'],
  ['Melbourne, Australia',                            '澳大利亚墨尔本'],
  ['Dubai Hotel Pastry Kitchen',                      '迪拜酒店西点房'],
  ['Dubai, UAE',                                      '阿联酋迪拜'],
  ['Lima Artisan Bakery Chain (5 locations)',         '利马手工面包连锁（5 家门店）'],
  ['Lima, Peru',                                      '秘鲁利马'],
  ['$120,000/yr',  '每年 12 万美元'],
  ['$5,200/yr',    '每年 5,200 美元'],
  ['$28,000/yr',   '每年 2.8 万美元'],
  ['$48,000/yr',   '每年 4.8 万美元'],

  // labels on hub
  ['Annual savings',          '每年节省'],
  ['Anonymized but concrete deployments — 4 operations, 4 geographies, same core economics.',
   '匿名但真实的部署案例 — 4 家不同业务、4 个地区，背后是同一套核心算式。'],
  ['Case Studies',            '客户案例'],
  ['Compare the JD-3',        '将 JD-3 与各品牌对比'],
];

// =====================================================================
// guides.ts — every guide entry's title + desc (10 guides) + hub labels
// =====================================================================
const guidesReplacements = [
  // 1. bakery-tray-cleaning-best-practices
  ['Bakery Tray Cleaning — Best Practices',
   '烘焙烤盘清洗实务 — 最佳做法'],
  ['Daily routine, weekly maintenance, what to use, and what to avoid for the JD-3 in a bakery setting.',
   '从每日例行到每周维护，告诉您在烘焙场景下使用 JD-3 该用什么、不该用什么。'],

  // 2. how-to-choose-bakery-tray-washer
  ['How to Choose a Bakery Tray Washer',
   '如何挑选一台烘焙烤盘清洗机'],
  ['The 8 specs that actually matter. Capacity, rack size, temperature, water use, footprint, power, certifications, support.',
   '真正关键的 8 项参数：处理量、洗碗筐尺寸、清洗温度、用水量、占地、功率、认证、售后。'],

  // 3. 600x400-bakery-norm-explained
  ['The 600×400 mm Bakery Norm Explained',
   '600×400 mm 烘焙欧标，一文讲透'],
  ['DIN 18876 / EN 631. Why every modern combi oven uses it and why most dishwashers under 8K cannot fit it.',
   'DIN 18876 / EN 631 标准。为何所有现代蒸烤箱都按它设计，而 8,000 美元以下的洗碗机大多放不下。'],

  // 4. cost-of-manual-tray-cleaning
  ['The Hidden Cost of Manual Tray Cleaning',
   '人工洗烤盘的隐性成本'],
  ['Labor hours, water, hot water energy, tray damage, lost capacity — what hand-washing really costs per year.',
   '工时、水费、热水电费、烤盘磨损、产能损失 — 算清楚手洗一年到底花掉多少钱。'],

  // 5. water-consumption-comparison
  ['Water Consumption — JD-3 vs Competitors',
   '用水量对比 — JD-3 与竞品'],
  ['2.0–2.5 L per cycle vs the 5–10 L most competitors consume. The math over 5 years.',
   '单次循环 2.0–2.5 升，而大部分竞品要用 5–10 升。我们把 5 年的水费差额算给您看。'],

  // 6. sanitization-temperature-standards
  ['Sanitization Temperature Standards',
   '消毒温度标准详解'],
  ['Why 82°C? NSF/ANSI 3, EN 12875-2, DIN 10516, FDA Food Code 4-501.112 — all converge on the same number.',
   '为什么是 82°C？NSF/ANSI 3、EN 12875-2、DIN 10516、FDA 食品法规 4-501.112 — 全世界的标准都指向同一个数字。'],

  // 7. dishwasher-detergent-for-bakery
  ['Dishwasher Detergent for Bakeries',
   '烘焙店专用的洗碗机洗涤剂'],
  ['Alkaline vs enzyme, pH ranges, rinse-aid selection, and how to adjust the built-in dispenser.',
   '碱性 vs 酶基洗涤剂、pH 值区间、漂洗剂选型，以及内置分配器怎么调。'],

  // 8. electrical-requirements-bakery-dishwasher
  ['Electrical Requirements for a Bakery Dishwasher',
   '烘焙洗碗机的电气要求'],
  ['380V three-phase vs 400V single-phase, breaker sizing, dedicated circuit, US/EU/GCC differences.',
   '380V 三相 vs 400V 单相、断路器规格、专用回路，以及美国、欧洲、海湾各市场的差异。'],

  // 9. space-requirements-small-bakery
  ['Space Requirements — Small Bakery Layouts',
   '空间要求 — 小型烘焙店动线设计'],
  ['JD-3 footprint, door clearance, ventilation, where to put the dish-pit relative to the oven.',
   'JD-3 的占地尺寸、开门间隙、排风需求，以及洗涤区相对于烤箱的最佳位置。'],

  // guidesHub
  ['Guides', '选购指南'],
  ['Practical guides for bakery owners and small commercial kitchen operators considering the V-TAI JD-3.',
   '面向烘焙店老板与中小型商用厨房负责人的实用指南，帮您评估 V-TAI JD-3 是否合适。'],
];

async function processFile(rel, replacements) {
  const p = join(root, rel);
  let src = await readFile(p, 'utf8');
  let count = 0;
  for (const [en, zh] of replacements) {
    const pattern = `zh: '${en.replace(/'/g, "\\'")}'`;
    if (src.includes(pattern)) {
      src = src.replace(pattern, `zh: '${zh.replace(/'/g, "\\'")}'`);
      count++;
      continue;
    }
    const pattern2 = `zh: "${en.replace(/"/g, '\\"')}"`;
    if (src.includes(pattern2)) {
      src = src.replace(pattern2, `zh: "${zh.replace(/"/g, '\\"')}"`);
      count++;
    }
  }
  await writeFile(p, src, 'utf8');
  console.log(`${rel}: replaced ${count}/${replacements.length} zh values.`);
}

await processFile('src/i18n/vsdata.ts', vsdataReplacements);
await processFile('src/i18n/guides.ts', guidesReplacements);
