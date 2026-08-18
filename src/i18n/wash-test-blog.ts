import type { Locale } from './utils';

interface WashTestBlogCopy {
  title: string;
  description: string;
  tldr: string;
  faqs: Array<{ q: string; a: string }>;
  answerTitle: string;
  answer: string[];
  sampleTitle: string;
  sampleIntro: string;
  sampleSteps: string[];
  controlsTitle: string;
  controlsIntro: string;
  controls: string[];
  verifiedTitle: string;
  verifiedIntro: string;
  factHeaders: [string, string];
  specLabels: { rack: string; standardLoad: string; cycle: string; water: string; rinse: string };
  specValues: { standardLoad: string; cycle: string };
  criteriaTitle: string;
  criteriaIntro: string;
  criteriaHeaders: [string, string, string];
  criteria: Array<{ check: string; evidence: string; pass: string }>;
  runTitle: string;
  runSteps: string[];
  redFlagsTitle: string;
  redFlags: string[];
  decisionTitle: string;
  decision: string[];
  nextTitle: string;
  nextIntro: string;
  linkLabels: { specifications: string; trayFit: string; capacity: string; installation: string; quote: string };
}

export const washTestBlogCopy: Record<Locale, WashTestBlogCopy> = {
  en: {
    title: 'How to Test a Bakery Tray Washer Before You Buy: A Sample-Wash Acceptance Checklist',
    description: 'Use your own dirtiest trays to test a bakery tray washer before purchase. This buyer checklist defines the sample, controlled setup, pass criteria, evidence to request, and red flags.',
    tldr: 'Do not approve a bakery tray washer from a clean-tray demonstration or a throughput claim. Send <strong>representative trays with the hardest normal soil</strong>, agree the loading and wash setup in writing, and define pass criteria before the test. Require one uncut video showing the trays before loading, the complete cycle, and the same trays after unloading. Buy only when the result is repeatable under a setup your team can reproduce.',
    faqs: [
      { q: 'Should I send clean or dirty trays for a sample wash test?', a: 'Send dirty trays that represent the hardest normal work in your bakery. Include the sizes, materials, shapes, and baked-on residues you use repeatedly. A clean tray or an unusually easy tray does not test the purchase risk.' },
      { q: 'What should a bakery tray washer test video show?', a: 'Ask for one continuous video showing each marked tray before loading, the rack arrangement, detergent and machine settings, the complete cycle, and close views of the same trays after unloading. Edited highlights cannot prove that the before and after trays are identical.' },
      { q: 'Can I compare two suppliers from sample-wash results?', a: 'Yes, only if the sample, soil age, pre-scraping, detergent, loading, cycle count, and acceptance checks are comparable. If one supplier pre-soaks or repeats a cycle without documenting it, the results are not a fair comparison.' },
      { q: 'Does a successful sample wash prove the quoted hourly capacity?', a: 'No. A wash test demonstrates cleaning under its recorded setup. Capacity is a separate workflow calculation based on actual items per load, cycle time, and handling time. Verify both before ordering.' },
      { q: 'What if one tray needs a second cycle?', a: 'Record it as a rewash rather than hiding it. Decide whether that item and soil represent normal production. If they do, include the rewash in your capacity and labour decision or ask the supplier to change the documented setup and repeat the test.' },
    ],
    answerTitle: 'Short answer: test the risk the specification sheet cannot show',
    answer: [
      'Rack dimensions, cycle time, water use, and rinse temperature can be checked on a specification sheet. They cannot prove how your caramelized sugar, fat, egg wash, dough, coatings, tray edges, or loading pattern will behave. A sample wash closes that evidence gap.',
      'The useful question is not “Can the machine make a tray look cleaner?” It is “Can this machine repeatedly meet our agreed result on our normal worst-case trays, with a process our staff can reproduce?” Write that question into the test record before any tray enters the machine.',
    ],
    sampleTitle: 'Build a representative test sample',
    sampleIntro: 'Choose normal production problems, not a theatrical worst case and not an easy showcase.',
    sampleSteps: [
      'Include every tray size and material that matters to the purchase, especially the item that drives your current manual labour.',
      'Use trays from a normal busy production day and keep the residue age representative of your real washing delay.',
      'Mark each tray discreetly and photograph the front, back, corners, rolled edges, and any damaged coating before shipping or testing.',
      'Write a sample list with tray type, residue, time since use, and any pre-treatment allowed. Send the same list to every supplier you compare.',
    ],
    controlsTitle: 'Freeze the test setup before judging the result',
    controlsIntro: 'A result has meaning only when the supplier records how it was produced.',
    controls: [
      'Rack arrangement and number of items in the load.',
      'What was scraped, soaked, sprayed, or wiped before loading.',
      'Detergent and rinse-aid product, dose setting, and any manual chemical addition.',
      'Selected cycle and whether any item received more than one cycle.',
      'Displayed wash and rinse temperatures, plus any adjustment made between attempts.',
    ],
    verifiedTitle: 'JD-3 facts you can verify separately',
    verifiedIntro: 'These product numbers come from the current JD-3 specification page. They define the stated setup; the sample wash must still prove cleaning on your trays.',
    factHeaders: ['Specification', 'Published value'],
    specLabels: { rack: 'Rack size', standardLoad: 'Standard-tray load', cycle: 'Standard cycle', water: 'Water per cycle', rinse: 'Final rinse temperature' },
    specValues: { standardLoad: '6 trays', cycle: '2 minutes' },
    criteriaTitle: 'Agree the acceptance checklist before the cycle',
    criteriaIntro: 'Use observable evidence. “Looks good” is not a purchasing criterion.',
    criteriaHeaders: ['Check', 'Evidence to capture', 'Pass condition to agree'],
    criteria: [
      { check: 'Food residue', evidence: 'Close views of flat faces, corners, rims, and undersides', pass: 'No visible normal-production residue in the agreed inspection areas' },
      { check: 'Greasy film', evidence: 'Gloved touch or clean white wipe on the agreed areas', pass: 'No transferable oily film under the agreed check' },
      { check: 'Tray condition', evidence: 'Matched before-and-after images of coating, colour, edges, and damage', pass: 'No new damage or unacceptable change attributed to the test' },
      { check: 'Rewash', evidence: 'Continuous cycle record and a result for every marked tray', pass: 'Every extra cycle or manual touch-up is disclosed and accepted' },
      { check: 'Loading reality', evidence: 'Full rack view before the hood closes', pass: 'Arrangement is practical for staff and does not hide low rack utilization' },
    ],
    runTitle: 'Run and document the test in five steps',
    runSteps: [
      'Confirm the marked sample and photograph its condition immediately before loading.',
      'Record all pre-treatment, chemicals, settings, temperatures, and rack placement.',
      'Film continuously from loading through the complete cycle to unloading.',
      'Inspect every marked tray in consistent light using the pre-agreed checks.',
      'Log pass, fail, rewash, manual touch-up, and any changed setting for each item.',
    ],
    redFlagsTitle: 'Red flags that make a demonstration unusable',
    redFlags: [
      'The supplier substitutes its own easier trays or cannot identify your marked samples.',
      'The video cuts between the dirty tray, machine cycle, and clean result.',
      'Pre-soaking, scraping, chemical changes, or repeated cycles happen off camera.',
      'Only the best tray is shown; failed items and rack arrangement are omitted.',
      'A cleaning demonstration is presented as proof of hourly production capacity.',
    ],
    decisionTitle: 'Turn the test record into a purchase decision',
    decision: [
      'Pass means the agreed sample meets the agreed checks with a disclosed, repeatable setup. Conditional pass means the result is acceptable only with a specific pre-treatment, loading rule, chemistry setting, or rewash allowance; put that condition into your operating and capacity plan.',
      'Fail means a normal, purchase-critical item misses the criterion or the evidence cannot be trusted. Ask for one documented adjustment and repeat, or remove that machine from the shortlist. Do not let a low price convert missing evidence into confidence.',
    ],
    nextTitle: 'Complete the rest of the buyer check',
    nextIntro: 'After cleaning is proven, verify fit, capacity, and site readiness against the same written evidence standard.',
    linkLabels: { specifications: 'check the full JD-3 specifications', trayFit: 'verify 600×400 tray fit', capacity: 'calculate real tray-washing capacity', installation: 'review the pre-installation checklist', quote: 'request a documented sample wash' },
  },

  es: {
    title: 'Cómo probar una lavadora de bandejas antes de comprar: lista de aceptación con muestras',
    description: 'Pruebe una lavadora de bandejas con sus propias piezas más sucias. Lista para definir muestras, condiciones, criterios de aceptación, pruebas y señales de alerta.',
    tldr: 'No apruebe una lavadora por una demostración con bandejas limpias ni por una cifra de capacidad. Envíe <strong>bandejas representativas con la suciedad normal más difícil</strong>, acuerde por escrito la carga y la configuración y defina antes los criterios de aceptación. Exija un vídeo continuo con las bandejas antes de cargar, el ciclo completo y las mismas bandejas al salir. Compre solo si el resultado se repite con un proceso que su equipo pueda reproducir.',
    faqs: [
      { q: '¿Debo enviar bandejas limpias o sucias para la prueba?', a: 'Envíe bandejas sucias que representen el trabajo normal más difícil de su obrador. Incluya tamaños, materiales, formas y residuos horneados de uso repetido. Una bandeja limpia o excepcionalmente fácil no prueba el riesgo de compra.' },
      { q: '¿Qué debe mostrar el vídeo de la prueba?', a: 'Pida un vídeo continuo de cada bandeja marcada antes de cargar, la disposición del rack, químicos y ajustes, el ciclo completo y las mismas bandejas al descargar. Un montaje no demuestra que el antes y el después correspondan.' },
      { q: '¿Puedo comparar proveedores con estas pruebas?', a: 'Sí, si muestra, antigüedad de la suciedad, pretratamiento, detergente, carga, número de ciclos y controles son comparables. Si un proveedor remoja o repite sin documentarlo, la comparación no es válida.' },
      { q: '¿Una muestra limpia demuestra la capacidad por hora?', a: 'No. La prueba demuestra limpieza bajo la configuración registrada. La capacidad exige otro cálculo con piezas reales por carga, tiempo de ciclo y manipulación.' },
      { q: '¿Qué ocurre si una bandeja necesita un segundo ciclo?', a: 'Regístrelo como relavado. Si esa pieza y suciedad son normales, incluya el relavado en capacidad y mano de obra, o pida ajustar la configuración documentada y repetir.' },
    ],
    answerTitle: 'Respuesta corta: pruebe lo que la ficha técnica no demuestra',
    answer: ['Las dimensiones, el ciclo, el agua y la temperatura se verifican en la ficha. No demuestran cómo responderán sus azúcares caramelizados, grasas, huevo, masa, recubrimientos, bordes y patrón de carga. La prueba con muestras cubre esa laguna.', 'La pregunta no es “¿puede dejar una bandeja más limpia?”, sino “¿cumple repetidamente nuestro resultado acordado con nuestras bandejas normales más difíciles y un proceso reproducible?”. Escríbala antes de empezar.'],
    sampleTitle: 'Prepare una muestra representativa',
    sampleIntro: 'Elija problemas normales de producción: ni un caso teatral imposible ni una exhibición fácil.',
    sampleSteps: ['Incluya cada tamaño y material importante, sobre todo la pieza que genera más trabajo manual.', 'Use bandejas de un día intenso normal y conserve una antigüedad de residuo similar a su espera real.', 'Marque cada pieza y fotografíe cara, dorso, esquinas, rebordes y daños del recubrimiento.', 'Haga una lista con tipo, residuo, tiempo desde el uso y pretratamiento permitido; envíe la misma a todos.'],
    controlsTitle: 'Fije las condiciones antes de juzgar',
    controlsIntro: 'El resultado solo vale si se registra cómo se obtuvo.',
    controls: ['Disposición del rack y número de piezas.', 'Raspado, remojo, pulverización o limpieza previa.', 'Producto y dosis de detergente y abrillantador, incluida cualquier adición manual.', 'Ciclo elegido y repeticiones.', 'Temperaturas mostradas y ajustes entre intentos.'],
    verifiedTitle: 'Datos de la JD-3 que puede verificar por separado',
    verifiedIntro: 'Estos números proceden de la página actual de especificaciones. Definen la configuración declarada; la muestra debe probar la limpieza.',
    factHeaders: ['Especificación', 'Valor publicado'],
    specLabels: { rack: 'Tamaño del rack', standardLoad: 'Carga de bandejas estándar', cycle: 'Ciclo estándar', water: 'Agua por ciclo', rinse: 'Temperatura de enjuague final' },
    specValues: { standardLoad: '6 bandejas', cycle: '2 minutos' },
    criteriaTitle: 'Acuerde la lista de aceptación antes del ciclo',
    criteriaIntro: 'Use evidencias observables; “se ve bien” no es un criterio de compra.',
    criteriaHeaders: ['Control', 'Evidencia', 'Condición de aprobación'],
    criteria: [
      { check: 'Residuo alimentario', evidence: 'Primeros planos de caras, esquinas, bordes y dorso', pass: 'Sin residuo visible de producción normal en las zonas acordadas' },
      { check: 'Película grasa', evidence: 'Tacto con guante o paño blanco limpio', pass: 'Sin grasa transferible según el control acordado' },
      { check: 'Estado de la bandeja', evidence: 'Fotos antes/después de recubrimiento, color, bordes y daños', pass: 'Sin daño nuevo ni cambio inaceptable por la prueba' },
      { check: 'Relavado', evidence: 'Registro continuo y resultado de cada pieza marcada', pass: 'Todo ciclo extra o retoque se declara y acepta' },
      { check: 'Carga realista', evidence: 'Vista completa del rack antes de cerrar', pass: 'Disposición práctica que no oculte baja ocupación' },
    ],
    runTitle: 'Ejecute y documente la prueba en cinco pasos',
    runSteps: ['Confirme y fotografíe la muestra justo antes de cargar.', 'Registre pretratamiento, químicos, ajustes, temperaturas y posición.', 'Grabe sin cortes desde la carga hasta la descarga.', 'Inspeccione cada pieza con luz constante y controles acordados.', 'Anote aprobación, fallo, relavado, retoque y cualquier cambio.'],
    redFlagsTitle: 'Señales que invalidan la demostración',
    redFlags: ['Se sustituyen sus muestras por bandejas más fáciles.', 'El vídeo corta entre suciedad, ciclo y resultado.', 'El remojo, raspado, cambio químico o segundo ciclo ocurre fuera de cámara.', 'Solo aparece la mejor pieza y se ocultan fallos o carga.', 'La limpieza se presenta como prueba de capacidad horaria.'],
    decisionTitle: 'Convierta el registro en una decisión',
    decision: ['Aprobado significa que la muestra cumple con una configuración declarada y repetible. Una aprobación condicional exige documentar el pretratamiento, la carga, la química o el relavado en su plan operativo.', 'Fallo significa que una pieza normal y crítica no cumple o la evidencia no es fiable. Pida un ajuste documentado y repita una vez, o descarte la máquina.'],
    nextTitle: 'Complete la evaluación del comprador',
    nextIntro: 'Después de demostrar la limpieza, verifique ajuste, capacidad e instalación con el mismo nivel de evidencia.',
    linkLabels: { specifications: 'consultar especificaciones de la JD-3', trayFit: 'verificar bandejas 600×400', capacity: 'calcular la capacidad real', installation: 'revisar la lista de preinstalación', quote: 'solicitar una prueba documentada' },
  },
  fr: {
    title: "Comment tester un lave-plaques avant l'achat : protocole d'acceptation sur échantillons",
    description: "Testez un lave-plaques avec vos plaques les plus sales. Protocole pour échantillons, conditions, critères, preuves et signaux d'alerte.",
    tldr: "N'approuvez pas un lave-plaques sur une démonstration facile. Envoyez <strong>des plaques représentatives portant les salissures normales les plus difficiles</strong>, fixez chargement et réglages par écrit, puis définissez les critères avant l'essai. Exigez une vidéo continue des plaques avant chargement, du cycle complet et des mêmes plaques après. Achetez uniquement si votre équipe peut reproduire le résultat.",
    faqs: [
      { q: 'Faut-il envoyer des plaques propres ou sales ?', a: "Envoyez des plaques sales représentatives du travail normal le plus difficile, avec formats, matériaux, formes et résidus cuits récurrents. Une plaque facile ne teste pas le risque d'achat." },
      { q: "Que doit montrer la vidéo d'essai ?", a: 'Chaque plaque marquée avant chargement, le panier, les produits et réglages, le cycle complet et les mêmes plaques après, sans coupe.' },
      { q: 'Peut-on comparer deux fournisseurs ?', a: "Oui, si échantillon, âge des salissures, prétraitement, détergent, chargement, cycles et contrôles sont comparables. Un trempage ou second cycle caché invalide la comparaison." },
      { q: 'Un essai réussi prouve-t-il le débit horaire ?', a: 'Non. Il prouve le lavage consigné. La capacité se calcule séparément avec les pièces par charge, le cycle et la manutention.' },
      { q: 'Et si une plaque exige un second cycle ?', a: "Consignez-la comme relavage. Si elle représente la production normale, intégrez-le à la capacité et à la main-d'œuvre, ou modifiez les réglages et recommencez." },
    ],
    answerTitle: 'Réponse courte : testez ce que la fiche ne prouve pas',
    answer: ["Dimensions, durée, eau et température se vérifient sur la fiche. Elles ne prédisent pas le comportement de vos sucres, graisses, dorure, pâte, revêtements, rebords et chargements. L'essai comble ce manque de preuve.", "La question est : la machine atteint-elle de façon répétée notre résultat convenu sur nos plaques difficiles, avec un procédé reproductible ? Écrivez-la avant l'essai."],
    sampleTitle: 'Constituez un échantillon représentatif', sampleIntro: 'Choisissez les difficultés normales : ni cas extrême, ni démonstration trop facile.',
    sampleSteps: ["Incluez chaque format et matériau important, surtout la pièce qui mobilise le plus de lavage manuel.", "Prenez les plaques d'une journée chargée normale avec un âge de résidu réaliste.", 'Marquez chaque plaque et photographiez faces, coins, rebords et revêtement endommagé.', 'Listez type, résidu, délai et prétraitement autorisé ; transmettez la même liste à tous.'],
    controlsTitle: "Figez les conditions avant d'évaluer", controlsIntro: "Le résultat n'a de sens que si sa méthode est consignée.",
    controls: ['Disposition du panier et nombre de pièces.', 'Grattage, trempage, pulvérisation ou essuyage préalable.', 'Produit et dosage du détergent et du liquide de rinçage, ajout manuel compris.', 'Cycle choisi et répétitions.', 'Températures affichées et réglages entre tentatives.'],
    verifiedTitle: 'Données JD-3 vérifiables séparément', verifiedIntro: "Ces chiffres viennent de la fiche JD-3 actuelle. Ils décrivent la configuration ; l'échantillon doit prouver le lavage.", factHeaders: ['Spécification', 'Valeur publiée'],
    specLabels: { rack: 'Dimensions du panier', standardLoad: 'Charge de plaques standard', cycle: 'Cycle standard', water: 'Eau par cycle', rinse: 'Température du rinçage final' }, specValues: { standardLoad: '6 plaques', cycle: '2 minutes' },
    criteriaTitle: "Fixez les critères d'acceptation avant le cycle", criteriaIntro: "Utilisez des preuves observables : « c'est propre » n'est pas un critère d'achat.", criteriaHeaders: ['Contrôle', 'Preuve', "Condition d'acceptation"],
    criteria: [{ check: 'Résidus', evidence: 'Faces, coins, rebords et dessous', pass: 'Aucun résidu normal visible dans les zones convenues' }, { check: 'Film gras', evidence: 'Gant ou chiffon blanc propre', pass: 'Aucun film huileux transférable' }, { check: 'État', evidence: 'Photos avant-après du revêtement, couleur, bords et dégâts', pass: "Aucun nouveau dégât ou changement inacceptable" }, { check: 'Relavage', evidence: 'Enregistrement et résultat de chaque plaque', pass: 'Tout cycle ou retouche supplémentaire est déclaré' }, { check: 'Chargement', evidence: 'Vue complète du panier', pass: 'Disposition praticable sans masquer une sous-charge' }],
    runTitle: "Réalisez et documentez l'essai en cinq étapes", runSteps: ["Photographiez l'échantillon juste avant chargement.", 'Consignez prétraitement, produits, réglages, températures et placement.', 'Filmez sans coupe du chargement au déchargement.', 'Inspectez chaque plaque sous un éclairage constant.', 'Notez réussite, échec, relavage, retouche et tout changement.'],
    redFlagsTitle: 'Signaux qui invalident la démonstration', redFlags: ['Vos plaques sont remplacées par des pièces plus faciles.', 'La vidéo coupe entre salissure, cycle et résultat.', 'Trempage, grattage, chimie ou second cycle se font hors caméra.', 'Seule la meilleure plaque est montrée.', 'Le lavage est présenté comme preuve du débit horaire.'],
    decisionTitle: "Transformez le compte rendu en décision", decision: ["Accepté signifie que l'échantillon satisfait les contrôles avec une méthode déclarée et reproductible. Toute condition entre dans le plan d'exploitation.", "Échec signifie qu'une pièce critique rate le critère ou que la preuve est douteuse. Demandez un ajustement documenté et recommencez une fois, sinon écartez la machine."],
    nextTitle: "Terminez le contrôle d'achat", nextIntro: 'Une fois le lavage prouvé, vérifiez compatibilité, capacité et installation avec la même exigence.', linkLabels: { specifications: 'consulter les spécifications JD-3', trayFit: 'vérifier les plaques 600×400', capacity: 'calculer la capacité réelle', installation: 'voir la liste de préinstallation', quote: 'demander un essai documenté' },
  },
  de: {
    title: 'Backblechspülmaschine vor dem Kauf testen: Abnahme-Checkliste mit Musterblechen',
    description: 'Testen Sie eine Backblechspülmaschine mit Ihren schmutzigsten Blechen: Muster, Bedingungen, Abnahmekriterien, Belege und Warnzeichen.',
    tldr: 'Geben Sie eine Maschine nicht nach einer leichten Vorführung frei. Senden Sie <strong>repräsentative Bleche mit den schwierigsten üblichen Rückständen</strong>, vereinbaren Sie Beladung und Einstellungen schriftlich und legen Sie Kriterien vorab fest. Fordern Sie ein ungeschnittenes Video der markierten Bleche vor dem Beladen, des vollständigen Zyklus und derselben Bleche danach. Kaufen Sie nur bei einem reproduzierbaren Ergebnis.',
    faqs: [{ q: 'Saubere oder schmutzige Bleche senden?', a: 'Schmutzige Bleche mit den schwierigsten normalen Rückständen, relevanten Größen, Materialien und Formen. Ein leichtes Blech prüft das Kaufrisiko nicht.' }, { q: 'Was muss das Testvideo zeigen?', a: 'Markierte Bleche vorher, Korbanordnung, Chemie und Einstellungen, den kompletten Zyklus und dieselben Bleche danach – ohne Schnitt.' }, { q: 'Sind Lieferanten vergleichbar?', a: 'Nur bei vergleichbarem Muster, Rückstandsalter, Vorbehandlung, Reiniger, Beladung, Zykluszahl und Prüfungen.' }, { q: 'Beweist der Test die Stundenleistung?', a: 'Nein. Er belegt Reinigung. Kapazität wird separat aus Beladung, Zyklus- und Handhabungszeit berechnet.' }, { q: 'Was bei einem zweiten Zyklus?', a: 'Als Nachspülen protokollieren und in Kapazität und Arbeit einrechnen oder Einstellungen dokumentiert ändern und wiederholen.' }],
    answerTitle: 'Kurz gesagt: Prüfen Sie, was kein Datenblatt zeigt', answer: ['Korbmaß, Zyklus, Wasser und Temperatur stehen im Datenblatt. Wie Zucker, Fette, Eistreiche, Teige, Beschichtungen, Kanten und Ihre Beladung reagieren, zeigt nur das Muster.', 'Die Frage lautet: Erreicht die Maschine wiederholt das vereinbarte Ergebnis mit unseren schwierigen Normalblechen und einem reproduzierbaren Ablauf?'],
    sampleTitle: 'Repräsentatives Muster zusammenstellen', sampleIntro: 'Wählen Sie normale Produktionsprobleme, keinen Show-Extremfall und keine leichte Vorführung.', sampleSteps: ['Jede wichtige Größe und jedes Material aufnehmen, besonders den größten Handarbeitsverursacher.', 'Bleche eines normalen starken Tages mit realistischem Rückstandsalter verwenden.', 'Vorderseite, Rückseite, Ecken, Rollränder und vorhandene Schäden markieren und fotografieren.', 'Typ, Rückstand, Zeit seit Nutzung und erlaubte Vorbehandlung für alle Lieferanten gleich auflisten.'],
    controlsTitle: 'Testbedingungen vor der Bewertung fixieren', controlsIntro: 'Ein Ergebnis zählt nur mit protokollierter Methode.', controls: ['Korbanordnung und Stückzahl.', 'Kratzen, Einweichen, Absprühen oder Wischen vorab.', 'Reiniger und Klarspüler samt Dosierung und manueller Zugabe.', 'Zyklus und Wiederholungen.', 'Angezeigte Temperaturen und Änderungen.'],
    verifiedTitle: 'Separat prüfbare JD-3-Daten', verifiedIntro: 'Diese Werte stammen von der aktuellen JD-3-Spezifikationsseite; das Muster muss die Reinigung belegen.', factHeaders: ['Spezifikation', 'Veröffentlichter Wert'], specLabels: { rack: 'Korbgröße', standardLoad: 'Standardblech-Beladung', cycle: 'Standardzyklus', water: 'Wasser je Zyklus', rinse: 'Nachspültemperatur' }, specValues: { standardLoad: '6 Bleche', cycle: '2 Minuten' },
    criteriaTitle: 'Abnahmekriterien vorher vereinbaren', criteriaIntro: 'Beobachtbare Belege nutzen; „sieht gut aus“ reicht nicht.', criteriaHeaders: ['Prüfung', 'Nachweis', 'Bedingung'], criteria: [{ check: 'Reste', evidence: 'Flächen, Ecken, Ränder, Unterseiten', pass: 'Keine sichtbaren normalen Rückstände' }, { check: 'Fettfilm', evidence: 'Handschuh oder weißes Tuch', pass: 'Kein übertragbarer Ölfilm' }, { check: 'Zustand', evidence: 'Vorher-nachher-Bilder', pass: 'Keine neue unzulässige Veränderung' }, { check: 'Nachspülen', evidence: 'Lückenloses Protokoll je Blech', pass: 'Jede Zusatzarbeit offengelegt' }, { check: 'Beladung', evidence: 'Gesamtansicht des Korbs', pass: 'Praktische Anordnung ohne versteckte Unterbelegung' }],
    runTitle: 'Test in fünf Schritten dokumentieren', runSteps: ['Muster direkt vor dem Beladen fotografieren.', 'Vorbehandlung, Chemie, Einstellungen, Temperaturen und Platzierung erfassen.', 'Vom Beladen bis Entladen ohne Schnitt filmen.', 'Jedes Blech bei gleichem Licht prüfen.', 'Bestanden, Fehler, Nachspülen, Handarbeit und Änderungen notieren.'],
    redFlagsTitle: 'Warnzeichen', redFlags: ['Leichtere Bleche ersetzen Ihre Muster.', 'Schnitte zwischen Schmutz, Zyklus und Ergebnis.', 'Vorbehandlung oder Wiederholung außerhalb der Kamera.', 'Nur das beste Blech wird gezeigt.', 'Reinigung wird als Kapazitätsbeweis verkauft.'],
    decisionTitle: 'Protokoll in Kaufentscheidung übersetzen', decision: ['Bestanden heißt: vereinbarte Prüfungen mit offengelegtem, reproduzierbarem Ablauf. Bedingungen gehören in den Betriebsplan.', 'Nicht bestanden heißt: kritisches Normalteil verfehlt das Kriterium oder Beleg ist unzuverlässig. Einmal dokumentiert anpassen und wiederholen oder Maschine streichen.'],
    nextTitle: 'Käuferprüfung vervollständigen', nextIntro: 'Danach Passform, Kapazität und Standort mit demselben Belegstandard prüfen.', linkLabels: { specifications: 'JD-3-Daten prüfen', trayFit: '600×400-Passform prüfen', capacity: 'reale Kapazität berechnen', installation: 'Vorinstallationsliste ansehen', quote: 'Mustertest anfragen' },
  },
  ru: {
    title: 'Как проверить мойку противней до покупки: чек-лист приёмочного теста', description: 'Испытайте мойку на своих самых грязных противнях: образцы, условия, критерии приёмки, доказательства и тревожные признаки.',
    tldr: 'Не принимайте решение по демонстрации на чистых противнях или заявленной производительности. Отправьте <strong>типичные противни с самыми сложными обычными загрязнениями</strong>, письменно согласуйте загрузку и настройки, заранее задайте критерии. Требуйте непрерывное видео отмеченных противней до загрузки, полного цикла и тех же противней после выгрузки. Покупайте только при воспроизводимом результате.',
    faqs: [{ q: 'Отправлять чистые или грязные противни?', a: 'Грязные противни с самыми сложными обычными загрязнениями, нужными размерами, материалами и формами. Лёгкий образец не проверяет риск покупки.' }, { q: 'Что должно быть на видео?', a: 'Отмеченные противни до загрузки, корзина, химия, настройки, полный цикл и те же противни после — без монтажа.' }, { q: 'Можно сравнить поставщиков?', a: 'Только при одинаковых образцах, возрасте загрязнений, подготовке, химии, загрузке, числе циклов и проверках.' }, { q: 'Тест доказывает часовую производительность?', a: 'Нет. Он доказывает качество мойки. Производительность отдельно считают по фактической загрузке, циклу и времени обработки.' }, { q: 'Что делать со вторым циклом?', a: 'Записать как повторную мойку и учесть в производительности и труде либо документированно изменить настройки и повторить.' }],
    answerTitle: 'Короткий ответ: проверьте то, чего нет в спецификации', answer: ['Размер корзины, цикл, расход воды и температура проверяются по спецификации. Реакцию сахара, жира, яичной смазки, теста, покрытия, кромок и вашей загрузки показывает только образец.', 'Вопрос: достигает ли машина согласованного результата на наших сложных обычных противнях с воспроизводимым процессом? Зафиксируйте его заранее.'],
    sampleTitle: 'Соберите представительную выборку', sampleIntro: 'Берите обычные производственные сложности, не показательно лёгкий и не театрально экстремальный случай.', sampleSteps: ['Включите все важные размеры и материалы, особенно предмет с наибольшей ручной работой.', 'Возьмите противни обычного загруженного дня с реальным возрастом остатков.', 'Пометьте и сфотографируйте обе стороны, углы, кромки и повреждения покрытия.', 'Одинаково для всех поставщиков запишите тип, остаток, время и разрешённую подготовку.'],
    controlsTitle: 'Зафиксируйте условия теста', controlsIntro: 'Результат имеет смысл только вместе с методом.', controls: ['Размещение и число предметов.', 'Соскребание, замачивание, опрыскивание или протирка.', 'Моющее и ополаскиватель, дозировка и ручное добавление.', 'Цикл и повторы.', 'Показанная температура и изменения.'],
    verifiedTitle: 'Проверяемые отдельно данные JD-3', verifiedIntro: 'Значения взяты с текущей страницы спецификаций; образец всё равно должен доказать мойку.', factHeaders: ['Параметр', 'Опубликовано'], specLabels: { rack: 'Размер корзины', standardLoad: 'Загрузка стандартных противней', cycle: 'Стандартный цикл', water: 'Вода на цикл', rinse: 'Температура финального ополаскивания' }, specValues: { standardLoad: '6 противней', cycle: '2 минуты' },
    criteriaTitle: 'Согласуйте критерии приёмки заранее', criteriaIntro: 'Нужны наблюдаемые доказательства, а не «выглядит хорошо».', criteriaHeaders: ['Проверка', 'Доказательство', 'Условие'], criteria: [{ check: 'Остатки', evidence: 'Поверхности, углы, кромки, низ', pass: 'Нет видимых обычных остатков' }, { check: 'Жирная плёнка', evidence: 'Перчатка или белая салфетка', pass: 'Нет переносимой масляной плёнки' }, { check: 'Состояние', evidence: 'Фото до и после', pass: 'Нет нового неприемлемого изменения' }, { check: 'Повтор', evidence: 'Непрерывная запись каждого предмета', pass: 'Вся дополнительная работа раскрыта' }, { check: 'Загрузка', evidence: 'Полный вид корзины', pass: 'Практичная схема без скрытой недогрузки' }],
    runTitle: 'Проведите тест в пять шагов', runSteps: ['Сфотографируйте образцы перед загрузкой.', 'Запишите подготовку, химию, настройки, температуры и размещение.', 'Снимите без монтажа от загрузки до выгрузки.', 'Проверьте каждый предмет при одинаковом освещении.', 'Запишите результат, повтор, ручную доработку и изменения.'],
    redFlagsTitle: 'Тревожные признаки', redFlags: ['Ваши образцы заменяют лёгкими.', 'Монтаж между грязью, циклом и результатом.', 'Подготовка или повтор вне кадра.', 'Показывают только лучший противень.', 'Качество мойки выдают за доказательство производительности.'],
    decisionTitle: 'Превратите протокол в решение', decision: ['Прошёл — согласованные проверки выполнены воспроизводимым раскрытым методом. Все условия включаются в рабочий план.', 'Не прошёл — важный обычный предмет не соответствует критерию или доказательство ненадёжно. Один документированный повтор либо исключение машины.'],
    nextTitle: 'Завершите проверку покупателя', nextIntro: 'После качества проверьте совместимость, производительность и площадку с тем же стандартом доказательств.', linkLabels: { specifications: 'проверить характеристики JD-3', trayFit: 'проверить формат 600×400', capacity: 'рассчитать реальную производительность', installation: 'открыть список подготовки', quote: 'запросить тест на образцах' },
  },
  zh: {
    title: '购买烘焙托盘清洗机前怎么测试？样盘验收清单', description: '用自家最难洗的脏盘做购前测试：如何选样、锁定条件、制定验收标准、留存证据并识别演示陷阱。',
    tldr: '不要凭干净样盘演示或标称产能下单。应寄送<strong>能代表日常最难污渍的真实托盘</strong>，书面锁定装载方式与清洗设置，并在测试前写清通过标准。要求一镜到底拍到标记样盘的清洗前状态、完整循环和出机后的同一批样盘。只有当结果能按门店可复制的流程重复出现时，才算通过。',
    faqs: [{ q: '样洗应该寄干净盘还是脏盘？', a: '寄送代表门店日常最难清洗任务的脏盘，覆盖关键尺寸、材质、形状和反复出现的烘烤残留。容易洗的盘无法验证采购风险。' }, { q: '样洗视频必须拍什么？', a: '一镜到底拍清标记样盘清洗前、内筐摆放、药剂与设置、完整循环和出机后的同一批盘。剪辑视频不能证明前后为同一件。' }, { q: '能用样洗比较两个供应商吗？', a: '可以，但样品、污渍放置时间、预处理、药剂、装载、循环次数和检查方法必须可比。隐藏浸泡或重复循环会让比较失效。' }, { q: '样洗通过就能证明每小时产能吗？', a: '不能。样洗只证明记录条件下的清洗效果；产能还要按实际每筐数量、循环时间和人工衔接另算。' }, { q: '某张盘需要第二个循环怎么办？', a: '如实记为返洗。若它代表日常生产，就把返洗计入产能和人工，或书面调整设置后重测。' }],
    answerTitle: '答案：测试规格表无法证明的采购风险', answer: ['内筐尺寸、循环时间、耗水量和终洗温度可以查规格表；焦糖、油脂、蛋液、面团、涂层、卷边和实际装载组合能否洗净，只能由真实样盘证明。', '真正的问题不是“能不能看起来更干净”，而是“机器能否按员工可复制的流程，稳定达到双方对日常最难样盘约定的结果”。测试前先把这句话写进记录。'],
    sampleTitle: '准备有代表性的样盘', sampleIntro: '选择正常生产难题，不用刻意制造极端案例，也不要挑容易展示的盘。', sampleSteps: ['覆盖采购相关的尺寸与材质，尤其是当前最耗手工的器具。', '取自正常繁忙生产日，并保持与实际等待清洗相近的残留时间。', '给每件样盘做隐蔽标记，拍摄正反面、角落、卷边及原有涂层损伤。', '记录器具类型、残留、使用后经过时间和允许的预处理；给各供应商同一份清单。'],
    controlsTitle: '判断结果前先锁定测试条件', controlsIntro: '只有完整记录产生方法，结果才有比较价值。', controls: ['内筐摆放和器具数量。', '进机前刮渣、浸泡、喷淋或擦拭。', '洗涤剂与催干剂产品、剂量设置及手工加药。', '所选循环及是否重复。', '显示的洗涤/终洗温度及尝试间的调整。'],
    verifiedTitle: '可独立核对的 JD-3 参数', verifiedIntro: '以下数字来自当前 JD-3 规格页；它们只定义声明条件，样盘仍须证明清洗效果。', factHeaders: ['规格', '网站公布值'], specLabels: { rack: '内筐尺寸', standardLoad: '标准托盘装载量', cycle: '标准循环', water: '每循环耗水', rinse: '最终漂洗温度' }, specValues: { standardLoad: '6 张托盘', cycle: '2 分钟' },
    criteriaTitle: '循环开始前约定验收表', criteriaIntro: '使用可观察证据，“看起来不错”不是采购标准。', criteriaHeaders: ['检查项', '留存证据', '通过条件'], criteria: [{ check: '食物残留', evidence: '平面、角落、卷边和背面近照', pass: '约定区域无可见日常残留' }, { check: '油膜', evidence: '戴手套触摸或白色洁净擦布', pass: '约定检查下无可转移油膜' }, { check: '托盘状态', evidence: '涂层、颜色、边缘和损伤前后对照', pass: '测试未造成新的不可接受变化' }, { check: '返洗', evidence: '连续循环记录和每件结果', pass: '额外循环及手工补洗全部披露' }, { check: '真实装载', evidence: '关罩前的完整内筐画面', pass: '员工可执行且不以低装载掩饰效果' }],
    runTitle: '五步完成并记录测试', runSteps: ['进机前确认标记并拍摄样盘状态。', '记录预处理、药剂、设置、温度和摆放。', '从装载到出机全程无剪辑拍摄。', '在一致光线下逐件按约定项目检查。', '逐件记录通过、失败、返洗、手工补洗及设置变化。'],
    redFlagsTitle: '让演示失效的危险信号', redFlags: ['供应商换成更容易洗的盘。', '脏盘、循环与成品之间有剪辑。', '浸泡、刮渣、换药或第二循环在镜头外完成。', '只展示最好的一件，隐藏失败件与装载。', '把清洗效果演示当成每小时产能证明。'],
    decisionTitle: '把测试记录变成采购结论', decision: ['通过：样盘在公开、可复制的条件下满足约定检查。若附带预处理、装载、药剂或返洗条件，必须写入操作与产能计划。', '失败：关键日常器具未达标或证据不可信。允许一次有记录的调整重测，否则从候选中移除。'],
    nextTitle: '完成其余采购核查', nextIntro: '证明洗净后，再用同样证据标准核对适配性、真实产能与安装条件。', linkLabels: { specifications: '查看 JD-3 完整规格', trayFit: '核对 600×400 托盘适配', capacity: '计算真实清洗产能', installation: '查看安装前清单', quote: '申请有记录的样盘测试' },
  },
  th: {
    title: 'ทดสอบเครื่องล้างถาดก่อนซื้ออย่างไร: เช็กลิสต์รับรองด้วยถาดตัวอย่าง', description: 'ทดสอบด้วยถาดสกปรกจริงของคุณ: การเลือกตัวอย่าง เงื่อนไข เกณฑ์รับรอง หลักฐาน และสัญญาณเตือนก่อนซื้อ',
    tldr: 'อย่าอนุมัติเครื่องจากการสาธิตถาดที่ล้างง่ายหรือตัวเลขกำลังผลิต ส่ง <strong>ถาดตัวแทนที่มีคราบปกติซึ่งล้างยากที่สุด</strong> ตกลงการจัดวางและการตั้งค่าเป็นลายลักษณ์อักษร และกำหนดเกณฑ์ผ่านก่อนทดสอบ ขอวิดีโอต่อเนื่องที่เห็นถาดทำเครื่องหมายก่อนเข้าเครื่อง รอบเต็ม และถาดเดิมหลังออก ซื้อเมื่อผลทำซ้ำได้ด้วยกระบวนการที่ทีมคุณทำตามได้เท่านั้น',
    faqs: [{ q: 'ควรส่งถาดสะอาดหรือถาดสกปรก?', a: 'ส่งถาดสกปรกที่แทนงานปกติที่ยากที่สุด รวมขนาด วัสดุ รูปทรง และคราบอบที่เกิดซ้ำ ถาดที่ล้างง่ายไม่ทดสอบความเสี่ยงในการซื้อ' }, { q: 'วิดีโอทดสอบต้องแสดงอะไร?', a: 'ถาดที่ทำเครื่องหมายก่อนโหลด การจัดแร็ค สารเคมี การตั้งค่า รอบเต็ม และถาดเดิมหลังล้าง โดยไม่ตัดต่อ' }, { q: 'ใช้ผลเปรียบเทียบผู้ขายได้ไหม?', a: 'ได้เมื่อใช้ตัวอย่าง อายุคราบ การเตรียม น้ำยา การโหลด จำนวนรอบ และวิธีตรวจที่เทียบกันได้' }, { q: 'ผลล้างผ่านพิสูจน์กำลังผลิตต่อชั่วโมงไหม?', a: 'ไม่ การทดสอบพิสูจน์การล้างเท่านั้น กำลังผลิตต้องคำนวณจากจำนวนจริงต่อโหลด เวลาเครื่อง และเวลาจัดการ' }, { q: 'ถ้าต้องล้างรอบที่สอง?', a: 'บันทึกเป็นงานล้างซ้ำและรวมในกำลังผลิตกับแรงงาน หรือปรับค่าที่บันทึกไว้แล้วทดสอบใหม่' }],
    answerTitle: 'คำตอบสั้น: ทดสอบสิ่งที่สเปกพิสูจน์ไม่ได้', answer: ['ขนาดแร็ค เวลา น้ำ และอุณหภูมิตรวจจากสเปกได้ แต่ปฏิกิริยาของน้ำตาล ไขมัน ไข่ แป้ง สารเคลือบ ขอบถาด และรูปแบบโหลดของคุณต้องพิสูจน์ด้วยตัวอย่างจริง', 'คำถามคือ เครื่องทำผลที่ตกลงไว้กับถาดปกติที่ยากที่สุดได้ซ้ำด้วยกระบวนการที่ทำตามได้หรือไม่ เขียนคำถามนี้ก่อนเริ่ม'],
    sampleTitle: 'จัดชุดตัวอย่างที่เป็นตัวแทน', sampleIntro: 'เลือกปัญหาปกติ ไม่ใช่กรณีสุดโต่งหรือถาดโชว์ที่ง่าย', sampleSteps: ['รวมทุกขนาดและวัสดุสำคัญ โดยเฉพาะชิ้นที่ใช้แรงงานมือมากที่สุด', 'ใช้ถาดจากวันผลิตที่ยุ่งตามปกติและอายุคราบใกล้เวลารอจริง', 'ทำเครื่องหมายและถ่ายหน้า หลัง มุม ขอบ และความเสียหายเดิม', 'ทำรายการชนิด คราบ เวลาหลังใช้ และการเตรียมที่อนุญาตแบบเดียวกันสำหรับผู้ขายทุกคน'],
    controlsTitle: 'ล็อกเงื่อนไขก่อนตัดสินผล', controlsIntro: 'ผลมีความหมายเมื่อบันทึกวิธีที่ทำให้เกิดผล', controls: ['การจัดแร็คและจำนวนชิ้น', 'การขูด แช่ ฉีด หรือเช็ดก่อนโหลด', 'น้ำยาและสารช่วยแห้ง ปริมาณ และการเติมด้วยมือ', 'โปรแกรมและการทำซ้ำ', 'อุณหภูมิที่แสดงและการปรับค่า'],
    verifiedTitle: 'ข้อมูล JD-3 ที่ตรวจแยกได้', verifiedIntro: 'ค่าต่อไปนี้มาจากหน้าสเปก JD-3 ปัจจุบัน ส่วนประสิทธิภาพล้างยังต้องพิสูจน์ด้วยตัวอย่าง', factHeaders: ['ข้อมูลจำเพาะ', 'ค่าที่เผยแพร่'], specLabels: { rack: 'ขนาดแร็ค', standardLoad: 'จำนวนถาดมาตรฐาน', cycle: 'รอบมาตรฐาน', water: 'น้ำต่อรอบ', rinse: 'อุณหภูมิล้างสุดท้าย' }, specValues: { standardLoad: '6 ถาด', cycle: '2 นาที' },
    criteriaTitle: 'ตกลงเกณฑ์รับรองก่อนเริ่มรอบ', criteriaIntro: 'ใช้หลักฐานที่สังเกตได้ คำว่า “ดูดี” ไม่ใช่เกณฑ์ซื้อ', criteriaHeaders: ['ตรวจ', 'หลักฐาน', 'เงื่อนไขผ่าน'], criteria: [{ check: 'เศษอาหาร', evidence: 'พื้นผิว มุม ขอบ และด้านล่าง', pass: 'ไม่มีคราบปกติที่มองเห็นในจุดตกลง' }, { check: 'ฟิล์มน้ำมัน', evidence: 'ถุงมือหรือผ้าขาวสะอาด', pass: 'ไม่มีน้ำมันถ่ายโอน' }, { check: 'สภาพถาด', evidence: 'ภาพก่อนและหลัง', pass: 'ไม่มีการเปลี่ยนแปลงใหม่ที่รับไม่ได้' }, { check: 'ล้างซ้ำ', evidence: 'บันทึกต่อเนื่องทุกชิ้น', pass: 'เปิดเผยงานเพิ่มทั้งหมด' }, { check: 'โหลดจริง', evidence: 'ภาพเต็มแร็ค', pass: 'จัดวางที่พนักงานทำได้และไม่ซ่อนโหลดต่ำ' }],
    runTitle: 'ทดสอบและบันทึกห้าขั้นตอน', runSteps: ['ถ่ายตัวอย่างก่อนโหลด', 'บันทึกการเตรียม น้ำยา ค่า อุณหภูมิ และตำแหน่ง', 'ถ่ายต่อเนื่องจากโหลดถึงนำออก', 'ตรวจทุกชิ้นในแสงเดียวกัน', 'บันทึกผ่าน ไม่ผ่าน ล้างซ้ำ งานมือ และการเปลี่ยนค่า'],
    redFlagsTitle: 'สัญญาณเตือน', redFlags: ['เปลี่ยนตัวอย่างเป็นถาดที่ง่ายกว่า', 'วิดีโอตัดระหว่างคราบ รอบ และผล', 'เตรียมหรือล้างซ้ำนอกกล้อง', 'แสดงเฉพาะถาดที่ดีที่สุด', 'อ้างผลล้างเป็นหลักฐานกำลังผลิต'],
    decisionTitle: 'เปลี่ยนบันทึกเป็นการตัดสินใจ', decision: ['ผ่านคือทำเกณฑ์ได้ด้วยวิธีเปิดเผยและทำซ้ำได้ เงื่อนไขทั้งหมดต้องอยู่ในแผนปฏิบัติงาน', 'ไม่ผ่านคือชิ้นสำคัญไม่ถึงเกณฑ์หรือหลักฐานไม่น่าเชื่อถือ ให้ปรับแบบบันทึกและลองอีกครั้งหนึ่ง หรือถอดเครื่องออกจากรายการ'],
    nextTitle: 'ตรวจสอบการซื้อให้ครบ', nextIntro: 'เมื่อพิสูจน์การล้างแล้ว ตรวจความพอดี กำลังผลิต และสถานที่ด้วยมาตรฐานหลักฐานเดียวกัน', linkLabels: { specifications: 'ดูสเปก JD-3', trayFit: 'ตรวจถาด 600×400', capacity: 'คำนวณกำลังผลิตจริง', installation: 'ดูเช็กลิสต์ก่อนติดตั้ง', quote: 'ขอทดสอบถาดแบบมีบันทึก' },
  },
  vi: {
    title: 'Cách thử máy rửa khay trước khi mua: bảng nghiệm thu bằng khay mẫu', description: 'Dùng khay bẩn thật để thử máy trước khi mua: chọn mẫu, điều kiện, tiêu chí đạt, bằng chứng và dấu hiệu cảnh báo.',
    tldr: 'Đừng duyệt máy từ màn trình diễn với khay dễ rửa hay con số công suất. Hãy gửi <strong>khay đại diện có vết bẩn thông thường khó nhất</strong>, thống nhất bằng văn bản cách xếp và cài đặt, rồi định tiêu chí đạt trước khi thử. Yêu cầu video liền mạch cho thấy khay đã đánh dấu trước khi nạp, toàn bộ chu kỳ và đúng các khay đó sau khi lấy ra. Chỉ mua khi đội ngũ của bạn có thể lặp lại kết quả.',
    faqs: [{ q: 'Nên gửi khay sạch hay bẩn?', a: 'Gửi khay bẩn đại diện cho công việc bình thường khó nhất, gồm kích thước, vật liệu, hình dạng và cặn nướng thường gặp. Khay dễ rửa không kiểm tra rủi ro mua hàng.' }, { q: 'Video phải cho thấy gì?', a: 'Khay đánh dấu trước khi nạp, cách xếp giá, hóa chất, cài đặt, chu kỳ đầy đủ và cùng khay đó sau rửa, không cắt.' }, { q: 'Có thể so sánh nhà cung cấp không?', a: 'Có, khi mẫu, tuổi vết bẩn, xử lý trước, hóa chất, cách xếp, số chu kỳ và kiểm tra tương đương.' }, { q: 'Thử sạch có chứng minh công suất giờ?', a: 'Không. Nó chứng minh khả năng làm sạch. Công suất phải tính riêng từ tải thực, thời gian chu kỳ và thao tác.' }, { q: 'Nếu cần chu kỳ thứ hai?', a: 'Ghi là rửa lại và đưa vào công suất, lao động; hoặc đổi cài đặt có ghi chép rồi thử lại.' }],
    answerTitle: 'Trả lời ngắn: thử điều bảng thông số không chứng minh được', answer: ['Kích thước giá, chu kỳ, nước và nhiệt độ có thể đối chiếu thông số. Đường, mỡ, trứng, bột, lớp phủ, mép khay và cách xếp của bạn chỉ được chứng minh bằng mẫu thật.', 'Câu hỏi là máy có lặp lại kết quả đã thống nhất trên khay bình thường khó nhất bằng quy trình nhân viên làm được hay không. Hãy ghi câu đó trước khi thử.'],
    sampleTitle: 'Tạo bộ mẫu đại diện', sampleIntro: 'Chọn khó khăn sản xuất bình thường, không chọn ca cực đoan hay mẫu trình diễn quá dễ.', sampleSteps: ['Gồm mọi kích thước và vật liệu quan trọng, nhất là món tốn công rửa tay nhất.', 'Dùng khay từ ngày bận bình thường với thời gian lưu cặn sát thực tế.', 'Đánh dấu và chụp hai mặt, góc, mép cuộn và hư hỏng sẵn có.', 'Lập cùng danh sách loại, cặn, thời gian và xử lý được phép cho mọi nhà cung cấp.'],
    controlsTitle: 'Khóa điều kiện trước khi đánh giá', controlsIntro: 'Kết quả chỉ có nghĩa khi phương pháp được ghi lại.', controls: ['Cách xếp và số món.', 'Cạo, ngâm, xịt hoặc lau trước.', 'Chất rửa, trợ xả, liều và bổ sung thủ công.', 'Chu kỳ và lần lặp.', 'Nhiệt độ hiển thị và điều chỉnh.'],
    verifiedTitle: 'Dữ liệu JD-3 có thể kiểm tra riêng', verifiedIntro: 'Các giá trị lấy từ trang thông số JD-3 hiện tại; mẫu vẫn phải chứng minh làm sạch.', factHeaders: ['Thông số', 'Giá trị công bố'], specLabels: { rack: 'Kích thước giá', standardLoad: 'Tải khay chuẩn', cycle: 'Chu kỳ chuẩn', water: 'Nước mỗi chu kỳ', rinse: 'Nhiệt độ tráng cuối' }, specValues: { standardLoad: '6 khay', cycle: '2 phút' },
    criteriaTitle: 'Thống nhất tiêu chí nghiệm thu trước chu kỳ', criteriaIntro: 'Dùng bằng chứng quan sát được; “trông ổn” không phải tiêu chí mua.', criteriaHeaders: ['Kiểm tra', 'Bằng chứng', 'Điều kiện đạt'], criteria: [{ check: 'Cặn thực phẩm', evidence: 'Mặt, góc, mép và đáy', pass: 'Không thấy cặn sản xuất bình thường' }, { check: 'Màng dầu', evidence: 'Găng hoặc khăn trắng sạch', pass: 'Không truyền dầu' }, { check: 'Tình trạng khay', evidence: 'Ảnh trước và sau', pass: 'Không có thay đổi mới không chấp nhận' }, { check: 'Rửa lại', evidence: 'Hồ sơ liên tục từng món', pass: 'Mọi chu kỳ và sửa tay đều khai báo' }, { check: 'Tải thực', evidence: 'Toàn cảnh giá', pass: 'Cách xếp thực tế, không che giấu tải thấp' }],
    runTitle: 'Thử và ghi chép theo năm bước', runSteps: ['Chụp mẫu ngay trước khi nạp.', 'Ghi xử lý, hóa chất, cài đặt, nhiệt độ và vị trí.', 'Quay liền mạch từ nạp đến lấy ra.', 'Kiểm từng món dưới ánh sáng ổn định.', 'Ghi đạt, trượt, rửa lại, sửa tay và thay đổi.'],
    redFlagsTitle: 'Dấu hiệu cảnh báo', redFlags: ['Đổi mẫu của bạn thành khay dễ hơn.', 'Video cắt giữa khay bẩn, chu kỳ và kết quả.', 'Xử lý hoặc lặp chu kỳ ngoài camera.', 'Chỉ cho xem khay tốt nhất.', 'Dùng kết quả sạch để chứng minh công suất.'],
    decisionTitle: 'Biến hồ sơ thành quyết định', decision: ['Đạt là mẫu thỏa kiểm tra bằng quy trình công khai, lặp lại được; mọi điều kiện phải vào kế hoạch vận hành.', 'Trượt là món quan trọng không đạt hoặc bằng chứng không tin cậy. Cho một lần điều chỉnh có ghi chép, nếu không hãy loại máy.'],
    nextTitle: 'Hoàn tất kiểm tra mua hàng', nextIntro: 'Sau khi chứng minh sạch, kiểm độ vừa, công suất và mặt bằng với cùng chuẩn bằng chứng.', linkLabels: { specifications: 'xem thông số JD-3', trayFit: 'kiểm khay 600×400', capacity: 'tính công suất thực', installation: 'xem danh sách trước lắp đặt', quote: 'yêu cầu thử mẫu có ghi chép' },
  },
  ar: {
    title: 'كيف تختبر غسالة صواني قبل الشراء؟ قائمة قبول بعينات حقيقية', description: 'اختبر الغسالة بصوانيك الأكثر اتساخاً: اختيار العينة والشروط ومعايير القبول والأدلة وإشارات التحذير.',
    tldr: 'لا تعتمد غسالة بناءً على عرض بصوانٍ سهلة أو رقم إنتاجية. أرسل <strong>صواني ممثلة تحمل أصعب الاتساخ المعتاد</strong>، واتفق كتابةً على التحميل والإعدادات ومعايير النجاح قبل الاختبار. اطلب فيديو متصلاً يُظهر الصواني المعلّمة قبل التحميل والدورة كاملة والصواني نفسها بعد التفريغ. اشترِ فقط عندما يستطيع فريقك تكرار النتيجة.',
    faqs: [{ q: 'هل أرسل صواني نظيفة أم متسخة؟', a: 'أرسل صواني متسخة تمثل أصعب العمل المعتاد وتشمل المقاسات والمواد والأشكال والبقايا المتكررة. العينة السهلة لا تختبر مخاطر الشراء.' }, { q: 'ماذا يجب أن يظهر الفيديو؟', a: 'الصواني المعلّمة قبل التحميل، ترتيب الرف، المواد والإعدادات، الدورة كاملة والصواني نفسها بعدها بلا مونتاج.' }, { q: 'هل يمكن مقارنة الموردين؟', a: 'نعم إذا كانت العينة وعمر البقايا والمعالجة والمنظف والتحميل وعدد الدورات والفحص متكافئة.' }, { q: 'هل يثبت الاختبار الإنتاجية بالساعة؟', a: 'لا. يثبت التنظيف فقط؛ تُحسب السعة منفصلة من الحمولة الفعلية وزمن الدورة والمناولة.' }, { q: 'ماذا لو احتاجت صينية دورة ثانية؟', a: 'سجّلها كإعادة غسل وأدخلها في السعة والعمل، أو غيّر الإعداد الموثق وأعد الاختبار.' }],
    answerTitle: 'الجواب المختصر: اختبر ما لا تثبته ورقة المواصفات', answer: ['يمكن مراجعة حجم الرف والزمن والماء والحرارة في المواصفات، لكن تفاعل السكر والدهون والبيض والعجين والطلاء والحواف وطريقة تحميلك لا تثبته إلا عينتك.', 'السؤال هو: هل تحقق الآلة النتيجة المتفق عليها مراراً مع أصعب صوانينا المعتادة وبعملية يمكن تكرارها؟ اكتبه قبل البدء.'],
    sampleTitle: 'كوّن عينة ممثلة', sampleIntro: 'اختر مشكلات الإنتاج المعتادة، لا حالة استعراضية سهلة أو متطرفة.', sampleSteps: ['ضمّن كل مقاس ومادة مهمة، خصوصاً القطعة الأكثر استهلاكاً للعمل اليدوي.', 'استخدم صواني من يوم مزدحم عادي وبعمر بقايا واقعي.', 'علّم كل قطعة وصوّر الوجهين والزوايا والحواف والتلف السابق.', 'أرسل لكل مورد القائمة نفسها: النوع والبقايا والوقت والمعالجة المسموحة.'],
    controlsTitle: 'ثبّت شروط الاختبار قبل الحكم', controlsIntro: 'لا معنى للنتيجة من دون تسجيل طريقة إنتاجها.', controls: ['ترتيب الرف وعدد القطع.', 'الكشط أو النقع أو الرش أو المسح المسبق.', 'المنظف ومساعد الشطف والجرعة والإضافة اليدوية.', 'الدورة والتكرار.', 'الحرارة المعروضة وأي تعديل.'],
    verifiedTitle: 'بيانات JD-3 قابلة للتحقق منفصلة', verifiedIntro: 'القيم من صفحة المواصفات الحالية؛ ولا تزال العينة مطالبة بإثبات التنظيف.', factHeaders: ['المواصفة', 'القيمة المنشورة'], specLabels: { rack: 'حجم الرف', standardLoad: 'حمولة الصواني القياسية', cycle: 'الدورة القياسية', water: 'الماء لكل دورة', rinse: 'حرارة الشطف النهائي' }, specValues: { standardLoad: '6 صوانٍ', cycle: 'دقيقتان' },
    criteriaTitle: 'اتفق على القبول قبل الدورة', criteriaIntro: 'استخدم دليلاً قابلاً للملاحظة؛ «يبدو جيداً» ليس معيار شراء.', criteriaHeaders: ['الفحص', 'الدليل', 'شرط النجاح'], criteria: [{ check: 'البقايا', evidence: 'الأسطح والزوايا والحواف والأسفل', pass: 'لا بقايا معتادة ظاهرة' }, { check: 'طبقة الدهن', evidence: 'قفاز أو قطعة بيضاء نظيفة', pass: 'لا زيت قابل للانتقال' }, { check: 'حالة الصينية', evidence: 'صور قبل وبعد', pass: 'لا تغير جديد غير مقبول' }, { check: 'إعادة الغسل', evidence: 'سجل متصل لكل قطعة', pass: 'كشف كل دورة وعمل إضافي' }, { check: 'التحميل الواقعي', evidence: 'صورة الرف كاملاً', pass: 'ترتيب عملي لا يخفي حمولة منخفضة' }],
    runTitle: 'نفّذ ووثّق بخمس خطوات', runSteps: ['صوّر العينة قبل التحميل.', 'سجّل المعالجة والمواد والإعدادات والحرارة والموقع.', 'صوّر بلا قطع من التحميل إلى التفريغ.', 'افحص كل قطعة تحت إضاءة ثابتة.', 'سجّل النجاح والفشل والإعادة والعمل اليدوي والتغيير.'],
    redFlagsTitle: 'إشارات تحذير', redFlags: ['استبدال عينتك بصوانٍ أسهل.', 'قطع الفيديو بين الاتساخ والدورة والنتيجة.', 'المعالجة أو التكرار خارج الكاميرا.', 'إظهار أفضل صينية فقط.', 'تقديم التنظيف كدليل على السعة.'],
    decisionTitle: 'حوّل السجل إلى قرار شراء', decision: ['النجاح يعني تحقيق الفحوص بعملية معلنة قابلة للتكرار؛ تُدخل كل الشروط في خطة التشغيل.', 'الفشل يعني أن قطعة أساسية لم تحقق المعيار أو أن الدليل غير موثوق. اسمح بتعديل موثق واحد وإعادة، وإلا استبعد الآلة.'],
    nextTitle: 'أكمل فحص المشتري', nextIntro: 'بعد إثبات التنظيف، تحقق من الملاءمة والسعة والموقع بالمعيار نفسه.', linkLabels: { specifications: 'راجع مواصفات JD-3', trayFit: 'تحقق من صواني 600×400', capacity: 'احسب السعة الفعلية', installation: 'راجع قائمة ما قبل التركيب', quote: 'اطلب اختبار عينة موثقاً' },
  },
};
