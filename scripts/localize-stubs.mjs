#!/usr/bin/env node
/**
 * Localize the remaining EN-stub pages in each locale folder:
 *   - 3 old EN blog stubs       (3 × 7 locales = 21)
 *   - 3 resources stubs         (3 × 7 locales = 21)
 *   - 1 shipping-payment page   (1 × 7 locales =  7)
 *
 * Each rewritten file uses t(locale, ...) for breadcrumb labels and shows
 * localized "this article is in English only" notice + headings. Body for
 * shipping-payment is fully translated since it's substantive.
 */
import { writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');
const locales = ['es', 'fr', 'de', 'ru', 'th', 'vi', 'ar'];

// ============================================================
// Per-locale labels
// ============================================================
const LBL = {
  es: {
    blogStubTitleSuffix: '(versión en inglés)',
    blogStubLead: 'Este artículo aún no está traducido al español. Lea la versión completa en inglés:',
    resourcesIntro: 'Esta página está disponible en inglés:',
    shippingPaymentH1: 'Envío y pago',
    sp_payment: 'Pago',
    sp_paymentItems: ['30% depósito al ordenar, 70% saldo antes del envío', 'TT (transferencia bancaria), L/C para pedidos > $20.000', 'USD primario; EUR/GBP/AED aceptados'],
    sp_leadTime: 'Plazos',
    sp_leadTimeItems: ['Producción: 4 semanas', 'Flete marítimo: 20–35 días', 'Flete aéreo: 3–7 días'],
    sp_ddp: 'DDP para 18 mercados',
    sp_ddpP: 'Para 18 mercados principales ofrecemos precios DDP en moneda local. Vea',
    sp_ddpLink: 'precios por país',
    seoTitle: { '600x400-tray-size-history-and-standard': 'Historia y estándar del tamaño 600×400', 'dishwasher-roi-for-small-bakery': 'ROI del lavavajillas para panadería', 'why-your-bakery-needs-a-tray-washer': 'Por qué tu panadería necesita una lavadora de bandejas', 'buyers-guide-pdf': 'Guía del comprador (PDF)', 'free-roi-calculator': 'Calculadora gratuita de ROI', 'video-library': 'Biblioteca de videos', 'shipping-payment': 'Envío y pago' },
  },
  fr: {
    blogStubTitleSuffix: '(version anglaise)',
    blogStubLead: "Cet article n'est pas encore traduit en français. Lisez la version complète en anglais :",
    resourcesIntro: 'Cette page est disponible en anglais :',
    shippingPaymentH1: 'Expédition et paiement',
    sp_payment: 'Paiement',
    sp_paymentItems: ['Acompte 30% à la commande, solde 70% avant expédition', 'TT (virement), L/C pour commandes > 20 000 $', 'USD principal ; EUR/GBP/AED acceptés'],
    sp_leadTime: 'Délais',
    sp_leadTimeItems: ['Production : 4 semaines', 'Fret maritime : 20–35 jours', 'Fret aérien : 3–7 jours'],
    sp_ddp: 'DDP pour 18 marchés',
    sp_ddpP: 'Pour 18 marchés majeurs nous fournissons des prix DDP en monnaie locale. Voir',
    sp_ddpLink: 'tarifs par pays',
    seoTitle: { '600x400-tray-size-history-and-standard': 'Histoire et standard de la taille 600×400', 'dishwasher-roi-for-small-bakery': 'ROI du lave-vaisselle pour boulangerie', 'why-your-bakery-needs-a-tray-washer': 'Pourquoi votre boulangerie a besoin d\'un lave-plaques', 'buyers-guide-pdf': "Guide de l'acheteur (PDF)", 'free-roi-calculator': 'Calculateur de ROI gratuit', 'video-library': 'Bibliothèque vidéo', 'shipping-payment': 'Expédition et paiement' },
  },
  de: {
    blogStubTitleSuffix: '(englische Version)',
    blogStubLead: 'Dieser Artikel ist noch nicht ins Deutsche übersetzt. Lesen Sie die vollständige englische Version:',
    resourcesIntro: 'Diese Seite ist auf Englisch verfügbar:',
    shippingPaymentH1: 'Versand und Zahlung',
    sp_payment: 'Zahlung',
    sp_paymentItems: ['30% Anzahlung bei Bestellung, 70% Restbetrag vor Versand', 'TT (Überweisung), L/C für Bestellungen > 20.000 $', 'USD primär; EUR/GBP/AED akzeptiert'],
    sp_leadTime: 'Lieferzeiten',
    sp_leadTimeItems: ['Produktion: 4 Wochen', 'Seefracht: 20–35 Tage', 'Luftfracht: 3–7 Tage'],
    sp_ddp: 'DDP für 18 Märkte',
    sp_ddpP: 'Für 18 wichtige Märkte bieten wir DDP-Preise in lokaler Währung. Siehe',
    sp_ddpLink: 'Preise nach Land',
    seoTitle: { '600x400-tray-size-history-and-standard': 'Geschichte und Standard der Größe 600×400', 'dishwasher-roi-for-small-bakery': 'Spülmaschinen-ROI für Bäckereien', 'why-your-bakery-needs-a-tray-washer': 'Warum Ihre Bäckerei eine Blech-Spülmaschine braucht', 'buyers-guide-pdf': 'Käuferleitfaden (PDF)', 'free-roi-calculator': 'Kostenloser ROI-Rechner', 'video-library': 'Video-Bibliothek', 'shipping-payment': 'Versand und Zahlung' },
  },
  ru: {
    blogStubTitleSuffix: '(английская версия)',
    blogStubLead: 'Эта статья ещё не переведена на русский. Прочтите полную версию на английском:',
    resourcesIntro: 'Эта страница доступна на английском:',
    shippingPaymentH1: 'Доставка и оплата',
    sp_payment: 'Оплата',
    sp_paymentItems: ['30% предоплата при заказе, 70% остаток до отгрузки', 'TT (банковский перевод), L/C для заказов > 20 000 $', 'USD основная; EUR/GBP/AED принимаются'],
    sp_leadTime: 'Сроки',
    sp_leadTimeItems: ['Производство: 4 недели', 'Морской фрахт: 20–35 дней', 'Авиафрахт: 3–7 дней'],
    sp_ddp: 'DDP для 18 рынков',
    sp_ddpP: 'Для 18 ключевых рынков мы предоставляем цены DDP в местной валюте. См.',
    sp_ddpLink: 'цены по странам',
    seoTitle: { '600x400-tray-size-history-and-standard': 'История и стандарт размера 600×400', 'dishwasher-roi-for-small-bakery': 'ROI посудомоечной машины для пекарни', 'why-your-bakery-needs-a-tray-washer': 'Зачем вашей пекарне машина для мойки противней', 'buyers-guide-pdf': 'Руководство покупателя (PDF)', 'free-roi-calculator': 'Бесплатный калькулятор ROI', 'video-library': 'Видеотека', 'shipping-payment': 'Доставка и оплата' },
  },
  th: {
    blogStubTitleSuffix: '(ฉบับภาษาอังกฤษ)',
    blogStubLead: 'บทความนี้ยังไม่ได้แปลเป็นภาษาไทย อ่านฉบับเต็มภาษาอังกฤษ:',
    resourcesIntro: 'หน้านี้มีให้บริการเป็นภาษาอังกฤษ:',
    shippingPaymentH1: 'การจัดส่งและการชำระเงิน',
    sp_payment: 'การชำระเงิน',
    sp_paymentItems: ['มัดจำ 30% เมื่อสั่ง, ยอดคงเหลือ 70% ก่อนส่ง', 'TT (โอนเงินผ่านธนาคาร), L/C สำหรับคำสั่งซื้อ > $20,000', 'USD เป็นหลัก; รับ EUR/GBP/AED'],
    sp_leadTime: 'ระยะเวลา',
    sp_leadTimeItems: ['การผลิต: 4 สัปดาห์', 'การขนส่งทางทะเล: 20–35 วัน', 'การขนส่งทางอากาศ: 3–7 วัน'],
    sp_ddp: 'DDP สำหรับ 18 ตลาด',
    sp_ddpP: 'สำหรับ 18 ตลาดหลัก เรามีราคา DDP ในสกุลเงินท้องถิ่น ดูที่',
    sp_ddpLink: 'ราคาตามประเทศ',
    seoTitle: { '600x400-tray-size-history-and-standard': 'ประวัติและมาตรฐานขนาด 600×400', 'dishwasher-roi-for-small-bakery': 'ROI ของเครื่องล้างจานสำหรับเบเกอรี่', 'why-your-bakery-needs-a-tray-washer': 'ทำไมเบเกอรี่ของคุณต้องการเครื่องล้างถาด', 'buyers-guide-pdf': 'คู่มือผู้ซื้อ (PDF)', 'free-roi-calculator': 'เครื่องคำนวณ ROI ฟรี', 'video-library': 'คลังวิดีโอ', 'shipping-payment': 'การจัดส่งและการชำระเงิน' },
  },
  vi: {
    blogStubTitleSuffix: '(bản tiếng Anh)',
    blogStubLead: 'Bài viết này chưa được dịch sang tiếng Việt. Xem bản đầy đủ tiếng Anh:',
    resourcesIntro: 'Trang này có sẵn bằng tiếng Anh:',
    shippingPaymentH1: 'Vận chuyển và thanh toán',
    sp_payment: 'Thanh toán',
    sp_paymentItems: ['Đặt cọc 30% khi đặt hàng, 70% trước khi giao', 'TT (chuyển khoản), L/C cho đơn hàng > $20,000', 'USD chính; chấp nhận EUR/GBP/AED'],
    sp_leadTime: 'Thời gian',
    sp_leadTimeItems: ['Sản xuất: 4 tuần', 'Vận chuyển biển: 20–35 ngày', 'Vận chuyển hàng không: 3–7 ngày'],
    sp_ddp: 'DDP cho 18 thị trường',
    sp_ddpP: 'Cho 18 thị trường lớn chúng tôi cung cấp giá DDP bằng tiền tệ địa phương. Xem',
    sp_ddpLink: 'giá theo quốc gia',
    seoTitle: { '600x400-tray-size-history-and-standard': 'Lịch sử và chuẩn kích thước 600×400', 'dishwasher-roi-for-small-bakery': 'ROI máy rửa bát cho tiệm bánh', 'why-your-bakery-needs-a-tray-washer': 'Tại sao tiệm bánh cần máy rửa khay', 'buyers-guide-pdf': 'Hướng dẫn người mua (PDF)', 'free-roi-calculator': 'Máy tính ROI miễn phí', 'video-library': 'Thư viện video', 'shipping-payment': 'Vận chuyển và thanh toán' },
  },
  ar: {
    blogStubTitleSuffix: '(النسخة الإنجليزية)',
    blogStubLead: 'هذه المقالة لم تُترجم بعد إلى العربية. اقرأ النسخة الإنجليزية الكاملة:',
    resourcesIntro: 'هذه الصفحة متاحة باللغة الإنجليزية:',
    shippingPaymentH1: 'الشحن والدفع',
    sp_payment: 'الدفع',
    sp_paymentItems: ['عربون 30% عند الطلب، 70% رصيد قبل الشحن', 'TT (تحويل بنكي)، L/C للطلبات > 20,000 دولار', 'الدولار أساسي؛ يقبل اليورو/الجنيه/الدرهم'],
    sp_leadTime: 'الجدول الزمني',
    sp_leadTimeItems: ['الإنتاج: 4 أسابيع', 'الشحن البحري: 20-35 يوماً', 'الشحن الجوي: 3-7 أيام'],
    sp_ddp: 'DDP لـ 18 سوقاً',
    sp_ddpP: 'لـ 18 سوقاً رئيسياً نقدم أسعار DDP بالعملة المحلية. انظر',
    sp_ddpLink: 'الأسعار حسب الدولة',
    seoTitle: { '600x400-tray-size-history-and-standard': 'تاريخ ومعيار حجم 600×400', 'dishwasher-roi-for-small-bakery': 'عائد استثمار غسالة الصحون للمخبز', 'why-your-bakery-needs-a-tray-washer': 'لماذا يحتاج مخبزك إلى غسالة صواني', 'buyers-guide-pdf': 'دليل المشتري (PDF)', 'free-roi-calculator': 'حاسبة ROI مجانية', 'video-library': 'مكتبة الفيديو', 'shipping-payment': 'الشحن والدفع' },
  },
};

const blogSlugs = ['600x400-tray-size-history-and-standard', 'dishwasher-roi-for-small-bakery', 'why-your-bakery-needs-a-tray-washer'];
const resourceSlugs = ['buyers-guide-pdf', 'free-roi-calculator', 'video-library'];

// Escape any character that would break a JSX single-quoted string literal
// or an HTML attribute value.
const j = (s) => s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
const h = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;');

function blogStubFile(locale, slug) {
  const L = LBL[locale];
  const title = L.seoTitle[slug];
  return `---
import BaseLayout from '../../../layouts/BaseLayout.astro';
import BreadcrumbNav from '../../../components/BreadcrumbNav.astro';
import CTASection from '../../../components/CTASection.astro';
import { t } from '../../../i18n/utils';
const locale = '${locale}' as const;
---
<BaseLayout title="${h(title)} ${h(L.blogStubTitleSuffix)} | JD-3" description="${h(title)}" locale={locale} canonicalPath="/blog/${slug}/" schemaType="Article">
<BreadcrumbNav items={[{label: t(locale,'nav.home'), href:'/${locale}/'},{label: t(locale,'nav.blog'), href:'/${locale}/blog/'},{label: '${j(title)}'}]} />
<section class="section"><div class="container-prose">
<h1 class="mb-4">${title}</h1>
<p class="text-lg mb-6 text-bakery-navy/70">${L.blogStubLead}</p>
<p><a href="/blog/${slug}/" class="btn-primary inline-block">${title} (EN) →</a></p>
</div></section>
<CTASection locale={locale} />
</BaseLayout>
`;
}

function resourceStubFile(locale, slug) {
  const L = LBL[locale];
  const title = L.seoTitle[slug];
  return `---
import BaseLayout from '../../../layouts/BaseLayout.astro';
import BreadcrumbNav from '../../../components/BreadcrumbNav.astro';
import CTASection from '../../../components/CTASection.astro';
import { t } from '../../../i18n/utils';
const locale = '${locale}' as const;
---
<BaseLayout title="${h(title)} | JD-3" description="${h(title)}" locale={locale} canonicalPath="/resources/${slug}/" schemaType="Article">
<BreadcrumbNav items={[{label: t(locale,'nav.home'), href:'/${locale}/'},{label: t(locale,'nav.resources'), href:'/${locale}/resources/'},{label: '${j(title)}'}]} />
<section class="section"><div class="container-prose">
<h1 class="mb-4">${title}</h1>
<p class="text-lg mb-6 text-bakery-navy/70">${L.resourcesIntro}</p>
<p><a href="/resources/${slug}/" class="btn-primary inline-block">${title} (EN) →</a></p>
</div></section>
<CTASection locale={locale} />
</BaseLayout>
`;
}

function shippingPaymentFile(locale) {
  const L = LBL[locale];
  const items = (arr) => arr.map((x) => `<li>${x}</li>`).join('\n');
  return `---
import BaseLayout from '../../layouts/BaseLayout.astro';
import BreadcrumbNav from '../../components/BreadcrumbNav.astro';
import CTASection from '../../components/CTASection.astro';
import { t } from '../../i18n/utils';
const locale = '${locale}' as const;
---
<BaseLayout title="${h(L.shippingPaymentH1)} | JD-3" description="${h(L.shippingPaymentH1)} V-TAI JD-3." locale={locale} canonicalPath="/shipping-payment/">
<BreadcrumbNav items={[{label: t(locale,'nav.home'), href:'/${locale}/'},{label: '${j(L.shippingPaymentH1)}'}]} />
<section class="section"><div class="container-prose">
<h1 class="mb-4">${L.shippingPaymentH1}</h1>
<h2 class="mt-6 mb-3">${L.sp_payment}</h2>
<ul class="list-disc list-inside space-y-1">
${items(L.sp_paymentItems)}
</ul>
<h2 class="mt-6 mb-3">${L.sp_leadTime}</h2>
<ul class="list-disc list-inside space-y-1">
${items(L.sp_leadTimeItems)}
</ul>
<h2 class="mt-6 mb-3">${L.sp_ddp}</h2>
<p>${L.sp_ddpP} <a href="/${locale}/pricing/by-country/" class="underline">${L.sp_ddpLink}</a>.</p>
</div></section>
<CTASection locale={locale} />
</BaseLayout>
`;
}

let count = 0;
for (const locale of locales) {
  for (const slug of blogSlugs) {
    await writeFile(join(root, 'src', 'pages', locale, 'blog', `${slug}.astro`), blogStubFile(locale, slug), 'utf8');
    count++;
  }
  for (const slug of resourceSlugs) {
    await writeFile(join(root, 'src', 'pages', locale, 'resources', `${slug}.astro`), resourceStubFile(locale, slug), 'utf8');
    count++;
  }
  await writeFile(join(root, 'src', 'pages', locale, 'shipping-payment.astro'), shippingPaymentFile(locale), 'utf8');
  count++;
}
console.log(`Wrote ${count} localized stub pages.`);
