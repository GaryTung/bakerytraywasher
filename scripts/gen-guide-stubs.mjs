// One-off script to regenerate localized guide stubs with proper i18n
import fs from 'node:fs';
import path from 'node:path';

const slugs = [
  'bakery-tray-cleaning-best-practices',
  'how-to-choose-bakery-tray-washer',
  '600x400-bakery-norm-explained',
  'cost-of-manual-tray-cleaning',
  'water-consumption-comparison',
  'dishwasher-detergent-for-bakery',
  'sanitization-temperature-standards',
  'electrical-requirements-bakery-dishwasher',
  'space-requirements-small-bakery',
];

const titles = {
  es: {
    'bakery-tray-cleaning-best-practices': 'Mejores Prácticas de Limpieza de Bandejas',
    'how-to-choose-bakery-tray-washer': 'Cómo Elegir una Lavadora de Bandejas',
    '600x400-bakery-norm-explained': 'La Norma de Panadería 600×400 mm Explicada',
    'cost-of-manual-tray-cleaning': 'El Costo Real del Lavado Manual',
    'water-consumption-comparison': 'Comparación de Consumo de Agua',
    'dishwasher-detergent-for-bakery': 'Detergente para Lavadoras de Panadería',
    'sanitization-temperature-standards': 'Estándares de Temperatura de Sanitización',
    'electrical-requirements-bakery-dishwasher': 'Requisitos Eléctricos',
    'space-requirements-small-bakery': 'Requisitos de Espacio para Panadería Pequeña',
  },
  fr: {
    'bakery-tray-cleaning-best-practices': 'Meilleures Pratiques de Nettoyage des Plaques',
    'how-to-choose-bakery-tray-washer': 'Comment Choisir un Lave-Plaques',
    '600x400-bakery-norm-explained': 'La Norme Boulangère 600×400 mm Expliquée',
    'cost-of-manual-tray-cleaning': 'Le Coût Réel du Lavage Manuel',
    'water-consumption-comparison': "Comparaison de Consommation d'Eau",
    'dishwasher-detergent-for-bakery': 'Détergent pour Lave-Vaisselle de Boulangerie',
    'sanitization-temperature-standards': 'Normes de Température de Désinfection',
    'electrical-requirements-bakery-dishwasher': 'Exigences Électriques',
    'space-requirements-small-bakery': 'Espace Requis pour Petite Boulangerie',
  },
  de: {
    'bakery-tray-cleaning-best-practices': 'Best Practices zur Bäckereibleche-Reinigung',
    'how-to-choose-bakery-tray-washer': 'Wie wählt man eine Bäckereiblechspülmaschine',
    '600x400-bakery-norm-explained': 'Die 600×400 mm EN-Norm erklärt',
    'cost-of-manual-tray-cleaning': 'Die wahren Kosten des manuellen Spülens',
    'water-consumption-comparison': 'Wasserverbrauchsvergleich',
    'dishwasher-detergent-for-bakery': 'Spülmittel für Bäckereien',
    'sanitization-temperature-standards': 'Hygiene-Temperaturstandards',
    'electrical-requirements-bakery-dishwasher': 'Elektrische Anforderungen',
    'space-requirements-small-bakery': 'Platzanforderungen für kleine Bäckereien',
  },
  ru: {
    'bakery-tray-cleaning-best-practices': 'Лучшие практики мытья пекарских противней',
    'how-to-choose-bakery-tray-washer': 'Как выбрать мойку для противней',
    '600x400-bakery-norm-explained': 'Стандарт пекарских противней 600×400 мм',
    'cost-of-manual-tray-cleaning': 'Реальная стоимость ручного мытья',
    'water-consumption-comparison': 'Сравнение потребления воды',
    'dishwasher-detergent-for-bakery': 'Моющее средство для пекарни',
    'sanitization-temperature-standards': 'Стандарты температуры дезинфекции',
    'electrical-requirements-bakery-dishwasher': 'Электрические требования',
    'space-requirements-small-bakery': 'Требования к пространству для малой пекарни',
  },
  th: {
    'bakery-tray-cleaning-best-practices': 'แนวปฏิบัติที่ดีในการล้างถาดเบเกอรี่',
    'how-to-choose-bakery-tray-washer': 'วิธีเลือกเครื่องล้างถาดเบเกอรี่',
    '600x400-bakery-norm-explained': 'อธิบายมาตรฐานถาดเบเกอรี่ 600×400 มม.',
    'cost-of-manual-tray-cleaning': 'ต้นทุนจริงของการล้างมือ',
    'water-consumption-comparison': 'การเปรียบเทียบการใช้น้ำ',
    'dishwasher-detergent-for-bakery': 'สารทำความสะอาดสำหรับเบเกอรี่',
    'sanitization-temperature-standards': 'มาตรฐานอุณหภูมิการฆ่าเชื้อ',
    'electrical-requirements-bakery-dishwasher': 'ข้อกำหนดทางไฟฟ้า',
    'space-requirements-small-bakery': 'ข้อกำหนดพื้นที่สำหรับเบเกอรี่ขนาดเล็ก',
  },
  vi: {
    'bakery-tray-cleaning-best-practices': 'Thực hành tốt nhất khi rửa khay bánh',
    'how-to-choose-bakery-tray-washer': 'Cách chọn máy rửa khay bánh',
    '600x400-bakery-norm-explained': 'Tiêu chuẩn khay bánh 600×400 mm',
    'cost-of-manual-tray-cleaning': 'Chi phí thực sự của việc rửa tay',
    'water-consumption-comparison': 'So sánh mức tiêu thụ nước',
    'dishwasher-detergent-for-bakery': 'Chất tẩy rửa cho tiệm bánh',
    'sanitization-temperature-standards': 'Tiêu chuẩn nhiệt độ vệ sinh',
    'electrical-requirements-bakery-dishwasher': 'Yêu cầu điện',
    'space-requirements-small-bakery': 'Yêu cầu không gian cho tiệm bánh nhỏ',
  },
  ar: {
    'bakery-tray-cleaning-best-practices': 'أفضل الممارسات لتنظيف صواني المخابز',
    'how-to-choose-bakery-tray-washer': 'كيفية اختيار غسالة صواني المخابز',
    '600x400-bakery-norm-explained': 'شرح معيار صواني المخابز 600×400 مم',
    'cost-of-manual-tray-cleaning': 'التكلفة الحقيقية للغسيل اليدوي',
    'water-consumption-comparison': 'مقارنة استهلاك المياه',
    'dishwasher-detergent-for-bakery': 'منظف الأطباق للمخابز',
    'sanitization-temperature-standards': 'معايير درجة حرارة التعقيم',
    'electrical-requirements-bakery-dishwasher': 'المتطلبات الكهربائية',
    'space-requirements-small-bakery': 'متطلبات المساحة للمخبز الصغير',
  },
};

const intros = {
  es: 'Guía práctica para operadores de panadería usando el V-TAI JD-3.',
  fr: 'Guide pratique pour les boulangers utilisant le V-TAI JD-3.',
  de: 'Praktischer Leitfaden für Bäckereibetreiber mit dem V-TAI JD-3.',
  ru: 'Практическое руководство для пекарен, использующих V-TAI JD-3.',
  th: 'คู่มือปฏิบัติสำหรับผู้ประกอบการเบเกอรี่ที่ใช้ V-TAI JD-3',
  vi: 'Hướng dẫn thực tế cho người vận hành tiệm bánh sử dụng V-TAI JD-3.',
  ar: 'دليل عملي لمشغلي المخابز الذين يستخدمون V-TAI JD-3.',
};

const seeFullEn = {
  es: 'Ver versión inglesa completa',
  fr: 'Voir la version anglaise complète',
  de: 'Vollständige englische Version ansehen',
  ru: 'Посмотреть полную английскую версию',
  th: 'ดูฉบับเต็มภาษาอังกฤษ',
  vi: 'Xem phiên bản tiếng Anh đầy đủ',
  ar: 'اطلع على النسخة الإنجليزية الكاملة',
};

const pagesDir = path.join(process.cwd(), 'src', 'pages');

for (const [loc, slugTitles] of Object.entries(titles)) {
  for (const slug of slugs) {
    const title = slugTitles[slug];
    const intro = intros[loc];
    const linktext = seeFullEn[loc];
    const filePath = path.join(pagesDir, loc, 'guides', `${slug}.astro`);
    const content = `---
import BaseLayout from '../../../layouts/BaseLayout.astro';
import BreadcrumbNav from '../../../components/BreadcrumbNav.astro';
import CTASection from '../../../components/CTASection.astro';
import { t } from '../../../i18n/utils';
const locale = '${loc}' as const;
---
<BaseLayout title="${title.replace(/"/g, '\\"')} | JD-3" description="${title.replace(/"/g, '\\"')}" locale={locale} canonicalPath="/guides/${slug}/" schemaType="Article">
<BreadcrumbNav items={[
  { label: t(locale, 'nav.home'), href: '/${loc}/' },
  { label: t(locale, 'nav.guides') },
  { label: ${JSON.stringify(title)} }
]} />
<section class="section"><div class="container-prose">
<h1 class="mb-4">${title.replace(/</g, '&lt;')}</h1>
<p class="text-lg mb-6">${intro.replace(/</g, '&lt;')}</p>
<p class="text-bakery-navy/70"><a href="/guides/${slug}/" class="underline">${linktext}</a></p>
</div></section>
<CTASection locale={locale} />
</BaseLayout>
`;
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, content);
  }
}

console.log('All guide stubs regenerated.');
