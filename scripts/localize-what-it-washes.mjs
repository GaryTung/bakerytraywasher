#!/usr/bin/env node
/**
 * Regenerate every /[locale]/what-it-washes/{slug}.astro stub with
 * locale-appropriate content. Each non-EN page was previously a copy of
 * the EN stub with hard-coded English; this rewrites them using the
 * shared washesNames map + per-locale template strings.
 *
 * Covers 9 item slugs × 7 non-EN locales = 63 pages.
 * (baking-trays-600x400 has its own dedicated layout with real content,
 *  so it's skipped here.)
 */
import { writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');

const locales = ['es', 'fr', 'de', 'ru', 'th', 'vi', 'ar'];

const slugs = [
  'sheet-pans',
  'mixing-bowls',
  'cake-pans',
  'pizza-pans',
  'frying-baskets',
  'stockpots',
  'dishes-plates',
  'utensils-mixers',
  'large-bakeware',
];

// Per-locale labels from src/i18n/categories.ts (kept in sync manually for the
// generator — these match washesNames exactly).
const ITEM_NAMES = {
  'sheet-pans':       { es: 'Bandejas Americanas',          fr: 'Plaques de Four Américaines', de: 'US-Backbleche',           ru: 'Американские противни',     th: 'ถาดอเมริกัน',                 vi: 'Khay Mỹ',                              ar: 'صواني أمريكية' },
  'mixing-bowls':     { es: 'Tazones Mezcladores',          fr: 'Bols Mélangeurs',             de: 'Rührschüsseln',            ru: 'Миксерные чаши',            th: 'ชามผสม',                       vi: 'Bát trộn',                             ar: 'أوعية الخلط' },
  'cake-pans':        { es: 'Moldes para Pastel',           fr: 'Moules à Gâteaux',            de: 'Kuchenformen',             ru: 'Формы для тортов',          th: 'พิมพ์เค้ก',                     vi: 'Khuôn bánh kem',                       ar: 'قوالب الكيك' },
  'pizza-pans':       { es: 'Moldes para Pizza',            fr: 'Moules à Pizza',              de: 'Pizzableche',              ru: 'Противни для пиццы',        th: 'ถาดพิซซ่า',                     vi: 'Khay pizza',                           ar: 'صواني البيتزا' },
  'frying-baskets':   { es: 'Canastas para Freír',          fr: 'Paniers de Friture',          de: 'Frittierkörbe',            ru: 'Корзины для жарки',         th: 'ตะกร้าทอด',                    vi: 'Giỏ chiên',                            ar: 'سلال القلي' },
  'stockpots':        { es: 'Ollas Grandes',                fr: 'Marmites',                    de: 'Kochtöpfe',                ru: 'Кастрюли',                  th: 'หม้อใหญ่',                      vi: 'Nồi lớn',                              ar: 'قدور كبيرة' },
  'dishes-plates':    { es: 'Vajilla y Platos',             fr: 'Assiettes et Vaisselle',      de: 'Geschirr und Teller',      ru: 'Посуда и тарелки',          th: 'จานและภาชนะ',                  vi: 'Đĩa và bát',                           ar: 'الأطباق والصحون' },
  'utensils-mixers':  { es: 'Utensilios y Accesorios',      fr: 'Ustensiles et Accessoires',   de: 'Werkzeuge und Mixer-Zubehör', ru: 'Утварь и насадки',       th: 'อุปกรณ์และหัวเครื่องผสม',         vi: 'Dụng cụ và phụ kiện máy trộn',         ar: 'الأدوات وملحقات الخلاط' },
  'large-bakeware':   { es: 'Utensilios Grandes de Hornear', fr: 'Grandes Moules',             de: 'Großes Backgeschirr',      ru: 'Крупная форма для выпечки', th: 'อุปกรณ์อบขนาดใหญ่',              vi: 'Dụng cụ nướng lớn',                    ar: 'أدوات الخبز الكبيرة' },
};

// Per-locale templates for title/description/challenge/howItHandles/settings/FAQs.
// {item} placeholder = ITEM_NAMES[slug][locale].
const TEMPLATES = {
  es: {
    title:        'La JD-3 lava {item} | Lavadora V-TAI para Panadería',
    description:  'La V-TAI JD-3 lava {item} de forma eficaz. 180 bandejas/hora, certificación CE, desde $4.400 FOB Shenzhen.',
    challenge:    'Limpiar {item} en una panadería comercial presenta desafíos concretos: tipo de residuo (azúcar caramelizado, masa pegajosa, grasa), geometría del objeto, y densidad de carga. El lavado manual consume tiempo y rara vez logra la sanitización térmica que exige la normativa alimentaria.',
    howItHandles: 'La JD-3 utiliza dos brazos de aspersión rotatorios con geometría de boquilla optimizada, tanque de lavado a 60–65 °C y enjuague final superior a 82 °C — todo dentro de una cámara de 650×550 mm que acepta utensilios sobredimensionados. El ciclo estándar de 2 minutos procesa cargas completas sin atascos.',
    settings:     'Ciclo estándar de 2 minutos, tanque de lavado a 65 °C, enjuague final a 82 °C, detergente alcalino bajo en espuma para uso comercial. Se recomienda pre-enjuague rápido para preservar la calidad del agua recirculada.',
    faq1q:        '¿Es necesario el pre-enjuague?',
    faq1a:        'Sí — el tanque de lavado recircula agua para eficiencia energética. Un pre-enjuague rápido evita la acumulación de residuos en el tanque y prolonga la vida útil del detergente.',
    faq2q:        '¿Qué detergente recomiendan?',
    faq2a:        'Detergente alcalino comercial bajo en espuma (pH 12–13). Para residuos azucarados (pastelería) usar un detergente con tensoactivos específicos para confitería.',
    faq3q:        '¿Cuánto duran los ciclos?',
    faq3a:        '2 minutos por ciclo estándar. En horas pico con residuo ligero, puede usarse el ciclo rápido de 90 segundos.',
  },
  fr: {
    title:        'Le JD-3 lave les {item} | Lave-Vaisselle V-TAI pour Boulangerie',
    description:  'Le V-TAI JD-3 nettoie efficacement les {item}. 180 plaques/heure, certification CE, à partir de 4 400 $ FOB Shenzhen.',
    challenge:    'Le lavage des {item} en boulangerie professionnelle présente des défis concrets : type de résidu (sucre caramélisé, pâte collante, graisse), géométrie de l\'objet, et densité de chargement. Le lavage manuel consomme du temps et atteint rarement la sanitisation thermique requise par la réglementation alimentaire.',
    howItHandles: 'Le JD-3 utilise deux bras de pulvérisation rotatifs avec une géométrie de buse optimisée, un bac de lavage à 60–65 °C et un rinçage final à plus de 82 °C — le tout dans une chambre de 650×550 mm qui accepte les ustensiles surdimensionnés. Le cycle standard de 2 minutes traite des charges complètes sans blocage.',
    settings:     'Cycle standard de 2 minutes, bac de lavage à 65 °C, rinçage final à 82 °C, détergent alcalin à faible mousse pour usage commercial. Un pré-rinçage rapide est recommandé pour préserver la qualité de l\'eau recirculée.',
    faq1q:        'Le pré-rinçage est-il nécessaire ?',
    faq1a:        'Oui — le bac de lavage recircule l\'eau pour l\'efficacité énergétique. Un pré-rinçage rapide évite l\'accumulation de résidus dans le bac et prolonge la durée de vie du détergent.',
    faq2q:        'Quel détergent recommandez-vous ?',
    faq2a:        'Détergent alcalin commercial à faible mousse (pH 12–13). Pour les résidus sucrés (pâtisserie) utiliser un détergent avec des tensioactifs spécifiques à la confiserie.',
    faq3q:        'Quelle est la durée d\'un cycle ?',
    faq3a:        '2 minutes par cycle standard. Aux heures de pointe avec résidu léger, on peut utiliser le cycle rapide de 90 secondes.',
  },
  de: {
    title:        'JD-3 spült {item} | V-TAI Bäckerei-Spülmaschine',
    description:  'Die V-TAI JD-3 spült {item} effizient. 180 Bleche/Stunde, CE-zertifiziert, ab 4.400 $ FOB Shenzhen.',
    challenge:    'Das Spülen von {item} in einer professionellen Bäckerei stellt konkrete Herausforderungen: Rückstandstyp (karamellisierter Zucker, klebriger Teig, Fett), Geometrie und Beladungsdichte. Manuelle Reinigung ist zeitintensiv und erreicht selten die thermische Desinfektion, die die Lebensmittelhygieneverordnung verlangt.',
    howItHandles: 'Die JD-3 verwendet zwei rotierende Sprüharme mit optimierter Düsengeometrie, einen Spültank bei 60–65 °C und eine Endspülung bei über 82 °C — alles in einer 650×550 mm großen Kammer, die auch übergroße Geräte aufnimmt. Der Standardzyklus von 2 Minuten verarbeitet komplette Beladungen ohne Stau.',
    settings:     'Standardzyklus 2 Minuten, Spültank 65 °C, Endspülung 82 °C, schaumarmes alkalisches Spülmittel für gewerblichen Einsatz. Eine kurze Vorspülung wird empfohlen, um die Qualität des umgewälzten Wassers zu erhalten.',
    faq1q:        'Ist eine Vorspülung notwendig?',
    faq1a:        'Ja — der Spültank wälzt Wasser zur Energieeffizienz um. Eine kurze Vorspülung verhindert Rückstandsaufbau im Tank und verlängert die Standzeit des Reinigers.',
    faq2q:        'Welches Reinigungsmittel empfehlen Sie?',
    faq2a:        'Schaumarmes alkalisches Industriereiniger (pH 12–13). Für zuckerhaltige Rückstände (Konditorei) ein Mittel mit speziellen Tensiden für Süßwaren verwenden.',
    faq3q:        'Wie lange dauert ein Zyklus?',
    faq3a:        '2 Minuten pro Standardzyklus. In Stoßzeiten mit leichten Rückständen kann ein 90-Sekunden-Schnellzyklus verwendet werden.',
  },
  ru: {
    title:        'JD-3 моет {item} | Посудомоечная машина V-TAI для пекарен',
    description:  'V-TAI JD-3 эффективно моет {item}. 180 противней/час, сертификат CE, от $4 400 FOB Шэньчжэнь.',
    challenge:    'Мойка {item} в коммерческой пекарне сопряжена с конкретными трудностями: тип загрязнения (карамелизованный сахар, липкое тесто, жир), геометрия предмета и плотность загрузки. Ручная мойка занимает время и редко обеспечивает термическую дезинфекцию, требуемую санитарными нормами.',
    howItHandles: 'JD-3 использует два вращающихся моющих рычага с оптимизированной геометрией форсунок, ванну с температурой 60–65 °C и финальное ополаскивание свыше 82 °C — всё в камере 650×550 мм, принимающей крупногабаритные предметы. Стандартный цикл 2 минуты обрабатывает полную загрузку без заторов.',
    settings:     'Стандартный цикл 2 минуты, температура ванны 65 °C, финальное ополаскивание 82 °C, низкопенное щелочное моющее средство промышленного класса. Рекомендуется короткое предварительное полоскание для поддержания качества рециркулируемой воды.',
    faq1q:        'Нужно ли предварительное полоскание?',
    faq1a:        'Да — ванна рециркулирует воду для энергоэффективности. Короткое предварительное полоскание предотвращает накопление остатков в баке и продлевает срок службы моющего средства.',
    faq2q:        'Какое моющее средство рекомендуется?',
    faq2a:        'Низкопенное щелочное промышленное средство (pH 12–13). Для сахарных остатков (кондитерская) — средство со специальными ПАВ для кондитерских изделий.',
    faq3q:        'Сколько длится цикл?',
    faq3a:        '2 минуты стандартный цикл. В часы пик с лёгкими загрязнениями возможен быстрый 90-секундный цикл.',
  },
  th: {
    title:        'JD-3 ล้าง {item} | เครื่องล้างเบเกอรี่ V-TAI',
    description:  'V-TAI JD-3 ล้าง {item} อย่างมีประสิทธิภาพ 180 ถาด/ชั่วโมง รับรอง CE เริ่มต้น $4,400 FOB เซินเจิ้น',
    challenge:    'การล้าง {item} ในเบเกอรี่เชิงพาณิชย์มีความท้าทายเฉพาะ: ประเภทของคราบ (น้ำตาลคาราเมล แป้งเหนียว ไขมัน) รูปทรง และความหนาแน่นของการบรรจุ การล้างมือใช้เวลาและไม่สามารถบรรลุการฆ่าเชื้อด้วยความร้อนตามมาตรฐาน อย. ได้อย่างสม่ำเสมอ',
    howItHandles: 'JD-3 ใช้แขนพ่นน้ำหมุน 2 ชุดพร้อมการออกแบบหัวฉีดเฉพาะ ถังล้างที่อุณหภูมิ 60–65 °C และน้ำล้างสุดท้ายเกิน 82 °C — ทั้งหมดในห้อง 650×550 มม. ที่รับอุปกรณ์ขนาดใหญ่ได้ รอบมาตรฐาน 2 นาทีจัดการการโหลดเต็มได้โดยไม่ติดขัด',
    settings:     'รอบมาตรฐาน 2 นาที ถังล้าง 65 °C น้ำล้างสุดท้าย 82 °C น้ำยาทำความสะอาดด่างฟองต่ำสำหรับใช้เชิงพาณิชย์ แนะนำให้ล้างน้ำเปล่าสั้นๆ ก่อนเพื่อรักษาคุณภาพน้ำที่หมุนเวียน',
    faq1q:        'จำเป็นต้องล้างน้ำเปล่าก่อนหรือไม่?',
    faq1a:        'ใช่ — ถังล้างหมุนเวียนน้ำเพื่อประหยัดพลังงาน การล้างน้ำเปล่าสั้นๆ ก่อนป้องกันการสะสมของคราบในถังและยืดอายุการใช้งานของน้ำยา',
    faq2q:        'ใช้น้ำยาทำความสะอาดยี่ห้อใด?',
    faq2a:        'น้ำยาทำความสะอาดด่างฟองต่ำเชิงพาณิชย์ (pH 12–13) สำหรับคราบน้ำตาล (ขนมหวาน) ใช้น้ำยาที่มีสารลดแรงตึงผิวสำหรับขนม',
    faq3q:        'รอบล้างใช้เวลานานเท่าใด?',
    faq3a:        'รอบมาตรฐาน 2 นาที ในช่วงเวลาคับคั่งกับคราบเล็กน้อย ใช้รอบเร็ว 90 วินาทีได้',
  },
  vi: {
    title:        'JD-3 rửa {item} | Máy rửa khay bánh V-TAI',
    description:  'V-TAI JD-3 rửa hiệu quả {item}. 180 khay/giờ, chứng nhận CE, từ $4,400 FOB Thâm Quyến.',
    challenge:    'Rửa {item} trong tiệm bánh thương mại có những thách thức cụ thể: loại cặn (đường caramen, bột dính, dầu mỡ), hình dạng và mật độ tải. Rửa tay tốn thời gian và hiếm khi đạt được tiệt trùng nhiệt mà quy định ATTP yêu cầu.',
    howItHandles: 'JD-3 sử dụng hai cánh tay phun xoay với hình dạng vòi phun tối ưu, bồn rửa ở 60–65 °C và nước tráng cuối trên 82 °C — tất cả trong buồng 650×550 mm chấp nhận dụng cụ kích thước lớn. Chu kỳ tiêu chuẩn 2 phút xử lý tải đầy mà không bị kẹt.',
    settings:     'Chu kỳ tiêu chuẩn 2 phút, bồn rửa 65 °C, nước tráng cuối 82 °C, chất tẩy rửa kiềm ít bọt dùng cho thương mại. Khuyến nghị xả nước ngắn trước để giữ chất lượng nước tuần hoàn.',
    faq1q:        'Có cần xả trước không?',
    faq1a:        'Có — bồn rửa tuần hoàn nước để tiết kiệm năng lượng. Việc xả nước ngắn trước ngăn ngừa tích tụ cặn trong bồn và kéo dài tuổi thọ chất tẩy rửa.',
    faq2q:        'Loại chất tẩy rửa nào được khuyến nghị?',
    faq2a:        'Chất tẩy rửa kiềm ít bọt thương mại (pH 12–13). Với cặn đường (bánh ngọt) dùng chất tẩy rửa có chất hoạt động bề mặt chuyên cho bánh kẹo.',
    faq3q:        'Chu kỳ kéo dài bao lâu?',
    faq3a:        '2 phút mỗi chu kỳ tiêu chuẩn. Trong giờ cao điểm với cặn nhẹ, có thể dùng chu kỳ nhanh 90 giây.',
  },
  ar: {
    title:        'JD-3 يغسل {item} | غسالة صواني المخابز V-TAI',
    description:  'V-TAI JD-3 يغسل {item} بكفاءة. 180 صينية/ساعة، معتمد CE، يبدأ من $4,400 FOB شنتشن.',
    challenge:    'غسل {item} في مخبز تجاري ينطوي على تحديات محددة: نوع البقايا (سكر مكرمل، عجين لزج، دهون)، شكل القطعة، وكثافة التحميل. الغسل اليدوي يستغرق وقتاً وفي الغالب لا يحقق التعقيم الحراري الذي تتطلبه لوائح الغذاء.',
    howItHandles: 'يستخدم JD-3 ذراعي رش دواران بهندسة فوهات محسنة، خزان غسيل عند 60–65 °م وشطف نهائي يتجاوز 82 °م — كل ذلك داخل غرفة 650×550 مم تستوعب الأدوات كبيرة الحجم. الدورة القياسية 2 دقيقة تعالج الحمولات الكاملة دون انسداد.',
    settings:     'دورة قياسية 2 دقيقة، خزان غسيل 65 °م، شطف نهائي 82 °م، مطهر قلوي منخفض الرغوة للاستخدام التجاري. يوصى بشطف مسبق سريع للحفاظ على جودة المياه المتدفقة.',
    faq1q:        'هل الشطف المسبق ضروري؟',
    faq1a:        'نعم — يقوم خزان الغسيل بإعادة تدوير الماء لتوفير الطاقة. شطف مسبق سريع يمنع تراكم البقايا في الخزان ويطيل عمر المنظف.',
    faq2q:        'ما المنظف الموصى به؟',
    faq2a:        'منظف تجاري قلوي منخفض الرغوة (pH 12-13). للبقايا السكرية (الحلويات) يستخدم منظف بمواد فعالة بالسطح خاصة بالحلويات.',
    faq3q:        'كم تستغرق الدورة؟',
    faq3a:        'دقيقتان لكل دورة قياسية. في الأوقات المزدحمة مع بقايا خفيفة، يمكن استخدام دورة سريعة من 90 ثانية.',
  },
};

// JS string literal escape for embedding inside single-quoted JSX attribute.
const j = (s) => s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
const fillTemplate = (tpl, itemName) => tpl.replace(/\{item\}/g, itemName);

function stubFile(locale, slug, itemName) {
  const T = TEMPLATES[locale];
  const title = fillTemplate(T.title, itemName);
  const description = fillTemplate(T.description, itemName);
  const challenge = fillTemplate(T.challenge, itemName);
  const howItHandles = fillTemplate(T.howItHandles, itemName);
  const settings = fillTemplate(T.settings, itemName);
  // Build the .astro source. Use JSON.stringify for each multiline string so
  // we don't have to worry about backticks/apostrophes/newlines inside.
  return `---
import WhatItWashesLayout from '../../../layouts/WhatItWashesLayout.astro';
const locale = '${locale}' as const;
---
<WhatItWashesLayout
  locale={locale}
  canonicalPath="/what-it-washes/${slug}/"
  itemName={${JSON.stringify(itemName)}}
  title={${JSON.stringify(title)}}
  description={${JSON.stringify(description)}}
  challenge={${JSON.stringify(challenge)}}
  howItHandles={${JSON.stringify(howItHandles)}}
  recommendedSettings={${JSON.stringify(settings)}}
  faqs={[
    { q: ${JSON.stringify(T.faq1q)}, a: ${JSON.stringify(T.faq1a)} },
    { q: ${JSON.stringify(T.faq2q)}, a: ${JSON.stringify(T.faq2a)} },
    { q: ${JSON.stringify(T.faq3q)}, a: ${JSON.stringify(T.faq3a)} },
  ]}
/>
`;
}

let count = 0;
for (const locale of locales) {
  for (const slug of slugs) {
    const itemName = ITEM_NAMES[slug][locale];
    if (!itemName) {
      console.warn(`Skipping ${locale}/${slug}: no name`);
      continue;
    }
    const path = join(root, 'src', 'pages', locale, 'what-it-washes', `${slug}.astro`);
    await writeFile(path, stubFile(locale, slug, itemName), 'utf8');
    count++;
  }
}
console.log(`Wrote ${count} localized what-it-washes pages.`);
