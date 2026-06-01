#!/usr/bin/env node
// Generate /[locale]/guides/index.astro for all 7 non-EN locales.
import { writeFile, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');
const locales = ['es', 'fr', 'de', 'ru', 'th', 'vi', 'ar'];

const titleMeta = {
  es: ['Guías JD-3 — Lavadora de bandejas para panadería', '9 guías prácticas para elegir, instalar y operar una lavadora comercial para panadería.'],
  fr: ['Guides JD-3 — Lave-plaques de boulangerie',         '9 guides pratiques pour choisir, installer et exploiter un lave-plaques commercial.'],
  de: ['JD-3 Ratgeber — Bäckerei-Spülmaschine',             '9 praktische Anleitungen zur Auswahl, Installation und zum Betrieb einer gewerblichen Bäckerei-Spülmaschine.'],
  ru: ['Руководства JD-3 — Машина для мойки противней',     '9 практических руководств по выбору, установке и эксплуатации коммерческой машины для мойки противней.'],
  th: ['คู่มือ JD-3 — เครื่องล้างถาดเบเกอรี่',                 'คู่มือปฏิบัติ 9 ฉบับ สำหรับการเลือก ติดตั้ง และใช้งานเครื่องล้างถาดเบเกอรี่เชิงพาณิชย์'],
  vi: ['Hướng dẫn JD-3 — Máy rửa khay bánh',                '9 hướng dẫn thực tế để chọn, lắp đặt và vận hành máy rửa khay bánh thương mại.'],
  ar: ['أدلة JD-3 — غسالة صواني المخابز',                    '9 أدلة عملية لاختيار غسالة صواني المخابز التجارية وتركيبها وتشغيلها.'],
};

const readGuideLabel = {
  es: 'Leer guía', fr: 'Lire le guide', de: 'Anleitung lesen', ru: 'Читать руководство',
  th: 'อ่านคู่มือ', vi: 'Đọc hướng dẫn', ar: 'اقرأ الدليل',
};

function file(locale) {
  const [pageTitle, pageDesc] = titleMeta[locale];
  return `---
import BaseLayout from '../../../layouts/BaseLayout.astro';
import BreadcrumbNav from '../../../components/BreadcrumbNav.astro';
import CTASection from '../../../components/CTASection.astro';
import { guides, guidesHub } from '../../../i18n/guides';
import { t } from '../../../i18n/utils';

const locale = '${locale}' as const;
const hub = guidesHub[locale];
const readLabel = ${JSON.stringify(readGuideLabel[locale])};
---
<BaseLayout
  title={${JSON.stringify(pageTitle)}}
  description={${JSON.stringify(pageDesc)}}
  locale={locale}
  canonicalPath="/guides/"
  schemaType="Article"
>
<BreadcrumbNav items={[{label: t(locale, 'nav.home'), href: '/${locale}/'}, {label: hub.h1}]} />

<section class="section">
  <div class="container-page">
    <h1 class="text-center mb-4">{hub.h1}</h1>
    <p class="text-bakery-navy/70 text-lg max-w-2xl mx-auto text-center mb-10">{hub.intro}</p>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {guides.map((g) => (
        <a href={\`/${locale}/guides/\${g.slug}/\`} class="card hover:scale-[1.02] transition flex flex-col">
          <h3 class="mb-3 text-lg">{g.title[locale]}</h3>
          <p class="text-sm text-bakery-navy/70 flex-1">{g.desc[locale]}</p>
          <p class="text-bakery-orange text-sm mt-3 font-semibold">{readLabel} →</p>
        </a>
      ))}
    </div>
  </div>
</section>

<CTASection locale={locale} />
</BaseLayout>
`;
}

for (const loc of locales) {
  const dir = join(root, 'src', 'pages', loc, 'guides');
  await mkdir(dir, { recursive: true });
  await writeFile(join(dir, 'index.astro'), file(loc), 'utf8');
}
console.log(`Wrote ${locales.length} locale guides hubs.`);
