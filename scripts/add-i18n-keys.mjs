// Append new i18n keys to all 8 locale JSON files
import fs from 'node:fs';
import path from 'node:path';

const additions = {
  en: {
    'priceCallout.eyebrow': 'Starting price',
    'priceCallout.tagline': 'Equivalent CE-certified performance for a fraction of premium-brand pricing.',
    'inquiry.replyTime': 'We reply within 12 business hours via WhatsApp or email.',
    'inquiry.defaultTitle': 'Request a Quote',
    'faq.defaultTitle': 'Frequently Asked Questions',
  },
  es: {
    'priceCallout.eyebrow': 'Precio inicial',
    'priceCallout.tagline': 'Rendimiento equivalente certificado CE a una fracción del precio de marcas premium.',
    'inquiry.replyTime': 'Respondemos en 12 horas hábiles por WhatsApp o correo.',
    'inquiry.defaultTitle': 'Solicitar una Cotización',
    'faq.defaultTitle': 'Preguntas Frecuentes',
  },
  fr: {
    'priceCallout.eyebrow': 'Prix de départ',
    'priceCallout.tagline': "Performance équivalente certifiée CE à une fraction du prix des marques premium.",
    'inquiry.replyTime': 'Nous répondons sous 12 heures ouvrées via WhatsApp ou e-mail.',
    'inquiry.defaultTitle': 'Demander un Devis',
    'faq.defaultTitle': 'Questions Fréquemment Posées',
  },
  de: {
    'priceCallout.eyebrow': 'Einstiegspreis',
    'priceCallout.tagline': 'Gleichwertige CE-zertifizierte Leistung zu einem Bruchteil der Premium-Markenpreise.',
    'inquiry.replyTime': 'Wir antworten innerhalb von 12 Geschäftsstunden per WhatsApp oder E-Mail.',
    'inquiry.defaultTitle': 'Angebot Anfordern',
    'faq.defaultTitle': 'Häufig gestellte Fragen',
  },
  ru: {
    'priceCallout.eyebrow': 'Начальная цена',
    'priceCallout.tagline': 'Эквивалентная CE-сертифицированная производительность за долю цены премиум-брендов.',
    'inquiry.replyTime': 'Мы отвечаем в течение 12 рабочих часов через WhatsApp или почту.',
    'inquiry.defaultTitle': 'Запросить расчёт',
    'faq.defaultTitle': 'Часто задаваемые вопросы',
  },
  th: {
    'priceCallout.eyebrow': 'ราคาเริ่มต้น',
    'priceCallout.tagline': 'ประสิทธิภาพรับรอง CE เทียบเท่าแบรนด์พรีเมียมในราคาเศษเสี้ยว',
    'inquiry.replyTime': 'เราจะตอบกลับภายใน 12 ชั่วโมงทำการผ่าน WhatsApp หรืออีเมล',
    'inquiry.defaultTitle': 'ขอใบเสนอราคา',
    'faq.defaultTitle': 'คำถามที่พบบ่อย',
  },
  vi: {
    'priceCallout.eyebrow': 'Giá khởi điểm',
    'priceCallout.tagline': 'Hiệu năng được chứng nhận CE tương đương với giá chỉ bằng một phần các thương hiệu cao cấp.',
    'inquiry.replyTime': 'Chúng tôi phản hồi trong vòng 12 giờ làm việc qua WhatsApp hoặc email.',
    'inquiry.defaultTitle': 'Yêu cầu báo giá',
    'faq.defaultTitle': 'Câu hỏi thường gặp',
  },
  ar: {
    'priceCallout.eyebrow': 'السعر الابتدائي',
    'priceCallout.tagline': 'أداء معتمد CE معادل بجزء بسيط من أسعار العلامات التجارية الفاخرة.',
    'inquiry.replyTime': 'نرد خلال 12 ساعة عمل عبر واتساب أو البريد الإلكتروني.',
    'inquiry.defaultTitle': 'اطلب عرض سعر',
    'faq.defaultTitle': 'الأسئلة الشائعة',
  },
};

const dir = path.join(process.cwd(), 'src', 'i18n');
for (const [loc, kvs] of Object.entries(additions)) {
  const filePath = path.join(dir, `${loc}.json`);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  Object.assign(data, kvs);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
  console.log(`Updated ${loc}.json (+${Object.keys(kvs).length} keys)`);
}
console.log('Done.');
