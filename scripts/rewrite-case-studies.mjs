#!/usr/bin/env node
/**
 * Rewrite all 28 locale case study pages to use CaseStudyLayout.
 * Each page becomes a minimal wrapper that passes locale+slug+SEO title/desc.
 */
import { writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');

const slugs = ['dubai-hotel-pastry', 'lima-bakery-chain', 'melbourne-patisserie', 'seoul-cafe-chain'];
const locales = ['es', 'fr', 'de', 'ru', 'th', 'vi', 'ar'];

// SEO title + description per locale per slug. Keeps each <title> tag native.
const seo = {
  es: {
    'dubai-hotel-pastry': { title: 'Caso: Pastelería de hotel en Dubái — Agua dura y alto volumen', desc: 'Cocina de pastelería de hotel 4 estrellas en Dubái desplegó el JD-3 para manejar 80–120 bandejas/día. Ahorró $28,000/año.' },
    'lima-bakery-chain': { title: 'Caso: Cadena de panadería artesanal en Lima (5 ubicaciones)', desc: 'Una cadena de panadería artesanal de 5 ubicaciones en Lima reemplazó el lavado inconsistente con una flota JD-3. Ahorró $48,000/año.' },
    'melbourne-patisserie': { title: 'Caso: Pastelería en Melbourne — La compatibilidad 600×400 fue decisiva', desc: 'Una pastelería gourmet de Melbourne necesitaba un lavavajillas que aceptara sus bandejas Convotherm 600×400. El JD-3 fue la única opción en su rango.' },
    'seoul-cafe-chain': { title: 'Caso: Cadena de cafés en Seúl estandariza JD-3 (12 ubicaciones)', desc: 'Una cadena de cafés de 12 ubicaciones en Seúl reemplazó el lavado inconsistente con un despliegue estandarizado de JD-3. Resultado: $120,000/año ahorrados.' },
  },
  fr: {
    'dubai-hotel-pastry': { title: 'Étude de cas : Cuisine pâtisserie d\'hôtel à Dubaï — Eau dure', desc: 'Une cuisine pâtisserie d\'hôtel 4 étoiles à Dubaï a déployé le JD-3 pour gérer 80–120 plaques/jour. A économisé 28 000 $/an.' },
    'lima-bakery-chain': { title: 'Étude de cas : Chaîne boulangerie artisanale à Lima (5 sites)', desc: 'Une chaîne boulangerie artisanale de 5 sites à Lima a remplacé un lavage incohérent par une flotte JD-3. A économisé 48 000 $/an.' },
    'melbourne-patisserie': { title: 'Étude de cas : Pâtisserie Melbourne — Compatibilité 600×400 décisive', desc: 'Une pâtisserie haut de gamme de Melbourne avait besoin d\'un lave-vaisselle qui acceptait leurs plaques Convotherm 600×400. Le JD-3 a été la seule option.' },
    'seoul-cafe-chain': { title: 'Étude de cas : Chaîne cafés Séoul standardise sur JD-3 (12 sites)', desc: 'Une chaîne de cafés de 12 sites basée à Séoul a remplacé un lavage incohérent par un déploiement JD-3 standardisé. Résultat : 120 000 $/an économisés.' },
  },
  de: {
    'dubai-hotel-pastry': { title: 'Fallstudie: Dubai Hotel-Patisserie — Hartes Wasser', desc: 'Eine 4-Sterne-Hotel-Patisserie in Dubai setzte JD-3 für 80–120 Bleche/Tag ein. Sparte 28.000 $/Jahr.' },
    'lima-bakery-chain': { title: 'Fallstudie: Handwerksbäckereikette in Lima (5 Standorte)', desc: 'Eine 5-Standort-Handwerksbäckereikette in Lima ersetzte uneinheitliches Spülen durch eine JD-3-Flotte. Sparte 48.000 $/Jahr.' },
    'melbourne-patisserie': { title: 'Fallstudie: Melbourne-Patisserie — 600×400-Kompatibilität war entscheidend', desc: 'Eine hochwertige Patisserie in Melbourne brauchte eine Spülmaschine, die ihre Convotherm 600×400-Bleche aufnahm. JD-3 war die einzige Option.' },
    'seoul-cafe-chain': { title: 'Fallstudie: Seoul-Café-Kette standardisiert auf JD-3 (12 Standorte)', desc: 'Eine in Seoul ansässige Café-Kette mit 12 Standorten ersetzte uneinheitliches Spülen durch einen standardisierten JD-3-Einsatz. Ergebnis: 120.000 $/Jahr gespart.' },
  },
  ru: {
    'dubai-hotel-pastry': { title: 'Кейс: Кондитерская отеля в Дубае — Жёсткая вода', desc: 'Кондитерская отеля 4* в Дубае развернула JD-3 для 80–120 противней/день. Экономия $28 000/год.' },
    'lima-bakery-chain': { title: 'Кейс: Сеть ремесленных пекарен в Лиме (5 точек)', desc: 'Сеть ремесленных пекарен из 5 точек в Лиме заменила непоследовательную мойку флотом JD-3. Экономия $48 000/год.' },
    'melbourne-patisserie': { title: 'Кейс: Кондитерская в Мельбурне — Совместимость 600×400 была решающей', desc: 'Премиальной кондитерской в Мельбурне нужна была машина под противни Convotherm 600×400. JD-3 — единственный вариант.' },
    'seoul-cafe-chain': { title: 'Кейс: Кофейная сеть Сеула стандартизирована на JD-3 (12 точек)', desc: 'Сеульская кофейная сеть из 12 точек заменила непоследовательную мойку стандартизированным развертыванием JD-3. Результат: $120 000/год.' },
  },
  th: {
    'dubai-hotel-pastry': { title: 'กรณีศึกษา: ครัวขนมหวานโรงแรมในดูไบ — น้ำกระด้าง', desc: 'ครัวขนมหวานโรงแรม 4 ดาวในดูไบใช้ JD-3 จัดการ 80–120 ถาด/วัน ประหยัด $28,000/ปี' },
    'lima-bakery-chain': { title: 'กรณีศึกษา: เครือเบเกอรี่ในลิมา (5 สาขา)', desc: 'เครือเบเกอรี่ 5 สาขาในลิมาเปลี่ยนการล้างไม่สม่ำเสมอเป็นชุด JD-3 ประหยัด $48,000/ปี' },
    'melbourne-patisserie': { title: 'กรณีศึกษา: ร้านขนมหวานเมลเบิร์น — ความเข้ากันได้ 600×400 เป็นปัจจัยตัดสิน', desc: 'ร้านขนมหวานระดับสูงในเมลเบิร์นต้องการเครื่องที่รับถาด Convotherm 600×400 JD-3 เป็นเครื่องเดียวในช่วงราคา' },
    'seoul-cafe-chain': { title: 'กรณีศึกษา: เครือคาเฟ่โซลมาตรฐาน JD-3 (12 สาขา)', desc: 'เครือคาเฟ่ 12 สาขาในโซลเปลี่ยนการล้างไม่สม่ำเสมอเป็นการใช้ JD-3 มาตรฐาน ผลลัพธ์: ประหยัด $120,000/ปี' },
  },
  vi: {
    'dubai-hotel-pastry': { title: 'Tình huống: Bếp bánh ngọt khách sạn Dubai — Nước cứng', desc: 'Bếp bánh ngọt khách sạn 4 sao tại Dubai triển khai JD-3 để xử lý 80–120 khay/ngày. Tiết kiệm $28,000/năm.' },
    'lima-bakery-chain': { title: 'Tình huống: Chuỗi tiệm bánh thủ công Lima (5 địa điểm)', desc: 'Chuỗi tiệm bánh thủ công 5 địa điểm tại Lima đã thay rửa không nhất quán bằng đội JD-3. Tiết kiệm $48,000/năm.' },
    'melbourne-patisserie': { title: 'Tình huống: Tiệm bánh Melbourne — Tương thích 600×400 là quyết định', desc: 'Tiệm bánh cao cấp Melbourne cần máy rửa vừa khay Convotherm 600×400. JD-3 là lựa chọn duy nhất.' },
    'seoul-cafe-chain': { title: 'Tình huống: Chuỗi cà phê Seoul chuẩn hóa JD-3 (12 địa điểm)', desc: 'Chuỗi cà phê 12 địa điểm tại Seoul thay rửa không nhất quán bằng triển khai JD-3 chuẩn hóa. Kết quả: tiết kiệm $120,000/năm.' },
  },
  ar: {
    'dubai-hotel-pastry': { title: 'دراسة حالة: مطبخ حلويات فندقي في دبي — مياه عسرة', desc: 'مطبخ حلويات فندقي 4 نجوم في دبي نشر JD-3 للتعامل مع 80-120 صينية/يوم. وفّر 28,000 دولار/سنة.' },
    'lima-bakery-chain': { title: 'دراسة حالة: سلسلة مخابز فنية في ليما (5 مواقع)', desc: 'سلسلة مخابز فنية من 5 مواقع في ليما استبدلت الغسيل غير المتسق بأسطول JD-3. وفّرت 48,000 دولار/سنة.' },
    'melbourne-patisserie': { title: 'دراسة حالة: حلواني ميلبورن — توافق 600×400 كان حاسماً', desc: 'حلواني راقٍ في ميلبورن احتاج غسالة تستوعب صواني Convotherm 600×400. كان JD-3 الخيار الوحيد.' },
    'seoul-cafe-chain': { title: 'دراسة حالة: سلسلة مقاهي سيول توحد على JD-3 (12 موقعاً)', desc: 'سلسلة مقاهي مقرها سيول من 12 موقعاً استبدلت الغسيل غير المتسق بنشر JD-3 موحد. النتيجة: 120,000 دولار/سنة وفّرت.' },
  },
};

for (const locale of locales) {
  for (const slug of slugs) {
    const { title, desc } = seo[locale][slug];
    const content = `---
import CaseStudyLayout from '../../../layouts/CaseStudyLayout.astro';
---
<CaseStudyLayout
  locale="${locale}"
  slug="${slug}"
  title="${title.replace(/"/g, '\\"')}"
  description="${desc.replace(/"/g, '\\"')}"
/>
`;
    const path = join(root, 'src', 'pages', locale, 'case-studies', `${slug}.astro`);
    await writeFile(path, content, 'utf8');
    console.log(`wrote ${locale}/${slug}`);
  }
}

console.log(`\nDone. Rewrote ${locales.length * slugs.length} case study pages.`);
