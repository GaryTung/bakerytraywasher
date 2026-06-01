// Translation maps for vs/* comparison pages and case studies across 8 locales.
import type { Locale } from './utils';

export interface VsCard { slug: string; name: Record<Locale, string>; desc: Record<Locale, string> }

export const vsCards: VsCard[] = [
  {
    slug: 'hobart-amx',
    name: {
      en: 'vs US Category Leader',
      zh: '对比美国头部品牌',
      es: 'vs Líder de Categoría EE.UU.',
      fr: 'vs Leader Catégorie US',
      de: 'vs US-Marktführer',
      ru: 'vs Лидер рынка США',
      th: 'เทียบกับผู้นำตลาดสหรัฐ',
      vi: 'so với Lãnh đạo thị trường Mỹ',
      ar: 'مقابل قائد الفئة الأمريكي',
    },
    desc: {
      en: 'JD-3 vs the leading US hood-type bakery dishwasher. Significantly lower capex, fits 600×400 trays.',
      zh: 'JD-3 与美国领头的揭盖式烘焙洗碗机对比。资本支出明显更低，可容纳 600×400 mm 烤盘。',
      es: 'JD-3 frente a la lavadora con campana líder de EE.UU. Capex significativamente menor, acepta bandejas 600×400.',
      fr: 'JD-3 contre le lave-vaisselle à hotte leader US. Capex nettement inférieur, accepte les plaques 600×400.',
      de: 'JD-3 vs der führenden US-Haubenspülmaschine. Deutlich niedrigere Investition, nimmt 600×400-Bleche auf.',
      ru: 'JD-3 vs ведущая купольная мойка США. Значительно меньшие капвложения, принимает противни 600×400.',
      th: 'JD-3 เทียบกับเครื่องล้างจานชนิดฝาครอบชั้นนำของสหรัฐ ต้นทุนต่ำกว่ามาก รองรับถาด 600×400',
      vi: 'JD-3 so với máy rửa loại nắp vòm hàng đầu của Mỹ. Vốn đầu tư thấp hơn đáng kể, vừa khay 600×400.',
      ar: 'JD-3 مقابل غسالة الأطباق ذات الغطاء الرائدة في الولايات المتحدة. تكلفة رأسمالية أقل بكثير، تستوعب صواني 600×400.',
    },
  },
  {
    slug: 'jackson-tempstar',
    name: {
      en: 'vs US Mid-Tier', es: 'vs Gama Media EE.UU.', fr: 'vs Milieu de Gamme US',
      zh: '对比美国中端品牌',
      de: 'vs US-Mittelklasse', ru: 'vs Средний класс США',
      th: 'เทียบกับระดับกลางของสหรัฐ', vi: 'so với Phân khúc tầm trung Mỹ',
      ar: 'مقابل الفئة المتوسطة الأمريكية',
    },
    desc: {
      en: 'Lower capex, larger chamber, 600×400 tray compatibility.',
      zh: '资本支出更低、洗涤腔体更大、兼容 600×400 mm 烤盘。',
      es: 'Menor capex, cámara más grande, compatibilidad con bandejas 600×400.',
      fr: 'Capex inférieur, chambre plus grande, compatibilité plaques 600×400.',
      de: 'Niedrigere Investition, größere Kammer, 600×400-Kompatibilität.',
      ru: 'Меньшие капвложения, бо́льшая камера, совместимость с 600×400.',
      th: 'ต้นทุนต่ำกว่า ห้องล้างใหญ่กว่า รองรับถาด 600×400',
      vi: 'Vốn đầu tư thấp hơn, buồng rộng hơn, tương thích khay 600×400.',
      ar: 'تكلفة رأسمالية أقل، حجرة أكبر، متوافقة مع صواني 600×400.',
    },
  },
  {
    slug: 'cma-l-1x16-bw',
    name: {
      en: 'vs US/Italian Bakery-Spec Model', es: 'vs Modelo Estadounidense/Italiano para Panaderías',
      zh: '对比美国/意大利烘焙专用机型',
      fr: 'vs Modèle Spécifique Boulangerie US/Italien', de: 'vs US/italienisches Bäckerei-Spezialmodell',
      ru: 'vs Американо-итальянская модель для пекарен', th: 'เทียบกับรุ่นเฉพาะเบเกอรี่จากสหรัฐ/อิตาลี',
      vi: 'so với Mẫu chuyên dụng cho tiệm bánh Mỹ/Ý', ar: 'مقابل نموذج المخابز الأمريكي/الإيطالي',
    },
    desc: {
      en: '600×400 compatibility, built-in heat recovery option, lower total cost.',
      zh: '兼容 600×400 mm 烤盘、可选内置热回收模块、综合成本更低。',
      es: 'Compatibilidad 600×400, recuperación de calor integrada, menor costo total.',
      fr: 'Compatibilité 600×400, récupération de chaleur intégrée, coût total inférieur.',
      de: '600×400-Kompatibilität, integrierte Wärmerückgewinnung, niedrigere Gesamtkosten.',
      ru: 'Совместимость с 600×400, встроенная рекуперация тепла, меньшая полная стоимость.',
      th: 'รองรับ 600×400 มีระบบกู้คืนความร้อนในตัว ต้นทุนรวมต่ำกว่า',
      vi: 'Tương thích 600×400, có sẵn thu hồi nhiệt, tổng chi phí thấp hơn.',
      ar: 'متوافق مع 600×400، استرداد حراري مدمج، تكلفة إجمالية أقل.',
    },
  },
  {
    slug: 'winterhalter',
    name: {
      en: 'vs German Premium', es: 'vs Premium Alemán', fr: 'vs Premium Allemand',
      zh: '对比德国高端品牌',
      de: 'vs deutsche Premium-Marke', ru: 'vs Премиум-немецкий бренд',
      th: 'เทียบกับแบรนด์พรีเมียมเยอรมัน', vi: 'so với Cao cấp Đức',
      ar: 'مقابل العلامة التجارية الألمانية الفاخرة',
    },
    desc: {
      en: 'Significantly lower capex at equivalent CE certifications.',
      zh: '同等 CE 认证水平下，资本支出明显更低。',
      es: 'Capex significativamente menor con certificaciones CE equivalentes.',
      fr: 'Capex nettement inférieur avec certifications CE équivalentes.',
      de: 'Deutlich niedrigere Investition bei gleichwertiger CE-Zertifizierung.',
      ru: 'Значительно меньшие капвложения при эквивалентных CE-сертификатах.',
      th: 'ต้นทุนต่ำกว่ามากที่การรับรอง CE เทียบเท่า',
      vi: 'Vốn đầu tư thấp hơn đáng kể với chứng nhận CE tương đương.',
      ar: 'تكلفة رأسمالية أقل بكثير مع شهادات CE مكافئة.',
    },
  },
  {
    slug: 'manual-washing-comparison',
    name: {
      en: 'vs Manual Washing', es: 'vs Lavado Manual', fr: 'vs Lavage Manuel',
      zh: '对比人工手洗',
      de: 'vs manuelles Spülen', ru: 'vs Ручная мойка',
      th: 'เทียบกับการล้างมือ', vi: 'so với Rửa tay',
      ar: 'مقابل الغسيل اليدوي',
    },
    desc: {
      en: 'The highest-ROI comparison. 4-month payback math.',
      zh: '投资回报率最高的对比。4 个月回本的核心算式就在这里。',
      es: 'La comparación con mayor ROI. Cálculo de retorno en 4 meses.',
      fr: 'La comparaison à plus haut ROI. Retour sur investissement en 4 mois.',
      de: 'Der Vergleich mit dem höchsten ROI. 4-Monats-Amortisation.',
      ru: 'Сравнение с самой высокой окупаемостью. Окупаемость за 4 месяца.',
      th: 'การเปรียบเทียบที่มี ROI สูงที่สุด คืนทุนใน 4 เดือน',
      vi: 'So sánh có ROI cao nhất. Hoàn vốn trong 4 tháng.',
      ar: 'المقارنة الأعلى عائداً على الاستثمار. استرداد التكلفة في 4 أشهر.',
    },
  },
  {
    slug: 'undercounter-vs-hood-type',
    name: {
      en: 'Undercounter vs Hood-Type', es: 'Bajo Mostrador vs Tipo Campana',
      zh: '台下式 vs 揭盖式',
      fr: 'Sous-Comptoir vs à Hotte', de: 'Untertheken vs Hauben-Typ',
      ru: 'Подстолье vs купольный', th: 'แบบใต้เคาน์เตอร์เทียบกับฝาครอบ',
      vi: 'Dưới quầy so với Nắp vòm', ar: 'تحت الكاونتر مقابل ذات الغطاء',
    },
    desc: {
      en: 'Which architecture is right for your kitchen?',
      zh: '哪种结构更适合您的厨房？',
      es: '¿Qué arquitectura es adecuada para su cocina?',
      fr: "Quelle architecture convient à votre cuisine ?",
      de: 'Welche Bauart passt zu Ihrer Küche?',
      ru: 'Какая архитектура подходит вашей кухне?',
      th: 'สถาปัตยกรรมแบบใดที่เหมาะกับครัวคุณ?',
      vi: 'Kiến trúc nào phù hợp với bếp của bạn?',
      ar: 'أي هيكل يناسب مطبخك؟',
    },
  },
  {
    slug: 'used-bakery-equipment',
    name: {
      en: 'vs Used Equipment', es: 'vs Equipo Usado', fr: "vs Équipement d'Occasion",
      zh: '对比二手设备',
      de: 'vs gebrauchte Geräte', ru: 'vs Б/у оборудование',
      th: 'เทียบกับอุปกรณ์มือสอง', vi: 'so với Thiết bị đã qua sử dụng',
      ar: 'مقابل المعدات المستعملة',
    },
    desc: {
      en: 'Should you buy a used premium-brand washer instead?',
      zh: '与其买新机，要不要直接买一台二手的高端品牌？我们逐项分析。',
      es: '¿Debería comprar una lavadora premium usada en su lugar?',
      fr: "Devriez-vous plutôt acheter un lave-vaisselle premium d'occasion ?",
      de: 'Sollten Sie stattdessen eine gebrauchte Premium-Maschine kaufen?',
      ru: 'Стоит ли вместо этого купить подержанную премиум-мойку?',
      th: 'ควรซื้อเครื่องล้างแบรนด์พรีเมียมมือสองแทนหรือไม่?',
      vi: 'Bạn có nên mua máy rửa cao cấp đã qua sử dụng không?',
      ar: 'هل يجب شراء غسالة فاخرة مستعملة بدلاً من ذلك؟',
    },
  },
];

// Localized vs/hub intro + heading
export const vsIntro: Record<Locale, string> = {
  en: 'Honest side-by-side comparisons so you can make a confident decision. We use factual, publicly-documented specs in each comparison and avoid quoting unverified competitor prices.',
  zh: '诚实的对比，帮您做出有信心的决定。每个对比都基于公开可查的规格参数，对来源不明的竞品售价我们不会引用。',
  es: 'Comparaciones honestas lado a lado para tomar una decisión informada. Usamos especificaciones públicas y verificables, sin citar precios de competidores no verificados.',
  fr: 'Comparaisons honnêtes côte à côte pour décider en confiance. Nous utilisons des spécifications publiques et vérifiables, sans citer de prix concurrents non vérifiés.',
  de: 'Ehrliche Vergleiche, damit Sie eine fundierte Entscheidung treffen können. Wir verwenden öffentlich dokumentierte Spezifikationen und keine unbestätigten Wettbewerberpreise.',
  ru: 'Честные сравнения, чтобы вы могли уверенно принять решение. Используем публичные, проверяемые характеристики, без неподтверждённых цен конкурентов.',
  th: 'การเปรียบเทียบอย่างซื่อสัตย์เพื่อให้คุณตัดสินใจได้อย่างมั่นใจ เราใช้ข้อมูลจำเพาะที่เผยแพร่ต่อสาธารณะและตรวจสอบได้ ไม่อ้างราคาคู่แข่งที่ยังไม่ได้ตรวจสอบ',
  vi: 'So sánh trung thực để bạn quyết định tự tin. Chúng tôi sử dụng thông số công khai và có thể xác minh, không trích dẫn giá đối thủ chưa được xác minh.',
  ar: 'مقارنات صادقة جنباً إلى جنب لتتخذ قراراً واثقاً. نستخدم مواصفات موثقة علنياً ولا نقتبس أسعار منافسين غير موثقة.',
};

// "Why JD-3 wins" bullet list per locale
export const whyJd3WinsLabel: Record<Locale, string> = {
  en: 'Why JD-3 wins', es: 'Por qué gana JD-3', fr: 'Pourquoi JD-3 gagne',
  zh: 'JD-3 胜出的原因',
  de: 'Warum der JD-3 gewinnt', ru: 'Почему JD-3 выигрывает',
  th: 'ทำไม JD-3 จึงชนะ', vi: 'Vì sao JD-3 thắng', ar: 'لماذا يفوز JD-3',
};

export const whyJd3WinsItems: Record<Locale, string[]> = {
  en: [
    'Fits 600×400 mm European Bakery Norm trays',
    '180 baking trays per hour throughput',
    '6 trays per cycle, 2-minute cycle time',
    'SUS304 stainless steel + CE-certified safety',
    'Significantly lower capex at equivalent CE compliance',
    '4-week production + DDP delivery to your door',
  ],
  es: [
    'Acepta bandejas 600×400 mm de norma europea',
    '180 bandejas por hora',
    '6 bandejas por ciclo, ciclo de 2 minutos',
    'Acero inoxidable SUS304 + seguridad CE',
    'Capex significativamente menor con cumplimiento CE equivalente',
    'Producción de 4 semanas + entrega DDP a su puerta',
  ],
  fr: [
    'Accepte les plaques 600×400 mm aux normes européennes',
    '180 plaques par heure',
    '6 plaques par cycle, cycle de 2 minutes',
    'Acier inox SUS304 + sécurité certifiée CE',
    'Capex nettement inférieur avec conformité CE équivalente',
    'Production 4 semaines + livraison DDP à votre porte',
  ],
  de: [
    'Nimmt 600×400 mm EN-Norm-Backbleche auf',
    '180 Backbleche pro Stunde',
    '6 Bleche pro Zyklus, 2-Minuten-Zyklus',
    'SUS304 Edelstahl + CE-zertifizierte Sicherheit',
    'Deutlich niedrigere Investition bei gleichwertiger CE-Konformität',
    '4 Wochen Produktion + DDP-Lieferung an Ihre Tür',
  ],
  ru: [
    'Принимает противни 600×400 мм европейского стандарта',
    '180 противней в час',
    '6 противней за цикл, цикл 2 минуты',
    'Нержавеющая сталь SUS304 + безопасность CE',
    'Значительно меньшие капвложения при эквивалентном соответствии CE',
    '4 недели производства + DDP-доставка к Вашей двери',
  ],
  th: [
    'รองรับถาดมาตรฐานยุโรป 600×400 มม.',
    '180 ถาดต่อชั่วโมง',
    '6 ถาดต่อรอบ รอบละ 2 นาที',
    'สแตนเลส SUS304 + ความปลอดภัยรับรอง CE',
    'ต้นทุนต่ำกว่ามากที่การปฏิบัติตาม CE เทียบเท่า',
    'ผลิต 4 สัปดาห์ + ส่ง DDP ถึงประตูบ้าน',
  ],
  vi: [
    'Vừa khay 600×400 mm tiêu chuẩn châu Âu',
    '180 khay mỗi giờ',
    '6 khay mỗi chu kỳ, chu kỳ 2 phút',
    'Thép không gỉ SUS304 + an toàn chứng nhận CE',
    'Vốn đầu tư thấp hơn đáng kể với tuân thủ CE tương đương',
    'Sản xuất 4 tuần + giao DDP đến cửa nhà bạn',
  ],
  ar: [
    'تستوعب صواني المعيار الأوروبي 600×400 مم',
    '180 صينية في الساعة',
    '6 صواني لكل دورة، دورة لمدة دقيقتين',
    'فولاذ SUS304 + سلامة معتمدة CE',
    'تكلفة رأسمالية أقل بكثير مع امتثال CE مكافئ',
    'إنتاج 4 أسابيع + توصيل DDP إلى بابك',
  ],
  zh: [
    '兼容 600×400 mm 欧标烘焙烤盘',
    '每小时清洗 180 个烤盘',
    '每次 6 个烤盘，单次循环 2 分钟',
    'SUS304 食品级不锈钢，通过 CE 安全认证',
    '同等 CE 合规水平下，资本支出明显更低',
    '4 周生产 + DDP 直送上门',
  ],
};

// Comparison-table row labels (left column)
export const vsTableLabels: Record<string, Record<Locale, string>> = {
  rackSize: {
    en: 'Rack size', es: 'Tamaño del rack', fr: 'Taille du panier',
    zh: '洗碗筐尺寸',
    de: 'Korbgröße', ru: 'Размер кассеты',
    th: 'ขนาดแร็ค', vi: 'Kích thước rack', ar: 'حجم الرف',
  },
  fits600: {
    en: '600×400 mm trays', es: 'Bandejas 600×400 mm', fr: 'Plaques 600×400 mm',
    zh: '兼容 600×400 mm 烤盘',
    de: 'Bleche 600×400 mm', ru: 'Противни 600×400 мм',
    th: 'ถาด 600×400 มม.', vi: 'Khay 600×400 mm', ar: 'صواني 600×400 مم',
  },
  throughput: {
    en: 'Throughput', es: 'Capacidad', fr: 'Capacité',
    zh: '清洗能力',
    de: 'Durchsatz', ru: 'Производительность',
    th: 'อัตราการล้าง', vi: 'Năng suất', ar: 'الإنتاجية',
  },
  cycle: {
    en: 'Cycle time', es: 'Tiempo de ciclo', fr: 'Durée de cycle',
    zh: '单次循环时间',
    de: 'Zykluszeit', ru: 'Время цикла',
    th: 'เวลารอบ', vi: 'Thời gian chu kỳ', ar: 'وقت الدورة',
  },
  price: {
    en: 'Price', es: 'Precio', fr: 'Prix',
    zh: '价格',
    de: 'Preis', ru: 'Цена',
    th: 'ราคา', vi: 'Giá', ar: 'السعر',
  },
};

export const competitorVariesLabel: Record<Locale, string> = {
  en: 'Varies', es: 'Varía', fr: 'Variable',
  zh: '视情况而定',
  de: 'Variabel', ru: 'Зависит',
  th: 'แตกต่างกัน', vi: 'Tùy theo', ar: 'يتفاوت',
};

// Localized "ChamberSize / 500×500" cell – we don't claim a specific competitor price
export const competitorPriceLabel: Record<Locale, string> = {
  en: 'Significantly higher', es: 'Significativamente más alto',
  zh: '明显更高',
  fr: 'Nettement plus élevé', de: 'Deutlich höher',
  ru: 'Значительно выше', th: 'สูงกว่าอย่างมาก',
  vi: 'Cao hơn đáng kể', ar: 'أعلى بكثير',
};

// Case studies
export interface CaseStudyEntry {
  slug: string;
  name: Record<Locale, string>;
  location: Record<Locale, string>;
  savings: Record<Locale, string>;
}

export const caseStudies: CaseStudyEntry[] = [
  {
    slug: 'seoul-cafe-chain',
    name: {
      en: 'Seoul Café Chain (12 locations)',
      zh: '首尔咖啡连锁（12 家门店）',
      es: 'Cadena de Cafés en Seúl (12 sucursales)',
      fr: 'Chaîne de Cafés à Séoul (12 sites)',
      de: 'Café-Kette in Seoul (12 Standorte)',
      ru: 'Сеть кофеен в Сеуле (12 точек)',
      th: 'เครือคาเฟ่กรุงโซล (12 สาขา)',
      vi: 'Chuỗi cà phê Seoul (12 chi nhánh)',
      ar: 'سلسلة مقاهي سيول (12 فرعاً)',
    },
    location: {
      en: 'Seoul, South Korea',
      zh: '韩国首尔',
      es: 'Seúl, Corea del Sur',
      fr: 'Séoul, Corée du Sud',
      de: 'Seoul, Südkorea',
      ru: 'Сеул, Южная Корея',
      th: 'โซล เกาหลีใต้',
      vi: 'Seoul, Hàn Quốc',
      ar: 'سيول، كوريا الجنوبية',
    },
    savings: { en: '$120,000/yr', es: '$120,000/año', fr: '120 000 $/an',
      de: '$120.000/Jahr', ru: '$120 000/год',
      th: '$120,000/ปี', vi: '$120.000/năm', ar: '120,000 دولار/سنة' },
  },
  {
    slug: 'melbourne-patisserie',
    name: {
      en: 'Melbourne Patisserie', es: 'Patisserie de Melbourne',
      zh: '墨尔本法式甜品店',
      fr: 'Pâtisserie à Melbourne', de: 'Patisserie in Melbourne',
      ru: 'Кондитерская в Мельбурне', th: 'ร้านขนมหวานเมลเบิร์น',
      vi: 'Tiệm bánh ngọt Melbourne', ar: 'باتيسري ملبورن',
    },
    location: {
      en: 'Melbourne, Australia', es: 'Melbourne, Australia',
      zh: '澳大利亚墨尔本',
      fr: 'Melbourne, Australie', de: 'Melbourne, Australien',
      ru: 'Мельбурн, Австралия', th: 'เมลเบิร์น ออสเตรเลีย',
      vi: 'Melbourne, Úc', ar: 'ملبورن، أستراليا',
    },
    savings: { en: '$5,200/yr', es: '$5.200/año', fr: '5 200 $/an',
      de: '$5.200/Jahr', ru: '$5 200/год',
      th: '$5,200/ปี', vi: '$5.200/năm', ar: '5,200 دولار/سنة' },
  },
  {
    slug: 'dubai-hotel-pastry',
    name: {
      en: 'Dubai Hotel Pastry Kitchen', es: 'Cocina de Pastelería de Hotel en Dubái',
      zh: '迪拜酒店西点房',
      fr: 'Cuisine Pâtissière d\'Hôtel à Dubaï', de: 'Hotel-Konditorei in Dubai',
      ru: 'Кондитерская отеля в Дубае', th: 'ครัวขนมโรงแรมดูไบ',
      vi: 'Bếp bánh khách sạn Dubai', ar: 'مطبخ حلويات فندقي في دبي',
    },
    location: {
      en: 'Dubai, UAE', es: 'Dubái, EAU',
      zh: '阿联酋迪拜',
      fr: 'Dubaï, ÉAU', de: 'Dubai, VAE',
      ru: 'Дубай, ОАЭ', th: 'ดูไบ สหรัฐอาหรับเอมิเรตส์',
      vi: 'Dubai, UAE', ar: 'دبي، الإمارات',
    },
    savings: { en: '$28,000/yr', es: '$28.000/año', fr: '28 000 $/an',
      de: '$28.000/Jahr', ru: '$28 000/год',
      th: '$28,000/ปี', vi: '$28.000/năm', ar: '28,000 دولار/سنة' },
  },
  {
    slug: 'lima-bakery-chain',
    name: {
      en: 'Lima Artisan Bakery Chain (5 locations)',
      zh: '利马手工面包连锁（5 家门店）',
      es: 'Cadena de Panadería Artesanal en Lima (5 sucursales)',
      fr: 'Chaîne de Boulangerie Artisanale à Lima (5 sites)',
      de: 'Handwerkliche Bäckerei-Kette in Lima (5 Standorte)',
      ru: 'Сеть ремесленных пекарен в Лиме (5 точек)',
      th: 'เครือเบเกอรี่ทำมือเมืองลิมา (5 สาขา)',
      vi: 'Chuỗi tiệm bánh thủ công Lima (5 chi nhánh)',
      ar: 'سلسلة مخابز حرفية في ليما (5 فروع)',
    },
    location: {
      en: 'Lima, Peru', es: 'Lima, Perú',
      zh: '秘鲁利马',
      fr: 'Lima, Pérou', de: 'Lima, Peru',
      ru: 'Лима, Перу', th: 'ลิมา เปรู',
      vi: 'Lima, Peru', ar: 'ليما، بيرو',
    },
    savings: { en: '$48,000/yr', es: '$48.000/año', fr: '48 000 $/an',
      de: '$48.000/Jahr', ru: '$48 000/год',
      th: '$48,000/ปี', vi: '$48.000/năm', ar: '48,000 دولار/سنة' },
  },
];

export const annualSavingsLabel: Record<Locale, string> = {
  en: 'Annual savings', es: 'Ahorro anual', fr: 'Économies annuelles',
  zh: '每年节省',
  de: 'Jährliche Einsparung', ru: 'Годовая экономия',
  th: 'ประหยัดต่อปี', vi: 'Tiết kiệm hàng năm', ar: 'التوفير السنوي',
};

export const caseStudiesIntro: Record<Locale, string> = {
  en: 'Anonymized but concrete deployments — 4 operations, 4 geographies, same core economics.',
  zh: '匿名但真实的部署案例 — 4 家不同业务、4 个地区，背后是同一套核心算式。',
  es: 'Despliegues anonimizados pero concretos — 4 operaciones, 4 geografías, misma economía central.',
  fr: 'Déploiements anonymisés mais concrets — 4 opérations, 4 zones géographiques, même économie centrale.',
  de: 'Anonymisierte, aber konkrete Einsätze — 4 Betriebe, 4 Regionen, dieselbe Kernökonomie.',
  ru: 'Анонимизированные, но конкретные внедрения — 4 операции, 4 региона, одна и та же экономика.',
  th: 'การติดตั้งที่ปกปิดชื่อแต่เป็นรูปธรรม — 4 การดำเนินงาน 4 ภูมิภาค เศรษฐศาสตร์เดียวกัน',
  vi: 'Các triển khai ẩn danh nhưng cụ thể — 4 vận hành, 4 khu vực địa lý, cùng kinh tế cốt lõi.',
  ar: 'عمليات نشر مجهولة الهوية لكنها ملموسة — 4 عمليات، 4 مناطق جغرافية، نفس الاقتصاد الجوهري.',
};

export const caseStudiesTitle: Record<Locale, string> = {
  en: 'Case Studies', es: 'Casos de Éxito', fr: 'Études de Cas',
  zh: '客户案例',
  de: 'Fallstudien', ru: 'Кейсы',
  th: 'กรณีศึกษา', vi: 'Khách hàng tiêu biểu', ar: 'دراسات الحالة',
};

export const vsCompareTitle: Record<Locale, string> = {
  en: 'Compare the JD-3', es: 'Comparar la JD-3', fr: 'Comparer le JD-3',
  zh: '将 JD-3 与各品牌对比',
  de: 'JD-3 vergleichen', ru: 'Сравнить JD-3',
  th: 'เปรียบเทียบ JD-3', vi: 'So sánh JD-3', ar: 'قارن JD-3',
};
