import type { Locale } from './utils';

type DeliveryInspectionBlogCopy = {
  title: string;
  description: string;
  tldr: string;
  faqs: Array<[string, string]>;
  answerTitle: string;
  answer: string[];
  gatesTitle: string;
  gatesIntro: string;
  gateHeaders: [string, string, string];
  gates: Array<{ gate: string; proves: string; evidence: string }>;
  receivingTitle: string;
  receivingIntro: string;
  receivingSteps: string[];
  unpackTitle: string;
  unpackIntro: string;
  unpackChecks: string[];
  commissionTitle: string;
  commissionIntro: string;
  commissionSteps: string[];
  evidenceTitle: string;
  evidenceItems: string[];
  redFlagsTitle: string;
  redFlags: string[];
  nextTitle: string;
  nextIntro: string;
  links: string[];
};

export const deliveryInspectionBlogCopy: Record<Locale, DeliveryInspectionBlogCopy> = {
  en: {
    title: "How to Inspect a Bakery Tray Washer on Delivery: A Buyer's Receiving Checklist",
    description: 'Use three separate acceptance gates for freight delivery, installation, and wet commissioning so damage, missing items, and performance issues stay traceable.',
    tldr: 'Do not treat one signature at the loading bay as final acceptance of a bakery tray washer. Use <strong>three separate gates</strong>: record freight condition before the vehicle leaves, verify identity and completeness during unpacking, then accept operation only after correct installation and a documented wet commissioning test. Photos, serial details, delivery notes, and signed exceptions preserve a clear evidence trail.',
    faqs: [
      ['Should I sign for a bakery tray washer before opening the crate?', 'Follow the carrier process, but do not sign an unqualified clean receipt when visible damage or shortages exist. Photograph all sides first, note exceptions on the delivery record, and preserve packaging until the supplier or carrier gives written instructions.'],
      ['Is an undamaged crate proof that the machine is undamaged?', 'No. Packaging can look normal while internal fittings, panels, accessories, or connections have shifted. Exterior receiving and controlled unpacking are separate inspection stages.'],
      ['Can the delivery driver wait for a full machine test?', 'Usually the roadside handover is not the commissioning test. Use the delivery stage to document freight condition and count packages; arrange installation and wet testing with the responsible supplier or technician.'],
      ['What should I photograph on delivery?', 'Capture the vehicle-side condition, every face and corner of the crate, labels and seals, any tears or impact marks, the machine after opening, included accessories, identification plate, connections, and each defect in wide and close views.'],
      ['When is the tray washer finally accepted?', 'Only according to the agreed contract. A sound process separates freight receipt from installation completion and from functional acceptance after the documented load, chemistry, utilities, safety checks, and result have passed.'],
    ],
    answerTitle: 'Short answer: receive the shipment, not the performance promise',
    answer: [
      'At delivery, you can prove what arrived and what condition was visible. You normally cannot prove cleaning performance until the washer is unpacked, connected to the approved utilities, commissioned, and tested with the agreed ware and chemistry. Combining those decisions into one signature makes later damage, shortage, installation, and performance disputes harder to diagnose.',
      'Before dispatch, put the three gates and their owners in the purchase record. Name who may sign the carrier document, who may authorize installation, who runs commissioning, which exceptions must be written down, and what evidence starts each warranty or claim process.',
    ],
    gatesTitle: 'Use three acceptance gates',
    gatesIntro: 'Each gate answers a different question. Passing one does not prove the next.',
    gateHeaders: ['Gate', 'What it proves', 'Minimum evidence'],
    gates: [
      { gate: '1. Freight receipt', proves: 'Package count and visible condition at handover', evidence: 'Dated photos, labels, seal condition, delivery note, and written exceptions' },
      { gate: '2. Unpacking and installation', proves: 'Correct machine and accessories arrived and can be installed as specified', evidence: 'Identification details, packing-list check, defect log, connection record, and installer sign-off' },
      { gate: '3. Wet commissioning', proves: 'The installed system operates and produces the agreed result under recorded conditions', evidence: 'Settings, utilities, chemistry, load, observations, results, training, and signed punch list' },
    ],
    receivingTitle: 'Before the vehicle leaves',
    receivingIntro: 'Prepare a phone or camera, the purchase order, packing list, supplier contact, and a receiving form before the delivery slot.',
    receivingSteps: [
      'Confirm the shipment reference and count every crate, carton, rack, or separately listed package before anything is moved indoors.',
      'Photograph the load on the vehicle and all sides, corners, top, base, labels, tilt or shock indicators, straps, and seals before removal.',
      'Look for crushed corners, punctures, water marks, broken bases, missing fasteners, shifted loads, or signs that the crate was opened.',
      'If an exception exists, describe its location and condition on the carrier record before signing; avoid vague wording such as “damaged.”',
      'Keep copies of the signed record and the original photos. Notify the supplier and responsible carrier contact through the agreed channel promptly.',
      'Do not discard, repair, energize, or return disputed goods until the responsible party gives written instructions, unless immediate action is needed to prevent further damage or a safety hazard.',
    ],
    unpackTitle: 'Control the unpacking and identity check',
    unpackIntro: 'Open the shipment in a clear area with the packing list and a continuous photo record. Keep packaging organized until the inspection is closed.',
    unpackChecks: [
      'Match the model, identification plate, serial details, electrical configuration, and ordered options to the approved order.',
      'Count racks, holders, hoses, dispensers, manuals, spare items, and loose accessories against the packing list.',
      'Inspect panels, hood or door movement, feet, spray assemblies, filters, tanks, wiring enclosures, hoses, fittings, and exposed connection points.',
      'Record dents, distortion, loose parts, abrasion, corrosion, fluid traces, broken seals, or foreign material without attempting an unapproved repair.',
      'Check that the planned route, lifting method, doorway, floor, utilities, clearances, and drain remain suitable before moving the machine into position.',
      'Create one numbered defect or shortage list with a photo, description, responsible party, target action, and closure status for every item.',
    ],
    commissionTitle: 'Accept operation only after wet commissioning',
    commissionIntro: 'Commissioning begins after a qualified installer confirms that the machine and site match the approved requirements. Do not use a freight receipt as the commissioning certificate.',
    commissionSteps: [
      'Record installer identity, installation date, machine identity, supply connections, protective devices, water treatment, chemical products, and initial settings.',
      'Complete the manufacturer-required pre-start checks, then observe filling, heating, circulation, spray movement, dosing, draining, leaks, alarms, and safe controls.',
      'Run the agreed representative load with the documented orientation, soil condition, pre-treatment, chemistry, and cycle. Do not substitute an easy demonstration load.',
      'Inspect every item after drying against the pre-agreed cleaning and surface-condition criteria; record failures by rack position instead of averaging them away.',
      'Confirm operator training for loading, chemical handling, daily cleaning, shutdown, basic fault response, and who may change settings.',
      'List every open item, owner, deadline, retest condition, and effect on acceptance. Sign only the stage that has actually passed.',
    ],
    evidenceTitle: 'Keep one receiving and commissioning file',
    evidenceItems: [
      'Purchase order, approved specification, drawings, agreed delivery terms, packing list, and carrier document.',
      'Original dated photos and videos, not only compressed images inside a messaging app.',
      'Machine identification details, accessory count, installation record, and numbered exception log.',
      'Commissioning settings, chemical products, utility readings requested by the supplier, test-load description, and results.',
      'Training attendance, manuals, maintenance handover, warranty documents, and supplier contacts.',
      'Written closure for each shortage, damage item, correction, and repeat test.',
    ],
    redFlagsTitle: 'Receiving red flags',
    redFlags: [
      '“Sign clean now and report damage later” even though visible exceptions are present.',
      'The model, configuration, or accessories cannot be checked against an approved packing list and order.',
      'Packaging is discarded before concealed-damage inspection or written claim guidance.',
      'The machine is powered or plumbed by an unapproved person before condition and site compatibility are recorded.',
      'A no-load startup is presented as proof of cleaning acceptance, or open defects disappear from the final signed record.',
    ],
    nextTitle: 'Prepare the documents before dispatch',
    nextIntro: 'Use these site pages to align delivery terms, installation, machine identity, performance testing, and supplier responsibility.',
    links: ['Review shipping and payment terms', 'Prepare the installation site', 'Verify the JD-3 specification', 'Plan the sample-wash acceptance test', 'Request a documented quotation'],
  },

  zh: {
    title: '烤盘清洗机到货如何验收？买家收货检查清单',
    description: '把货运签收、拆箱安装和带水调试分成三个验收关口，让损坏、缺件与性能问题都有可追溯证据。',
    tldr: '不要把装卸区的一次签字当成烤盘清洗机的最终验收。应设置<strong>三个独立关口</strong>：车辆离场前记录货运状态；拆箱时核对设备身份与完整性；正确安装并完成有记录的带水调试后，才验收运行结果。照片、序列信息、签收单和书面异常记录能保留清晰证据链。',
    faqs: [
      ['未开箱前可以签收烤盘清洗机吗？', '按承运人流程办理，但发现外观损坏或缺件时，不要签署无保留的“完好收货”。先拍摄各面，在签收记录上写明异常，并保留包装，等待供应商或承运人书面指示。'],
      ['木箱无损是否说明机器无损？', '不能。外包装可能正常，内部接头、面板、附件或连接件却已移位。外观签收与受控拆箱是两个不同检查阶段。'],
      ['司机需要等到整机测试结束吗？', '通常路边交接不是调试验收。收货阶段应记录货运状态和件数；安装与带水测试应由约定的供应商或技术人员安排。'],
      ['到货时应该拍什么？', '拍车辆上的货物状态、包装各面和角位、标签和封条、破损或撞击痕迹、开箱后的机器、所带附件、铭牌、接口，以及每项缺陷的全景和近景。'],
      ['什么时候才算最终验收？', '以合同约定为准。稳妥流程应把货运签收、安装完成和功能验收分开；只有记录的装载、药剂、公用工程、安全检查与结果都通过后，才确认相应阶段。'],
    ],
    answerTitle: '简短答案：到货只验收到货事实，不验收性能承诺',
    answer: [
      '交货时能证明的是送来了什么，以及当时可见的状态。只有设备拆箱、接入获批公用工程、完成调试，并用约定器具和药剂测试后，通常才能证明清洗性能。把这些决定合并成一个签字，会让后续损坏、缺件、安装和性能争议更难定位。',
      '发货前就应把三个关口及责任人写进采购记录：谁能签承运单、谁批准安装、谁执行调试、哪些异常必须书面记录，以及每种保修或索赔流程需要什么证据。',
    ],
    gatesTitle: '设置三个验收关口',
    gatesIntro: '每个关口回答不同问题；通过前一关不代表后一关也通过。',
    gateHeaders: ['关口', '证明内容', '最低证据'],
    gates: [
      { gate: '1. 货运签收', proves: '交接时的件数与可见状态', evidence: '带日期照片、标签、封条状态、签收单与书面异常' },
      { gate: '2. 拆箱与安装', proves: '正确设备与附件已到齐，并可按规格安装', evidence: '设备身份、装箱单核对、缺陷记录、连接记录与安装方签字' },
      { gate: '3. 带水调试', proves: '安装后的系统在有记录条件下运行并达到约定结果', evidence: '设定、公用工程、药剂、装载、观察结果、培训与签字整改表' },
    ],
    receivingTitle: '车辆离场前要做什么',
    receivingIntro: '到货时段开始前，准备好手机或相机、采购单、装箱单、供应商联系人和收货表。',
    receivingSteps: [
      '核对运单编号，任何货物移入室内前，清点每个木箱、纸箱、洗碗筐及单列包件。',
      '卸货前拍摄车辆上的装载状态、包装各面、角位、顶部、底座、标签、倾斜或冲击指示器、绑带和封条。',
      '检查角部压溃、穿孔、水渍、底座破裂、紧固件缺失、货物移位或包装被打开的迹象。',
      '发现异常时，签字前在承运记录中写明位置与状态，不要只写含糊的“有损坏”。',
      '保存签字文件副本和原始照片，并按约定渠道及时通知供应商及承运责任联系人。',
      '在责任方给出书面指示前，不要丢弃包装、自行维修、通电或退运争议货物；防止损害扩大或排除安全危险所需的紧急措施除外。',
    ],
    unpackTitle: '受控拆箱并核对设备身份',
    unpackIntro: '在空旷区域按装箱单开箱，连续拍照，并在检查关闭前分类保留包装。',
    unpackChecks: [
      '把型号、铭牌、序列信息、电气配置和订购选项与获批订单逐项核对。',
      '按装箱单清点洗碗筐、支架、软管、投加器、说明书、备件和散装附件。',
      '检查面板、机罩或门的动作、脚座、喷淋组件、过滤器、水箱、电气箱、软管、接头和外露接口。',
      '记录凹陷、变形、松动、磨损、腐蚀、液体痕迹、封条破损或异物，不要擅自维修。',
      '移机就位前，再次确认搬运路线、吊装方式、门宽、地面、公用工程、检修空间和排水仍然合适。',
      '建立统一编号的缺陷/缺件表，每项包含照片、描述、责任方、目标措施和关闭状态。',
    ],
    commissionTitle: '完成带水调试后再验收运行',
    commissionIntro: '有资质的安装方确认设备和现场符合获批要求后，才开始调试。不要把货运签收单当成调试合格证。',
    commissionSteps: [
      '记录安装人员、日期、设备身份、供给接口、保护装置、水处理、药剂产品和初始设定。',
      '完成厂家要求的启动前检查，再观察进水、加热、循环、喷淋运动、投加、排水、泄漏、报警与安全控制。',
      '用约定的代表性装载测试，并记录摆放方向、污物状态、预处理、药剂与程序；不要换成容易清洗的演示品。',
      '器具干燥后，按预先约定的洁净和表面状态标准逐件检查；按筐位记录失败，不能用平均结果掩盖。',
      '确认操作员已接受装载、药剂处理、日常清洁、停机、基本故障应对及设定变更权限培训。',
      '列出每项未完成事项、责任人、期限、复测条件和对验收的影响；只签署真正通过的阶段。',
    ],
    evidenceTitle: '建立一份收货与调试档案',
    evidenceItems: ['采购单、获批规格、图纸、交货条款、装箱单与承运文件。', '原始带日期照片和视频，而不只是聊天软件内的压缩图片。', '设备身份、附件清点、安装记录及编号异常表。', '调试设定、药剂、公用工程读数、测试装载描述与结果。', '培训签到、说明书、维护交接、保修文件与供应商联系人。', '每项缺件、损坏、整改和复测的书面关闭记录。'],
    redFlagsTitle: '收货危险信号',
    redFlags: ['明明有可见异常，却要求“先签完好，之后再报损”。', '没有获批装箱单和订单，无法核对型号、配置或附件。', '隐藏损坏检查或书面索赔指示完成前就丢弃包装。', '记录设备状态与现场兼容性之前，由未经批准人员通电或接水。', '把空载启动当成清洗验收证明，或最终签字文件中删掉未关闭缺陷。'],
    nextTitle: '发货前准备好文件',
    nextIntro: '用这些站内页面统一交货条款、安装、设备身份、性能测试与供应商责任。',
    links: ['核对运输与付款条款', '准备安装现场', '核对 JD-3 规格', '规划样洗验收测试', '索取有记录的报价'],
  },

  es: {
    title: 'Cómo inspeccionar un lavabandejas al recibirlo: lista para el comprador',
    description: 'Separe recepción, instalación y puesta en marcha húmeda para que daños, faltantes y problemas de rendimiento queden documentados.',
    tldr: 'No convierta una firma en el muelle en la aceptación final del lavabandejas. Use <strong>tres hitos separados</strong>: documente el transporte antes de que salga el vehículo, confirme identidad e integridad al desembalar y acepte el funcionamiento solo tras una instalación correcta y una puesta en marcha húmeda documentada. Fotos, serie, albarán y excepciones escritas crean una trazabilidad clara.',
    faqs: [
      ['¿Debo firmar antes de abrir la caja?', 'Siga el procedimiento del transportista, pero no firme una recepción limpia si hay daños visibles o faltantes. Fotografíe todo, anote excepciones y conserve el embalaje hasta recibir instrucciones escritas.'],
      ['¿Una caja intacta demuestra que la máquina está intacta?', 'No. Dentro pueden haberse desplazado conexiones, paneles o accesorios. La inspección exterior y el desembalaje controlado son etapas distintas.'],
      ['¿Debe esperar el conductor a la prueba completa?', 'Normalmente la entrega no es la puesta en marcha. Documente estado y bultos; programe instalación y prueba húmeda con el responsable técnico.'],
      ['¿Qué debo fotografiar?', 'La carga en el vehículo, todas las caras y esquinas, etiquetas, sellos, golpes, la máquina abierta, accesorios, placa, conexiones y cada defecto en planos general y cercano.'],
      ['¿Cuándo queda aceptada la máquina?', 'Según el contrato. Conviene separar transporte, instalación y aceptación funcional; esta última llega cuando carga, química, servicios, seguridad y resultado documentados cumplen.'],
    ],
    answerTitle: 'Respuesta breve: reciba el envío, no la promesa de rendimiento',
    answer: ['En la entrega puede demostrar qué llegó y su estado visible. El lavado solo se demuestra después de desembalar, conectar los servicios aprobados, poner en marcha y probar la carga y química acordadas. Una sola firma mezcla causas distintas.', 'Defina antes del despacho los tres hitos y responsables: quién firma al transportista, quién autoriza la instalación, quién prueba, qué excepciones se escriben y qué evidencia inicia garantía o reclamación.'],
    gatesTitle: 'Use tres hitos de aceptación', gatesIntro: 'Cada hito responde una pregunta diferente; superar uno no demuestra el siguiente.', gateHeaders: ['Hito', 'Qué demuestra', 'Evidencia mínima'],
    gates: [
      { gate: '1. Recepción', proves: 'Bultos y estado visible en la entrega', evidence: 'Fotos fechadas, etiquetas, sellos, albarán y reservas escritas' },
      { gate: '2. Desembalaje e instalación', proves: 'Llegaron equipo y accesorios correctos y pueden instalarse', evidence: 'Identidad, lista verificada, defectos, conexiones y firma del instalador' },
      { gate: '3. Puesta en marcha húmeda', proves: 'El sistema instalado funciona y logra el resultado acordado', evidence: 'Ajustes, servicios, química, carga, resultados, formación y pendientes' },
    ],
    receivingTitle: 'Antes de que salga el vehículo', receivingIntro: 'Prepare cámara, pedido, lista de bultos, contacto y formulario antes de la cita.',
    receivingSteps: ['Confirme la referencia y cuente cajas, cartones, cestas y paquetes antes de moverlos.', 'Fotografíe la carga y todas las caras, esquinas, base, etiquetas, indicadores, flejes y sellos antes de descargar.', 'Busque aplastamientos, perforaciones, agua, bases rotas, fijaciones ausentes, desplazamientos o apertura.', 'Describa ubicación y estado de cada excepción en el albarán antes de firmar; evite escribir solo “dañado”.', 'Guarde copia firmada y originales de fotos; avise pronto por el canal acordado.', 'No deseche, repare, conecte ni devuelva lo discutido sin instrucciones escritas, salvo para evitar más daño o peligro.'],
    unpackTitle: 'Controle el desembalaje y la identidad', unpackIntro: 'Abra en una zona despejada con la lista y un registro fotográfico continuo; conserve el embalaje.',
    unpackChecks: ['Compare modelo, placa, serie, configuración eléctrica y opciones con el pedido aprobado.', 'Cuente cestas, soportes, mangueras, dosificadores, manuales, repuestos y accesorios.', 'Revise paneles, capota o puerta, patas, rociadores, filtros, depósitos, cuadros, mangueras, racores y conexiones.', 'Registre golpes, deformación, piezas sueltas, abrasión, corrosión, líquidos, sellos rotos o cuerpos extraños sin reparar.', 'Vuelva a confirmar ruta, elevación, puertas, suelo, servicios, holguras y desagüe antes de colocar.', 'Cree una lista numerada con foto, descripción, responsable, acción y cierre.'],
    commissionTitle: 'Acepte el funcionamiento tras la puesta en marcha húmeda', commissionIntro: 'Comience cuando un instalador competente confirme máquina y emplazamiento. El albarán no es certificado de puesta en marcha.',
    commissionSteps: ['Registre instalador, fecha, identidad, conexiones, protecciones, tratamiento de agua, químicos y ajustes.', 'Haga las comprobaciones previas y observe llenado, calentamiento, circulación, rociado, dosificación, desagüe, fugas, alarmas y seguridades.', 'Pruebe la carga acordada con orientación, suciedad, pretratamiento, química y ciclo documentados.', 'Inspeccione cada pieza seca según criterios acordados y registre fallos por posición.', 'Confirme formación sobre carga, químicos, limpieza diaria, parada, fallos básicos y permisos de ajuste.', 'Anote pendiente, responsable, fecha, condición de repetición y efecto; firme solo el hito superado.'],
    evidenceTitle: 'Conserve un único expediente', evidenceItems: ['Pedido, especificación, planos, entrega, lista de bultos y albarán.', 'Fotos y vídeos originales fechados.', 'Identidad, accesorios, instalación y registro numerado de excepciones.', 'Ajustes, químicos, lecturas solicitadas, carga y resultados.', 'Formación, manuales, mantenimiento, garantía y contactos.', 'Cierre escrito de faltantes, daños, correcciones y nuevas pruebas.'],
    redFlagsTitle: 'Señales de alerta', redFlags: ['“Firme limpio ahora y reclame después” pese a daños visibles.', 'No existe pedido o lista aprobada para verificar configuración.', 'Se tira el embalaje antes de revisar daños ocultos.', 'Una persona no autorizada conecta la máquina antes de documentarla.', 'Un arranque sin carga se vende como aceptación o se borran pendientes.'],
    nextTitle: 'Prepare los documentos antes del despacho', nextIntro: 'Alinee entrega, instalación, identidad, prueba y responsabilidad con estas páginas.', links: ['Revisar envío y pago', 'Preparar la instalación', 'Verificar la especificación JD-3', 'Planificar la prueba de lavado', 'Solicitar una oferta documentada'],
  },

  fr: {
    title: "Comment inspecter un lave-plaques à la livraison : checklist de réception",
    description: "Séparez réception, installation et mise en service en eau pour tracer dommages, manquants et problèmes de résultat.",
    tldr: "Ne faites pas d'une signature au quai l'acceptation finale du lave-plaques. Prévoyez <strong>trois jalons distincts</strong> : état du transport avant le départ du véhicule, identité et contenu au déballage, puis fonctionnement après installation correcte et mise en service en eau documentée. Photos, numéro de série, bon de livraison et réserves écrites forment la preuve.",
    faqs: [
      ["Faut-il signer avant d'ouvrir la caisse ?", "Suivez la procédure du transporteur, mais ne signez pas sans réserve si un dommage ou un manque est visible. Photographiez, notez les réserves et gardez l'emballage jusqu'aux instructions écrites."],
      ["Une caisse intacte prouve-t-elle que la machine est intacte ?", "Non. Des raccords, panneaux ou accessoires peuvent avoir bougé. Contrôle extérieur et déballage contrôlé sont deux étapes."],
      ["Le chauffeur doit-il attendre l'essai complet ?", "En général, la remise transport n'est pas la mise en service. Constatez l'état et les colis, puis organisez installation et essai en eau avec le responsable."],
      ["Que faut-il photographier ?", "La charge dans le véhicule, toutes les faces et angles, étiquettes, scellés, impacts, machine ouverte, accessoires, plaque, raccords et chaque défaut en vue générale et rapprochée."],
      ["Quand la machine est-elle définitivement acceptée ?", "Selon le contrat. Séparez transport, installation et acceptation fonctionnelle après validation documentée de la charge, chimie, réseaux, sécurité et résultat."],
    ],
    answerTitle: "Réponse courte : réceptionnez l'envoi, pas la promesse de performance",
    answer: ["À la livraison, vous prouvez ce qui arrive et son état visible. Le résultat de lavage ne se prouve qu'après déballage, raccordement conforme, mise en service et essai avec la vaisselle et la chimie convenues. Une seule signature confond des causes différentes.", "Avant expédition, définissez les trois jalons et leurs responsables : signature transport, autorisation d'installation, mise en service, réserves écrites et preuves nécessaires aux recours."],
    gatesTitle: "Trois jalons d'acceptation", gatesIntro: "Chaque jalon répond à une question différente ; l'un ne valide pas le suivant.", gateHeaders: ['Jalon', 'Ce qu’il prouve', 'Preuve minimale'],
    gates: [
      { gate: '1. Réception transport', proves: 'Nombre de colis et état visible', evidence: 'Photos datées, étiquettes, scellés, bon et réserves' },
      { gate: '2. Déballage et installation', proves: 'Bonne machine, accessoires complets et installation possible', evidence: 'Identité, colisage, défauts, raccordements et visa installateur' },
      { gate: '3. Mise en service en eau', proves: 'Le système installé fonctionne et atteint le résultat convenu', evidence: 'Réglages, réseaux, chimie, charge, résultats, formation et réserves' },
    ],
    receivingTitle: 'Avant le départ du véhicule', receivingIntro: 'Préparez appareil photo, commande, colisage, contact et formulaire avant le créneau.',
    receivingSteps: ['Vérifiez la référence et comptez caisses, cartons, paniers et colis avant déplacement.', 'Photographiez la charge, toutes les faces, angles, base, étiquettes, témoins, sangles et scellés avant déchargement.', 'Cherchez écrasements, perforations, eau, base cassée, fixations absentes, déplacement ou ouverture.', 'Décrivez lieu et état de chaque réserve sur le bon avant signature ; évitez le seul mot « endommagé ».', 'Gardez bon signé et photos originales ; avertissez rapidement par le canal convenu.', 'Ne jetez, réparez, branchez ou retournez rien sans instruction écrite, sauf urgence de sécurité ou de préservation.'],
    unpackTitle: "Maîtriser le déballage et l'identification", unpackIntro: "Ouvrez dans une zone dégagée avec le colisage et un suivi photo continu ; gardez l'emballage.",
    unpackChecks: ['Comparez modèle, plaque, série, configuration électrique et options à la commande.', 'Comptez paniers, supports, flexibles, doseurs, manuels, pièces et accessoires.', 'Contrôlez panneaux, capot ou porte, pieds, bras, filtres, cuves, coffrets, flexibles, raccords et attentes.', 'Consignez chocs, déformation, jeu, abrasion, corrosion, liquide, scellé rompu ou corps étranger sans réparation non autorisée.', 'Revalidez trajet, levage, portes, sol, réseaux, dégagements et évacuation avant mise en place.', 'Tenez une liste numérotée avec photo, description, responsable, action et clôture.'],
    commissionTitle: "Accepter après mise en service en eau", commissionIntro: "Un installateur compétent doit d'abord confirmer la conformité machine-site. Le bon de transport n'est pas un procès-verbal de mise en service.",
    commissionSteps: ["Consignez installateur, date, identité, raccordements, protections, traitement d'eau, produits et réglages.", 'Effectuez les contrôles préalables puis observez remplissage, chauffe, circulation, bras, dosage, vidange, fuites, alarmes et sécurités.', 'Testez la charge convenue avec orientation, salissure, prétraitement, chimie et cycle documentés.', 'Inspectez chaque pièce sèche selon les critères convenus et relevez les échecs par position.', "Validez la formation au chargement, aux produits, au nettoyage, à l'arrêt, aux défauts simples et aux droits de réglage.", "Listez action, responsable, délai, condition de nouvel essai et effet ; ne signez que l'étape réussie."],
    evidenceTitle: 'Conserver un dossier unique', evidenceItems: ['Commande, spécification, plans, livraison, colisage et bon transport.', 'Photos et vidéos originales datées.', "Identité, accessoires, installation et registre numéroté d'écarts.", 'Réglages, produits, relevés demandés, charge test et résultats.', 'Formation, manuels, maintenance, garantie et contacts.', 'Clôture écrite de chaque manque, dommage, correction et nouvel essai.'],
    redFlagsTitle: 'Signaux d’alerte', redFlags: ['« Signez sans réserve et déclarez après » malgré un dommage visible.', 'Impossible de vérifier la configuration faute de commande ou colisage approuvé.', "Emballage jeté avant l'examen des dommages cachés.", 'Branchement par une personne non autorisée avant constat.', 'Démarrage à vide présenté comme acceptation ou réserves ouvertes supprimées.'],
    nextTitle: "Préparer les documents avant l'expédition", nextIntro: 'Alignez livraison, installation, identité, essai et responsabilités avec ces pages.', links: ['Vérifier expédition et paiement', "Préparer l'installation", 'Vérifier la fiche JD-3', "Planifier l'essai de lavage", 'Demander une offre documentée'],
  },

  de: {
    title: 'Backblechspülmaschine bei Lieferung prüfen: Checkliste für Käufer',
    description: 'Trennen Sie Frachtannahme, Installation und Nass-Inbetriebnahme, damit Schäden, Fehlteile und Leistungsprobleme nachvollziehbar bleiben.',
    tldr: 'Eine Unterschrift an der Rampe ist nicht die Endabnahme. Nutzen Sie <strong>drei getrennte Stufen</strong>: Frachtzustand vor Abfahrt des Fahrzeugs, Identität und Vollständigkeit beim Auspacken, Funktionsabnahme erst nach korrekter Installation und dokumentierter Nass-Inbetriebnahme. Fotos, Serienangaben, Lieferschein und schriftliche Vorbehalte sichern die Beweiskette.',
    faqs: [
      ['Soll ich vor dem Öffnen der Kiste unterschreiben?', 'Befolgen Sie den Frachtablauf, unterschreiben Sie bei sichtbaren Schäden oder Fehlmengen aber nicht vorbehaltlos. Fotografieren, Vorbehalt vermerken und Verpackung bis zur schriftlichen Anweisung aufbewahren.'],
      ['Beweist eine intakte Kiste eine intakte Maschine?', 'Nein. Anschlüsse, Bleche oder Zubehör können sich innen verschoben haben. Außenkontrolle und kontrolliertes Auspacken sind getrennte Prüfungen.'],
      ['Muss der Fahrer auf den vollständigen Test warten?', 'Die Frachtübergabe ist gewöhnlich keine Inbetriebnahme. Dokumentieren Sie Zustand und Packstücke; Installation und Nasstest erfolgen mit dem Verantwortlichen.'],
      ['Was soll ich fotografieren?', 'Ladung im Fahrzeug, alle Seiten und Ecken, Etiketten, Siegel, Schäden, ausgepackte Maschine, Zubehör, Typenschild, Anschlüsse sowie jeden Mangel in Gesamt- und Nahaufnahme.'],
      ['Wann ist die Maschine endgültig abgenommen?', 'Nach Vertrag. Fracht, Installation und Funktionsabnahme sollten getrennt sein; letztere erst nach dokumentierter Prüfung von Beladung, Chemie, Medien, Sicherheit und Ergebnis.'],
    ],
    answerTitle: 'Kurz gesagt: Nehmen Sie die Sendung an, nicht das Leistungsversprechen',
    answer: ['Bei Lieferung lassen sich Inhalt und sichtbarer Zustand belegen. Spülleistung erst nach Auspacken, zugelassener Installation, Inbetriebnahme und Test mit vereinbartem Spülgut und Chemie. Eine einzige Unterschrift vermischt verschiedene Ursachen.', 'Definieren Sie vor Versand die drei Stufen und Verantwortlichen: Frachtunterschrift, Installationsfreigabe, Inbetriebnahme, schriftliche Abweichungen und Nachweise für Garantie oder Anspruch.'],
    gatesTitle: 'Drei Abnahmestufen', gatesIntro: 'Jede Stufe beantwortet eine andere Frage; eine bestandene Stufe beweist nicht die nächste.', gateHeaders: ['Stufe', 'Nachweis', 'Mindestbeleg'],
    gates: [
      { gate: '1. Frachtannahme', proves: 'Packstückzahl und sichtbarer Übergabezustand', evidence: 'Datierte Fotos, Etiketten, Siegel, Lieferschein und Vorbehalte' },
      { gate: '2. Auspacken und Installation', proves: 'Richtige Maschine und Zubehör, spezifikationsgemäß installierbar', evidence: 'Identität, Packlistenprüfung, Mängel, Anschlüsse und Installateurfreigabe' },
      { gate: '3. Nass-Inbetriebnahme', proves: 'Installiertes System arbeitet mit vereinbartem Ergebnis', evidence: 'Einstellungen, Medien, Chemie, Beladung, Ergebnis, Schulung und Restpunkte' },
    ],
    receivingTitle: 'Bevor das Fahrzeug abfährt', receivingIntro: 'Kamera, Bestellung, Packliste, Kontakt und Annahmeformular vor dem Termin bereitlegen.',
    receivingSteps: ['Sendungsreferenz prüfen und Kisten, Kartons, Körbe sowie Einzelpakete vor dem Bewegen zählen.', 'Ladung sowie alle Seiten, Ecken, Basis, Etiketten, Indikatoren, Gurte und Siegel vor dem Abladen fotografieren.', 'Auf Quetschungen, Löcher, Wasserspuren, gebrochene Basis, fehlende Befestigungen, Verschiebung oder Öffnung achten.', 'Ort und Zustand jeder Abweichung vor Unterschrift konkret eintragen; nicht nur „beschädigt“ schreiben.', 'Kopie und Originalfotos sichern; Lieferant und Frachtkontakt über den vereinbarten Kanal informieren.', 'Streitware ohne schriftliche Anweisung nicht entsorgen, reparieren, anschließen oder zurücksenden, außer zur Gefahren- oder Schadensabwehr.'],
    unpackTitle: 'Auspacken und Identität kontrollieren', unpackIntro: 'Mit Packliste in freier Fläche und durchgehender Fotodokumentation öffnen; Verpackung aufbewahren.',
    unpackChecks: ['Modell, Typenschild, Serienangaben, Elektrik und Optionen mit der Bestellung abgleichen.', 'Körbe, Halter, Schläuche, Dosierer, Anleitungen, Ersatzteile und Zubehör zählen.', 'Bleche, Haube oder Tür, Füße, Sprüheinheiten, Filter, Tanks, Schaltschränke, Schläuche, Fittings und Anschlüsse prüfen.', 'Dellen, Verzug, lose Teile, Abrieb, Korrosion, Flüssigkeit, gebrochene Siegel oder Fremdkörper ohne Eigenreparatur dokumentieren.', 'Transportweg, Hebung, Türen, Boden, Medien, Freiräume und Ablauf vor Aufstellung erneut bestätigen.', 'Nummerierte Mängelliste mit Foto, Beschreibung, Verantwortlichem, Maßnahme und Status führen.'],
    commissionTitle: 'Betrieb erst nach Nass-Inbetriebnahme abnehmen', commissionIntro: 'Eine qualifizierte Person bestätigt zuerst Maschine und Standort. Der Frachtschein ist kein Inbetriebnahmeprotokoll.',
    commissionSteps: ['Installateur, Datum, Maschine, Anschlüsse, Schutz, Wasseraufbereitung, Chemie und Einstellungen erfassen.', 'Vorprüfungen ausführen; Füllen, Heizen, Umwälzen, Sprühen, Dosieren, Ablassen, Lecks, Alarme und Sicherheit beobachten.', 'Vereinbarte repräsentative Beladung mit dokumentierter Ausrichtung, Verschmutzung, Vorbehandlung, Chemie und Programm testen.', 'Jedes trockene Teil nach Kriterien prüfen und Fehler nach Korbposition erfassen.', 'Schulung zu Beladung, Chemie, Tagesreinigung, Abschaltung, Basisstörungen und Einstellrechten bestätigen.', 'Offene Punkte, Eigentümer, Frist, Wiederholprüfung und Abnahmewirkung festhalten; nur bestandene Stufe unterschreiben.'],
    evidenceTitle: 'Eine gemeinsame Akte führen', evidenceItems: ['Bestellung, Spezifikation, Zeichnungen, Lieferbedingungen, Packliste und Frachtdokument.', 'Originale datierte Fotos und Videos.', 'Maschinenidentität, Zubehör, Installation und nummeriertes Abweichungsprotokoll.', 'Einstellungen, Chemie, geforderte Medienwerte, Testbeladung und Ergebnis.', 'Schulung, Anleitungen, Wartungsübergabe, Garantie und Kontakte.', 'Schriftlicher Abschluss jedes Fehlteils, Schadens, jeder Korrektur und Nachprüfung.'],
    redFlagsTitle: 'Warnzeichen', redFlags: ['„Jetzt sauber quittieren, später melden“ trotz sichtbarer Abweichung.', 'Konfiguration mangels freigegebener Bestellung und Packliste nicht prüfbar.', 'Verpackung wird vor verdeckter Schadenskontrolle entsorgt.', 'Unbefugte schließen die Maschine vor Zustandsdokumentation an.', 'Leerlaufstart gilt als Reinigungsabnahme oder offene Mängel verschwinden.'],
    nextTitle: 'Unterlagen vor Versand vorbereiten', nextIntro: 'Diese Seiten stimmen Lieferung, Installation, Identität, Test und Verantwortung ab.', links: ['Versand und Zahlung prüfen', 'Installationsort vorbereiten', 'JD-3-Spezifikation prüfen', 'Probespülung planen', 'Dokumentiertes Angebot anfordern'],
  },

  ru: {
    title: 'Как принять машину для мойки противней: чек-лист покупателя',
    description: 'Разделите приемку груза, монтаж и мокрую пусконаладку, чтобы повреждения, недостача и проблемы результата были доказуемы.',
    tldr: 'Подпись у разгрузочной площадки не должна означать окончательную приемку машины. Нужны <strong>три отдельных этапа</strong>: зафиксировать груз до отъезда машины, сверить комплектность при распаковке и принять работу только после правильного монтажа и документированной мокрой пусконаладки. Фото, серийные данные, накладная и письменные замечания создают понятную цепочку доказательств.',
    faqs: [
      ['Подписывать ли накладную до вскрытия ящика?', 'Следуйте процедуре перевозчика, но при видимом повреждении или недостаче не подписывайте без замечаний. Сделайте фото, внесите оговорки и храните упаковку до письменных указаний.'],
      ['Целый ящик доказывает, что машина цела?', 'Нет. Внутри могли сместиться соединения, панели или принадлежности. Внешний осмотр и контролируемая распаковка — разные этапы.'],
      ['Должен ли водитель ждать полной проверки?', 'Передача груза обычно не является пусконаладкой. Зафиксируйте состояние и число мест, а монтаж и мокрый тест согласуйте с ответственным специалистом.'],
      ['Что фотографировать?', 'Груз в машине, все стороны и углы, ярлыки, пломбы, следы удара, распакованную машину, комплектующие, табличку, подключения и каждый дефект общим и крупным планом.'],
      ['Когда машина окончательно принята?', 'Согласно договору. Приемку груза, завершение монтажа и функциональную приемку после проверки загрузки, химии, коммуникаций, безопасности и результата лучше разделять.'],
    ],
    answerTitle: 'Коротко: принимайте поставку, а не обещание результата',
    answer: ['При доставке можно доказать состав поставки и видимое состояние. Качество мойки проверяется после распаковки, правильного подключения, пусконаладки и испытания согласованной посудой и химией. Одна подпись смешивает разные причины.', 'До отправки укажите три этапа и ответственных: кто подписывает документы, разрешает монтаж, проводит наладку, фиксирует замечания и собирает доказательства для гарантии или претензии.'],
    gatesTitle: 'Три этапа приемки', gatesIntro: 'Каждый отвечает на свой вопрос; прохождение одного не доказывает следующий.', gateHeaders: ['Этап', 'Что доказывает', 'Минимальные документы'],
    gates: [
      { gate: '1. Приемка груза', proves: 'Число мест и видимое состояние', evidence: 'Фото с датой, ярлыки, пломбы, накладная и замечания' },
      { gate: '2. Распаковка и монтаж', proves: 'Пришла нужная машина и комплект, монтаж возможен', evidence: 'Идентификация, комплектность, дефекты, подключения и подпись монтажника' },
      { gate: '3. Мокрая пусконаладка', proves: 'Установленная система работает и дает согласованный результат', evidence: 'Настройки, сети, химия, загрузка, результаты, обучение и перечень доработок' },
    ],
    receivingTitle: 'До отъезда автомобиля', receivingIntro: 'Заранее подготовьте камеру, заказ, упаковочный лист, контакты и форму приемки.',
    receivingSteps: ['Сверьте номер и посчитайте ящики, коробки, кассеты и отдельные места до перемещения.', 'До разгрузки снимите груз, все стороны, углы, основание, ярлыки, индикаторы, ремни и пломбы.', 'Ищите смятые углы, проколы, воду, сломанное основание, отсутствие крепежа, смещение или вскрытие.', 'До подписи конкретно опишите место и состояние замечания; слова «повреждено» недостаточно.', 'Сохраните подписанную копию и исходные фото; быстро уведомите по согласованному каналу.', 'Не выбрасывайте, не ремонтируйте, не подключайте и не возвращайте спорный товар без письменной инструкции, кроме мер против дальнейшего ущерба или опасности.'],
    unpackTitle: 'Контролируйте распаковку и идентификацию', unpackIntro: 'Открывайте на свободной площадке с упаковочным листом и непрерывной фотосъемкой; сохраняйте упаковку.',
    unpackChecks: ['Сверьте модель, табличку, серийные данные, электрику и опции с заказом.', 'Посчитайте кассеты, держатели, шланги, дозаторы, инструкции, запасные части и принадлежности.', 'Осмотрите панели, капот или дверь, опоры, разбрызгиватели, фильтры, баки, шкафы, шланги, фитинги и подключения.', 'Запишите вмятины, деформацию, люфт, потертости, коррозию, жидкость, нарушенные пломбы и посторонние предметы без самовольного ремонта.', 'До установки повторно проверьте маршрут, подъем, двери, пол, сети, зазоры и слив.', 'Ведите нумерованный перечень с фото, описанием, ответственным, действием и статусом.'],
    commissionTitle: 'Принимайте работу после мокрой пусконаладки', commissionIntro: 'Сначала квалифицированный монтажник подтверждает соответствие машины и площадки. Транспортная накладная не является актом пуска.',
    commissionSteps: ['Запишите монтажника, дату, машину, подключения, защиту, водоподготовку, химию и настройки.', 'Проведите предстартовые проверки; наблюдайте набор, нагрев, циркуляцию, распыление, дозирование, слив, течи, сигналы и защиту.', 'Испытайте согласованную загрузку с записанными ориентацией, загрязнением, обработкой, химией и циклом.', 'После сушки проверьте каждый предмет по критериям и запишите отказы по позиции.', 'Подтвердите обучение загрузке, химии, ежедневной очистке, остановке, базовым неисправностям и правам настройки.', 'Запишите каждый открытый пункт, ответственного, срок, повторный тест и влияние; подпишите только пройденный этап.'],
    evidenceTitle: 'Храните единое досье', evidenceItems: ['Заказ, спецификация, чертежи, условия поставки, упаковочный лист и накладная.', 'Исходные фото и видео с датой.', 'Идентификация, комплект, монтаж и нумерованный журнал замечаний.', 'Настройки, химия, требуемые показатели сетей, тестовая загрузка и результат.', 'Обучение, инструкции, обслуживание, гарантия и контакты.', 'Письменное закрытие недостачи, повреждений, исправлений и повторных тестов.'],
    redFlagsTitle: 'Тревожные признаки', redFlags: ['Требуют подписать без замечаний и заявить позже при видимом ущербе.', 'Нет утвержденного заказа и листа для сверки комплектации.', 'Упаковку выбрасывают до поиска скрытых повреждений.', 'Машину подключает неуполномоченный человек до фиксации состояния.', 'Пуск без загрузки выдают за приемку мойки или удаляют открытые замечания.'],
    nextTitle: 'Подготовьте документы до отправки', nextIntro: 'Согласуйте доставку, монтаж, идентификацию, испытание и ответственность.', links: ['Проверить доставку и оплату', 'Подготовить место монтажа', 'Сверить спецификацию JD-3', 'Спланировать пробную мойку', 'Запросить документированное предложение'],
  },

  th: {
    title: 'ตรวจรับเครื่องล้างถาดเบเกอรี่เมื่อส่งถึงอย่างไร: เช็กลิสต์ผู้ซื้อ',
    description: 'แยกการรับขนส่ง การติดตั้ง และการทดสอบเดินเครื่องแบบใช้น้ำ เพื่อให้ความเสียหาย ของขาด และปัญหาผลลัพธ์ตรวจสอบย้อนหลังได้',
    tldr: 'อย่าถือว่าลายเซ็นที่จุดขนถ่ายคือการรับรองเครื่องขั้นสุดท้าย ให้ใช้<strong>จุดรับรอง 3 ขั้น</strong>: บันทึกสภาพขนส่งก่อนรถออก ตรวจตัวตนและความครบถ้วนตอนแกะ และรับรองการทำงานหลังติดตั้งถูกต้องพร้อมทดสอบเดินเครื่องแบบใช้น้ำที่มีบันทึก รูปถ่าย ข้อมูลเครื่อง ใบส่งของ และข้อยกเว้นเป็นลายลักษณ์อักษรคือหลักฐานสำคัญ',
    faqs: [
      ['ควรเซ็นรับก่อนเปิดลังหรือไม่?', 'ทำตามขั้นตอนผู้ขนส่ง แต่หากเห็นความเสียหายหรือของขาดอย่าเซ็นแบบไม่มีข้อสงวน ถ่ายรูป ระบุข้อยกเว้น และเก็บบรรจุภัณฑ์จนได้รับคำสั่งเป็นลายลักษณ์อักษร'],
      ['ลังไม่เสียแปลว่าเครื่องไม่เสียใช่ไหม?', 'ไม่ใช่ ข้อต่อ แผง หรืออุปกรณ์ภายในอาจเคลื่อน การตรวจภายนอกกับการแกะอย่างควบคุมเป็นคนละขั้น'],
      ['คนขับต้องรอทดสอบเครื่องทั้งหมดหรือไม่?', 'ปกติการส่งมอบขนส่งไม่ใช่การเดินเครื่อง ให้บันทึกสภาพและจำนวนหีบห่อ แล้วนัดติดตั้งและทดสอบน้ำกับผู้รับผิดชอบ'],
      ['ควรถ่ายรูปอะไร?', 'สภาพบนรถ ทุกด้านและมุม ป้าย ซีล รอยกระแทก เครื่องหลังเปิด อุปกรณ์ ป้ายข้อมูล จุดต่อ และตำหนิทุกจุดทั้งภาพกว้างและใกล้'],
      ['เมื่อใดถือว่ารับเครื่องสุดท้าย?', 'เป็นไปตามสัญญา ควรแยกรับขนส่ง ติดตั้ง และรับรองการทำงานหลังโหลด เคมี สาธารณูปโภค ความปลอดภัย และผลที่บันทึกผ่านแล้ว'],
    ],
    answerTitle: 'คำตอบสั้น: รับสินค้า ไม่ใช่รับคำสัญญาด้านประสิทธิภาพ',
    answer: ['วันส่งมอบพิสูจน์ได้ว่าอะไรมาและสภาพที่เห็น แต่ผลล้างต้องพิสูจน์หลังแกะ ต่อสาธารณูปโภคที่อนุมัติ เดินเครื่อง และทดสอบภาชนะกับเคมีที่ตกลง การรวมทุกอย่างในลายเซ็นเดียวทำให้หาสาเหตุยาก', 'ก่อนส่งให้ระบุ 3 ขั้นและผู้รับผิดชอบ: ผู้เซ็นขนส่ง ผู้อนุมัติติดตั้ง ผู้เดินเครื่อง ข้อยกเว้นที่ต้องเขียน และหลักฐานสำหรับประกันหรือเคลม'],
    gatesTitle: 'ใช้จุดรับรอง 3 ขั้น', gatesIntro: 'แต่ละขั้นตอบคำถามต่างกัน ผ่านขั้นหนึ่งไม่ได้แปลว่าผ่านขั้นถัดไป', gateHeaders: ['ขั้น', 'พิสูจน์อะไร', 'หลักฐานขั้นต่ำ'],
    gates: [
      { gate: '1. รับขนส่ง', proves: 'จำนวนหีบห่อและสภาพที่เห็นตอนส่งมอบ', evidence: 'รูปลงวันที่ ป้าย ซีล ใบส่งของ และข้อยกเว้น' },
      { gate: '2. แกะและติดตั้ง', proves: 'เครื่องและอุปกรณ์ถูกต้อง ติดตั้งตามข้อกำหนดได้', evidence: 'ข้อมูลเครื่อง ตรวจรายการ ตำหนิ จุดต่อ และผู้ติดตั้งลงนาม' },
      { gate: '3. เดินเครื่องแบบใช้น้ำ', proves: 'ระบบที่ติดตั้งทำงานและให้ผลตามตกลง', evidence: 'ค่าตั้ง ระบบ เคมี โหลด ผล การฝึก และรายการค้าง' },
    ],
    receivingTitle: 'ก่อนรถออก', receivingIntro: 'เตรียมกล้อง ใบสั่งซื้อ รายการบรรจุ ผู้ติดต่อ และแบบรับของก่อนเวลาส่ง',
    receivingSteps: ['ยืนยันเลขอ้างอิงและนับลัง กล่อง ตะกร้า และหีบห่อก่อนเคลื่อนย้าย', 'ถ่ายบนรถ ทุกด้าน มุม ฐาน ป้าย ตัวบ่งชี้ สายรัด และซีลก่อนลงของ', 'หารอยยุบ รู น้ำ ฐานแตก ตัวยึดหาย ของเลื่อน หรือรอยเปิด', 'เขียนตำแหน่งและสภาพข้อยกเว้นในใบขนส่งก่อนเซ็น อย่าเขียนเพียง “เสียหาย”', 'เก็บสำเนาและรูปต้นฉบับ แจ้งผู้ขายและขนส่งตามช่องทางที่ตกลงโดยเร็ว', 'อย่าทิ้ง ซ่อม ต่อไฟ หรือส่งคืนของที่มีข้อพิพาทก่อนคำสั่งเป็นลายลักษณ์อักษร เว้นแต่เพื่อหยุดความเสียหายหรืออันตราย'],
    unpackTitle: 'ควบคุมการแกะและตรวจตัวตน', unpackIntro: 'เปิดในพื้นที่โล่งพร้อมรายการบรรจุและถ่ายต่อเนื่อง เก็บบรรจุภัณฑ์จนปิดการตรวจ',
    unpackChecks: ['เทียบรุ่น ป้ายข้อมูล เลขเครื่อง ระบบไฟ และตัวเลือกกับคำสั่งซื้อที่อนุมัติ', 'นับตะกร้า ที่ยึด สาย เครื่องจ่าย คู่มือ อะไหล่ และอุปกรณ์', 'ตรวจแผง ฝาหรือประตู ขา ชุดฉีด ตัวกรอง ถัง ตู้ไฟ สาย ข้อต่อ และจุดเชื่อม', 'บันทึกรอยบุบ บิด หลวม ถลอก สนิม ของเหลว ซีลขาด หรือสิ่งแปลกปลอมโดยไม่ซ่อมเอง', 'ยืนยันทางเคลื่อนย้าย การยก ประตู พื้น ระบบ ระยะ และท่อระบายก่อนตั้งเครื่อง', 'ทำรายการหมายเลขพร้อมรูป คำอธิบาย ผู้รับผิดชอบ การแก้ และสถานะ'],
    commissionTitle: 'รับรองการทำงานหลังทดสอบแบบใช้น้ำ', commissionIntro: 'เริ่มเมื่อผู้ติดตั้งที่เหมาะสมยืนยันเครื่องและสถานที่ ใบรับขนส่งไม่ใช่ใบรับรองเดินเครื่อง',
    commissionSteps: ['บันทึกผู้ติดตั้ง วันที่ เครื่อง จุดต่อ อุปกรณ์ป้องกัน การปรับน้ำ เคมี และค่าตั้ง', 'ตรวจตามผู้ผลิต แล้วดูการเติม อุ่น หมุนเวียน ฉีด จ่าย ระบาย รั่ว สัญญาณ และความปลอดภัย', 'ทดสอบโหลดตัวแทนที่ตกลง พร้อมบันทึกทิศ คราบ การเตรียม เคมี และรอบ', 'ตรวจทุกชิ้นหลังแห้งตามเกณฑ์ และบันทึกล้มเหลวตามตำแหน่ง', 'ยืนยันอบรมการโหลด เคมี ทำความสะอาด ปิดเครื่อง แก้ปัญหาพื้นฐาน และสิทธิ์เปลี่ยนค่า', 'ระบุรายการค้าง เจ้าของ กำหนด เงื่อนไขทดสอบซ้ำ และผลต่อการรับรอง เซ็นเฉพาะขั้นที่ผ่าน'],
    evidenceTitle: 'เก็บแฟ้มรับของและเดินเครื่องชุดเดียว', evidenceItems: ['ใบสั่งซื้อ ข้อกำหนด แบบ เงื่อนไขส่ง รายการบรรจุ และใบขนส่ง', 'รูปและวิดีโอต้นฉบับลงวันที่', 'ข้อมูลเครื่อง อุปกรณ์ บันทึกติดตั้ง และข้อยกเว้นมีหมายเลข', 'ค่าตั้ง เคมี ค่าระบบ โหลดทดสอบ และผล', 'การอบรม คู่มือ ส่งมอบบำรุงรักษา ประกัน และผู้ติดต่อ', 'เอกสารปิดของขาด ความเสียหาย การแก้ และทดสอบซ้ำ'],
    redFlagsTitle: 'สัญญาณเตือน', redFlags: ['ให้เซ็นว่าเรียบร้อยทั้งที่เห็นข้อยกเว้นแล้วค่อยเคลม', 'ไม่มีคำสั่งซื้อหรือรายการอนุมัติให้เทียบ', 'ทิ้งบรรจุภัณฑ์ก่อนตรวจความเสียหายซ่อน', 'คนไม่ได้รับอนุมัติต่อเครื่องก่อนบันทึกสภาพ', 'ใช้การเปิดเครื่องเปล่าเป็นหลักฐานผลล้างหรือลบรายการค้าง'],
    nextTitle: 'เตรียมเอกสารก่อนส่ง', nextIntro: 'ใช้หน้าเหล่านี้ให้เงื่อนไขส่ง ติดตั้ง ตัวตน ทดสอบ และความรับผิดชอบตรงกัน', links: ['ทบทวนขนส่งและชำระเงิน', 'เตรียมสถานที่ติดตั้ง', 'ตรวจข้อกำหนด JD-3', 'วางแผนทดสอบล้างตัวอย่าง', 'ขอใบเสนอราคาที่มีเอกสาร'],
  },

  vi: {
    title: 'Cách kiểm tra máy rửa khay khi giao hàng: checklist cho người mua',
    description: 'Tách nhận vận chuyển, lắp đặt và chạy thử có nước để hư hỏng, thiếu hàng và lỗi kết quả đều truy vết được.',
    tldr: 'Đừng xem một chữ ký tại điểm dỡ hàng là nghiệm thu cuối cùng. Hãy dùng <strong>ba cổng riêng</strong>: ghi tình trạng vận chuyển trước khi xe rời đi, xác minh đúng máy và đủ hàng khi mở kiện, rồi chỉ nghiệm thu hoạt động sau khi lắp đúng và chạy thử có nước với hồ sơ đầy đủ. Ảnh, số nhận dạng, phiếu giao và ngoại lệ bằng văn bản tạo chuỗi bằng chứng rõ ràng.',
    faqs: [
      ['Có nên ký trước khi mở kiện không?', 'Theo quy trình của hãng vận chuyển, nhưng không ký nhận sạch nếu thấy hư hỏng hay thiếu. Chụp ảnh, ghi ngoại lệ và giữ bao bì đến khi có hướng dẫn bằng văn bản.'],
      ['Kiện nguyên vẹn có chứng minh máy nguyên vẹn không?', 'Không. Đầu nối, tấm vỏ hoặc phụ kiện bên trong có thể xê dịch. Kiểm tra ngoài và mở kiện có kiểm soát là hai bước riêng.'],
      ['Tài xế có phải chờ thử máy đầy đủ không?', 'Bàn giao vận chuyển thường không phải chạy thử. Hãy ghi tình trạng và số kiện, rồi bố trí lắp đặt và thử nước với bên chịu trách nhiệm.'],
      ['Cần chụp gì?', 'Hàng trên xe, mọi mặt và góc, nhãn, niêm phong, vết va, máy khi mở, phụ kiện, bảng tên, đầu nối và từng lỗi ở ảnh rộng lẫn cận.'],
      ['Khi nào máy được nghiệm thu cuối?', 'Theo hợp đồng. Nên tách nhận hàng, hoàn thành lắp đặt và nghiệm thu chức năng sau khi tải, hóa chất, hạ tầng, an toàn và kết quả có hồ sơ đều đạt.'],
    ],
    answerTitle: 'Trả lời ngắn: nhận lô hàng, không nhận lời hứa hiệu suất',
    answer: ['Khi giao, bạn chứng minh được hàng gì đến và tình trạng nhìn thấy. Hiệu quả rửa chỉ chứng minh sau khi mở, nối hạ tầng được duyệt, chạy thử và thử với đồ cùng hóa chất đã thống nhất. Một chữ ký làm lẫn nhiều nguyên nhân.', 'Trước khi gửi, ghi ba cổng và người phụ trách: ai ký vận chuyển, ai duyệt lắp, ai chạy thử, ngoại lệ nào phải ghi và bằng chứng nào mở quy trình bảo hành hay khiếu nại.'],
    gatesTitle: 'Dùng ba cổng nghiệm thu', gatesIntro: 'Mỗi cổng trả lời một câu hỏi; qua cổng này không chứng minh cổng sau.', gateHeaders: ['Cổng', 'Chứng minh', 'Bằng chứng tối thiểu'],
    gates: [
      { gate: '1. Nhận vận chuyển', proves: 'Số kiện và tình trạng nhìn thấy lúc giao', evidence: 'Ảnh có ngày, nhãn, niêm phong, phiếu giao và ngoại lệ' },
      { gate: '2. Mở kiện và lắp', proves: 'Đúng máy, đủ phụ kiện và có thể lắp theo yêu cầu', evidence: 'Nhận dạng, đối chiếu danh sách, lỗi, kết nối và xác nhận của thợ' },
      { gate: '3. Chạy thử có nước', proves: 'Hệ thống đã lắp hoạt động và cho kết quả đã thống nhất', evidence: 'Cài đặt, hạ tầng, hóa chất, tải, kết quả, đào tạo và việc còn lại' },
    ],
    receivingTitle: 'Trước khi xe rời đi', receivingIntro: 'Chuẩn bị máy ảnh, đơn mua, phiếu đóng gói, liên hệ và biểu mẫu trước lịch giao.',
    receivingSteps: ['Xác nhận mã lô và đếm mọi kiện, thùng, giỏ, gói riêng trước khi di chuyển.', 'Chụp hàng trên xe và mọi mặt, góc, đáy, nhãn, chỉ thị, dây và niêm phong trước khi dỡ.', 'Tìm góc bẹp, lỗ thủng, vết nước, đáy vỡ, thiếu chốt, hàng xê dịch hoặc dấu mở.', 'Ghi vị trí và tình trạng cụ thể trên phiếu trước khi ký; tránh chỉ viết “hư hỏng”.', 'Giữ bản đã ký và ảnh gốc; báo sớm qua kênh đã thống nhất.', 'Không bỏ, sửa, cấp điện hoặc trả hàng tranh chấp khi chưa có hướng dẫn viết, trừ biện pháp ngăn hỏng thêm hay nguy hiểm.'],
    unpackTitle: 'Kiểm soát mở kiện và nhận dạng', unpackIntro: 'Mở ở chỗ trống với phiếu đóng gói và ảnh liên tục; giữ bao bì đến khi đóng kiểm tra.',
    unpackChecks: ['Đối chiếu model, bảng tên, số máy, cấu hình điện và tùy chọn với đơn duyệt.', 'Đếm giỏ, giá, ống, bộ châm, tài liệu, phụ tùng và phụ kiện.', 'Kiểm tra vỏ, nắp hoặc cửa, chân, cụm phun, lọc, bồn, tủ điện, ống, khớp và đầu nối.', 'Ghi móp, cong, lỏng, xước, ăn mòn, dấu chất lỏng, niêm phong vỡ hay vật lạ mà không tự sửa.', 'Xác nhận lại tuyến di chuyển, nâng, cửa, sàn, hạ tầng, khoảng hở và thoát nước trước khi đặt.', 'Lập danh sách đánh số với ảnh, mô tả, người phụ trách, hành động và trạng thái.'],
    commissionTitle: 'Chỉ nghiệm thu hoạt động sau chạy thử có nước', commissionIntro: 'Bắt đầu khi thợ có năng lực xác nhận máy và địa điểm đúng yêu cầu. Phiếu nhận vận chuyển không phải biên bản chạy thử.',
    commissionSteps: ['Ghi người lắp, ngày, máy, kết nối, bảo vệ, xử lý nước, hóa chất và cài đặt.', 'Làm kiểm tra trước khởi động; quan sát cấp, gia nhiệt, tuần hoàn, phun, châm, xả, rò, báo động và an toàn.', 'Thử tải đại diện đã thống nhất với hướng, cặn, xử lý trước, hóa chất và chu trình có ghi.', 'Kiểm từng món sau khô theo tiêu chí và ghi lỗi theo vị trí.', 'Xác nhận đào tạo xếp, hóa chất, vệ sinh hằng ngày, tắt máy, lỗi cơ bản và quyền đổi cài đặt.', 'Ghi việc mở, chủ trì, hạn, điều kiện thử lại và ảnh hưởng; chỉ ký giai đoạn thực sự đạt.'],
    evidenceTitle: 'Giữ một bộ hồ sơ chung', evidenceItems: ['Đơn mua, thông số, bản vẽ, điều kiện giao, phiếu đóng gói và vận chuyển.', 'Ảnh và video gốc có ngày.', 'Nhận dạng máy, phụ kiện, lắp đặt và nhật ký ngoại lệ đánh số.', 'Cài đặt, hóa chất, chỉ số hạ tầng được yêu cầu, tải thử và kết quả.', 'Đào tạo, tài liệu, bàn giao bảo trì, bảo hành và liên hệ.', 'Đóng bằng văn bản cho từng thiếu, hỏng, sửa và thử lại.'],
    redFlagsTitle: 'Dấu hiệu cảnh báo', redFlags: ['Bắt ký sạch rồi báo sau dù có lỗi thấy rõ.', 'Không có đơn và phiếu được duyệt để kiểm cấu hình.', 'Bỏ bao bì trước khi kiểm hư hỏng ẩn.', 'Người không được duyệt nối máy trước khi ghi tình trạng.', 'Khởi động không tải bị coi là nghiệm thu rửa hoặc việc mở bị xóa.'],
    nextTitle: 'Chuẩn bị giấy tờ trước khi gửi', nextIntro: 'Dùng các trang này để thống nhất giao hàng, lắp đặt, nhận dạng, thử và trách nhiệm.', links: ['Xem điều khoản giao và thanh toán', 'Chuẩn bị nơi lắp', 'Kiểm thông số JD-3', 'Lập thử rửa mẫu', 'Yêu cầu báo giá có hồ sơ'],
  },

  ar: {
    title: 'كيف تفحص غسالة صواني المخبز عند التسليم؟ قائمة استلام للمشتري',
    description: 'افصل بين استلام الشحنة والتركيب والتشغيل الرطب حتى تبقى الأضرار والنواقص ومشكلات الأداء قابلة للتتبع.',
    tldr: 'لا تعتبر توقيعاً واحداً عند التفريغ قبولاً نهائياً للغسالة. استخدم <strong>ثلاث بوابات منفصلة</strong>: وثّق حالة الشحنة قبل مغادرة المركبة، وتحقق من الهوية والكمال عند فتح العبوة، ولا تقبل التشغيل إلا بعد التركيب الصحيح واختبار تشغيل رطب موثق. الصور وبيانات الجهاز ومستند التسليم والاستثناءات المكتوبة تحفظ سلسلة أدلة واضحة.',
    faqs: [
      ['هل أوقّع قبل فتح الصندوق؟', 'اتبع إجراء الناقل، لكن لا توقّع استلاماً سليماً بلا تحفظ عند وجود ضرر أو نقص ظاهر. صوّر كل الجوانب وسجّل الاستثناءات واحتفظ بالتغليف حتى تصلك تعليمات مكتوبة.'],
      ['هل سلامة الصندوق تثبت سلامة الجهاز؟', 'لا. قد تتحرك الوصلات أو الألواح أو الملحقات داخله. فحص الخارج والفتح المنضبط مرحلتان مختلفتان.'],
      ['هل ينتظر السائق حتى الاختبار الكامل؟', 'غالباً لا تكون المناولة اختبار تشغيل. وثّق الحالة وعدد الطرود ورتّب التركيب والاختبار الرطب مع الجهة المسؤولة.'],
      ['ماذا أصوّر عند التسليم؟', 'الشحنة على المركبة وكل الأوجه والزوايا والملصقات والأختام وآثار الصدمات والجهاز بعد الفتح والملحقات ولوحة البيانات والوصلات وكل عيب من بعيد وقريب.'],
      ['متى تُقبل الغسالة نهائياً؟', 'بحسب العقد. افصل استلام الشحنة عن اكتمال التركيب وعن القبول الوظيفي بعد نجاح الحمولة والكيمياء والمرافق والسلامة والنتيجة الموثقة.'],
    ],
    answerTitle: 'الجواب المختصر: استلم الشحنة لا وعد الأداء',
    answer: ['عند التسليم تستطيع إثبات ما وصل وحالته الظاهرة. أما أداء التنظيف فلا يثبت إلا بعد الفتح والربط بالمرافق المعتمدة والتشغيل واختبار الأدوات والكيمياء المتفق عليها. جمع القرارات في توقيع واحد يخلط أسباباً مختلفة.', 'حدّد قبل الشحن البوابات الثلاث ومسؤوليها: من يوقّع للناقل، ومن يجيز التركيب، ومن يشغّل الاختبار، وما الاستثناءات المكتوبة، وما الأدلة اللازمة للضمان أو المطالبة.'],
    gatesTitle: 'استخدم ثلاث بوابات قبول', gatesIntro: 'كل بوابة تجيب سؤالاً مختلفاً؛ اجتياز واحدة لا يثبت التالية.', gateHeaders: ['البوابة', 'ما تثبته', 'الحد الأدنى من الأدلة'],
    gates: [
      { gate: '1. استلام الشحنة', proves: 'عدد الطرود والحالة الظاهرة عند المناولة', evidence: 'صور مؤرخة وملصقات وأختام ومستند واستثناءات مكتوبة' },
      { gate: '2. الفتح والتركيب', proves: 'وصول الجهاز والملحقات الصحيحة وإمكان التركيب', evidence: 'الهوية وقائمة المحتويات والعيوب والوصلات وتوقيع المركّب' },
      { gate: '3. التشغيل الرطب', proves: 'عمل النظام المركب وتحقيق النتيجة المتفق عليها', evidence: 'الإعدادات والمرافق والكيمياء والحمولة والنتائج والتدريب والنواقص' },
    ],
    receivingTitle: 'قبل مغادرة المركبة', receivingIntro: 'جهّز الكاميرا وأمر الشراء وقائمة التعبئة وجهة الاتصال ونموذج الاستلام قبل الموعد.',
    receivingSteps: ['أكد مرجع الشحنة وعدّ كل صندوق وكرتون وسلة وطرد قبل نقله.', 'صوّر الحمولة على المركبة وكل الأوجه والزوايا والقاعدة والملصقات والمؤشرات والأحزمة والأختام قبل التنزيل.', 'ابحث عن زوايا مضغوطة وثقوب وآثار ماء وقاعدة مكسورة ومثبتات مفقودة أو تحرك أو فتح.', 'اكتب موقع وحالة كل استثناء في مستند الناقل قبل التوقيع؛ لا تكتف بكلمة «تالف».', 'احتفظ بالنسخة الموقعة والصور الأصلية وأبلغ المورد والناقل سريعاً عبر القناة المتفق عليها.', 'لا تتخلص من البضاعة المتنازع عليها أو تصلحها أو توصلها أو تعيدها بلا تعليمات مكتوبة، إلا لمنع ضرر إضافي أو خطر.'],
    unpackTitle: 'اضبط فتح العبوة وفحص الهوية', unpackIntro: 'افتح في مساحة خالية مع قائمة التعبئة وتصوير متواصل، واحتفظ بالتغليف حتى إغلاق الفحص.',
    unpackChecks: ['طابق الطراز ولوحة البيانات والرقم والتكوين الكهربائي والخيارات مع الطلب المعتمد.', 'عدّ السلال والحوامل والخراطيم والموزعات والأدلة والقطع والملحقات.', 'افحص الألواح والغطاء أو الباب والأرجل وأجزاء الرش والمرشحات والخزانات وصناديق الكهرباء والخراطيم والوصلات.', 'سجّل الانبعاج والتشوه والارتخاء والخدش والتآكل وآثار السوائل وكسر الأختام أو الأجسام الغريبة من دون إصلاح غير معتمد.', 'أعد تأكيد مسار النقل والرفع والأبواب والأرضية والمرافق والخلوص والصرف قبل وضع الجهاز.', 'أنشئ قائمة مرقمة لكل عيب أو نقص مع صورة ووصف ومسؤول وإجراء وحالة.'],
    commissionTitle: 'اقبل التشغيل بعد الاختبار الرطب', commissionIntro: 'يبدأ التشغيل بعد تأكيد فني مؤهل تطابق الجهاز والموقع. مستند الشحن ليس شهادة تشغيل.',
    commissionSteps: ['سجّل الفني والتاريخ وهوية الجهاز والوصلات والحماية ومعالجة الماء والمواد والإعدادات.', 'أكمل فحوص ما قبل البدء وراقب الملء والتسخين والدوران والرش والجرعات والصرف والتسرب والإنذارات والسلامة.', 'اختبر الحمولة المتفق عليها مع توثيق الاتجاه والأوساخ والمعالجة والكيمياء والدورة.', 'افحص كل قطعة بعد الجفاف وفق المعايير وسجّل الفشل حسب موضع السلة.', 'أكد تدريب المشغل على التحميل والكيمياء والتنظيف اليومي والإيقاف والاستجابة الأساسية وصلاحية تغيير الإعداد.', 'اكتب كل بند مفتوح ومسؤوله وموعده وشرط إعادة الاختبار وأثره، ووقّع المرحلة التي نجحت فقط.'],
    evidenceTitle: 'احتفظ بملف استلام وتشغيل واحد', evidenceItems: ['أمر الشراء والمواصفة والرسومات وشروط التسليم وقائمة التعبئة ومستند الناقل.', 'الصور والفيديو الأصلية المؤرخة.', 'هوية الجهاز والملحقات وسجل التركيب والاستثناءات المرقم.', 'الإعدادات والكيمياء وقراءات المرافق المطلوبة ووصف الحمولة والنتائج.', 'التدريب والأدلة وتسليم الصيانة والضمان وجهات الاتصال.', 'إغلاق مكتوب لكل نقص أو ضرر أو تصحيح أو إعادة اختبار.'],
    redFlagsTitle: 'إشارات تحذير', redFlags: ['طلب التوقيع بلا تحفظ والإبلاغ لاحقاً رغم وجود ضرر ظاهر.', 'تعذر مطابقة التكوين لغياب طلب وقائمة معتمدين.', 'التخلص من التغليف قبل فحص الضرر الخفي.', 'توصيل الجهاز بواسطة غير مخول قبل توثيق حالته.', 'تقديم تشغيل بلا حمولة كقبول للتنظيف أو حذف البنود المفتوحة.'],
    nextTitle: 'جهّز الوثائق قبل الشحن', nextIntro: 'وحّد شروط التسليم والتركيب والهوية والاختبار والمسؤولية عبر هذه الصفحات.', links: ['راجع الشحن والدفع', 'جهّز موقع التركيب', 'تحقق من مواصفة JD-3', 'خطط لاختبار الغسل بالعينة', 'اطلب عرضاً موثقاً'],
  },
};
