#!/usr/bin/env node
// One-shot rewrite of every src/pages/zh/**/*.astro file that still contains
// Thai prose (left over from the th→zh mirror). Each entry below is the
// canonical Chinese version of a single file. Idiomatic Simplified Chinese,
// professional tone, written for Singapore / Malaysia / overseas-Chinese
// bakery and small commercial-kitchen operators.
import { writeFile, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');

// Helper: write a file relative to project root.
const w = async (rel, body) => {
  const p = join(root, rel);
  await mkdir(dirname(p), { recursive: true });
  await writeFile(p, body, 'utf8');
};

// ======================================================================
// 1. TOP-LEVEL PAGES
// ======================================================================

await w('src/pages/zh/about.astro', `---
import AboutPageLayout from '../../layouts/AboutPageLayout.astro';
---
<AboutPageLayout
  locale="zh"
  title="关于 V-TAI — JD-3 烘焙烤盘清洗机背后的制造商"
  description="深圳市威泰电器有限公司 — 商用洗碗机制造商，10 余年生产烘焙揭盖式洗碗机、推车式洗碗机、台下式洗碗机。位于中国广东珠江三角洲，ISO 9001 体系认证，CE 合规，8,000 m² 智能制造基地。"
/>
`);

await w('src/pages/zh/contact.astro', `---
import BaseLayout from '../../layouts/BaseLayout.astro';
import BreadcrumbNav from '../../components/BreadcrumbNav.astro';
import InlineInquiryForm from '../../components/InlineInquiryForm.astro';
const locale = 'zh' as const;
---
<BaseLayout title="联系 V-TAI — 商用洗碗机咨询" description="WhatsApp、邮件直接联系 V-TAI 团队。新加坡、马来西亚、海外华人市场专人对接，12 个工作小时内回复。" locale={locale} canonicalPath="/contact/">
<BreadcrumbNav items={[{label:'首页',href:'/zh/'},{label:'联系我们'}]} />
<section class="section"><div class="container-page grid lg:grid-cols-2 gap-10">
<div>
<h1 class="mb-4">联系我们</h1>
<p class="text-bakery-navy/80 mb-6">最快的联系方式是 WhatsApp — 通常 2–3 小时内回复（中国时间 GMT+8 工作时段）。也可通过邮件提交详细需求。</p>
<div class="space-y-4">
<div class="card"><h3 class="text-lg mb-2">WhatsApp（推荐）</h3><a href="https://wa.me/8613509623269" class="text-bakery-orange underline">+86 135 0962 3269</a><p class="text-sm text-bakery-navy/60 mt-2">支持中文、英文、马来文沟通。</p></div>
<div class="card"><h3 class="text-lg mb-2">电子邮件</h3><a href="mailto:info@v-tai.com" class="text-bakery-orange underline">info@v-tai.com</a><p class="text-sm text-bakery-navy/60 mt-2">技术问询、招标 RFP、文件请求请发邮件。</p></div>
<div class="card"><h3 class="text-lg mb-2">工厂地址</h3><p class="text-bakery-navy">中国广东深圳龙岗区<br/>环球物流中心 22 楼 2202 室</p><p class="text-sm text-bakery-navy/60 mt-2">参观需提前预约。可安排参观 8,000 m² 智能制造车间。</p></div>
</div>
</div>
<InlineInquiryForm locale={locale} title="发送询盘" />
</div></section>
</BaseLayout>
`);

await w('src/pages/zh/get-quote.astro', `---
import BaseLayout from '../../layouts/BaseLayout.astro';
import BreadcrumbNav from '../../components/BreadcrumbNav.astro';
import InquiryForm from '../../components/InquiryForm.astro';
const locale = 'zh' as const;
---
<BaseLayout title="获取报价 — V-TAI JD-3" description="12 小时内为您定制 JD-3 报价。新加坡、马来西亚、香港、台湾本地货币 DDP 到岸价。" locale={locale} canonicalPath="/get-quote/">
<BreadcrumbNav items={[{label:'首页',href:'/zh/'},{label:'获取报价'}]} />
<section class="section"><div class="container-page max-w-3xl">
<h1 class="mb-3 text-center">12 小时内为您出具定制报价</h1>
<p class="text-bakery-navy/70 text-center mb-8">告诉我们您的城市、业务类型与采购时间。我们将以您的本地货币提供完整的 DDP 到岸价（含运费、关税、当地税）。</p>
<div class="card"><InquiryForm locale={locale} /></div>
</div></section>
</BaseLayout>
`);

await w('src/pages/zh/thank-you.astro', `---
import BaseLayout from '../../layouts/BaseLayout.astro';
const locale = 'zh' as const;
---
<BaseLayout title="询盘已收到 — 感谢您" description="已收到您的报价请求，我们将在 12 个工作小时内通过 WhatsApp 或邮件回复您。" locale={locale} canonicalPath="/thank-you/" noindex={true}>
<section class="section">
  <div class="container-page max-w-2xl text-center">
    <div class="w-20 h-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-6">
      <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
    </div>
    <h1 class="mb-4">感谢您的咨询！</h1>
    <p class="text-lg text-bakery-navy/80 mb-3">我们将在 <strong>12 个工作小时内</strong>，通过 WhatsApp 或电子邮件回复您。</p>
    <p class="text-bakery-navy/70 mb-8">想更快得到回应？欢迎直接 WhatsApp 联系我们：</p>
    <a href="https://wa.me/8613509623269" class="btn-primary mb-8">WhatsApp +86 135 0962 3269</a>
    <h2 class="mt-12 mb-4">等待回复期间，您可以浏览：</h2>
    <div class="grid sm:grid-cols-2 gap-4 text-left">
      <a href="/zh/pricing/" class="card hover:scale-[1.02] transition"><h3 class="text-lg mb-1">JD-3 价格</h3><p class="text-sm text-bakery-navy/70">查看全部配置方案与起价</p></a>
      <a href="/zh/product/jd-3-vs-hobart-amx/" class="card hover:scale-[1.02] transition"><h3 class="text-lg mb-1">同级对比</h3><p class="text-sm text-bakery-navy/70">JD-3 vs Hobart / Jackson / CMA</p></a>
      <a href="/zh/case-studies/" class="card hover:scale-[1.02] transition"><h3 class="text-lg mb-1">客户案例</h3><p class="text-sm text-bakery-navy/70">迪拜酒店、墨尔本甜品店、首尔咖啡连锁、利马面包店</p></a>
      <a href="/zh/guides/" class="card hover:scale-[1.02] transition"><h3 class="text-lg mb-1">选购指南</h3><p class="text-sm text-bakery-navy/70">9 篇实用指南，帮您评估</p></a>
    </div>
  </div>
</section>
</BaseLayout>
`);

await w('src/pages/zh/faq.astro', `---
import BaseLayout from '../../layouts/BaseLayout.astro';
import BreadcrumbNav from '../../components/BreadcrumbNav.astro';
import FAQSection from '../../components/FAQSection.astro';
import CTASection from '../../components/CTASection.astro';
import { t } from '../../i18n/utils';
const locale = 'zh' as const;
const faqs = [
  { q: 'V-TAI JD-3 是什么？', a: '一款用于烘焙烤盘的揭盖式商用洗碗机，型号 VT-AE-JD-3。专为中小型商用厨房（面包店、咖啡连锁、酒店西点房、云厨房）设计。' },
  { q: '价格是多少？', a: '深圳 FOB 起价 4,400 美元。加配自动洗涤剂分配器为 4,600 美元，再加热回收升级为 4,900 美元。各国 DDP 到岸价（含运费、关税、税）见 /zh/pricing/by-country/。' },
  { q: '与其他品牌的区别在哪里？', a: '650×550 mm 洗碗筐，可容纳 600×400 mm 欧标烤盘（DIN 18876 / EN 631 标准 — Rational、Convotherm、Unox、MIWE 蒸烤箱都按此设计）。同等 CE 认证下价格仅为欧美高端品牌的零头。' },
  { q: '交货周期？', a: '深圳生产 4 周 + 海运 20–35 天（视目的地）或空运 3–7 天（费用更高）。新加坡、马来西亚一般 6–8 周到货。' },
  { q: '保修期？', a: '12 个月零件保修。配件通过 DHL / FedEx 全球发货，通常 5 个工作日内送达。' },
  { q: '如果机器出现故障怎么办？', a: '每台机器内嵌完整的电路图（贴在维修门内侧）。本地电工根据电路图即可诊断与维修大多数问题。需要更换零件时联系我们，全球 5 日内到货。' },
  { q: '安装麻烦吗？', a: '接收机器 → 按视频教程操作 → 接通水路与电路 → 即可开始使用。通常 1–2 小时完成，不需要专业安装人员，普通水电工即可。' },
  { q: '能发货到新加坡 / 马来西亚 / 香港 / 台湾吗？', a: '可以。18 个市场我们已公布当地货币的 DDP 到岸价。如您所在国家未在列表中，可申请定制报价，12 小时内回复您。' },
  { q: '可以使用 380V 三相电吗？海外厨房有问题吗？', a: 'JD-3 标配 380V 三相 50Hz，是新加坡、马来西亚、香港、台湾以及大部分东南亚商用厨房的常见电源。如需 220V 单相版本可在下单时说明。' },
  { q: '能洗哪些器具？', a: '600×400 mm 欧标烤盘、美式 18×26" 烤盘、KitchenAid 搅拌桶、汤桶、披萨盘、慕斯圈、蛋糕模具、Silpat 硅胶垫、碗碟、咖啡杯 — 详见 /zh/what-it-washes/。' },
];
---
<BaseLayout title={\`\${t(locale,'nav.faq')} | V-TAI JD-3\`} description="V-TAI JD-3 商用烘焙洗碗机的常见问题：价格、交期、保修、安装、电源、可清洗器具等。" locale={locale} canonicalPath="/faq/" schemaType="FAQPage">
<BreadcrumbNav items={[{label:t(locale,'nav.home'), href:'/zh/'},{label:t(locale,'nav.faq')}]} />
<section class="section"><div class="container-prose">
<h1 class="mb-4 text-center">常见问题</h1>
<p class="text-center text-bakery-navy/70">关于 JD-3 的产品规格、价格、交期、安装与售后的常见疑问。</p>
</div></section>
<FAQSection items={faqs} title="" locale={locale} />
<CTASection locale={locale} />
</BaseLayout>
`);

await w('src/pages/zh/pricing.astro', `---
import BaseLayout from '../../layouts/BaseLayout.astro';
import BreadcrumbNav from '../../components/BreadcrumbNav.astro';
import PriceCalloutBox from '../../components/PriceCalloutBox.astro';
import CTASection from '../../components/CTASection.astro';
const locale = 'zh' as const;
---
<BaseLayout title="V-TAI JD-3 价格 — FOB 起价 4,400 美元" description="V-TAI JD-3 商用烘焙洗碗机的透明定价：3 种配置方案、深圳 FOB 起价 4,400 美元、18 国本地货币 DDP 到岸价。" locale={locale} canonicalPath="/pricing/" schemaType="Product">
<BreadcrumbNav items={[{label:'首页',href:'/zh/'},{label:'价格'}]} />
<section class="section"><div class="container-page">
<h1 class="text-center mb-3">透明定价，明明白白</h1>
<p class="text-center text-bakery-navy/70 max-w-2xl mx-auto mb-10">3 种配置方案对应不同预算与运营节奏。我们不通过经销商加价，工厂直供。</p>
<div class="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
<div class="card"><p class="eyebrow mb-1">入门型</p><h3 class="mb-2">JD-3 标准型</h3><p class="text-3xl font-bold text-bakery-orange mb-2">4,400 美元</p><p class="text-sm text-bakery-navy/70">深圳 FOB 起价。基础配置，380V/3N/50Hz，含 2 个洗碗筐 + 杯架 + 工具 + 说明书 + CE 证书。适合单店面包店、小型咖啡馆。</p></div>
<div class="card border-2 border-bakery-orange"><p class="eyebrow mb-1">最受欢迎</p><h3 class="mb-2">+ 自动洗涤剂分配器</h3><p class="text-3xl font-bold text-bakery-orange mb-2">4,600 美元</p><p class="text-sm text-bakery-navy/70">加入液体洗涤剂与漂洗剂自动定量泵。免去人工补加，剂量稳定，省剂量约 15%。适合多门店、连锁、酒店西点房。</p></div>
<div class="card"><p class="eyebrow mb-1">节能升级</p><h3 class="mb-2">+ 热回收升级</h3><p class="text-3xl font-bold text-bakery-orange mb-2">4,900 美元</p><p class="text-sm text-bakery-navy/70">含分配器与热回收模块 — 高温漂洗的余热回到主洗水箱，节能 15–25%。适合高频运营、电费较高的市场。</p></div>
</div>
<p class="text-center mt-6 text-sm text-bakery-navy/60">以上为深圳 FOB 价格。运费、关税、当地税请见 <a href="/zh/pricing/by-country/" class="underline">各国 DDP 到岸价</a>。</p>
<div class="mt-10 max-w-md mx-auto"><PriceCalloutBox locale={locale} /></div>
</div></section>
<CTASection locale={locale} />
</BaseLayout>
`);

// ======================================================================
// 2. HUB INDEX PAGES — fix intro string
// ======================================================================

await w('src/pages/zh/by-business-type/index.astro', `---
import BaseLayout from '../../../layouts/BaseLayout.astro';
import BreadcrumbNav from '../../../components/BreadcrumbNav.astro';
import CTASection from '../../../components/CTASection.astro';
import { t } from '../../../i18n/utils';
import { businessTypeNames, businessTypeIcons } from '../../../i18n/categories';
const locale = 'zh' as const;

const slugs = ['bakery-shop','coffee-chain','patisserie','cake-shop','small-restaurant','cafeteria','hotel-pastry-kitchen','cloud-kitchen'];
const intro = "选择您的业务类型，看看 JD-3 如何与您的实际运营场景匹配。";
---
<BaseLayout
  title={t(locale, 'nav.business') + ' | V-TAI JD-3'}
  description={intro}
  locale={locale}
  canonicalPath="/by-business-type/"
  schemaType="Article"
>
<BreadcrumbNav items={[{label: t(locale, 'nav.home'), href: '/zh/'}, {label: t(locale, 'nav.business')}]} />
<section class="section">
  <div class="container-page">
    <h1 class="mb-4 text-center">{t(locale, 'nav.business')}</h1>
    <p class="text-center text-bakery-navy/70 max-w-2xl mx-auto mb-10">{intro}</p>
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {slugs.map((slug) => (
        <a href={\`/zh/by-business-type/\${slug}/\`} class="card text-center hover:scale-[1.02] transition">
          <div class="text-4xl mb-2">{businessTypeIcons[slug]}</div>
          <p class="font-semibold text-bakery-navy">{businessTypeNames[slug][locale]}</p>
        </a>
      ))}
    </div>
  </div>
</section>
<CTASection locale={locale} />
</BaseLayout>
`);

await w('src/pages/zh/what-it-washes/index.astro', `---
import BaseLayout from '../../../layouts/BaseLayout.astro';
import BreadcrumbNav from '../../../components/BreadcrumbNav.astro';
import CTASection from '../../../components/CTASection.astro';
import { t } from '../../../i18n/utils';
import { washesNames, flagshipLabel } from '../../../i18n/categories';
const locale = 'zh' as const;

const items = [
  { slug: 'baking-trays-600x400', flagship: true },
  { slug: 'sheet-pans' },
  { slug: 'mixing-bowls' },
  { slug: 'cake-pans' },
  { slug: 'pizza-pans' },
  { slug: 'frying-baskets' },
  { slug: 'stockpots' },
  { slug: 'dishes-plates' },
  { slug: 'utensils-mixers' },
  { slug: 'large-bakeware' },
];
const intro = "JD-3 能清洗的所有器具 — 烤盘、托盘、搅拌桶、蛋糕模具等。";
---
<BaseLayout
  title={t(locale, 'nav.washes') + ' | V-TAI JD-3'}
  description={intro}
  locale={locale}
  canonicalPath="/what-it-washes/"
  schemaType="Article"
>
<BreadcrumbNav items={[{label: t(locale, 'nav.home'), href: '/zh/'}, {label: t(locale, 'nav.washes')}]} />
<section class="section">
  <div class="container-page">
    <h1 class="mb-4 text-center">{t(locale, 'nav.washes')}</h1>
    <p class="text-center text-bakery-navy/70 max-w-2xl mx-auto mb-10">{intro}</p>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {items.map((it) => (
        <a href={\`/zh/what-it-washes/\${it.slug}/\`} class={\`card hover:scale-[1.02] transition \${it.flagship ? 'border-2 border-bakery-orange' : ''}\`}>
          {it.flagship && <p class="eyebrow text-bakery-orange">⭐ {flagshipLabel[locale]}</p>}
          <h3 class="text-lg mb-2 mt-1">{washesNames[it.slug][locale]}</h3>
        </a>
      ))}
    </div>
  </div>
</section>
<CTASection locale={locale} />
</BaseLayout>
`);

await w('src/pages/zh/guides/index.astro', `---
import BaseLayout from '../../../layouts/BaseLayout.astro';
import BreadcrumbNav from '../../../components/BreadcrumbNav.astro';
import CTASection from '../../../components/CTASection.astro';
import { guides, guidesHub } from '../../../i18n/guides';
import { t } from '../../../i18n/utils';

const locale = 'zh' as const;
const hub = guidesHub[locale];
---
<BaseLayout
  title="JD-3 选购指南 — 烘焙烤盘清洗机"
  description="9 篇实用指南，覆盖选机、安装、运营商用烘焙洗碗机：最佳实践、600×400 mm 烤盘标准、ROI 算账、用水与能耗、消毒标准、电气与空间要求。"
  locale={locale}
  canonicalPath="/guides/"
  schemaType="Article"
>
<BreadcrumbNav items={[{label: t(locale, 'nav.home'), href: '/zh/'}, {label: hub.h1}]} />

<section class="section">
  <div class="container-page">
    <h1 class="text-center mb-4">{hub.h1}</h1>
    <p class="text-bakery-navy/70 text-lg max-w-2xl mx-auto text-center mb-10">{hub.intro}</p>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {guides.map((g) => (
        <a href={\`/zh/guides/\${g.slug}/\`} class="card hover:scale-[1.02] transition flex flex-col">
          <h3 class="mb-3 text-lg">{g.title[locale]}</h3>
          <p class="text-sm text-bakery-navy/70 flex-1">{g.desc[locale]}</p>
          <p class="text-bakery-orange text-sm mt-3 font-semibold">阅读指南 →</p>
        </a>
      ))}
    </div>
  </div>
</section>

<CTASection locale={locale} />
</BaseLayout>
`);

// ======================================================================
// 3. PRODUCT PAGES
// ======================================================================

await w('src/pages/zh/product/index.astro', `---
import BaseLayout from '../../../layouts/BaseLayout.astro';
import BreadcrumbNav from '../../../components/BreadcrumbNav.astro';
import ImagePlaceholder from '../../../components/ImagePlaceholder.astro';
import YouTubeShort from '../../../components/YouTubeShort.astro';
import PriceCalloutBox from '../../../components/PriceCalloutBox.astro';
import CTASection from '../../../components/CTASection.astro';
import FAQSection from '../../../components/FAQSection.astro';
const locale = 'zh' as const;

const features = [
  { icon: '🛡️', title: 'SUS304 食品级不锈钢',         text: '整机采用 SUS304 食品级不锈钢 — 防锈、防虫、易清洁，符合 FDA 食品接触材料标准。' },
  { icon: '📏', title: '超大洗涤腔体',                 text: '650×550 mm 洗碗筐可装 600×400 mm 欧标烤盘、超大型汤桶、KitchenAid 搅拌桶。' },
  { icon: '💧', title: '双旋转喷臂 + 烤盘专用喷嘴',    text: '360°全方位清洗，针对长条形烤盘表面优化的喷嘴角度，覆盖更彻底。' },
  { icon: '🌡️', title: '智能温度控制',                 text: '最终漂洗 ≥82°C 自动消毒。LED 数字显示，模块化控制板易于维护。' },
  { icon: '💦', title: '超低用水',                     text: '每个循环仅 2.0–2.5 升水。竞品多在 5–10 升。' },
  { icon: '♻️', title: '热回收系统',                   text: '高温漂洗的热水流回主洗水箱，保持洗涤温度并节能 15–25%。' },
  { icon: '🚪', title: '密封隔热盖板',                 text: '蒸汽外逸减少高达 70%，让您的厨房保持凉爽干燥。' },
  { icon: '🧑‍🍳', title: '人体工学操作',               text: '推拉式洗碗筐导轨。关上盖板自动启动 — 关盖即洗。' },
  { icon: '🔒', title: '多重安全保护',                 text: '门联锁断电、电压过载保护内置。' },
  { icon: '🧪', title: '预留分配器接口',               text: '预装自动洗涤剂与水处理模块接口，按需升级。' },
  { icon: '⚡', title: 'CE 安全认证',                  text: '通过欧盟合规认证 — 可直接出口至欧盟、海湾、亚太、拉美、非洲。' },
  { icon: '⏱️', title: '门联锁自动启动',               text: '关上盖板循环自动开始，无需按键，无需等待。' },
];
---
<BaseLayout
  title="V-TAI JD-3 — 烘焙烤盘揭盖式清洗机 | 完整产品页"
  description="V-TAI JD-3 揭盖式烘焙烤盘清洗机：180 个烤盘/小时、兼容 600×400 mm 欧标烤盘、SUS304 食品级不锈钢、CE 认证。深圳 FOB 起价 4,400 美元。"
  locale={locale}
  canonicalPath="/product/"
  schemaType="Product"
  schemaData={{
    name: 'V-TAI JD-3 烘焙烤盘揭盖式清洗机',
    sku: 'VT-AE-JD-3',
    brand: { '@type': 'Brand', name: 'V-TAI' },
    description: '商用揭盖式烘焙洗碗机，650×550 mm 洗碗筐 — 兼容 600×400 mm 欧标烤盘。每小时 180 个烤盘，SUS304 食品级不锈钢，CE 认证。',
    image: 'https://bakerytraywasher.com/images/jd-3-hero.webp',
    offers: { '@type': 'AggregateOffer', priceCurrency: 'USD', lowPrice: '4400', highPrice: '4900', availability: 'https://schema.org/InStock' },
  }}
>

<BreadcrumbNav items={[{label: '首页', href: '/zh/'}, {label: '产品'}]} />

<section class="section">
  <div class="container-page grid lg:grid-cols-2 gap-10">
    <div>
      <ImagePlaceholder src="/images/jd-3-front.webp" alt="V-TAI JD-3 揭盖式烘焙洗碗机正面" ratio="4/3" label="JD-3 正面" />
      <div class="grid grid-cols-3 gap-3 mt-3">
        <ImagePlaceholder src="/images/jd-3-inside.webp"        alt="JD-3 洗涤腔体内部"     ratio="1/1" label="腔体内部" />
        <ImagePlaceholder src="/images/jd-3-led-control.webp"   alt="JD-3 LED 控制面板特写" ratio="1/1" label="LED 控制" />
        <ImagePlaceholder src="/images/jd-3-wash-arms.webp"     alt="JD-3 旋转喷臂"        ratio="1/1" label="喷臂" />
      </div>
    </div>
    <div>
      <p class="eyebrow mb-2">型号 VT-AE-JD-3</p>
      <h1 class="mb-4">V-TAI JD-3 烘焙揭盖式洗碗机</h1>
      <p class="text-lg text-bakery-navy/80 mb-5">
        这个价位段里，唯一一台为
        <strong>600×400 mm 欧洲烘焙标准</strong>烤盘设计的揭盖式商用洗碗机。
        专为中小型商用厨房 — 面包店、咖啡馆、法式甜品店、酒店西点房 — 打造。
      </p>
      <div class="grid grid-cols-2 gap-3 mb-6">
        <div class="rounded-card border border-bakery-navy/10 p-3"><p class="text-xs text-bakery-navy/60">清洗能力</p><p class="font-semibold">180 个烤盘/小时</p></div>
        <div class="rounded-card border border-bakery-orange/30 p-3 bg-bakery-cream"><p class="text-xs text-bakery-brown">洗碗筐尺寸</p><p class="font-semibold">650×550 mm ⭐</p></div>
        <div class="rounded-card border border-bakery-navy/10 p-3"><p class="text-xs text-bakery-navy/60">循环时间</p><p class="font-semibold">2 分钟 · 6 个烤盘</p></div>
        <div class="rounded-card border border-bakery-navy/10 p-3"><p class="text-xs text-bakery-navy/60">总功率</p><p class="font-semibold">13 kW</p></div>
      </div>
      <PriceCalloutBox locale={locale} />
    </div>
  </div>
</section>

<!-- 实机演示 -->
<section class="section">
  <div class="container-page">
    <div class="text-center max-w-2xl mx-auto mb-8">
      <h2 class="mb-3">实机演示</h2>
      <p class="text-bakery-navy/70">两段短视频：如何在您的厨房安装 JD-3，以及如何精调内置的洗涤剂分配器。</p>
    </div>
    <div class="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
      <YouTubeShort videoId="bjxEYRiRTnI" title="JD-3 安装指南" caption="安装：接水、接电、第一次清洗" />
      <YouTubeShort videoId="Zkf6h8u7mFE" title="JD-3 内置分配器调节" caption="调节：内置洗涤剂分配器定量" />
    </div>
  </div>
</section>

<!-- 工作流程 -->
<section class="section">
  <div class="container-page">
    <h2 class="text-center mb-10">运作流程 — 4 步</h2>
    <div class="grid md:grid-cols-4 gap-6">
      {[
        { n: '1', t: '装载', d: '把装好烤盘、汤桶或搅拌桶的洗碗筐推入腔体。' },
        { n: '2', t: '关盖板', d: '关上盖板，循环自动启动 — 无需按键。' },
        { n: '3', t: '洗涤 + 漂洗', d: '双喷臂 360°高压喷射。最终漂洗 ≥82°C。' },
        { n: '4', t: '取出', d: '2 分钟（120 秒）后取出。洁净、消毒、滴干完毕。' },
      ].map((s) => (
        <div class="text-center">
          <div class="w-12 h-12 mx-auto rounded-full bg-bakery-orange text-white font-bold flex items-center justify-center mb-3">{s.n}</div>
          <h3 class="text-base mb-2">{s.t}</h3>
          <p class="text-sm text-bakery-navy/70">{s.d}</p>
        </div>
      ))}
    </div>
  </div>
</section>

<!-- 12 大特性 -->
<section class="section bg-bakery-cream">
  <div class="container-page">
    <div class="text-center max-w-2xl mx-auto mb-10">
      <h2 class="mb-3">12 大特性</h2>
      <p class="text-bakery-navy/70">每个细节都是为中小型商用厨房而设计 — 既不像工业级那样过度配置，也不像家用机那样妥协。</p>
    </div>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {features.map((f) => (
        <div class="card">
          <div class="text-3xl mb-2">{f.icon}</div>
          <h3 class="text-lg mb-1">{f.title}</h3>
          <p class="text-sm text-bakery-navy/70">{f.text}</p>
        </div>
      ))}
    </div>
    <div class="text-center mt-8">
      <a href="/zh/product/jd-3-features/" class="btn-secondary">查看 12 大特性详解</a>
    </div>
  </div>
</section>

<!-- 可清洗 -->
<section class="section">
  <div class="container-page">
    <h2 class="text-center mb-8">能清洗哪些器具</h2>
    <div class="grid sm:grid-cols-2 md:grid-cols-5 gap-3 text-center">
      {[
        ['600×400 欧标烤盘', '/zh/what-it-washes/baking-trays-600x400/'],
        ['美式烤盘', '/zh/what-it-washes/sheet-pans/'],
        ['搅拌桶', '/zh/what-it-washes/mixing-bowls/'],
        ['蛋糕模具', '/zh/what-it-washes/cake-pans/'],
        ['披萨盘', '/zh/what-it-washes/pizza-pans/'],
        ['炸篮', '/zh/what-it-washes/frying-baskets/'],
        ['汤桶大锅', '/zh/what-it-washes/stockpots/'],
        ['碗碟餐具', '/zh/what-it-washes/dishes-plates/'],
        ['小工具与搅拌机配件', '/zh/what-it-washes/utensils-mixers/'],
        ['大型烘焙器具', '/zh/what-it-washes/large-bakeware/'],
      ].map(([label, href]) => (
        <a href={href} class="card hover:bg-bakery-cream text-sm">
          <p class="font-medium text-bakery-navy">{label}</p>
        </a>
      ))}
    </div>
  </div>
</section>

<!-- 配置选项 -->
<section class="section bg-bakery-cream">
  <div class="container-page">
    <h2 class="text-center mb-8">配置选项</h2>
    <div class="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
      {[
        { t: '标准型', p: '4,400 美元', d: 'JD-3 基础版，380V/3N/50Hz' },
        { t: '+ 自动洗涤剂分配器', p: '4,600 美元', d: '加装液体洗涤剂与漂洗剂泵' },
        { t: '+ 热回收升级', p: '4,900 美元', d: '强化节能包；漂洗热水回流主洗水箱' },
      ].map((cfg) => (
        <div class="card">
          <h3 class="text-lg mb-1">{cfg.t}</h3>
          <p class="text-2xl font-bold text-bakery-orange mb-2">起价 {cfg.p}</p>
          <p class="text-sm text-bakery-navy/70">{cfg.d}</p>
        </div>
      ))}
    </div>
    <p class="text-center mt-6 text-sm text-bakery-navy/60">以上为深圳 FOB 价格。海运费与目的国关税另计 — 详见 <a href="/zh/pricing/by-country/" class="underline">各国 DDP 到岸价</a>。</p>
  </div>
</section>

<FAQSection items={[
  { q: '随机配件有哪些？', a: 'JD-3 主机、2 个标准洗碗筐、杯架、基础工具、操作手册（中英文）、CE 证书。' },
  { q: '可以发到新加坡 / 马来西亚吗？', a: '可以。新加坡 DDP 约 6,800 SGD，马来西亚 DDP 约 22,000 MYR — 含海运、关税、GST/SST、本地派送。' },
  { q: '保修条款？', a: '12 个月零件保修。配件全球空运，通常 5 个工作日内到货。' },
  { q: '5 年后能买到零件吗？', a: '所有关键零件 — 水泵、加热元件、控制板 — 工厂常备库存。常见零件当日发货。' },
]} />

<CTASection locale={locale} />
</BaseLayout>
`);

await w('src/pages/zh/product/jd-3-features.astro', `---
import BaseLayout from '../../../layouts/BaseLayout.astro';
import BreadcrumbNav from '../../../components/BreadcrumbNav.astro';
import CTASection from '../../../components/CTASection.astro';
const locale = 'zh' as const;

const features = [
  {
    n: 1, t: 'SUS304 食品级不锈钢',
    body: '整机包括腔体、洗碗筐、喷臂、盖板，全部采用 SUS304 食品级不锈钢 — 这是商用厨房工作台与食品加工设备使用的同款合金。防锈、抗腐蚀，与食品接触面符合 FDA 标准。',
  },
  {
    n: 2, t: '超大洗涤腔体（650×550 mm）',
    body: '同级别洗碗机的洗碗筐通常是 500×500 mm — 这个尺寸是为 1970 年代的咖啡馆碗碟设计的，装不下现代烘焙的 600×400 mm 欧标烤盘。JD-3 的 650×550 mm 洗碗筐就是为容纳 600×400 烤盘而生的。',
  },
  {
    n: 3, t: '双旋转喷臂 + 烤盘专用喷嘴几何',
    body: '上下双喷臂同时旋转，360° 立体覆盖。喷嘴角度针对烤盘长条形扁平表面优化 — 不是普通圆盘式喷嘴，能保证水流到达烤盘背面（手洗经常漏掉的部位）。',
  },
  {
    n: 4, t: '智能温度控制',
    body: '主洗水箱保持 60–65°C，最终漂洗自动达 ≥82°C 实现热力杀菌（符合 NSF/ANSI 3 与 FDA Food Code 4-501.112 标准）。LED 数字温度显示，控制板模块化便于维修。',
  },
  {
    n: 5, t: '超低用水',
    body: '每个 2 分钟循环仅 2.0–2.5 升水 — 而大多数同级商用洗碗机要用 5–10 升。在水费较高的市场（如新加坡），五年累计可节省 4,000+ 美元水费。',
  },
  {
    n: 6, t: '热回收系统（可选）',
    body: '高温漂洗（>82°C）后的热水流回主洗水箱预热下一轮 — 减少加热器负载 15–25%。在电费较高的国家（德国、新加坡、澳大利亚）回报最明显。',
  },
  {
    n: 7, t: '密封隔热盖板',
    body: '盖板与腔体之间的双层密封件 + 隔热夹层让蒸汽外逸减少高达 70%。后果：您的厨房不会变成蒸汽房，员工舒适度提升，空调能耗下降。',
  },
  {
    n: 8, t: '人体工学操作',
    body: '推拉式洗碗筐导轨让装载省力。盖板气压杆设计 — 一只手就能抬起。控制按键放在视线高度，符合女性员工的人体工学。',
  },
  {
    n: 9, t: '多重安全保护',
    body: '盖板联锁开关：打开盖板时电源自动切断。电压过载保护内置 — 即使本地电网波动也不会烧毁控制板。CE 安全认证覆盖所有欧盟标准。',
  },
  {
    n: 10, t: '预留分配器与水处理接口',
    body: '基础版预装了自动洗涤剂泵、漂洗剂泵、内联水处理模块的接口。您可以先买 4,400 美元的基础版，半年后现金流改善时再加装分配器（+200 美元）。同级品牌多数要求整机升级。',
  },
  {
    n: 11, t: 'CE 安全认证',
    body: '符合欧盟所有相关 CE 指令（机械指令、低压指令、EMC 指令）。CE 证书全球认可 — 可直接进口至欧盟、海湾、亚太、拉美、非洲。',
  },
  {
    n: 12, t: '门联锁自动启动',
    body: '关上盖板循环自动开始 — 无需按键。员工只需关盖板就可以去做其他工作。2 分钟后自动停止，无需守在机器旁。',
  },
];
---
<BaseLayout title="JD-3 12 大特性详解" description="V-TAI JD-3 的 12 大核心特性逐一解读：SUS304 不锈钢、650×550 mm 大腔体、双旋转喷臂、热回收、>82°C 消毒、CE 认证等。" locale={locale} canonicalPath="/product/jd-3-features/" schemaType="Article">
<BreadcrumbNav items={[{label:'首页',href:'/zh/'},{label:'产品',href:'/zh/product/'},{label:'12 大特性'}]} />
<section class="section"><div class="container-prose">
<h1 class="mb-4">JD-3 12 大特性详解</h1>
<p class="text-lg text-bakery-navy/80 mb-8">每个特性都是为中小型商用厨房而设计 — 既不像工业级那样过度配置，也不像家用机那样妥协。下面是工程师对每个特性的实战解释。</p>
{features.map((f) => (
  <div class="mb-6">
    <h2 class="mb-2">{f.n}. {f.t}</h2>
    <p class="text-bakery-navy/80">{f.body}</p>
  </div>
))}
</div></section>
<CTASection locale={locale} />
</BaseLayout>
`);

await w('src/pages/zh/product/jd-3-installation.astro', `---
import BaseLayout from '../../../layouts/BaseLayout.astro';
import BreadcrumbNav from '../../../components/BreadcrumbNav.astro';
import YouTubeShort from '../../../components/YouTubeShort.astro';
import CTASection from '../../../components/CTASection.astro';
import FAQSection from '../../../components/FAQSection.astro';
const locale = 'zh' as const;
---
<BaseLayout
  title="JD-3 安装指南 | V-TAI 烘焙洗碗机自助安装"
  description="收到机器、看视频教程、接通水电 — 即可开始清洗。JD-3 设计为可在商用厨房自助安装，普通水电工 1–2 小时完成。"
  locale={locale}
  canonicalPath="/product/jd-3-installation/"
  schemaType="HowTo"
  schemaData={{
    name: 'V-TAI JD-3 揭盖式烘焙洗碗机安装方法',
    step: [
      { '@type': 'HowToStep', name: '开箱', text: '开箱并对照装箱单核对配件' },
      { '@type': 'HowToStep', name: '就位', text: '放置在水平地面、靠近进水管与地漏的位置' },
      { '@type': 'HowToStep', name: '接水', text: '连接 G 3/4" 冷水进水管和 G 1½" 排水管' },
      { '@type': 'HowToStep', name: '接电', text: '接入专用 380V 三相回路（或按当地标准 400V 单相）' },
      { '@type': 'HowToStep', name: '测试', text: '按视频教程运行两次空循环，确认最终漂洗到达 82°C' },
    ],
  }}
>
<BreadcrumbNav items={[{label:'首页',href:'/zh/'},{label:'产品',href:'/zh/product/'},{label:'安装指南'}]} />

<section class="section">
  <div class="container-prose">
    <h1 class="mb-4">JD-3 安装 — 收货、接通、开洗</h1>
    <p class="text-lg text-bakery-navy/80 mb-8">
      JD-3 设计为可自助安装。机器到货时，按随机视频教程接好水电就能开始清洗。大多数商用厨房无需专业安装人员 — 普通水电工即可。
    </p>

    <YouTubeShort
      videoId="bjxEYRiRTnI"
      title="JD-3 商用洗碗机安装指南"
      caption="观看：开箱、接通水电、第一次循环 — 不到 30 秒完整看完自助安装流程。"
    />

    <h2 class="mt-10 mb-4">3 个简单步骤</h2>

    <h3 class="mt-6 mb-2">第 1 步：开箱与就位</h3>
    <p>开箱后把机器抬到水平地面，靠近原有的进水管与地漏。占地约 804 × 816 mm — 大概一个小型橱柜的大小。</p>

    <h3 class="mt-6 mb-2">第 2 步：接水接电</h3>
    <ul class="space-y-2 list-disc list-inside mt-3">
      <li><strong>冷水进水：</strong>G 3/4" 螺纹接口，水压 2.5–6 kg/cm²。普通厨房水龙头出水即可满足。</li>
      <li><strong>排水：</strong>G 1½" 排水管接入地漏（或墙排），距离 ≤ 1.5 m。</li>
      <li><strong>电源：</strong>380V 三相 / 50Hz 专用回路，21.5 A。持证电工约 45 分钟可接通。</li>
      <li>新加坡、马来西亚以及香港的商用厨房一般已有 380V 三相 — 直接对接即可。</li>
    </ul>

    <h3 class="mt-6 mb-2">第 3 步：按视频教程运行第一次循环</h3>
    <p>每台 JD-3 都附带一张快速开始卡片，指向视频教程（下单当天即可通过 WhatsApp 获取）。教程包含：</p>
    <ul class="space-y-1 list-disc list-inside mt-2">
      <li>第一次开机时给主洗水箱加水</li>
      <li>把烤盘 / 蛋糕模 / 搅拌桶装入洗碗筐</li>
      <li>关上盖板 — 循环自动启动</li>
      <li>每日打烊清洁（2 分钟）</li>
    </ul>

    <h2 class="mt-10 mb-4">随机配件清单</h2>
    <ul class="space-y-1 list-disc list-inside">
      <li>JD-3 主机</li>
      <li>2 个标准洗碗筐 + 1 个杯架</li>
      <li>冷水进水管 + 排水管</li>
      <li>基础安装配件</li>
      <li>快速开始卡（附视频教程二维码）</li>
      <li>中英文操作手册</li>
      <li>CE 认证证书</li>
      <li><strong>电路图</strong>（贴在维修门内侧 — 保留位置，方便日后维修）</li>
    </ul>

    <h2 class="mt-10 mb-4">典型安装时长</h2>
    <p>对于已具备进水管与专用电路的厨房，总安装时间通常 1–2 小时。耗时最长的是电工接线（约 45 分钟）。如有疑问，可通过 WhatsApp 视频通话由我们远程指导。</p>
  </div>
</section>

<FAQSection items={[
  { q: '需要专业安装人员吗？', a: '不需要 — 持证的普通水电工就够。我们提供视频教程与 WhatsApp 远程支持。' },
  { q: '安装实际要多久？', a: '已具备水电的厨房 1–2 小时即可。水路约 30 分钟，电路约 45 分钟，测试约 15 分钟。' },
  { q: '可以发到新加坡 / 马来西亚 / 香港吗？', a: '可以。这些地区的商用厨房一般具备 380V 三相电源 — JD-3 直接对接。如您只有 220V 单相，可在下单时申请 220V 转换版。' },
  { q: '机器坏了怎么办？', a: '机器内嵌完整电路图（贴在维修门内）。普通电工就能据此诊断与维修大多数问题。需要更换零件时全球 DHL/FedEx 空运，5 个工作日内到货。' },
  { q: '以后能搬到别处吗？', a: '可以。机器没有螺栓固定在地面上 — 两个成年人用搬运推车即可移动。新位置重新接水电即可。' },
]} />

<CTASection locale={locale} title="需要安装指导？" subtitle="把您的厨房布局发给我们，下单前我们先帮您确认可行性。" />
</BaseLayout>
`);

await w('src/pages/zh/product/jd-3-specifications.astro', `---
import BaseLayout from '../../../layouts/BaseLayout.astro';
import ProductSpecsTable from '../../../components/ProductSpecsTable.astro';
import BreadcrumbNav from '../../../components/BreadcrumbNav.astro';
import CTASection from '../../../components/CTASection.astro';
const locale = 'zh' as const;
const sections = [
  { title: '尺寸与重量', rows: [
    { k: '机身尺寸（盖板关闭）', v: '804 × 816 × 1,550 mm' },
    { k: '最大高度（盖板打开）', v: '2,115 mm' },
    { k: '洗碗筐尺寸',         v: '650 × 550 mm' },
    { k: '机身重量',           v: '145 kg' },
  ]},
  { title: '清洗能力', rows: [
    { k: '吞吐量',         v: '180 个烤盘/小时' },
    { k: '每循环装载',     v: '6 个烤盘' },
    { k: '单次循环时间',   v: '2 分钟（120 秒）' },
    { k: '循环频次',       v: '30 次/小时' },
    { k: '每循环用水',     v: '2.0–2.5 升' },
    { k: '最终漂洗温度',   v: '>82°C' },
  ]},
  { title: '电气参数', rows: [
    { k: '总功率',   v: '13 kW' },
    { k: '电源',     v: '380V / 3N / 50Hz' },
    { k: '工作电流', v: '21.5 A' },
  ]},
  { title: '水路参数', rows: [
    { k: '进水接口',   v: 'G 3/4" 螺纹' },
    { k: '进水压力',   v: '2.5–6 kg/cm²' },
    { k: '排水接口',   v: 'G 1½"' },
  ]},
  { title: '主体材质', rows: [
    { k: '机身材质',     v: 'SUS304 食品级不锈钢' },
    { k: '洗碗筐材质',   v: 'SUS304 不锈钢' },
    { k: '喷臂材质',     v: 'SUS304 不锈钢' },
  ]},
  { title: '认证与标准', rows: [
    { k: '安全认证',     v: 'CE（欧盟合规）' },
    { k: '质量体系',     v: 'ISO 9001:2015' },
    { k: '消毒温度',     v: 'NSF/ANSI 3 / FDA Food Code 4-501.112 标准 ≥82°C' },
  ]},
];
---
<BaseLayout title="JD-3 完整规格参数 | V-TAI" description="V-TAI JD-3 揭盖式烘焙洗碗机的完整规格参数：尺寸、清洗能力、电气、水路、材质、认证。" locale={locale} canonicalPath="/product/jd-3-specifications/" schemaType="Product">
<BreadcrumbNav items={[{label:'首页',href:'/zh/'},{label:'产品',href:'/zh/product/'},{label:'规格参数'}]} />
<section class="section"><div class="container-page">
<h1 class="mb-3">JD-3 完整规格参数</h1>
<p class="text-bakery-navy/70 mb-8">需要导入您的招标文件或机房布置图？所有参数都可在这里找到，也可通过 WhatsApp 索取 PDF 规格书。</p>
<ProductSpecsTable sections={sections} />
</div></section>
<CTASection locale={locale} />
</BaseLayout>
`);

await w('src/pages/zh/product/jd-3-vs-hobart-amx.astro', `---
import BaseLayout from '../../../layouts/BaseLayout.astro';
import BreadcrumbNav from '../../../components/BreadcrumbNav.astro';
import ComparisonTable from '../../../components/ComparisonTable.astro';
import CTASection from '../../../components/CTASection.astro';
const locale = 'zh' as const;
const rows = [
  { label: '清洗能力',   jd3: '180 个烤盘/小时', competitor: '60 筐/小时（公开数据）' },
  { label: '洗碗筐尺寸', jd3: '650×550 mm',     competitor: '500×500 mm' },
  { label: '兼容 600×400 mm 烤盘', jd3: '✓ 是',  competitor: '✗ 否', highlight: true },
  { label: '最终漂洗温度', jd3: '>82°C 自动',     competitor: '>82°C' },
  { label: '价格',       jd3: '4,400 美元 FOB', competitor: '明显更高（零售价）' },
];
---
<BaseLayout title="JD-3 vs Hobart AMX | 同级对比" description="V-TAI JD-3 与 Hobart AMX 同级对比 — 洗碗筐尺寸、清洗能力、烤盘兼容性、价格逐项分析。" locale={locale} canonicalPath="/product/jd-3-vs-hobart-amx/" schemaType="Article">
<BreadcrumbNav items={[{label:'首页',href:'/zh/'},{label:'对比',href:'/zh/vs/'},{label:'vs Hobart AMX'}]} />
<section class="section"><div class="container-prose">
<h1>JD-3 vs Hobart AMX</h1>
<p class="text-lg mt-4 mb-6 text-bakery-navy/80">Hobart 是美国揭盖式商用洗碗机的市场领头。JD-3 在同等 CE 认证安全标准下价格显著更低，并且 — 关键点 — 能装下 Hobart AMX 装不下的 600×400 mm 欧标烤盘。</p>
<h2 class="mt-8 mb-3">为什么这个对比重要</h2>
<p>对烘焙业主来说，决定洗碗机能否用的关键不是「名牌」，而是「能不能装下我的烤盘」。Hobart AMX 用的是 500×500 mm 洗碗筐 — 这是为咖啡馆碗碟设计的尺寸，装不下 Convotherm、Rational、Unox 蒸烤箱标配的 600×400 烤盘。这意味着：要么您只能洗碗碟（烤盘还得手洗），要么您得加价 2–3 倍买 Hobart 的烘焙专用型号 PROFI。</p>
<p class="mt-3">JD-3 的 650×550 mm 洗碗筐是从一开始就按 600×400 烤盘设计的。资本支出明显更低，且可在 4 个月内回本。</p>
</div>
<div class="container-page"><ComparisonTable competitorName="Hobart AMX" rows={rows} /></div></section>
<CTASection locale={locale} />
</BaseLayout>
`);

await w('src/pages/zh/product/jd-3-vs-jackson-tempstar.astro', `---
import BaseLayout from '../../../layouts/BaseLayout.astro';
import BreadcrumbNav from '../../../components/BreadcrumbNav.astro';
import ComparisonTable from '../../../components/ComparisonTable.astro';
import CTASection from '../../../components/CTASection.astro';
const locale = 'zh' as const;
const rows = [
  { label: '清洗能力',   jd3: '180 个烤盘/小时', competitor: '60 筐/小时（公开数据）' },
  { label: '洗碗筐尺寸', jd3: '650×550 mm',     competitor: '500×500 mm' },
  { label: '兼容 600×400 mm 烤盘', jd3: '✓ 是',  competitor: '✗ 否', highlight: true },
  { label: '腔体高度',   jd3: '550 mm',          competitor: '约 400 mm' },
  { label: '价格',       jd3: '4,400 美元 FOB', competitor: '明显更高（零售价）' },
];
---
<BaseLayout title="JD-3 vs Jackson TempStar | 同级对比" description="V-TAI JD-3 与 Jackson TempStar HH-E 同级对比 — 烘焙业主该选哪个？" locale={locale} canonicalPath="/product/jd-3-vs-jackson-tempstar/" schemaType="Article">
<BreadcrumbNav items={[{label:'首页',href:'/zh/'},{label:'对比',href:'/zh/vs/'},{label:'vs Jackson TempStar'}]} />
<section class="section"><div class="container-prose">
<h1>JD-3 vs Jackson TempStar</h1>
<p class="text-lg mt-4 mb-6 text-bakery-navy/80">Jackson 是北美中端市场的主力品牌，TempStar HH-E 是该价位段的入门揭盖式机型。与 JD-3 的关键差异同样集中在洗碗筐尺寸 — Jackson 的 500×500 装不下 600×400 烤盘。对烘焙业主而言，这等于设备买回去也只能洗碗碟。</p>
<h2 class="mt-8 mb-3">JD-3 更适合烘焙的原因</h2>
<p>JD-3 的 650×550 mm 洗碗筐与 550 mm 腔体高度专为烘焙类器具（烤盘、慕斯圈、蛋糕模具、KitchenAid 搅拌桶）设计。Jackson TempStar 走的是「通用商用洗碗机」路线，结果烘焙器具大多塞不进。</p>
</div>
<div class="container-page"><ComparisonTable competitorName="Jackson TempStar HH-E" rows={rows} /></div></section>
<CTASection locale={locale} />
</BaseLayout>
`);

await w('src/pages/zh/product/jd-3-vs-cma-l-1x16-bw.astro', `---
import BaseLayout from '../../../layouts/BaseLayout.astro';
import BreadcrumbNav from '../../../components/BreadcrumbNav.astro';
import ComparisonTable from '../../../components/ComparisonTable.astro';
import CTASection from '../../../components/CTASection.astro';
const locale = 'zh' as const;
const rows = [
  { label: '清洗能力',   jd3: '180 个烤盘/小时', competitor: '60 筐/小时（公开数据）' },
  { label: '洗碗筐尺寸', jd3: '650×550 mm',     competitor: '500×500 mm' },
  { label: '兼容 600×400 mm 烤盘', jd3: '✓ 是',  competitor: '✗ 否', highlight: true },
  { label: '热回收系统', jd3: '可选',           competitor: '可选' },
  { label: '价格',       jd3: '4,400 美元 FOB', competitor: '明显更高（零售价）' },
];
---
<BaseLayout title="JD-3 vs CMA L-1X16-BW | 同级对比" description="V-TAI JD-3 与 CMA L-1X16-BW 同级对比 — 烘焙专用机型横评。" locale={locale} canonicalPath="/product/jd-3-vs-cma-l-1x16-bw/" schemaType="Article">
<BreadcrumbNav items={[{label:'首页',href:'/zh/'},{label:'对比',href:'/zh/vs/'},{label:'vs CMA L-1X16-BW'}]} />
<section class="section"><div class="container-prose">
<h1>JD-3 vs CMA L-1X16-BW</h1>
<p class="text-lg mt-4 mb-6 text-bakery-navy/80">CMA L-1X16-BW 是美国 / 意大利合资品牌中专门强调「面包房 spec」（BW = Bakery Ware）的型号。营销上向烘焙业主倾斜，但实际洗碗筐仍是 500×500 mm — 装不下 600×400 欧标烤盘。这是市场上很常见的「品牌承诺与实际规格不符」的情况。</p>
<p class="mt-3">JD-3 是物理意义上能装下 600×400 的机型，且价格更低。如果您正在比较 CMA L-1X16-BW，建议先确认您的烤盘尺寸 — 大概率您需要的是 JD-3。</p>
</div>
<div class="container-page"><ComparisonTable competitorName="CMA L-1X16-BW" rows={rows} /></div></section>
<CTASection locale={locale} />
</BaseLayout>
`);

// ======================================================================
// 4. WHAT-IT-WASHES — baking-trays-600x400 detail
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

<FAQSection items={[
  { q: '也能洗美式 18×26" 半幅烤盘吗？', a: '可以 — 18×26"（457×660 mm）烤盘斜放进 650×550 腔体。最后留出的空隙较紧但能用。' },
  { q: '能洗 GN 2/1 万能蒸烤盘吗？', a: '可以 — GN 2/1 是 650×530 mm，留出 0–20 mm 空隙刚好。' },
  { q: '每个循环能装几个 600×400 烤盘？', a: '标准 6 个/循环。残留较轻的高峰期最多可装 8 个/循环。每个循环 2–3 分钟，视残留程度而定。' },
  { q: '推荐用什么洗涤剂？', a: '标准商用低泡碱性洗涤剂（pH 12–13）。糖渍重的残留（蛋糕、甜品店）建议选用专为糖类残留设计的洗涤剂。' },
  { q: '每天烤盘的清洗维护怎么做？', a: '每日：滤网冲洗（2 分钟）；每周：腔体擦拭（10 分钟）；每月：除垢（30 分钟）；每年：工厂技师上门维护。' },
  { q: 'JD-3 的交货周期？', a: '深圳生产 4–6 周，加海运 20–35 天（视目的地）。新加坡、马来西亚、香港、台湾通常 6–8 周到货。' },
  { q: 'JD-3 兼容 Convotherm 蒸烤箱的烤盘吗？', a: '兼容 — Convotherm 用 600×400 EN 1/1 标准，和其它欧洲蒸烤箱品牌一样。已确认兼容。' },
  { q: '我用的是 400×600 GN 1/1（旋转方向不同）的烤盘，能用吗？', a: '可以 — 400×600 与 600×400 是同一个尺寸，只是放置方向不同。完全兼容。' },
]} />

<CTASection locale={locale} title="需要清洗 600×400 mm 欧标烤盘？" subtitle="同价位段就这一台能装下。12 小时内出报价。" />
</BaseLayout>
`);

// ======================================================================
// 5. CASE STUDIES — 4 files (just locale fix + Chinese title/description)
// ======================================================================

const caseStudies = [
  {
    slug: 'dubai-hotel-pastry',
    title: '案例研究：迪拜某四星酒店西点房 — 应对硬水的清洗方案',
    description: '迪拜某 4 星酒店西点房采用 JD-3 应对每日 80–120 个烤盘 + 当地硬水（450+ ppm）问题，年节省约 28,000 美元。',
  },
  {
    slug: 'lima-bakery-chain',
    title: '案例研究：利马手工面包连锁（5 家门店）— 拉美市场的 ROI 标杆',
    description: '利马的 5 家门店手工面包连锁部署 5 台 JD-3，每年共节省约 48,000 美元人工与设备成本。',
  },
  {
    slug: 'melbourne-patisserie',
    title: '案例研究：墨尔本独立法式甜品店 — 4 个月回本',
    description: '墨尔本一家独立法式甜品店采用 JD-3 替代手洗，每年节省约 5,200 澳元，4 个月内回本。',
  },
  {
    slug: 'seoul-cafe-chain',
    title: '案例研究：首尔咖啡连锁（12 家门店）— 中央厨房洗涤升级',
    description: '首尔某咖啡连锁的中央厨房用一台 JD-3 替代两台旧设备，年节省约 120,000 美元人工与水电成本。',
  },
];

for (const cs of caseStudies) {
  await w(`src/pages/zh/case-studies/${cs.slug}.astro`, `---
import CaseStudyLayout from '../../../layouts/CaseStudyLayout.astro';
---
<CaseStudyLayout
  locale="zh"
  slug="${cs.slug}"
  title=${JSON.stringify(cs.title)}
  description=${JSON.stringify(cs.description)}
/>
`);
}

// ======================================================================
// 6. GUIDES — 9 stub pages (Chinese teaser + link to English full version)
// ======================================================================

const guides = [
  {
    slug: 'bakery-tray-cleaning-best-practices',
    title: '烘焙烤盘清洗最佳实践',
    teaser: '从每日例行到每周维护、月度除垢，告诉您在烘焙场景下使用 JD-3 该用什么洗涤剂、该用什么水温、什么不该做。',
  },
  {
    slug: 'how-to-choose-bakery-tray-washer',
    title: '如何挑选一台烘焙烤盘清洗机',
    teaser: '真正关键的 8 项参数：处理量、洗碗筐尺寸、清洗温度、用水量、占地、功率、认证、售后。我们逐项告诉您该问厂家什么问题。',
  },
  {
    slug: '600x400-bakery-norm-explained',
    title: '600×400 mm 烘焙欧标：DIN 18876 与 EN 631 详解',
    teaser: '从 1960 年代的德国 DIN 标准，到今天 Rational、Convotherm、Unox 蒸烤箱的统一规格 — 为什么这个数字主宰了现代商用烘焙。',
  },
  {
    slug: 'cost-of-manual-tray-cleaning',
    title: '人工洗烤盘的隐性成本',
    teaser: '工时、水费、热水电费、烤盘磨损、产能损失 — 我们用真实数字告诉您手洗一年到底花掉多少钱（提示：远超您的直觉）。',
  },
  {
    slug: 'water-consumption-comparison',
    title: '用水量对比 — JD-3 与同级竞品',
    teaser: 'JD-3 单次循环 2.0–2.5 升 vs 大多数同级竞品 5–10 升。我们把新加坡、马来西亚、香港 5 年的水费差额算给您看。',
  },
  {
    slug: 'sanitization-temperature-standards',
    title: '消毒温度标准详解',
    teaser: '为什么是 82°C？NSF/ANSI 3、EN 12875-2、DIN 10516、FDA 食品法规 4-501.112 — 全世界的标准都指向同一个数字。',
  },
  {
    slug: 'dishwasher-detergent-for-bakery',
    title: '烘焙店专用洗涤剂选型',
    teaser: '碱性 vs 酶基洗涤剂、pH 值区间、漂洗剂选型，以及如何调节 JD-3 内置的洗涤剂分配器。',
  },
  {
    slug: 'electrical-requirements-bakery-dishwasher',
    title: '烘焙洗碗机的电气要求',
    teaser: '380V 三相 vs 400V 单相、断路器规格、专用回路要求，以及新加坡、马来西亚、香港、台湾、美国、欧盟的电源差异。',
  },
  {
    slug: 'space-requirements-small-bakery',
    title: '空间要求 — 中小型烘焙店动线设计',
    teaser: 'JD-3 的占地尺寸、开盖间隙、排风需求，以及洗涤区相对于烤箱、备餐台的最佳位置。',
  },
];

for (const g of guides) {
  await w(`src/pages/zh/guides/${g.slug}.astro`, `---
import BaseLayout from '../../../layouts/BaseLayout.astro';
import BreadcrumbNav from '../../../components/BreadcrumbNav.astro';
import CTASection from '../../../components/CTASection.astro';
import { t } from '../../../i18n/utils';
const locale = 'zh' as const;
---
<BaseLayout title=${JSON.stringify(`${g.title} | V-TAI JD-3 选购指南`)} description=${JSON.stringify(g.teaser)} locale={locale} canonicalPath="/guides/${g.slug}/" schemaType="Article">
<BreadcrumbNav items={[
  { label: t(locale, 'nav.home'), href: '/zh/' },
  { label: t(locale, 'nav.guides'), href: '/zh/guides/' },
  { label: ${JSON.stringify(g.title)} }
]} />
<section class="section"><div class="container-prose">
<h1 class="mb-4">${g.title}</h1>
<p class="text-lg mb-6 text-bakery-navy/80">${g.teaser}</p>
<p class="text-bakery-navy/70">完整长文版本正在翻译中。同时您可阅读英文完整版（含图表、计算示例与可下载表格）：</p>
<p class="mt-4"><a href="/guides/${g.slug}/" class="btn-primary inline-block">${g.title}（英文完整版）→</a></p>
</div></section>
<CTASection locale={locale} />
</BaseLayout>
`);
}

// ======================================================================
// 7. BLOG POSTS — 4 Thai-specific files
// Since the original Thai blogs target Thailand market specifically (อย. GMP,
// Bangkok DDP, Thai bakery ROI, Thai 600×400 explainer), we replace them with
// short Chinese stubs that point users to the more relevant pages.
// ======================================================================

const blogs = [
  {
    slug: '600x400-tray-norm-explained',
    title: '600×400 mm 欧标烤盘解读',
    teaser: 'DIN 18876 / EN 631 标准的由来，以及为什么 Rational / Convotherm / Unox 蒸烤箱都按这个尺寸设计。',
    cta: 'guides/600x400-bakery-norm-explained',
    ctaText: '阅读完整指南：600×400 mm 烘焙欧标',
  },
  {
    slug: 'aor-yor-gmp-tray-washer-thai-bakery',
    title: '泰国 อย. GMP 与烤盘清洗（泰语市场文章）',
    teaser: '本文是面向泰国市场撰写的食品监管合规专文。对于新加坡、马来西亚、香港等市场，请参考下方更对应的合规指南。',
    cta: 'guides/sanitization-temperature-standards',
    ctaText: '阅读消毒温度标准（多国通用）',
  },
  {
    slug: 'ddp-bangkok-cost-breakdown',
    title: '曼谷 DDP 成本拆解（泰语市场文章）',
    teaser: '本文针对泰国曼谷 DDP 进口成本撰写。新加坡、马来西亚、香港的 DDP 报价请参见各国到岸价页面。',
    cta: 'pricing/by-country',
    ctaText: '查看 18 国 DDP 到岸价',
  },
  {
    slug: 'roi-4-months-thai-bakery',
    title: '泰国烘焙店 4 个月回本案例（泰语市场文章）',
    teaser: '本文以泰国劳动力成本与水电费率计算 ROI。对应到新加坡、马来西亚、香港的人力 / 水电参数后，回本周期类似（4–6 个月）。',
    cta: 'case-studies',
    ctaText: '查看真实客户案例（迪拜、墨尔本、首尔、利马）',
  },
];

for (const b of blogs) {
  await w(`src/pages/zh/blog/${b.slug}.astro`, `---
import BaseLayout from '../../../layouts/BaseLayout.astro';
import BreadcrumbNav from '../../../components/BreadcrumbNav.astro';
import CTASection from '../../../components/CTASection.astro';
import { t } from '../../../i18n/utils';
const locale = 'zh' as const;
---
<BaseLayout title=${JSON.stringify(`${b.title} | V-TAI 博客`)} description=${JSON.stringify(b.teaser)} locale={locale} canonicalPath="/blog/${b.slug}/" schemaType="Article">
<BreadcrumbNav items={[
  { label: t(locale, 'nav.home'), href: '/zh/' },
  { label: t(locale, 'nav.blog'), href: '/zh/blog/' },
  { label: ${JSON.stringify(b.title)} }
]} />
<section class="section"><div class="container-prose">
<h1 class="mb-4">${b.title}</h1>
<p class="text-lg mb-6 text-bakery-navy/80">${b.teaser}</p>
<p class="mt-4"><a href="/zh/${b.cta}/" class="btn-primary inline-block">${b.ctaText} →</a></p>
</div></section>
<CTASection locale={locale} />
</BaseLayout>
`);
}

console.log('Rewrote 34 zh pages with idiomatic Simplified Chinese content.');
