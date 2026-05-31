// Regenerate by-business-type and what-it-washes index hubs for all 8 locales
// using the shared categories.ts translation maps.
import fs from 'node:fs';
import path from 'node:path';

const locales = ['en', 'es', 'fr', 'de', 'ru', 'th', 'vi', 'ar'];

const businessIntro = {
  en: 'Pick your business type to see how the JD-3 specifically fits your operation.',
  es: 'Elija su tipo de negocio para ver cómo la JD-3 se adapta específicamente a su operación.',
  fr: "Choisissez votre type d'activité pour voir comment le JD-3 s'adapte spécifiquement à votre exploitation.",
  de: 'Wählen Sie Ihre Geschäftsart, um zu sehen, wie der JD-3 spezifisch zu Ihrem Betrieb passt.',
  ru: 'Выберите тип бизнеса, чтобы узнать, как JD-3 подходит именно вашей операции.',
  th: 'เลือกประเภทธุรกิจของคุณเพื่อดูว่า JD-3 เหมาะกับการดำเนินงานของคุณอย่างไร',
  vi: 'Chọn loại hình kinh doanh của bạn để xem JD-3 phù hợp với hoạt động của bạn như thế nào.',
  ar: 'اختر نوع عملك لترى كيف يتلاءم JD-3 مع عملياتك تحديداً.',
};

const washesIntro = {
  en: 'Every type of cookware the JD-3 cleans — bakery trays, sheet pans, mixing bowls, cake pans, and more.',
  es: 'Todos los tipos de utensilios que la JD-3 lava — bandejas, moldes, tazones y más.',
  fr: 'Tout ce que le JD-3 lave — plaques, moules, bols et plus encore.',
  de: 'Alles, was der JD-3 spült — Backbleche, Formen, Schüsseln und mehr.',
  ru: 'Всё, что моет JD-3 — противни, формы, чаши и многое другое.',
  th: 'ทุกประเภทของอุปกรณ์ที่ JD-3 ล้างได้ — ถาด, แม่พิมพ์, ชาม และอื่นๆ',
  vi: 'Mọi loại dụng cụ JD-3 có thể rửa — khay, khuôn, bát và nhiều hơn nữa.',
  ar: 'جميع أنواع الأواني التي يغسلها JD-3 — الصواني، القوالب، الأوعية وأكثر.',
};

const pagesDir = path.join(process.cwd(), 'src', 'pages');

for (const loc of locales) {
  const prefix = loc === 'en' ? '' : `/${loc}`;
  const importPrefix = loc === 'en' ? '../..' : '../../..';

  // By-business-type index
  const bizFile = loc === 'en'
    ? path.join(pagesDir, 'by-business-type', 'index.astro')
    : path.join(pagesDir, loc, 'by-business-type', 'index.astro');

  const bizContent = `---
import BaseLayout from '${importPrefix}/layouts/BaseLayout.astro';
import BreadcrumbNav from '${importPrefix}/components/BreadcrumbNav.astro';
import CTASection from '${importPrefix}/components/CTASection.astro';
import { t } from '${importPrefix}/i18n/utils';
import { businessTypeNames, businessTypeIcons } from '${importPrefix}/i18n/categories';
const locale = '${loc}' as const;

const slugs = ['bakery-shop','coffee-chain','patisserie','cake-shop','small-restaurant','cafeteria','hotel-pastry-kitchen','cloud-kitchen'];
const intro = ${JSON.stringify(businessIntro[loc])};
---
<BaseLayout
  title={t(locale, 'nav.business') + ' | V-TAI JD-3'}
  description={intro}
  locale={locale}
  canonicalPath="/by-business-type/"
  schemaType="Article"
>
<BreadcrumbNav items={[{label: t(locale, 'nav.home'), href: '${prefix}/'}, {label: t(locale, 'nav.business')}]} />
<section class="section">
  <div class="container-page">
    <h1 class="mb-4 text-center">{t(locale, 'nav.business')}</h1>
    <p class="text-center text-bakery-navy/70 max-w-2xl mx-auto mb-10">{intro}</p>
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {slugs.map((slug) => (
        <a href={\`${prefix}/by-business-type/\${slug}/\`} class="card text-center hover:scale-[1.02] transition">
          <div class="text-4xl mb-2">{businessTypeIcons[slug]}</div>
          <p class="font-semibold text-bakery-navy">{businessTypeNames[slug][locale]}</p>
        </a>
      ))}
    </div>
  </div>
</section>
<CTASection locale={locale} />
</BaseLayout>
`;
  fs.mkdirSync(path.dirname(bizFile), { recursive: true });
  fs.writeFileSync(bizFile, bizContent);

  // What-it-washes index
  const washesFile = loc === 'en'
    ? path.join(pagesDir, 'what-it-washes', 'index.astro')
    : path.join(pagesDir, loc, 'what-it-washes', 'index.astro');

  const washesContent = `---
import BaseLayout from '${importPrefix}/layouts/BaseLayout.astro';
import BreadcrumbNav from '${importPrefix}/components/BreadcrumbNav.astro';
import CTASection from '${importPrefix}/components/CTASection.astro';
import { t } from '${importPrefix}/i18n/utils';
import { washesNames, flagshipLabel } from '${importPrefix}/i18n/categories';
const locale = '${loc}' as const;

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
const intro = ${JSON.stringify(washesIntro[loc])};
---
<BaseLayout
  title={t(locale, 'nav.washes') + ' | V-TAI JD-3'}
  description={intro}
  locale={locale}
  canonicalPath="/what-it-washes/"
  schemaType="Article"
>
<BreadcrumbNav items={[{label: t(locale, 'nav.home'), href: '${prefix}/'}, {label: t(locale, 'nav.washes')}]} />
<section class="section">
  <div class="container-page">
    <h1 class="mb-4 text-center">{t(locale, 'nav.washes')}</h1>
    <p class="text-center text-bakery-navy/70 max-w-2xl mx-auto mb-10">{intro}</p>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {items.map((it) => (
        <a href={\`${prefix}/what-it-washes/\${it.slug}/\`} class={\`card hover:scale-[1.02] transition \${it.flagship ? 'border-2 border-bakery-orange' : ''}\`}>
          {it.flagship && <p class="eyebrow text-bakery-orange">⭐ {flagshipLabel[locale]}</p>}
          <h3 class="text-lg mb-2 mt-1">{washesNames[it.slug][locale]}</h3>
        </a>
      ))}
    </div>
  </div>
</section>
<CTASection locale={locale} />
</BaseLayout>
`;
  fs.mkdirSync(path.dirname(washesFile), { recursive: true });
  fs.writeFileSync(washesFile, washesContent);

  console.log(`Wrote ${loc}: by-business-type + what-it-washes index hubs`);
}
console.log('Done.');
