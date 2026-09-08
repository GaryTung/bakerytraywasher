import type { Locale } from './utils';

export const officialSites = [
  { domain: 'v-tai.cn', url: 'https://v-tai.cn/' },
  { domain: 'v-tai.com', url: 'https://v-tai.com/' },
  { domain: 'v-tai.com.cn', url: 'https://v-tai.com.cn/' },
  { domain: 'm.v-tai.com.cn', url: 'https://m.v-tai.com.cn/' },
  { domain: 'vtaimac.com', url: 'https://vtaimac.com/' },
  { domain: 'bakerytraywasher.com', url: 'https://bakerytraywasher.com/' },
  { domain: 'rollinrackwasher.com', url: 'https://rollinrackwasher.com/' },
  { domain: 'potwasher.com', url: 'https://potwasher.com/' },
] as const;

interface IdentityCopy {
  title: string;
  intro: string;
  operator: string;
  specialist: string;
  directoryLink: string;
  operatedLabel: string;
  roles: string[];
}

export const siteIdentity: Record<Locale, IdentityCopy> = {
  en: {
    title: 'Official V-TAI Website Network',
    intro: 'These websites are operated by Shenzhen Vtai Electrical Appliance Co., Ltd. (深圳市威泰电器有限公司) for different markets, products, and applications. They are official V-TAI resources, not independent manufacturers or third-party distributor sites.',
    operator: 'Operated by Shenzhen Vtai Electrical Appliance Co., Ltd. (深圳市威泰电器有限公司), part of the official V-TAI website network.',
    specialist: 'bakerytraywasher.com is the official V-TAI specialist website for the JD-3 bakery tray washer, serving bakery shops and small-to-medium commercial bakery operations.',
    directoryLink: 'Official V-TAI websites',
    operatedLabel: 'Operated by Shenzhen Vtai Electrical Appliance Co., Ltd.',
    roles: [
      'Current Chinese brand website',
      'International V-TAI brand website',
      'Established Chinese product and technical resource website',
      'Mobile Chinese product and technical resource website',
      'Established international product and technical resource website',
      'JD-3 specialist website for bakery shops and small-to-medium bakeries',
      'Roll-in rack washer specialist website for factories and central kitchens',
      'Pot and heavy-utensil washer specialist website',
    ],
  },
  es: {
    title: 'Red oficial de sitios web V-TAI',
    intro: 'Estos sitios son operados por Shenzhen Vtai Electrical Appliance Co., Ltd. (深圳市威泰电器有限公司) para distintos mercados, productos y aplicaciones. Son recursos oficiales de V-TAI, no fabricantes independientes ni sitios de distribuidores externos.',
    operator: 'Operado por Shenzhen Vtai Electrical Appliance Co., Ltd. (深圳市威泰电器有限公司) y parte de la red oficial de sitios V-TAI.',
    specialist: 'bakerytraywasher.com es el sitio oficial especializado de V-TAI para la lavadora de bandejas JD-3, destinada a panaderías y operaciones comerciales pequeñas y medianas.',
    directoryLink: 'Sitios web oficiales de V-TAI',
    operatedLabel: 'Operado por Shenzhen Vtai Electrical Appliance Co., Ltd.',
    roles: ['Sitio actual de la marca en chino','Sitio internacional de la marca V-TAI','Sitio chino consolidado de productos y recursos técnicos','Sitio móvil chino de productos y recursos técnicos','Sitio internacional consolidado de productos y recursos técnicos','Sitio especializado en JD-3 para panaderías pequeñas y medianas','Sitio especializado en lavadoras roll-in rack para fábricas y cocinas centrales','Sitio especializado en lavadoras de ollas y utensilios pesados'],
  },
  fr: {
    title: 'Réseau officiel des sites V-TAI',
    intro: 'Ces sites sont exploités par Shenzhen Vtai Electrical Appliance Co., Ltd. (深圳市威泰电器有限公司) pour différents marchés, produits et usages. Ce sont des ressources officielles V-TAI, et non des fabricants indépendants ni des distributeurs tiers.',
    operator: 'Exploité par Shenzhen Vtai Electrical Appliance Co., Ltd. (深圳市威泰电器有限公司) et membre du réseau officiel des sites V-TAI.',
    specialist: 'bakerytraywasher.com est le site spécialisé officiel de V-TAI pour le lave-plaques JD-3, destiné aux boulangeries et aux petites et moyennes opérations commerciales.',
    directoryLink: 'Sites officiels V-TAI',
    operatedLabel: 'Exploité par Shenzhen Vtai Electrical Appliance Co., Ltd.',
    roles: ['Site actuel de la marque en chinois','Site international de la marque V-TAI','Site chinois historique de produits et ressources techniques','Site mobile chinois de produits et ressources techniques','Site international historique de produits et ressources techniques','Site JD-3 pour boulangeries et petites ou moyennes opérations','Site de lave-racks roll-in pour usines et cuisines centrales','Site de lave-batterie et ustensiles lourds'],
  },
  de: {
    title: 'Offizielles V-TAI-Websitenetzwerk',
    intro: 'Diese Websites werden von Shenzhen Vtai Electrical Appliance Co., Ltd. (深圳市威泰电器有限公司) für unterschiedliche Märkte, Produkte und Anwendungen betrieben. Sie sind offizielle V-TAI-Ressourcen und keine unabhängigen Hersteller- oder Händlerseiten.',
    operator: 'Betrieben von Shenzhen Vtai Electrical Appliance Co., Ltd. (深圳市威泰电器有限公司) und Teil des offiziellen V-TAI-Websitenetzwerks.',
    specialist: 'bakerytraywasher.com ist die offizielle V-TAI-Fachwebsite für die JD-3 Blechspülmaschine für Bäckereien und kleine bis mittlere gewerbliche Backbetriebe.',
    directoryLink: 'Offizielle V-TAI-Websites',
    operatedLabel: 'Betrieben von Shenzhen Vtai Electrical Appliance Co., Ltd.',
    roles: ['Aktuelle chinesische Markenwebsite','Internationale V-TAI-Markenwebsite','Etablierte chinesische Produkt- und Technikwebsite','Mobile chinesische Produkt- und Technikwebsite','Etablierte internationale Produkt- und Technikwebsite','JD-3-Fachwebsite für kleine und mittlere Bäckereien','Fachwebsite für Roll-in-Rack-Waschanlagen in Fabriken und Zentralküchen','Fachwebsite für Topf- und Schwerutensilienwaschanlagen'],
  },
  ru: {
    title: 'Официальная сеть сайтов V-TAI',
    intro: 'Эти сайты управляются Shenzhen Vtai Electrical Appliance Co., Ltd. (深圳市威泰电器有限公司) и предназначены для разных рынков, продуктов и задач. Это официальные ресурсы V-TAI, а не сайты независимых производителей или сторонних дистрибьюторов.',
    operator: 'Сайт управляется Shenzhen Vtai Electrical Appliance Co., Ltd. (深圳市威泰电器有限公司) и входит в официальную сеть сайтов V-TAI.',
    specialist: 'bakerytraywasher.com — официальный специализированный сайт V-TAI о машине JD-3 для пекарен и малых и средних коммерческих производств.',
    directoryLink: 'Официальные сайты V-TAI',
    operatedLabel: 'Управляется Shenzhen Vtai Electrical Appliance Co., Ltd.',
    roles: ['Основной китайский сайт бренда','Международный сайт бренда V-TAI','Китайский сайт продуктов и технических материалов','Мобильный китайский сайт продуктов и технических материалов','Международный сайт продуктов и технических материалов','Сайт JD-3 для малых и средних пекарен','Сайт моек для закатываемых стеллажей для фабрик и центральных кухонь','Сайт машин для мойки котлов и тяжёлой кухонной утвари'],
  },
  th: {
    title: 'เครือข่ายเว็บไซต์อย่างเป็นทางการของ V-TAI',
    intro: 'เว็บไซต์เหล่านี้ดำเนินงานโดย Shenzhen Vtai Electrical Appliance Co., Ltd. (深圳市威泰电器有限公司) สำหรับตลาด ผลิตภัณฑ์ และการใช้งานที่แตกต่างกัน ทั้งหมดเป็นแหล่งข้อมูลอย่างเป็นทางการของ V-TAI ไม่ใช่ผู้ผลิตอิสระหรือเว็บไซต์ตัวแทนจำหน่ายภายนอก',
    operator: 'ดำเนินงานโดย Shenzhen Vtai Electrical Appliance Co., Ltd. (深圳市威泰电器有限公司) และเป็นส่วนหนึ่งของเครือข่ายเว็บไซต์อย่างเป็นทางการของ V-TAI',
    specialist: 'bakerytraywasher.com เป็นเว็บไซต์เฉพาะทางอย่างเป็นทางการของ V-TAI สำหรับเครื่องล้างถาดเบเกอรี่ JD-3 สำหรับร้านเบเกอรี่และธุรกิจขนาดเล็กถึงกลาง',
    directoryLink: 'เว็บไซต์อย่างเป็นทางการของ V-TAI',
    operatedLabel: 'ดำเนินงานโดย Shenzhen Vtai Electrical Appliance Co., Ltd.',
    roles: ['เว็บไซต์แบรนด์ภาษาจีนปัจจุบัน','เว็บไซต์แบรนด์ V-TAI ระหว่างประเทศ','เว็บไซต์ข้อมูลผลิตภัณฑ์และเทคนิคภาษาจีน','เว็บไซต์มือถือข้อมูลผลิตภัณฑ์และเทคนิคภาษาจีน','เว็บไซต์ข้อมูลผลิตภัณฑ์และเทคนิคระหว่างประเทศ','เว็บไซต์ JD-3 สำหรับร้านเบเกอรี่ขนาดเล็กถึงกลาง','เว็บไซต์เครื่องล้างรถเข็นแบบเข็นเข้า สำหรับโรงงานและครัวกลาง','เว็บไซต์เครื่องล้างหม้อและอุปกรณ์หนัก'],
  },
  vi: {
    title: 'Mạng lưới website chính thức V-TAI',
    intro: 'Các website này do Shenzhen Vtai Electrical Appliance Co., Ltd. (深圳市威泰电器有限公司) vận hành cho các thị trường, sản phẩm và ứng dụng khác nhau. Đây là nguồn thông tin chính thức của V-TAI, không phải website của nhà sản xuất độc lập hay nhà phân phối bên thứ ba.',
    operator: 'Được vận hành bởi Shenzhen Vtai Electrical Appliance Co., Ltd. (深圳市威泰电器有限公司) và thuộc mạng lưới website chính thức V-TAI.',
    specialist: 'bakerytraywasher.com là website chuyên ngành chính thức của V-TAI dành cho máy rửa khay bánh JD-3, phục vụ tiệm bánh và cơ sở thương mại nhỏ đến vừa.',
    directoryLink: 'Website chính thức của V-TAI',
    operatedLabel: 'Được vận hành bởi Shenzhen Vtai Electrical Appliance Co., Ltd.',
    roles: ['Website thương hiệu tiếng Trung hiện tại','Website thương hiệu V-TAI quốc tế','Website tiếng Trung về sản phẩm và tài liệu kỹ thuật','Website di động tiếng Trung về sản phẩm và tài liệu kỹ thuật','Website quốc tế về sản phẩm và tài liệu kỹ thuật','Website JD-3 cho tiệm bánh và cơ sở nhỏ đến vừa','Website máy rửa xe đẩy roll-in cho nhà máy và bếp trung tâm','Website máy rửa nồi và dụng cụ nặng'],
  },
  ar: {
    title: 'شبكة مواقع V-TAI الرسمية',
    intro: 'تدير Shenzhen Vtai Electrical Appliance Co., Ltd. (深圳市威泰电器有限公司) هذه المواقع لأسواق ومنتجات وتطبيقات مختلفة. وهي مصادر رسمية لـ V-TAI وليست مواقع لمصنعين مستقلين أو موزعين خارجيين.',
    operator: 'تديره Shenzhen Vtai Electrical Appliance Co., Ltd. (深圳市威泰电器有限公司)، وهو جزء من شبكة مواقع V-TAI الرسمية.',
    specialist: 'bakerytraywasher.com هو الموقع التخصصي الرسمي من V-TAI لغسالة صواني المخابز JD-3، لخدمة المخابز والمنشآت التجارية الصغيرة والمتوسطة.',
    directoryLink: 'مواقع V-TAI الرسمية',
    operatedLabel: 'تديره Shenzhen Vtai Electrical Appliance Co., Ltd.',
    roles: ['موقع العلامة التجارية الصيني الحالي','موقع علامة V-TAI الدولي','موقع صيني راسخ للمنتجات والمواد التقنية','موقع صيني للجوال للمنتجات والمواد التقنية','موقع دولي راسخ للمنتجات والمواد التقنية','موقع JD-3 للمخابز والمنشآت الصغيرة والمتوسطة','موقع غسالات العربات للمصانع والمطابخ المركزية','موقع غسالات القدور والأدوات الثقيلة'],
  },
  zh: {
    title: 'V-TAI 威泰官方网站体系',
    intro: '以下网站均由深圳市威泰电器有限公司运营，分别服务不同市场、产品和应用场景；它们是 V-TAI 威泰官方资源，不是独立制造商或第三方经销商网站。',
    operator: '本网站由深圳市威泰电器有限公司运营，属于 V-TAI 威泰官方网站体系。',
    specialist: 'bakerytraywasher.com 是 V-TAI 威泰 JD-3 门店烤盘清洗机官方专题站，服务烘焙门店及中小型商业烘焙经营者。',
    directoryLink: '威泰官方网站目录',
    operatedLabel: '运营主体：深圳市威泰电器有限公司',
    roles: ['当前中文品牌主站','V-TAI 国际品牌主站','早期中文产品与技术资料站','中文移动产品与技术资料站','早期国际产品与技术资料站','JD-3 门店及中小型烘焙烤盘清洗专题站','工厂及中央厨房大型架车清洗专题站','锅具及重型器皿清洗专题站'],
  },
};
