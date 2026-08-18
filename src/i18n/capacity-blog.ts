import type { Locale } from './utils';

export interface CapacityBlogCopy {
  title: string;
  description: string;
  tldr: string;
  faqs: Array<{ q: string; a: string }>;
  introTitle: string;
  intro: string[];
  inputsTitle: string;
  inputsIntro: string;
  inputs: string[];
  formulaTitle: string;
  formulaIntro: string;
  formulas: Array<{ name: string; formula: string; note: string }>;
  tableTitle: string;
  tableIntro: string;
  tableHeaders: [string, string, string, string];
  tableNote: string;
  ceilingTitle: string;
  ceilingIntro: string;
  ceilingItems: string[];
  workflowTitle: string;
  workflowIntro: string;
  workflowSteps: string[];
  decisionTitle: string;
  decision: string[];
  nextTitle: string;
  nextIntro: string;
  linkLabels: {
    product: string;
    specifications: string;
    trayFit: string;
    installation: string;
    quote: string;
  };
}

export const capacityBlogCopy: Record<Locale, CapacityBlogCopy> = {
  en: {
    title: 'How Many Trays Can a Bakery Tray Washer Handle? A Capacity Calculator for Real Production',
    description: 'Calculate the bakery tray washer capacity your operation actually needs. Convert trays per day into cycles, machine minutes, and a realistic cleaning window using the JD-3 verified load of 6 trays per 2-minute cycle.',
    tldr: 'The JD-3 has a verified maximum of <strong>6 standard trays per 2-minute cycle</strong>: 30 cycles or <strong>180 trays per hour</strong> when every load is full and cycles run back to back. Size for your operation with three steps: <strong>cycles per day = trays per day ÷ actual trays per load</strong>; <strong>machine cycle minutes = cycles × 2</strong>; then add the loading, unloading, scraping, and waiting time you measure in your own workflow. A bakery washing 120 standard trays needs 20 full cycles and 40 minutes of machine cycle time. Treat 180 trays/hour as a technical ceiling, not a promise for every shift.',
    faqs: [
      { q: 'How many bakery trays can the JD-3 wash per hour?', a: 'The verified headline capacity is 180 standard trays per hour: 6 trays per cycle multiplied by 30 two-minute cycles. That is the technical maximum with full racks and back-to-back cycles. Real hourly output is lower whenever loads are partial or staff need time to scrape, load, unload, sort, or wait for trays to arrive.' },
      { q: 'How many cycles are needed for 120 trays?', a: 'At 6 standard trays per full load, 120 trays require 20 cycles. At 2 minutes per cycle, that is 40 minutes of machine cycle time. Add the handling time measured in your kitchen; do not assume the full job ends in exactly 40 minutes.' },
      { q: 'Why should I not plan on 180 trays every hour?', a: 'Because 180 trays per hour assumes 100% rack utilization and zero time between cycles. It is a machine limit, not a staffing or workflow guarantee. Use your actual trays per load and include scraping, rack changes, movement, and production gaps in the cleaning window.' },
      { q: 'What if I usually load fewer than six trays?', a: 'Use the actual average, not six. If your team averages four trays per load, divide daily tray volume by four when calculating cycles. The two-minute cycle does not become shorter with a partial rack, so filling racks is the biggest capacity lever.' },
      { q: 'How do I know whether one machine is enough?', a: 'Calculate required cycles, multiply by two minutes, then compare that machine time plus your measured handling time with the cleaning window available. If it does not fit, first test fuller racks, staging, and a longer or split cleaning window. If the gap remains, share your tray mix and time window with the supplier for a documented sizing check.' },
    ],
    introTitle: 'The short answer: capacity is a workflow calculation',
    intro: [
      'A buyer asking “how many trays per hour?” is usually asking a different question: “Will one machine clear my bakery’s trays before the next production run?” The brochure number cannot answer that alone. You need daily tray volume, trays actually loaded per rack, and the time window in which washing can happen.',
      'For the V-TAI JD-3, the trusted product facts are simple: the 650×550 mm rack accepts 6 standard trays, the standard cycle is 2 minutes, and the published maximum is 30 cycles or 180 trays per hour. The planning method below keeps those machine facts separate from assumptions about your staff and workflow.',
    ],
    inputsTitle: 'Start with three numbers from your bakery',
    inputsIntro: 'Use a normal busy day, not your quietest day and not an unsupported guess.',
    inputs: [
      'Trays per day: count every tray that must be washed, including repeat uses during the same shift.',
      'Actual trays per load: use the average your tray mix permits. Six is the verified load for standard trays; mixed or oversized ware can change the load.',
      'Available cleaning window: the minutes between the first dirty batch and the deadline for clean trays. If washing is split across the day, calculate each window separately.',
    ],
    formulaTitle: 'The three formulas buyers need',
    formulaIntro: 'Round required cycles up: a fraction of a cycle still requires a complete cycle.',
    formulas: [
      { name: 'Required cycles per day', formula: 'ceil(trays per day ÷ actual trays per load)', note: 'Use your measured load. For standard trays, the verified maximum is 6.' },
      { name: 'Machine cycle minutes per day', formula: 'required cycles × 2 minutes', note: 'This is machine time only. It excludes scraping, loading, unloading, sorting, and waiting.' },
      { name: 'Window capacity', formula: 'floor(cleaning-window minutes ÷ 2) × actual trays per load', note: 'This is the technical capacity inside the window before handling time is deducted.' },
    ],
    tableTitle: 'Worked capacity table for full standard-tray loads',
    tableIntro: 'The table uses only the verified 6-tray load and 2-minute cycle. Daily tray volumes are planning examples, not product claims.',
    tableHeaders: ['Trays to wash', 'Full cycles required', 'Machine cycle time', 'Share of 180-tray technical hour'],
    tableNote: 'Important: machine cycle time is not total labour time. Measure your own scrape/load/unload time and add it to the cleaning window.',
    ceilingTitle: 'Why 180 trays/hour is a ceiling, not a shift promise',
    ceilingIntro: 'The arithmetic 6 trays × 30 cycles = 180 trays/hour is correct. The interpretation is where buyers make mistakes.',
    ceilingItems: [
      'Full-rack assumption: every cycle must carry six standard trays. Four trays per cycle produces 120 trays of machine output in the same 60 minutes.',
      'Back-to-back assumption: the next cycle begins immediately. Any scraping, rack transfer, walking, or waiting sits outside the two-minute machine cycle.',
      'Standard-item assumption: different items have different loading patterns. Confirm your pans, bowls, and oversized bakeware instead of applying the six-tray figure to everything.',
    ],
    workflowTitle: 'Turn the calculation into a real shift test',
    workflowIntro: 'A ten-minute observation is more valuable than inventing a generic “efficiency factor.”',
    workflowSteps: [
      'Count the trays in one representative production block and group them by size and soil level.',
      'Load racks as staff normally would and record the average items per load.',
      'Time from the start of one cycle to the start of the next, including scraping and rack handling.',
      'Run the formulas with those measured values and keep a margin for peak days, rewash, and irregular items.',
    ],
    decisionTitle: 'What the result means for your purchase',
    decision: [
      'If required machine minutes fit comfortably inside the available window after measured handling time is added, one machine has the required capacity. If the result only fits when every rack is perfect and there is no handling time, the plan is too tight.',
      'If it does not fit, do not immediately jump to a larger machine. First test whether full-rack staging, earlier washing, or splitting the work into two windows solves the constraint. When tray mix—not the two-minute cycle—is the bottleneck, a loading test with your actual trays is the evidence that matters.',
    ],
    nextTitle: 'Verify fit before you order',
    nextIntro: 'Check the machine data, confirm what fits, review site readiness, and send your tray count plus cleaning window for a documented sizing answer.',
    linkLabels: { product: 'JD-3 product overview', specifications: 'full JD-3 specifications', trayFit: '600×400 tray compatibility', installation: 'pre-installation checklist', quote: 'request a capacity check' },
  },

  es: {
    title: '¿Cuántas bandejas puede lavar una lavadora de panadería? Calculadora de capacidad real',
    description: 'Calcule la capacidad de lavado que realmente necesita su panadería. Convierta bandejas diarias en ciclos, minutos de máquina y ventana de limpieza con la carga verificada de 6 bandejas por ciclo de 2 minutos de la JD-3.',
    tldr: 'La JD-3 tiene un máximo verificado de <strong>6 bandejas estándar por ciclo de 2 minutos</strong>: 30 ciclos o <strong>180 bandejas por hora</strong> cuando todas las cargas están completas y los ciclos son consecutivos. Dimensione así: <strong>ciclos diarios = bandejas diarias ÷ bandejas reales por carga</strong>; <strong>minutos de ciclo = ciclos × 2</strong>; después sume el tiempo de cargar, descargar, retirar restos y esperar que mida en su operación. Para 120 bandejas estándar se necesitan 20 ciclos completos y 40 minutos de ciclo de máquina. 180 bandejas/hora es un techo técnico, no una promesa para cada turno.',
    faqs: [
      { q: '¿Cuántas bandejas lava la JD-3 por hora?', a: 'El máximo publicado es 180 bandejas estándar por hora: 6 por ciclo multiplicadas por 30 ciclos de dos minutos. Exige cargas completas y ciclos sin pausa. La producción real baja con cargas parciales y con el tiempo de retirar restos, cargar, descargar, clasificar o esperar.' },
      { q: '¿Cuántos ciclos hacen falta para 120 bandejas?', a: 'Con 6 bandejas estándar por carga completa, 120 bandejas requieren 20 ciclos. A 2 minutos por ciclo son 40 minutos de máquina. Añada el tiempo de manipulación medido en su cocina.' },
      { q: '¿Por qué no debo planificar siempre 180 bandejas por hora?', a: 'Porque supone 100% de ocupación del rack y cero tiempo entre ciclos. Es el límite de la máquina, no una garantía del flujo de trabajo. Use su carga media real e incluya la manipulación.' },
      { q: '¿Qué pasa si normalmente cargo menos de seis bandejas?', a: 'Use el promedio real. Si carga cuatro, divida el volumen diario entre cuatro. Un rack parcial no acorta el ciclo de dos minutos; llenar bien los racks es la principal palanca de capacidad.' },
      { q: '¿Cómo sé si una máquina es suficiente?', a: 'Calcule ciclos, multiplíquelos por dos minutos y compare ese tiempo más la manipulación medida con su ventana disponible. Si no cabe, pruebe cargas más completas, mejor preparación o ventanas separadas; si aún falta capacidad, solicite al proveedor una comprobación documentada con su mezcla real.' },
    ],
    introTitle: 'Respuesta corta: la capacidad es un cálculo de flujo',
    intro: ['Quien pregunta “¿cuántas bandejas por hora?” en realidad quiere saber si una máquina vaciará la cola antes de la siguiente producción. El dato de catálogo no basta: hacen falta volumen diario, carga real por rack y tiempo disponible.', 'Los datos confiables de la JD-3 son: rack de 650×550 mm, 6 bandejas estándar por carga, ciclo estándar de 2 minutos y máximo publicado de 30 ciclos o 180 bandejas por hora. El método separa esos hechos de las suposiciones operativas.'],
    inputsTitle: 'Empiece con tres números de su panadería', inputsIntro: 'Use un día ocupado normal, no el día más tranquilo ni una estimación sin medir.',
    inputs: ['Bandejas por día: cuente también las que se reutilizan en el mismo turno.', 'Bandejas reales por carga: use el promedio que permite su mezcla. Seis es la carga verificada para bandejas estándar.', 'Ventana de limpieza: minutos desde que aparece el lote sucio hasta la hora límite. Calcule por separado cada ventana si lava durante el día.'],
    formulaTitle: 'Las tres fórmulas que necesita el comprador', formulaIntro: 'Redondee los ciclos hacia arriba: una fracción también exige un ciclo completo.',
    formulas: [
      { name: 'Ciclos diarios necesarios', formula: 'techo(bandejas diarias ÷ bandejas reales por carga)', note: 'Use su carga medida; el máximo verificado para bandejas estándar es 6.' },
      { name: 'Minutos diarios de ciclo', formula: 'ciclos necesarios × 2 minutos', note: 'Solo tiempo de máquina; no incluye retirar restos, cargar, descargar, clasificar ni esperar.' },
      { name: 'Capacidad de la ventana', formula: 'suelo(minutos disponibles ÷ 2) × bandejas reales por carga', note: 'Capacidad técnica antes de descontar la manipulación.' },
    ],
    tableTitle: 'Tabla calculada con cargas completas', tableIntro: 'Usa únicamente la carga verificada de 6 bandejas y el ciclo de 2 minutos. Los volúmenes diarios son ejemplos de planificación.',
    tableHeaders: ['Bandejas a lavar', 'Ciclos completos', 'Tiempo de máquina', 'Parte de la hora técnica de 180'], tableNote: 'Importante: el tiempo de máquina no es tiempo total de trabajo. Mida y añada la manipulación.',
    ceilingTitle: 'Por qué 180 bandejas/hora es un techo', ceilingIntro: 'La aritmética 6 × 30 = 180 es correcta; el error está en interpretarla como rendimiento garantizado.',
    ceilingItems: ['Carga completa: cada ciclo lleva seis bandejas estándar. Con cuatro, la salida de máquina en 60 minutos es 120.', 'Ciclos consecutivos: el siguiente empieza inmediatamente. Toda manipulación queda fuera de los dos minutos.', 'Artículo estándar: otros utensilios tienen patrones de carga distintos; confirme cada tamaño.'],
    workflowTitle: 'Convierta el cálculo en una prueba de turno', workflowIntro: 'Diez minutos de observación valen más que inventar un “factor de eficiencia”.',
    workflowSteps: ['Cuente y agrupe las bandejas de un bloque representativo.', 'Cargue como lo hace el personal y anote el promedio por carga.', 'Mida desde el inicio de un ciclo hasta el inicio del siguiente, incluida la manipulación.', 'Calcule con esos datos y deje margen para picos, relavado y piezas irregulares.'],
    decisionTitle: 'Qué significa el resultado para su compra', decision: ['Si los minutos de máquina más la manipulación caben con holgura, una unidad tiene capacidad. Si solo cabe con racks perfectos y sin manipulación, el plan es demasiado ajustado.', 'Si no cabe, pruebe primero racks completos, preparación previa o dos ventanas. Cuando el cuello de botella es la mezcla de bandejas, una prueba de carga real es la evidencia decisiva.'],
    nextTitle: 'Verifique antes de pedir', nextIntro: 'Revise los datos, confirme compatibilidad, prepare el sitio y envíe su volumen y ventana para una respuesta documentada.',
    linkLabels: { product: 'resumen del producto JD-3', specifications: 'especificaciones completas', trayFit: 'compatibilidad 600×400', installation: 'lista de preinstalación', quote: 'solicitar comprobación de capacidad' },
  },

  fr: {
    title: 'Combien de plaques un lave-plaques de boulangerie peut-il traiter ? Calculateur de capacité réelle',
    description: 'Calculez la capacité réellement nécessaire à votre boulangerie. Convertissez les plaques par jour en cycles, minutes machine et fenêtre de lavage avec la charge vérifiée du JD-3 : 6 plaques par cycle de 2 minutes.',
    tldr: 'Le JD-3 accepte au maximum <strong>6 plaques standard par cycle de 2 minutes</strong>, soit 30 cycles ou <strong>180 plaques par heure</strong> avec des paniers pleins en continu. Dimensionnement : <strong>cycles/jour = plaques/jour ÷ plaques réelles par charge</strong>, puis <strong>minutes machine = cycles × 2</strong>. Ajoutez ensuite le temps réellement mesuré pour racler, charger, décharger et attendre. Pour 120 plaques standard : 20 cycles pleins et 40 minutes machine. Les 180 plaques/heure sont un plafond technique, pas une promesse de service.',
    faqs: [
      { q: 'Combien de plaques le JD-3 lave-t-il par heure ?', a: 'Le maximum publié est de 180 plaques standard par heure : 6 plaques multipliées par 30 cycles de deux minutes. Il suppose des paniers pleins et aucun intervalle. La production réelle baisse avec les charges partielles et la manutention.' },
      { q: 'Combien de cycles pour 120 plaques ?', a: 'À 6 plaques standard par panier plein, il faut 20 cycles, soit 40 minutes machine. Ajoutez le temps de manutention mesuré dans votre laboratoire.' },
      { q: 'Pourquoi ne pas planifier systématiquement 180 plaques/heure ?', a: 'Ce chiffre suppose 100 % de remplissage et zéro seconde entre les cycles. C’est une limite machine, pas une garantie d’organisation. Utilisez la charge moyenne réelle et intégrez la manutention.' },
      { q: 'Et si je charge moins de six plaques ?', a: 'Utilisez votre moyenne réelle. À quatre plaques par charge, divisez le volume journalier par quatre. Un panier incomplet ne raccourcit pas le cycle de deux minutes.' },
      { q: 'Comment savoir si une seule machine suffit ?', a: 'Calculez les cycles, multipliez par deux minutes, puis comparez ce temps plus la manutention mesurée à votre fenêtre disponible. Si cela ne tient pas, testez le remplissage, la préparation et des fenêtres séparées, puis demandez un dimensionnement documenté.' },
    ],
    introTitle: 'Réponse courte : la capacité dépend du flux réel',
    intro: ['La vraie question derrière « combien par heure ? » est : une machine finira-t-elle avant la prochaine production ? Le catalogue seul ne répond pas. Il faut le volume journalier, la charge réelle et la fenêtre disponible.', 'Les faits vérifiés du JD-3 sont un panier de 650×550 mm, 6 plaques standard par charge, un cycle standard de 2 minutes et un maximum publié de 30 cycles ou 180 plaques/heure. La méthode sépare ces faits des hypothèses de personnel.'],
    inputsTitle: 'Commencez par trois chiffres de votre boulangerie', inputsIntro: 'Prenez une journée chargée normale, pas la plus calme ni une estimation.',
    inputs: ['Plaques par jour, y compris les réutilisations pendant le service.', 'Plaques réelles par charge : la moyenne permise par votre assortiment. Six est la charge vérifiée pour les plaques standard.', 'Fenêtre de lavage : minutes entre l’arrivée du lot sale et l’échéance. Calculez chaque fenêtre séparément.'],
    formulaTitle: 'Les trois formules utiles', formulaIntro: 'Arrondissez les cycles au supérieur : une fraction exige quand même un cycle complet.',
    formulas: [
      { name: 'Cycles nécessaires par jour', formula: 'plafond(plaques/jour ÷ plaques réelles/charge)', note: 'Utilisez la charge mesurée ; le maximum vérifié est 6 plaques standard.' },
      { name: 'Minutes machine par jour', formula: 'cycles nécessaires × 2 minutes', note: 'Hors raclage, chargement, déchargement, tri et attente.' },
      { name: 'Capacité de la fenêtre', formula: 'plancher(minutes disponibles ÷ 2) × plaques réelles/charge', note: 'Capacité technique avant déduction de la manutention.' },
    ],
    tableTitle: 'Tableau avec paniers pleins', tableIntro: 'Il utilise uniquement 6 plaques par charge et 2 minutes par cycle. Les volumes sont des exemples de planification.',
    tableHeaders: ['Plaques à laver', 'Cycles pleins', 'Temps machine', 'Part de l’heure technique à 180'], tableNote: 'Le temps machine n’est pas le temps de travail total : mesurez et ajoutez la manutention.',
    ceilingTitle: 'Pourquoi 180 plaques/heure reste un plafond', ceilingIntro: 'Le calcul 6 × 30 = 180 est juste ; son interprétation comme rendement garanti ne l’est pas.',
    ceilingItems: ['Panier plein : avec quatre plaques par cycle, la sortie machine en 60 minutes est 120.', 'Enchaînement immédiat : toute manutention est hors des deux minutes.', 'Articles standard : casseroles, bols et grandes pièces ont d’autres schémas de chargement.'],
    workflowTitle: 'Faites un essai en conditions réelles', workflowIntro: 'Dix minutes d’observation valent mieux qu’un facteur d’efficacité inventé.',
    workflowSteps: ['Comptez et classez les plaques d’un bloc représentatif.', 'Chargez normalement et notez la moyenne par panier.', 'Mesurez du début d’un cycle au début du suivant, manutention comprise.', 'Calculez et gardez une marge pour pics, relavage et pièces irrégulières.'],
    decisionTitle: 'Interpréter le résultat avant l’achat', decision: ['Si le temps machine et la manutention tiennent confortablement, une machine suffit. Si tout dépend de paniers parfaits sans manutention, le plan est trop serré.', 'Sinon, testez d’abord le remplissage, la mise en attente et deux fenêtres de lavage. Quand l’assortiment bloque, un essai avec vos vraies plaques est la preuve utile.'],
    nextTitle: 'Vérifiez avant de commander', nextIntro: 'Contrôlez les données, la compatibilité, le site et transmettez volume plus fenêtre pour un dimensionnement documenté.',
    linkLabels: { product: 'présentation du JD-3', specifications: 'spécifications complètes', trayFit: 'compatibilité 600×400', installation: 'checklist de pré-installation', quote: 'demander une vérification de capacité' },
  },

  de: {
    title: 'Wie viele Bleche schafft eine Bäckerei-Spülmaschine? Kapazitätsrechner für die echte Produktion',
    description: 'Berechnen Sie die tatsächlich benötigte Spülkapazität: Bleche pro Tag in Zyklen, Maschinenminuten und Spülfenster umrechnen – mit der geprüften JD-3-Ladung von 6 Blechen je 2-Minuten-Zyklus.',
    tldr: 'Die JD-3 hat ein geprüftes Maximum von <strong>6 Standardblechen pro 2-Minuten-Zyklus</strong>: 30 Zyklen bzw. <strong>180 Bleche pro Stunde</strong> bei vollen, lückenlos gefahrenen Körben. Rechnung: <strong>Zyklen/Tag = Bleche/Tag ÷ tatsächlich geladene Bleche</strong>; <strong>Maschinenminuten = Zyklen × 2</strong>. Addieren Sie Ihre gemessene Zeit für Abräumen, Be- und Entladen sowie Warten. 120 Standardbleche benötigen 20 volle Zyklen und 40 Maschinenminuten. 180 Bleche/Stunde sind die technische Obergrenze, kein Schichtversprechen.',
    faqs: [
      { q: 'Wie viele Bleche spült die JD-3 pro Stunde?', a: 'Das veröffentlichte Maximum beträgt 180 Standardbleche: 6 je Zyklus mal 30 Zwei-Minuten-Zyklen. Dafür müssen alle Körbe voll sein und direkt aufeinander folgen. Teilladungen und Handhabung senken den realen Durchsatz.' },
      { q: 'Wie viele Zyklen brauchen 120 Bleche?', a: 'Bei 6 Standardblechen je Vollladung sind es 20 Zyklen bzw. 40 Maschinenminuten. Addieren Sie die in Ihrer Backstube gemessene Handhabungszeit.' },
      { q: 'Warum nicht immer mit 180 Blechen pro Stunde planen?', a: 'Die Zahl setzt volle Körbe und keine Pause zwischen Zyklen voraus. Sie ist eine Maschinengrenze, keine Prozessgarantie. Rechnen Sie mit Ihrer echten Durchschnittsladung.' },
      { q: 'Was, wenn meist weniger als sechs Bleche geladen werden?', a: 'Nutzen Sie den realen Mittelwert. Bei vier Blechen teilen Sie das Tagesvolumen durch vier. Ein teilgefüllter Korb verkürzt den Zwei-Minuten-Zyklus nicht.' },
      { q: 'Woher weiß ich, ob eine Maschine reicht?', a: 'Berechnen Sie Zyklen und Maschinenzeit und vergleichen Sie Maschinen- plus gemessene Handhabungszeit mit Ihrem Spülfenster. Passt es nicht, prüfen Sie volle Körbe, Bereitstellung und geteilte Fenster; danach ist eine dokumentierte Auslegung nötig.' },
    ],
    introTitle: 'Kurzantwort: Kapazität ist eine Ablaufrechnung',
    intro: ['Hinter „wie viele Bleche pro Stunde?“ steckt: Ist alles vor der nächsten Produktion sauber? Der Prospektwert allein reicht nicht. Benötigt werden Tagesmenge, echte Korbbeladung und verfügbares Zeitfenster.', 'Verifizierte JD-3-Daten: 650×550-mm-Korb, 6 Standardbleche je Ladung, 2-Minuten-Standardzyklus und maximal 30 Zyklen bzw. 180 Bleche/Stunde. Die Methode trennt diese Fakten von Personalannahmen.'],
    inputsTitle: 'Drei Zahlen aus Ihrer Bäckerei', inputsIntro: 'Nehmen Sie einen normal starken Tag, nicht den ruhigsten und keine Vermutung.',
    inputs: ['Bleche pro Tag einschließlich Mehrfachnutzung.', 'Tatsächliche Bleche je Ladung; sechs ist das geprüfte Maximum für Standardbleche.', 'Spülfenster in Minuten bis zur benötigten sauberen Ladung; getrennte Fenster separat rechnen.'],
    formulaTitle: 'Drei Formeln für Käufer', formulaIntro: 'Zyklen aufrunden: Auch ein Rest braucht einen vollständigen Zyklus.',
    formulas: [
      { name: 'Erforderliche Zyklen', formula: 'aufrunden(Bleche/Tag ÷ Bleche/Ladung)', note: 'Gemessene Ladung einsetzen; geprüftes Maximum: 6 Standardbleche.' },
      { name: 'Maschinenminuten', formula: 'Zyklen × 2 Minuten', note: 'Ohne Abräumen, Be- und Entladen, Sortieren und Warten.' },
      { name: 'Fensterkapazität', formula: 'abrunden(Fensterminuten ÷ 2) × Bleche/Ladung', note: 'Technische Kapazität vor Abzug der Handhabung.' },
    ],
    tableTitle: 'Rechentabelle für volle Standardblech-Ladungen', tableIntro: 'Nur geprüfte 6 Bleche und 2 Minuten; Tagesmengen sind Planungsbeispiele.',
    tableHeaders: ['Zu spülende Bleche', 'Volle Zyklen', 'Maschinenzeit', 'Anteil der technischen 180er-Stunde'], tableNote: 'Maschinenzeit ist nicht gesamte Arbeitszeit. Handhabung messen und addieren.',
    ceilingTitle: 'Warum 180 Bleche/Stunde nur die Obergrenze sind', ceilingIntro: '6 × 30 = 180 stimmt; falsch ist die Deutung als garantierter Schichtdurchsatz.',
    ceilingItems: ['Vollladung: Vier Bleche je Zyklus ergeben in 60 Maschinenminuten 120.', 'Lückenlos: Jede Handhabung liegt außerhalb der zwei Minuten.', 'Standardartikel: Schüsseln und große Backformen haben andere Beladungsmuster.'],
    workflowTitle: 'Rechnung im Schichttest prüfen', workflowIntro: 'Zehn Minuten Beobachtung sind besser als ein erfundener Effizienzfaktor.',
    workflowSteps: ['Bleche eines typischen Produktionsblocks zählen und gruppieren.', 'Normal beladen und Durchschnitt je Korb notieren.', 'Vom Start eines Zyklus bis zum nächsten inklusive Handhabung messen.', 'Mit Messwerten rechnen und Reserve für Spitzen, Nachspülen und Sonderteile lassen.'],
    decisionTitle: 'Was das Ergebnis für den Kauf bedeutet', decision: ['Passen Maschinen- und Handhabungszeit bequem ins Fenster, reicht eine Maschine. Geht es nur mit perfekten Körben ohne Handhabung, ist der Plan zu knapp.', 'Passt es nicht, zuerst volle Bereitstellung, früheres Spülen oder zwei Fenster testen. Blockiert der Teilemix, liefert nur ein Test mit Ihren Blechen belastbare Evidenz.'],
    nextTitle: 'Vor der Bestellung prüfen', nextIntro: 'Daten, Passform und Standort prüfen und Menge plus Zeitfenster für eine dokumentierte Auslegung senden.',
    linkLabels: { product: 'JD-3-Produktübersicht', specifications: 'vollständige Spezifikationen', trayFit: '600×400-Kompatibilität', installation: 'Vor-Installations-Checkliste', quote: 'Kapazitätsprüfung anfragen' },
  },

  ru: {
    title: 'Сколько противней обработает мойка для пекарни? Калькулятор реальной производительности',
    description: 'Рассчитайте нужную производительность мойки: переведите противни в день в циклы, машинные минуты и окно мойки по проверенной загрузке JD-3 — 6 противней за 2-минутный цикл.',
    tldr: 'Проверенный максимум JD-3 — <strong>6 стандартных противней за 2-минутный цикл</strong>: 30 циклов или <strong>180 противней в час</strong> при полной загрузке без пауз. Расчёт: <strong>циклы/день = противни/день ÷ фактическая загрузка</strong>; <strong>машинные минуты = циклы × 2</strong>. Затем прибавьте измеренное время на очистку остатков, загрузку, выгрузку и ожидание. Для 120 стандартных противней нужно 20 полных циклов и 40 машинных минут. 180 противней/ч — технический потолок, а не обещание для каждой смены.',
    faqs: [
      { q: 'Сколько противней JD-3 моет за час?', a: 'Паспортный максимум — 180 стандартных противней: 6 за цикл × 30 двухминутных циклов. Он требует полных корзин и работы без пауз; неполная загрузка и ручные операции снижают фактический результат.' },
      { q: 'Сколько циклов нужно для 120 противней?', a: 'При 6 стандартных противнях за полную загрузку нужно 20 циклов, то есть 40 минут машинного времени. Добавьте измеренное время ручных операций.' },
      { q: 'Почему нельзя всегда планировать 180 противней в час?', a: 'Расчёт предполагает 100% заполнение и нулевой интервал между циклами. Это предел машины, а не гарантия процесса. Используйте среднюю фактическую загрузку.' },
      { q: 'Что делать, если обычно загружают меньше шести?', a: 'Берите реальное среднее. При четырёх противнях делите дневной объём на четыре. Неполная корзина не сокращает двухминутный цикл.' },
      { q: 'Как понять, хватит ли одной машины?', a: 'Сравните машинное время плюс измеренные ручные операции с доступным окном. Если не помещается, проверьте полные корзины, подготовку и раздельные окна; затем запросите документированный расчёт по вашему набору.' },
    ],
    introTitle: 'Короткий ответ: производительность считают по процессу',
    intro: ['За вопросом «сколько в час?» стоит другой: успеет ли одна машина до следующей выпечки? Одной цифры из каталога мало — нужны дневной объём, реальная загрузка и доступное время.', 'Проверенные данные JD-3: корзина 650×550 мм, 6 стандартных противней, стандартный цикл 2 минуты, максимум 30 циклов или 180 противней/ч. Метод отделяет факты машины от предположений о персонале.'],
    inputsTitle: 'Начните с трёх чисел своей пекарни', inputsIntro: 'Берите обычный загруженный день, а не самый тихий и не догадку.',
    inputs: ['Противни в день, включая повторное использование.', 'Фактические противни за загрузку; шесть — проверенный максимум для стандартных.', 'Окно мойки в минутах до срока готовности; отдельные окна считайте отдельно.'],
    formulaTitle: 'Три формулы для покупателя', formulaIntro: 'Округляйте циклы вверх: остаток всё равно требует полного цикла.',
    formulas: [
      { name: 'Требуемые циклы', formula: 'округлить вверх(противни/день ÷ противни/загрузка)', note: 'Используйте измеренную загрузку; максимум — 6 стандартных.' },
      { name: 'Машинные минуты', formula: 'циклы × 2 минуты', note: 'Без очистки, загрузки, выгрузки, сортировки и ожидания.' },
      { name: 'Ёмкость окна', formula: 'округлить вниз(минуты окна ÷ 2) × противни/загрузка', note: 'Техническая ёмкость до вычета ручных операций.' },
    ],
    tableTitle: 'Таблица для полной загрузки', tableIntro: 'Использованы только проверенные 6 противней и 2 минуты; дневные объёмы — примеры.',
    tableHeaders: ['Противней', 'Полных циклов', 'Машинное время', 'Доля технического часа 180'], tableNote: 'Машинное время не равно общему: измерьте и добавьте ручные операции.',
    ceilingTitle: 'Почему 180 противней/ч — потолок', ceilingIntro: '6 × 30 = 180 арифметически верно; неверно считать это гарантией смены.',
    ceilingItems: ['Полная загрузка: четыре противня за цикл дают 120 за 60 машинных минут.', 'Без пауз: все ручные операции находятся вне двух минут.', 'Стандартные предметы: для мисок и крупной утвари схема загрузки иная.'],
    workflowTitle: 'Проверьте расчёт на смене', workflowIntro: 'Десять минут наблюдения лучше выдуманного коэффициента.',
    workflowSteps: ['Посчитайте и сгруппируйте типичный блок противней.', 'Загружайте как обычно и запишите среднее.', 'Измерьте время от старта до следующего старта с ручными операциями.', 'Рассчитайте и оставьте запас на пик, перемывку и нестандартные предметы.'],
    decisionTitle: 'Что результат означает для покупки', decision: ['Если машинное и ручное время уверенно помещается, одной машины достаточно. Если расчёт сходится только при идеальных корзинах без ручного времени, запас слишком мал.', 'Если не помещается, сначала проверьте полную комплектацию, ранний старт или два окна. При сложном наборе предметов нужен тест с вашими противнями.'],
    nextTitle: 'Проверьте до заказа', nextIntro: 'Сверьте характеристики, совместимость и площадку, затем отправьте объём и окно для документированного расчёта.',
    linkLabels: { product: 'обзор JD-3', specifications: 'полные характеристики', trayFit: 'совместимость 600×400', installation: 'чек-лист монтажа', quote: 'запросить расчёт мощности' },
  },

  th: {
    title: 'เครื่องล้างถาดเบเกอรี่ล้างได้กี่ถาด? เครื่องคำนวณกำลังการผลิตจริง',
    description: 'คำนวณกำลังล้างที่ร้านคุณต้องใช้จริง แปลงจำนวนถาดต่อวันเป็นรอบ นาทีเครื่อง และช่วงเวลาล้าง ด้วยข้อมูล JD-3 ที่ยืนยันแล้ว: 6 ถาดต่อรอบ 2 นาที',
    tldr: 'JD-3 มีค่าสูงสุดที่ยืนยันแล้ว <strong>6 ถาดมาตรฐานต่อรอบ 2 นาที</strong> หรือ 30 รอบและ <strong>180 ถาดต่อชั่วโมง</strong> เมื่อบรรทุกเต็มและเดินรอบต่อเนื่อง วิธีคำนวณ: <strong>รอบต่อวัน = ถาดต่อวัน ÷ ถาดจริงต่อโหลด</strong>; <strong>นาทีเครื่อง = จำนวนรอบ × 2</strong> แล้วบวกเวลาที่วัดจริงสำหรับปาดเศษ โหลด ยกออก และรอ ถาดมาตรฐาน 120 ใบต้องใช้ 20 รอบเต็มและเวลาเครื่อง 40 นาที ตัวเลข 180 ถาด/ชั่วโมงคือเพดานทางเทคนิค ไม่ใช่คำรับรองทุกกะ',
    faqs: [
      { q: 'JD-3 ล้างถาดได้กี่ใบต่อชั่วโมง?', a: 'ค่าสูงสุดคือ 180 ถาดมาตรฐาน: 6 ถาดคูณ 30 รอบ รอบละสองนาที ต้องโหลดเต็มและต่อเนื่อง การโหลดไม่เต็มและเวลาจัดการทำให้ผลจริงลดลง' },
      { q: '120 ถาดต้องใช้กี่รอบ?', a: 'ถ้าโหลดเต็ม 6 ถาด ต้องใช้ 20 รอบ หรือเวลาเครื่อง 40 นาที แล้วบวกเวลาจัดการที่วัดจากครัวจริง' },
      { q: 'ทำไมไม่ควรวางแผน 180 ถาดทุกชั่วโมง?', a: 'เพราะสมมติว่าแร็คเต็ม 100% และไม่มีช่องว่างระหว่างรอบ เป็นขีดจำกัดเครื่อง ไม่ใช่การรับรองเวิร์กโฟลว์' },
      { q: 'ถ้าโหลดน้อยกว่าหกถาดล่ะ?', a: 'ใช้ค่าเฉลี่ยจริง ถ้าเฉลี่ยสี่ถาด ให้หารจำนวนต่อวันด้วยสี่ แร็คไม่เต็มไม่ได้ทำให้รอบสองนาทีสั้นลง' },
      { q: 'จะรู้ได้อย่างไรว่าเครื่องเดียวพอ?', a: 'คำนวณเวลาเครื่องแล้วบวกเวลาจัดการ เปรียบเทียบกับช่วงเวลาที่มี หากไม่พอให้ทดสอบโหลดเต็ม การเตรียมแร็ค และแบ่งช่วงล้าง ก่อนขอการคำนวณจากผู้ขาย' },
    ],
    introTitle: 'คำตอบสั้น: ต้องคำนวณจากเวิร์กโฟลว์',
    intro: ['คำถามจริงเบื้องหลัง “กี่ถาดต่อชั่วโมง” คือเครื่องเดียวล้างเสร็จก่อนการผลิตครั้งถัดไปหรือไม่ ตัวเลขโบรชัวร์อย่างเดียวไม่พอ ต้องรู้จำนวนต่อวัน โหลดจริง และเวลาที่มี', 'ข้อมูล JD-3 ที่ยืนยันแล้วคือแร็ค 650×550 มม. โหลดถาดมาตรฐาน 6 ใบ รอบมาตรฐาน 2 นาที สูงสุด 30 รอบหรือ 180 ถาด/ชั่วโมง วิธีนี้แยกข้อเท็จจริงเครื่องออกจากสมมติฐานพนักงาน'],
    inputsTitle: 'เริ่มจากตัวเลขสามตัวของร้าน', inputsIntro: 'ใช้วันยุ่งตามปกติ ไม่ใช่วันที่เงียบที่สุดหรือการเดา',
    inputs: ['ถาดต่อวัน รวมถาดที่ใช้ซ้ำในกะเดียวกัน', 'ถาดจริงต่อโหลด ค่า 6 คือสูงสุดที่ยืนยันสำหรับถาดมาตรฐาน', 'ช่วงเวลาล้างเป็นนาทีจนต้องได้ถาดสะอาด หากแบ่งช่วงให้คำนวณแยก'],
    formulaTitle: 'สามสูตรที่ผู้ซื้อต้องใช้', formulaIntro: 'ปัดจำนวนรอบขึ้น เพราะเศษรอบก็ต้องเดินเต็มรอบ',
    formulas: [
      { name: 'รอบที่ต้องใช้ต่อวัน', formula: 'ปัดขึ้น(ถาดต่อวัน ÷ ถาดจริงต่อโหลด)', note: 'ใช้ค่าที่วัดจริง; สูงสุด 6 ถาดมาตรฐาน' },
      { name: 'นาทีเครื่องต่อวัน', formula: 'จำนวนรอบ × 2 นาที', note: 'ไม่รวมปาดเศษ โหลด ยกออก คัดแยก และรอ' },
      { name: 'ความจุในช่วงเวลา', formula: 'ปัดลง(นาทีที่มี ÷ 2) × ถาดจริงต่อโหลด', note: 'เป็นความจุทางเทคนิคก่อนหักเวลาจัดการ' },
    ],
    tableTitle: 'ตารางสำหรับโหลดเต็ม', tableIntro: 'ใช้เฉพาะข้อมูล 6 ถาดและ 2 นาทีที่ยืนยันแล้ว จำนวนรายวันเป็นตัวอย่างวางแผน',
    tableHeaders: ['ถาดที่ต้องล้าง', 'รอบเต็ม', 'เวลาเครื่อง', 'สัดส่วนของชั่วโมงเทคนิค 180 ถาด'], tableNote: 'เวลาเครื่องไม่ใช่เวลางานทั้งหมด ต้องวัดและบวกเวลาจัดการ',
    ceilingTitle: 'ทำไม 180 ถาด/ชั่วโมงเป็นเพียงเพดาน', ceilingIntro: '6 × 30 = 180 ถูกต้อง แต่ไม่ใช่ผลที่รับรองทุกกะ',
    ceilingItems: ['ต้องโหลดเต็ม: สี่ถาดต่อรอบให้ผลเครื่อง 120 ถาดใน 60 นาที', 'ต้องต่อเนื่อง: เวลาจัดการทั้งหมดอยู่นอกสองนาที', 'ใช้กับถาดมาตรฐาน: ชามและอุปกรณ์ใหญ่มีรูปแบบโหลดต่างกัน'],
    workflowTitle: 'ทดสอบด้วยกะจริง', workflowIntro: 'สังเกตสิบนาทีดีกว่าสร้าง “ค่าประสิทธิภาพ” ขึ้นเอง',
    workflowSteps: ['นับและแยกถาดจากช่วงผลิตตัวอย่าง', 'โหลดตามวิธีจริงและจดค่าเฉลี่ย', 'จับเวลาจากเริ่มรอบหนึ่งถึงเริ่มรอบถัดไปรวมการจัดการ', 'คำนวณแล้วเผื่อวันพีค ล้างซ้ำ และของรูปทรงพิเศษ'],
    decisionTitle: 'ผลลัพธ์บอกอะไรต่อการซื้อ', decision: ['ถ้าเวลาเครื่องบวกการจัดการอยู่ในช่วงอย่างสบาย เครื่องเดียวพอ ถ้าพอดีเฉพาะแร็คสมบูรณ์และไม่มีเวลาจัดการ แผนแน่นเกินไป', 'ถ้าไม่พอ ให้ทดสอบการเตรียมแร็คเต็ม เริ่มล้างเร็วขึ้น หรือแบ่งสองช่วง หากชนิดภาชนะเป็นคอขวด ให้ทดสอบด้วยของจริง'],
    nextTitle: 'ยืนยันก่อนสั่งซื้อ', nextIntro: 'ตรวจข้อมูล ความพอดี และหน้างาน แล้วส่งจำนวนกับช่วงเวลาเพื่อรับคำตอบที่มีหลักฐาน',
    linkLabels: { product: 'ภาพรวม JD-3', specifications: 'สเปกทั้งหมด', trayFit: 'ความเข้ากันได้ 600×400', installation: 'เช็กลิสต์ก่อนติดตั้ง', quote: 'ขอตรวจสอบกำลังการผลิต' },
  },

  vi: {
    title: 'Máy rửa khay tiệm bánh xử lý được bao nhiêu khay? Bộ tính công suất thực tế',
    description: 'Tính công suất rửa thực sự cần cho tiệm bánh: đổi khay mỗi ngày thành số chu kỳ, phút máy và khung giờ rửa theo tải đã xác minh của JD-3: 6 khay mỗi chu kỳ 2 phút.',
    tldr: 'JD-3 có mức tối đa đã xác minh là <strong>6 khay tiêu chuẩn mỗi chu kỳ 2 phút</strong>: 30 chu kỳ hoặc <strong>180 khay/giờ</strong> khi mọi tải đều đầy và chạy liên tục. Tính như sau: <strong>chu kỳ/ngày = khay/ngày ÷ số khay thực tế mỗi tải</strong>; <strong>phút máy = chu kỳ × 2</strong>; sau đó cộng thời gian cạo cặn, nạp, dỡ và chờ đã đo tại cơ sở. Với 120 khay tiêu chuẩn cần 20 chu kỳ đầy và 40 phút máy. 180 khay/giờ là trần kỹ thuật, không phải cam kết cho mọi ca.',
    faqs: [
      { q: 'JD-3 rửa được bao nhiêu khay mỗi giờ?', a: 'Mức công bố tối đa là 180 khay tiêu chuẩn: 6 khay nhân 30 chu kỳ hai phút. Điều này đòi hỏi tải đầy và chạy liền; tải thiếu và thao tác thủ công làm giảm sản lượng thực.' },
      { q: '120 khay cần bao nhiêu chu kỳ?', a: 'Với tải đầy 6 khay tiêu chuẩn, cần 20 chu kỳ, tương đương 40 phút máy. Hãy cộng thời gian thao tác đo tại bếp.' },
      { q: 'Tại sao không nên luôn lập kế hoạch 180 khay/giờ?', a: 'Vì con số giả định giá đầy 100% và không có khoảng nghỉ giữa chu kỳ. Đây là giới hạn máy, không phải bảo đảm quy trình.' },
      { q: 'Nếu thường nạp ít hơn sáu khay thì sao?', a: 'Dùng mức trung bình thực. Nếu là bốn khay, chia khối lượng ngày cho bốn. Tải thiếu không làm chu kỳ hai phút ngắn hơn.' },
      { q: 'Làm sao biết một máy có đủ?', a: 'Tính phút máy, cộng thao tác thực đo rồi so với khung giờ. Nếu không vừa, thử tải đầy, chuẩn bị trước hoặc chia khung; nếu vẫn thiếu, yêu cầu nhà cung cấp tính theo bộ khay thật.' },
    ],
    introTitle: 'Câu trả lời ngắn: công suất là bài toán quy trình',
    intro: ['Câu hỏi thật sau “bao nhiêu khay mỗi giờ?” là một máy có dọn xong trước mẻ sản xuất sau không. Thông số quảng cáo chưa đủ; cần số khay ngày, tải thực và thời gian có sẵn.', 'Dữ liệu JD-3 đáng tin cậy: giá 650×550 mm, 6 khay tiêu chuẩn mỗi tải, chu kỳ chuẩn 2 phút, tối đa 30 chu kỳ hoặc 180 khay/giờ. Phương pháp tách dữ liệu máy khỏi giả định nhân sự.'],
    inputsTitle: 'Bắt đầu bằng ba con số của tiệm', inputsIntro: 'Dùng một ngày bận bình thường, không dùng ngày vắng nhất hay phỏng đoán.',
    inputs: ['Khay mỗi ngày, kể cả khay tái sử dụng trong ca.', 'Khay thực mỗi tải; sáu là tối đa đã xác minh cho khay tiêu chuẩn.', 'Khung giờ rửa tính bằng phút; nếu chia nhiều đợt, tính riêng từng đợt.'],
    formulaTitle: 'Ba công thức cần thiết', formulaIntro: 'Làm tròn số chu kỳ lên vì phần lẻ vẫn cần một chu kỳ đầy đủ.',
    formulas: [
      { name: 'Chu kỳ cần mỗi ngày', formula: 'làm tròn lên(khay/ngày ÷ khay thực/tải)', note: 'Dùng tải đã đo; tối đa 6 khay tiêu chuẩn.' },
      { name: 'Phút máy mỗi ngày', formula: 'chu kỳ × 2 phút', note: 'Không gồm cạo cặn, nạp, dỡ, phân loại và chờ.' },
      { name: 'Công suất trong khung', formula: 'làm tròn xuống(phút có sẵn ÷ 2) × khay thực/tải', note: 'Công suất kỹ thuật trước khi trừ thao tác.' },
    ],
    tableTitle: 'Bảng tải đầy tiêu chuẩn', tableIntro: 'Chỉ dùng dữ liệu 6 khay và 2 phút đã xác minh; số lượng ngày là ví dụ.',
    tableHeaders: ['Khay cần rửa', 'Chu kỳ đầy', 'Thời gian máy', 'Tỷ lệ giờ kỹ thuật 180 khay'], tableNote: 'Thời gian máy không phải tổng thời gian lao động. Hãy đo và cộng thao tác.',
    ceilingTitle: 'Vì sao 180 khay/giờ chỉ là trần', ceilingIntro: 'Phép tính 6 × 30 = 180 đúng; coi đó là sản lượng ca được bảo đảm thì không.',
    ceilingItems: ['Tải đầy: bốn khay mỗi chu kỳ chỉ cho 120 khay trong 60 phút máy.', 'Chạy liền: mọi thao tác nằm ngoài hai phút.', 'Đồ tiêu chuẩn: tô và dụng cụ lớn có cách xếp khác.'],
    workflowTitle: 'Kiểm tra bằng ca làm thật', workflowIntro: 'Mười phút quan sát tốt hơn tự đặt “hệ số hiệu suất”.',
    workflowSteps: ['Đếm và nhóm khay của một đợt sản xuất đại diện.', 'Nạp như nhân viên thường làm và ghi trung bình.', 'Đo từ lúc bắt đầu chu kỳ này đến chu kỳ sau, gồm thao tác.', 'Tính và chừa biên cho ngày cao điểm, rửa lại và đồ bất thường.'],
    decisionTitle: 'Kết quả có ý nghĩa gì khi mua', decision: ['Nếu thời gian máy cộng thao tác nằm thoải mái trong khung, một máy đủ. Nếu chỉ vừa khi mọi giá hoàn hảo và không có thao tác, kế hoạch quá sát.', 'Nếu không vừa, thử chuẩn bị tải đầy, rửa sớm hoặc chia hai khung. Khi hỗn hợp vật dụng là nút thắt, thử với khay thật mới là bằng chứng.'],
    nextTitle: 'Xác minh trước khi đặt', nextIntro: 'Kiểm tra thông số, độ vừa và mặt bằng, rồi gửi số lượng cùng khung giờ để nhận tính toán có căn cứ.',
    linkLabels: { product: 'tổng quan JD-3', specifications: 'thông số đầy đủ', trayFit: 'tương thích 600×400', installation: 'checklist trước lắp đặt', quote: 'yêu cầu kiểm tra công suất' },
  },

  ar: {
    title: 'كم صينية تستوعب غسالة صواني المخبز؟ حاسبة السعة للإنتاج الفعلي',
    description: 'احسب سعة الغسيل التي يحتاجها مخبزك فعلاً. حوّل الصواني اليومية إلى دورات ودقائق تشغيل ونافذة تنظيف باستخدام حمولة JD-3 الموثقة: 6 صوانٍ لكل دورة مدتها دقيقتان.',
    tldr: 'الحد الموثق لـ JD-3 هو <strong>6 صوانٍ قياسية في دورة مدتها دقيقتان</strong>: 30 دورة أو <strong>180 صينية في الساعة</strong> عند اكتمال كل حمولة واستمرار الدورات بلا توقف. الحساب: <strong>الدورات اليومية = الصواني اليومية ÷ الصواني الفعلية في الحمولة</strong>؛ <strong>دقائق تشغيل الآلة = الدورات × 2</strong>؛ ثم أضف الوقت المقاس للكشط والتحميل والتفريغ والانتظار. تحتاج 120 صينية قياسية إلى 20 دورة كاملة و40 دقيقة تشغيل. رقم 180 صينية/ساعة سقف تقني وليس وعداً لكل وردية.',
    faqs: [
      { q: 'كم صينية تغسل JD-3 في الساعة؟', a: 'الحد المنشور 180 صينية قياسية: 6 صوانٍ مضروبة في 30 دورة من دقيقتين. يتطلب حمولة كاملة ودورات متتالية؛ الحمولة الجزئية والمناولة تخفض الناتج الفعلي.' },
      { q: 'كم دورة تحتاج 120 صينية؟', a: 'عند 6 صوانٍ قياسية في الحمولة الكاملة تحتاج 20 دورة، أي 40 دقيقة تشغيل آلة. أضف وقت المناولة المقاس في مطبخك.' },
      { q: 'لماذا لا أخطط دائماً على 180 صينية في الساعة؟', a: 'لأنه يفترض امتلاء الرف 100% وعدم وجود وقت بين الدورات. إنه حد للآلة لا ضمان لسير العمل. استخدم متوسط حمولتك الحقيقي.' },
      { q: 'ماذا لو كانت الحمولة أقل من ست صوانٍ؟', a: 'استخدم المتوسط الفعلي. إذا كان أربع صوانٍ فاقسم الحجم اليومي على أربعة. الحمولة الجزئية لا تقصر دورة الدقيقتين.' },
      { q: 'كيف أعرف إن كانت آلة واحدة تكفي؟', a: 'احسب وقت الآلة وأضف المناولة المقاسة وقارنه بالنافذة المتاحة. إن لم يتسع، اختبر الحمولات الكاملة والتجهيز وتقسيم النافذة، ثم اطلب تحجيمًا موثقًا حسب صوانيك.' },
    ],
    introTitle: 'الجواب المختصر: السعة حساب لسير العمل',
    intro: ['السؤال الحقيقي خلف «كم صينية في الساعة؟» هو: هل تنهي آلة واحدة العمل قبل دفعة الإنتاج التالية؟ رقم الكتيب وحده لا يكفي؛ تحتاج الحجم اليومي والحمولة الحقيقية والوقت المتاح.', 'حقائق JD-3 الموثقة: رف 650×550 مم، 6 صوانٍ قياسية للحمولة، دورة قياسية دقيقتان، وحد أقصى 30 دورة أو 180 صينية/ساعة. تفصل الطريقة هذه الحقائق عن افتراضات العمالة.'],
    inputsTitle: 'ابدأ بثلاثة أرقام من مخبزك', inputsIntro: 'استخدم يوماً مزدحماً عادياً، لا أهدأ يوم ولا تخميناً.',
    inputs: ['الصواني يومياً، بما فيها المعاد استخدامها في الوردية.', 'الصواني الفعلية في الحمولة؛ ست هو الحد الموثق للصواني القياسية.', 'نافذة الغسيل بالدقائق حتى موعد الحاجة؛ احسب كل نافذة منفصلة.'],
    formulaTitle: 'المعادلات الثلاث للمشتري', formulaIntro: 'قرّب عدد الدورات إلى الأعلى؛ الكسر يحتاج دورة كاملة.',
    formulas: [
      { name: 'الدورات المطلوبة يومياً', formula: 'تقريب لأعلى(الصواني اليومية ÷ الصواني الفعلية/حمولة)', note: 'استخدم قياسك؛ الحد 6 صوانٍ قياسية.' },
      { name: 'دقائق تشغيل الآلة', formula: 'الدورات × دقيقتين', note: 'لا تشمل الكشط والتحميل والتفريغ والفرز والانتظار.' },
      { name: 'سعة النافذة', formula: 'تقريب لأسفل(دقائق النافذة ÷ 2) × الصواني/حمولة', note: 'سعة تقنية قبل خصم المناولة.' },
    ],
    tableTitle: 'جدول الحمولات القياسية الكاملة', tableIntro: 'يستخدم فقط 6 صوانٍ ودقيقتين الموثقتين؛ الأحجام اليومية أمثلة تخطيط.',
    tableHeaders: ['الصواني', 'الدورات الكاملة', 'وقت الآلة', 'حصة الساعة التقنية 180'], tableNote: 'وقت الآلة ليس وقت العمل الكلي. قِس المناولة وأضفها.',
    ceilingTitle: 'لماذا 180 صينية/ساعة مجرد سقف', ceilingIntro: 'الحساب 6 × 30 = 180 صحيح؛ اعتباره ناتجاً مضموناً للوردية غير صحيح.',
    ceilingItems: ['حمولة كاملة: أربع صوانٍ للدورة تعطي 120 في 60 دقيقة آلة.', 'تتابع فوري: كل المناولة خارج الدقيقتين.', 'أدوات قياسية: للأوعية والقطع الكبيرة أنماط تحميل مختلفة.'],
    workflowTitle: 'اختبر الحساب في وردية حقيقية', workflowIntro: 'عشر دقائق من الملاحظة أفضل من اختراع «عامل كفاءة».',
    workflowSteps: ['عدّ صواني دفعة إنتاج ممثلة وصنّفها.', 'حمّل بالطريقة المعتادة وسجل المتوسط.', 'قِس من بدء دورة إلى بدء التالية مع المناولة.', 'احسب واترك هامشاً للذروة وإعادة الغسل والقطع غير المنتظمة.'],
    decisionTitle: 'ماذا تعني النتيجة للشراء', decision: ['إذا اتسع الوقت للآلة والمناولة براحة فآلة واحدة تكفي. إذا نجح فقط برفوف مثالية ومن دون مناولة فالخطة ضيقة جداً.', 'إن لم يتسع، اختبر تجهيز الرفوف الكاملة أو الغسل المبكر أو نافذتين. عندما تكون تشكيلة الأدوات هي القيد، فالاختبار بصوانيك هو الدليل.'],
    nextTitle: 'تحقق قبل الطلب', nextIntro: 'راجع البيانات والملاءمة والموقع ثم أرسل الحجم والنافذة للحصول على تحجيم موثق.',
    linkLabels: { product: 'نظرة عامة على JD-3', specifications: 'المواصفات الكاملة', trayFit: 'توافق 600×400', installation: 'قائمة ما قبل التركيب', quote: 'طلب فحص السعة' },
  },

  zh: {
    title: '烘焙托盘清洗机每小时能洗多少盘？真实产能计算器',
    description: '按实际业务量计算烘焙托盘清洗机所需产能：依据 JD-3 每 2 分钟循环装 6 张标准烤盘的站内可信参数，把每日烤盘量换算成循环数、机器分钟和清洗时间窗。',
    tldr: 'JD-3 经站内产品页确认的上限是<strong>每个 2 分钟标准循环装 6 张标准烤盘</strong>：满载且循环无缝衔接时，每小时 30 个循环，即<strong>每小时 180 张</strong>。选型时这样算：<strong>每日循环数 = 每日烤盘数 ÷ 实际每筐装盘数</strong>；<strong>机器循环分钟 = 循环数 × 2</strong>；再加上你在现场测得的刮渣、装筐、卸筐和等待时间。每天 120 张标准烤盘，需要 20 个满载循环和 40 分钟机器循环时间。180 张/小时是技术上限，不是每个班次的产量承诺。',
    faqs: [
      { q: 'JD-3 每小时能洗多少张烤盘？', a: '产品页给出的技术上限是每小时 180 张标准烤盘：每循环 6 张，乘以每小时 30 个两分钟循环。前提是每筐满载且循环之间没有停顿；少装、刮渣、装卸、分类和等待都会降低实际小时产量。' },
      { q: '每天 120 张烤盘要跑多少循环？', a: '按每筐 6 张标准烤盘满载计算，需要 20 个循环；每循环 2 分钟，所以是 40 分钟机器循环时间。还必须加上你在自己后厨实测的人工处理时间。' },
      { q: '为什么不能直接按每小时 180 张排产？', a: '因为 180 张假设洗碗筐利用率为 100%，且循环之间是零间隔。它是机器上限，不是人员和流程保证。应使用实际平均装盘数，并计入所有人工环节。' },
      { q: '如果每筐通常装不到 6 张怎么办？', a: '按真实平均数计算。例如平均每筐 4 张，就用每日烤盘数除以 4。少装并不会缩短两分钟标准循环，因此尽量满筐是提升产能最直接的办法。' },
      { q: '怎样判断一台机器够不够？', a: '先算循环数和机器分钟，再把实测人工处理时间加上，与可用清洗时间窗比较。如果放不下，先测试满筐预组、提前清洗或拆成两个时间窗；仍不足时，把实际盘型和时间窗交给供应商做可留档的选型核算。' },
    ],
    introTitle: '答案前置：产能是流程计算，不只是铭牌数字',
    intro: ['买家问“每小时能洗多少”，真正想知道的是：“一台机器能不能在下一轮生产前清完所有脏烤盘？”单看产品页数字回答不了。你还需要每日烤盘量、每筐实际装盘数，以及允许清洗的时间窗。', 'JD-3 的站内可信参数很清楚：650×550 mm 洗碗筐每次装 6 张标准烤盘，标准循环 2 分钟，理论上每小时 30 个循环、180 张标准烤盘。下面的算法把这些机器事实与人员效率、现场动线等假设分开。'],
    inputsTitle: '先拿到自己门店的三个数字', inputsIntro: '选择一个正常的忙碌日，不要挑最清闲的一天，也不要凭感觉估算。',
    inputs: ['每日烤盘数：同一班次里重复周转的烤盘也要计数。', '每筐实际装盘数：按你的盘型组合取平均值；6 张是标准烤盘的可信上限。', '可用清洗时间窗：从第一批脏盘出现到必须拿到干净盘之间的分钟数；分时段清洗就分别计算。'],
    formulaTitle: '买家真正需要的三个公式', formulaIntro: '循环数要向上取整：哪怕只多出一张，也要完整运行一个循环。',
    formulas: [
      { name: '每日所需循环数', formula: '向上取整（每日烤盘数 ÷ 每筐实际装盘数）', note: '使用现场平均值；标准烤盘的可信上限为 6 张。' },
      { name: '每日机器循环分钟', formula: '所需循环数 × 2 分钟', note: '只算机器运行，不含刮渣、装筐、卸筐、分类和等待。' },
      { name: '时间窗技术容量', formula: '向下取整（时间窗分钟 ÷ 2）× 每筐实际装盘数', note: '这是尚未扣除人工处理时间的技术容量。' },
    ],
    tableTitle: '标准烤盘满载时的产能换算表', tableIntro: '表格只使用站内已确认的每筐 6 张和每循环 2 分钟；每日数量只是排产示例，不是产品参数。',
    tableHeaders: ['待洗烤盘', '所需满载循环', '机器循环时间', '占 180 张技术小时的比例'], tableNote: '重要：机器循环时间不等于总工时。请实测并加上刮渣、装卸和走动时间。',
    ceilingTitle: '为什么 180 张/小时只是上限', ceilingIntro: '6 张 × 30 个循环 = 180 张的算术没有问题，问题在于把它解读成每个班次都能保证的产量。',
    ceilingItems: ['满筐前提：每循环都要装 6 张标准烤盘；如果平均装 4 张，同样 60 分钟机器时间只能输出 120 张。', '无缝前提：下一个循环必须立即启动；刮渣、换筐、走动和等盘都在两分钟循环之外。', '标准盘前提：搅拌桶、大型烘焙器具等装载方式不同，不能把 6 张数字直接套到所有物品。'],
    workflowTitle: '把公式变成一次真实班次测试', workflowIntro: '现场观察十分钟，比随便设一个“效率系数”更可靠。',
    workflowSteps: ['统计一个有代表性的生产批次，并按尺寸和污垢程度分组。', '让员工按日常方式装筐，记录每筐平均物品数。', '从一个循环启动计时到下一个循环启动，把刮渣和换筐全部算进去。', '用实测值重算，并为高峰日、返洗和异形器具保留余量。'],
    decisionTitle: '计算结果如何指导采购', decision: ['如果机器分钟加上实测人工时间后，仍能宽松放进清洗时间窗，一台机器的产能就够。如果只有每筐完美满载且完全不算人工才勉强放得下，方案过于紧张。', '如果放不下，不要立刻跳到更大的设备。先测试满筐预组、提前启动或把工作拆成两个时间窗。若瓶颈来自盘型组合而不是两分钟循环，用自己的实物做装载测试才是最有价值的证据。'],
    nextTitle: '下单前完成四项核验', nextIntro: '核对产品数据、确认盘型适配、检查现场条件，并提交每日数量和清洗时间窗，获得可留档的产能答复。',
    linkLabels: { product: 'JD-3 产品总览', specifications: 'JD-3 完整规格', trayFit: '600×400 烤盘适配说明', installation: '到货前安装清单', quote: '申请产能核算' },
  },
};
