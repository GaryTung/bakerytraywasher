#!/usr/bin/env node
// Four global content fixes requested by the user, applied across every locale:
//   (1) "What's included in the box" — real config is a custom stainless steel
//       baking-tray support frame + inlet hose + drain hose + manual.
//       NOT 2 wash racks + peg cup rack + basic tools.
//   (2) Spare-parts language — say "global express delivery" without the
//       DHL/FedEx brand name and without the "within 5 business days" promise.
//   (3) About → sister-products card "Roll-in":
//       - Chinese name: "推入式台车清洗机"
//       - Footprint corrected: SMALLER than a typical long-line tunnel
//         dishwasher, not "larger"
//   (4) About → contact card "Office & Factory":
//       Now renders two addresses (HQ in Shenzhen + R&D plant in Zhaoqing).
//
// Each fix uses targeted string replacement so we don't accidentally touch
// unrelated copy. Run with `node scripts/global-content-fixes.mjs`.

import { readFile, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');

async function patch(rel, replacements, opts = {}) {
  const p = join(root, rel);
  let src = await readFile(p, 'utf8');
  let count = 0;
  for (const [from, to] of replacements) {
    if (typeof from === 'string') {
      if (src.includes(from)) {
        src = src.split(from).join(to);
        count++;
      } else if (opts.warnMissing) {
        console.warn(`  miss in ${rel}: "${from.slice(0, 60)}…"`);
      }
    } else { // regex
      const before = src;
      src = src.replace(from, to);
      if (before !== src) count++;
    }
  }
  await writeFile(p, src, 'utf8');
  return count;
}

let total = 0;
const log = (n, msg) => { total += n; console.log(`  +${n}  ${msg}`); };

// ============================================================
// FIX 1 — Standard configuration list
// ============================================================
// Replace "2 standard wash racks + peg cup rack + basic tools + manual + CE cert"
// (and locale variants) with:
//   "Custom stainless-steel baking-tray support frame, inlet hose, drain hose,
//    operation manual."

console.log('FIX 1 — Standard configuration list');

// English source pages
log(await patch('src/pages/product/index.astro', [
  [
    "{ q: 'What is included in the box?', a: 'JD-3 machine, 2 standard wash racks, peg cup rack, basic tools, English operation manual, CE certificate.' },",
    "{ q: 'What is included in the box?', a: 'JD-3 machine, one custom stainless-steel baking-tray support frame, water inlet hose, drain hose, English operation manual, CE certificate.' },",
  ],
]), '/product/index.astro');

log(await patch('src/pages/product/jd-3-installation.astro', [
  [
    "      <li>JD-3 machine</li>\n      <li>2 standard wash racks + peg cup rack</li>\n      <li>Cold-water inlet hose &amp; drain hose</li>\n      <li>Basic install hardware</li>\n      <li>Quick-start card with video-tutorial link</li>\n      <li>English operation manual</li>\n      <li>CE certificate</li>",
    "      <li>JD-3 machine</li>\n      <li>One custom stainless-steel baking-tray support frame</li>\n      <li>Cold-water inlet hose &amp; drain hose</li>\n      <li>Quick-start card with video-tutorial link</li>\n      <li>English operation manual</li>\n      <li>CE certificate</li>",
  ],
]), '/product/jd-3-installation.astro');

// Country layout (en branch — sidebar bullets)
log(await patch('src/layouts/CountryPriceLayout.astro', [
  // English
  ["'2 standard racks, peg cup rack, basic tools, manual'", "'One custom stainless-steel baking-tray support frame'"],
  // Spanish
  ["'2 racks estándar, rack para tazas, herramientas básicas, manual'", "'Un soporte de bandejas de panadería de acero inoxidable personalizado'"],
  // French
  ["'2 paniers standard, panier à tasses, outils de base, manuel'", "'Un support de plaques de boulangerie en acier inoxydable sur mesure'"],
  // German
  ["'2 Standardkörbe, Tassenkorb, Grundwerkzeuge, Anleitung'", "'Ein maßgefertigter Edelstahl-Backblechträger'"],
  // Russian
  ["'2 стандартные кассеты, чашечная кассета, базовый инструмент, руководство'", "'Один индивидуальный держатель противней из нержавеющей стали'"],
  // Thai
  ["'แร็คมาตรฐาน 2 ชิ้น, แร็คถ้วย, เครื่องมือพื้นฐาน, คู่มือ'", "'แร็ครองรับถาดอบทำจากสแตนเลสตามสั่ง 1 ชิ้น'"],
  // Vietnamese
  ["'2 rack tiêu chuẩn, rack cốc, dụng cụ cơ bản, hướng dẫn'", "'Một khung đỡ khay nướng inox tùy chỉnh'"],
  // Arabic
  ["'رفان قياسيان، رف فناجين، أدوات أساسية، دليل'", "'إطار دعم صواني خبز مخصص من الفولاذ المقاوم للصدأ'"],
  // Chinese
  ["'两组标准洗碗筐、杯架、基础工具、说明书'", "'一个定制的不锈钢烤盘支撑框'"],
]), 'CountryPriceLayout.astro (all 9 locales)');

// Chinese pages — product page, installation, FAQ
log(await patch('src/pages/zh/product/index.astro', [
  [
    "{ q: '随机配件有哪些？', a: 'JD-3 主机、2 个标准洗碗筐、杯架、基础工具、操作手册（中英文）、CE 证书。' },",
    "{ q: '随机配件有哪些？', a: 'JD-3 主机、一个定制不锈钢烤盘支撑框、进水管、排水管、操作手册（中英文）、CE 证书。' },",
  ],
  [
    "'两组标准洗碗筐、杯架、基础工具、说明书'",
    "'一个定制不锈钢烤盘支撑框 + 进水管 + 排水管 + 说明书'",
  ],
]), '/zh/product/index.astro');

log(await patch('src/pages/zh/product/jd-3-installation.astro', [
  // The block "2 个标准洗碗筐 + 1 个杯架" etc.
  [
    "      <li>JD-3 主机</li>\n      <li>2 个标准洗碗筐 + 1 个杯架</li>\n      <li>冷水进水管 + 排水管</li>\n      <li>基础安装配件</li>\n      <li>快速开始卡（附视频教程二维码）</li>\n      <li>中英文操作手册</li>\n      <li>CE 认证证书</li>",
    "      <li>JD-3 主机</li>\n      <li>一个定制的不锈钢烤盘支撑框（按机器尺寸定做）</li>\n      <li>冷水进水管 + 排水管</li>\n      <li>快速开始卡（附视频教程二维码）</li>\n      <li>中英文操作手册</li>\n      <li>CE 认证证书</li>",
  ],
]), '/zh/product/jd-3-installation.astro');

// FAQs
log(await patch('src/pages/faq.astro', [
  [
    "{ q: 'What is included in the box?', a: 'JD-3 machine, 2 standard wash racks, peg cup rack, basic tools, English operation manual, CE certificate.' }",
    "{ q: 'What is included in the box?', a: 'JD-3 machine, one custom stainless-steel baking-tray support frame, water inlet hose, drain hose, English operation manual, CE certificate.' }",
  ],
]), '/faq.astro');

// ============================================================
// FIX 2 — Drop DHL/FedEx brand + drop "within 5 business days" guarantee
// ============================================================
console.log('\nFIX 2 — Spare-parts language');

// EN
log(await patch('src/pages/about.astro', [
  ['We ship spare parts via DHL/FedEx within 5 business days to any country.',
   'We ship spare parts globally via international express courier to any country.'],
]), '/about.astro');

log(await patch('src/pages/faq.astro', [
  // Various phrasings
  ['DHL/FedEx', 'international express courier'],
  ['within 5 business days', ''],
]), '/faq.astro');

log(await patch('src/pages/product/jd-3-installation.astro', [
  ['DHL/FedEx', 'international express courier'],
  ['ship globally via DHL/FedEx within 5 business days', 'ship globally via international express courier'],
  ['within 5 business days', ''],
]), '/product/jd-3-installation.astro');

log(await patch('src/pages/product/jd-3-vs-hobart-amx.astro', [
  ['DHL/FedEx', 'international express courier'],
  ['within 5 business days', ''],
]), '/product/jd-3-vs-hobart-amx.astro');

log(await patch('src/pages/product/jd-3-vs-jackson-tempstar.astro', [
  ['DHL/FedEx', 'international express courier'],
  ['within 5 business days', ''],
]), '/product/jd-3-vs-jackson-tempstar.astro');

log(await patch('src/pages/by-business-type/bakery-shop.astro', [
  ['DHL/FedEx', 'international express courier'],
  ['within 5 business days', ''],
]), '/by-business-type/bakery-shop.astro');

log(await patch('src/pages/pricing/index.astro', [
  ['DHL/FedEx', 'international express courier'],
  ['within 5 business days', ''],
]), '/pricing/index.astro');

log(await patch('src/pages/shipping-payment.astro', [
  ['DHL/FedEx', 'international express courier'],
  ['within 5 business days', ''],
]), '/shipping-payment.astro');

// CountryPriceLayout has the spare-parts bullet in includesItems for every locale.
log(await patch('src/layouts/CountryPriceLayout.astro', [
  // English
  ['12-month parts warranty — global parts via DHL/FedEx',
   '12-month parts warranty — spare parts shipped globally via international express courier'],
  // Spanish
  ['Garantía 12 meses (piezas) — envío global vía DHL/FedEx',
   'Garantía 12 meses (piezas) — repuestos enviados globalmente por mensajería internacional'],
  // French
  ['Garantie 12 mois (pièces) — envoi mondial via DHL/FedEx',
   'Garantie 12 mois (pièces) — pièces expédiées mondialement par messagerie internationale'],
  // German
  ['12 Monate Ersatzteilgarantie — weltweiter Versand über DHL/FedEx',
   '12 Monate Ersatzteilgarantie — Ersatzteile weltweit per internationalem Expresskurier'],
  // Russian
  ['Гарантия 12 месяцев (запчасти) — доставка через DHL/FedEx по всему миру',
   'Гарантия 12 месяцев (запчасти) — запчасти доставляются по всему миру международным экспресс-курьером'],
  // Thai
  ['รับประกัน 12 เดือน (ชิ้นส่วน) — ส่งทั่วโลกผ่าน DHL/FedEx',
   'รับประกัน 12 เดือน (ชิ้นส่วน) — จัดส่งชิ้นส่วนทั่วโลกผ่านพัสดุด่วนระหว่างประเทศ'],
  // Vietnamese
  ['Bảo hành 12 tháng (linh kiện) — giao hàng toàn cầu qua DHL/FedEx',
   'Bảo hành 12 tháng (linh kiện) — linh kiện được gửi toàn cầu qua chuyển phát nhanh quốc tế'],
  // Arabic
  ['ضمان 12 شهراً (قطع غيار) — شحن عالمي عبر DHL/FedEx',
   'ضمان 12 شهراً (قطع غيار) — يتم شحن قطع الغيار عالمياً عبر الشحن السريع الدولي'],
  // Chinese
  ['12 个月零件保修 — DHL/FedEx 全球发货',
   '12 个月零件保修 — 零件通过国际快递全球发货'],
]), 'CountryPriceLayout.astro (all 9 locales)');

// Chinese pages
log(await patch('src/pages/zh/faq.astro', [
  ['DHL / FedEx', '国际快递'],
  ['DHL/FedEx', '国际快递'],
  ['通常 5 个工作日内送达', '可发往全球'],
  ['通常 5 个工作日内到货。', '可发往全球。'],
]), '/zh/faq.astro');

log(await patch('src/pages/zh/product/index.astro', [
  ['DHL/FedEx 全球空运', '国际快递发往全球'],
  ['DHL/FedEx', '国际快递'],
  ['通常 5 个工作日内到货。', '可发往全球。'],
  ['全球空运，通常 5 个工作日内到货。', '通过国际快递发往全球。'],
]), '/zh/product/index.astro');

log(await patch('src/pages/zh/product/jd-3-installation.astro', [
  ['全球 DHL/FedEx 空运，5 个工作日内到货', '通过国际快递发往全球'],
  ['DHL/FedEx', '国际快递'],
  ['5 个工作日内到货', '可发往全球'],
]), '/zh/product/jd-3-installation.astro');

log(await patch('src/pages/zh/blog/why-your-bakery-needs-a-tray-washer.astro', [
  ['零件全球 5 个工作日到货', '零件通过国际快递发往全球'],
]), '/zh/blog/why-your-bakery-needs-a-tray-washer.astro');

// About-content.ts — beliefs[3] about service mentions DHL/FedEx + 5 days
log(await patch('src/i18n/about-content.ts', [
  // EN beliefs
  ['We ship spare parts via DHL/FedEx within 5 business days to any country.',
   'We ship spare parts globally via international express courier to any country.'],
  // ES
  ['Enviamos repuestos vía DHL/FedEx dentro de 5 días hábiles a cualquier país.',
   'Enviamos repuestos por mensajería express internacional a cualquier país del mundo.'],
  // FR
  ["Nous expédions les pièces de rechange via DHL/FedEx en 5 jours ouvrables vers n'importe quel pays.",
   "Nous expédions les pièces de rechange par messagerie express internationale vers n'importe quel pays."],
  // DE
  ['Wir versenden Ersatzteile weltweit per DHL/FedEx innerhalb von 5 Werktagen in jedes Land.',
   'Wir versenden Ersatzteile per internationalem Expresskurier weltweit in jedes Land.'],
  // RU
  ['Запчасти отправляем DHL/FedEx в любую страну в течение 5 рабочих дней.',
   'Запасные части отправляем по всему миру международным экспресс-курьером.'],
  // TH
  ['เราจัดส่งอะไหล่ผ่าน DHL/FedEx ภายใน 5 วันทำการไปยังประเทศใดก็ได้',
   'เราจัดส่งอะไหล่ผ่านพัสดุด่วนระหว่างประเทศไปยังประเทศใดก็ได้ทั่วโลก'],
  // VI
  ['Chúng tôi gửi phụ tùng qua DHL/FedEx trong vòng 5 ngày làm việc đến bất kỳ quốc gia nào.',
   'Chúng tôi gửi phụ tùng đến mọi quốc gia trên thế giới qua chuyển phát nhanh quốc tế.'],
  // AR
  ['نشحن قطع الغيار عبر DHL/FedEx خلال 5 أيام عمل إلى أي دولة.',
   'نشحن قطع الغيار عبر الشحن السريع الدولي إلى أي دولة في العالم.'],
  // ZH (in our zh block at bottom)
  ['配件通过 DHL/FedEx 全球 5 个工作日内发货', '配件通过国际快递发往全球'],
]), 'about-content.ts (all 9 locales spare-parts language)');

// ============================================================
// FIX 3 — Roll-in card: Chinese name "推入式台车清洗机" + footprint smaller
// ============================================================
console.log('\nFIX 3 — Roll-in product card');

log(await patch('src/i18n/about-content.ts', [
  // Chinese zh block: title + body
  [
    "    { eyebrow: '工业推车式',       title: 'Roll-in 推车式洗碗机',         body: '面向批发烘焙工厂和中央厨房：整车推入式腔体，可容纳高大的烘焙推车。吞吐量更高，占地更大。<a href=\"https://rollinrackwasher.com\" class=\"underline\">rollinrackwasher.com</a> 是其专门站点。',                                  ctaLabel: 'Roll-in 推车式专站 →',     ctaHref: 'https://rollinrackwasher.com' },",
    "    { eyebrow: '工业推车式',       title: '推入式台车清洗机',             body: '面向批发烘焙工厂和中央厨房：整车推入式腔体，可容纳高大的烘焙推车。相比传统的长龙式隧道洗碗机，<strong>占地面积更小</strong>，吞吐量却更高。专门站点：<a href=\"https://rollinrackwasher.com\" class=\"underline\">rollinrackwasher.com</a>。',                                  ctaLabel: '推入式台车清洗机专站 →',     ctaHref: 'https://rollinrackwasher.com' },",
  ],
  // EN: footprint correction
  [
    "Higher throughput, larger footprint.",
    "Higher throughput, with a smaller footprint than typical long-line tunnel dishwashers.",
  ],
  // ES
  ['Mayor capacidad, mayor huella.',                                 'Mayor capacidad, con una huella más pequeña que los típicos lavavajillas tipo túnel.'],
  // FR
  ["Débit plus élevé, encombrement plus important.",                 "Débit plus élevé, avec un encombrement plus réduit que les lave-vaisselle à tunnel classiques."],
  // DE
  ['Höherer Durchsatz, größere Stellfläche.',                        'Höherer Durchsatz, mit kleinerer Stellfläche als typische Korbtransport-Spülmaschinen.'],
  // RU
  ['Большая производительность, больший размер.',                    'Большая производительность при меньших габаритах по сравнению с типичной конвейерной мойкой.'],
  // TH
  ['ปริมาณการล้างสูงกว่า พื้นที่ใหญ่กว่า',                                 'ปริมาณการล้างสูงกว่า โดยใช้พื้นที่น้อยกว่าเครื่องล้างจานแบบอุโมงค์ทั่วไป'],
  // VI
  ['Năng suất cao hơn, diện tích lớn hơn.',                          'Năng suất cao hơn, nhưng diện tích nhỏ hơn so với máy rửa kiểu hầm dài thông thường.'],
  // AR
  ['إنتاجية أعلى، مساحة أكبر.',                                      'إنتاجية أعلى، مع مساحة أصغر مقارنة بغسالات الأطباق ذات النفق الطويل التقليدية.'],
]), 'about-content.ts (Roll-in card name + footprint)');

// EN about page renders sister cards inline (not from i18n) — patch it too.
log(await patch('src/pages/about.astro', [
  ['Higher throughput, larger footprint.', 'Higher throughput, with a smaller footprint than typical long-line tunnel dishwashers.'],
]), '/about.astro (Roll-in card)');

// ============================================================
// FIX 4 — Office address: HQ in Shenzhen + R&D plant in Zhaoqing
// ============================================================
console.log('\nFIX 4 — Office address (HQ + R&D plant)');

// In AboutPageLayout (used by 8 non-EN locales) the address is hardcoded.
// Switch to a small block that lists both addresses. Each locale's
// labels ("HQ Office" / "R&D Plant") come from a per-locale dictionary
// already in the layout (a.contactOfficeTitle is the section heading).
log(await patch('src/layouts/AboutPageLayout.astro', [
  [
    '        <h3 class="text-lg mb-2">{a.contactOfficeTitle}</h3>\n        <p class="text-bakery-navy">Room 2202, Global Logistics Services Centre,<br />Longgang, Shenzhen, Guangdong, China</p>\n        <p class="text-sm text-bakery-navy/60 mt-2">{a.contactOfficeNote}</p>',
    `        <h3 class="text-lg mb-2">{a.contactOfficeTitle}</h3>
        <p class="text-bakery-navy font-semibold mt-1">{a.contactHqLabel}</p>
        <p class="text-bakery-navy text-sm">{a.contactHqAddress}</p>
        <p class="text-bakery-navy font-semibold mt-3">{a.contactPlantLabel}</p>
        <p class="text-bakery-navy text-sm">{a.contactPlantAddress}</p>
        <p class="text-sm text-bakery-navy/60 mt-3">{a.contactOfficeNote}</p>`,
  ],
]), 'AboutPageLayout.astro (split address into HQ + Plant)');

// EN about page — same fix
log(await patch('src/pages/about.astro', [
  [
    '        <h3 class="text-lg mb-2">Office &amp; Factory</h3>\n        <p class="text-bakery-navy">Room 2202, Global Logistics Services Centre,<br />Longgang, Shenzhen, Guangdong, China</p>',
    `        <h3 class="text-lg mb-2">Office &amp; Factory</h3>
        <p class="text-bakery-navy font-semibold mt-1">HQ Office</p>
        <p class="text-bakery-navy text-sm">Room 2202, 22F Global Logistics Services Centre, Pinghu South China City, Longgang District, Shenzhen, Guangdong, China</p>
        <p class="text-bakery-navy font-semibold mt-3">R&amp;D Plant</p>
        <p class="text-bakery-navy text-sm">No. 2 Deye Road, Industrial Park, Deqing County, Zhaoqing, Guangdong, China</p>`,
  ],
]), '/about.astro (split address into HQ + Plant)');

// Update Footer address to match HQ (since Footer shows on every page, use
// concise HQ address only — full HQ+plant on About page only)
const newAddresses = {
  en: 'Room 2202, 22F Global Logistics Services Centre, Pinghu South China City, Longgang District, Shenzhen, China',
  es: 'Habitación 2202, Piso 22, Global Logistics Services Centre, Pinghu South China City, Distrito Longgang, Shenzhen, China',
  fr: 'Bureau 2202, 22e étage, Global Logistics Services Centre, Pinghu South China City, District de Longgang, Shenzhen, Chine',
  de: 'Raum 2202, 22. Etage, Global Logistics Services Centre, Pinghu South China City, Bezirk Longgang, Shenzhen, China',
  ru: 'Комн. 2202, 22 этаж, Global Logistics Services Centre, Пинху Южно-Китайский Сити, район Лунган, Шэньчжэнь, Китай',
  th: 'ห้อง 2202 ชั้น 22, Global Logistics Services Centre, ผิงหู South China City, เขตหลงกัง, เซินเจิ้น, จีน',
  vi: 'Phòng 2202, Tầng 22, Global Logistics Services Centre, Pinghu South China City, Quận Long Cương, Thâm Quyến, Trung Quốc',
  ar: 'غرفة 2202، الطابق 22، Global Logistics Services Centre، بينغهو South China City، منطقة لونغانغ، شنتشن، الصين',
  zh: '广东省深圳市龙岗区平湖华南城环球物流中心22楼2202室',
};
for (const [loc, addr] of Object.entries(newAddresses)) {
  const oldRe = /"footer\.address": "[^"]+"/;
  const p = `src/i18n/${loc}.json`;
  let src = await readFile(join(root, p), 'utf8');
  const next = src.replace(oldRe, `"footer.address": "${addr.replace(/"/g, '\\"')}"`);
  if (next !== src) {
    await writeFile(join(root, p), next, 'utf8');
    log(1, `${loc}.json footer.address`);
  }
}

// About-content.ts — add the HQ/Plant fields to each locale's AboutContent.
// First extend the interface, then add fields to each locale block.
// Strategy: inject the three new keys right after `contactOfficeNote:` line
// in each locale block.
console.log('\nFIX 4b — Extending AboutContent interface + per-locale HQ/Plant strings');

const hqPlantPerLocale = {
  en: {
    contactHqLabel: 'HQ Office',
    contactHqAddress: 'Room 2202, 22F Global Logistics Services Centre, Pinghu South China City, Longgang District, Shenzhen, Guangdong, China',
    contactPlantLabel: 'R&D Plant',
    contactPlantAddress: 'No. 2 Deye Road, Industrial Park, Deqing County, Zhaoqing, Guangdong, China',
  },
  es: {
    contactHqLabel: 'Sede',
    contactHqAddress: 'Habitación 2202, Piso 22, Global Logistics Services Centre, Pinghu South China City, Distrito Longgang, Shenzhen, Guangdong, China',
    contactPlantLabel: 'Planta de I+D',
    contactPlantAddress: 'No. 2 Deye Road, Parque Industrial, Condado Deqing, Zhaoqing, Guangdong, China',
  },
  fr: {
    contactHqLabel: 'Siège',
    contactHqAddress: 'Bureau 2202, 22e étage, Global Logistics Services Centre, Pinghu South China City, District de Longgang, Shenzhen, Guangdong, Chine',
    contactPlantLabel: 'Usine R&D',
    contactPlantAddress: 'No. 2 Deye Road, Parc Industriel, Comté de Deqing, Zhaoqing, Guangdong, Chine',
  },
  de: {
    contactHqLabel: 'Hauptsitz',
    contactHqAddress: 'Raum 2202, 22. Etage, Global Logistics Services Centre, Pinghu South China City, Bezirk Longgang, Shenzhen, Guangdong, China',
    contactPlantLabel: 'F&E-Werk',
    contactPlantAddress: 'Nr. 2 Deye Road, Industriepark, Landkreis Deqing, Zhaoqing, Guangdong, China',
  },
  ru: {
    contactHqLabel: 'Главный офис',
    contactHqAddress: 'Комн. 2202, 22 этаж, Global Logistics Services Centre, Пинху Южно-Китайский Сити, район Лунган, Шэньчжэнь, провинция Гуандун, Китай',
    contactPlantLabel: 'НИОКР-завод',
    contactPlantAddress: 'Деъе-роуд, 2, Промышленный парк, уезд Дэцин, Чжаоцин, провинция Гуандун, Китай',
  },
  th: {
    contactHqLabel: 'สำนักงานใหญ่',
    contactHqAddress: 'ห้อง 2202 ชั้น 22 Global Logistics Services Centre ผิงหู South China City เขตหลงกัง เซินเจิ้น มณฑลกวางตุ้ง จีน',
    contactPlantLabel: 'โรงงานวิจัยและพัฒนา',
    contactPlantAddress: 'No. 2 Deye Road นิคมอุตสาหกรรม อำเภอเต๋อชิ่ง เมืองจ้าวชิ่ง มณฑลกวางตุ้ง จีน',
  },
  vi: {
    contactHqLabel: 'Trụ sở chính',
    contactHqAddress: 'Phòng 2202, Tầng 22, Global Logistics Services Centre, Pinghu South China City, Quận Long Cương, Thâm Quyến, Quảng Đông, Trung Quốc',
    contactPlantLabel: 'Nhà máy R&D',
    contactPlantAddress: 'Số 2 đường Đức Nghiệp, Khu công nghiệp, Huyện Đức Khánh, Triệu Khánh, Quảng Đông, Trung Quốc',
  },
  ar: {
    contactHqLabel: 'المكتب الرئيسي',
    contactHqAddress: 'غرفة 2202، الطابق 22، Global Logistics Services Centre، بينغهو South China City، منطقة لونغانغ، شنتشن، قوانغدونغ، الصين',
    contactPlantLabel: 'مصنع البحث والتطوير',
    contactPlantAddress: 'رقم 2 طريق ديي، الحديقة الصناعية، مقاطعة ديتشينغ، تشاوتشينغ، قوانغدونغ، الصين',
  },
  zh: {
    contactHqLabel: '总部办公地址',
    contactHqAddress: '广东省深圳市龙岗区平湖华南城环球物流中心22楼2202室',
    contactPlantLabel: '工厂研发地址',
    contactPlantAddress: '广东省肇庆市德庆县工业园区德业路2号',
  },
};

// 1) Add fields to AboutContent interface
log(await patch('src/i18n/about-content.ts', [
  [
    '  contactOfficeTitle: string;\n  contactOfficeNote: string;',
    '  contactOfficeTitle: string;\n  contactHqLabel: string;\n  contactHqAddress: string;\n  contactPlantLabel: string;\n  contactPlantAddress: string;\n  contactOfficeNote: string;',
  ],
]), 'about-content.ts (interface)');

// 2) For each locale, inject the four new keys before contactOfficeNote
{
  let src = await readFile(join(root, 'src/i18n/about-content.ts'), 'utf8');
  // Track all 9 locale blocks: en, es, fr, de, ru, th, vi, ar, zh
  // The pattern to match is:
  //   contactOfficeTitle: '<...>',
  //   contactOfficeNote: '<...>',
  // We insert the 4 new fields between them. But each locale has different values.
  // Instead, we'll look for `contactOfficeNote:` and prepend the 4 new fields.
  // Walk the file finding occurrences of contactOfficeNote and figure out
  // which locale block we're in by looking at the most recent `const xx: AboutContent` declaration.
  const lines = src.split('\n');
  const localeStartRe = /^const (en|es|fr|de|ru|th|vi|ar|zh): AboutContent/;
  let currentLocale = null;
  const out = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const m = line.match(localeStartRe);
    if (m) currentLocale = m[1];
    if (currentLocale && /^\s*contactOfficeNote:/.test(line)) {
      const data = hqPlantPerLocale[currentLocale];
      if (data) {
        const esc = (s) => s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
        out.push(`  contactHqLabel: '${esc(data.contactHqLabel)}',`);
        out.push(`  contactHqAddress: '${esc(data.contactHqAddress)}',`);
        out.push(`  contactPlantLabel: '${esc(data.contactPlantLabel)}',`);
        out.push(`  contactPlantAddress: '${esc(data.contactPlantAddress)}',`);
      }
    }
    out.push(line);
  }
  await writeFile(join(root, 'src/i18n/about-content.ts'), out.join('\n'), 'utf8');
  log(9, 'about-content.ts (HQ/Plant injected into all 9 locale blocks)');
}

console.log(`\n✓ Total ${total} replacement groups applied.`);
