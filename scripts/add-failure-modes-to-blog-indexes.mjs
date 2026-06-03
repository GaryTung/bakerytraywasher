#!/usr/bin/env node
// Insert the new five-failure-modes blog entry into every blog index page.
import { readFile, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');

const entries = {
  en: { title: "Five Ways a Commercial Dishwasher Actually Dies", desc: "Pump bearings, heating-element scale, control-board moisture, gasket degradation, drain impeller wear — and what to ask before you buy." },
  es: { title: "Cinco formas en que muere una lavavajillas comercial", desc: "Rodamientos de bomba, sarro en resistencia, humedad en placa, junta, impulsor de drenaje — y qué preguntar antes de comprar." },
  fr: { title: "Cinq façons dont meurt un lave-vaisselle pro", desc: "Roulements de pompe, tartre, humidité sur la carte, joint, turbine de vidange — et ce qu'il faut demander avant d'acheter." },
  de: { title: "Fünf Wege, wie eine gewerbliche Spülmaschine stirbt", desc: "Pumpenlager, Heizkalk, PCB-Feuchte, Türdichtung, Ablaufpumpenrad — und was Sie vor dem Kauf fragen sollten." },
  ru: { title: "Пять способов, которыми умирает посудомойка", desc: "Подшипники насоса, накипь, влага на плате, уплотнение, крыльчатка слива — и что спросить до покупки." },
  th: { title: "5 รูปแบบที่เครื่องล้างจานเชิงพาณิชย์พังจริง", desc: "แบริ่งปั๊ม คราบหินปูน ความชื้นแผงคุม ยางประตู ใบพัดระบาย — และต้องถามอะไรก่อนซื้อ" },
  vi: { title: "Năm cách máy rửa bát công nghiệp hỏng thật", desc: "Ổ bi bơm, cặn vôi, ẩm bo mạch, gioăng, cánh bơm thoát — và cần hỏi gì trước khi mua." },
  ar: { title: "خمس طرق تموت بها غسالة الصحون التجارية", desc: "محامل المضخة، ترسبات الكلس، رطوبة اللوحة، حشية الباب، دفّاع التصريف — وماذا تسأل قبل الشراء." },
  zh: { title: "商用洗碗机最常见的 5 种坏法", desc: "水泵轴承、加热管结垢、控制板受潮、门密封圈、排水泵叶轮 — 以及购前必问的 8 个问题。" },
};

const hrefLabel = {
  en: 'Read article →',
  es: 'Leer artículo →',
  fr: 'Lire l\'article →',
  de: 'Artikel lesen →',
  ru: 'Читать статью →',
  th: 'อ่านบทความ →',
  vi: 'Đọc bài viết →',
  ar: 'اقرأ المقالة →',
  zh: '阅读文章 →',
};

const files = [
  { rel: 'src/pages/blog/index.astro',           locale: 'en' },
  { rel: 'src/pages/es/blog/index.astro',        locale: 'es' },
  { rel: 'src/pages/fr/blog/index.astro',        locale: 'fr' },
  { rel: 'src/pages/de/blog/index.astro',        locale: 'de' },
  { rel: 'src/pages/ru/blog/index.astro',        locale: 'ru' },
  { rel: 'src/pages/th/blog/index.astro',        locale: 'th' },
  { rel: 'src/pages/vi/blog/index.astro',        locale: 'vi' },
  { rel: 'src/pages/ar/blog/index.astro',        locale: 'ar' },
  { rel: 'src/pages/zh/blog/index.astro',        locale: 'zh' },
];

let touched = 0;
for (const { rel, locale } of files) {
  const p = join(root, rel);
  let src = await readFile(p, 'utf8');
  if (src.includes('five-failure-modes-commercial-dishwasher')) {
    console.log(`  already present: ${rel}`);
    continue;
  }
  const entry = entries[locale];
  // Insert as the first item in the posts array. We look for `const posts = [` then add a new entry right after.
  const newEntry = `{
    slug: 'five-failure-modes-commercial-dishwasher',
    title: ${JSON.stringify(entry.title)},
    desc: ${JSON.stringify(entry.desc)},
    date: '2026-05-15',
  },
  `;
  const out = src.replace(/const posts = \[\s*/, (m) => m + newEntry);
  if (out === src) {
    console.warn(`  WARN: posts array pattern not found in ${rel}`);
    continue;
  }
  await writeFile(p, out, 'utf8');
  touched++;
  console.log(`  ✓ ${rel}`);
}
console.log(`Updated ${touched}/${files.length} blog indexes.`);
