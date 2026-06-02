# Downloads — PDF Asset Folder

Files placed in this folder are served as static assets at
`https://bakerytraywasher.com/downloads/<filename>`.

## Spec sheet PDFs

The product pages currently link to:

| Locale | File path (drop here) | Public URL |
|--------|----------------------|------------|
| Chinese (zh) | `public/downloads/jd-3-spec-sheet-zh.pdf` | `/downloads/jd-3-spec-sheet-zh.pdf` |
| English (en) | `public/downloads/jd-3-spec-sheet-en.pdf` | `/downloads/jd-3-spec-sheet-en.pdf` |

The download button on the product page (`/zh/product/` and `/product/`)
points to these exact filenames. As soon as you drop the PDF files in
this folder and push to GitHub, Cloudflare Pages will serve them — no
code change needed.

## Naming convention for future locales

If you want to add localized PDFs for other languages, use:

```
public/downloads/jd-3-spec-sheet-es.pdf   ← Spanish
public/downloads/jd-3-spec-sheet-fr.pdf   ← French
public/downloads/jd-3-spec-sheet-de.pdf   ← German
public/downloads/jd-3-spec-sheet-ru.pdf   ← Russian
public/downloads/jd-3-spec-sheet-th.pdf   ← Thai
public/downloads/jd-3-spec-sheet-vi.pdf   ← Vietnamese
public/downloads/jd-3-spec-sheet-ar.pdf   ← Arabic
```

Until the localized PDF exists, the other locales' product pages can
keep linking to `jd-3-spec-sheet-en.pdf` as a fallback.

## Recommended PDF specs

- Format: PDF/A-1b (long-term archival, embedded fonts)
- Page size: A4 (210 × 297 mm) — most printer-friendly worldwide
- File size target: ≤ 2 MB so download is instant on mobile networks
- Embed all fonts so non-Chinese systems render the Chinese version correctly
- Include the same hero photo as the website (`/images/jd-3-hero.webp`)
  on the cover page so the PDF visually matches the site

## Other downloadable assets you can add later

```
public/downloads/jd-3-installation-manual-zh.pdf
public/downloads/jd-3-ce-certificate.pdf
public/downloads/jd-3-iso9001-certificate.pdf
public/downloads/v-tai-company-brochure.pdf
```

Link to them from the relevant pages (installation page, About page,
certifications section, etc.) using the same `<a href="/downloads/..."
download>` pattern.
