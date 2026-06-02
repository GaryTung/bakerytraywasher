#!/usr/bin/env node
// Comprehensive fixes for zh-locale content issues:
// 1. Cafeteria FAQ: 18 plates → 8 plates per cycle
// 2. Cloud-kitchen FAQ: machine HAS built-in water recovery
// 3. Baking-trays-600x400: maintenance wording + FAQSection locale prop
// 4. All 9 what-it-washes pages: item-specific FAQs + properly qualified descriptions
import { writeFile, readFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');
const w = async (rel, body) => writeFile(join(root, rel), body, 'utf8');

// ======================================================================
// 1. Cafeteria — fix FAQ "一次洗多少"
// ======================================================================

await w('src/pages/zh/by-business-type/cafeteria.astro', `---
import BusinessTypeLayout from '../../../layouts/BusinessTypeLayout.astro';
const locale = 'zh' as const;
---
<BusinessTypeLayout locale={locale} canonicalPath="/by-business-type/cafeteria/" slug="cafeteria" businessName="员工食堂" icon="🥪"
  title="企业 / 学校 / 园区食堂的批量洗涤"
  description="高峰时段 30 分钟收完 500 件餐具？JD-3 配合分餐流程，让食堂员工准时下班。"
  reality={"员工食堂在 12:00–13:00 一波吃饭，13:00–13:30 餐具全部回收。30 分钟内要洗完 500+ 件餐盘、汤碗、餐具，否则下午茶时段无碗可用。"}
  needs={"极高的吞吐密度；连续运转能力（设备不能因连用 30 分钟过热停机）；耐用，每天高强度循环 5 年不坏。"}
  fit={"JD-3 设计就是为连续高强度场景：每小时 30 个循环不间歇运行无压力，按标准餐盘装载（每筐 8 个）一小时可清洗约 240 个标准餐盘。CE 安全认证，门联锁与电压保护让操作工无需培训。"}
  roi={"食堂每年餐具洗涤人工 18,000 美元（3 人 × 兼职）。JD-3 替代 1 人后年节省 6,000 美元，6 个月回本。第二年开始净利。"}
  faqs={[
    {q:'能洗保温餐盘吗？',a:'可以。不锈钢保温餐盘平放或竖放都可。'},
    {q:'一次洗多少？',a:'标准餐盘每筐装 8 个。2 分钟一个循环 — 每小时清洗约 240 个标准餐盘。'},
    {q:'会不会噪音太大？',a:'运转噪音 ≤ 70 dB，不影响员工区。'},
  ]}
/>
`);

// ======================================================================
// 2. Cloud-kitchen — fix FAQ "水回收系统兼容吗"
// ======================================================================

await w('src/pages/zh/by-business-type/cloud-kitchen.astro', `---
import BusinessTypeLayout from '../../../layouts/BusinessTypeLayout.astro';
const locale = 'zh' as const;
---
<BusinessTypeLayout locale={locale} canonicalPath="/by-business-type/cloud-kitchen/" slug="cloud-kitchen" businessName="中央厨房" icon="👨‍🍳"
  title="云厨房 / 外卖中央厨房的器具周转"
  description="每天 500+ 单外卖背后是 800+ 件器具的周转。JD-3 让中央厨房保持高节奏运转。"
  reality={"云厨房没有堂食压力，但器具周转密度更高 — 每天 500+ 单外卖意味着 800+ 件备餐器具需要在 2–3 个洗涤窗口内全部清干净。"}
  needs={"极高的单位时间吞吐、低水耗（中央厨房常按用水计费）、低人力依赖。"}
  fit={"JD-3 每循环用水仅 2.0–2.5 升 — 比同级设备低 60%。每小时 30 个循环按 6 个标准烤盘装载 = 180 个/小时，覆盖大多数云厨房日需求。"}
  roi={"云厨房每月用水节省约 30 m³ × 当地水价（新加坡 3.7 SGD/m³）= 111 SGD/月，加上人工节省 1,800 SGD/月。年节省 ~23,000 SGD，3 个月回本。"}
  faqs={[
    {q:'可对接厨房管理系统吗？',a:'JD-3 是机械式控制，无 API 对接。但运行日志可手动导出 PDF。'},
    {q:'内置水回收系统吗？',a:'内置 — JD-3 配有热回收系统：>82°C 漂洗后的高温水会自动回流至主洗缸，既保持主洗温度，又节能 15–25%。无需外接灰水回收装置。'},
    {q:'占地多大？',a:'0.65 m²（804 × 816 mm），高度 1,470 mm（盖板打开 1,950 mm）。'},
  ]}
/>
`);

// ======================================================================
// 3. Baking-trays-600x400 — fix maintenance + add locale to FAQSection
// ======================================================================

await w('src/pages/zh/what-it-washes/baking-trays-600x400.astro', `---
import BaseLayout from '../../../layouts/BaseLayout.astro';
import BreadcrumbNav from '../../../components/BreadcrumbNav.astro';
import ImagePlaceholder from '../../../components/ImagePlaceholder.astro';
import InlineInquiryForm from '../../../components/InlineInquiryForm.astro';
import ComparisonTable from '../../../components/ComparisonTable.astro';
import FAQSection from '../../../components/FAQSection.astro';
import CTASection from '../../../components/CTASection.astro';
const locale = 'zh' as const;
const rows = [
  { label: 'V-TAI JD-3',          jd3: '650 × 550 mm', competitor: '✓ 兼容', highlight: true },
  { label: 'Hobart AMX',          jd3: '500 × 500 mm', competitor: '✗ 不兼容' },
  { label: 'Jackson TempStar',    jd3: '500 × 500 mm', competitor: '✗ 不兼容' },
  { label: 'CMA L-1X16-BW',       jd3: '500 × 500 mm', competitor: '✗ 不兼容' },
  { label: 'Winterhalter UC-M',   jd3: '500 × 500 mm', competitor: '✗ 不兼容' },
];
---
<BaseLayout
  title="600×400 mm 欧标烘焙烤盘清洗机 — JD-3 by V-TAI"
  description="同价位段唯一一台能装下 600×400 mm 欧标烤盘的揭盖式商用洗碗机。Hobart、Jackson、CMA、Winterhalter 都用 500×500 洗碗筐 — 装不下。"
  locale={locale}
  canonicalPath="/what-it-washes/baking-trays-600x400/"
  schemaType="Article"
>
<BreadcrumbNav items={[{label:'首页',href:'/zh/'},{label:'清洗品类',href:'/zh/what-it-washes/'},{label:'600×400 mm 烤盘'}]} />

<section class="section">
  <div class="container-page grid lg:grid-cols-3 gap-10">
    <article class="lg:col-span-2 prose-section">
      <p class="eyebrow mb-3">⭐ 主打用例</p>
      <h1 class="mb-4">600×400 mm 欧标烘焙烤盘清洗机 — 把欧洲标准做到 4,400 美元以内</h1>
      <p class="text-lg text-bakery-navy/80 mb-6">
        JD-3 是这个价位段唯一一台能装下 600×400 mm 欧标烤盘的揭盖式商用洗碗机。其它主流品牌 — Hobart、Jackson、CMA、Winterhalter — 都是 500×500 mm 洗碗筐，物理上装不下。
      </p>

      <ImagePlaceholder src="/images/600x400-tray-comparison.webp" alt="600×400 mm 烤盘装入 JD-3 650×550 洗碗筐 vs 装不进竞品 500×500 洗碗筐" ratio="16/9" label="600×400 烤盘兼容性对比图" />

      <h2 class="mt-10 mb-3">什么是 600×400「欧标」？</h2>
      <p>600×400 mm 烤盘尺寸 — 正式名称「Euro Bakery Norm（欧洲烘焙标准）」— 起源于 1960 年代欧洲，作为商用烘焙生产线标准化烤盘尺寸出现。这个尺寸是 GN（Gastronorm）2/1 标准的子尺寸，可以与欧洲烤盘小推车（德语 Stikkenwagen、法语 chariots de fournil）完美配合，便于批量运输。</p>
      <p class="mt-3">一代人之内，600×400 成为欧洲商用烘焙的主流标准，然后扩展到亚洲、澳大利亚。所有主流蒸烤箱厂商 — <strong>Rational、Convotherm、Unox、Tecnoeka、Salva、Wachtel、MIWE、Werner & Pfleiderer</strong> — 的烤盘货架都按这个尺寸设计。这意味着过去 25 年生产的任何一台现代商用烘焙烤箱都是为它打造的。</p>
      <p class="mt-3">北美市场近年也在大规模采用这个标准。美式 18×26"（457×660 mm）半幅烤盘正逐步让位给公制 600×400，因为越来越多的欧洲蒸烤箱进口到北美。到 2030 年，600×400 将成为全球商用烘焙的事实标准。</p>

      <h2 class="mt-10 mb-3">为什么大多数揭盖式商用洗碗机装不下</h2>
      <p>同级商用洗碗机的洗碗筐尺寸（按主流品牌列）：</p>
      <ul class="list-disc list-inside space-y-1 my-3">
        <li><strong>Hobart AMX：</strong>500 × 500 mm</li>
        <li><strong>Jackson TempStar HH-E：</strong>500 × 500 mm</li>
        <li><strong>CMA L-1X16-BW：</strong>500 × 500 mm</li>
        <li><strong>Winterhalter UC-M / UC-L：</strong>500 × 500 mm</li>
        <li><strong>Champion EHS-2：</strong>500 × 500 mm</li>
      </ul>
      <p>600×400 mm 烤盘装不进 500×500 mm 洗碗筐 — 横放装不进，斜放也装不进（500×500 的对角线虽然是 707 mm，但洗碗筐口的对角实际可入空间还是 500 mm，600 mm 的烤盘过不去）。物理上就是不行。</p>
      <p class="mt-3"><strong>烘焙业主常见的「变通」做法 — 全都不好：</strong></p>
      <ul class="list-disc list-inside space-y-1 my-3">
        <li><em>把烤盘剪小。</em>这等于放弃了与烤盘推车的配合，得不偿失。</li>
        <li><em>单买一台「烘焙专用」洗碗机。</em>设备投入翻倍，还要再占 2 m² 的厨房空间。</li>
        <li><em>烤盘全部手洗。</em>慢、不稳定、累人，而且是隐形的人力成本黑洞。</li>
        <li><em>买 Hobart PROFI 高端型号。</em>价格明显更高 — 财务上很痛。</li>
      </ul>

      <h2 class="mt-10 mb-3">JD-3 的解决方案</h2>
      <p>JD-3 从设计第一天起就采用 <strong>650 × 550 mm 洗碗筐</strong> — 这个尺寸是为容纳 600×400 烤盘并留出装卸余量而专门选择的。这是整台机器里最关键的一个设计决策。</p>
      <p class="mt-3"><strong>由此带来的效果：</strong></p>
      <ul class="list-disc list-inside space-y-1 my-3">
        <li>多个 600×400 烤盘可竖向装入腔体，烤盘间留出喷水穿透空间。</li>
        <li>高压双臂喷射覆盖烤盘背面 — 手洗经常漏掉的位置。</li>
        <li>360° 旋转喷臂保证所有角度都喷到。</li>
        <li>>82°C 最终漂洗在不损伤烤盘钢材的前提下完成热力杀菌。</li>
        <li>循环结束后 30 秒内滴干 — 立刻可回到下一炉使用。</li>
      </ul>

      <h2 class="mt-10 mb-3">哪些烘焙店需要 600×400 兼容？</h2>
      <p>以下情况建议优先考虑 600×400 兼容性：</p>
      <ul class="list-disc list-inside space-y-1 my-3">
        <li>使用 Convotherm、Rational、Unox、Tecnoeka、Salva、Wachtel、MIWE、Werner & Pfleiderer 等蒸烤箱（都按 600×400 设计）</li>
        <li>批发型烘焙坊，供应咖啡馆、餐厅、超市</li>
        <li>多门店的法式甜品店或糕点连锁</li>
        <li>运营地点在欧洲、亚洲、澳大利亚、中东 — 任何以公制为主的市场</li>
        <li>采用欧洲烘焙模式扩张的亚洲、拉美连锁（许多新加坡、马来西亚、香港高端烘焙店都遵循欧洲规范）</li>
      </ul>

      <h2 class="mt-10 mb-3">对比表 — 烤盘兼容性</h2>
      <ComparisonTable competitorName="兼容 600×400 mm？" rows={rows} />
    </article>

    <aside class="lg:sticky lg:top-24 self-start">
      <InlineInquiryForm locale={locale} title="索取 600×400 规格报价" />
      <div class="mt-6 card">
        <h3 class="text-base mb-3">相关链接</h3>
        <ul class="space-y-2 text-sm">
          <li><a href="/zh/guides/600x400-bakery-norm-explained/" class="hover:underline">600×400 标准详解</a></li>
          <li><a href="/zh/product/jd-3-vs-hobart-amx/" class="hover:underline">vs Hobart AMX</a></li>
          <li><a href="/zh/by-business-type/bakery-shop/" class="hover:underline">面包店专题</a></li>
        </ul>
      </div>
    </aside>
  </div>
</section>

<FAQSection locale={locale} items={[
  { q: '也能洗美式 18×26" 半幅烤盘吗？', a: '可以 — 18×26"（457×660 mm）烤盘斜放进 650×550 腔体。最后留出的空隙较紧但能用。' },
  { q: '能洗 GN 2/1 万能蒸烤盘吗？', a: '可以 — GN 2/1 是 650×530 mm，留出 0–20 mm 空隙刚好。' },
  { q: '每个循环能装几个 600×400 烤盘？', a: '标准 6 个/循环。残留较轻的高峰期最多可装 8 个/循环。每个循环 2–3 分钟，视残留程度而定。' },
  { q: '推荐用什么洗涤剂？', a: '标准商用低泡碱性洗涤剂（pH 12–13）。糖渍重的残留（蛋糕、甜品店）建议选用专为糖类残留设计的洗涤剂。' },
  { q: '每天烤盘的清洗维护怎么做？', a: '每日：滤网冲洗（2 分钟）；每周：腔体擦拭（10 分钟）；每月：除垢（30 分钟）；每年：本地普通电工师傅按照随机附带的维护手册做一次年度检修（更换易损件、检查热敏元件），无需厂家技师上门。' },
  { q: 'JD-3 的交货周期？', a: '深圳生产 4–6 周，加海运 20–35 天（视目的地）。新加坡、马来西亚、香港、台湾通常 6–8 周到货。' },
  { q: 'JD-3 兼容 Convotherm 蒸烤箱的烤盘吗？', a: '兼容 — Convotherm 用 600×400 EN 1/1 标准，和其它欧洲蒸烤箱品牌一样。已确认兼容。' },
  { q: '我用的是 400×600 GN 1/1（旋转方向不同）的烤盘，能用吗？', a: '可以 — 400×600 与 600×400 是同一个尺寸，只是放置方向不同。完全兼容。' },
]} />

<CTASection locale={locale} title="需要清洗 600×400 mm 欧标烤盘？" subtitle="同价位段就这一台能装下。12 小时内出报价。" />
</BaseLayout>
`);

// ======================================================================
// 4. 9 what-it-washes detail pages — item-specific FAQs + qualified descriptions
// ======================================================================

const washes = [
  {
    slug: 'sheet-pans',
    name: '美式烤盘',
    desc: '18×26 英寸美式半幅烤盘 / 全幅烤盘，对角线放入 JD-3 650×550 mm 腔体。',
    perCycle: '每个标准烤盘装载量约 6 个/循环，2 分钟循环 = 每小时清洗约 180 个美式烤盘',
    faqs: [
      { q: '能装下美式 18×26" 全幅烤盘吗？', a: '可以。18×26"（457×660 mm）烤盘需斜放入 650×550 mm 腔体，对角空间正好。半幅烤盘（18×13"）可平铺。' },
      { q: '一次能洗几个美式烤盘？', a: '标准 18×26" 全幅 1–2 个/循环（斜放）；18×13" 半幅 6 个/循环。整夜下来 1 小时可洗 90–180 个。' },
      { q: '烤焦的焦糖残留洗得干净吗？', a: '可以。预先短暂浸泡或冲一下，然后用 pH 12–13 的低泡碱性洗涤剂 + 65°C 主洗 + >82°C 漂洗。焦糖残留通常一次循环就能洗净。' },
    ],
  },
  {
    slug: 'mixing-bowls',
    name: '搅拌桶',
    desc: '5 公升、10 公升 KitchenAid 与商用搅拌桶，竖放洗净底部死角。',
    perCycle: '5 公升搅拌桶可竖放 4 个/循环，2 分钟循环 = 每小时约 120 个；10 公升一次 2 个，约 60 个/小时',
    faqs: [
      { q: '搅拌桶底部的死角能洗干净吗？', a: '可以。JD-3 的双旋转喷臂中其中一组从底部向上喷射，专门覆盖深桶底部 — 这是揭盖式机型相对台下式的关键优势。' },
      { q: '能洗 12 公升以上的工业搅拌桶吗？', a: '12 公升以下竖放可装入腔体（最高 550 mm）。再大需要斜放，建议下单前发图片给我们确认尺寸。' },
      { q: '会损伤铝制搅拌桶吗？', a: 'JD-3 标准的 pH 12–13 碱性洗涤剂对铝有一定腐蚀风险。如果您用铝制搅拌桶（少见），建议改用酶基洗涤剂（pH 7–10）。SUS304 不锈钢搅拌桶则无任何影响。' },
    ],
  },
  {
    slug: 'cake-pans',
    name: '蛋糕模具',
    desc: '8 寸 / 10 寸 / 12 寸蛋糕模具、慕斯圈、心形模具，深底油渍一次清。',
    perCycle: '8 寸蛋糕模具可装 6 个/循环，10 寸 4 个/循环；2 分钟循环 = 每小时约 120–180 个蛋糕模具',
    faqs: [
      { q: '8 寸 / 10 寸 / 12 寸蛋糕模具都装得下吗？', a: '8 寸（20 cm）一次 6 个；10 寸（25 cm）一次 4 个；12 寸（30 cm）一次 2 个（竖放）。腔体高度 33 cm 可兼容深底高边模具。' },
      { q: '蛋糕烤焦的边缘清得干净吗？', a: '可以。65°C 主洗 + 双喷臂高压可清除大部分焦边残留。重度焦化建议预浸 5 分钟。' },
      { q: '不粘涂层的蛋糕模会被损伤吗？', a: '不会。JD-3 喷射压力针对食品级器具优化，远低于损伤不粘涂层的临界值。但仍建议慕斯圈、银边硅胶模具与重度涂层模具分开放置，避免相互碰撞磨损。' },
    ],
  },
  {
    slug: 'pizza-pans',
    name: '披萨盘',
    desc: '14 寸 / 16 寸披萨盘，烤焦的奶酪渍 JD-3 用 65°C 主洗 + 82°C 漂洗解决。',
    perCycle: '14 寸披萨盘可装 4 个/循环，16 寸 3 个/循环；2 分钟循环 = 每小时约 90–120 个披萨盘',
    faqs: [
      { q: '烤焦的奶酪能完全洗掉吗？', a: '一般可以。65°C 主洗能融解大部分奶酪油脂；如果披萨盘超过 12 小时未清洗导致奶酪硬化，建议预浸 10 分钟再入机。' },
      { q: '16 寸大披萨盘装得下吗？', a: '16 寸（40 cm）平放或竖放都可，单次最多 3 个。18 寸（46 cm）需要竖放且单次只能 1 个。' },
      { q: '不锈钢与铝制披萨盘都能洗吗？', a: '不锈钢可以放心使用标准 pH 12–13 洗涤剂。铝制披萨盘长期反复用强碱洗涤可能轻微氧化变黑（不影响使用），建议改用 pH 7–10 的酶基洗涤剂。' },
    ],
  },
  {
    slug: 'frying-baskets',
    name: '炸篮',
    desc: '商用油炸篮、薯条筐 — 油渍最难洗的器具之一，JD-3 配合高浓度碱性洗涤剂事半功倍。',
    perCycle: '标准矩形炸篮可装 4 个/循环，2 分钟循环 = 每小时约 120 个炸篮',
    faqs: [
      { q: '深炸残留的厚油渍能洗掉吗？', a: '可以，但需要专用方案：先用 65°C 主洗 + pH 13 强碱洗涤剂 + 82°C 漂洗。如果油渍已聚合成蜡状（连用 3 天未洗），建议先用沸水预浸 5 分钟再入机。' },
      { q: '油渍会不会留在机器内部？', a: '不会 — JD-3 的过滤网会拦截大颗粒油脂，主洗水带走乳化后的油。每日打烊时清理过滤网（2 分钟）+ 每周做一次脱脂循环，机器内部可保持干净。' },
      { q: '能洗深筒形薯条篮吗？', a: '可以。直径 25 cm、高 25 cm 以下的圆筒篮可正放；更深的篮子需要斜放或先拆掉提手。' },
    ],
  },
  {
    slug: 'stockpots',
    name: '汤桶 / 大型锅具',
    desc: '直径 28 cm 以下的不锈钢汤桶、酱汁锅 — 西餐厨房与酒店中厨高频器具。',
    perCycle: '汤桶（直径 28 cm）一次 2 口，2 分钟循环 = 每小时约 60 口汤桶',
    faqs: [
      { q: '直径多大的汤桶能装下？', a: '直径 28 cm、高 28 cm 以下可正放，单次 2 口。直径 32 cm 的需要斜放，每次只能放 1 口。直径超过 35 cm 装不下。' },
      { q: '炖煮焦底能洗掉吗？', a: '焦底程度不同效果不同：薄焦糊（汤汁烧干 1–2 小时）通常一次循环可清；重焦糊（连烧多次未清）建议先用沸水+小苏打浸泡 30 分钟松动，再入机。' },
      { q: '中式炒锅可以洗吗？', a: '直径 28 cm 以下的浅炒锅可以斜放清洗。中式深炒锅（深度 > 12 cm）需要专门角度，建议下单前发图片给我们确认是否兼容。' },
    ],
  },
  {
    slug: 'dishes-plates',
    name: '碗碟餐具',
    desc: '餐盘、汤碗、咖啡杯 — JD-3 配杯架可一次洗 25 个咖啡杯。',
    perCycle: '标准餐盘装 18 个/循环；咖啡杯配杯架可装 25 个/循环；2 分钟循环 = 每小时约 540 个餐盘 / 750 个咖啡杯',
    faqs: [
      { q: '咖啡杯每小时能洗多少？', a: '配杯架每筐 25 个杯子，2 分钟一个循环 = 每小时清洗约 750 个咖啡杯。早班高峰 1 小时可吞掉一整天的杯具。' },
      { q: '玻璃高脚杯会破吗？', a: '不会 — JD-3 的喷臂压力针对玻璃器具调校。高脚杯需要专用杯架（可加购）固定底座，避免在洗碗筐内倒下。' },
      { q: '碟子上的咖啡渍和茶渍洗得干净吗？', a: '日常使用产生的咖啡渍、茶渍一次循环可清。深度染色（长期不洗形成的褐色硬渍）建议先用过氧化物去渍剂浸泡 10 分钟。' },
    ],
  },
  {
    slug: 'utensils-mixers',
    name: '小工具与搅拌机配件',
    desc: '搅拌钩、平桨、打蛋器、刮刀 — KitchenAid 与 Hobart 商用搅拌机的所有附件 JD-3 都能洗。',
    perCycle: '小工具配专用篮可一次装 20–40 件，2 分钟循环 = 每小时约 600–1,200 件小工具',
    faqs: [
      { q: '搅拌钩、平桨、打蛋器能一起洗吗？', a: '可以。配小工具篮（可加购，~30 美元）把所有附件竖插固定，避免互相碰撞。一次可装 KitchenAid 一套完整附件 + 多把刮刀。' },
      { q: '面糊残留在打蛋器钢丝间能洗掉吗？', a: '可以。双旋转喷臂从两侧高压喷射，比手洗用刷子刷打蛋器钢丝缝隙更彻底。但建议刚搅拌完就入机 — 面糊干燥变硬后需要多一次循环。' },
      { q: '塑料 / 硅胶刮刀会变形吗？', a: '不会。最终漂洗温度 >82°C 高于一般水温但远低于食品级硅胶（最高耐温 230°C）和食品级塑料（最高耐温 100°C+）的耐受上限。' },
    ],
  },
  {
    slug: 'large-bakeware',
    name: '大型烘焙器具',
    desc: '法棍模具、长条吐司模、烤鸡架 — 超尺寸器具斜放进 JD-3 腔体也能完整清洗。',
    perCycle: '法棍模具（60 cm 长）需斜放，一次 2 件；2 分钟循环 = 每小时约 60 件大型烘焙器具',
    faqs: [
      { q: '60 cm 长的法棍模具装得下吗？', a: '可以斜放。650×550 mm 腔体对角线约 850 mm，60 cm（600 mm）的法棍模具斜放有充裕空间。一次可放 2 件。' },
      { q: '长条吐司模能洗吗？', a: '可以。Pullman 长条吐司模（33 cm 高 × 11 cm 宽 × 11 cm 高）竖放可装 4 个/循环；如果是 4 联模一体的，斜放 2 件/循环。' },
      { q: '烤鸡架金属支撑会刮伤腔体吗？', a: '不会。JD-3 的腔体材质是 SUS304 食品级不锈钢，与烤鸡架同等级硬度。但建议把烤鸡架放进底部洗碗筐，避免上层喷臂被刮到。' },
    ],
  },
];

function washFile(item) {
  const faqsLiteral = item.faqs.map((f) => `{q:${JSON.stringify(f.q)},a:${JSON.stringify(f.a)}}`).join(',');
  const challenge = `${item.name} 在商用烘焙环境中的清洗难点是：残留物类型（焦糖、粘附面团、油脂、奶酪、糖渍等）多样、几何形状特殊、单次装载密度高。人工清洗耗时长，而且很难做到食品法规要求的热力杀菌效果。`;
  const howItHandles = `JD-3 配备两组旋转喷臂 + 针对${item.name}优化的喷嘴几何角度、60–65°C 主洗水温、>82°C 最终漂洗，并配合 650×550 mm 腔体可装下加大尺寸器具。标准 2 分钟循环即可完整处理满载量。`;
  const settings = `标准 2 分钟循环 + 65°C 主洗 + 82°C 最终漂洗 + 商用低泡碱性洗涤剂。建议短暂预冲以保护循环水质。`;
  // Description: clear about throughput per ITEM, not generic "180/hour"
  const desc = `V-TAI JD-3 高效清洗${item.name}：${item.desc} ${item.perCycle}。CE 认证，深圳 FOB 起价 4,400 美元。`;
  return `---
import WhatItWashesLayout from '../../../layouts/WhatItWashesLayout.astro';
const locale = 'zh' as const;
---
<WhatItWashesLayout
  locale={locale}
  canonicalPath="/what-it-washes/${item.slug}/"
  itemName={${JSON.stringify(item.name)}}
  title={${JSON.stringify(`JD-3 清洗${item.name} | V-TAI 商用洗碗机`)}}
  description={${JSON.stringify(desc)}}
  challenge={${JSON.stringify(challenge)}}
  howItHandles={${JSON.stringify(howItHandles)}}
  recommendedSettings={${JSON.stringify(settings)}}
  faqs={[${faqsLiteral}]}
/>
`;
}

for (const item of washes) {
  await w(`src/pages/zh/what-it-washes/${item.slug}.astro`, washFile(item));
}

console.log('Fixed cafeteria FAQ, cloud-kitchen FAQ, baking-trays-600x400 (maintenance + FAQ heading locale), and 9 what-it-washes detail pages with item-specific FAQs + qualified throughput descriptions.');
