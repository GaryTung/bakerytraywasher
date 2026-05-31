// Regenerate all 8 locale vs hub pages, vs detail pages, and case-studies hub pages
// using the shared vsdata.ts translations.
import fs from 'node:fs';
import path from 'node:path';

const locales = ['en', 'es', 'fr', 'de', 'ru', 'th', 'vi', 'ar'];

const vsSlugs = [
  'hobart-amx',
  'jackson-tempstar',
  'cma-l-1x16-bw',
  'winterhalter',
  'manual-washing-comparison',
  'undercounter-vs-hood-type',
  'used-bakery-equipment',
];

const pagesDir = path.join(process.cwd(), 'src', 'pages');

for (const loc of locales) {
  const prefix = loc === 'en' ? '' : `/${loc}`;
  const importPrefix = loc === 'en' ? '../..' : '../../..';
  const baseHref = loc === 'en' ? '/' : `/${loc}/`;

  // -------------------- vs/index.astro --------------------
  const vsHubPath = loc === 'en'
    ? path.join(pagesDir, 'vs', 'index.astro')
    : path.join(pagesDir, loc, 'vs', 'index.astro');

  const vsHubContent = `---
import BaseLayout from '${importPrefix}/layouts/BaseLayout.astro';
import BreadcrumbNav from '${importPrefix}/components/BreadcrumbNav.astro';
import CTASection from '${importPrefix}/components/CTASection.astro';
import { t } from '${importPrefix}/i18n/utils';
import { vsCards, vsIntro, vsCompareTitle } from '${importPrefix}/i18n/vsdata';
const locale = '${loc}' as const;
---
<BaseLayout
  title={vsCompareTitle[locale] + ' | V-TAI JD-3'}
  description={vsIntro[locale]}
  locale={locale}
  canonicalPath="/vs/"
  schemaType="Article"
>
<BreadcrumbNav items={[{label: t(locale, 'nav.home'), href: '${baseHref}'}, {label: t(locale, 'nav.compare')}]} />

<section class="section">
  <div class="container-page">
    <h1 class="mb-4 text-center">{vsCompareTitle[locale]}</h1>
    <p class="text-bakery-navy/70 text-lg max-w-2xl mx-auto text-center mb-10">{vsIntro[locale]}</p>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {vsCards.map((c) => (
        <a href={\`${prefix}/vs/\${c.slug}/\`} class="card hover:scale-[1.02] transition">
          <h3 class="text-lg mb-2">{c.name[locale]}</h3>
          <p class="text-sm text-bakery-navy/70">{c.desc[locale]}</p>
          <p class="text-bakery-orange text-sm font-semibold mt-3">→</p>
        </a>
      ))}
    </div>
  </div>
</section>

<CTASection locale={locale} />
</BaseLayout>
`;
  fs.mkdirSync(path.dirname(vsHubPath), { recursive: true });
  fs.writeFileSync(vsHubPath, vsHubContent);

  // -------------------- vs/{slug}.astro for each of 7 slugs --------------------
  for (const slug of vsSlugs) {
    const detailPath = loc === 'en'
      ? path.join(pagesDir, 'vs', `${slug}.astro`)
      : path.join(pagesDir, loc, 'vs', `${slug}.astro`);

    // Standard row set used in detail pages — locale-aware text
    const detailContent = `---
import BaseLayout from '${importPrefix}/layouts/BaseLayout.astro';
import BreadcrumbNav from '${importPrefix}/components/BreadcrumbNav.astro';
import ComparisonTable from '${importPrefix}/components/ComparisonTable.astro';
import CTASection from '${importPrefix}/components/CTASection.astro';
import { t } from '${importPrefix}/i18n/utils';
import {
  vsCards, vsCompareTitle, vsTableLabels,
  competitorVariesLabel, competitorPriceLabel,
  whyJd3WinsLabel, whyJd3WinsItems,
} from '${importPrefix}/i18n/vsdata';
const locale = '${loc}' as const;
const card = vsCards.find((c) => c.slug === '${slug}')!;

const rows = [
  { label: vsTableLabels.rackSize[locale], jd3: '650×550 mm', competitor: '500×500 mm' },
  { label: vsTableLabels.fits600[locale], jd3: '✓', competitor: '✗', highlight: true },
  { label: vsTableLabels.throughput[locale], jd3: '180 / h', competitor: competitorVariesLabel[locale] },
  { label: vsTableLabels.cycle[locale], jd3: '2 min', competitor: competitorVariesLabel[locale] },
  { label: vsTableLabels.price[locale], jd3: 'From $4,400 FOB', competitor: competitorPriceLabel[locale] },
];
---
<BaseLayout
  title={\`JD-3 \${card.name[locale]}\`}
  description={card.desc[locale]}
  locale={locale}
  canonicalPath="/vs/${slug}/"
  schemaType="Article"
>
<BreadcrumbNav items={[
  {label: t(locale, 'nav.home'), href: '${baseHref}'},
  {label: t(locale, 'nav.compare'), href: '${prefix}/vs/'},
  {label: card.name[locale]}
]} />

<section class="section"><div class="container-prose">
<h1 class="mb-4">JD-3 {card.name[locale]}</h1>
<p class="text-lg mb-6">{card.desc[locale]}</p>
</div>
<div class="container-page"><ComparisonTable competitorName="—" rows={rows} /></div>
</section>

<section class="section"><div class="container-prose">
<h2 class="mb-3">{whyJd3WinsLabel[locale]}</h2>
<ul class="list-disc list-inside space-y-2">
  {whyJd3WinsItems[locale].map((line) => <li>{line}</li>)}
</ul>
</div></section>

<CTASection locale={locale} />
</BaseLayout>
`;
    fs.writeFileSync(detailPath, detailContent);
  }

  // -------------------- case-studies/index.astro --------------------
  const csHubPath = loc === 'en'
    ? path.join(pagesDir, 'case-studies', 'index.astro')
    : path.join(pagesDir, loc, 'case-studies', 'index.astro');

  const csHubContent = `---
import BaseLayout from '${importPrefix}/layouts/BaseLayout.astro';
import BreadcrumbNav from '${importPrefix}/components/BreadcrumbNav.astro';
import CTASection from '${importPrefix}/components/CTASection.astro';
import { t } from '${importPrefix}/i18n/utils';
import { caseStudies, caseStudiesTitle, caseStudiesIntro, annualSavingsLabel } from '${importPrefix}/i18n/vsdata';
const locale = '${loc}' as const;
---
<BaseLayout
  title={caseStudiesTitle[locale] + ' | V-TAI JD-3'}
  description={caseStudiesIntro[locale]}
  locale={locale}
  canonicalPath="/case-studies/"
  schemaType="Article"
>
<BreadcrumbNav items={[{label: t(locale, 'nav.home'), href: '${baseHref}'}, {label: caseStudiesTitle[locale]}]} />

<section class="section">
  <div class="container-page">
    <h1 class="mb-4 text-center">{caseStudiesTitle[locale]}</h1>
    <p class="text-bakery-navy/70 text-lg max-w-2xl mx-auto text-center mb-10">{caseStudiesIntro[locale]}</p>
    <div class="grid sm:grid-cols-2 gap-6">
      {caseStudies.map((c) => (
        <a href={\`${prefix}/case-studies/\${c.slug}/\`} class="card hover:scale-[1.02] transition">
          <h3 class="mb-1">{c.name[locale]}</h3>
          <p class="text-sm text-bakery-navy/60 mb-3">{c.location[locale]}</p>
          <p class="text-bakery-orange font-semibold">{annualSavingsLabel[locale]}: {c.savings[locale]}</p>
        </a>
      ))}
    </div>
  </div>
</section>

<CTASection locale={locale} />
</BaseLayout>
`;
  fs.mkdirSync(path.dirname(csHubPath), { recursive: true });
  fs.writeFileSync(csHubPath, csHubContent);

  console.log(`Wrote ${loc}: vs/index, ${vsSlugs.length} vs details, case-studies/index`);
}
console.log('Done.');
