# bakerytraywasher.com

A multilingual, SEO-focused B2B specialist site for the **V-TAI JD-3 Bakingware Hood-type Washer** — a commercial bakery tray washer targeting small-to-mid commercial buyers (bakery shops, cafés, patisseries, hotel pastry kitchens, cloud kitchens) worldwide.

Built with **Astro 5** + **Tailwind CSS** + **Cloudflare Pages**. ~200+ pages in 8 languages.

---

## Tech Stack

- **Framework**: [Astro 5](https://astro.build) (static output)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Forms**: [Web3Forms](https://web3forms.com) (frontend POST only, no backend)
- **Hosting**: [Cloudflare Pages](https://pages.cloudflare.com)
- **Sitemap**: `@astrojs/sitemap` with hreflang
- **Icons**: Inline SVG (lucide-astro available)
- **Analytics**: Cloudflare Web Analytics (cookie-free)

---

## Languages

| Locale | Code | URL prefix | Pages |
|--------|------|------------|-------|
| English (default) | `en` | `/` | ~62 |
| Spanish | `es` | `/es/` | 25 |
| French | `fr` | `/fr/` | 22 |
| Russian | `ru` | `/ru/` | 20 |
| Thai | `th` | `/th/` | 20 |
| Vietnamese | `vi` | `/vi/` | 20 |
| German | `de` | `/de/` | 20 |
| Arabic (RTL) | `ar` | `/ar/` | 18 |

**Total: ~207 pages** across all languages.

---

## Quick Start

### Prerequisites

- Node.js 18+ (tested on Node 20+)
- npm 9+

### Install

```bash
npm install
```

### Develop

```bash
npm run dev
```

Open <http://localhost:4321>.

### Build

```bash
npm run build
```

Output is written to `dist/`. Verify with:

```bash
npm run preview
```

---

## Environment Variables

Copy `.env.example` to `.env` and set your Web3Forms access key:

```
PUBLIC_WEB3FORMS_KEY=your_actual_web3forms_access_key
```

Get a free key at <https://web3forms.com> (250 submissions/month free tier).

For Cloudflare Pages production: add the variable under **Settings → Environment variables** in the Cloudflare dashboard.

---

## Deployment — Cloudflare Pages

The site auto-deploys to `bakerytraywasher.com` via GitHub push.

**Cloudflare Pages settings:**

| Setting | Value |
|---------|-------|
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | (project root) |
| Node version | `20` (set via `NODE_VERSION` env var) |
| Environment variables | `PUBLIC_WEB3FORMS_KEY` |

Workflow:
1. Push to `main` branch on GitHub
2. Cloudflare Pages auto-builds (~3 min)
3. Live at `bakerytraywasher.com` and `*.pages.dev` preview URLs

---

## File Structure

```
src/
├── pages/
│   ├── index.astro                # English homepage
│   ├── product/                   # English product pages (7)
│   ├── by-business-type/          # English business type pages (8)
│   ├── what-it-washes/            # English what-it-washes pages (10)
│   ├── vs/                        # English vs pages (7)
│   ├── guides/                    # English guides (9)
│   ├── pricing/                   # English pricing pages (2)
│   ├── case-studies/              # English case studies (5)
│   ├── resources/                 # Free ROI calculator, buyers guide, video lib
│   ├── blog/                      # 3 starter blog posts
│   ├── about.astro
│   ├── contact.astro
│   ├── get-quote.astro
│   ├── thank-you.astro
│   ├── shipping-payment.astro
│   ├── faq.astro
│   │
│   ├── es/   fr/   ru/   ar/   th/   vi/   de/      # Translated pages
│
├── layouts/
│   ├── BaseLayout.astro
│   ├── BusinessTypeLayout.astro
│   ├── WhatItWashesLayout.astro
│   └── GuideLayout.astro
│
├── components/
│   ├── Header.astro               # Sticky nav with language switcher
│   ├── Footer.astro
│   ├── HreflangTags.astro
│   ├── SchemaOrg.astro            # JSON-LD schema
│   ├── InquiryForm.astro          # Full Web3Forms form
│   ├── InlineInquiryForm.astro    # Short form variant
│   ├── WhatsAppButton.astro       # Floating WhatsApp CTA (every page)
│   ├── LanguageSwitcher.astro
│   ├── BreadcrumbNav.astro
│   ├── ComparisonTable.astro
│   ├── ProductSpecsTable.astro
│   ├── PriceCalloutBox.astro
│   ├── TestimonialCard.astro
│   ├── TrustBadgeStrip.astro
│   ├── FAQSection.astro
│   ├── CTASection.astro
│   └── ImagePlaceholder.astro     # Renders gradient placeholders until real images uploaded
│
├── content/
│   └── config.ts                  # Content collections schema (unused for v1)
│
├── i18n/
│   ├── utils.ts                   # Locale routing, hreflang map
│   ├── en.json   es.json   ...    # UI string translations per locale
│
└── styles/
    └── global.css

public/
├── images/                        # Real images go here (placeholders used until then)
├── pdfs/
├── videos/
├── robots.txt
└── favicon.ico   favicon.svg
```

---

## Adding a New Page

### Option A — As an `.astro` page

Create `src/pages/<path>/<name>.astro` (or `src/pages/<locale>/<path>/<name>.astro` for translations) and import a layout:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
const locale = 'en' as const;
---
<BaseLayout
  title="Page title — 60 chars or less"
  description="Meta description — under 160 chars"
  locale={locale}
  canonicalPath="/your-new-page/"
  schemaType="Article"
>
  <h1>Your content</h1>
</BaseLayout>
```

### Option B — As a content collection (MDX/Markdown)

Use `src/content/<collection>/<slug>.md` if you set up dynamic routes. See `src/content/config.ts` for the schema definitions.

After creating a translated page, register it in `src/i18n/utils.ts` `TRANSLATED` map so hreflang tags work correctly.

---

## Adding a New Language

1. Add the locale code to `astro.config.mjs` → `i18n.locales`
2. Add a translation JSON file: `src/i18n/<locale>.json` (copy `en.json` as template)
3. Update `src/i18n/utils.ts`:
   - Add to `languages` object
   - Add to `localeDirection` (use `'rtl'` for right-to-left languages)
   - Add to `localeLang`
   - Import the new JSON into `dict`
4. Create `src/pages/<locale>/` directory mirroring the English structure
5. Update `TRANSLATED` map in `utils.ts` to indicate which pages are available

---

## Forms — Web3Forms Integration

All inquiry forms POST directly to `https://api.web3forms.com/submit`. No backend code.

Form submissions are emailed to **info@v-tai.com** (or whatever email is configured at <https://web3forms.com>). Honeypot field included for spam protection.

### Form components

- `<InquiryForm locale={locale} />` — full quote form, used on `/get-quote/`
- `<InlineInquiryForm locale={locale} businessTypePreset="Bakery" />` — short form for sidebar use

### Customization

To change which fields appear, edit `src/components/InquiryForm.astro` and `InlineInquiryForm.astro`.

To redirect after submission (instead of inline success message), uncomment the `window.location.href = '/thank-you/';` line in the script block.

---

## Images

**All images currently use placeholders** — gradient boxes with descriptive labels. Real images need to be added to `public/images/`.

See [`IMAGES-NEEDED.md`](./IMAGES-NEEDED.md) for the complete list of images required (filenames, dimensions, descriptions, suggested style).

To replace a placeholder with a real image, edit the `<ImagePlaceholder>` component usage in the page and pass the `src` prop:

```astro
<ImagePlaceholder src="/images/jd-3-hero.webp" alt="JD-3 hero" ratio="16/9" />
```

---

## SEO Implementation

- ✅ Unique `<title>` and `<meta description>` per page
- ✅ Canonical URL on every page
- ✅ Open Graph + Twitter Card tags
- ✅ Hreflang for all translated pages (driven by `TRANSLATED` map in `utils.ts`)
- ✅ Schema.org JSON-LD: Organization, Product, Article, FAQPage, HowTo, BreadcrumbList
- ✅ Auto-generated `sitemap-index.xml` with hreflang via `@astrojs/sitemap`
- ✅ `robots.txt` allows all + points to sitemap
- ✅ Mobile-first responsive (320 / 768 / 1024+ breakpoints)
- ✅ Performance budget: targets Lighthouse 95+

---

## Brand & Content Guidelines

- **Tone**: friendly, practical, painpoint-driven, ROI-focused (unlike industrial sites)
- **Currency**: USD primary; EUR mentioned for EU markets
- **Numbers**: localized (e.g., `2,800` EN, `2.800` ES/DE, `2 800` FR/RU)
- **Avoid**: "cheap", "low-cost". **Use**: "affordable", "value-engineered", "30–40% below Hobart pricing"
- **Voice**: Second person ("you", "your business"), warm, helpful

---

## Contact

- Email: <info@v-tai.com>
- WhatsApp: +86 135 0962 3269
- Office: Room 2202, Global Logistics Services Centre, Longgang, Shenzhen, Guangdong, China

---

## License

Site code: proprietary, V-TAI / Shenzhen Vtai Electrical Appliance Co., Ltd.
