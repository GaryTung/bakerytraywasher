import en from './en.json';
import es from './es.json';
import ru from './ru.json';
import ar from './ar.json';
import th from './th.json';
import vi from './vi.json';
import fr from './fr.json';
import de from './de.json';

export const languages = {
  en: 'English',
  es: 'Español',
  ru: 'Русский',
  ar: 'العربية',
  th: 'ไทย',
  vi: 'Tiếng Việt',
  fr: 'Français',
  de: 'Deutsch',
} as const;

export type Locale = keyof typeof languages;
export const defaultLocale: Locale = 'en';

export const localeDirection: Record<Locale, 'ltr' | 'rtl'> = {
  en: 'ltr', es: 'ltr', ru: 'ltr', ar: 'rtl', th: 'ltr', vi: 'ltr', fr: 'ltr', de: 'ltr',
};

export const localeLang: Record<Locale, string> = {
  en: 'en-US', es: 'es-ES', ru: 'ru-RU', ar: 'ar-SA',
  th: 'th-TH', vi: 'vi-VN', fr: 'fr-FR', de: 'de-DE',
};

const dict: Record<Locale, Record<string, string>> = { en, es, ru, ar, th, vi, fr, de };

export function getLocaleFromUrl(url: URL): Locale {
  const seg = url.pathname.split('/').filter(Boolean)[0];
  if (seg && seg in languages && seg !== 'en') return seg as Locale;
  return defaultLocale;
}

export function t(locale: Locale, key: string): string {
  return dict[locale]?.[key] ?? dict.en?.[key] ?? key;
}

export function localizePath(path: string, locale: Locale): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (locale === defaultLocale) return clean;
  return `/${locale}${clean}`;
}

/**
 * Strip locale prefix from a path so we can reconstruct equivalent URLs for other locales.
 */
export function stripLocale(pathname: string): string {
  const parts = pathname.split('/').filter(Boolean);
  if (parts[0] && parts[0] in languages && parts[0] !== 'en') {
    return '/' + parts.slice(1).join('/') + (pathname.endsWith('/') ? '/' : '');
  }
  return pathname;
}

/**
 * Locales for which a given canonical path has been translated.
 * Pages not in the list will be omitted from hreflang.
 */
const TRANSLATED: Record<string, Locale[]> = {
  '/': ['en', 'es', 'ru', 'ar', 'th', 'vi', 'fr', 'de'],
  '/product/': ['en', 'es', 'ru', 'ar', 'th', 'vi', 'fr', 'de'],
  '/product/jd-3-specifications/': ['en', 'es', 'ru', 'ar', 'th', 'vi', 'fr', 'de'],
  '/product/jd-3-features/': ['en', 'es', 'ru', 'ar', 'th', 'vi', 'fr', 'de'],
  '/product/jd-3-installation/': ['en', 'es', 'ru', 'ar', 'th', 'vi', 'fr', 'de'],
  '/product/jd-3-vs-hobart-amx/': ['en', 'es', 'ru', 'ar', 'th', 'vi', 'fr', 'de'],
  '/product/jd-3-vs-jackson-tempstar/': ['en', 'es', 'ru', 'ar', 'th', 'vi', 'fr', 'de'],
  '/product/jd-3-vs-cma-l-1x16-bw/': ['en', 'es', 'ru', 'ar', 'th', 'vi', 'fr', 'de'],
  '/get-quote/': ['en', 'es', 'ru', 'ar', 'th', 'vi', 'fr', 'de'],
  '/contact/': ['en', 'es', 'ru', 'ar', 'th', 'vi', 'fr', 'de'],
  '/about/': ['en', 'es', 'ru', 'fr'],
  '/pricing/': ['en', 'es', 'th', 'vi', 'de'],
  '/what-it-washes/baking-trays-600x400/': ['en', 'es', 'ru', 'ar', 'th', 'vi', 'fr', 'de'],
  '/what-it-washes/sheet-pans/': ['en', 'es', 'ru', 'ar', 'th', 'vi', 'fr', 'de'],
  '/what-it-washes/cake-pans/': ['en', 'es', 'ru', 'ar', 'th', 'vi', 'fr', 'de'],
  '/what-it-washes/mixing-bowls/': ['en', 'es', 'ru', 'ar', 'vi', 'fr', 'de'],
  '/what-it-washes/pizza-pans/': ['en', 'es', 'fr'],
  '/what-it-washes/large-bakeware/': ['en', 'fr'],
  '/by-business-type/bakery-shop/': ['en', 'es', 'ru', 'ar', 'th', 'vi', 'fr', 'de'],
  '/by-business-type/coffee-chain/': ['en', 'es', 'ru', 'ar', 'th', 'vi'],
  '/by-business-type/patisserie/': ['en', 'es', 'ar', 'th', 'fr', 'de'],
  '/by-business-type/cake-shop/': ['en', 'es', 'th', 'vi', 'fr', 'de'],
  '/by-business-type/small-restaurant/': ['en', 'es', 'ru', 'th', 'vi', 'fr'],
  '/by-business-type/cafeteria/': ['en', 'es', 'ru', 'vi', 'fr', 'de'],
  '/by-business-type/hotel-pastry-kitchen/': ['en', 'es', 'ru', 'ar', 'th', 'vi', 'fr', 'de'],
  '/by-business-type/cloud-kitchen/': ['en', 'es'],
};

// Full site coverage now exists in all 8 locales (every page generated either
// directly or via shared layout). Language switcher should always offer all 8;
// hreflang likewise. If a specific locale variant of a niche detail page is
// missing, that's a 404 that can be filled in later — better than only showing
// English.
const ALL_LOCALES = Object.keys(languages) as Locale[];

export function getTranslatedLocales(_canonicalPath: string): Locale[] {
  return ALL_LOCALES;
}
