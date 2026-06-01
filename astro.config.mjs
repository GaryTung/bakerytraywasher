import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://bakerytraywasher.com',
  output: 'static',
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          es: 'es-ES',
          ru: 'ru-RU',
          ar: 'ar-SA',
          th: 'th-TH',
          vi: 'vi-VN',
          fr: 'fr-FR',
          de: 'de-DE',
          zh: 'zh-Hans',
        },
      },
    }),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'ru', 'ar', 'th', 'vi', 'fr', 'de', 'zh'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  build: {
    format: 'directory',
  },
});
