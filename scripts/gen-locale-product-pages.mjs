#!/usr/bin/env node
// Generate full-fat product/index.astro for all 7 non-EN, non-zh locales
// (es, fr, de, ru, th, vi, ar). Mirrors the rich EN product page:
//   - Hero (image + price callout + PDF download + Get-a-Quote)
//   - "Local-language PDF on request" note under the PDF button
//   - Full specifications table (8 sections, ~50 rows)
//   - Watch It Work videos
//   - 4-step process
//   - 12 features
//   - What It Cleans thumbnails
//   - Configuration options
//   - FAQ (locale-aware)
//
// All translations are hand-written, professional, idiomatic for each market.
// The zh page is already authored bespoke; this script does NOT touch it.

import { writeFile, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');

// --------------------------------------------------------------
// Common slug list for thumbnails
// --------------------------------------------------------------
const washSlugs = [
  'baking-trays-600x400',
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
const washImg = {
  'baking-trays-600x400': '/images/600x400-tray-comparison.webp',
  'sheet-pans':            '/images/what-it-washes/sheet-pans.webp',
  'mixing-bowls':          '/images/what-it-washes/mixing-bowls.webp',
  'cake-pans':             '/images/what-it-washes/cake-pans.webp',
  'pizza-pans':            '/images/what-it-washes/pizza-pans.webp',
  'frying-baskets':        '/images/what-it-washes/frying-baskets.webp',
  'stockpots':             '/images/what-it-washes/stockpots.webp',
  'dishes-plates':         '/images/what-it-washes/dishes-plates.webp',
  'utensils-mixers':       '/images/what-it-washes/utensils-mixers.webp',
  'large-bakeware':        '/images/what-it-washes/large-bakeware.webp',
};

// --------------------------------------------------------------
// Per-locale dictionaries
// --------------------------------------------------------------
const L = {
  es: {
    metaTitle: 'V-TAI JD-3 — Lavadora con Campana para Panaderías | Producto Completo',
    metaDesc:  'Lavadora V-TAI JD-3 con campana para panaderías: 180 bandejas/hora, compatible con bandejas de 600×400 mm, SUS304, certificada CE. Desde $4.400 FOB Shenzhen. Ficha técnica PDF descargable.',
    bcHome: 'Inicio', bcProduct: 'Producto',
    eyebrow: 'Modelo VT-AE-JD-3',
    h1: 'V-TAI JD-3 — Lavadora con Campana para Panaderías',
    heroP: 'La única lavavajillas con campana de su clase de precio diseñada para el estándar europeo <strong>de bandejas de panadería de 600×400 mm</strong>. Construida para cocinas comerciales pequeñas — panaderías, cafés, pastelerías, repostería de hotel.',
    statLabels: ['Capacidad', 'Tamaño del rack', 'Tiempo de ciclo', 'Potencia total'],
    statValues: ['180 bandejas/hora', '650×550 mm ⭐', '2 min · 6 bandejas', '13 kW'],
    pdfBtn: 'Descargar Ficha Técnica (PDF)',
    pdfNote: 'PDF en inglés. ¿Necesita versión en español? <a href="/es/contact/" class="underline">Solicítela aquí</a>.',
    quoteBtn: 'Solicitar Cotización',
    specsH2: 'Especificaciones Completas',
    specsIntro: 'Todo lo que necesitan compras, ingeniería de planta y auditorías sanitarias. Descargue la <a href="/downloads/jd-3-spec-sheet-en.pdf" class="text-bakery-orange underline" download>ficha técnica en PDF</a> para revisión sin conexión.',
    specsBtn: 'Descargar Ficha Técnica Completa (PDF)',
    videoH2: 'Vea la Máquina en Acción',
    videoP: 'Dos clips cortos: cómo instalar el JD-3 en su cocina y cómo ajustar el dispensador interno.',
    video1Title: 'Guía de Instalación JD-3',
    video1Cap:  'Instalación: agua + electricidad + primer ciclo',
    video2Title: 'JD-3: cómo ajustar el dispensador',
    video2Cap:  'Ajuste: dosificación del dispensador integrado',
    howH2: 'Cómo Funciona — 4 Pasos',
    howSteps: [
      ['Cargar', 'Deslice racks con bandejas, moldes o tazones dentro de la cámara.'],
      ['Cerrar campana', 'El ciclo arranca automáticamente — sin botones.'],
      ['Lavar + enjuagar', 'Brazos duales lanzan 360°. Enjuague final a 82°C.'],
      ['Descargar', 'En 2 minutos (120 s). Limpio, sanitizado, escurriendo.'],
    ],
    featuresH2: '12 Características que Importan',
    featuresIntro: 'Cada detalle está diseñado para la cocina comercial pequeña — ni sobre-ingeniería industrial, ni compromisos de consumidor.',
    featuresBtn: 'Detalle de las 12 características',
    features: [
      ['🛡️', 'Acero Inoxidable SUS304', 'Toda la máquina es SUS304 grado alimentario — resistente a la corrosión, fácil de sanitizar, cumple FDA.'],
      ['📏', 'Cámara de Lavado Extra Grande', 'Rack de 650×550 mm acepta bandejas 600×400 mm de norma europea, ollas grandes, tazones KitchenAid.'],
      ['💧', 'Brazos Rotativos Duales + Boquillas para Bandejas', 'Lavado 360°. Geometría de boquilla optimizada para superficies planas de bandejas.'],
      ['🌡️', 'Control de Temperatura Inteligente', 'Sanitización automática a ≥82°C con pantalla LED. Placa de control modular.'],
      ['💦', 'Bajísimo Consumo de Agua', '2,0–2,5 L por ciclo, contra los 5–10 L de la mayoría de competidores.'],
      ['♻️', 'Sistema de Recuperación de Calor', 'El agua caliente del enjuague vuelve al tanque, ahorrando 15–25% de energía.'],
      ['🚪', 'Puerta Sellada Aislada', 'Reduce escape de vapor hasta 70%. Cocina más fresca y seca.'],
      ['🧑‍🍳', 'Operación Ergonómica', 'Rieles push-pull. Cerrar la puerta arranca el ciclo — sin botones.'],
      ['🔒', 'Múltiples Protecciones de Seguridad', 'Interbloqueo de puerta, protección contra sobrecarga de voltaje.'],
      ['🧪', 'Listo para Dispensador Automático', 'Interfaces pre-instaladas para dispensador y módulos de tratamiento de agua.'],
      ['⚡', 'Certificada CE Safety', 'Cumplimiento UE. Lista para enviar a UE, GCC, APAC, LATAM, África.'],
      ['⏱️', 'Inicio Automático al Cerrar Puerta', 'Cierre la campana y el ciclo arranca solo. Sin botones, sin espera.'],
    ],
    whatH2: 'Qué Limpia',
    whatIntro: 'Haga clic en cualquier categoría para ver patrones de carga, ajustes recomendados y FAQ específicas.',
    whatLabels: {
      'baking-trays-600x400': 'Bandejas Panadería 600×400 mm',
      'sheet-pans': 'Bandejas Americanas',
      'mixing-bowls': 'Tazones Mezcladores',
      'cake-pans': 'Moldes para Pastel',
      'pizza-pans': 'Moldes para Pizza',
      'frying-baskets': 'Canastas para Freír',
      'stockpots': 'Ollas Grandes',
      'dishes-plates': 'Vajilla y Platos',
      'utensils-mixers': 'Utensilios y Accesorios',
      'large-bakeware': 'Utensilios Grandes de Hornear',
    },
    cfgH2: 'Opciones de Configuración',
    cfgItems: [
      ['Eléctrico Estándar',                  '$4.400', 'JD-3 base, 380V/3N/50Hz'],
      ['+ Dispensador Automático',            '$4.600', 'Bombas de detergente y abrillantador'],
      ['+ Recuperación de Calor',             '$4.900', 'Paquete de ahorro energético reforzado'],
    ],
    cfgFromLabel: 'Desde',
    cfgFooter: 'Todos los precios FOB Shenzhen. Envío y aranceles dependen del destino — vea <a href="/es/pricing/by-country/" class="underline">precios DDP por país</a>.',
    faqs: [
      ['¿Qué viene incluido en la caja?', 'Máquina JD-3, un soporte de bandejas de panadería de acero inoxidable hecho a medida, manguera de entrada de agua, manguera de desagüe, manual de operación, certificado CE.'],
      ['¿Pueden enviar a México / Chile / Colombia?', 'Sí. Publicamos precios DDP en la moneda local. Vea <a href="/es/pricing/by-country/" class="underline">precios por país</a>.'],
      ['¿Garantía?', 'Garantía de 12 meses de fabricante en piezas. Repuestos por mensajería express internacional a cualquier país.'],
      ['¿Repuestos en 5 años?', 'Todos los componentes clave — bombas, resistencias, placas de control — en stock de fábrica.'],
      ['¿Puedo descargar la ficha técnica en PDF?', 'Sí. Use el botón "Descargar Ficha Técnica (PDF)" en la parte superior. El PDF está en inglés; si necesita versión en español, <a href="/es/contact/" class="underline">contáctenos</a>.'],
    ],
    faqTitle: 'Preguntas Frecuentes',
  },

  fr: {
    metaTitle: 'V-TAI JD-3 — Lave-vaisselle à hotte pour boulangerie | Page Produit',
    metaDesc:  'V-TAI JD-3 lave-vaisselle à hotte pour boulangerie : 180 plaques/heure, compatible avec plaques 600×400 mm, SUS304, certifié CE. À partir de 4 400 $ FOB Shenzhen. Fiche technique PDF téléchargeable.',
    bcHome: 'Accueil', bcProduct: 'Produit',
    eyebrow: 'Modèle VT-AE-JD-3',
    h1: 'V-TAI JD-3 — Lave-vaisselle à hotte pour boulangerie',
    heroP: "Le seul lave-vaisselle à hotte de sa gamme de prix conçu pour le standard européen <strong>des plaques de boulangerie de 600×400 mm</strong>. Conçu pour les petites cuisines commerciales — boulangeries, cafés, pâtisseries, pâtisseries d'hôtel.",
    statLabels: ['Capacité', 'Taille du panier', 'Temps de cycle', 'Puissance totale'],
    statValues: ['180 plaques/heure', '650×550 mm ⭐', '2 min · 6 plaques', '13 kW'],
    pdfBtn: 'Télécharger la fiche technique (PDF)',
    pdfNote: 'PDF en anglais. Besoin de la version française ? <a href="/fr/contact/" class="underline">Demandez-la ici</a>.',
    quoteBtn: 'Demander un devis',
    specsH2: 'Spécifications complètes',
    specsIntro: "Tout ce dont les achats, l'ingénierie d'installation et les audits sanitaires ont besoin. Téléchargez la <a href=\"/downloads/jd-3-spec-sheet-en.pdf\" class=\"text-bakery-orange underline\" download>fiche technique PDF</a> pour examen hors ligne.",
    specsBtn: 'Télécharger la fiche technique complète (PDF)',
    videoH2: 'Voir la machine en action',
    videoP: "Deux courtes vidéos : comment installer le JD-3 dans votre cuisine et comment régler le distributeur intégré.",
    video1Title: "Guide d'installation JD-3",
    video1Cap:  'Installation : eau + électricité + premier cycle',
    video2Title: 'JD-3 : régler le distributeur intégré',
    video2Cap:  'Réglage : dosage du distributeur intégré',
    howH2: 'Fonctionnement — 4 étapes',
    howSteps: [
      ['Charger', 'Glissez les paniers de plaques, moules ou bols dans la chambre.'],
      ['Fermer la hotte', 'Le cycle démarre automatiquement — sans boutons.'],
      ['Laver + rincer', 'Deux bras pulvérisent à 360°. Rinçage final à 82°C.'],
      ['Décharger', 'En 2 minutes (120 s). Propre, désinfecté, séché par égouttement.'],
    ],
    featuresH2: "12 Caractéristiques qui comptent",
    featuresIntro: "Chaque détail est conçu pour la petite cuisine commerciale — ni surdimensionné industriellement, ni un compromis grand public.",
    featuresBtn: 'Détails des 12 caractéristiques',
    features: [
      ['🛡️', 'Inox SUS304',                              'Toute la machine en SUS304 qualité alimentaire — résistante à la corrosion, facile à désinfecter, conforme FDA.'],
      ['📏', 'Chambre de lavage extra-large',           'Panier 650×550 mm accueille les plaques 600×400 mm aux normes européennes, marmites, bols KitchenAid.'],
      ['💧', 'Deux bras rotatifs + buses adaptées',     'Lavage 360°. Géométrie des buses optimisée pour les surfaces plates des plaques.'],
      ['🌡️', 'Contrôle de température intelligent',     'Désinfection automatique ≥82°C avec affichage LED. Carte modulaire facile à entretenir.'],
      ['💦', "Très faible consommation d'eau",          "2,0–2,5 L par cycle, contre 5–10 L pour la plupart des concurrents."],
      ['♻️', 'Système de récupération de chaleur',      "L'eau chaude du rinçage retourne au bac de lavage, économie d'énergie 15–25%."],
      ['🚪', 'Porte isolée étanche',                    "Réduit jusqu'à 70% l'évacuation de vapeur. Cuisine plus fraîche et sèche."],
      ['🧑‍🍳', 'Opération ergonomique',                 'Rails push-pull. Fermer la porte démarre le cycle — sans bouton.'],
      ['🔒', 'Protections multiples',                   'Verrouillage de porte, protection contre les surcharges de tension.'],
      ['🧪', 'Prêt pour distributeur automatique',      'Interfaces pré-installées pour distributeur et modules de traitement.'],
      ['⚡', 'Certifié CE Safety',                      'Conformité UE. Prêt à expédier vers UE, CCG, APAC, Amérique latine, Afrique.'],
      ['⏱️', 'Démarrage automatique à la fermeture',    "Fermez la hotte et le cycle démarre seul. Aucun bouton, pas d'attente."],
    ],
    whatH2: 'Ce que le JD-3 lave',
    whatIntro: 'Cliquez sur une catégorie pour voir les modèles de chargement, les réglages recommandés et les FAQ spécifiques.',
    whatLabels: {
      'baking-trays-600x400': 'Plaques Boulangère 600×400 mm',
      'sheet-pans': 'Plaques de four américaines',
      'mixing-bowls': 'Bols mélangeurs',
      'cake-pans': 'Moules à gâteaux',
      'pizza-pans': 'Moules à pizza',
      'frying-baskets': 'Paniers de friture',
      'stockpots': 'Marmites',
      'dishes-plates': 'Assiettes et vaisselle',
      'utensils-mixers': 'Ustensiles et accessoires',
      'large-bakeware': 'Grands moules',
    },
    cfgH2: 'Options de configuration',
    cfgItems: [
      ['Électrique standard',                '4 400 $', 'JD-3 base, 380V/3N/50Hz'],
      ['+ Distributeur automatique',         '4 600 $', 'Pompes de détergent et liquide de rinçage'],
      ['+ Récupération de chaleur',          '4 900 $', "Pack d'économie d'énergie renforcé"],
    ],
    cfgFromLabel: 'À partir de',
    cfgFooter: 'Tous les prix FOB Shenzhen. Le fret et les droits dépendent de la destination — voir <a href="/fr/pricing/by-country/" class="underline">prix DDP par pays</a>.',
    faqs: [
      ['Que contient la boîte ?', "Machine JD-3, un support à plaques de boulangerie en inox sur mesure, tuyau d'entrée d'eau, tuyau de vidange, manuel d'utilisation, certificat CE."],
      ['Pouvez-vous expédier en France / Belgique / Suisse ?', 'Oui. Nous publions les prix DDP en monnaie locale. Voir <a href="/fr/pricing/by-country/" class="underline">prix par pays</a>.'],
      ['Garantie ?', 'Garantie fabricant 12 mois sur les pièces. Pièces de rechange par messagerie express internationale.'],
      ['Pièces dans 5 ans ?', 'Tous les composants clés — pompes, résistances, cartes électroniques — en stock à l\'usine.'],
      ['Puis-je télécharger la fiche technique PDF ?', 'Oui. Utilisez le bouton "Télécharger la fiche technique (PDF)" en haut. PDF en anglais ; pour une version française, <a href="/fr/contact/" class="underline">contactez-nous</a>.'],
    ],
    faqTitle: 'Questions fréquentes',
  },

  de: {
    metaTitle: 'V-TAI JD-3 — Bäckerei-Haubenspülmaschine | Komplette Produktseite',
    metaDesc:  'V-TAI JD-3 Bäckerei-Haubenspülmaschine: 180 Bleche/Stunde, kompatibel mit 600×400 mm Blechen, SUS304, CE-zertifiziert. Ab 4.400 $ FOB Shenzhen. Datenblatt PDF zum Download.',
    bcHome: 'Startseite', bcProduct: 'Produkt',
    eyebrow: 'Modell VT-AE-JD-3',
    h1: 'V-TAI JD-3 — Bäckerei-Haubenspülmaschine',
    heroP: 'Die einzige Haubenspülmaschine in ihrer Preisklasse, die für den europäischen Standard <strong>600×400 mm Bäckerei-Bleche</strong> ausgelegt ist. Gebaut für kleine gewerbliche Küchen — Bäckereien, Cafés, Patisserien, Hotel-Konditoreien.',
    statLabels: ['Durchsatz', 'Korbgröße', 'Zykluszeit', 'Gesamtleistung'],
    statValues: ['180 Bleche/Stunde', '650×550 mm ⭐', '2 Min · 6 Bleche', '13 kW'],
    pdfBtn: 'Datenblatt herunterladen (PDF)',
    pdfNote: 'PDF auf Englisch. Deutsche Version benötigt? <a href="/de/contact/" class="underline">Hier anfordern</a>.',
    quoteBtn: 'Angebot anfordern',
    specsH2: 'Vollständige Spezifikationen',
    specsIntro: 'Alles, was Einkauf, Anlagenplanung und Hygieneaudits brauchen. <a href="/downloads/jd-3-spec-sheet-en.pdf" class="text-bakery-orange underline" download>Datenblatt als PDF</a> für Offline-Prüfung herunterladen.',
    specsBtn: 'Vollständiges Datenblatt herunterladen (PDF)',
    videoH2: 'Die Maschine in Aktion',
    videoP: 'Zwei kurze Clips: Installation in Ihrer Küche und Justierung des integrierten Dosierers.',
    video1Title: 'JD-3 Installationsanleitung',
    video1Cap:  'Installation: Wasser + Strom + erster Zyklus',
    video2Title: 'JD-3: integrierten Dosierer einstellen',
    video2Cap:  'Einstellung: Dosierung des integrierten Dispensers',
    howH2: 'So funktioniert es — 4 Schritte',
    howSteps: [
      ['Beladen', 'Körbe mit Blechen, Formen oder Schüsseln in die Kammer schieben.'],
      ['Haube schließen', 'Zyklus startet automatisch — keine Tasten.'],
      ['Spülen + Klarspülen', 'Zwei Sprüharme 360°. Endspülung bei 82°C.'],
      ['Entnehmen', 'In 2 Minuten (120 s). Sauber, desinfiziert, tropft ab.'],
    ],
    featuresH2: '12 Funktionen, die zählen',
    featuresIntro: 'Jedes Detail ist für die kleine gewerbliche Küche entwickelt — weder industrieller Overkill noch Verbraucher-Kompromiss.',
    featuresBtn: 'Details zu allen 12 Funktionen',
    features: [
      ['🛡️', 'SUS304 Edelstahl',                       'Gesamte Maschine aus SUS304 Lebensmittel-Edelstahl — korrosionsbeständig, leicht zu desinfizieren, FDA-konform.'],
      ['📏', 'Extra große Spülkammer',                 '650×550 mm Korb nimmt 600×400 mm EN-Norm-Bleche, Kochtöpfe, KitchenAid-Schüsseln auf.'],
      ['💧', 'Zwei rotierende Sprüharme + Spezialdüsen','360°-Reinigung. Düsengeometrie optimiert für flache Blechoberflächen.'],
      ['🌡️', 'Intelligente Temperaturregelung',        'Automatische Desinfektion bei ≥82°C mit LED-Anzeige. Modulares Steuerboard.'],
      ['💦', 'Sehr geringer Wasserverbrauch',          '2,0–2,5 L pro Zyklus gegenüber 5–10 L bei den meisten Wettbewerbern.'],
      ['♻️', 'Wärmerückgewinnungssystem',              'Heißwasser aus dem Klarspülen fließt zurück in den Spültank, 15–25% Energieersparnis.'],
      ['🚪', 'Versiegelte isolierte Haube',            'Reduziert Dampfaustritt um bis zu 70%. Küche bleibt kühler und trockener.'],
      ['🧑‍🍳', 'Ergonomische Bedienung',               'Push-Pull-Schienen. Haube schließen — Zyklus startet, keine Taste.'],
      ['🔒', 'Mehrfache Sicherheitsvorrichtungen',     'Türverriegelung, Spannungsüberlastschutz.'],
      ['🧪', 'Bereit für Auto-Dosierer',               'Vorinstallierte Anschlüsse für Dosierer und Wasseraufbereitungsmodule.'],
      ['⚡', 'CE-Sicherheitszertifiziert',             'EU-Konformität. Versandbereit in EU, GCC, APAC, LATAM, Afrika.'],
      ['⏱️', 'Türaktivierter Zyklusstart',             'Haube schließen — Zyklus läuft. Keine Tasten, keine Wartezeit.'],
    ],
    whatH2: 'Was es spült',
    whatIntro: 'Klicken Sie auf eine Kategorie, um Beladungsmuster, empfohlene Einstellungen und spezifische FAQ zu sehen.',
    whatLabels: {
      'baking-trays-600x400': 'Backbleche 600×400 mm',
      'sheet-pans': 'US-Backbleche',
      'mixing-bowls': 'Rührschüsseln',
      'cake-pans': 'Kuchenformen',
      'pizza-pans': 'Pizzableche',
      'frying-baskets': 'Frittierkörbe',
      'stockpots': 'Kochtöpfe',
      'dishes-plates': 'Geschirr und Teller',
      'utensils-mixers': 'Werkzeuge & Mixer-Zubehör',
      'large-bakeware': 'Großes Backgeschirr',
    },
    cfgH2: 'Konfigurationsoptionen',
    cfgItems: [
      ['Standard Elektrisch',                  '4.400 $',  'JD-3 Basis, 380V/3N/50Hz'],
      ['+ Auto-Dosierer',                      '4.600 $',  'Reinigungsmittel- und Klarspülerpumpen'],
      ['+ Wärmerückgewinnungs-Upgrade',        '4.900 $',  'Verstärktes Energiesparpaket'],
    ],
    cfgFromLabel: 'Ab',
    cfgFooter: 'Alle Preise FOB Shenzhen. Versand und Zölle hängen vom Zielland ab — siehe <a href="/de/pricing/by-country/" class="underline">DDP-Preise nach Land</a>.',
    faqs: [
      ['Was ist im Lieferumfang?', 'JD-3 Maschine, ein maßgefertigter Edelstahl-Backblechträger, Wassereinlaufschlauch, Ablaufschlauch, Bedienungsanleitung, CE-Zertifikat.'],
      ['Versand nach Deutschland / Österreich / Schweiz möglich?', 'Ja. Wir veröffentlichen DDP-Preise in Landeswährung. Siehe <a href="/de/pricing/by-country/" class="underline">Preise nach Land</a>.'],
      ['Garantie?', '12-monatige Herstellergarantie auf Teile. Ersatzteile per internationalem Expresskurier weltweit.'],
      ['Ersatzteile in 5 Jahren?', 'Alle Hauptkomponenten — Pumpen, Heizelemente, Steuerplatinen — werkseitig auf Lager.'],
      ['Kann ich das Datenblatt als PDF herunterladen?', 'Ja. Verwenden Sie die Schaltfläche "Datenblatt herunterladen (PDF)" oben. Das PDF ist auf Englisch; eine deutsche Version <a href="/de/contact/" class="underline">erhalten Sie auf Anfrage</a>.'],
    ],
    faqTitle: 'Häufig gestellte Fragen',
  },

  ru: {
    metaTitle: 'V-TAI JD-3 — Купольная посудомоечная машина для пекарен | Полная страница продукта',
    metaDesc:  'V-TAI JD-3 купольная мойка для пекарен: 180 противней/час, совместима с противнями 600×400 мм, SUS304, CE. От 4 400 $ FOB Шэньчжэнь. Загрузка PDF-спецификации.',
    bcHome: 'Главная', bcProduct: 'Продукт',
    eyebrow: 'Модель VT-AE-JD-3',
    h1: 'V-TAI JD-3 — Купольная посудомоечная машина для пекарен',
    heroP: 'Единственная купольная мойка в своей ценовой категории, разработанная под европейский стандарт <strong>противней 600×400 мм</strong>. Создана для небольших коммерческих кухонь — пекарен, кафе, кондитерских, отельных кондитерских.',
    statLabels: ['Производительность', 'Размер корзины', 'Время цикла', 'Полная мощность'],
    statValues: ['180 противней/час', '650×550 мм ⭐', '2 мин · 6 противней', '13 кВт'],
    pdfBtn: 'Скачать спецификацию (PDF)',
    pdfNote: 'PDF на английском. Нужна русская версия? <a href="/ru/contact/" class="underline">Запросите здесь</a>.',
    quoteBtn: 'Запросить КП',
    specsH2: 'Полная спецификация',
    specsIntro: 'Все, что нужно отделу закупок, инженерам и санитарному аудиту. Скачайте <a href="/downloads/jd-3-spec-sheet-en.pdf" class="text-bakery-orange underline" download>PDF-спецификацию</a> для офлайн-просмотра.',
    specsBtn: 'Скачать полную спецификацию (PDF)',
    videoH2: 'Машина в действии',
    videoP: 'Два коротких видео: установка JD-3 на вашей кухне и настройка встроенного дозатора.',
    video1Title: 'Инструкция по установке JD-3',
    video1Cap:  'Установка: вода + электричество + первый цикл',
    video2Title: 'JD-3: настройка дозатора',
    video2Cap:  'Настройка: дозировка встроенного дозатора',
    howH2: 'Как это работает — 4 шага',
    howSteps: [
      ['Загрузить', 'Задвиньте корзины с противнями, формами или чашами в камеру.'],
      ['Закрыть купол', 'Цикл запускается автоматически — без кнопок.'],
      ['Мойка + ополаскивание', 'Два вращающихся рычага 360°. Финальное ополаскивание 82°C.'],
      ['Достать', 'Через 2 минуты (120 с). Чисто, дезинфицировано, стекает.'],
    ],
    featuresH2: '12 важных функций',
    featuresIntro: 'Каждая деталь продумана для небольшой коммерческой кухни — не индустриальный перебор, не потребительский компромисс.',
    featuresBtn: 'Подробнее о 12 функциях',
    features: [
      ['🛡️', 'Нержавеющая сталь SUS304',          'Вся машина из пищевой SUS304 — антикоррозийная, легко дезинфицируется, соответствует FDA.'],
      ['📏', 'Очень большая камера',              'Корзина 650×550 мм принимает противни 600×400 мм, большие кастрюли, чаши KitchenAid.'],
      ['💧', 'Два вращающихся рычага + спецсопла', '360° очистка. Геометрия сопел оптимизирована для плоских поверхностей противней.'],
      ['🌡️', 'Умное управление температурой',     'Автоматическая дезинфекция ≥82°C с LED-дисплеем. Модульная плата управления.'],
      ['💦', 'Сверхнизкий расход воды',           '2,0–2,5 л за цикл против 5–10 л у большинства конкурентов.'],
      ['♻️', 'Система рекуперации тепла',         'Горячая вода ополаскивания возвращается в моечный бак, экономия 15–25%.'],
      ['🚪', 'Изолированный купол с уплотнением', 'Снижает выход пара до 70%. Кухня остается прохладной и сухой.'],
      ['🧑‍🍳', 'Эргономичная работа',             'Push-pull направляющие. Закрыли купол — цикл пошел, без кнопок.'],
      ['🔒', 'Многоуровневая защита',             'Блокировка двери, защита от перенапряжения.'],
      ['🧪', 'Готов к авто-дозатору',             'Предустановленные интерфейсы для дозатора и модулей водоподготовки.'],
      ['⚡', 'CE Safety сертификат',              'Соответствие ЕС. Готов к отправке в ЕС, GCC, APAC, Латинскую Америку, Африку.'],
      ['⏱️', 'Автостарт при закрытии',            'Закройте купол — цикл начнется автоматически. Без кнопок, без ожидания.'],
    ],
    whatH2: 'Что моет',
    whatIntro: 'Кликните на категорию, чтобы увидеть схемы загрузки, рекомендуемые настройки и специфические FAQ.',
    whatLabels: {
      'baking-trays-600x400': 'Противни 600×400 мм',
      'sheet-pans': 'Американские противни',
      'mixing-bowls': 'Миксерные чаши',
      'cake-pans': 'Формы для тортов',
      'pizza-pans': 'Противни для пиццы',
      'frying-baskets': 'Корзины для жарки',
      'stockpots': 'Кастрюли',
      'dishes-plates': 'Посуда и тарелки',
      'utensils-mixers': 'Утварь и насадки',
      'large-bakeware': 'Крупная форма',
    },
    cfgH2: 'Варианты конфигурации',
    cfgItems: [
      ['Стандартный электрический',         '4 400 $', 'Базовый JD-3, 380V/3N/50Hz'],
      ['+ Авто-дозатор',                    '4 600 $', 'Насосы моющего средства и ополаскивателя'],
      ['+ Рекуперация тепла',               '4 900 $', 'Усиленный энергосберегающий пакет'],
    ],
    cfgFromLabel: 'От',
    cfgFooter: 'Все цены FOB Шэньчжэнь. Доставка и пошлины зависят от страны — см. <a href="/ru/pricing/by-country/" class="underline">DDP-цены по странам</a>.',
    faqs: [
      ['Что входит в комплект?', 'JD-3, кастомный держатель противней из нержавеющей стали, шланг подачи воды, шланг слива, руководство, сертификат CE.'],
      ['Доставка в Россию / Казахстан / Беларусь?', 'Да. Публикуем DDP-цены в местной валюте. См. <a href="/ru/pricing/by-country/" class="underline">цены по странам</a>.'],
      ['Гарантия?', 'Заводская гарантия 12 месяцев на запчасти. Запчасти отправляются международным экспресс-курьером.'],
      ['Запчасти через 5 лет?', 'Все ключевые компоненты — насосы, ТЭНы, платы — на заводском складе.'],
      ['Можно скачать PDF-спецификацию?', 'Да. Используйте кнопку «Скачать спецификацию (PDF)» вверху. PDF на английском; для русской версии <a href="/ru/contact/" class="underline">свяжитесь с нами</a>.'],
    ],
    faqTitle: 'Часто задаваемые вопросы',
  },

  th: {
    metaTitle: 'V-TAI JD-3 — เครื่องล้างถาดเบเกอรี่แบบกระโจม | หน้าผลิตภัณฑ์เต็ม',
    metaDesc:  'V-TAI JD-3 เครื่องล้างถาดเบเกอรี่แบบกระโจม: 180 ถาด/ชั่วโมง รองรับถาด 600×400 mm SUS304 รับรอง CE เริ่ม $4,400 FOB เซินเจิ้น ดาวน์โหลด PDF สเปค',
    bcHome: 'หน้าแรก', bcProduct: 'ผลิตภัณฑ์',
    eyebrow: 'รุ่น VT-AE-JD-3',
    h1: 'V-TAI JD-3 — เครื่องล้างถาดเบเกอรี่แบบกระโจม',
    heroP: 'เครื่องล้างจานแบบกระโจมเดียวในช่วงราคานี้ที่ออกแบบสำหรับมาตรฐานยุโรป <strong>ถาด 600×400 มม.</strong> สร้างเพื่อครัวเชิงพาณิชย์ขนาดเล็ก — ร้านเบเกอรี่ คาเฟ่ ร้านขนมหวาน ครัวขนมโรงแรม',
    statLabels: ['อัตราการล้าง', 'ขนาดแร็ค', 'เวลารอบ', 'กำลังรวม'],
    statValues: ['180 ถาด/ชั่วโมง', '650×550 มม. ⭐', '2 นาที · 6 ถาด', '13 kW'],
    pdfBtn: 'ดาวน์โหลดสเปค (PDF)',
    pdfNote: 'PDF ภาษาอังกฤษ ต้องการเวอร์ชันภาษาไทย? <a href="/th/contact/" class="underline">แจ้งขอที่นี่</a>',
    quoteBtn: 'ขอใบเสนอราคา',
    specsH2: 'สเปคเต็ม',
    specsIntro: 'ทุกอย่างที่ฝ่ายจัดซื้อ วิศวกรครัว และผู้ตรวจสอบสุขอนามัยต้องการ ดาวน์โหลด <a href="/downloads/jd-3-spec-sheet-en.pdf" class="text-bakery-orange underline" download>สเปค PDF</a> สำหรับตรวจสอบออฟไลน์',
    specsBtn: 'ดาวน์โหลดสเปคเต็ม (PDF)',
    videoH2: 'ดูเครื่องทำงาน',
    videoP: 'คลิปสั้นสองตอน: การติดตั้ง JD-3 ในครัวของคุณ และการปรับเครื่องจ่ายในตัว',
    video1Title: 'คู่มือติดตั้ง JD-3',
    video1Cap:  'ติดตั้ง: น้ำ + ไฟฟ้า + รอบแรก',
    video2Title: 'JD-3: ปรับเครื่องจ่ายในตัว',
    video2Cap:  'ปรับ: ปริมาณการจ่ายของเครื่องจ่ายในตัว',
    howH2: 'การทำงาน — 4 ขั้นตอน',
    howSteps: [
      ['โหลด', 'เลื่อนแร็คที่มีถาด แม่พิมพ์ หรือชามเข้าห้องล้าง'],
      ['ปิดกระโจม', 'รอบเริ่มอัตโนมัติ — ไม่ต้องกดปุ่ม'],
      ['ล้าง + ฉีด', 'แขนคู่ฉีด 360° ฉีดสุดท้ายที่ 82°C'],
      ['นำออก', 'ใน 2 นาที (120 วินาที) สะอาด ฆ่าเชื้อ สะเด็ดน้ำ'],
    ],
    featuresH2: '12 คุณสมบัติที่สำคัญ',
    featuresIntro: 'ทุกรายละเอียดถูกออกแบบสำหรับครัวเชิงพาณิชย์ขนาดเล็ก — ไม่ใช่อุตสาหกรรมเกินไป ไม่ใช่ของบ้านที่ประนีประนอม',
    featuresBtn: 'อ่านรายละเอียด 12 คุณสมบัติ',
    features: [
      ['🛡️', 'สแตนเลส SUS304',                'ทั้งเครื่อง SUS304 เกรดอาหาร — กันสนิม ฆ่าเชื้อง่าย ผ่าน FDA'],
      ['📏', 'ห้องล้างใหญ่พิเศษ',              'แร็ค 650×550 มม. รับถาด 600×400 มม. หม้อใหญ่ ชาม KitchenAid'],
      ['💧', 'แขนหมุนคู่ + หัวฉีดเฉพาะถาด',   'ล้าง 360° เรขาคณิตหัวฉีดออกแบบสำหรับผิวเรียบของถาด'],
      ['🌡️', 'ควบคุมอุณหภูมิอัจฉริยะ',         'ฆ่าเชื้ออัตโนมัติที่ ≥82°C พร้อมหน้าจอ LED แผงควบคุมแบบโมดูล'],
      ['💦', 'ใช้น้ำต่ำมาก',                   '2.0–2.5 ลิตร/รอบ เทียบกับ 5–10 ลิตรของคู่แข่งส่วนใหญ่'],
      ['♻️', 'ระบบกู้คืนความร้อน',             'น้ำร้อนจากการฉีดกลับเข้าถังล้าง ประหยัด 15–25%'],
      ['🚪', 'ประตูฉนวนปิดสนิท',               'ลดไอน้ำออก 70% ครัวเย็นและแห้งกว่า'],
      ['🧑‍🍳', 'ใช้งานสะดวก',                   'รางผลัก-ดึง ปิดประตูรอบเริ่มเอง ไม่ต้องกดปุ่ม'],
      ['🔒', 'ระบบป้องกันหลายชั้น',             'ล็อคประตู ป้องกันไฟฟ้าเกิน'],
      ['🧪', 'พร้อมเครื่องจ่ายอัตโนมัติ',      'ติดตั้งอินเทอร์เฟซเครื่องจ่ายและโมดูลปรับสภาพน้ำไว้ก่อน'],
      ['⚡', 'ผ่าน CE Safety',                  'ตามข้อกำหนด EU ส่งไป EU, GCC, APAC, LATAM, แอฟริกาได้'],
      ['⏱️', 'ปิดประตูเริ่มอัตโนมัติ',          'ปิดกระโจม รอบเริ่มเอง ไม่มีปุ่ม ไม่ต้องรอ'],
    ],
    whatH2: 'ล้างอะไรได้บ้าง',
    whatIntro: 'คลิกหมวดใดก็ได้เพื่อดูรูปแบบการบรรจุ การตั้งค่าที่แนะนำ และ FAQ เฉพาะ',
    whatLabels: {
      'baking-trays-600x400': 'ถาดเบเกอรี่ 600×400 มม.',
      'sheet-pans': 'ถาดอเมริกัน',
      'mixing-bowls': 'ชามผสม',
      'cake-pans': 'พิมพ์เค้ก',
      'pizza-pans': 'ถาดพิซซ่า',
      'frying-baskets': 'ตะกร้าทอด',
      'stockpots': 'หม้อใหญ่',
      'dishes-plates': 'จานและภาชนะ',
      'utensils-mixers': 'อุปกรณ์และหัวเครื่องผสม',
      'large-bakeware': 'อุปกรณ์อบขนาดใหญ่',
    },
    cfgH2: 'ตัวเลือกการกำหนดค่า',
    cfgItems: [
      ['ไฟฟ้ามาตรฐาน',                   '$4,400', 'JD-3 พื้นฐาน 380V/3N/50Hz'],
      ['+ เครื่องจ่ายอัตโนมัติ',         '$4,600', 'ปั๊มน้ำยาทำความสะอาดและน้ำยาเคลือบ'],
      ['+ อัปเกรดกู้คืนความร้อน',        '$4,900', 'แพ็คเกจประหยัดพลังงานเสริม'],
    ],
    cfgFromLabel: 'เริ่ม',
    cfgFooter: 'ราคา FOB เซินเจิ้น ค่าขนส่งและอากรขึ้นกับปลายทาง — ดู <a href="/th/pricing/by-country/" class="underline">ราคา DDP ตามประเทศ</a>',
    faqs: [
      ['ในกล่องมีอะไร?', 'เครื่อง JD-3, แร็ครองรับถาดอบทำจากสแตนเลสตามสั่ง 1 ชิ้น, ท่อน้ำเข้า, ท่อระบายน้ำ, คู่มือ, ใบรับรอง CE'],
      ['ส่งไปประเทศไทยได้ไหม?', 'ได้ เราเผยแพร่ราคา DDP เป็นสกุลเงินท้องถิ่น ดู <a href="/th/pricing/by-country/" class="underline">ราคาตามประเทศ</a>'],
      ['การรับประกัน?', 'รับประกันชิ้นส่วน 12 เดือน อะไหล่จัดส่งผ่านพัสดุด่วนระหว่างประเทศ'],
      ['อะไหล่ใน 5 ปี?', 'ส่วนประกอบหลัก — ปั๊ม, ฮีตเตอร์, แผงควบคุม — มีสต็อกที่โรงงาน'],
      ['ดาวน์โหลด PDF สเปคได้ไหม?', 'ได้ ใช้ปุ่ม "ดาวน์โหลดสเปค (PDF)" ด้านบน PDF เป็นภาษาอังกฤษ ต้องการเวอร์ชันไทย <a href="/th/contact/" class="underline">ติดต่อเรา</a>'],
    ],
    faqTitle: 'คำถามที่พบบ่อย',
  },

  vi: {
    metaTitle: 'V-TAI JD-3 — Máy rửa khay bánh kiểu nắp vòm | Trang sản phẩm đầy đủ',
    metaDesc:  'V-TAI JD-3 máy rửa khay bánh kiểu nắp vòm: 180 khay/giờ, tương thích khay 600×400 mm, SUS304, chứng nhận CE. Từ $4,400 FOB Thâm Quyến. Tải PDF thông số kỹ thuật.',
    bcHome: 'Trang chủ', bcProduct: 'Sản phẩm',
    eyebrow: 'Mẫu VT-AE-JD-3',
    h1: 'V-TAI JD-3 — Máy rửa khay bánh kiểu nắp vòm',
    heroP: 'Máy rửa kiểu nắp vòm duy nhất trong tầm giá này được thiết kế cho tiêu chuẩn châu Âu <strong>khay 600×400 mm</strong>. Dành cho bếp thương mại nhỏ — tiệm bánh, quán cà phê, tiệm bánh ngọt, bếp bánh khách sạn.',
    statLabels: ['Năng suất', 'Kích thước rack', 'Thời gian chu kỳ', 'Công suất tổng'],
    statValues: ['180 khay/giờ', '650×550 mm ⭐', '2 phút · 6 khay', '13 kW'],
    pdfBtn: 'Tải thông số kỹ thuật (PDF)',
    pdfNote: 'PDF tiếng Anh. Cần bản tiếng Việt? <a href="/vi/contact/" class="underline">Yêu cầu tại đây</a>.',
    quoteBtn: 'Yêu cầu báo giá',
    specsH2: 'Thông số kỹ thuật đầy đủ',
    specsIntro: 'Tất cả những gì mua sắm, kỹ thuật bếp và kiểm tra vệ sinh cần. Tải <a href="/downloads/jd-3-spec-sheet-en.pdf" class="text-bakery-orange underline" download>PDF thông số</a> để xem ngoại tuyến.',
    specsBtn: 'Tải thông số kỹ thuật đầy đủ (PDF)',
    videoH2: 'Xem máy hoạt động',
    videoP: 'Hai video ngắn: cài đặt JD-3 trong bếp của bạn và cách điều chỉnh bộ phân phối tích hợp.',
    video1Title: 'Hướng dẫn cài đặt JD-3',
    video1Cap:  'Cài đặt: nước + điện + chu kỳ đầu',
    video2Title: 'JD-3: điều chỉnh bộ phân phối',
    video2Cap:  'Điều chỉnh: liều bộ phân phối tích hợp',
    howH2: 'Cách vận hành — 4 bước',
    howSteps: [
      ['Nạp', 'Đẩy rack khay, khuôn hoặc bát vào buồng.'],
      ['Đóng nắp', 'Chu kỳ tự động bắt đầu — không cần nút.'],
      ['Rửa + tráng', 'Hai cánh tay phun 360°. Tráng cuối ở 82°C.'],
      ['Lấy ra', 'Sau 2 phút (120 giây). Sạch, tiệt trùng, ráo nước.'],
    ],
    featuresH2: '12 tính năng quan trọng',
    featuresIntro: 'Mỗi chi tiết được thiết kế cho bếp thương mại nhỏ — không phải công nghiệp dư thừa, cũng không phải gia dụng thỏa hiệp.',
    featuresBtn: 'Chi tiết 12 tính năng',
    features: [
      ['🛡️', 'Thép không gỉ SUS304',           'Toàn máy bằng SUS304 thực phẩm — chống ăn mòn, dễ tiệt trùng, đạt FDA.'],
      ['📏', 'Buồng rửa cực lớn',              'Rack 650×550 mm vừa khay 600×400 mm, nồi lớn, bát KitchenAid.'],
      ['💧', 'Hai cánh tay xoay + vòi chuyên dụng', 'Rửa 360°. Hình dạng vòi tối ưu cho bề mặt phẳng của khay.'],
      ['🌡️', 'Điều khiển nhiệt độ thông minh', 'Tiệt trùng tự động ≥82°C với màn hình LED. Bo mạch điều khiển dạng mô-đun.'],
      ['💦', 'Tiêu thụ nước siêu thấp',        '2,0–2,5 L mỗi chu kỳ so với 5–10 L của hầu hết đối thủ.'],
      ['♻️', 'Hệ thống thu hồi nhiệt',         'Nước nóng từ tráng cuối quay lại bồn rửa, tiết kiệm 15–25% năng lượng.'],
      ['🚪', 'Nắp cách nhiệt kín',             'Giảm hơi thoát ra tới 70%. Bếp mát và khô hơn.'],
      ['🧑‍🍳', 'Vận hành công thái học',       'Ray đẩy-kéo. Đóng nắp chu kỳ tự khởi động — không nút.'],
      ['🔒', 'Bảo vệ nhiều lớp',               'Khóa cửa, bảo vệ quá tải điện áp.'],
      ['🧪', 'Sẵn sàng cho bộ phân phối tự động', 'Giao diện cài sẵn cho bộ phân phối và mô-đun xử lý nước.'],
      ['⚡', 'Chứng nhận CE Safety',           'Tuân thủ EU. Sẵn sàng xuất khẩu sang EU, GCC, APAC, LATAM, châu Phi.'],
      ['⏱️', 'Tự động khởi động khi đóng nắp', 'Đóng nắp chu kỳ chạy. Không nút, không chờ.'],
    ],
    whatH2: 'Rửa được những gì',
    whatIntro: 'Bấm bất kỳ danh mục nào để xem cách xếp, cài đặt khuyến nghị và FAQ riêng.',
    whatLabels: {
      'baking-trays-600x400': 'Khay bánh 600×400 mm',
      'sheet-pans': 'Khay Mỹ',
      'mixing-bowls': 'Bát trộn',
      'cake-pans': 'Khuôn bánh kem',
      'pizza-pans': 'Khay pizza',
      'frying-baskets': 'Giỏ chiên',
      'stockpots': 'Nồi lớn',
      'dishes-plates': 'Đĩa và bát',
      'utensils-mixers': 'Dụng cụ và phụ kiện',
      'large-bakeware': 'Dụng cụ nướng lớn',
    },
    cfgH2: 'Tùy chọn cấu hình',
    cfgItems: [
      ['Điện chuẩn',                    '$4,400', 'JD-3 cơ bản, 380V/3N/50Hz'],
      ['+ Bộ phân phối tự động',        '$4,600', 'Bơm chất tẩy rửa và chất trợ xả'],
      ['+ Nâng cấp thu hồi nhiệt',      '$4,900', 'Gói tiết kiệm năng lượng nâng cao'],
    ],
    cfgFromLabel: 'Từ',
    cfgFooter: 'Tất cả giá FOB Thâm Quyến. Vận chuyển và thuế phụ thuộc điểm đến — xem <a href="/vi/pricing/by-country/" class="underline">giá DDP theo quốc gia</a>.',
    faqs: [
      ['Trong hộp có gì?', 'Máy JD-3, một khung đỡ khay nướng inox tùy chỉnh, ống cấp nước, ống xả, hướng dẫn, chứng nhận CE.'],
      ['Có thể gửi đến Việt Nam?', 'Có. Chúng tôi công bố giá DDP bằng tiền địa phương. Xem <a href="/vi/pricing/by-country/" class="underline">giá theo quốc gia</a>.'],
      ['Bảo hành?', 'Bảo hành nhà sản xuất 12 tháng cho linh kiện. Phụ tùng gửi qua chuyển phát nhanh quốc tế.'],
      ['Phụ tùng sau 5 năm?', 'Tất cả linh kiện chính — bơm, điện trở, bo mạch — sẵn có tại nhà máy.'],
      ['Tải PDF thông số được không?', 'Được. Dùng nút "Tải thông số kỹ thuật (PDF)" ở trên. PDF tiếng Anh; bản tiếng Việt <a href="/vi/contact/" class="underline">liên hệ chúng tôi</a>.'],
    ],
    faqTitle: 'Câu hỏi thường gặp',
  },

  ar: {
    metaTitle: 'V-TAI JD-3 — غسالة صواني المخابز ذات الغطاء | صفحة المنتج الكاملة',
    metaDesc:  'V-TAI JD-3 غسالة صواني المخابز ذات الغطاء: 180 صينية/ساعة، متوافقة مع صواني 600×400 مم، SUS304، معتمدة CE. من $4,400 FOB شنتشن. تحميل PDF لورقة المواصفات.',
    bcHome: 'الرئيسية', bcProduct: 'المنتج',
    eyebrow: 'الموديل VT-AE-JD-3',
    h1: 'V-TAI JD-3 — غسالة صواني المخابز ذات الغطاء',
    heroP: 'الغسالة ذات الغطاء الوحيدة في فئتها السعرية المصممة للمعيار الأوروبي <strong>صواني 600×400 مم</strong>. مبنية للمطابخ التجارية الصغيرة — مخابز، مقاهي، باتيسري، مطابخ حلويات الفنادق.',
    statLabels: ['الإنتاجية', 'حجم الرف', 'وقت الدورة', 'إجمالي الطاقة'],
    statValues: ['180 صينية/ساعة', '650×550 مم ⭐', 'دقيقتان · 6 صواني', '13 كيلو واط'],
    pdfBtn: 'تحميل ورقة المواصفات (PDF)',
    pdfNote: 'PDF بالإنجليزية. تحتاج النسخة العربية؟ <a href="/ar/contact/" class="underline">اطلبها هنا</a>.',
    quoteBtn: 'طلب عرض سعر',
    specsH2: 'المواصفات الكاملة',
    specsIntro: 'كل ما يحتاجه المشتريات والهندسة وتدقيق الصحة. حمّل <a href="/downloads/jd-3-spec-sheet-en.pdf" class="text-bakery-orange underline" download>ورقة المواصفات PDF</a> للمراجعة دون اتصال.',
    specsBtn: 'تحميل ورقة المواصفات الكاملة (PDF)',
    videoH2: 'شاهد الآلة تعمل',
    videoP: 'مقطعان قصيران: كيفية تركيب JD-3 في مطبخك وكيفية ضبط الموزع المدمج.',
    video1Title: 'دليل تركيب JD-3',
    video1Cap:  'التركيب: ماء + كهرباء + دورة أولى',
    video2Title: 'JD-3: ضبط الموزع المدمج',
    video2Cap:  'ضبط: جرعات الموزع المدمج',
    howH2: 'كيف يعمل — 4 خطوات',
    howSteps: [
      ['التحميل', 'ادفع رفوف الصواني أو القوالب أو الأوعية داخل الحجرة.'],
      ['إغلاق الغطاء', 'تبدأ الدورة تلقائياً — بدون أزرار.'],
      ['الغسيل + الشطف', 'ذراعان مزدوجان يرشان 360°. الشطف النهائي عند 82°م.'],
      ['التفريغ', 'خلال دقيقتين (120 ثانية). نظيف، معقّم، مصفّى.'],
    ],
    featuresH2: '12 ميزة تهم',
    featuresIntro: 'كل تفصيل مصمم للمطبخ التجاري الصغير — لا إفراط صناعي ولا تنازل استهلاكي.',
    featuresBtn: 'تفاصيل الميزات الـ 12',
    features: [
      ['🛡️', 'فولاذ SUS304',                      'الآلة بكاملها من SUS304 الغذائي — مقاوم للصدأ، سهل التعقيم، متوافق مع FDA.'],
      ['📏', 'حجرة غسيل كبيرة جداً',                'رف 650×550 مم يستوعب صواني 600×400 مم، قدور كبيرة، أوعية KitchenAid.'],
      ['💧', 'ذراعان دوّاران + فوهات مخصصة للصواني', 'غسيل 360°. هندسة الفوهات محسّنة للأسطح المسطحة للصواني.'],
      ['🌡️', 'تحكم ذكي بالحرارة',                 'تعقيم تلقائي ≥82°م مع شاشة LED. لوحة تحكم نمطية سهلة الصيانة.'],
      ['💦', 'استهلاك ماء منخفض جداً',             '2.0–2.5 لتر لكل دورة مقابل 5–10 لتر لمعظم المنافسين.'],
      ['♻️', 'نظام استرداد الحرارة',               'المياه الساخنة من الشطف تعود لخزان الغسيل، توفير طاقة 15–25%.'],
      ['🚪', 'باب معزول محكم',                     'يقلل تسرب البخار حتى 70%. مطبخ أبرد وأكثر جفافاً.'],
      ['🧑‍🍳', 'تشغيل مريح',                       'سكك دفع-سحب. إغلاق الباب يبدأ الدورة — بدون أزرار.'],
      ['🔒', 'حماية متعددة',                       'قفل الباب، حماية من الجهد الزائد.'],
      ['🧪', 'جاهز للموزع التلقائي',               'واجهات مثبتة مسبقاً للموزع ووحدات معالجة المياه.'],
      ['⚡', 'معتمد CE Safety',                    'متوافق مع EU. جاهز للشحن إلى EU وGCC وآسيا والباسيفيك وأمريكا اللاتينية وأفريقيا.'],
      ['⏱️', 'بدء تلقائي عند إغلاق الباب',         'أغلق الغطاء وتبدأ الدورة. لا أزرار، لا انتظار.'],
    ],
    whatH2: 'ماذا يغسل',
    whatIntro: 'اضغط على أي فئة لرؤية أنماط التحميل والإعدادات الموصى بها وأسئلة شائعة محددة.',
    whatLabels: {
      'baking-trays-600x400': 'صواني المخابز 600×400 مم',
      'sheet-pans': 'صواني أمريكية',
      'mixing-bowls': 'أوعية الخلط',
      'cake-pans': 'قوالب الكيك',
      'pizza-pans': 'صواني البيتزا',
      'frying-baskets': 'سلال القلي',
      'stockpots': 'قدور كبيرة',
      'dishes-plates': 'الأطباق والصحون',
      'utensils-mixers': 'الأدوات وملحقات الخلاط',
      'large-bakeware': 'أدوات الخبز الكبيرة',
    },
    cfgH2: 'خيارات التكوين',
    cfgItems: [
      ['كهربائي قياسي',                       '$4,400', 'JD-3 الأساسي، 380V/3N/50Hz'],
      ['+ موزع تلقائي',                       '$4,600', 'مضخات منظف ومساعد شطف'],
      ['+ ترقية استرداد الحرارة',             '$4,900', 'حزمة توفير طاقة معززة'],
    ],
    cfgFromLabel: 'من',
    cfgFooter: 'جميع الأسعار FOB شنتشن. الشحن والرسوم تعتمد على الوجهة — انظر <a href="/ar/pricing/by-country/" class="underline">أسعار DDP حسب الدولة</a>.',
    faqs: [
      ['ماذا يحتوي الصندوق؟', 'آلة JD-3، إطار دعم صواني خبز مخصص من الفولاذ المقاوم للصدأ، خرطوم دخول الماء، خرطوم التصريف، دليل التشغيل، شهادة CE.'],
      ['الشحن إلى السعودية / الإمارات / قطر؟', 'نعم. ننشر أسعار DDP بالعملة المحلية. انظر <a href="/ar/pricing/by-country/" class="underline">الأسعار حسب الدولة</a>.'],
      ['الضمان؟', 'ضمان مصنّع 12 شهراً على القطع. القطع تُشحن عبر الشحن السريع الدولي.'],
      ['قطع غيار بعد 5 سنوات؟', 'جميع المكونات الرئيسية — المضخات، عناصر التسخين، لوحات التحكم — متوفرة في المصنع.'],
      ['هل يمكنني تنزيل ورقة المواصفات PDF؟', 'نعم. استخدم زر "تحميل ورقة المواصفات (PDF)" في الأعلى. PDF بالإنجليزية؛ للنسخة العربية <a href="/ar/contact/" class="underline">تواصل معنا</a>.'],
    ],
    faqTitle: 'الأسئلة الشائعة',
  },
};

// --------------------------------------------------------------
// Per-locale full spec sections (8 sections × ~50 rows each)
// --------------------------------------------------------------
const specSectionsByLocale = {
  es: [
    { title: 'Dimensiones y Peso', rows: [
      ['Cuerpo (campana cerrada)', '804 × 816 × 1.550 mm'],
      ['Altura máx. (campana abierta)', '2.115 mm'],
      ['Altura de cámara', '550 mm'],
      ['Tamaño del rack', '650 × 550 mm'],
      ['Peso neto / bruto', '145 kg / 165 kg'],
      ['Huella', '0,65 m²'],
    ]},
    { title: 'Rendimiento de Lavado', rows: [
      ['Capacidad (bandejas estándar)', '180 bandejas/hora'],
      ['Carga por ciclo (bandejas)', '6 bandejas'],
      ['Tiempo de ciclo', '2 minutos (120 s)'],
      ['Ciclos por hora', '30'],
      ['Agua por ciclo', '2,0–2,5 L'],
      ['Temperatura del tanque de lavado', '60–65°C'],
      ['Temperatura del enjuague final', '≥82°C (NSF/ANSI 3)'],
    ]},
    { title: 'Compatibilidad', rows: [
      ['Bandejas 600×400 mm', '6 por ciclo (vertical)'],
      ['Bandejas medias 18×26"', '6 por ciclo (planas)'],
      ['Bandejas completas 18×26"', '1–2 por ciclo (diagonal)'],
      ['Gastronorm GN 2/1', '6 por ciclo'],
      ['Moldes pastel 8"', '6 por ciclo'],
      ['Moldes pastel 12"', '2 por ciclo (vertical)'],
      ['Moldes pizza 14" / 16"', '4 / 3 por ciclo'],
      ['Ollas (≤ 28 cm diám.)', '2 por ciclo'],
      ['Tazones KitchenAid 5 L', '4 por ciclo (vertical)'],
    ]},
    { title: 'Eléctrico', rows: [
      ['Potencia total', '13 kW'],
      ['Resistencia', '9 kW'],
      ['Bomba', '0,75 kW'],
      ['Alimentación (estándar)', '380V / 3N / 50Hz'],
      ['Alternativas', '400V / 50Hz · 220V / 60Hz (especificar)'],
      ['Corriente de trabajo', '21,5 A'],
      ['Breaker recomendado', '32 A tipo C'],
    ]},
    { title: 'Agua', rows: [
      ['Conexión de entrada', 'G 3/4"'],
      ['Presión de entrada', '2,5–6 kg/cm²'],
      ['Temperatura de entrada', '≥ 10°C (50–60°C precalentada ahorra energía)'],
      ['Conexión de desagüe', 'Manguera G 1½"'],
      ['Distancia de desagüe', '≤ 1,5 m'],
      ['Caudal de desagüe', '~25 L/min'],
    ]},
    { title: 'Materiales', rows: [
      ['Carcasa', 'SUS304 grado alimentario'],
      ['Paredes de cámara', 'SUS304 grado alimentario'],
      ['Rack / soporte de bandejas', 'SUS304 grado alimentario'],
      ['Brazos rotativos', 'SUS304 grado alimentario'],
      ['Tubería interna', 'Silicona alimentaria + inoxidable'],
    ]},
    { title: 'Certificaciones', rows: [
      ['Seguridad', 'CE (cumplimiento UE total)'],
      ['Calidad', 'ISO 9001:2015'],
      ['Sanitización', 'NSF/ANSI 3, EN 12875-2, DIN 10516, FDA 4-501.112'],
      ['Materiales en contacto', 'FDA, UE 1935/2004'],
      ['Directiva máquinas', 'EN ISO 12100, EN 60204-1'],
    ]},
    { title: 'Funcional', rows: [
      ['Inicio automático al cerrar puerta', 'Sí'],
      ['Recuperación de calor', 'Upgrade opcional (15–25% ahorro)'],
      ['Dispensador automático', 'Upgrade opcional'],
      ['Bomba de abrillantador', 'Upgrade opcional'],
      ['Corte por interbloqueo de puerta', 'Estándar'],
      ['Protección sobrevoltaje', 'Estándar'],
      ['Pantalla de temperatura', 'LED digital'],
      ['Ruido', '≤ 70 dB'],
    ]},
  ],
  fr: [
    { title: 'Dimensions et Poids', rows: [
      ['Corps (hotte fermée)', '804 × 816 × 1 550 mm'],
      ['Hauteur max (hotte ouverte)', '2 115 mm'],
      ['Hauteur de chambre', '550 mm'],
      ['Taille du panier', '650 × 550 mm'],
      ['Poids net / brut', '145 kg / 165 kg'],
      ['Encombrement', '0,65 m²'],
    ]},
    { title: 'Performance de lavage', rows: [
      ['Capacité (plaques standard)', '180 plaques/heure'],
      ['Charge par cycle (plaques)', '6 plaques'],
      ['Durée de cycle', '2 minutes (120 s)'],
      ['Cycles par heure', '30'],
      ['Eau par cycle', '2,0–2,5 L'],
      ['Température de lavage', '60–65°C'],
      ['Température de rinçage final', '≥82°C (NSF/ANSI 3)'],
    ]},
    { title: 'Compatibilité', rows: [
      ['Plaques 600×400 mm', '6 par cycle (vertical)'],
      ['Demi-plaques 18×26"', '6 par cycle (à plat)'],
      ['Plaques complètes 18×26"', '1–2 par cycle (diagonale)'],
      ['Gastronorme GN 2/1', '6 par cycle'],
      ['Moules à gâteaux 8"', '6 par cycle'],
      ['Moules à gâteaux 12"', '2 par cycle (vertical)'],
      ['Moules à pizza 14" / 16"', '4 / 3 par cycle'],
      ['Marmites (diam. ≤ 28 cm)', '2 par cycle'],
      ['Bols KitchenAid 5 L', '4 par cycle (vertical)'],
    ]},
    { title: 'Électrique', rows: [
      ['Puissance totale', '13 kW'],
      ['Résistance', '9 kW'],
      ['Pompe', '0,75 kW'],
      ['Alimentation (standard)', '380V / 3N / 50Hz'],
      ['Alternatives', '400V / 50Hz · 220V / 60Hz (à préciser)'],
      ['Courant de service', '21,5 A'],
      ['Disjoncteur recommandé', '32 A type C'],
    ]},
    { title: 'Eau', rows: [
      ['Raccord d\'entrée', 'G 3/4"'],
      ['Pression d\'entrée', '2,5–6 kg/cm²'],
      ['Température d\'entrée', "≥ 10°C (50–60°C préchauffée économise l'énergie)"],
      ['Raccord d\'évacuation', 'Tuyau G 1½"'],
      ['Distance d\'évacuation', '≤ 1,5 m'],
      ['Débit d\'évacuation', '~25 L/min'],
    ]},
    { title: 'Matériaux', rows: [
      ['Carrosserie', 'SUS304 qualité alimentaire'],
      ['Parois de chambre', 'SUS304 qualité alimentaire'],
      ['Panier / support de plaques', 'SUS304 qualité alimentaire'],
      ['Bras rotatifs', 'SUS304 qualité alimentaire'],
      ['Tuyauterie interne', 'Silicone alimentaire + inox'],
    ]},
    { title: 'Certifications', rows: [
      ['Sécurité', 'CE (conformité UE complète)'],
      ['Qualité', 'ISO 9001:2015'],
      ['Désinfection', 'NSF/ANSI 3, EN 12875-2, DIN 10516, FDA 4-501.112'],
      ['Matériaux contact aliment', 'FDA, UE 1935/2004'],
      ['Directive machines', 'EN ISO 12100, EN 60204-1'],
    ]},
    { title: 'Fonctionnel', rows: [
      ['Démarrage auto à la fermeture', 'Oui'],
      ['Récupération de chaleur', 'Upgrade optionnel (15–25%)'],
      ['Distributeur automatique', 'Upgrade optionnel'],
      ['Pompe liquide de rinçage', 'Upgrade optionnel'],
      ['Verrouillage de porte', 'Standard'],
      ['Protection surcharge', 'Standard'],
      ['Affichage température', 'LED numérique'],
      ['Bruit', '≤ 70 dB'],
    ]},
  ],
  de: [
    { title: 'Abmessungen und Gewicht', rows: [
      ['Gehäuse (Haube zu)', '804 × 816 × 1.550 mm'],
      ['Max. Höhe (Haube offen)', '2.115 mm'],
      ['Kammerhöhe', '550 mm'],
      ['Korbgröße', '650 × 550 mm'],
      ['Netto- / Bruttogewicht', '145 kg / 165 kg'],
      ['Stellfläche', '0,65 m²'],
    ]},
    { title: 'Spülleistung', rows: [
      ['Durchsatz (Standardbleche)', '180 Bleche/Stunde'],
      ['Ladung pro Zyklus', '6 Bleche'],
      ['Zykluszeit', '2 Minuten (120 s)'],
      ['Zyklen pro Stunde', '30'],
      ['Wasser pro Zyklus', '2,0–2,5 L'],
      ['Spültank-Temperatur', '60–65°C'],
      ['Endspülung', '≥82°C (NSF/ANSI 3)'],
    ]},
    { title: 'Kompatibilität', rows: [
      ['600×400 mm EN-Norm-Bleche', '6 pro Zyklus (vertikal)'],
      ['18×26" Halbblech', '6 pro Zyklus (flach)'],
      ['18×26" Vollblech', '1–2 pro Zyklus (diagonal)'],
      ['Gastronorm GN 2/1', '6 pro Zyklus'],
      ['Kuchenformen 8"', '6 pro Zyklus'],
      ['Kuchenformen 12"', '2 pro Zyklus (vertikal)'],
      ['Pizzableche 14" / 16"', '4 / 3 pro Zyklus'],
      ['Kochtöpfe (≤ 28 cm)', '2 pro Zyklus'],
      ['KitchenAid 5-L-Schüsseln', '4 pro Zyklus (vertikal)'],
    ]},
    { title: 'Elektrik', rows: [
      ['Gesamtleistung', '13 kW'],
      ['Heizelement', '9 kW'],
      ['Pumpe', '0,75 kW'],
      ['Spannungsversorgung (Standard)', '380V / 3N / 50Hz'],
      ['Alternativen', '400V / 50Hz · 220V / 60Hz (auf Bestellung)'],
      ['Betriebsstrom', '21,5 A'],
      ['Empfohlener Schutzschalter', '32 A Typ C'],
    ]},
    { title: 'Wasser', rows: [
      ['Zulaufanschluss', 'G 3/4"'],
      ['Zulaufdruck', '2,5–6 kg/cm²'],
      ['Zulauftemperatur', '≥ 10°C (50–60°C vorgewärmt spart Energie)'],
      ['Ablaufanschluss', 'G 1½" Schlauch'],
      ['Ablaufentfernung', '≤ 1,5 m'],
      ['Ablaufdurchfluss', '~25 L/min'],
    ]},
    { title: 'Materialien', rows: [
      ['Außenhülle', 'SUS304 lebensmittelecht'],
      ['Kammerwände', 'SUS304 lebensmittelecht'],
      ['Korb / Blechträger', 'SUS304 lebensmittelecht'],
      ['Sprüharme', 'SUS304 lebensmittelecht'],
      ['Innere Rohre', 'Lebensmittel-Silikon + Edelstahl'],
    ]},
    { title: 'Zertifikate', rows: [
      ['Sicherheit', 'CE (volle EU-Konformität)'],
      ['Qualität', 'ISO 9001:2015'],
      ['Desinfektion', 'NSF/ANSI 3, EN 12875-2, DIN 10516, FDA 4-501.112'],
      ['Lebensmittelkontakt', 'FDA, EU 1935/2004'],
      ['Maschinenrichtlinie', 'EN ISO 12100, EN 60204-1'],
    ]},
    { title: 'Funktional', rows: [
      ['Türaktivierter Auto-Start', 'Ja'],
      ['Wärmerückgewinnung', 'Optional (15–25%)'],
      ['Auto-Dosierer', 'Optional'],
      ['Klarspüler-Pumpe', 'Optional'],
      ['Türverriegelung', 'Standard'],
      ['Überspannungsschutz', 'Standard'],
      ['Temperaturanzeige', 'LED digital'],
      ['Geräusch', '≤ 70 dB'],
    ]},
  ],
  ru: [
    { title: 'Габариты и вес', rows: [
      ['Корпус (купол закрыт)', '804 × 816 × 1 550 мм'],
      ['Макс. высота (купол открыт)', '2 115 мм'],
      ['Высота камеры', '550 мм'],
      ['Размер корзины', '650 × 550 мм'],
      ['Нетто / брутто', '145 кг / 165 кг'],
      ['Габариты в плане', '0,65 м²'],
    ]},
    { title: 'Производительность', rows: [
      ['Производительность (стандартные противни)', '180 противней/час'],
      ['Загрузка за цикл', '6 противней'],
      ['Время цикла', '2 минуты (120 с)'],
      ['Циклов в час', '30'],
      ['Расход воды за цикл', '2,0–2,5 л'],
      ['Температура моечной ванны', '60–65°C'],
      ['Финальное ополаскивание', '≥82°C (NSF/ANSI 3)'],
    ]},
    { title: 'Совместимость', rows: [
      ['Противни 600×400 мм', '6 за цикл (вертикально)'],
      ['Полу-листы 18×26"', '6 за цикл (плоско)'],
      ['Полные листы 18×26"', '1–2 за цикл (диагонально)'],
      ['Gastronorm GN 2/1', '6 за цикл'],
      ['Формы для тортов 8"', '6 за цикл'],
      ['Формы для тортов 12"', '2 за цикл (вертикально)'],
      ['Противни для пиццы 14" / 16"', '4 / 3 за цикл'],
      ['Кастрюли (≤ 28 см диам.)', '2 за цикл'],
      ['KitchenAid 5-л чаши', '4 за цикл (вертикально)'],
    ]},
    { title: 'Электрика', rows: [
      ['Полная мощность', '13 кВт'],
      ['ТЭН', '9 кВт'],
      ['Насос', '0,75 кВт'],
      ['Питание (стандартное)', '380V / 3N / 50Hz'],
      ['Альтернативные варианты', '400V / 50Hz · 220V / 60Hz (указать при заказе)'],
      ['Рабочий ток', '21,5 A'],
      ['Рекомендуемый автомат', '32 A тип C'],
    ]},
    { title: 'Вода', rows: [
      ['Подвод воды', 'G 3/4"'],
      ['Давление', '2,5–6 кг/см²'],
      ['Температура подаваемой', '≥ 10°C (50–60°C предварительно — экономия)'],
      ['Слив', 'G 1½" шланг'],
      ['Расстояние до слива', '≤ 1,5 м'],
      ['Расход слива', '~25 л/мин'],
    ]},
    { title: 'Материалы', rows: [
      ['Корпус', 'SUS304 пищевая'],
      ['Стенки камеры', 'SUS304 пищевая'],
      ['Корзина / держатель противней', 'SUS304 пищевая'],
      ['Вращающиеся рычаги', 'SUS304 пищевая'],
      ['Внутренние шланги', 'Пищевой силикон + нержавейка'],
    ]},
    { title: 'Сертификаты', rows: [
      ['Безопасность', 'CE (полное соответствие ЕС)'],
      ['Качество', 'ISO 9001:2015'],
      ['Дезинфекция', 'NSF/ANSI 3, EN 12875-2, DIN 10516, FDA 4-501.112'],
      ['Контакт с пищей', 'FDA, ЕС 1935/2004'],
      ['Машинная директива', 'EN ISO 12100, EN 60204-1'],
    ]},
    { title: 'Функционал', rows: [
      ['Авто-старт при закрытии', 'Да'],
      ['Рекуперация тепла', 'Опционально (15–25%)'],
      ['Авто-дозатор', 'Опционально'],
      ['Насос ополаскивателя', 'Опционально'],
      ['Блокировка двери', 'Стандарт'],
      ['Защита от перенапряжения', 'Стандарт'],
      ['Индикация температуры', 'LED цифровая'],
      ['Уровень шума', '≤ 70 дБ'],
    ]},
  ],
  th: [
    { title: 'ขนาดและน้ำหนัก', rows: [
      ['ตัวเครื่อง (ปิดกระโจม)', '804 × 816 × 1,550 มม.'],
      ['สูงสุด (เปิดกระโจม)', '2,115 มม.'],
      ['ความสูงห้องล้าง', '550 มม.'],
      ['ขนาดแร็ค', '650 × 550 มม.'],
      ['น้ำหนักสุทธิ / รวม', '145 กก. / 165 กก.'],
      ['พื้นที่วาง', '0.65 ตร.ม.'],
    ]},
    { title: 'ประสิทธิภาพการล้าง', rows: [
      ['อัตราการล้าง (ถาดมาตรฐาน)', '180 ถาด/ชั่วโมง'],
      ['การบรรจุต่อรอบ', '6 ถาด'],
      ['เวลารอบ', '2 นาที (120 วินาที)'],
      ['รอบต่อชั่วโมง', '30'],
      ['น้ำต่อรอบ', '2.0–2.5 ลิตร'],
      ['อุณหภูมิถังล้าง', '60–65°C'],
      ['อุณหภูมิฉีดสุดท้าย', '≥82°C (NSF/ANSI 3)'],
    ]},
    { title: 'ความเข้ากันได้', rows: [
      ['ถาด 600×400 มม.', '6 ต่อรอบ (แนวตั้ง)'],
      ['ถาด 18×26" ครึ่ง', '6 ต่อรอบ (แบน)'],
      ['ถาด 18×26" เต็ม', '1–2 ต่อรอบ (เฉียง)'],
      ['Gastronorm GN 2/1', '6 ต่อรอบ'],
      ['พิมพ์เค้ก 8"', '6 ต่อรอบ'],
      ['พิมพ์เค้ก 12"', '2 ต่อรอบ (แนวตั้ง)'],
      ['ถาดพิซซ่า 14" / 16"', '4 / 3 ต่อรอบ'],
      ['หม้อ (≤ 28 ซม. เส้นผ่าน)', '2 ต่อรอบ'],
      ['ชาม KitchenAid 5 ล.', '4 ต่อรอบ (แนวตั้ง)'],
    ]},
    { title: 'ไฟฟ้า', rows: [
      ['กำลังรวม', '13 kW'],
      ['ฮีตเตอร์', '9 kW'],
      ['ปั๊ม', '0.75 kW'],
      ['ไฟ (มาตรฐาน)', '380V / 3N / 50Hz'],
      ['ทางเลือก', '400V / 50Hz · 220V / 60Hz (ระบุตอนสั่ง)'],
      ['กระแสใช้งาน', '21.5 A'],
      ['เบรกเกอร์แนะนำ', '32 A type C'],
    ]},
    { title: 'น้ำ', rows: [
      ['การต่อท่อน้ำเข้า', 'G 3/4"'],
      ['ความดันน้ำเข้า', '2.5–6 kg/cm²'],
      ['อุณหภูมิน้ำเข้า', '≥ 10°C (50–60°C อุ่นล่วงหน้าประหยัด)'],
      ['การต่อท่อระบาย', 'ท่อ G 1½"'],
      ['ระยะระบาย', '≤ 1.5 ม.'],
      ['อัตราระบาย', '~25 ล./นาที'],
    ]},
    { title: 'วัสดุ', rows: [
      ['ตัวเครื่อง', 'SUS304 เกรดอาหาร'],
      ['ผนังห้องล้าง', 'SUS304 เกรดอาหาร'],
      ['แร็ค / โครงรองรับถาด', 'SUS304 เกรดอาหาร'],
      ['แขนหมุน', 'SUS304 เกรดอาหาร'],
      ['ท่อภายใน', 'ซิลิโคนเกรดอาหาร + สแตนเลส'],
    ]},
    { title: 'ใบรับรอง', rows: [
      ['ความปลอดภัย', 'CE (ตาม EU)'],
      ['คุณภาพ', 'ISO 9001:2015'],
      ['ฆ่าเชื้อ', 'NSF/ANSI 3, EN 12875-2, DIN 10516, FDA 4-501.112'],
      ['วัสดุสัมผัสอาหาร', 'FDA, EU 1935/2004'],
      ['ระเบียบเครื่องจักร', 'EN ISO 12100, EN 60204-1'],
    ]},
    { title: 'ฟังก์ชั่น', rows: [
      ['เริ่มอัตโนมัติเมื่อปิดประตู', 'มี'],
      ['ระบบกู้คืนความร้อน', 'อัปเกรดเสริม (15–25%)'],
      ['เครื่องจ่ายอัตโนมัติ', 'อัปเกรดเสริม'],
      ['ปั๊มน้ำยาเคลือบ', 'อัปเกรดเสริม'],
      ['ตัดไฟเมื่อเปิดประตู', 'มาตรฐาน'],
      ['ป้องกันไฟเกิน', 'มาตรฐาน'],
      ['แสดงอุณหภูมิ', 'LED ดิจิทัล'],
      ['เสียง', '≤ 70 dB'],
    ]},
  ],
  vi: [
    { title: 'Kích thước & trọng lượng', rows: [
      ['Thân máy (đóng nắp)', '804 × 816 × 1.550 mm'],
      ['Chiều cao tối đa (mở nắp)', '2.115 mm'],
      ['Chiều cao buồng', '550 mm'],
      ['Kích thước rack', '650 × 550 mm'],
      ['Trọng lượng tịnh / cả bì', '145 kg / 165 kg'],
      ['Diện tích chiếm chỗ', '0,65 m²'],
    ]},
    { title: 'Hiệu suất rửa', rows: [
      ['Năng suất (khay chuẩn)', '180 khay/giờ'],
      ['Tải mỗi chu kỳ', '6 khay'],
      ['Thời gian chu kỳ', '2 phút (120 giây)'],
      ['Chu kỳ mỗi giờ', '30'],
      ['Nước mỗi chu kỳ', '2,0–2,5 L'],
      ['Nhiệt độ bồn rửa', '60–65°C'],
      ['Nhiệt độ tráng cuối', '≥82°C (NSF/ANSI 3)'],
    ]},
    { title: 'Tương thích', rows: [
      ['Khay 600×400 mm', '6 mỗi chu kỳ (đứng)'],
      ['Khay nửa 18×26"', '6 mỗi chu kỳ (phẳng)'],
      ['Khay đầy 18×26"', '1–2 mỗi chu kỳ (chéo)'],
      ['Gastronorm GN 2/1', '6 mỗi chu kỳ'],
      ['Khuôn bánh 8"', '6 mỗi chu kỳ'],
      ['Khuôn bánh 12"', '2 mỗi chu kỳ (đứng)'],
      ['Khay pizza 14" / 16"', '4 / 3 mỗi chu kỳ'],
      ['Nồi (≤ 28 cm)', '2 mỗi chu kỳ'],
      ['Bát KitchenAid 5 L', '4 mỗi chu kỳ (đứng)'],
    ]},
    { title: 'Điện', rows: [
      ['Công suất tổng', '13 kW'],
      ['Điện trở', '9 kW'],
      ['Bơm', '0,75 kW'],
      ['Nguồn (chuẩn)', '380V / 3N / 50Hz'],
      ['Tùy chọn', '400V / 50Hz · 220V / 60Hz (chỉ định khi đặt)'],
      ['Dòng làm việc', '21,5 A'],
      ['CB đề xuất', '32 A loại C'],
    ]},
    { title: 'Nước', rows: [
      ['Kết nối cấp', 'G 3/4"'],
      ['Áp suất cấp', '2,5–6 kg/cm²'],
      ['Nhiệt độ cấp', '≥ 10°C (50–60°C tiết kiệm năng lượng)'],
      ['Kết nối thoát', 'Ống G 1½"'],
      ['Khoảng cách thoát', '≤ 1,5 m'],
      ['Lưu lượng thoát', '~25 L/phút'],
    ]},
    { title: 'Vật liệu', rows: [
      ['Vỏ ngoài', 'SUS304 thực phẩm'],
      ['Vách buồng', 'SUS304 thực phẩm'],
      ['Rack / khung đỡ khay', 'SUS304 thực phẩm'],
      ['Cánh tay xoay', 'SUS304 thực phẩm'],
      ['Ống bên trong', 'Silicon thực phẩm + inox'],
    ]},
    { title: 'Chứng nhận', rows: [
      ['An toàn', 'CE (tuân thủ EU)'],
      ['Chất lượng', 'ISO 9001:2015'],
      ['Tiệt trùng', 'NSF/ANSI 3, EN 12875-2, DIN 10516, FDA 4-501.112'],
      ['Tiếp xúc thực phẩm', 'FDA, EU 1935/2004'],
      ['Chỉ thị máy móc', 'EN ISO 12100, EN 60204-1'],
    ]},
    { title: 'Chức năng', rows: [
      ['Tự khởi động khi đóng nắp', 'Có'],
      ['Thu hồi nhiệt', 'Nâng cấp tùy chọn (15–25%)'],
      ['Bộ phân phối tự động', 'Nâng cấp tùy chọn'],
      ['Bơm chất trợ xả', 'Nâng cấp tùy chọn'],
      ['Khóa cửa cắt điện', 'Chuẩn'],
      ['Bảo vệ quá áp', 'Chuẩn'],
      ['Hiển thị nhiệt độ', 'LED số'],
      ['Tiếng ồn', '≤ 70 dB'],
    ]},
  ],
  ar: [
    { title: 'الأبعاد والوزن', rows: [
      ['الجسم (الغطاء مغلق)', '804 × 816 × 1,550 مم'],
      ['أقصى ارتفاع (غطاء مفتوح)', '2,115 مم'],
      ['ارتفاع الحجرة', '550 مم'],
      ['حجم الرف', '650 × 550 مم'],
      ['الوزن الصافي / الإجمالي', '145 كغ / 165 كغ'],
      ['البصمة', '0.65 م²'],
    ]},
    { title: 'أداء الغسيل', rows: [
      ['الإنتاجية (صواني قياسية)', '180 صينية/ساعة'],
      ['التحميل لكل دورة', '6 صواني'],
      ['وقت الدورة', 'دقيقتان (120 ثانية)'],
      ['الدورات في الساعة', '30'],
      ['الماء لكل دورة', '2.0–2.5 لتر'],
      ['حرارة خزان الغسيل', '60–65°م'],
      ['الشطف النهائي', '≥82°م (NSF/ANSI 3)'],
    ]},
    { title: 'التوافق', rows: [
      ['صواني 600×400 مم', '6 لكل دورة (عمودي)'],
      ['صواني نصفية 18×26"', '6 لكل دورة (مسطّحة)'],
      ['صواني كاملة 18×26"', '1–2 لكل دورة (قطري)'],
      ['Gastronorm GN 2/1', '6 لكل دورة'],
      ['قوالب كيك 8"', '6 لكل دورة'],
      ['قوالب كيك 12"', '2 لكل دورة (عمودي)'],
      ['صواني بيتزا 14" / 16"', '4 / 3 لكل دورة'],
      ['قدور (≤ 28 سم)', '2 لكل دورة'],
      ['أوعية KitchenAid 5 لتر', '4 لكل دورة (عمودي)'],
    ]},
    { title: 'الكهرباء', rows: [
      ['الطاقة الكلية', '13 كيلو واط'],
      ['عنصر التسخين', '9 كيلو واط'],
      ['المضخة', '0.75 كيلو واط'],
      ['التغذية (القياسية)', '380V / 3N / 50Hz'],
      ['البدائل', '400V / 50Hz · 220V / 60Hz (يُحدّد عند الطلب)'],
      ['تيار التشغيل', '21.5 أمبير'],
      ['القاطع الموصى به', '32 أمبير نوع C'],
    ]},
    { title: 'الماء', rows: [
      ['اتصال الدخول', 'G 3/4"'],
      ['ضغط الدخول', '2.5–6 كغ/سم²'],
      ['حرارة الدخول', '≥ 10°م (50–60°م مُسخّن مسبقاً يوفر الطاقة)'],
      ['اتصال التصريف', 'خرطوم G 1½"'],
      ['مسافة التصريف', '≤ 1.5 م'],
      ['تدفق التصريف', '~25 لتر/دقيقة'],
    ]},
    { title: 'المواد', rows: [
      ['الهيكل الخارجي', 'SUS304 غذائي'],
      ['جدران الحجرة', 'SUS304 غذائي'],
      ['الرف / إطار دعم الصواني', 'SUS304 غذائي'],
      ['الأذرع الدوّارة', 'SUS304 غذائي'],
      ['الأنابيب الداخلية', 'سيليكون غذائي + ستانلس ستيل'],
    ]},
    { title: 'الشهادات', rows: [
      ['السلامة', 'CE (توافق EU كامل)'],
      ['الجودة', 'ISO 9001:2015'],
      ['التعقيم', 'NSF/ANSI 3, EN 12875-2, DIN 10516, FDA 4-501.112'],
      ['تلامس الغذاء', 'FDA, EU 1935/2004'],
      ['توجيه الآلات', 'EN ISO 12100, EN 60204-1'],
    ]},
    { title: 'الوظائف', rows: [
      ['بدء تلقائي عند إغلاق الباب', 'نعم'],
      ['نظام استرداد الحرارة', 'ترقية اختيارية (15–25%)'],
      ['موزع تلقائي', 'ترقية اختيارية'],
      ['مضخة مساعد الشطف', 'ترقية اختيارية'],
      ['قفل الباب', 'قياسي'],
      ['حماية الجهد الزائد', 'قياسي'],
      ['عرض الحرارة', 'LED رقمي'],
      ['الضوضاء', '≤ 70 ديسيبل'],
    ]},
  ],
};

// --------------------------------------------------------------
// Template
// --------------------------------------------------------------
function buildFile(locale) {
  const t = L[locale];
  const spec = specSectionsByLocale[locale];
  const specsJS = spec.map((s) =>
    `  { title: ${JSON.stringify(s.title)}, rows: [\n` +
    s.rows.map(([k, v]) => `    { k: ${JSON.stringify(k)}, v: ${JSON.stringify(v)} },`).join('\n') +
    `\n  ]}`
  ).join(',\n');
  const washThumbsJS = washSlugs.map((slug) =>
    `  { slug: '${slug}', label: ${JSON.stringify(t.whatLabels[slug])}, img: '${washImg[slug]}' }`
  ).join(',\n');
  const featuresJS = t.features.map(([icon, title, text]) =>
    `  { icon: ${JSON.stringify(icon)}, title: ${JSON.stringify(title)}, text: ${JSON.stringify(text)} }`
  ).join(',\n');
  const howStepsJS = t.howSteps.map(([title, desc], i) =>
    `      { n: '${i + 1}', t: ${JSON.stringify(title)}, d: ${JSON.stringify(desc)} }`
  ).join(',\n');
  const cfgJS = t.cfgItems.map(([title, price, desc]) =>
    `      { t: ${JSON.stringify(title)}, p: ${JSON.stringify(price)}, d: ${JSON.stringify(desc)} }`
  ).join(',\n');
  const faqsJS = t.faqs.map(([q, a]) =>
    `  { q: ${JSON.stringify(q)}, a: ${JSON.stringify(a)} }`
  ).join(',\n');
  const statBoxes = t.statLabels.map((label, i) => {
    const highlight = i === 1; // rack size highlighted
    return `        <div class="rounded-card ${highlight ? 'border-bakery-orange/30 bg-bakery-cream' : 'border-bakery-navy/10'} border p-3"><p class="text-xs ${highlight ? 'text-bakery-brown' : 'text-bakery-navy/60'}">${label}</p><p class="font-semibold">${t.statValues[i]}</p></div>`;
  }).join('\n');

  return `---
import BaseLayout from '../../../layouts/BaseLayout.astro';
import BreadcrumbNav from '../../../components/BreadcrumbNav.astro';
import ImagePlaceholder from '../../../components/ImagePlaceholder.astro';
import YouTubeShort from '../../../components/YouTubeShort.astro';
import ProductSpecsTable from '../../../components/ProductSpecsTable.astro';
import TrustBadgeStrip from '../../../components/TrustBadgeStrip.astro';
import PriceCalloutBox from '../../../components/PriceCalloutBox.astro';
import CTASection from '../../../components/CTASection.astro';
import FAQSection from '../../../components/FAQSection.astro';
const locale = '${locale}' as const;

const specSections = [
${specsJS}
];

const washThumbs = [
${washThumbsJS}
];

const features = [
${featuresJS}
];
---
<BaseLayout
  title=${JSON.stringify(t.metaTitle)}
  description=${JSON.stringify(t.metaDesc)}
  locale={locale}
  canonicalPath="/product/"
  schemaType="Product"
  schemaData={{
    name: 'V-TAI JD-3',
    sku: 'VT-AE-JD-3',
    brand: { '@type': 'Brand', name: 'V-TAI' },
    description: ${JSON.stringify(t.metaDesc)},
    image: 'https://bakerytraywasher.com/images/jd-3-hero.webp',
    offers: { '@type': 'AggregateOffer', priceCurrency: 'USD', lowPrice: '4400', highPrice: '4900', availability: 'https://schema.org/InStock' },
  }}
>

<BreadcrumbNav items={[{label: ${JSON.stringify(t.bcHome)}, href: '/${locale}/'}, {label: ${JSON.stringify(t.bcProduct)}}]} />

<section class="section">
  <div class="container-page grid lg:grid-cols-2 gap-10">
    <div>
      <ImagePlaceholder src="/images/jd-3-front.webp" alt="V-TAI JD-3" ratio="4/3" label="JD-3" />
      <div class="grid grid-cols-3 gap-3 mt-3">
        <ImagePlaceholder src="/images/jd-3-inside.webp"      alt="JD-3 inside"   ratio="1/1" />
        <ImagePlaceholder src="/images/jd-3-led-control.webp" alt="JD-3 LED"      ratio="1/1" />
        <ImagePlaceholder src="/images/jd-3-wash-arms.webp"   alt="JD-3 arms"     ratio="1/1" />
      </div>
    </div>
    <div>
      <p class="eyebrow mb-2">${t.eyebrow}</p>
      <h1 class="mb-4">${t.h1}</h1>
      <p class="text-lg text-bakery-navy/80 mb-5" set:html={${JSON.stringify(t.heroP)}} />
      <div class="grid grid-cols-2 gap-3 mb-6">
${statBoxes}
      </div>
      <PriceCalloutBox locale={locale} />

      <!-- Spec sheet PDF + Quote -->
      <div class="mt-6 flex flex-wrap gap-3">
        <a href="/downloads/jd-3-spec-sheet-en.pdf"
           class="btn-primary inline-flex items-center gap-2"
           download
           aria-label="Download spec sheet PDF">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 10l5 5 5-5M12 15V3"/>
          </svg>
          <span>${t.pdfBtn}</span>
        </a>
        <a href="/${locale}/get-quote/" class="btn-secondary inline-flex items-center gap-2">${t.quoteBtn}</a>
      </div>
      <p class="mt-2 text-xs text-bakery-navy/60" set:html={${JSON.stringify(t.pdfNote)}} />
    </div>
  </div>
</section>

<TrustBadgeStrip locale={locale} />

<!-- Full specifications table -->
<section class="section">
  <div class="container-page">
    <div class="text-center max-w-3xl mx-auto mb-8">
      <h2 class="mb-3">${t.specsH2}</h2>
      <p class="text-bakery-navy/70" set:html={${JSON.stringify(t.specsIntro)}} />
    </div>
    <ProductSpecsTable sections={specSections} />
    <div class="text-center mt-8">
      <a href="/downloads/jd-3-spec-sheet-en.pdf"
         class="btn-primary inline-flex items-center gap-2"
         download>
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 10l5 5 5-5M12 15V3"/>
        </svg>
        <span>${t.specsBtn}</span>
      </a>
      <p class="mt-3 text-xs text-bakery-navy/60" set:html={${JSON.stringify(t.pdfNote)}} />
    </div>
  </div>
</section>

<!-- Videos -->
<section class="section bg-bakery-cream">
  <div class="container-page">
    <div class="text-center max-w-2xl mx-auto mb-8">
      <h2 class="mb-3">${t.videoH2}</h2>
      <p class="text-bakery-navy/70">${t.videoP}</p>
    </div>
    <div class="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
      <YouTubeShort videoId="bjxEYRiRTnI" title=${JSON.stringify(t.video1Title)} caption=${JSON.stringify(t.video1Cap)} />
      <YouTubeShort videoId="Zkf6h8u7mFE" title=${JSON.stringify(t.video2Title)} caption=${JSON.stringify(t.video2Cap)} />
    </div>
  </div>
</section>

<!-- How it works -->
<section class="section">
  <div class="container-page">
    <h2 class="text-center mb-10">${t.howH2}</h2>
    <div class="grid md:grid-cols-4 gap-6">
      {[
${howStepsJS}
      ].map((s) => (
        <div class="text-center">
          <div class="w-12 h-12 mx-auto rounded-full bg-bakery-orange text-white font-bold flex items-center justify-center mb-3">{s.n}</div>
          <h3 class="text-base mb-2">{s.t}</h3>
          <p class="text-sm text-bakery-navy/70">{s.d}</p>
        </div>
      ))}
    </div>
  </div>
</section>

<!-- Features -->
<section class="section bg-bakery-cream">
  <div class="container-page">
    <div class="text-center max-w-2xl mx-auto mb-10">
      <h2 class="mb-3">${t.featuresH2}</h2>
      <p class="text-bakery-navy/70">${t.featuresIntro}</p>
    </div>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {features.map((f) => (
        <div class="card">
          <div class="text-3xl mb-2">{f.icon}</div>
          <h3 class="text-lg mb-1">{f.title}</h3>
          <p class="text-sm text-bakery-navy/70">{f.text}</p>
        </div>
      ))}
    </div>
    <div class="text-center mt-8">
      <a href="/${locale}/product/jd-3-features/" class="btn-secondary">${t.featuresBtn}</a>
    </div>
  </div>
</section>

<!-- What it cleans (thumbnails) -->
<section class="section">
  <div class="container-page">
    <h2 class="text-center mb-3">${t.whatH2}</h2>
    <p class="text-center text-bakery-navy/70 max-w-2xl mx-auto mb-10">${t.whatIntro}</p>
    <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {washThumbs.map((w) => (
        <a href={\`/${locale}/what-it-washes/\${w.slug}/\`} class="card !p-0 overflow-hidden hover:scale-[1.03] transition flex flex-col">
          <img src={w.img} alt={w.label} class="w-full aspect-[4/3] object-cover" loading="lazy" />
          <p class="p-3 text-sm font-medium text-bakery-navy text-center">{w.label}</p>
        </a>
      ))}
    </div>
  </div>
</section>

<!-- Configurations -->
<section class="section bg-bakery-cream">
  <div class="container-page">
    <h2 class="text-center mb-8">${t.cfgH2}</h2>
    <div class="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
      {[
${cfgJS}
      ].map((cfg) => (
        <div class="card">
          <h3 class="text-lg mb-1">{cfg.t}</h3>
          <p class="text-2xl font-bold text-bakery-orange mb-2">${t.cfgFromLabel} {cfg.p}</p>
          <p class="text-sm text-bakery-navy/70">{cfg.d}</p>
        </div>
      ))}
    </div>
    <p class="text-center mt-6 text-sm text-bakery-navy/60" set:html={${JSON.stringify(t.cfgFooter)}} />
  </div>
</section>

<FAQSection locale={locale} title=${JSON.stringify(t.faqTitle)} items={[
${faqsJS}
]} />

<CTASection locale={locale} />
</BaseLayout>
`;
}

let count = 0;
for (const locale of Object.keys(L)) {
  const p = join(root, `src/pages/${locale}/product/index.astro`);
  await mkdir(dirname(p), { recursive: true });
  await writeFile(p, buildFile(locale), 'utf8');
  count++;
}
console.log(`Generated ${count} locale product pages.`);
