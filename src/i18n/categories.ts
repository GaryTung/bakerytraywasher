// Translation maps for business-type slugs and what-it-washes slugs across 9 locales.
// Single source of truth used by index hubs in every locale.
import type { Locale } from './utils';

export const businessTypeNames: Record<string, Record<Locale, string>> = {
  'bakery-shop': {
    en: 'Bakery Shop', es: 'Panadería', fr: 'Boulangerie', de: 'Bäckerei',
    ru: 'Пекарня', th: 'ร้านเบเกอรี่', vi: 'Tiệm bánh', ar: 'مخبز',
    zh: '面包店',
  },
  'coffee-chain': {
    en: 'Coffee Chain', es: 'Cadena de Café', fr: 'Chaîne de Cafés', de: 'Café-Kette',
    ru: 'Сеть кофеен', th: 'เครือคาเฟ่', vi: 'Chuỗi cà phê', ar: 'سلسلة قهوة',
    zh: '咖啡连锁店',
  },
  'patisserie': {
    en: 'Patisserie', es: 'Patisserie', fr: 'Pâtisserie', de: 'Patisserie',
    ru: 'Кондитерская', th: 'ร้านขนมหวาน', vi: 'Tiệm bánh ngọt', ar: 'باتيسري',
    zh: '法式甜品店',
  },
  'cake-shop': {
    en: 'Cake Shop', es: 'Pastelería', fr: 'Pâtisserie de Gâteaux', de: 'Konditorei',
    ru: 'Магазин тортов', th: 'ร้านเค้ก', vi: 'Cửa hàng bánh kem', ar: 'محل كيك',
    zh: '蛋糕店',
  },
  'small-restaurant': {
    en: 'Small Restaurant', es: 'Restaurante Pequeño', fr: 'Petit Restaurant', de: 'Kleines Restaurant',
    ru: 'Небольшой ресторан', th: 'ร้านอาหารเล็ก', vi: 'Nhà hàng nhỏ', ar: 'مطعم صغير',
    zh: '小型餐厅',
  },
  'cafeteria': {
    en: 'Cafeteria', es: 'Comedor / Cafetería', fr: 'Cafétéria', de: 'Kantine',
    ru: 'Столовая', th: 'โรงอาหาร', vi: 'Căng tin', ar: 'كافيتيريا',
    zh: '员工食堂',
  },
  'hotel-pastry-kitchen': {
    en: 'Hotel Pastry Kitchen', es: 'Cocina de Pastelería de Hotel', fr: 'Pâtisserie d\'Hôtel', de: 'Hotel-Konditorei',
    ru: 'Кондитерская отеля', th: 'ครัวขนมโรงแรม', vi: 'Bếp bánh khách sạn', ar: 'مطبخ حلويات الفندق',
    zh: '酒店西点房',
  },
  'cloud-kitchen': {
    en: 'Cloud Kitchen', es: 'Cocina Cloud', fr: 'Cuisine Virtuelle', de: 'Cloud-Küche',
    ru: 'Облачная кухня', th: 'ครัวคลาวด์', vi: 'Bếp đám mây', ar: 'مطبخ سحابي',
    zh: '云厨房 / 中央厨房',
  },
};

export const washesNames: Record<string, Record<Locale, string>> = {
  'baking-trays-600x400': {
    en: '600×400 mm Bakery Trays', es: 'Bandejas Panadería 600×400 mm',
    fr: 'Plaques Boulangère 600×400 mm', de: 'Backbleche 600×400 mm',
    ru: 'Противни 600×400 мм', th: 'ถาดเบเกอรี่ 600×400 มม.',
    vi: 'Khay bánh 600×400 mm', ar: 'صواني المخابز 600×400 مم',
    zh: '600×400 毫米欧标烤盘',
  },
  'sheet-pans': {
    en: 'American Sheet Pans', es: 'Bandejas Americanas',
    fr: 'Plaques de Four Américaines', de: 'US-Backbleche',
    ru: 'Американские противни', th: 'ถาดอเมริกัน',
    vi: 'Khay Mỹ', ar: 'صواني أمريكية',
    zh: '美式烤盘',
  },
  'mixing-bowls': {
    en: 'Mixing Bowls', es: 'Tazones Mezcladores',
    fr: 'Bols Mélangeurs', de: 'Rührschüsseln',
    ru: 'Миксерные чаши', th: 'ชามผสม',
    vi: 'Bát trộn', ar: 'أوعية الخلط',
    zh: '搅拌桶',
  },
  'cake-pans': {
    en: 'Cake Pans', es: 'Moldes para Pastel',
    fr: 'Moules à Gâteaux', de: 'Kuchenformen',
    ru: 'Формы для тортов', th: 'พิมพ์เค้ก',
    vi: 'Khuôn bánh kem', ar: 'قوالب الكيك',
    zh: '蛋糕模具',
  },
  'pizza-pans': {
    en: 'Pizza Pans', es: 'Moldes para Pizza',
    fr: 'Moules à Pizza', de: 'Pizzableche',
    ru: 'Противни для пиццы', th: 'ถาดพิซซ่า',
    vi: 'Khay pizza', ar: 'صواني البيتزا',
    zh: '披萨盘',
  },
  'frying-baskets': {
    en: 'Frying Baskets', es: 'Canastas para Freír',
    fr: 'Paniers de Friture', de: 'Frittierkörbe',
    ru: 'Корзины для жарки', th: 'ตะกร้าทอด',
    vi: 'Giỏ chiên', ar: 'سلال القلي',
    zh: '炸篮',
  },
  'stockpots': {
    en: 'Stockpots', es: 'Ollas Grandes',
    fr: 'Marmites', de: 'Kochtöpfe',
    ru: 'Кастрюли', th: 'หม้อใหญ่',
    vi: 'Nồi lớn', ar: 'قدور كبيرة',
    zh: '汤桶 / 大型锅具',
  },
  'dishes-plates': {
    en: 'Dishes & Plates', es: 'Vajilla y Platos',
    fr: 'Assiettes et Vaisselle', de: 'Geschirr und Teller',
    ru: 'Посуда и тарелки', th: 'จานและภาชนะ',
    vi: 'Đĩa và bát', ar: 'الأطباق والصحون',
    zh: '碗碟餐具',
  },
  'utensils-mixers': {
    en: 'Utensils & Mixer Attachments', es: 'Utensilios y Accesorios de Batidora',
    fr: 'Ustensiles et Accessoires de Batteur', de: 'Werkzeuge und Mixer-Zubehör',
    ru: 'Утварь и насадки миксера', th: 'อุปกรณ์และหัวเครื่องผสม',
    vi: 'Dụng cụ và phụ kiện máy trộn', ar: 'الأدوات وملحقات الخلاط',
    zh: '小工具与搅拌机配件',
  },
  'large-bakeware': {
    en: 'Large Bakeware', es: 'Utensilios Grandes de Hornear',
    fr: 'Grandes Moules', de: 'Großes Backgeschirr',
    ru: 'Крупная форма для выпечки', th: 'อุปกรณ์อบขนาดใหญ่',
    vi: 'Dụng cụ nướng lớn', ar: 'أدوات الخبز الكبيرة',
    zh: '大型烘焙器具',
  },
};

export const businessTypeIcons: Record<string, string> = {
  'bakery-shop': '🥐',
  'coffee-chain': '☕',
  'patisserie': '🧁',
  'cake-shop': '🎂',
  'small-restaurant': '🍽️',
  'cafeteria': '🥪',
  'hotel-pastry-kitchen': '🏨',
  'cloud-kitchen': '👨‍🍳',
};

export const flagshipLabel: Record<Locale, string> = {
  en: 'Flagship', es: 'Estrella', fr: 'Phare', de: 'Flaggschiff',
  ru: 'Флагман', th: 'รุ่นเด่น', vi: 'Sản phẩm chủ lực', ar: 'النموذج الرئيسي',
  zh: '主打型号',
};

export const businessIntro: Record<Locale, string> = {
  en: 'Pick your business type to see how the JD-3 specifically fits your operation.',
  es: 'Elija su tipo de negocio para ver cómo la JD-3 se adapta específicamente a su operación.',
  fr: 'Choisissez votre type d\'activité pour voir comment le JD-3 s\'adapte spécifiquement à votre exploitation.',
  de: 'Wählen Sie Ihre Geschäftsart, um zu sehen, wie der JD-3 spezifisch zu Ihrem Betrieb passt.',
  ru: 'Выберите тип бизнеса, чтобы узнать, как JD-3 подходит именно вашей операции.',
  th: 'เลือกประเภทธุรกิจของคุณเพื่อดูว่า JD-3 เหมาะกับการดำเนินงานของคุณอย่างไร',
  vi: 'Chọn loại hình kinh doanh của bạn để xem JD-3 phù hợp với hoạt động của bạn như thế nào.',
  ar: 'اختر نوع عملك لترى كيف يتلاءم JD-3 مع عملياتك تحديداً.',
  zh: '选择您的业务类型，看看 JD-3 如何与您的实际运营场景匹配。',
};

export const washesIntro: Record<Locale, string> = {
  en: 'Every type of cookware the JD-3 cleans — bakery trays, sheet pans, mixing bowls, cake pans, and more.',
  es: 'Todos los tipos de utensilios que la JD-3 lava — bandejas, moldes, tazones y más.',
  fr: 'Tout ce que le JD-3 lave — plaques, moules, bols et plus encore.',
  de: 'Alles, was der JD-3 spült — Backbleche, Formen, Schüsseln und mehr.',
  ru: 'Всё, что моет JD-3 — противни, формы, чаши и многое другое.',
  th: 'ทุกประเภทของอุปกรณ์ที่ JD-3 ล้างได้ — ถาด, แม่พิมพ์, ชาม และอื่นๆ',
  vi: 'Mọi loại dụng cụ JD-3 có thể rửa — khay, khuôn, bát và nhiều hơn nữa.',
  ar: 'جميع أنواع الأواني التي يغسلها JD-3 — الصواني، القوالب، الأوعية وأكثر.',
  zh: 'JD-3 能清洗的所有器具 — 烤盘、托盘、搅拌桶、蛋糕模具等。',
};
