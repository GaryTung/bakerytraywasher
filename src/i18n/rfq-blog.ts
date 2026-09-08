import type { Locale } from './utils';

export type RfqBlogCopy = { title: string; description: string; tldr: string; faqs: Array<[string,string]>; introTitle: string; intro: string[]; factsTitle: string; facts: string[]; briefTitle: string; briefIntro: string; briefRows: Array<[string,string]>; referenceTitle: string; referenceIntro: string; referenceLabels: string[]; questionsTitle: string; questions: string[]; redFlagsTitle: string; redFlags: string[]; templateTitle: string; templateIntro: string; templateLines: string[]; decisionTitle: string; decision: string[]; nextTitle: string; nextIntro: string; links: string[]; };

export const rfqBlogCopy: Record<Locale, RfqBlogCopy> = {
  "en": {
    "title": "How to Specify a Bakery Tray Washer: An RFQ Checklist That Prevents the Wrong Machine",
    "description": "Send suppliers the right load, soil, volume, utility, delivery, and acceptance data before requesting a bakery tray washer quote.",
    "tldr": "A useful RFQ must define <strong>the ware, hardest normal soil, peak cleaning window, site utilities, and acceptance evidence</strong>. Model name or trays per hour is not enough. Send measured dimensions and photos, residue and dwell-time details, verified site data, and require a sample wash of the proposed rack pattern.",
    "faqs": [
      [
        "What information should I send for a quote?",
        "Send item dimensions and photos, materials and coatings, normal and worst soils, peak quantities and deadline, load pattern, site data, destination, required documents, and acceptance criteria."
      ],
      [
        "Is trays per hour enough to compare machines?",
        "No. The figure needs the tested item, rack pattern, load per cycle, cycle time, and handling assumptions."
      ],
      [
        "Should I send dirty trays for a sample wash?",
        "Representative used items give the strongest evidence. If shipping is impractical, agree on equivalent samples and document every difference."
      ],
      [
        "Must voltage and phase be confirmed first?",
        "Yes. State measured voltage, phase, frequency, breaker capacity, and local connection requirements."
      ],
      [
        "What should count as acceptance?",
        "Agree before testing: no visible target residue, no retained water, no unacceptable surface change, a repeatable loading pattern, and recorded cycle, chemistry, and pre-treatment."
      ]
    ],
    "introTitle": "Specify the job, not just the machine",
    "intro": [
      "Two bakeries using the same nominal tray size can need different solutions. Fresh crumbs on bare aluminum are not the same test as caramel or fat dried for a shift on coated ware.",
      "Make every supplier quote against one written operating brief. Changes to the load, cycle, pre-treatment, electrical configuration, options, or delivery basis must be visible."
    ],
    "factsTitle": "Five facts buyers can extract",
    "facts": [
      "Fit is only a screening condition; spray access, drainage, restraint, and material compatibility still need proof.",
      "Throughput is incomplete without the tested item, load per cycle, cycle time, and handling assumptions.",
      "Peak volume and the clean-by deadline matter more than a daily total alone.",
      "Electrical, water, drain, delivery-route, and hood-clearance data belong in the RFQ.",
      "Acceptance criteria should be agreed before the sample wash."
    ],
    "briefTitle": "The eight-field RFQ brief",
    "briefIntro": "Use measured or observed facts. Mark unknowns for a site survey or supplier confirmation—do not guess.",
    "briefRows": [
      [
        "Ware and dimensions",
        "Photos; measured length, width, depth, handles and rims; material, coating, and quantity."
      ],
      [
        "Soil and present process",
        "Normal and hardest residues, dwell time, scrape/soak/pre-rinse steps, and chemical limits."
      ],
      [
        "Peak load and deadline",
        "Items per peak batch or hour, daily total, shifts, and clean-by time."
      ],
      [
        "Load pattern",
        "State whether trays, bowls, pans, and utensils run separately or in a fixed mixed arrangement."
      ],
      [
        "Space and delivery route",
        "Machine location, doors, corridors, turns, steps, floor, clearances, and hood-open height."
      ],
      [
        "Utilities",
        "Measured voltage/phase/frequency, breaker, inlet thread/pressure/temperature, drain, and ventilation."
      ],
      [
        "Destination and documents",
        "Country, city/postcode, business type, Incoterm, required documents, and manual language."
      ],
      [
        "Acceptance and support",
        "Sample-wash criteria, evidence, training, warranty, spare parts, and response expectations."
      ]
    ],
    "referenceTitle": "Verified JD-3 reference values",
    "referenceIntro": "The current site publishes these values for VT-AE-JD-3. They help complete an RFQ; they do not prove an untested load.",
    "referenceLabels": [
      "Body / hood-open height",
      "Rack / listed European tray",
      "Standard tray load",
      "Cycle / technical ceiling",
      "Electrical",
      "Water inlet",
      "Drain"
    ],
    "questionsTitle": "Six questions suppliers must answer",
    "questions": [
      "Which exact item, soil, rack pattern, cycle, chemistry, and pre-treatment support the quoted capacity?",
      "Will you provide a representative sample wash with continuous video, loading photos, settings, and inspection result?",
      "Which electrical configuration and options are included, optional, or destination-specific?",
      "What clearances, utility tolerances, installation work, and commissioning are required?",
      "Which manuals, diagrams, declarations, warranty terms, consumables, and spare parts ship with the machine?",
      "What are the Incoterm, lead time, packing size and gross weight, destination handoff, and exclusions?"
    ],
    "redFlagsTitle": "Quotation red flags",
    "redFlags": [
      "Trays per hour with no load pattern or cycle.",
      "“Washes all trays” without dimensions, material, coating, or soil.",
      "A final quote before voltage, frequency, destination, and access route are known.",
      "A demonstration on clean or easy ware that does not represent the hardest normal load.",
      "Conflicting dimensions or utilities across the quote, drawing, manual, and website."
    ],
    "templateTitle": "Copy-and-send RFQ template",
    "templateIntro": "Replace every bracketed field and attach dimensioned photos.",
    "templateLines": [
      "Business and destination: [type, city, country, postcode]",
      "Items: [family, dimensions, material/coating, quantity, photos]",
      "Soil: [residue, dwell time, current pre-treatment]",
      "Peak: [per batch/hour, daily total, clean-by deadline]",
      "Loading: [separate or exact mixed pattern]",
      "Space and route: [location, doors, turns, steps, hood clearance]",
      "Electrical: [measured voltage, phase, frequency, breaker]",
      "Water and drain: [thread, pressure, temperature, size/distance]",
      "Documents and acceptance: [list, samples, pass/fail evidence]",
      "Quote basis: [configuration, Incoterm, lead time, exclusions]"
    ],
    "decisionTitle": "Make quotations comparable",
    "decision": [
      "Put every supplier beside the same eight fields and highlight assumptions. Price differences often hide options, delivery scope, easier test loads, or site work left outside the quote.",
      "Do not turn a published specification into a performance guarantee. Freeze the accepted item set, rack photo, cycle, chemistry, pre-treatment, and inspection criteria in the purchase record."
    ],
    "nextTitle": "Build the evidence pack",
    "nextIntro": "Use these detailed pages to confirm the machine baseline and tests.",
    "links": [
      "Check verified JD-3 specifications",
      "Calculate required capacity",
      "Define a controlled sample wash",
      "Complete the pre-installation checklist",
      "Request a documented quotation"
    ]
  },
  "zh": {
    "title": "烘焙托盘清洗机怎么写采购规格？避免买错设备的 RFQ 清单",
    "description": "询价前向供应商提供负载、污垢、峰值产量、水电、交付与验收信息，让烤盘清洗机报价真正可比。",
    "tldr": "有效的 RFQ 必须说清 <strong>清洗物、最难的日常污垢、峰值时间窗、现场水电和验收证据</strong>。只有型号或每小时盘数不够；请提供实测尺寸、照片、残留物及放置时间、已核对的现场数据，并要求按拟定布局样洗。",
    "faqs": [
      [
        "询价要提供哪些信息？",
        "提供器具尺寸和照片、材质与涂层、日常及最难污垢、峰值数量和期限、装载布局、现场数据、目的地、文件与验收标准。"
      ],
      [
        "只比较每小时盘数可以吗？",
        "不可以，还必须说明测试器具、装载布局、每循环数量、循环时间和搬运假设。"
      ],
      [
        "需要寄真实脏盘样洗吗？",
        "代表性的使用过器具证据最强；无法寄送时，应确认等效样品并记录全部差异。"
      ],
      [
        "报价前必须确认电压和相数吗？",
        "必须。应写明实测电压、相数、频率、断路器容量和当地接线要求。"
      ],
      [
        "怎样才算验收通过？",
        "测试前约定：目标残留不可见、不积水、表面无不可接受变化、布局可重复，并记录程序、药剂和预处理。"
      ]
    ],
    "introTitle": "写清任务，而不只是机器",
    "intro": [
      "两家店即使用同一名义尺寸，裸铝盘上的新鲜碎屑与涂层盘上放置一班的焦糖或油脂，也不是同一种工况。",
      "让所有供应商对同一份书面工况报价；若改变负载、程序、预处理、电气、选配或交付口径，必须显式标出。"
    ],
    "factsTitle": "买家可直接摘取的五个事实",
    "facts": [
      "装得进去只是初筛，仍要证明喷淋、排水、固定和材质兼容性。",
      "产能若缺测试器具、单循环数量、循环时间和搬运假设，就是不完整的。",
      "峰值数量与洁净截止时间，比单独的日总量更重要。",
      "电源、进水、排水、搬运路线和开罩净空应写入 RFQ。",
      "样洗前就应确定验收标准。"
    ],
    "briefTitle": "八栏 RFQ 工况表",
    "briefIntro": "填写实测或观察事实；未知项标记为勘查或供应商确认，不要猜。",
    "briefRows": [
      [
        "器具与尺寸",
        "照片、实测长宽深、把手和卷边、材质、涂层与数量。"
      ],
      [
        "污垢与现有流程",
        "日常及最难残留、放置时间、刮除/浸泡/预冲与药剂限制。"
      ],
      [
        "峰值与期限",
        "峰值每批或每小时数量、日总量、班次和洁净截止时间。"
      ],
      [
        "装载布局",
        "说明烤盘、盆、模具和器具分开洗还是固定混合。"
      ],
      [
        "场地与路线",
        "安装位、门洞、走廊、转弯、台阶、地面、净空与开罩高度。"
      ],
      [
        "公用工程",
        "实测电压/相数/频率、断路器、进水接口/压力/温度、排水和通风。"
      ],
      [
        "目的地与文件",
        "国家、城市/邮编、业态、贸易术语、所需文件与说明书语言。"
      ],
      [
        "验收与售后",
        "样洗标准、证据、培训、质保、备件与响应要求。"
      ]
    ],
    "referenceTitle": "已核实的 JD-3 参考参数",
    "referenceIntro": "网站当前对 VT-AE-JD-3 公布以下数值。它们用于填写 RFQ，不能证明未测试负载。",
    "referenceLabels": [
      "机身 / 开罩高度",
      "洗筐 / 所列欧标烤盘",
      "标准烤盘装载",
      "循环 / 技术上限",
      "电气",
      "进水",
      "排水"
    ],
    "questionsTitle": "供应商必须回答的六个问题",
    "questions": [
      "报价产能基于哪种器具、污垢、布局、程序、药剂和预处理？",
      "能否提供代表性样洗的完整视频、装载照片、设置和检查结果？",
      "哪些电气配置与选项为标配、选配或目的地专用？",
      "需要哪些净空、公用工程允许值、安装与调试工作？",
      "随机提供哪些说明书、电路图、声明、质保、耗材和备件？",
      "贸易术语、交期、包装尺寸与毛重、交接点和未含项是什么？"
    ],
    "redFlagsTitle": "报价红旗",
    "redFlags": [
      "只有每小时盘数，没有布局或循环。",
      "不问尺寸、材质、涂层和污垢，就说“所有烤盘都能洗”。",
      "未确认电压、频率、目的地和路线就出最终报价。",
      "演示只用干净或轻污器具，不能代表最难日常负载。",
      "报价、图纸、说明书和网站的尺寸或水电互相矛盾。"
    ],
    "templateTitle": "可直接发送的 RFQ 模板",
    "templateIntro": "替换方括号内容，并附带尺寸照片。",
    "templateLines": [
      "企业与目的地：[业态、城市、国家、邮编]",
      "器具：[类别、尺寸、材质/涂层、数量、照片]",
      "污垢：[残留、放置时长、现有预处理]",
      "峰值：[每批/每小时、日总量、洁净截止时间]",
      "装载：[分开或精确混合布局]",
      "空间与路线：[安装位、门洞、转弯、台阶、开罩净空]",
      "电源：[实测电压、相数、频率、断路器]",
      "进排水：[接口、压力、温度、尺寸/距离]",
      "文件与验收：[清单、样品、通过/失败证据]",
      "报价口径：[配置、贸易术语、交期、未含项]"
    ],
    "decisionTitle": "先让报价同口径",
    "decision": [
      "把各供应商答案并排放进八栏表，突出假设。价差常来自选项、交付范围、更容易的测试负载或报价外的现场工程。",
      "不要把网站参数当作性能保证；把验收通过的器具、装载照片、程序、药剂、预处理和检查标准写入采购记录。"
    ],
    "nextTitle": "建立采购证据包",
    "nextIntro": "用以下页面确认机器基线和测试。",
    "links": [
      "核对 JD-3 规格",
      "计算所需产能",
      "定义受控样洗",
      "完成安装前清单",
      "索取有依据的报价"
    ]
  },
  "es": {
    "title": "Cómo especificar una lavadora de bandejas: RFQ para evitar la máquina equivocada",
    "description": "Envíe carga, suciedad, volumen, servicios, entrega y aceptación correctos antes de pedir cotización.",
    "tldr": "Una RFQ útil define <strong>piezas, suciedad normal más difícil, ventana punta, servicios y evidencia de aceptación</strong>. Modelo o bandejas por hora no bastan: envíe medidas, fotos, residuos, espera y datos del local, y exija una prueba del patrón propuesto.",
    "faqs": [
      [
        "¿Qué datos envío?",
        "Medidas, fotos, materiales, recubrimientos, suciedad, pico, plazo, patrón, local, destino, documentos y aceptación."
      ],
      [
        "¿Bastan bandejas por hora?",
        "No: hacen falta pieza probada, patrón, carga por ciclo, duración y manipulación."
      ],
      [
        "¿Debo enviar bandejas sucias?",
        "Las piezas usadas representativas dan la mejor evidencia; si no, documente la equivalencia."
      ],
      [
        "¿Confirmo tensión y fases?",
        "Sí: tensión medida, fases, frecuencia, interruptor y conexión local."
      ],
      [
        "¿Qué es aceptación?",
        "Criterios previos: sin residuo visible ni agua retenida, sin daño, patrón repetible y proceso registrado."
      ]
    ],
    "introTitle": "Especifique el trabajo, no solo la máquina",
    "intro": [
      "Mismo formato no significa misma prueba: migas frescas sobre aluminio no equivalen a grasa o caramelo secos sobre recubrimiento.",
      "Todos deben cotizar la misma ficha; cualquier cambio de carga, ciclo, pretratamiento, electricidad, opciones o entrega debe verse."
    ],
    "factsTitle": "Cinco hechos",
    "facts": [
      "Caber no prueba rociado, drenaje, sujeción ni compatibilidad.",
      "La capacidad sin pieza, carga, ciclo y manipulación es incompleta.",
      "Pico y hora límite importan más que el total diario aislado.",
      "Electricidad, agua, drenaje, acceso y altura van en la RFQ.",
      "La aceptación se acuerda antes de probar."
    ],
    "briefTitle": "RFQ en ocho campos",
    "briefIntro": "Use datos medidos; marque lo desconocido, no lo adivine.",
    "briefRows": [
      [
        "Piezas y medidas",
        "Fotos, largo, ancho, fondo, asas, bordes, material, recubrimiento y cantidad."
      ],
      [
        "Suciedad y proceso",
        "Residuo normal/crítico, espera, raspado/remojo/preaclarado y límites químicos."
      ],
      [
        "Pico y plazo",
        "Piezas por lote/hora, total, turnos y hora límite."
      ],
      [
        "Carga",
        "Separada o mezcla fija de bandejas, boles, moldes y utensilios."
      ],
      [
        "Espacio y acceso",
        "Ubicación, puertas, pasillos, giros, escalones, suelo y altura abierta."
      ],
      [
        "Servicios",
        "Tensión/fases/frecuencia, interruptor, agua, drenaje y ventilación."
      ],
      [
        "Destino y documentos",
        "País, ciudad/código, negocio, Incoterm, documentos y lengua."
      ],
      [
        "Aceptación y soporte",
        "Prueba, evidencia, formación, garantía, repuestos y respuesta."
      ]
    ],
    "referenceTitle": "Valores JD-3 verificados",
    "referenceIntro": "Valores publicados para VT-AE-JD-3; orientan la RFQ, no prueban una carga sin ensayar.",
    "referenceLabels": [
      "Cuerpo / altura abierta",
      "Rack / bandeja europea",
      "Carga estándar",
      "Ciclo / techo técnico",
      "Electricidad",
      "Entrada de agua",
      "Drenaje"
    ],
    "questionsTitle": "Seis preguntas al proveedor",
    "questions": [
      "¿Qué pieza, suciedad, patrón, ciclo, química y pretratamiento sustentan la capacidad?",
      "¿Habrá prueba con vídeo continuo, fotos, ajustes e inspección?",
      "¿Qué electricidad y opciones están incluidas o dependen del destino?",
      "¿Qué holguras, servicios, instalación y puesta en marcha se exigen?",
      "¿Qué manuales, esquemas, declaraciones, garantía y repuestos se entregan?",
      "¿Cuáles son Incoterm, plazo, embalaje, peso, entrega y exclusiones?"
    ],
    "redFlagsTitle": "Señales de alarma",
    "redFlags": [
      "Bandejas por hora sin patrón ni ciclo.",
      "“Todas las bandejas” sin medidas, material, recubrimiento o suciedad.",
      "Precio final sin electricidad, destino y acceso.",
      "Prueba con piezas fáciles no representativas.",
      "Datos contradictorios entre oferta, plano, manual y web."
    ],
    "templateTitle": "Plantilla RFQ",
    "templateIntro": "Sustituya corchetes y adjunte fotos acotadas.",
    "templateLines": [
      "Negocio/destino: [tipo, ciudad, país, código]",
      "Piezas: [familia, medidas, material, cantidad, fotos]",
      "Suciedad: [residuo, espera, pretratamiento]",
      "Pico: [lote/hora, total, hora límite]",
      "Carga: [separada o mezcla exacta]",
      "Espacio/acceso: [puertas, giros, escalones, altura]",
      "Electricidad: [tensión, fases, frecuencia, interruptor]",
      "Agua/drenaje: [rosca, presión, temperatura, tamaño/distancia]",
      "Documentos/aceptación: [lista, muestras, evidencia]",
      "Oferta: [configuración, Incoterm, plazo, exclusiones]"
    ],
    "decisionTitle": "Compare lo equivalente",
    "decision": [
      "Alinee las ocho respuestas y destaque supuestos; una diferencia suele esconder opciones, entrega, prueba fácil u obra excluida.",
      "Fije piezas, foto, ciclo, química, pretratamiento e inspección aceptados en la compra."
    ],
    "nextTitle": "Construya el expediente",
    "nextIntro": "Confirme base y pruebas en estas páginas.",
    "links": [
      "Ver especificaciones JD-3",
      "Calcular capacidad",
      "Definir prueba controlada",
      "Completar preinstalación",
      "Solicitar cotización documentada"
    ]
  },
  "fr": {
    "title": "Comment spécifier un lave-plaques : la RFQ qui évite la mauvaise machine",
    "description": "Transmettez charge, salissures, pointe, réseaux, livraison et réception avant de demander un devis.",
    "tldr": "Une RFQ utile définit <strong>articles, salissure normale la plus difficile, fenêtre de pointe, réseaux et preuves de réception</strong>. Modèle ou plaques/heure ne suffit pas : envoyez cotes, photos, résidus, attente et données du site, puis exigez un essai du chargement proposé.",
    "faqs": [
      [
        "Quelles données envoyer ?",
        "Cotes, photos, matériaux, revêtements, salissures, pointe, délai, chargement, site, destination, documents et réception."
      ],
      [
        "Plaques par heure suffit-il ?",
        "Non : il faut article testé, plan, charge par cycle, durée et manutention."
      ],
      [
        "Faut-il envoyer des plaques sales ?",
        "Des articles utilisés représentatifs donnent la meilleure preuve ; sinon, consignez l’équivalence."
      ],
      [
        "Confirmer tension et phases ?",
        "Oui : tension mesurée, phases, fréquence, disjoncteur et raccordement."
      ],
      [
        "Comment réceptionner ?",
        "Avant l’essai : aucun résidu ni eau, pas d’altération, plan répétable et procédé consigné."
      ]
    ],
    "introTitle": "Spécifiez le travail, pas seulement la machine",
    "intro": [
      "Un même format peut cacher des essais différents : miettes fraîches sur aluminium ou graisse séchée sur revêtement.",
      "Tous répondent à la même fiche ; changement de charge, cycle, prétraitement, électricité, options ou livraison doit apparaître."
    ],
    "factsTitle": "Cinq faits",
    "facts": [
      "L’encombrement ne prouve ni aspersion, ni égouttage, ni maintien, ni compatibilité.",
      "Un débit sans article, charge, cycle et manutention est incomplet.",
      "La pointe et l’heure limite comptent plus qu’un total journalier.",
      "Électricité, eau, évacuation, accès et hauteur vont dans la RFQ.",
      "La réception se définit avant l’essai."
    ],
    "briefTitle": "RFQ en huit rubriques",
    "briefIntro": "Utilisez des mesures ; signalez l’inconnu sans deviner.",
    "briefRows": [
      [
        "Articles et cotes",
        "Photos, longueur, largeur, profondeur, poignées, rebords, matériau, revêtement et quantité."
      ],
      [
        "Salissure et procédé",
        "Résidu normal/difficile, attente, raclage/trempage/prérinçage et limites chimiques."
      ],
      [
        "Pointe et délai",
        "Articles par lot/heure, total, équipes et heure de retour."
      ],
      [
        "Chargement",
        "Séparé ou mélange fixe de plaques, cuves, moules et ustensiles."
      ],
      [
        "Espace et accès",
        "Implantation, portes, couloirs, virages, marches, sol et hauteur ouverte."
      ],
      [
        "Réseaux",
        "Tension/phases/fréquence, disjoncteur, eau, évacuation et ventilation."
      ],
      [
        "Destination/documents",
        "Pays, ville/code, activité, Incoterm, documents et langue."
      ],
      [
        "Réception/support",
        "Essai, preuves, formation, garantie, pièces et réponse."
      ]
    ],
    "referenceTitle": "Valeurs JD-3 vérifiées",
    "referenceIntro": "Valeurs publiées pour VT-AE-JD-3 ; utiles à la RFQ, pas preuve d’une charge non testée.",
    "referenceLabels": [
      "Corps / hauteur ouverte",
      "Panier / plaque européenne",
      "Charge standard",
      "Cycle / plafond technique",
      "Électricité",
      "Arrivée d’eau",
      "Évacuation"
    ],
    "questionsTitle": "Six questions au fournisseur",
    "questions": [
      "Quels article, salissure, plan, cycle, chimie et prétraitement justifient le débit ?",
      "Essai avec vidéo continue, photos, réglages et inspection ?",
      "Quelle alimentation et quelles options sont incluses ou propres au pays ?",
      "Quels dégagements, réseaux, travaux et mise en service ?",
      "Quelles notices, schémas, déclarations, garantie et pièces ?",
      "Quels Incoterm, délai, emballage, poids, remise et exclusions ?"
    ],
    "redFlagsTitle": "Signaux d’alerte",
    "redFlags": [
      "Plaques/heure sans plan ni cycle.",
      "« Toutes plaques » sans cotes, matériau, revêtement ou salissure.",
      "Devis final sans électricité, destination et accès.",
      "Essai facile non représentatif.",
      "Données contradictoires entre devis, plan, notice et site."
    ],
    "templateTitle": "Modèle RFQ",
    "templateIntro": "Remplacez les crochets et joignez des photos cotées.",
    "templateLines": [
      "Activité/destination : [type, ville, pays, code]",
      "Articles : [famille, cotes, matériau, quantité, photos]",
      "Salissure : [résidu, attente, prétraitement]",
      "Pointe : [lot/heure, total, heure limite]",
      "Charge : [séparée ou mélange exact]",
      "Espace/accès : [portes, virages, marches, hauteur]",
      "Électricité : [tension, phases, fréquence, disjoncteur]",
      "Eau/évacuation : [raccord, pression, température, taille/distance]",
      "Documents/réception : [liste, échantillons, preuves]",
      "Offre : [configuration, Incoterm, délai, exclusions]"
    ],
    "decisionTitle": "Comparez l’équivalent",
    "decision": [
      "Alignez les huit réponses et surlignez les hypothèses ; les écarts cachent souvent options, livraison, essai facile ou travaux exclus.",
      "Figez articles, photo, cycle, chimie, prétraitement et contrôle dans l’achat."
    ],
    "nextTitle": "Constituez les preuves",
    "nextIntro": "Confirmez base et essais dans ces pages.",
    "links": [
      "Vérifier les spécifications JD-3",
      "Calculer la capacité",
      "Définir un essai contrôlé",
      "Compléter la préinstallation",
      "Demander un devis documenté"
    ]
  },
  "de": {
    "title": "Backblechspülmaschine richtig ausschreiben: RFQ-Checkliste gegen Fehlkäufe",
    "description": "Spülgut, Verschmutzung, Spitze, Anschlüsse, Lieferung und Abnahme vor dem Angebot übermitteln.",
    "tldr": "Eine brauchbare RFQ nennt <strong>Spülgut, schwierigste Normalverschmutzung, Spitzenfenster, Anschlüsse und Abnahmenachweise</strong>. Modell oder Bleche pro Stunde reichen nicht: Maße, Fotos, Rückstände, Standzeit und Standortdaten senden und Probelauf des Musters fordern.",
    "faqs": [
      [
        "Welche Angaben braucht ein Angebot?",
        "Maße, Fotos, Werkstoffe, Beschichtungen, Schmutz, Spitze, Termin, Muster, Standort, Ziel, Unterlagen und Abnahme."
      ],
      [
        "Reichen Bleche pro Stunde?",
        "Nein: Prüfteil, Muster, Stück je Zyklus, Dauer und Handhabung sind nötig."
      ],
      [
        "Muss ich schmutzige Bleche senden?",
        "Repräsentativ benutztes Gut ist der beste Nachweis; andernfalls Gleichwertigkeit dokumentieren."
      ],
      [
        "Spannung und Phasen bestätigen?",
        "Ja: Messwert, Phasen, Frequenz, Absicherung und Anschluss."
      ],
      [
        "Was gilt als Abnahme?",
        "Vorher: keine Zielreste oder Wasser, keine Schäden, wiederholbares Muster und dokumentierter Prozess."
      ]
    ],
    "introTitle": "Aufgabe statt nur Maschine ausschreiben",
    "intro": [
      "Gleiches Nennformat heißt nicht gleicher Test: frische Krümel auf Aluminium unterscheiden sich von getrocknetem Fett auf Beschichtung.",
      "Alle Anbieter beantworten dieselbe Beschreibung; Änderungen an Last, Zyklus, Vorbehandlung, Elektrik, Optionen oder Lieferung werden sichtbar."
    ],
    "factsTitle": "Fünf Fakten",
    "facts": [
      "Passform beweist weder Spritzugang noch Ablauf, Sicherung oder Verträglichkeit.",
      "Leistung ohne Prüfteil, Last, Zyklus und Handhabung ist unvollständig.",
      "Spitze und Rückgabetermin zählen mehr als der Tageswert.",
      "Strom, Wasser, Ablauf, Zugang und Haubenhöhe gehören in die RFQ.",
      "Abnahme vor dem Test definieren."
    ],
    "briefTitle": "RFQ in acht Feldern",
    "briefIntro": "Messwerte nutzen; Unbekanntes markieren, nicht schätzen.",
    "briefRows": [
      [
        "Spülgut und Maße",
        "Fotos, Länge, Breite, Tiefe, Griffe, Ränder, Werkstoff, Beschichtung und Menge."
      ],
      [
        "Schmutz und Prozess",
        "Normal-/Schwerstrückstand, Standzeit, Schaben/Einweichen/Vorspülen und Chemiegrenzen."
      ],
      [
        "Spitze und Termin",
        "Teile je Charge/Stunde, Tag, Schichten und Rückgabezeit."
      ],
      [
        "Beladung",
        "Bleche, Schüsseln, Formen und Geräte getrennt oder fest gemischt."
      ],
      [
        "Platz und Zugang",
        "Standort, Türen, Flure, Kurven, Stufen, Boden und offene Höhe."
      ],
      [
        "Anschlüsse",
        "Spannung/Phasen/Frequenz, Absicherung, Wasser, Ablauf und Lüftung."
      ],
      [
        "Ziel und Unterlagen",
        "Land, Ort/PLZ, Betrieb, Incoterm, Nachweise und Sprache."
      ],
      [
        "Abnahme und Service",
        "Test, Belege, Schulung, Garantie, Teile und Reaktion."
      ]
    ],
    "referenceTitle": "Verifizierte JD-3-Werte",
    "referenceIntro": "Veröffentlichte VT-AE-JD-3-Werte helfen der RFQ, beweisen aber keine ungeprüfte Last.",
    "referenceLabels": [
      "Korpus / offene Höhe",
      "Korb / Euroblech",
      "Standardlast",
      "Zyklus / Obergrenze",
      "Elektrik",
      "Wasserzulauf",
      "Ablauf"
    ],
    "questionsTitle": "Sechs Pflichtfragen",
    "questions": [
      "Welche Teile, Verschmutzung, Beladung, Zyklus, Chemie und Vorbehandlung tragen die Leistung?",
      "Probelauf mit durchgehendem Video, Fotos, Einstellungen und Kontrolle?",
      "Welche Elektrik und Optionen sind enthalten oder landesspezifisch?",
      "Welche Freiräume, Anschlüsse, Arbeiten und Inbetriebnahme?",
      "Welche Anleitungen, Schaltpläne, Erklärungen, Garantie und Teile?",
      "Welche Incoterms, Zeit, Packmaß, Gewicht, Übergabe und Ausschlüsse?"
    ],
    "redFlagsTitle": "Warnsignale",
    "redFlags": [
      "Bleche/Stunde ohne Muster und Zyklus.",
      "„Alle Bleche“ ohne Maße, Material, Beschichtung oder Schmutz.",
      "Endpreis ohne Elektrik, Ziel und Zugang.",
      "Leichter, nicht repräsentativer Test.",
      "Widersprüche zwischen Angebot, Zeichnung, Handbuch und Website."
    ],
    "templateTitle": "RFQ-Vorlage",
    "templateIntro": "Klammern ersetzen und Maßfotos anhängen.",
    "templateLines": [
      "Betrieb/Ziel: [Art, Ort, Land, PLZ]",
      "Spülgut: [Familie, Maße, Material, Menge, Fotos]",
      "Schmutz: [Rückstand, Standzeit, Vorbehandlung]",
      "Spitze: [Charge/Stunde, Tag, Termin]",
      "Last: [getrennt oder exaktes Mischmuster]",
      "Platz/Zugang: [Türen, Kurven, Stufen, Höhe]",
      "Elektrik: [Spannung, Phasen, Frequenz, Absicherung]",
      "Wasser/Ablauf: [Anschluss, Druck, Temperatur, Größe/Entfernung]",
      "Unterlagen/Abnahme: [Liste, Muster, Nachweise]",
      "Angebot: [Ausführung, Incoterm, Zeit, Ausschlüsse]"
    ],
    "decisionTitle": "Gleiches vergleichen",
    "decision": [
      "Acht Antworten ausrichten und Annahmen markieren; Unterschiede verstecken oft Optionen, Lieferung, leichte Prüfung oder ausgeschlossene Arbeiten.",
      "Teile, Foto, Zyklus, Chemie, Vorbehandlung und Kontrolle im Kauf festhalten."
    ],
    "nextTitle": "Nachweise aufbauen",
    "nextIntro": "Basis und Prüfungen hier bestätigen.",
    "links": [
      "JD-3-Daten prüfen",
      "Kapazität berechnen",
      "Probelauf definieren",
      "Vorinstallation abschließen",
      "Dokumentiertes Angebot anfordern"
    ]
  },
  "ru": {
    "title": "Как составить ТЗ на мойку противней: RFQ-чек-лист против ошибочной покупки",
    "description": "До запроса цены передайте данные о посуде, загрязнении, пике, коммуникациях, доставке и приёмке.",
    "tldr": "Рабочий RFQ описывает <strong>посуду, сложнейшее штатное загрязнение, пиковое окно, коммуникации и доказательства приёмки</strong>. Модели или противней/час мало: отправьте размеры, фото, остатки, выдержку и данные площадки и потребуйте тест схемы.",
    "faqs": [
      [
        "Что отправить для цены?",
        "Размеры, фото, материалы, покрытия, загрязнение, пик, срок, схему, площадку, адрес, документы и приёмку."
      ],
      [
        "Достаточно противней в час?",
        "Нет: нужны изделие, схема, штук за цикл, время и обработка."
      ],
      [
        "Отправлять грязные противни?",
        "Реально использованные образцы — лучший результат; иначе документируйте эквивалентность."
      ],
      [
        "Подтверждать напряжение и фазы?",
        "Да: измерение, фазы, частота, автомат и подключение."
      ],
      [
        "Что считать приёмкой?",
        "Заранее: нет остатков и воды, нет повреждений, схема повторяется, процесс записан."
      ]
    ],
    "introTitle": "Задайте работу, а не только машину",
    "intro": [
      "Один формат не означает один тест: свежая крошка на алюминии отличается от высохшего жира на покрытии.",
      "Все отвечают на одно описание; изменения загрузки, цикла, подготовки, электрики, опций или доставки должны быть видны."
    ],
    "factsTitle": "Пять фактов",
    "facts": [
      "Габарит не доказывает струи, слив, фиксацию и совместимость.",
      "Производительность без изделия, загрузки, цикла и обработки неполна.",
      "Пик и срок возврата важнее одного суточного числа.",
      "Электрика, вода, слив, маршрут и высота входят в RFQ.",
      "Приёмку задают до теста."
    ],
    "briefTitle": "Восемь полей RFQ",
    "briefIntro": "Используйте измерения; неизвестное отмечайте, не угадывайте.",
    "briefRows": [
      [
        "Изделия и размеры",
        "Фото, длина, ширина, глубина, ручки, края, материал, покрытие и число."
      ],
      [
        "Грязь и процесс",
        "Обычный/сложный остаток, выдержка, скобление/замачивание/ополаскивание и ограничения."
      ],
      [
        "Пик и срок",
        "Штук за партию/час, в сутки, смены и время возврата."
      ],
      [
        "Схема",
        "Противни, чаши, формы и инвентарь отдельно или фиксированно вместе."
      ],
      [
        "Место и маршрут",
        "Позиция, двери, коридоры, повороты, ступени, пол и открытая высота."
      ],
      [
        "Коммуникации",
        "Напряжение/фазы/частота, автомат, вода, слив и вентиляция."
      ],
      [
        "Адрес и документы",
        "Страна, город/индекс, бизнес, Incoterm, документы и язык."
      ],
      [
        "Приёмка и сервис",
        "Тест, доказательства, обучение, гарантия, запчасти и реакция."
      ]
    ],
    "referenceTitle": "Проверенные значения JD-3",
    "referenceIntro": "Опубликованные значения VT-AE-JD-3 помогают RFQ, но не доказывают непроверенную загрузку.",
    "referenceLabels": [
      "Корпус / открытая высота",
      "Кассета / евролист",
      "Стандартная загрузка",
      "Цикл / предел",
      "Электрика",
      "Вода",
      "Слив"
    ],
    "questionsTitle": "Шесть вопросов поставщику",
    "questions": [
      "Какие изделие, грязь, схема, цикл, химия и подготовка подтверждают производительность?",
      "Будет тест с непрерывным видео, фото, настройками и осмотром?",
      "Какая электрика и опции включены или зависят от страны?",
      "Какие зазоры, коммуникации, работы и пуск нужны?",
      "Какие руководства, схемы, декларации, гарантия и запчасти?",
      "Какие Incoterm, срок, упаковка, вес, передача и исключения?"
    ],
    "redFlagsTitle": "Красные флаги",
    "redFlags": [
      "Противни/час без схемы и цикла.",
      "«Моет всё» без размеров, материала, покрытия и грязи.",
      "Цена без электрики, адреса и маршрута.",
      "Лёгкий нерепрезентативный тест.",
      "Противоречия между ценой, чертежом, руководством и сайтом."
    ],
    "templateTitle": "Шаблон RFQ",
    "templateIntro": "Замените скобки и приложите размерные фото.",
    "templateLines": [
      "Бизнес/адрес: [тип, город, страна, индекс]",
      "Изделия: [семейство, размеры, материал, число, фото]",
      "Грязь: [остаток, выдержка, подготовка]",
      "Пик: [партия/час, сутки, срок]",
      "Загрузка: [раздельно или точная смесь]",
      "Место/маршрут: [двери, повороты, ступени, высота]",
      "Электрика: [напряжение, фазы, частота, автомат]",
      "Вода/слив: [резьба, давление, температура, размер/дистанция]",
      "Документы/приёмка: [список, образцы, доказательства]",
      "Цена: [версия, Incoterm, срок, исключения]"
    ],
    "decisionTitle": "Сравнивайте равное",
    "decision": [
      "Сведите восемь ответов и выделите допущения; разница часто скрывает опции, доставку, лёгкий тест или исключённые работы.",
      "Закрепите изделия, фото, цикл, химию, подготовку и контроль в закупке."
    ],
    "nextTitle": "Соберите доказательства",
    "nextIntro": "Подтвердите базу и тесты здесь.",
    "links": [
      "Проверить JD-3",
      "Рассчитать ёмкость",
      "Задать пробную мойку",
      "Завершить предмонтаж",
      "Запросить документированную цену"
    ]
  },
  "th": {
    "title": "เขียนสเปกเครื่องล้างถาดเบเกอรี: เช็กลิสต์ RFQ ที่ช่วยไม่ให้ซื้อผิดเครื่อง",
    "description": "ส่งข้อมูลภาชนะ คราบ ช่วงพีก ระบบหน้างาน การส่งมอบ และการตรวจรับก่อนขอราคา",
    "tldr": "RFQ ที่ใช้ได้ต้องระบุ <strong>ภาชนะ คราบปกติที่ยากที่สุด ช่วงพีก ระบบหน้างาน และหลักฐานตรวจรับ</strong> ชื่อรุ่นหรือถาดต่อชั่วโมงยังไม่พอ ส่งขนาด ภาพ คราบ เวลาทิ้ง และข้อมูลสถานที่ แล้วให้ทดสอบตามแบบโหลดจริง",
    "faqs": [
      [
        "ต้องส่งข้อมูลอะไร?",
        "ขนาด ภาพ วัสดุ เคลือบ คราบ พีก กำหนด แบบโหลด พื้นที่ ปลายทาง เอกสาร และเกณฑ์"
      ],
      [
        "ถาดต่อชั่วโมงพอไหม?",
        "ไม่พอ ต้องมีของที่ทดสอบ แบบโหลด จำนวนต่อรอบ เวลา และการขนย้าย"
      ],
      [
        "ต้องส่งถาดสกปรกไหม?",
        "ของใช้จริงเป็นหลักฐานดีที่สุด หากไม่ได้ให้บันทึกความเทียบเท่า"
      ],
      [
        "ต้องยืนยันไฟก่อนราคาไหม?",
        "ต้องแจ้งแรงดันวัดจริง เฟส ความถี่ เบรกเกอร์ และการต่อ"
      ],
      [
        "ตรวจรับอย่างไร?",
        "กำหนดก่อนว่าไม่มีคราบหรือน้ำค้าง ไม่เสียผิว แบบทำซ้ำได้ และบันทึกกระบวนการ"
      ]
    ],
    "introTitle": "ระบุงาน ไม่ใช่แค่เครื่อง",
    "intro": [
      "ถาดขนาดเดียวกันอาจต่างกัน: เศษสดบนอะลูมิเนียมไม่เหมือนไขมันแห้งบนผิวเคลือบ",
      "ให้ทุกผู้ขายตอบเอกสารเดียวกัน และแสดงการเปลี่ยนโหลด รอบ การเตรียม ไฟ ออปชัน หรือการส่ง"
    ],
    "factsTitle": "ข้อเท็จจริง 5 ข้อ",
    "facts": [
      "ใส่ได้ไม่พิสูจน์การพ่น ระบาย ยึด และวัสดุ",
      "กำลังผลิตที่ไม่มีของ โหลด รอบ และการขนย้ายไม่ครบ",
      "พีกและเวลาคืนสำคัญกว่ายอดวัน",
      "ไฟ น้ำ ท่อ ทางเข้า และความสูงต้องอยู่ใน RFQ",
      "ตกลงเกณฑ์ก่อนทดสอบ"
    ],
    "briefTitle": "RFQ 8 ช่อง",
    "briefIntro": "ใช้ข้อมูลที่วัดจริง ทำเครื่องหมายสิ่งที่ไม่ทราบ อย่าเดา",
    "briefRows": [
      [
        "ภาชนะ/ขนาด",
        "ภาพ ยาว กว้าง ลึก หู ขอบ วัสดุ เคลือบ และจำนวน"
      ],
      [
        "คราบ/วิธี",
        "คราบปกติ/ยาก เวลาทิ้ง ขูด/แช่/ฉีดก่อน และข้อจำกัดเคมี"
      ],
      [
        "พีก/กำหนด",
        "ชิ้นต่อชุด/ชั่วโมง ยอดวัน กะ และเวลาคืน"
      ],
      [
        "แบบโหลด",
        "ถาด อ่าง พิมพ์ และเครื่องมือแยกหรือรวมคงที่"
      ],
      [
        "พื้นที่/ทางเข้า",
        "จุด ประตู ทางเดิน มุม บันได พื้น และความสูงเปิด"
      ],
      [
        "ระบบ",
        "แรงดัน/เฟส/ความถี่ เบรกเกอร์ น้ำ ท่อ และระบายอากาศ"
      ],
      [
        "ปลายทาง/เอกสาร",
        "ประเทศ เมือง/รหัส ธุรกิจ Incoterm เอกสารและภาษา"
      ],
      [
        "ตรวจรับ/บริการ",
        "ทดสอบ หลักฐาน อบรม ประกัน อะไหล่ และการตอบ"
      ]
    ],
    "referenceTitle": "ค่า JD-3 ที่ยืนยัน",
    "referenceIntro": "ค่า VT-AE-JD-3 ที่เผยแพร่ช่วยทำ RFQ แต่ไม่พิสูจน์โหลดที่ยังไม่ทดสอบ",
    "referenceLabels": [
      "ตัวเครื่อง / ความสูงเปิด",
      "แร็ก / ถาดยุโรป",
      "โหลดมาตรฐาน",
      "รอบ / เพดาน",
      "ไฟฟ้า",
      "น้ำเข้า",
      "ท่อระบาย"
    ],
    "questionsTitle": "6 คำถามผู้ขาย",
    "questions": [
      "ของ คราบ แบบ รอบ เคมี และการเตรียมใดรองรับกำลังผลิต?",
      "มีวิดีโอต่อเนื่อง ภาพ การตั้งค่า และผลตรวจหรือไม่?",
      "ระบบไฟและออปชันใดรวม หรือขึ้นกับประเทศ?",
      "ต้องการระยะ ระบบ งานติดตั้ง และเริ่มใช้อะไร?",
      "มีคู่มือ ผัง เอกสาร ประกัน และอะไหล่อะไร?",
      "Incoterm เวลา ขนาดหีบ น้ำหนัก จุดส่ง และไม่รวมอะไร?"
    ],
    "redFlagsTitle": "สัญญาณเตือน",
    "redFlags": [
      "ถาด/ชั่วโมงไม่มีแบบและรอบ",
      "“ทุกถาด” ไม่มีขนาด วัสดุ เคลือบ หรือคราบ",
      "ราคาสุดท้ายก่อนรู้ไฟ ปลายทาง และทางเข้า",
      "ทดสอบของง่ายไม่แทนงานจริง",
      "ข้อมูลขัดกันระหว่างราคา แบบ คู่มือ และเว็บ"
    ],
    "templateTitle": "แม่แบบ RFQ",
    "templateIntro": "แทนวงเล็บและแนบภาพมีขนาด",
    "templateLines": [
      "ธุรกิจ/ปลายทาง: [ประเภท เมือง ประเทศ รหัส]",
      "ภาชนะ: [ชนิด ขนาด วัสดุ จำนวน ภาพ]",
      "คราบ: [ชนิด เวลา การเตรียม]",
      "พีก: [ชุด/ชั่วโมง วัน เวลาคืน]",
      "โหลด: [แยกหรือผสมแน่นอน]",
      "พื้นที่/ทางเข้า: [ประตู มุม บันได ความสูง]",
      "ไฟ: [แรงดัน เฟส ความถี่ เบรกเกอร์]",
      "น้ำ/ท่อ: [เกลียว แรงดัน อุณหภูมิ ขนาด/ระยะ]",
      "เอกสาร/ตรวจรับ: [รายการ ตัวอย่าง หลักฐาน]",
      "ราคา: [รุ่น Incoterm เวลา ไม่รวม]"
    ],
    "decisionTitle": "เปรียบเทียบสิ่งเท่ากัน",
    "decision": [
      "วาง 8 คำตอบเทียบกันและเน้นสมมติฐาน ราคาต่างมักซ่อนออปชัน การส่ง โหลดง่าย หรืองานที่ไม่รวม",
      "บันทึกของ ภาพ รอบ เคมี การเตรียม และการตรวจไว้ในเอกสารซื้อ"
    ],
    "nextTitle": "สร้างชุดหลักฐาน",
    "nextIntro": "ยืนยันฐานและการทดสอบที่นี่",
    "links": [
      "ตรวจสเปก JD-3",
      "คำนวณกำลังผลิต",
      "กำหนดทดสอบ",
      "ทำรายการก่อนติดตั้ง",
      "ขอราคามีหลักฐาน"
    ]
  },
  "vi": {
    "title": "Cách lập thông số máy rửa khay: checklist RFQ để tránh mua sai máy",
    "description": "Gửi dữ liệu vật rửa, vết bẩn, giờ đỉnh, hạ tầng, giao hàng và nghiệm thu trước khi báo giá.",
    "tldr": "RFQ hữu ích phải nêu <strong>vật rửa, vết bẩn thường khó nhất, cửa sổ cao điểm, hạ tầng và bằng chứng nghiệm thu</strong>. Tên model hay khay/giờ chưa đủ: gửi kích thước, ảnh, cặn, thời gian lưu và dữ liệu tại chỗ, rồi yêu cầu thử đúng sơ đồ tải.",
    "faqs": [
      [
        "Cần gửi gì?",
        "Kích thước, ảnh, vật liệu, lớp phủ, cặn, đỉnh, hạn, sơ đồ, địa điểm, điểm đến, hồ sơ và tiêu chí."
      ],
      [
        "Khay mỗi giờ có đủ?",
        "Không: cần vật thử, sơ đồ, tải mỗi chu kỳ, thời gian và thao tác."
      ],
      [
        "Có cần gửi khay bẩn?",
        "Đồ dùng thực tế cho bằng chứng tốt nhất; nếu không, ghi rõ tính tương đương."
      ],
      [
        "Chốt điện trước giá?",
        "Có: điện áp đo, pha, tần số, aptomat và đấu nối."
      ],
      [
        "Nghiệm thu thế nào?",
        "Chốt trước: không cặn/nước, không hỏng bề mặt, sơ đồ lặp lại và quy trình được ghi."
      ]
    ],
    "introTitle": "Mô tả công việc, không chỉ máy",
    "intro": [
      "Cùng cỡ danh nghĩa không có nghĩa cùng phép thử: vụn mới trên nhôm khác mỡ khô trên lớp phủ.",
      "Mọi nhà cung cấp trả lời cùng bản mô tả; thay đổi tải, chu kỳ, xử lý, điện, tùy chọn hay giao hàng phải hiện rõ."
    ],
    "factsTitle": "Năm sự thật",
    "facts": [
      "Vừa không chứng minh tia phun, thoát, cố định và vật liệu.",
      "Công suất thiếu vật, tải, chu kỳ và thao tác là chưa đủ.",
      "Đỉnh và hạn trả quan trọng hơn tổng ngày.",
      "Điện, nước, thoát, đường vào và chiều cao thuộc RFQ.",
      "Chốt nghiệm thu trước thử."
    ],
    "briefTitle": "RFQ tám trường",
    "briefIntro": "Dùng số đo; đánh dấu điều chưa biết, không đoán.",
    "briefRows": [
      [
        "Vật và kích thước",
        "Ảnh, dài, rộng, sâu, tay, mép, vật liệu, lớp phủ và số lượng."
      ],
      [
        "Cặn và quy trình",
        "Cặn thường/khó, thời gian lưu, cạo/ngâm/tráng và giới hạn hóa chất."
      ],
      [
        "Đỉnh và hạn",
        "Số món/mẻ/giờ, tổng ngày, ca và giờ trả."
      ],
      [
        "Sơ đồ tải",
        "Khay, tô, khuôn và dụng cụ riêng hay trộn cố định."
      ],
      [
        "Không gian/đường vào",
        "Vị trí, cửa, hành lang, góc, bậc, sàn và chiều cao mở."
      ],
      [
        "Hạ tầng",
        "Điện áp/pha/tần số, aptomat, nước, thoát và thông gió."
      ],
      [
        "Điểm đến/hồ sơ",
        "Nước, thành phố/mã, loại hình, Incoterm, hồ sơ và ngôn ngữ."
      ],
      [
        "Nghiệm thu/hỗ trợ",
        "Thử, bằng chứng, đào tạo, bảo hành, phụ tùng và phản hồi."
      ]
    ],
    "referenceTitle": "Giá trị JD-3 đã xác minh",
    "referenceIntro": "Giá trị VT-AE-JD-3 công bố hỗ trợ RFQ, không chứng minh tải chưa thử.",
    "referenceLabels": [
      "Thân / chiều cao mở",
      "Giá / khay châu Âu",
      "Tải chuẩn",
      "Chu kỳ / trần",
      "Điện",
      "Nước vào",
      "Thoát"
    ],
    "questionsTitle": "Sáu câu hỏi",
    "questions": [
      "Vật, cặn, sơ đồ, chu kỳ, hóa chất và xử lý nào chứng minh công suất?",
      "Có video liên tục, ảnh, cài đặt và kiểm tra không?",
      "Điện và tùy chọn nào gồm hoặc theo điểm đến?",
      "Cần khoảng hở, hạ tầng, lắp đặt và chạy thử nào?",
      "Có hướng dẫn, sơ đồ, tuyên bố, bảo hành và phụ tùng nào?",
      "Incoterm, thời gian, kiện, trọng lượng, điểm giao và loại trừ?"
    ],
    "redFlagsTitle": "Dấu hiệu cảnh báo",
    "redFlags": [
      "Khay/giờ không sơ đồ và chu kỳ.",
      "“Mọi khay” không kích thước, vật liệu, phủ hay cặn.",
      "Giá cuối trước khi biết điện, điểm đến và đường vào.",
      "Thử dễ không đại diện.",
      "Mâu thuẫn giữa giá, bản vẽ, hướng dẫn và web."
    ],
    "templateTitle": "Mẫu RFQ",
    "templateIntro": "Thay ngoặc và đính kèm ảnh kích thước.",
    "templateLines": [
      "Doanh nghiệp/điểm đến: [loại, thành phố, nước, mã]",
      "Vật: [nhóm, kích thước, vật liệu, số lượng, ảnh]",
      "Cặn: [loại, thời gian, xử lý]",
      "Đỉnh: [mẻ/giờ, ngày, hạn]",
      "Tải: [riêng hoặc trộn chính xác]",
      "Không gian/đường vào: [cửa, góc, bậc, chiều cao]",
      "Điện: [điện áp, pha, tần số, aptomat]",
      "Nước/thoát: [ren, áp, nhiệt, cỡ/khoảng cách]",
      "Hồ sơ/nghiệm thu: [danh sách, mẫu, bằng chứng]",
      "Giá: [cấu hình, Incoterm, thời gian, loại trừ]"
    ],
    "decisionTitle": "So sánh cùng điều kiện",
    "decision": [
      "Đặt tám câu trả lời cạnh nhau và nêu giả định; chênh lệch thường ẩn tùy chọn, giao hàng, tải dễ hoặc việc bị loại.",
      "Ghi vật, ảnh, chu kỳ, hóa chất, xử lý và kiểm tra vào hồ sơ mua."
    ],
    "nextTitle": "Lập bộ bằng chứng",
    "nextIntro": "Xác nhận nền và thử nghiệm tại đây.",
    "links": [
      "Kiểm tra JD-3",
      "Tính công suất",
      "Định nghĩa thử rửa",
      "Hoàn tất trước lắp đặt",
      "Yêu cầu báo giá có bằng chứng"
    ]
  },
  "ar": {
    "title": "كيف تكتب مواصفات غسالة صواني المخابز؟ قائمة RFQ تمنع شراء الجهاز الخطأ",
    "description": "أرسل بيانات الأدوات والأوساخ والذروة والمرافق والتسليم والقبول قبل طلب السعر.",
    "tldr": "يحدد RFQ الجيد <strong>الأدوات، وأصعب اتساخ معتاد، ونافذة الذروة، ومرافق الموقع، ودليل القبول</strong>. اسم الموديل أو صوانٍ/ساعة لا يكفي: أرسل القياسات والصور والبقايا ومدة بقائها وبيانات الموقع واشترط اختبار نمط التحميل.",
    "faqs": [
      [
        "ما البيانات المطلوبة؟",
        "الأبعاد والصور والمواد والطلاء والاتساخ والذروة والموعد والنمط والموقع والوجهة والوثائق والقبول."
      ],
      [
        "هل تكفي الصواني في الساعة؟",
        "لا: يلزم تحديد الأداة والنمط والحمل في الدورة والزمن والمناولة."
      ],
      [
        "هل أرسل صواني متسخة؟",
        "الأدوات المستخدمة الممثلة أقوى دليل؛ وإلا فوثّق التكافؤ."
      ],
      [
        "هل نؤكد الجهد والأطوار؟",
        "نعم: الجهد المقاس والأطوار والتردد والقاطع والتوصيل."
      ],
      [
        "ما القبول؟",
        "قبل الاختبار: لا بقايا أو ماء، لا تلف، نمط متكرر، وعملية موثقة."
      ]
    ],
    "introTitle": "حدّد المهمة لا الجهاز فقط",
    "intro": [
      "المقاس نفسه لا يعني الاختبار نفسه: الفتات الطازج على الألمنيوم يختلف عن الدهن الجاف على الطلاء.",
      "يجيب كل الموردين عن وصف واحد؛ ويظهر أي تغيير في الحمل أو الدورة أو المعالجة أو الكهرباء أو الخيارات أو التسليم."
    ],
    "factsTitle": "خمس حقائق",
    "facts": [
      "الملاءمة لا تثبت الرش والتصريف والتثبيت وتوافق المادة.",
      "الإنتاجية بلا أداة وحمل ودورة ومناولة ناقصة.",
      "الذروة وموعد العودة أهم من الإجمالي اليومي.",
      "الكهرباء والماء والصرف والمسار وارتفاع الغطاء في RFQ.",
      "القبول يحدد قبل الاختبار."
    ],
    "briefTitle": "ثمانية حقول RFQ",
    "briefIntro": "استخدم القياسات؛ علّم المجهول ولا تخمّن.",
    "briefRows": [
      [
        "الأدوات والأبعاد",
        "صور وطول وعرض وعمق ومقابض وحواف ومادة وطلاء وعدد."
      ],
      [
        "الأوساخ والطريقة",
        "البقايا العادية/الصعبة ومدة البقاء والكشط/النقع/الشطف والقيود."
      ],
      [
        "الذروة والموعد",
        "القطع لكل دفعة/ساعة والإجمالي والورديات وموعد العودة."
      ],
      [
        "التحميل",
        "الصواني والأوعية والقوالب منفصلة أو بمزيج ثابت."
      ],
      [
        "المكان والمسار",
        "الموقع والأبواب والممرات والمنعطفات والدرج والأرضية وارتفاع الفتح."
      ],
      [
        "المرافق",
        "الجهد/الأطوار/التردد والقاطع والماء والصرف والتهوية."
      ],
      [
        "الوجهة والوثائق",
        "الدولة والمدينة/الرمز والنشاط وIncoterm والوثائق واللغة."
      ],
      [
        "القبول والدعم",
        "الاختبار والأدلة والتدريب والضمان والقطع والاستجابة."
      ]
    ],
    "referenceTitle": "قيم JD-3 الموثقة",
    "referenceIntro": "قيم VT-AE-JD-3 المنشورة تساعد RFQ ولا تثبت حملاً لم يُختبر.",
    "referenceLabels": [
      "الجسم / ارتفاع الفتح",
      "الحامل / الصينية الأوروبية",
      "الحمل القياسي",
      "الدورة / الحد",
      "الكهرباء",
      "دخول الماء",
      "الصرف"
    ],
    "questionsTitle": "ستة أسئلة",
    "questions": [
      "ما الأداة والاتساخ والنمط والدورة والكيمياء والمعالجة التي تثبت الإنتاجية؟",
      "هل يوجد فيديو متصل وصور وإعدادات وفحص؟",
      "أي كهرباء وخيارات مشمولة أو خاصة بالوجهة؟",
      "ما الخلوص والمرافق والتركيب والتشغيل المطلوب؟",
      "ما الأدلة والمخططات والإقرارات والضمان والقطع؟",
      "ما Incoterm والمدة والتغليف والوزن والتسليم والاستثناءات؟"
    ],
    "redFlagsTitle": "إشارات تحذير",
    "redFlags": [
      "صوانٍ/ساعة بلا نمط ودورة.",
      "«كل الصواني» بلا أبعاد أو مادة أو طلاء أو اتساخ.",
      "سعر نهائي قبل الكهرباء والوجهة والمسار.",
      "اختبار سهل غير ممثل.",
      "تعارض بين العرض والرسم والدليل والموقع."
    ],
    "templateTitle": "قالب RFQ",
    "templateIntro": "استبدل الأقواس وأرفق صوراً بالأبعاد.",
    "templateLines": [
      "النشاط/الوجهة: [النوع، المدينة، الدولة، الرمز]",
      "الأدوات: [الفئة، الأبعاد، المادة، العدد، الصور]",
      "الاتساخ: [البقايا، المدة، المعالجة]",
      "الذروة: [دفعة/ساعة، يوم، موعد]",
      "التحميل: [منفصل أو المزيج الدقيق]",
      "المكان/المسار: [الأبواب، المنعطفات، الدرج، الارتفاع]",
      "الكهرباء: [الجهد، الأطوار، التردد، القاطع]",
      "الماء/الصرف: [الوصلة، الضغط، الحرارة، الحجم/المسافة]",
      "الوثائق/القبول: [القائمة، العينات، الأدلة]",
      "السعر: [التكوين، Incoterm، المدة، الاستثناءات]"
    ],
    "decisionTitle": "قارن المتكافئ",
    "decision": [
      "ضع الإجابات الثمانية جنباً إلى جنب وأبرز الافتراضات؛ الفارق يخفي غالباً خياراً أو تسليماً أو اختباراً سهلاً أو عملاً مستبعداً.",
      "ثبّت الأدوات والصورة والدورة والكيمياء والمعالجة والفحص في الشراء."
    ],
    "nextTitle": "ابنِ ملف الأدلة",
    "nextIntro": "أكد الأساس والاختبارات هنا.",
    "links": [
      "راجع JD-3",
      "احسب السعة",
      "حدد اختبار الغسل",
      "أكمل ما قبل التركيب",
      "اطلب سعراً موثقاً"
    ]
  }
};
