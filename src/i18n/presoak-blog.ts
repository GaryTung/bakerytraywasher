import type { Locale } from './utils';

type PresoakBlogCopy = {
  title: string;
  description: string;
  tldr: string;
  faqs: Array<[string, string]>;
  answerTitle: string;
  answer: string[];
  sortTitle: string;
  sortIntro: string;
  sortHeaders: [string, string, string];
  sortRows: Array<[string, string, string]>;
  directTitle: string;
  directIntro: string;
  directSteps: Array<{ title: string; text: string }>;
  pretreatTitle: string;
  pretreat: string[];
  testTitle: string;
  testIntro: string;
  test: string[];
  measureTitle: string;
  measureIntro: string;
  formulaLabels: [string, string];
  formulae: [string, string];
  redFlagsTitle: string;
  redFlags: string[];
  decisionTitle: string;
  decision: string;
  linksTitle: string;
  linksIntro: string;
  links: string[];
};

export const presoakBlogCopy: Record<Locale, PresoakBlogCopy> = {
  en: {
    title: 'Do Baking Trays Need Pre-Soaking Before Machine Washing? A Practical Workflow Guide',
    description: 'Decide when baking trays can go straight into a tray washer, when controlled pre-treatment is justified, and how to test the workflow before buying.',
    tldr: 'Do not assume every baking tray needs soaking before machine washing. <strong>Remove loose solids, separate unsafe or exceptional items, and test representative trays by direct machine washing first.</strong> Add a documented pre-treatment only when a defined soil-and-surface combination repeatedly fails the agreed result. If routine hand scrubbing is needed for normal trays, include that labor in the buying decision instead of calling the machine-only cycle successful.',
    faqs: [
      ['Do baking trays need to be soaked before machine washing?', 'Not automatically. Remove loose debris and validate direct washing on representative normal trays first. Use controlled pre-treatment only for a defined soil, surface, or delay condition that direct washing does not reliably resolve.'],
      ['Is scraping the same as pre-washing?', 'No. Dry removal of loose crumbs or large solids protects the wash process without pretending to clean the tray. Pre-washing adds water, chemistry, heat, time, or manual action before the machine cycle.'],
      ['What should go straight into the tray washer?', 'Items whose material and coating are approved, whose soil matches the validated load, and whose loading leaves spray and drainage paths open can follow the direct-wash route.'],
      ['When is pre-treatment justified?', 'When repeated tests show that one identified normal soil-and-surface combination misses the acceptance result, and an approved, repeatable pre-treatment closes that gap without damaging the tray or creating a chemical conflict.'],
      ['How should a buyer test pre-soaking requirements?', 'Use representative worst-normal trays, keep loading and process variables recorded, compare direct wash with the proposed pre-treatment, and score the complete labor and accepted result—not only the machine cycle.'],
    ],
    answerTitle: 'Short answer: test direct washing first; pre-treat only a defined exception',
    answer: [
      'A tray washer should be evaluated as part of the real production workflow. The meaningful question is not whether soaking can improve a difficult tray, but whether normal trays achieve the agreed result through a repeatable route with acceptable handling.',
      'Create a routing rule that an operator can apply consistently. Loose solids are removed; approved normal trays take the direct-wash route; known exceptions receive a specified pre-treatment; damaged, incompatible, or abnormal items are isolated for review. This prevents “pre-soak everything” from hiding labor and prevents “wash everything directly” from damaging assets or accepting poor results.',
    ],
    sortTitle: 'Sort by soil, surface, and delay before choosing a route',
    sortIntro: 'The decision belongs to the combination, not to the word “tray.” Confirm the tray maker’s and chemical supplier’s instructions for the actual material and coating.',
    sortHeaders: ['Observed condition', 'First route to test', 'Escalation rule'],
    sortRows: [
      ['Loose crumbs or detachable solids on an approved surface', 'Remove loose solids, load correctly, then direct wash', 'Change route only if the recorded result repeatedly misses acceptance'],
      ['Normal production film on an approved surface', 'Direct wash under the proposed standard process', 'Define pre-treatment only after controlled comparison'],
      ['Dried or baked residue caused by a known production delay', 'Test direct wash and a time-controlled exception route', 'Address the delay as well as the cleaning response'],
      ['Heavy carbonized buildup outside normal production', 'Isolate and assess separately', 'Do not use an abnormal tray to define an unsupported routine promise'],
      ['Unknown, damaged, reactive, or coated surface', 'Hold for compatibility confirmation', 'Do not soak or machine-wash by guesswork'],
    ],
    directTitle: 'Build a direct-wash-first standard route',
    directIntro: 'A useful standard route has visible gates rather than informal operator judgment.',
    directSteps: [
      { title: 'Gate 1 — identify', text: 'Confirm tray material, surface or coating, soil family, age of residue, and whether the item belongs to the validated normal load.' },
      { title: 'Gate 2 — remove loose solids', text: 'Use the approved dry or low-contact method. Do not turn this step into unmeasured hand washing.' },
      { title: 'Gate 3 — load consistently', text: 'Keep items restrained, separated, exposed to spray, and positioned to drain; record the approved rack pattern.' },
      { title: 'Gate 4 — inspect against acceptance', text: 'Judge the agreed visible result and any required local hygiene checks. Record passes, rewash, damage, residue, and exceptions.' },
    ],
    pretreatTitle: 'Specify pre-treatment like a controlled process',
    pretreat: [
      'Name the exact soil-and-surface combination that triggers the exception; avoid “soak when dirty.”',
      'Obtain compatibility and use instructions for the tray surface and the chosen chemical; never improvise mixtures or doses.',
      'Define the approved method, responsible role, exposure trigger, rinse or transfer step, labeling, and safe handling.',
      'Prevent pre-treatment chemistry and loosened solids from entering the machine in a way the approved process does not allow.',
      'Revalidate after changing tray supplier, coating, recipe, production delay, chemical, loading pattern, or machine setting.',
    ],
    testTitle: 'Run a two-route workflow test before purchase',
    testIntro: 'Use the same representative tray groups and record every step. The supplier should not substitute easy, freshly soiled samples for the buyer’s worst-normal condition.',
    test: [
      'Define acceptance before washing: visible soil, residue, damage, rewash, handling, and any locally required hygiene verification.',
      'Route A: remove loose solids, load the agreed pattern, and machine-wash directly.',
      'Route B: apply only the proposed controlled pre-treatment, then use the same loading and machine process.',
      'Record total handling time, waiting time, consumables, passes, rewashes, rejects, and any surface change for both routes.',
      'Approve the simplest route that repeatedly meets the result; document exceptions instead of averaging them away.',
    ],
    measureTitle: 'Measure the hidden work, not only the cycle',
    measureIntro: 'These process metrics use your own trial records; they are not machine specifications.',
    formulaLabels: ['Pre-treatment rate', 'Handling minutes per accepted tray'],
    formulae: ['loads requiring approved pre-treatment ÷ representative loads × 100%', 'total scraping, loading, transfer, inspection, and rewash minutes ÷ accepted trays'],
    redFlagsTitle: 'Watch for these workflow red flags',
    redFlags: [
      'The demonstration succeeds only after unrecorded soaking or hand scrubbing.',
      '“Pre-rinse” has no defined method, time, chemical, labor owner, or compatibility approval.',
      'Easy fresh-soil trays replace the buyer’s worst-normal trays during the comparison.',
      'A pass is declared while rewash, surface change, residue, or operator time is ignored.',
      'Every operator invents a different exception route and no result is traceable.',
      'The purchase case counts machine capacity but omits the upstream queue and manual handling.',
    ],
    decisionTitle: 'Write the route into acceptance and training',
    decision: 'For each approved tray family and normal soil condition, record the direct-wash loading pattern, acceptance result, and any defined pre-treatment exception. State who may change the route and what evidence triggers revalidation. A buying decision should include all recurring manual work required to achieve the promised result.',
    linksTitle: 'Use related evidence to complete the test',
    linksIntro: 'These pages help separate soil severity, chemistry, material compatibility, loading, and purchase acceptance.',
    links: ['Classify burnt-on grease severity', 'Review tray-washing chemistry', 'Check aluminum surface compatibility', 'Plan a sample-wash acceptance test', 'Discuss your trays and workflow'],
  },

  zh: {
    title: '烤盘机洗前需要浸泡吗？一份实用流程决策指南',
    description: '判断烤盘何时可直接进入清洗机、何时需要受控预处理，以及采购前如何验证完整工作流。',
    tldr: '不要默认所有烤盘在机洗前都要浸泡。<strong>先清除松散残渣，隔离不安全或异常器具，再用有代表性的烤盘验证直接机洗。</strong>只有某个明确的污垢与表面组合反复达不到约定结果时，才增加有记录的预处理。如果正常烤盘仍需日常手刷，就应把这部分人工计入采购决策，不能只说机器循环成功。',
    faqs: [
      ['烤盘机洗前一定要浸泡吗？', '不一定。先清掉松散残渣，并用有代表性的日常烤盘验证直接机洗；仅当某个明确的污垢、表面或延迟条件无法稳定解决时，才采用受控预处理。'],
      ['刮除残渣等于预洗吗？', '不等于。干式去除碎屑或大块固体是在保护清洗流程，并没有假装把烤盘洗净；预洗则会在机器循环前增加水、药剂、热、时间或人工动作。'],
      ['哪些烤盘可直接进清洗机？', '材质和涂层已获确认、污垢属于已验证负载，并且装载后喷淋与排水路径畅通的器具，可走直接机洗路线。'],
      ['什么时候值得做预处理？', '当重复测试表明某个明确的日常污垢与表面组合达不到验收结果，而且一种获批准、可重复的预处理能在不损伤烤盘或产生药剂冲突的前提下补足差距。'],
      ['买家怎样测试是否需要浸泡？', '使用最难但仍属日常范围的代表性烤盘，记录装载与流程变量，对比直接机洗和拟用预处理，并评价完整人工与合格结果，而不只看机器循环。'],
    ],
    answerTitle: '简短答案：先验证直接机洗，只对明确例外做预处理',
    answer: ['烤盘清洗机应放进真实生产流程中评价。关键不是浸泡能否改善某个难洗盘，而是正常烤盘能否通过可重复、操作量可接受的路线达到约定结果。', '建立操作员可一致执行的分流规则：清除松散固体；获批的正常烤盘走直接机洗；已知例外采用规定预处理；破损、不兼容或异常器具隔离评估。这样既不会用“全部先泡”掩盖人工，也不会因“一律直洗”损伤资产或接受差结果。'],
    sortTitle: '先按污垢、表面和等待时间分流',
    sortIntro: '决定取决于具体组合，而不是“烤盘”两个字。针对实际材质和涂层，核对烤盘制造商与药剂供应商的说明。',
    sortHeaders: ['观察到的状态', '先测试的路线', '升级规则'],
    sortRows: [
      ['获批表面上的松散碎屑或可脱落固体', '清除松散固体、正确装载后直接机洗', '只有记录结果反复不合格才改路线'],
      ['获批表面上的正常生产油膜', '按拟定标准流程直接机洗', '受控对比后再定义预处理'],
      ['因已知生产延迟形成的干结或烘烤残留', '对比直接机洗与限时例外路线', '同时解决等待延迟和清洗响应'],
      ['超出日常生产的重度碳化积垢', '隔离并单独评估', '不得用异常盘定义无依据的日常承诺'],
      ['未知、破损、易反应或带涂层表面', '暂停并确认兼容性', '不得凭猜测浸泡或机洗'],
    ],
    directTitle: '建立“直接机洗优先”的标准路线',
    directIntro: '有效的标准路线应有清晰关口，不能只靠操作员临场判断。',
    directSteps: [
      { title: '关口 1——识别', text: '确认烤盘材质、表面或涂层、污垢类别、残留时间，以及是否属于已验证的正常负载。' },
      { title: '关口 2——去除松散固体', text: '使用获批的干式或低接触方法，不要让这一步演变成无法计量的手工清洗。' },
      { title: '关口 3——一致装载', text: '器具要固定、分开、暴露在喷淋下并能排水；记录获批的筐架布局。' },
      { title: '关口 4——按标准检查', text: '依据约定的可见结果及当地要求的卫生检查评判，并记录通过、重洗、损伤、残留和例外。' },
    ],
    pretreatTitle: '把预处理写成受控工艺',
    pretreat: ['明确触发例外的具体污垢与表面组合，避免使用“脏了就泡”。', '取得烤盘表面与选用药剂的兼容性及使用说明，切勿自行混配或猜剂量。', '规定获批方法、责任岗位、暴露触发条件、冲洗或转移步骤、标识和安全操作。', '防止预处理药剂与脱落固体以未经批准的方式进入机器。', '更换烤盘供应商、涂层、配方、等待时间、药剂、装载方式或机器设置后重新验证。'],
    testTitle: '采购前做两条路线的工作流测试',
    testIntro: '使用相同的代表性烤盘组并记录每一步。供应商不得用容易清洗的新鲜污垢样盘替换买家的最难日常状态。',
    test: ['清洗前先定义验收：可见污垢、残留、损伤、重洗、操作量及当地要求的卫生验证。', '路线 A：清除松散固体，按约定布局装载并直接机洗。', '路线 B：只采用拟定的受控预处理，再使用相同装载和机器流程。', '记录两条路线的总操作时间、等待时间、耗材、通过、重洗、报废和表面变化。', '批准能够反复达标的最简单路线；把例外单列记录，不要用平均值掩盖。'],
    measureTitle: '计量隐性工作，而不只看循环',
    measureIntro: '以下流程指标取自你自己的试验记录，不是机器规格。',
    formulaLabels: ['预处理率', '每张合格烤盘的操作分钟数'],
    formulae: ['需要获批预处理的负载数 ÷ 代表性负载总数 × 100%', '刮除、装载、转移、检查与重洗总分钟数 ÷ 合格烤盘数'],
    redFlagsTitle: '留意这些流程危险信号',
    redFlags: ['演示只有在未记录的浸泡或手刷后才成功。', '“预冲洗”没有规定方法、时间、药剂、人工责任人或兼容性批准。', '对比时用容易洗的新鲜污垢盘替代买家的最难日常烤盘。', '宣布通过时忽略重洗、表面变化、残留或操作员时间。', '每位操作员自创不同例外路线，结果无法追溯。', '采购测算只算机器产能，却漏掉上游排队和人工搬运。'],
    decisionTitle: '把路线写进验收与培训',
    decision: '针对每类获批烤盘和日常污垢，记录直接机洗装载方式、验收结果及任何已定义的预处理例外。写明谁有权改变路线、何种证据触发重新验证。采购决策应包含达到承诺结果所需的一切经常性人工。',
    linksTitle: '用关联证据完善测试',
    linksIntro: '以下页面可帮助你分别判断污垢严重度、清洗化学、材质兼容性、装载和采购验收。',
    links: ['判断焦化油污严重度', '了解烤盘清洗化学', '核对铝表面兼容性', '设计样盘清洗验收', '讨论你的烤盘与流程'],
  },

  es: {
    title: '¿Hay que remojar las bandejas antes del lavado a máquina? Guía práctica',
    description: 'Decida cuándo lavar directamente, cuándo justificar un pretratamiento controlado y cómo probar el flujo antes de comprar.',
    tldr: 'No suponga que toda bandeja necesita remojo. <strong>Retire los sólidos sueltos, aparte piezas inseguras o excepcionales y pruebe primero el lavado directo con bandejas representativas.</strong> Añada un pretratamiento documentado solo si una combinación definida de suciedad y superficie falla repetidamente. Si las bandejas normales exigen fregado manual habitual, incluya esa mano de obra en la compra.',
    faqs: [
      ['¿Hay que remojar las bandejas antes de lavarlas a máquina?', 'No por defecto. Retire residuos sueltos y valide primero el lavado directo con bandejas normales representativas; use pretratamiento controlado solo para una condición definida que el lavado directo no resuelva con fiabilidad.'],
      ['¿Raspar equivale a prelavar?', 'No. Quitar en seco migas o sólidos grandes protege el proceso sin limpiar la bandeja; el prelavado añade agua, química, calor, tiempo o acción manual antes del ciclo.'],
      ['¿Qué puede entrar directamente en la lavadora?', 'Piezas con material y recubrimiento aprobados, suciedad dentro de la carga validada y una colocación que deje libres la pulverización y el drenaje.'],
      ['¿Cuándo se justifica el pretratamiento?', 'Cuando pruebas repetidas muestran que una combinación normal y definida no alcanza la aceptación y un método aprobado cierra la brecha sin dañar la bandeja ni crear incompatibilidades.'],
      ['¿Cómo debe probarlo un comprador?', 'Use bandejas representativas del peor caso normal, registre variables, compare lavado directo y pretratamiento y valore toda la mano de obra y el resultado aceptado.'],
    ],
    answerTitle: 'Respuesta breve: pruebe primero el lavado directo; pretrate solo una excepción definida',
    answer: ['Evalúe la lavadora dentro del flujo real. La pregunta útil no es si el remojo mejora una bandeja difícil, sino si las bandejas normales alcanzan el resultado acordado por una ruta repetible y con manipulación aceptable.', 'Defina una regla de enrutamiento: retire sólidos sueltos; las bandejas normales aprobadas van directas; las excepciones conocidas reciben un pretratamiento especificado; las piezas dañadas, incompatibles o anormales se aíslan.'],
    sortTitle: 'Clasifique por suciedad, superficie y demora', sortIntro: 'La decisión pertenece a la combinación concreta, no a la palabra “bandeja”. Confirme las instrucciones del fabricante y del proveedor químico.',
    sortHeaders: ['Condición observada', 'Primera ruta a probar', 'Regla de escalado'],
    sortRows: [['Migas o sólidos desprendibles sobre superficie aprobada', 'Retirar sólidos, cargar bien y lavar directamente', 'Cambiar solo tras fallos repetidos registrados'], ['Película normal de producción', 'Lavado directo con el proceso propuesto', 'Definir pretratamiento tras comparación controlada'], ['Residuo seco por una demora conocida', 'Comparar lavado directo y ruta excepcional temporizada', 'Corregir también la demora'], ['Carbonización intensa fuera de lo normal', 'Aislar y evaluar aparte', 'No convertir una anomalía en promesa rutinaria'], ['Superficie desconocida, dañada, reactiva o recubierta', 'Retener hasta confirmar compatibilidad', 'No remojar ni lavar por conjetura']],
    directTitle: 'Cree una ruta estándar de lavado directo', directIntro: 'La ruta útil tiene puertas visibles y no depende de una decisión informal.',
    directSteps: [{ title: 'Puerta 1 — identificar', text: 'Confirme material, superficie, familia de suciedad, antigüedad y pertenencia a la carga normal validada.' }, { title: 'Puerta 2 — retirar sólidos', text: 'Use el método seco o de bajo contacto aprobado sin convertirlo en lavado manual oculto.' }, { title: 'Puerta 3 — cargar igual', text: 'Mantenga las piezas sujetas, separadas, expuestas al rociado y con drenaje; registre el patrón.' }, { title: 'Puerta 4 — inspeccionar', text: 'Aplique la aceptación acordada y registre aprobados, relavados, daños, residuos y excepciones.' }],
    pretreatTitle: 'Especifique el pretratamiento como proceso controlado', pretreat: ['Nombre la combinación exacta que activa la excepción.', 'Confirme compatibilidad e instrucciones; no improvise mezclas ni dosis.', 'Defina método, responsable, activación, transferencia, etiquetado y seguridad.', 'Evite que química y sólidos entren en la máquina de forma no aprobada.', 'Revalide al cambiar bandeja, recubrimiento, receta, demora, química, carga o ajuste.'],
    testTitle: 'Pruebe dos rutas antes de comprar', testIntro: 'Use los mismos grupos representativos y registre cada paso; no sustituya el peor caso normal por muestras fáciles.',
    test: ['Defina antes la aceptación: suciedad, residuo, daño, relavado, manejo e higiene local.', 'Ruta A: retire sólidos, cargue según el patrón y lave directamente.', 'Ruta B: aplique solo el pretratamiento propuesto y mantenga carga y ciclo.', 'Registre tiempo total, espera, consumibles, aprobados, relavados, rechazos y cambios.', 'Apruebe la ruta más simple que repita el resultado y documente las excepciones.'],
    measureTitle: 'Mida el trabajo oculto, no solo el ciclo', measureIntro: 'Son métricas de sus pruebas, no especificaciones de la máquina.',
    formulaLabels: ['Tasa de pretratamiento', 'Minutos de manipulación por bandeja aceptada'], formulae: ['cargas con pretratamiento aprobado ÷ cargas representativas × 100%', 'minutos de raspado, carga, traslado, inspección y relavado ÷ bandejas aceptadas'],
    redFlagsTitle: 'Señales de alerta', redFlags: ['La demostración solo funciona tras remojo o fregado no registrado.', 'El “preaclarado” no tiene método, tiempo, química, responsable ni aprobación.', 'Las muestras fáciles sustituyen al peor caso normal.', 'Se ignoran relavado, cambios, residuos o tiempo del operador.', 'Cada operador inventa una ruta distinta.', 'El cálculo de compra omite la cola y la manipulación previa.'],
    decisionTitle: 'Incluya la ruta en aceptación y formación', decision: 'Para cada familia aprobada y suciedad normal, registre carga, resultado y excepción. Defina quién puede cambiarla y qué evidencia exige revalidación. Incluya todo trabajo manual recurrente en la decisión de compra.',
    linksTitle: 'Complete la prueba con evidencia relacionada', linksIntro: 'Separe severidad, química, material, carga y aceptación.', links: ['Clasificar grasa quemada', 'Revisar la química de lavado', 'Comprobar aluminio', 'Planear una prueba de lavado', 'Hablar de sus bandejas'],
  },

  fr: {
    title: 'Faut-il faire tremper les plaques avant le lavage en machine ? Guide pratique',
    description: 'Décidez du lavage direct, du prétraitement contrôlé et de la méthode d’essai du flux complet avant achat.',
    tldr: 'Ne supposez pas que chaque plaque doit tremper. <strong>Retirez les solides libres, isolez les pièces à risque ou exceptionnelles et testez d’abord le lavage direct sur des plaques représentatives.</strong> N’ajoutez un prétraitement documenté que pour une combinaison salissure-surface définie qui échoue de façon répétée. Intégrez tout brossage manuel courant au calcul d’achat.',
    faqs: [['Faut-il faire tremper les plaques avant lavage machine ?', 'Pas systématiquement. Retirez les débris libres et validez d’abord le lavage direct sur les plaques normales représentatives ; réservez le prétraitement à une condition définie que le lavage direct ne résout pas durablement.'], ['Le raclage est-il un prélavage ?', 'Non. Enlever à sec miettes et gros solides protège le procédé sans laver la plaque ; le prélavage ajoute eau, chimie, chaleur, temps ou action manuelle.'], ['Que peut-on laver directement ?', 'Les articles dont le matériau et le revêtement sont approuvés, dont la salissure appartient à la charge validée et dont le chargement laisse libres aspersion et égouttage.'], ['Quand le prétraitement est-il justifié ?', 'Quand des essais répétés montrent qu’une combinaison normale définie manque le résultat et qu’une méthode approuvée le rétablit sans dommage ni incompatibilité.'], ['Comment un acheteur doit-il tester ?', 'Utilisez les plaques du pire cas normal, consignez les variables, comparez les deux voies et mesurez toute la main-d’œuvre ainsi que le résultat accepté.']],
    answerTitle: 'Réponse courte : testez d’abord le lavage direct ; prétraitez seulement une exception définie', answer: ['Évaluez la machine dans le flux réel. La question n’est pas de savoir si le trempage améliore une plaque difficile, mais si les plaques normales suivent une voie répétable, avec une manipulation acceptable.', 'Créez une règle : enlever les solides ; voie directe pour les plaques normales approuvées ; prétraitement spécifié pour les exceptions ; isolement des pièces endommagées, incompatibles ou anormales.'],
    sortTitle: 'Triez par salissure, surface et délai', sortIntro: 'La décision dépend de la combinaison, pas du mot « plaque ». Vérifiez les instructions du fabricant et du fournisseur de produits.',
    sortHeaders: ['État observé', 'Première voie à tester', 'Règle d’escalade'], sortRows: [['Miettes ou solides détachables sur surface approuvée', 'Retirer, charger correctement, laver directement', 'Changer seulement après échecs répétés consignés'], ['Film normal de production', 'Lavage direct selon le procédé proposé', 'Prétraiter seulement après comparaison'], ['Résidu séché dû à un délai connu', 'Comparer voie directe et exception temporisée', 'Corriger aussi le délai'], ['Carbonisation lourde hors production normale', 'Isoler et évaluer séparément', 'Ne pas en faire une promesse courante'], ['Surface inconnue, endommagée, réactive ou revêtue', 'Suspendre pour confirmer la compatibilité', 'Ne pas agir au hasard']],
    directTitle: 'Construisez une voie standard directe', directIntro: 'Une voie utile comporte des points de contrôle visibles.', directSteps: [{ title: 'Point 1 — identifier', text: 'Confirmez matériau, surface, famille et âge de salissure, et charge validée.' }, { title: 'Point 2 — retirer les solides', text: 'Utilisez la méthode approuvée sans créer un lavage manuel caché.' }, { title: 'Point 3 — charger régulièrement', text: 'Maintenez séparation, exposition à l’aspersion et égouttage ; consignez le schéma.' }, { title: 'Point 4 — inspecter', text: 'Appliquez l’acceptation et consignez réussite, relavage, dommage, résidu et exception.' }],
    pretreatTitle: 'Spécifiez le prétraitement comme procédé contrôlé', pretreat: ['Nommez la combinaison exacte qui déclenche l’exception.', 'Confirmez compatibilité et mode d’emploi ; n’improvisez ni mélange ni dose.', 'Définissez méthode, responsable, déclencheur, transfert, étiquetage et sécurité.', 'Empêchez chimie et solides d’entrer de façon non approuvée.', 'Revalidez après tout changement pertinent.'],
    testTitle: 'Testez deux voies avant achat', testIntro: 'Utilisez les mêmes groupes représentatifs et consignez chaque étape.', test: ['Définissez l’acceptation avant lavage.', 'Voie A : retirer les solides, charger et laver directement.', 'Voie B : appliquer le seul prétraitement proposé puis garder charge et cycle identiques.', 'Consignez temps total, attente, consommables, réussites, relavages, rejets et changements.', 'Validez la voie la plus simple qui répète le résultat.'],
    measureTitle: 'Mesurez le travail caché', measureIntro: 'Ces indicateurs viennent de vos essais, pas des spécifications.', formulaLabels: ['Taux de prétraitement', 'Minutes de manipulation par plaque acceptée'], formulae: ['charges prétraitées ÷ charges représentatives × 100 %', 'minutes de raclage, chargement, transfert, inspection et relavage ÷ plaques acceptées'],
    redFlagsTitle: 'Signaux d’alerte', redFlags: ['Réussite seulement après trempage ou brossage non consigné.', '« Prérinçage » sans méthode, temps, chimie, responsable ni approbation.', 'Échantillons faciles à la place du pire cas normal.', 'Relavage, changement de surface, résidu ou temps ignorés.', 'Chaque opérateur invente sa voie.', 'Le calcul omet la file et la manutention amont.'],
    decisionTitle: 'Inscrivez la voie dans l’acceptation et la formation', decision: 'Pour chaque famille approuvée et salissure normale, consignez chargement, résultat et exception. Définissez qui peut changer la voie et ce qui déclenche une nouvelle validation. Incluez tout travail manuel récurrent dans la décision.',
    linksTitle: 'Complétez l’essai', linksIntro: 'Séparez sévérité, chimie, matériau, chargement et acceptation.', links: ['Classer les graisses brûlées', 'Revoir la chimie', 'Vérifier l’aluminium', 'Planifier l’essai d’acceptation', 'Discuter de vos plaques'],
  },

  de: {
    title: 'Müssen Backbleche vor der Maschinenwäsche eingeweicht werden? Praxisleitfaden',
    description: 'Entscheiden Sie über Direktwäsche, kontrollierte Vorbehandlung und einen belastbaren Workflow-Test vor dem Kauf.',
    tldr: 'Gehen Sie nicht davon aus, dass jedes Blech eingeweicht werden muss. <strong>Entfernen Sie lose Feststoffe, sondern Sie riskante oder außergewöhnliche Teile aus und testen Sie zuerst die Direktwäsche mit repräsentativen Blechen.</strong> Führen Sie eine dokumentierte Vorbehandlung nur für eine definierte Kombination ein, die wiederholt scheitert. Rechnen Sie regelmäßiges Handschrubben als Arbeitsaufwand mit.',
    faqs: [['Müssen Backbleche vor der Maschinenwäsche einweichen?', 'Nicht grundsätzlich. Lose Reste entfernen und Direktwäsche an repräsentativen Normalblechen prüfen; Vorbehandlung nur für eine definierte Bedingung einsetzen, die direkt nicht zuverlässig gelöst wird.'], ['Ist Abschaben eine Vorwäsche?', 'Nein. Trockenes Entfernen loser Krümel schützt den Prozess, reinigt das Blech aber nicht; Vorwäsche ergänzt Wasser, Chemie, Wärme, Zeit oder Handarbeit.'], ['Was darf direkt in die Maschine?', 'Freigegebene Materialien und Beschichtungen mit validierter Verschmutzung und einer Beladung, die Sprüh- und Ablaufwege offen lässt.'], ['Wann ist Vorbehandlung gerechtfertigt?', 'Wenn wiederholte Tests bei einer definierten normalen Kombination scheitern und ein freigegebenes Verfahren ohne Schäden oder Chemiekonflikt die Lücke schließt.'], ['Wie sollte ein Käufer testen?', 'Repräsentative schwierigste Normalbleche nutzen, Variablen erfassen, Direktwäsche und Vorbehandlung vergleichen und Gesamtarbeit sowie akzeptiertes Ergebnis bewerten.']],
    answerTitle: 'Kurzantwort: zuerst direkt waschen; nur definierte Ausnahmen vorbehandeln', answer: ['Bewerten Sie die Maschine im realen Ablauf. Entscheidend ist nicht, ob Einweichen ein schwieriges Blech verbessert, sondern ob Normalbleche reproduzierbar und mit vertretbarer Handhabung bestehen.', 'Regel festlegen: lose Feststoffe entfernen; freigegebene Normalbleche direkt; bekannte Ausnahmen nach Vorgabe; beschädigte, inkompatible oder ungewöhnliche Teile isolieren.'],
    sortTitle: 'Nach Verschmutzung, Oberfläche und Wartezeit sortieren', sortIntro: 'Die konkrete Kombination entscheidet. Angaben von Blech- und Chemiehersteller prüfen.', sortHeaders: ['Beobachteter Zustand', 'Erster Testweg', 'Eskalationsregel'], sortRows: [['Lose Krümel/Feststoffe auf freigegebener Oberfläche', 'Entfernen, korrekt laden, direkt waschen', 'Nur nach wiederholtem dokumentiertem Fehler ändern'], ['Normaler Produktionsfilm', 'Direktwäsche im geplanten Prozess', 'Vorbehandlung erst nach Vergleich'], ['Getrocknete Reste durch bekannte Verzögerung', 'Direktweg gegen zeitgesteuerte Ausnahme testen', 'Auch Verzögerung beheben'], ['Starke Verkohlung außerhalb der Normalproduktion', 'Isolieren und separat bewerten', 'Keine Routinezusage daraus ableiten'], ['Unbekannte, beschädigte, reaktive oder beschichtete Oberfläche', 'Bis zur Freigabe zurückhalten', 'Nicht raten']],
    directTitle: 'Direktwäsche als Standardweg aufbauen', directIntro: 'Der Standardweg braucht sichtbare Prüfpunkte.', directSteps: [{ title: 'Tor 1 — identifizieren', text: 'Material, Oberfläche, Schmutzart, Alter und Zugehörigkeit zur validierten Last bestätigen.' }, { title: 'Tor 2 — Feststoffe entfernen', text: 'Freigegebene Methode nutzen, ohne versteckte Handwäsche zu erzeugen.' }, { title: 'Tor 3 — einheitlich laden', text: 'Fixierung, Abstand, Sprühzugang und Ablauf sicherstellen; Muster dokumentieren.' }, { title: 'Tor 4 — prüfen', text: 'Nach Annahmekriterien bewerten und Erfolg, Nachwäsche, Schaden, Rückstand und Ausnahme erfassen.' }],
    pretreatTitle: 'Vorbehandlung als kontrollierten Prozess festlegen', pretreat: ['Exakte Auslösekombination benennen.', 'Verträglichkeit und Anleitung bestätigen; Mischungen oder Dosierungen nicht improvisieren.', 'Methode, Rolle, Auslöser, Übergabe, Kennzeichnung und Sicherheit definieren.', 'Unzulässigen Eintrag von Chemie und Feststoffen verhindern.', 'Nach relevanten Änderungen erneut validieren.'],
    testTitle: 'Vor Kauf zwei Wege testen', testIntro: 'Gleiche repräsentative Gruppen und jeden Schritt dokumentieren.', test: ['Akzeptanz vorab definieren.', 'Weg A: Feststoffe entfernen, vereinbart laden, direkt waschen.', 'Weg B: nur geplante Vorbehandlung, dann gleiche Beladung und gleicher Prozess.', 'Gesamtzeit, Wartezeit, Verbrauch, Erfolge, Nachwäsche, Ausschuss und Änderungen erfassen.', 'Einfachsten wiederholbar erfolgreichen Weg freigeben.'],
    measureTitle: 'Verdeckte Arbeit messen', measureIntro: 'Kennzahlen aus Ihrem Versuch, keine Maschinendaten.', formulaLabels: ['Vorbehandlungsquote', 'Handhabungsminuten je akzeptiertem Blech'], formulae: ['vorbehandelte Lasten ÷ repräsentative Lasten × 100 %', 'Minuten für Abschaben, Laden, Umsetzen, Prüfen und Nachwäsche ÷ akzeptierte Bleche'],
    redFlagsTitle: 'Warnzeichen', redFlags: ['Erfolg nur nach nicht erfasstem Einweichen oder Schrubben.', '„Vorspülen“ ohne Methode, Zeit, Chemie, Verantwortlichen oder Freigabe.', 'Einfache Proben ersetzen den schwierigsten Normalfall.', 'Nachwäsche, Oberflächenänderung, Rückstand oder Bedienzeit werden ignoriert.', 'Jeder Bediener erfindet einen anderen Weg.', 'Kaufrechnung lässt Warteschlange und Vorarbeit aus.'],
    decisionTitle: 'Weg in Abnahme und Schulung festhalten', decision: 'Für jede freigegebene Blechfamilie und Normalverschmutzung Beladung, Ergebnis und Ausnahme dokumentieren. Änderungsbefugnis und Revalidierungsauslöser festlegen. Wiederkehrende Handarbeit in die Kaufentscheidung aufnehmen.',
    linksTitle: 'Test mit verwandter Evidenz ergänzen', linksIntro: 'Schweregrad, Chemie, Material, Beladung und Abnahme getrennt prüfen.', links: ['Eingebrannte Fette einordnen', 'Waschchemie prüfen', 'Aluminiumverträglichkeit prüfen', 'Musterwaschtest planen', 'Ihre Bleche besprechen'],
  },

  ru: {
    title: 'Нужно ли замачивать противни перед машинной мойкой? Практическое руководство',
    description: 'Определите, когда нужна прямая мойка, когда оправдана контролируемая предобработка и как испытать процесс до покупки.',
    tldr: 'Не считайте, что каждый противень нужно замачивать. <strong>Удалите свободные остатки, отделите опасные и необычные изделия и сначала испытайте прямую мойку на репрезентативных противнях.</strong> Документированную предобработку вводите лишь для определённой пары загрязнение–поверхность, которая стабильно не проходит. Регулярную ручную чистку учитывайте в решении о покупке.',
    faqs: [['Нужно ли замачивать противни перед машинной мойкой?', 'Не всегда. Удалите свободные остатки и сначала подтвердите прямую мойку на типичных противнях; предобработка нужна лишь для чётко заданного условия, которое прямая мойка надёжно не решает.'], ['Соскребание — это предварительная мойка?', 'Нет. Сухое удаление крошек защищает процесс, но не моет противень; предварительная мойка добавляет воду, химию, тепло, время или ручное действие.'], ['Что можно мыть напрямую?', 'Изделия с одобренным материалом и покрытием, валидированным загрязнением и загрузкой с открытым распылением и стоком.'], ['Когда оправдана предобработка?', 'Когда повторные испытания определённой нормальной комбинации не проходят, а одобренный метод устраняет разрыв без повреждения или химического конфликта.'], ['Как покупателю провести испытание?', 'Использовать самые трудные нормальные противни, записать переменные, сравнить два маршрута и оценить весь труд и принятый результат.']],
    answerTitle: 'Коротко: сначала прямая мойка, предобработка — только для заданного исключения', answer: ['Оценивайте машину в реальном потоке. Важно не то, улучшает ли замачивание один трудный противень, а проходит ли обычная партия повторяемым маршрутом с приемлемыми затратами труда.', 'Задайте правило: удалить свободные остатки; одобренные обычные противни мыть напрямую; известные исключения обработать по инструкции; повреждённые, несовместимые и необычные изделия изолировать.'],
    sortTitle: 'Сортируйте по загрязнению, поверхности и задержке', sortIntro: 'Решение относится к конкретной комбинации. Сверьте указания изготовителя противней и поставщика химии.', sortHeaders: ['Состояние', 'Первый маршрут', 'Правило эскалации'], sortRows: [['Крошки/свободные остатки на одобренной поверхности', 'Удалить, правильно загрузить, мыть напрямую', 'Менять лишь после повторных записанных отказов'], ['Обычная производственная плёнка', 'Прямая мойка по предлагаемому процессу', 'Предобработка только после сравнения'], ['Высохший остаток из-за известной задержки', 'Сравнить прямой и ограниченный по времени маршрут', 'Устранить и задержку'], ['Сильный нагар вне нормы', 'Изолировать и оценить отдельно', 'Не превращать аномалию в обещание'], ['Неизвестная, повреждённая, реактивная или покрытая поверхность', 'Отложить до подтверждения', 'Не действовать наугад']],
    directTitle: 'Сделайте прямую мойку стандартным маршрутом', directIntro: 'Нужны видимые контрольные точки.', directSteps: [{ title: 'Шаг 1 — определить', text: 'Подтвердить материал, поверхность, тип и возраст загрязнения, принадлежность к валидированной загрузке.' }, { title: 'Шаг 2 — удалить остатки', text: 'Использовать одобренный метод без скрытой ручной мойки.' }, { title: 'Шаг 3 — одинаково загрузить', text: 'Обеспечить фиксацию, разделение, распыление и сток; записать схему.' }, { title: 'Шаг 4 — проверить', text: 'Оценить по критериям и записать проход, повторную мойку, повреждение, остаток и исключение.' }],
    pretreatTitle: 'Опишите предобработку как управляемый процесс', pretreat: ['Назовите точную комбинацию-триггер.', 'Подтвердите совместимость; не импровизируйте смеси и дозы.', 'Определите метод, ответственного, триггер, перенос, маркировку и безопасность.', 'Не допускайте неразрешённого попадания химии и твёрдых частиц.', 'Повторяйте валидацию после значимых изменений.'],
    testTitle: 'Испытайте два маршрута до покупки', testIntro: 'Используйте одинаковые группы и записывайте каждый шаг.', test: ['Заранее определить приёмку.', 'Маршрут A: удалить остатки, загрузить и мыть напрямую.', 'Маршрут B: только предложенная предобработка, затем та же загрузка и цикл.', 'Записать время, ожидание, расходники, проходы, повтор, брак и изменения.', 'Одобрить самый простой повторяемо успешный маршрут.'],
    measureTitle: 'Считайте скрытую работу', measureIntro: 'Это показатели вашего испытания, не характеристики машины.', formulaLabels: ['Доля предобработки', 'Минуты обработки на принятый противень'], formulae: ['нагрузки с предобработкой ÷ репрезентативные нагрузки × 100%', 'минуты соскребания, загрузки, переноса, осмотра и повторной мойки ÷ принятые противни'],
    redFlagsTitle: 'Тревожные признаки', redFlags: ['Успех только после незаписанного замачивания или чистки.', '«Предварительное ополаскивание» без метода, времени, химии, владельца и одобрения.', 'Лёгкие образцы заменяют худший нормальный случай.', 'Игнорируются повтор, изменение поверхности, остаток или время оператора.', 'Каждый оператор придумывает свой путь.', 'В расчёте покупки нет очереди и ручной работы.'],
    decisionTitle: 'Включите маршрут в приёмку и обучение', decision: 'Для каждой одобренной группы и нормального загрязнения запишите загрузку, результат и исключение. Укажите право изменения и основание повторной валидации. Включите весь регулярный ручной труд в решение о покупке.',
    linksTitle: 'Дополните испытание', linksIntro: 'Разделите тяжесть загрязнения, химию, материал, загрузку и приёмку.', links: ['Классифицировать нагар', 'Проверить химию мойки', 'Проверить алюминий', 'Спланировать тестовую мойку', 'Обсудить ваши противни'],
  },

  th: {
    title: 'ต้องแช่ถาดอบก่อนล้างด้วยเครื่องหรือไม่? คู่มือจัดขั้นตอนที่ใช้งานได้จริง',
    description: 'ตัดสินใจว่าเมื่อใดควรล้างตรง เมื่อใดควรเตรียมล้างแบบควบคุม และจะทดสอบขั้นตอนก่อนซื้ออย่างไร',
    tldr: 'อย่าคิดว่าถาดทุกใบต้องแช่น้ำก่อนล้างเครื่อง <strong>เอาเศษหลวมออก แยกชิ้นที่ไม่ปลอดภัยหรือผิดปกติ แล้วทดสอบการล้างตรงด้วยถาดตัวแทนก่อน</strong> เพิ่มการเตรียมล้างที่บันทึกไว้เฉพาะเมื่อคราบและพื้นผิวที่ระบุชัดล้มเหลวซ้ำ หากถาดปกติยังต้องขัดมือเป็นประจำ ต้องนับแรงงานนี้ในการตัดสินใจซื้อ',
    faqs: [['ต้องแช่ถาดก่อนล้างเครื่องหรือไม่?', 'ไม่เสมอไป เอาเศษหลวมออกและยืนยันการล้างตรงกับถาดปกติก่อน ใช้การเตรียมล้างเฉพาะเงื่อนไขที่ระบุและล้างตรงแก้ไม่ได้อย่างเชื่อถือได้'], ['การขูดเท่ากับการล้างล่วงหน้าหรือไม่?', 'ไม่ การเอาเศษแห้งออกช่วยปกป้องกระบวนการแต่ยังไม่ได้ล้างถาด ส่วนการล้างล่วงหน้าเพิ่มน้ำ เคมี ความร้อน เวลา หรือแรงมือ'], ['อะไรเข้าเครื่องได้โดยตรง?', 'ชิ้นที่วัสดุและสารเคลือบผ่านการยืนยัน คราบอยู่ในโหลดที่ทดสอบ และการจัดวางเปิดทางฉีดกับระบายน้ำ'], ['เมื่อใดควรเตรียมล้าง?', 'เมื่อการทดสอบซ้ำแสดงว่าคู่คราบ–พื้นผิวปกติที่ระบุไม่ผ่าน และวิธีที่อนุมัติแก้ได้โดยไม่ทำลายถาดหรือเกิดความขัดแย้งทางเคมี'], ['ผู้ซื้อควรทดสอบอย่างไร?', 'ใช้ถาดกรณียากสุดที่ยังเป็นงานปกติ บันทึกตัวแปร เปรียบเทียบสองเส้นทาง และประเมินแรงงานทั้งหมดกับผลที่ยอมรับ']],
    answerTitle: 'คำตอบสั้น: ทดสอบล้างตรงก่อน เตรียมล้างเฉพาะข้อยกเว้นที่กำหนด', answer: ['ประเมินเครื่องในขั้นตอนผลิตจริง คำถามไม่ใช่ว่าการแช่ช่วยถาดยากได้หรือไม่ แต่ถาดปกติได้ผลที่ตกลงด้วยวิธีที่ทำซ้ำและใช้แรงงานเหมาะสมหรือไม่', 'กำหนดกฎ: เอาเศษหลวมออก ถาดปกติที่อนุมัติล้างตรง ข้อยกเว้นใช้วิธีที่ระบุ ส่วนชิ้นเสียหาย ไม่เข้ากัน หรือผิดปกติให้แยกตรวจ'],
    sortTitle: 'แยกตามคราบ พื้นผิว และเวลารอ', sortIntro: 'ตัดสินจากชุดเงื่อนไขจริง ไม่ใช่คำว่า “ถาด” ตรวจคำแนะนำผู้ผลิตถาดและผู้จำหน่ายเคมี', sortHeaders: ['สภาพที่พบ', 'เส้นทางแรกที่ทดสอบ', 'กฎยกระดับ'], sortRows: [['เศษหลวมหรือของแข็งบนพื้นผิวที่อนุมัติ', 'เอาออก จัดโหลดถูก แล้วล้างตรง', 'เปลี่ยนเมื่อมีผลล้มเหลวซ้ำที่บันทึก'], ['ฟิล์มจากการผลิตปกติ', 'ล้างตรงตามกระบวนการเสนอ', 'กำหนดเตรียมล้างหลังเปรียบเทียบ'], ['คราบแห้งจากการรอที่ทราบสาเหตุ', 'เทียบล้างตรงกับเส้นทางยกเว้นจำกัดเวลา', 'แก้เวลารอด้วย'], ['คราบคาร์บอนหนักนอกงานปกติ', 'แยกประเมิน', 'อย่าใช้เป็นคำสัญญางานประจำ'], ['พื้นผิวไม่ทราบ เสียหาย ไวต่อปฏิกิริยา หรือเคลือบ', 'พักเพื่อยืนยันความเข้ากันได้', 'ห้ามเดา']],
    directTitle: 'สร้างเส้นทางมาตรฐานที่ล้างตรงก่อน', directIntro: 'ต้องมีด่านที่มองเห็นได้', directSteps: [{ title: 'ด่าน 1 — ระบุ', text: 'ยืนยันวัสดุ พื้นผิว ชนิดและอายุคราบ และว่าอยู่ในโหลดปกติที่ทดสอบ' }, { title: 'ด่าน 2 — เอาเศษออก', text: 'ใช้วิธีที่อนุมัติโดยไม่กลายเป็นการล้างมือที่ซ่อนอยู่' }, { title: 'ด่าน 3 — จัดโหลดให้เหมือนกัน', text: 'ยึด แยก เปิดทางฉีดและระบาย พร้อมบันทึกรูปแบบ' }, { title: 'ด่าน 4 — ตรวจรับ', text: 'ใช้เกณฑ์ที่ตกลงและบันทึกผ่าน ล้างซ้ำ ความเสียหาย คราบ และข้อยกเว้น' }],
    pretreatTitle: 'กำหนดการเตรียมล้างเป็นกระบวนการควบคุม', pretreat: ['ระบุคู่คราบ–พื้นผิวที่กระตุ้นข้อยกเว้น', 'ยืนยันความเข้ากันและคำแนะนำ ห้ามผสมหรือเดาปริมาณ', 'กำหนดวิธี ผู้รับผิดชอบ ตัวกระตุ้น การถ่ายโอน ฉลาก และความปลอดภัย', 'ป้องกันเคมีและของแข็งเข้าเครื่องแบบไม่อนุมัติ', 'ทดสอบใหม่เมื่อมีการเปลี่ยนแปลงที่เกี่ยวข้อง'],
    testTitle: 'ทดสอบสองเส้นทางก่อนซื้อ', testIntro: 'ใช้กลุ่มตัวอย่างเดียวกันและบันทึกทุกขั้น', test: ['กำหนดการยอมรับก่อนล้าง', 'เส้นทาง A: เอาเศษออก จัดโหลด และล้างตรง', 'เส้นทาง B: ใช้เฉพาะการเตรียมล้างที่เสนอ แล้วใช้โหลดและรอบเดิม', 'บันทึกเวลา รอ วัสดุสิ้นเปลือง ผ่าน ล้างซ้ำ คัดทิ้ง และการเปลี่ยนแปลง', 'อนุมัติเส้นทางง่ายสุดที่ได้ผลซ้ำ'],
    measureTitle: 'วัดงานที่ซ่อนอยู่', measureIntro: 'เป็นตัวชี้วัดจากการทดลองของคุณ ไม่ใช่สเปกเครื่อง', formulaLabels: ['อัตราเตรียมล้าง', 'นาทีจัดการต่อถาดที่ผ่าน'], formulae: ['โหลดที่ต้องเตรียมล้าง ÷ โหลดตัวแทน × 100%', 'นาทีขูด จัดโหลด ถ่ายโอน ตรวจ และล้างซ้ำ ÷ ถาดที่ผ่าน'],
    redFlagsTitle: 'สัญญาณเตือน', redFlags: ['สาธิตผ่านหลังแช่หรือขัดที่ไม่บันทึกเท่านั้น', '“ล้างก่อน” ไม่มีวิธี เวลา เคมี ผู้รับผิดชอบ หรืออนุมัติ', 'ตัวอย่างง่ายแทนกรณียากสุดปกติ', 'มองข้ามล้างซ้ำ ผิวเปลี่ยน คราบ หรือเวลาแรงงาน', 'แต่ละคนสร้างวิธีต่างกัน', 'การคำนวณซื้อไม่นับคิวและงานก่อนเครื่อง'],
    decisionTitle: 'เขียนเส้นทางไว้ในการตรวจรับและฝึกอบรม', decision: 'สำหรับถาดและคราบปกติแต่ละกลุ่ม ให้บันทึกรูปแบบโหลด ผล และข้อยกเว้น ระบุผู้มีสิทธิ์เปลี่ยนและหลักฐานที่ต้องทดสอบใหม่ รวมแรงงานประจำทั้งหมดในการตัดสินใจซื้อ',
    linksTitle: 'ใช้หลักฐานที่เกี่ยวข้อง', linksIntro: 'แยกความรุนแรง เคมี วัสดุ โหลด และการตรวจรับ', links: ['จำแนกคราบไหม้', 'ดูเคมีการล้าง', 'ตรวจอะลูมิเนียม', 'วางแผนทดสอบล้าง', 'คุยเรื่องถาดของคุณ'],
  },

  vi: {
    title: 'Có cần ngâm khay nướng trước khi rửa máy không? Hướng dẫn quy trình thực tế',
    description: 'Quyết định khi nào rửa thẳng, khi nào cần tiền xử lý có kiểm soát và cách thử quy trình trước khi mua.',
    tldr: 'Đừng mặc định mọi khay đều phải ngâm. <strong>Loại bỏ chất rắn rời, tách vật dụng không an toàn hoặc bất thường, rồi thử rửa thẳng trước với khay đại diện.</strong> Chỉ thêm tiền xử lý có tài liệu khi một tổ hợp bẩn–bề mặt xác định liên tục không đạt. Nếu khay bình thường vẫn cần chà tay thường xuyên, hãy tính công này vào quyết định mua.',
    faqs: [['Có cần ngâm khay trước khi rửa máy không?', 'Không mặc định. Loại bỏ mảnh rời và xác nhận rửa thẳng trên khay bình thường trước; chỉ dùng tiền xử lý cho điều kiện xác định mà rửa thẳng không giải quyết ổn định.'], ['Cạo vụn có phải rửa sơ không?', 'Không. Loại bỏ khô mảnh vụn bảo vệ quy trình nhưng chưa rửa khay; rửa sơ bổ sung nước, hóa chất, nhiệt, thời gian hoặc thao tác tay.'], ['Khay nào có thể vào máy trực tiếp?', 'Vật dụng có vật liệu/lớp phủ được duyệt, vết bẩn thuộc tải đã xác nhận và cách xếp mở đường phun, thoát nước.'], ['Khi nào tiền xử lý hợp lý?', 'Khi thử lặp lại cho thấy một tổ hợp bình thường xác định không đạt và phương pháp được duyệt khắc phục mà không gây hỏng hay xung đột hóa chất.'], ['Người mua nên thử thế nào?', 'Dùng khay khó nhất trong điều kiện bình thường, ghi biến số, so sánh hai tuyến và đánh giá toàn bộ công việc cùng kết quả đạt.']],
    answerTitle: 'Trả lời ngắn: thử rửa thẳng trước; chỉ tiền xử lý ngoại lệ xác định', answer: ['Đánh giá máy trong quy trình thật. Câu hỏi không phải ngâm có cải thiện một khay khó hay không, mà là khay bình thường có đạt kết quả lặp lại với mức thao tác chấp nhận được.', 'Đặt quy tắc: loại bỏ chất rắn rời; khay bình thường được duyệt đi thẳng; ngoại lệ đã biết theo tiền xử lý quy định; vật dụng hỏng, không tương thích hoặc bất thường được cách ly.'],
    sortTitle: 'Phân loại theo vết bẩn, bề mặt và thời gian chờ', sortIntro: 'Quyết định thuộc về tổ hợp cụ thể. Xác nhận hướng dẫn của nhà sản xuất khay và nhà cung cấp hóa chất.', sortHeaders: ['Tình trạng', 'Tuyến thử đầu tiên', 'Quy tắc nâng cấp'], sortRows: [['Vụn/chất rắn rời trên bề mặt được duyệt', 'Loại bỏ, xếp đúng, rửa thẳng', 'Chỉ đổi sau lỗi lặp lại có ghi'], ['Màng bẩn sản xuất bình thường', 'Rửa thẳng theo quy trình đề xuất', 'Chỉ định tiền xử lý sau so sánh'], ['Cặn khô do chậm trễ đã biết', 'So rửa thẳng với tuyến ngoại lệ có thời hạn', 'Sửa cả nguyên nhân chậm'], ['Than hóa nặng ngoài sản xuất bình thường', 'Cách ly và đánh giá riêng', 'Không biến bất thường thành cam kết'], ['Bề mặt không rõ, hỏng, phản ứng hoặc phủ', 'Giữ lại để xác nhận', 'Không phỏng đoán']],
    directTitle: 'Xây tuyến tiêu chuẩn ưu tiên rửa thẳng', directIntro: 'Cần các cổng kiểm soát rõ ràng.', directSteps: [{ title: 'Cổng 1 — nhận diện', text: 'Xác nhận vật liệu, bề mặt, loại/tuổi vết bẩn và tải đã xác nhận.' }, { title: 'Cổng 2 — bỏ chất rắn', text: 'Dùng phương pháp được duyệt, không biến thành rửa tay ẩn.' }, { title: 'Cổng 3 — xếp nhất quán', text: 'Giữ, tách, mở đường phun và thoát; ghi mẫu xếp.' }, { title: 'Cổng 4 — kiểm tra', text: 'Áp tiêu chí và ghi đạt, rửa lại, hỏng, cặn, ngoại lệ.' }],
    pretreatTitle: 'Quy định tiền xử lý như quy trình kiểm soát', pretreat: ['Nêu chính xác tổ hợp kích hoạt ngoại lệ.', 'Xác nhận tương thích và hướng dẫn; không tự pha hoặc đoán liều.', 'Định nghĩa phương pháp, trách nhiệm, kích hoạt, chuyển, nhãn và an toàn.', 'Ngăn hóa chất/chất rắn vào máy trái quy trình.', 'Xác nhận lại sau thay đổi liên quan.'],
    testTitle: 'Thử hai tuyến trước khi mua', testIntro: 'Dùng cùng nhóm đại diện và ghi từng bước.', test: ['Định nghĩa chấp nhận trước khi rửa.', 'Tuyến A: bỏ chất rắn, xếp và rửa thẳng.', 'Tuyến B: chỉ áp tiền xử lý đề xuất rồi giữ cùng cách xếp và chu trình.', 'Ghi thời gian, chờ, vật tư, đạt, rửa lại, loại và thay đổi.', 'Duyệt tuyến đơn giản nhất đạt lặp lại.'],
    measureTitle: 'Đo công việc ẩn', measureIntro: 'Chỉ số từ thử nghiệm của bạn, không phải thông số máy.', formulaLabels: ['Tỷ lệ tiền xử lý', 'Phút thao tác trên mỗi khay đạt'], formulae: ['tải cần tiền xử lý ÷ tải đại diện × 100%', 'phút cạo, xếp, chuyển, kiểm tra và rửa lại ÷ khay đạt'],
    redFlagsTitle: 'Dấu hiệu cảnh báo', redFlags: ['Chỉ đạt sau khi ngâm/chà không ghi nhận.', '“Rửa sơ” thiếu phương pháp, thời gian, hóa chất, người phụ trách hoặc phê duyệt.', 'Mẫu dễ thay cho trường hợp bình thường khó nhất.', 'Bỏ qua rửa lại, đổi bề mặt, cặn hoặc thời gian.', 'Mỗi người tự nghĩ một tuyến.', 'Tính mua máy bỏ qua hàng chờ và công đầu vào.'],
    decisionTitle: 'Ghi tuyến vào nghiệm thu và đào tạo', decision: 'Với mỗi nhóm khay và vết bẩn bình thường, ghi cách xếp, kết quả và ngoại lệ. Nêu ai được đổi và bằng chứng nào yêu cầu xác nhận lại. Tính mọi công việc tay lặp lại vào quyết định mua.',
    linksTitle: 'Hoàn thiện phép thử', linksIntro: 'Tách mức bẩn, hóa học, vật liệu, xếp tải và nghiệm thu.', links: ['Phân loại mỡ cháy', 'Xem hóa học rửa', 'Kiểm tra nhôm', 'Lập thử rửa mẫu', 'Trao đổi về khay'],
  },

  ar: {
    title: 'هل يجب نقع صواني الخَبز قبل الغسل الآلي؟ دليل عملي لمسار العمل',
    description: 'حدّد متى يبدأ الغسل المباشر، ومتى تبرَّر المعالجة المسبقة المضبوطة، وكيف تختبر المسار قبل الشراء.',
    tldr: 'لا تفترض أن كل صينية تحتاج إلى النقع. <strong>أزل المواد الصلبة المفككة، واعزل القطع غير الآمنة أو الاستثنائية، واختبر الغسل المباشر أولاً على صوانٍ ممثلة.</strong> أضف معالجة مسبقة موثقة فقط عندما يفشل اقتران محدد من الاتساخ والسطح مراراً. وإذا احتاجت الصواني العادية إلى فرك يدوي متكرر، فأدخل هذا العمل في قرار الشراء.',
    faqs: [['هل يجب نقع الصواني قبل الغسل الآلي؟', 'ليس تلقائياً. أزل البقايا المفككة وتحقق أولاً من الغسل المباشر على الصواني العادية الممثلة؛ استخدم المعالجة المسبقة فقط لحالة محددة لا يحلها الغسل المباشر بثبات.'], ['هل الكشط هو غسل مسبق؟', 'لا. إزالة الفتات الجاف تحمي العملية ولا تغسل الصينية؛ أما الغسل المسبق فيضيف ماءً أو كيمياء أو حرارة أو وقتاً أو عملاً يدوياً.'], ['ما الذي يدخل الغسالة مباشرة؟', 'القطع ذات المادة والطلاء المعتمدين، واتساخ ضمن الحمل المتحقق منه، وترتيب يفتح مسارات الرش والتصريف.'], ['متى تبرر المعالجة المسبقة؟', 'عندما تظهر الاختبارات المتكررة أن اقتراناً عادياً محدداً لا يحقق القبول وأن طريقة معتمدة تسد الفجوة بلا تلف أو تعارض كيميائي.'], ['كيف يختبر المشتري الحاجة إلى النقع؟', 'استخدم أصعب صواني الحالة العادية، وسجل المتغيرات، وقارن المسارين، وقيّم كامل العمل والنتيجة المقبولة.']],
    answerTitle: 'الإجابة المختصرة: اختبر الغسل المباشر أولاً وعالج استثناءً محدداً فقط', answer: ['قيّم الغسالة داخل سير الإنتاج الحقيقي. السؤال ليس هل يحسن النقع صينية صعبة، بل هل تحقق الصواني العادية النتيجة المتفق عليها بمسار قابل للتكرار ومناولة مقبولة.', 'ضع قاعدة فرز: إزالة المواد المفككة؛ الغسل المباشر للصواني العادية المعتمدة؛ معالجة محددة للاستثناءات؛ وعزل القطع التالفة أو غير المتوافقة أو غير العادية.'],
    sortTitle: 'افرز حسب الاتساخ والسطح والتأخير', sortIntro: 'القرار للتركيبة الفعلية لا لكلمة «صينية». راجع تعليمات صانع الصينية ومورد الكيميائيات.', sortHeaders: ['الحالة المرصودة', 'المسار الأول للاختبار', 'قاعدة التصعيد'], sortRows: [['فتات أو مواد منفصلة على سطح معتمد', 'أزلها ورتب الحمل واغسل مباشرة', 'غيّر فقط بعد فشل متكرر موثق'], ['غشاء إنتاج عادي', 'غسل مباشر بالعملية المقترحة', 'حدّد المعالجة بعد مقارنة مضبوطة'], ['بقايا جافة بسبب تأخير معروف', 'قارن المباشر بمسار استثنائي محدد الزمن', 'عالج التأخير أيضاً'], ['تفحم شديد خارج الإنتاج العادي', 'اعزل وقيّم منفصلاً', 'لا تجعله وعداً روتينياً'], ['سطح مجهول أو تالف أو تفاعلي أو مطلي', 'أوقفه حتى تأكيد التوافق', 'لا تخمّن']],
    directTitle: 'ابنِ مساراً معيارياً يبدأ بالغسل المباشر', directIntro: 'المسار النافع له بوابات ظاهرة.', directSteps: [{ title: 'البوابة 1 — التعريف', text: 'أكد المادة والسطح ونوع وعمر الاتساخ وانتماءه للحمل المتحقق منه.' }, { title: 'البوابة 2 — إزالة المواد', text: 'استخدم الطريقة المعتمدة بلا تحويلها إلى غسل يدوي خفي.' }, { title: 'البوابة 3 — ترتيب ثابت', text: 'ثبّت وافصل وافتح الرش والتصريف وسجل النمط.' }, { title: 'البوابة 4 — الفحص', text: 'طبّق القبول وسجل النجاح والإعادة والتلف والبقايا والاستثناء.' }],
    pretreatTitle: 'حدّد المعالجة المسبقة كعملية مضبوطة', pretreat: ['سمِّ الاقتران الدقيق الذي يطلق الاستثناء.', 'أكد التوافق والتعليمات ولا ترتجل الخلط أو الجرعة.', 'حدد الطريقة والمسؤول والمشغل والنقل والوسم والسلامة.', 'امنع دخول الكيمياء والمواد الصلبة بطريقة غير معتمدة.', 'أعد التحقق بعد أي تغيير ذي صلة.'],
    testTitle: 'اختبر مسارين قبل الشراء', testIntro: 'استخدم المجموعات الممثلة نفسها وسجل كل خطوة.', test: ['عرّف القبول قبل الغسل.', 'المسار أ: أزل المواد ورتب واغسل مباشرة.', 'المسار ب: طبّق المعالجة المقترحة فقط ثم أبقِ الحمل والدورة نفسيهما.', 'سجل الوقت والانتظار والمستهلكات والنجاح والإعادة والرفض والتغير.', 'اعتمد أبسط مسار يكرر النتيجة.'],
    measureTitle: 'قِس العمل الخفي', measureIntro: 'هذه مؤشرات من اختبارك وليست مواصفات آلة.', formulaLabels: ['معدل المعالجة المسبقة', 'دقائق المناولة لكل صينية مقبولة'], formulae: ['الأحمال التي تحتاج معالجة ÷ الأحمال الممثلة × 100%', 'دقائق الكشط والترتيب والنقل والفحص والإعادة ÷ الصواني المقبولة'],
    redFlagsTitle: 'إشارات خطر', redFlags: ['ينجح العرض فقط بعد نقع أو فرك غير مسجل.', '«شطف مسبق» بلا طريقة أو زمن أو كيمياء أو مسؤول أو اعتماد.', 'عينات سهلة بدل أصعب حالة عادية.', 'تجاهل الإعادة أو تغير السطح أو البقايا أو وقت العامل.', 'كل عامل يخترع مساراً مختلفاً.', 'حساب الشراء يهمل الطابور والمناولة السابقة.'],
    decisionTitle: 'اكتب المسار في القبول والتدريب', decision: 'لكل عائلة صوانٍ معتمدة واتساخ عادي، سجل نمط الحمل والنتيجة والاستثناء. حدد من يغير المسار وما الدليل الذي يوجب إعادة التحقق. أدخل كل العمل اليدوي المتكرر في قرار الشراء.',
    linksTitle: 'أكمل الاختبار بأدلة مترابطة', linksIntro: 'افصل شدة الاتساخ والكيمياء والمادة والحمل والقبول.', links: ['صنّف الدهون المحروقة', 'راجع كيمياء الغسل', 'تحقق من الألمنيوم', 'خطط لاختبار عينة', 'ناقش صوانيك'],
  },
};
