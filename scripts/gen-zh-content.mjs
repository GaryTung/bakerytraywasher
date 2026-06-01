#!/usr/bin/env node
// Generate idiomatic Simplified Chinese versions of all pages that pass
// hard-coded localized content as props (rather than relying on shared
// i18n modules). This overwrites the Thai-content mirror with proper zh.
//
// Pages covered:
//   - /zh/by-business-type/*.astro          (8 detail pages)
//   - /zh/what-it-washes/*.astro            (10 detail pages, except baking-trays-600x400 which has its own layout)
//   - /zh/blog/*.astro                      (8+ blog stubs + new posts)
//   - /zh/resources/*.astro                 (3 stubs)
//   - /zh/shipping-payment.astro
//   - /zh/index.astro                       (homepage)
//   - /zh/product/index.astro               (product hub)
//   - /zh/product/jd-3-installation.astro   (installation page)
//   - /zh/get-quote.astro, /zh/contact.astro, /zh/faq.astro, /zh/thank-you/*

import { writeFile, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');

// ========================================================================
// 1) by-business-type detail pages
// ========================================================================
const businessTypes = [
  {
    slug: 'bakery-shop',
    name: '面包店',
    icon: '🥐',
    title: '独立面包店的烤盘清洗解决方案',
    description: '为单店或多店面包店量身定制 — JD-3 帮您每晚省下 3 小时手洗时间。',
    reality: '您开面包店是为了烘焙，不是为了每晚洗 3 小时烤盘。日产 150–200 个烤盘 = 2–3 小时人工 = 每月 1,500–2,300 美元工资，还要面对人员流动率。',
    needs: '机器必须容纳烤盘、回本要快、能无人值守地运转、占地要小（小型面包店没几平米能留给洗碗机）。',
    fit: 'JD-3 就是为单店面包店调校的：650×550 mm 洗碗筐、180 个烤盘/小时、2 分钟一个循环、占地仅 0.65 m²。整夜的烤盘 30 分钟搞定。',
    roi: '典型情境：每月 26 天，每天 2 名清洁工 × 时薪 12 美元 × 3 小时 = 1,872 美元/月 = 22,464 美元/年。换上 JD-3 后同样的工作每天 30 分钟搞定，每年净省 ~20,500 美元。设备本身 3.5 个月回本，加上运费与安装约 4–5 个月。结论：约 4 个月。',
    faqs: [
      { q: '能洗 Pullman 高吐司模具吗？', a: '可以，腔体高度最高 33 cm。' },
      { q: '一晚的烤盘 30 分钟真的够吗？', a: '180 个/小时 × 0.5 小时 = 90 个，覆盖大多数单店面包店一整天的产量。' },
      { q: '新加坡、马来西亚都有 DDP 价格吗？', a: '有。新加坡约 6,800 SGD，马来西亚约 22,000 MYR — 含海运、关税、GST/SST。',
      },
    ],
  },
  {
    slug: 'coffee-chain',
    name: '咖啡连锁',
    icon: '☕',
    title: '咖啡连锁的中央厨房洗碗方案',
    description: '一台 JD-3 服务 5–15 家门店的中央备餐 — 杯具、糕点托盘、搅拌桶一台搞定。',
    reality: '连锁咖啡的中央厨房既要洗大量杯具，又要洗烤制糕点的 600×400 烤盘。台下式洗碗机塞不下烤盘，烘焙专用机又不会洗杯子 — 大多数运营者最后买了两台机器，多花一倍的钱。',
    needs: '一台机器同时兼容杯具与 600×400 烤盘；处理量要跟得上早班高峰；自动化高，能让 1 名员工同时备料与洗涤。',
    fit: 'JD-3 的 650×550 mm 洗碗筐双向兼容：竖向放杯具能装 25 个，平铺烤盘一次 6 个。180 个/小时的吞吐对应早班完整产能。',
    roi: '15 家门店每天 1,500 个杯具 + 200 个烤盘。手洗或两台机器分工，每年人力 + 设备成本约 8 万美元。一台 JD-3 替代后年成本约 8,000 美元，5 年累计节省 36 万美元以上。',
    faqs: [
      { q: '能洗咖啡机的奶壶吗？', a: '可以。不锈钢奶壶可装 30+ 个/次。' },
      { q: '高峰期会洗不及吗？', a: '180 个/小时的实测吞吐对应每分钟 3 个，早班 2 小时可清洗 360 个。' },
      { q: '夜间能否无人值守运行？', a: '不建议无人值守过夜，但下班前装一波 + 第二天开工前装一波，每天人工干预 ≤ 15 分钟。' },
    ],
  },
  {
    slug: 'patisserie',
    name: '法式甜品店',
    icon: '🧁',
    title: '法式甜品店的高规格洗涤解决方案',
    description: '糖渍残留、奶油挂壁、Silpat 硅胶垫 — 法式甜品的洗涤难点 JD-3 都为您解决。',
    reality: '法式甜品的洗涤难点是糖渍——熔化的焦糖、糖霜、糖浆烤干后特别难清。人工洗很慢，水温不够还洗不干净；普通商用洗碗机的最终漂洗温度不到 82°C，残留风险高。',
    needs: '洗涤水温必须能到 65°C 以上、最终漂洗必须 ≥82°C；要兼容 Silpat 硅胶垫、慕斯圈、蛋糕模具、玻璃罐、调温巧克力刮刀等异形器具。',
    fit: 'JD-3 标配 60–65°C 洗涤池 + ≥82°C 最终漂洗，糖渍一次到位。洗碗筐 650×550 mm 兼容 Silpat 全垫平铺、慕斯圈正放、调温刮刀斜插。',
    roi: '中等规模法式甜品店日产 100 件甜品，洗涤人工 2 小时/天 × 26 天 × 时薪 12 美元 = 624 美元/月。糖渍报废的器具每月平均 200 美元。换 JD-3 后总成本降至 60 美元/月（电费 + 洗剂），每年节省约 9,000 美元。设备约 6 个月回本。',
    faqs: [
      { q: '能洗 Silpat 硅胶烤垫吗？', a: '可以。整块平铺进洗碗筐，水温不超过 82°C 不会损坏硅胶。' },
      { q: '玻璃罐会不会有水渍？', a: '配合漂洗助剂使用基本无水渍。出口前漂洗水自动滴干 30 秒。' },
      { q: '需要预冲吗？', a: '糖渍重的话建议预冲 5 秒，节省洗涤剂用量。' },
    ],
  },
  {
    slug: 'cake-shop',
    name: '蛋糕店',
    icon: '🎂',
    title: '蛋糕店专用的烤盘与模具清洗',
    description: '8 寸 / 10 寸蛋糕模具、慕斯圈、烘焙工具一次洗净，JD-3 让您专心做蛋糕而不是洗模具。',
    reality: '蛋糕店每天要洗 30–80 个蛋糕模具、慕斯圈、转台板。模具油烟重、形状又深，人工洗常常洗不到底，残留油脂影响下批口感。',
    needs: '能伸进模具内部的高压旋转喷臂、对深型容器的覆盖率高、可放慕斯圈的开放支架。',
    fit: 'JD-3 双旋转喷臂 + 360°喷射几何，深模具内部不留死角。洗碗筐高度 55 cm 兼容 10 寸高边模具竖放。',
    roi: '日洗 50 个蛋糕模具 = 1.5 小时人工 × 26 天 × 12 美元 = 468 美元/月。模具油渍残留导致的二次洗涤与异味处理还要再加 100 美元/月。换 JD-3 后人工 15 分钟/天，每年净省 6,500 美元。',
    faqs: [
      { q: '能洗 12 寸高边模具吗？', a: '可以，腔体高度 33 cm，12 寸（30 cm）模具竖放刚好。' },
      { q: '裱花嘴这类小件呢？', a: '配杯架/小件筐，可装 30 个以上。' },
      { q: '蛋糕转台呢？', a: '直径 35 cm 以下转台可竖放洗涤。' },
    ],
  },
  {
    slug: 'small-restaurant',
    name: '小型餐厅',
    icon: '🍽️',
    title: '50 座以下小型餐厅的全能洗涤方案',
    description: '一台机器同时洗碗碟、锅具、烤盘 — 一名服务员的厨房后勤压力骤减。',
    reality: '50 座小型餐厅一晚要洗 200+ 件器具。台下式洗碗机洗碗碟没问题，但锅、烤盘塞不下。结果厨师做完菜还要手洗锅 1 小时才能下班。',
    needs: '兼容碗碟、汤桶、不锈钢锅、烤盘的大腔体；2 分钟快洗循环；动作要快——晚市 9 点后没人想再花一个小时手洗。',
    fit: 'JD-3 腔体 650×550 mm 可同时放 6 个汤碗 + 2 口锅，或 6 个烤盘。2 分钟循环对应晚高峰每小时可周转 30 次。整晚的器具 1 小时全部洗完。',
    roi: '小型餐厅每年洗涤人工成本约 12,000 美元（兼职 + 加班费）。JD-3 把这个数字压到 2,000 美元/年（电费 + 洗剂 + 偶尔维护）。设备 6–8 个月回本。',
    faqs: [
      { q: '能洗大汤锅吗？', a: '直径 28 cm、高 28 cm 以下可正放，再大可斜放。' },
      { q: '玻璃高脚杯呢？', a: '配杯架，高度 24 cm 以下没问题。' },
      { q: '不锈钢炒锅呢？', a: '需斜放，深度大于 12 cm 的中式炒锅要看具体角度。' },
    ],
  },
  {
    slug: 'cafeteria',
    name: '员工食堂',
    icon: '🥪',
    title: '企业 / 学校 / 园区食堂的批量洗涤',
    description: '高峰时段 30 分钟收完 500 件餐具？JD-3 配合分餐流程，让食堂员工准时下班。',
    reality: '员工食堂在 12:00–13:00 一波吃饭，13:00–13:30 餐具全部回收。30 分钟内要洗完 500+ 件餐盘、汤碗、餐具，否则下午茶时段无碗可用。',
    needs: '极高的吞吐密度；连续运转能力（设备不能因连用 30 分钟过热停机）；耐用，每天高强度循环 5 年不坏。',
    fit: 'JD-3 设计就是为连续高强度场景：每小时 30 个循环不间歇运行无压力，180 个烤盘等价于 540 个标准餐盘。CE 安全认证，门联锁与电压保护让操作工无需培训。',
    roi: '食堂每年餐具洗涤人工 18,000 美元（3 人 × 兼职）。JD-3 替代 1 人后年节省 6,000 美元，6 个月回本。第二年开始净利。',
    faqs: [
      { q: '能洗保温餐盘吗？', a: '可以。不锈钢保温餐盘平放或竖放都可。' },
      { q: '一次洗多少？', a: '标准餐盘 18 个/次，3.6 秒洗一个。' },
      { q: '会不会噪音太大？', a: '运转噪音 ≤ 70 dB，不影响员工区。' },
    ],
  },
  {
    slug: 'hotel-pastry-kitchen',
    name: '酒店西点房',
    icon: '🏨',
    title: '五星酒店西点房的专业洗涤',
    description: '高端早餐、下午茶、宴会糕点 — 西点房一天 6 个时段都要洗器具。JD-3 让一名员工兼顾洗涤与摆盘。',
    reality: '五星酒店西点房从早 6:00 到晚 10:00 不停产出：早餐糕点、下午茶塔类、宴会甜品、夜宵小点。每个时段都有一波器具要洗，传统人工洗涤排班至少 2 个全职。',
    needs: '可全天候运转、单次循环短（< 3 分钟）让出餐与洗涤可同时进行；兼容高端器具（巧克力调温台板、银盘、玻璃罐）；操作简单——西点学徒也能用。',
    fit: 'JD-3 单次循环 2 分钟，门联锁触发自动开始 — 关上盖板就行，无需按键。SUS304 全食品级钢，与高端器具同等材质等级，不会留下化学残留影响巧克力风味。',
    roi: '五星酒店西点房 2 名洗涤工人年薪共 36,000 美元（迪拜、新加坡口径）。换 JD-3 后 1 人即可，年节省 18,000 美元。第 4 个月开始净利，第 10 年累计节省约 17 万美元。',
    faqs: [
      { q: '能洗银盘吗？', a: '可以，但建议使用酶基洗涤剂（pH 7–10），避免碱性剂腐蚀。' },
      { q: '巧克力调温台板呢？', a: '可以，平放进洗碗筐，单次 2 分钟即可。' },
      { q: '有酒店 SOP 文档支持吗？', a: '我们提供英文 + 中文的 SOP 模板，可直接接入您的酒店 HACCP 体系。' },
    ],
  },
  {
    slug: 'cloud-kitchen',
    name: '云厨房 / 中央厨房',
    icon: '👨‍🍳',
    title: '云厨房 / 外卖中央厨房的器具周转',
    description: '每天 500+ 单外卖背后是 800+ 件器具的周转。JD-3 让中央厨房保持高节奏运转。',
    reality: '云厨房没有堂食压力，但器具周转密度更高 — 每天 500+ 单外卖意味着 800+ 件备餐器具需要在 2–3 个洗涤窗口内全部清干净。',
    needs: '极高的单位时间吞吐、低水耗（中央厨房常按用水计费）、低人力依赖。',
    fit: 'JD-3 每循环用水仅 2.0–2.5 升 — 比同级设备低 60%。180 个/小时的吞吐意味着 2 个 1 小时窗口可洗 360 件，覆盖大多数云厨房日需求。',
    roi: '云厨房每月用水节省约 30 m³ × 当地水价（新加坡 3.7 SGD/m³）= 111 SGD/月，加上人工节省 1,800 SGD/月。年节省 ~23,000 SGD，3 个月回本。',
    faqs: [
      { q: '可对接厨房管理系统吗？', a: 'JD-3 是机械式控制，无 API 对接。但运行日志可手动导出 PDF。' },
      { q: '水回收系统兼容吗？', a: '可对接灰水回收（漂洗水温度高，回收后可做预冲水）。' },
      { q: '占地多大？', a: '0.65 m²（804 × 816 mm），高度 1,470 mm（盖板打开 1,950 mm）。' },
    ],
  },
];

function escapeJsString(s) {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n');
}
function escapeHtmlAttr(s) {
  return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

function businessTypeFile(bt) {
  const faqsLiteral = bt.faqs.map((f) => `{q:'${escapeJsString(f.q)}',a:'${escapeJsString(f.a)}'}`).join(',');
  return `---
import BusinessTypeLayout from '../../../layouts/BusinessTypeLayout.astro';
const locale = 'zh' as const;
---
<BusinessTypeLayout locale={locale} canonicalPath="/by-business-type/${bt.slug}/" slug="${bt.slug}" businessName="${escapeHtmlAttr(bt.name)}" icon="${bt.icon}"
  title="${escapeHtmlAttr(bt.title)}"
  description="${escapeHtmlAttr(bt.description)}"
  reality={${JSON.stringify(bt.reality)}}
  needs={${JSON.stringify(bt.needs)}}
  fit={${JSON.stringify(bt.fit)}}
  roi={${JSON.stringify(bt.roi)}}
  faqs={[${faqsLiteral}]}
/>
`;
}

// ========================================================================
// 2) what-it-washes detail pages (excluding baking-trays-600x400)
// ========================================================================
const washes = [
  { slug: 'sheet-pans',      name: '美式烤盘',              desc: '18×26 英寸美式半幅烤盘 / 全幅烤盘，对角线放入 JD-3 650×550 mm 腔体。' },
  { slug: 'mixing-bowls',    name: '搅拌桶',                desc: '5 公升、10 公升 KitchenAid 与商用搅拌桶，竖放洗净底部死角。' },
  { slug: 'cake-pans',       name: '蛋糕模具',              desc: '8 寸 / 10 寸 / 12 寸蛋糕模具、慕斯圈、心形模具，深底油渍一次清。' },
  { slug: 'pizza-pans',      name: '披萨盘',                desc: '14 寸 / 16 寸披萨盘，烤焦的奶酪渍 JD-3 用 65°C 主洗 + 82°C 漂洗解决。' },
  { slug: 'frying-baskets',  name: '炸篮',                  desc: '商用油炸篮、薯条筐 — 油渍最难洗的器具之一，JD-3 配合高浓度碱性洗涤剂事半功倍。' },
  { slug: 'stockpots',       name: '汤桶 / 大型锅具',       desc: '直径 28 cm 以下的不锈钢汤桶、酱汁锅 — 西餐厨房与酒店中厨高频器具。' },
  { slug: 'dishes-plates',   name: '碗碟餐具',              desc: '餐盘、汤碗、咖啡杯 — JD-3 配杯架可一次洗 25 个咖啡杯。' },
  { slug: 'utensils-mixers', name: '小工具与搅拌机配件',    desc: '搅拌钩、平桨、打蛋器、刮刀 — KitchenAid 与 Hobart 商用搅拌机的所有附件 JD-3 都能洗。' },
  { slug: 'large-bakeware',  name: '大型烘焙器具',          desc: '法棍模具、长条吐司模、烤鸡架 — 超尺寸器具斜放进 JD-3 腔体也能完整清洗。' },
];

const washChallengeTpl = (name) =>
  `${name} 在商用烘焙环境中的清洗难点是：残留物类型（焦糖、粘附面团、油脂）多样、几何形状特殊、单次装载密度高。人工清洗耗时长，而且很难做到食品法规要求的热力杀菌效果。`;

const washHandlesTpl = (name) =>
  `JD-3 配备两组旋转喷臂 + 针对 ${name} 优化的喷嘴几何角度、60–65°C 主洗水温、>82°C 最终漂洗，并配合 650×550 mm 腔体可装下加大尺寸器具。标准 2 分钟循环即可完整处理满载量。`;

const washSettingsTpl = () =>
  `标准 2 分钟循环 + 65°C 主洗 + 82°C 最终漂洗 + 商用低泡碱性洗涤剂。建议短暂预冲以保护循环水质。`;

const washFaqs = (name) => [
  { q: '需要预冲吗？', a: `需要 — JD-3 的主洗水循环使用以提升能效，简短的预冲可避免洗涤池积聚 ${name} 的残留物，并延长洗涤剂使用时间。` },
  { q: '推荐用什么洗涤剂？', a: '商用低泡碱性洗涤剂（pH 12–13）。糖渍重的器具（甜品店）建议选用专为糖类残留设计的复合活性剂。' },
  { q: '一个循环多久？', a: '标准循环 2 分钟。高峰期残留较轻时可用 90 秒快洗循环。' },
];

function washFile(item) {
  const faqsLiteral = washFaqs(item.name).map((f) => `{q:${JSON.stringify(f.q)},a:${JSON.stringify(f.a)}}`).join(',');
  return `---
import WhatItWashesLayout from '../../../layouts/WhatItWashesLayout.astro';
const locale = 'zh' as const;
---
<WhatItWashesLayout
  locale={locale}
  canonicalPath="/what-it-washes/${item.slug}/"
  itemName={${JSON.stringify(item.name)}}
  title={${JSON.stringify(`JD-3 清洗 ${item.name} | V-TAI 烘焙烤盘清洗机`)}}
  description={${JSON.stringify(`V-TAI JD-3 高效清洗 ${item.name}：${item.desc} 每小时 180 个，CE 认证，深圳 FOB 起价 4,400 美元。`)}}
  challenge={${JSON.stringify(washChallengeTpl(item.name))}}
  howItHandles={${JSON.stringify(washHandlesTpl(item.name))}}
  recommendedSettings={${JSON.stringify(washSettingsTpl())}}
  faqs={[${faqsLiteral}]}
/>
`;
}

// ========================================================================
// 3) Resource stubs + shipping-payment + blog stubs
// ========================================================================
const resourceStubs = [
  { slug: 'buyers-guide-pdf',     title: '采购指南 PDF' },
  { slug: 'free-roi-calculator',  title: '免费 ROI 计算器' },
  { slug: 'video-library',        title: '视频资源库' },
];

function resourceStubFile(slug, title) {
  return `---
import BaseLayout from '../../../layouts/BaseLayout.astro';
import BreadcrumbNav from '../../../components/BreadcrumbNav.astro';
import CTASection from '../../../components/CTASection.astro';
import { t } from '../../../i18n/utils';
const locale = 'zh' as const;
---
<BaseLayout title=${JSON.stringify(`${title} | JD-3`)} description=${JSON.stringify(title)} locale={locale} canonicalPath="/resources/${slug}/" schemaType="Article">
<BreadcrumbNav items={[{label: t(locale,'nav.home'), href:'/zh/'},{label: t(locale,'nav.resources'), href:'/zh/resources/'},{label: ${JSON.stringify(title)}}]} />
<section class="section"><div class="container-prose">
<h1 class="mb-4">${title}</h1>
<p class="text-lg mb-6 text-bakery-navy/70">此页面有英文完整版本可供下载：</p>
<p><a href="/resources/${slug}/" class="btn-primary inline-block">${title}（英文）→</a></p>
</div></section>
<CTASection locale={locale} />
</BaseLayout>
`;
}

const blogStubs = [
  { slug: '600x400-tray-size-history-and-standard', title: '600×400 mm 烤盘标准的由来' },
  { slug: 'dishwasher-roi-for-small-bakery',         title: '小型烘焙店的洗碗机投资回报算账' },
  { slug: 'why-your-bakery-needs-a-tray-washer',     title: '为什么您的烘焙店需要一台烤盘清洗机' },
];

function blogStubFile(slug, title) {
  return `---
import BaseLayout from '../../../layouts/BaseLayout.astro';
import BreadcrumbNav from '../../../components/BreadcrumbNav.astro';
import CTASection from '../../../components/CTASection.astro';
import { t } from '../../../i18n/utils';
const locale = 'zh' as const;
---
<BaseLayout title=${JSON.stringify(`${title}（英文版）| JD-3`)} description=${JSON.stringify(title)} locale={locale} canonicalPath="/blog/${slug}/" schemaType="Article">
<BreadcrumbNav items={[{label: t(locale,'nav.home'), href:'/zh/'},{label: t(locale,'nav.blog'), href:'/zh/blog/'},{label: ${JSON.stringify(title)}}]} />
<section class="section"><div class="container-prose">
<h1 class="mb-4">${title}</h1>
<p class="text-lg mb-6 text-bakery-navy/70">这篇文章暂时未翻译成简体中文，请阅读完整的英文版本：</p>
<p><a href="/blog/${slug}/" class="btn-primary inline-block">${title}（英文）→</a></p>
</div></section>
<CTASection locale={locale} />
</BaseLayout>
`;
}

const shippingPaymentZh = `---
import BaseLayout from '../../layouts/BaseLayout.astro';
import BreadcrumbNav from '../../components/BreadcrumbNav.astro';
import CTASection from '../../components/CTASection.astro';
import { t } from '../../i18n/utils';
const locale = 'zh' as const;
---
<BaseLayout title="货运与付款 | JD-3" description="V-TAI JD-3 货运与付款条款。" locale={locale} canonicalPath="/shipping-payment/">
<BreadcrumbNav items={[{label: t(locale,'nav.home'), href:'/zh/'},{label: '货运与付款'}]} />
<section class="section"><div class="container-prose">
<h1 class="mb-4">货运与付款</h1>
<h2 class="mt-6 mb-3">付款方式</h2>
<ul class="list-disc list-inside space-y-1">
<li>下单时支付 30% 定金，发货前支付剩余 70%</li>
<li>电汇 (TT)，2 万美元以上订单可用信用证 (L/C)</li>
<li>主结算货币为美元；接受欧元、英镑、阿联酋迪拉姆</li>
</ul>
<h2 class="mt-6 mb-3">交货周期</h2>
<ul class="list-disc list-inside space-y-1">
<li>生产：4 周</li>
<li>海运：20–35 天</li>
<li>空运：3–7 天</li>
</ul>
<h2 class="mt-6 mb-3">18 个市场的 DDP 报价</h2>
<p>面向 18 个主要市场我们直接提供当地货币的 DDP 到岸价。详见 <a href="/zh/pricing/by-country/" class="underline">各国 DDP 价格</a>。</p>
</div></section>
<CTASection locale={locale} />
</BaseLayout>
`;

// ========================================================================
// 4) Write everything
// ========================================================================
let count = 0;

for (const bt of businessTypes) {
  const p = join(root, `src/pages/zh/by-business-type/${bt.slug}.astro`);
  await mkdir(dirname(p), { recursive: true });
  await writeFile(p, businessTypeFile(bt), 'utf8');
  count++;
}

for (const w of washes) {
  const p = join(root, `src/pages/zh/what-it-washes/${w.slug}.astro`);
  await mkdir(dirname(p), { recursive: true });
  await writeFile(p, washFile(w), 'utf8');
  count++;
}

for (const r of resourceStubs) {
  const p = join(root, `src/pages/zh/resources/${r.slug}.astro`);
  await mkdir(dirname(p), { recursive: true });
  await writeFile(p, resourceStubFile(r.slug, r.title), 'utf8');
  count++;
}

for (const b of blogStubs) {
  const p = join(root, `src/pages/zh/blog/${b.slug}.astro`);
  await mkdir(dirname(p), { recursive: true });
  await writeFile(p, blogStubFile(b.slug, b.title), 'utf8');
  count++;
}

await writeFile(join(root, 'src/pages/zh/shipping-payment.astro'), shippingPaymentZh, 'utf8');
count++;

console.log(`Generated ${count} Chinese content pages.`);
