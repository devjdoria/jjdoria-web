import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Layers3,
  MonitorSmartphone,
  MousePointerClick,
  Route,
  ShieldCheck,
} from "lucide-react";

type Props = { locale: string };

type Copy = {
  back: string;
  badge: string;
  subtitle: string;
  notice: string;
  contextTitle: string;
  context: string;
  scopeTitle: string;
  scope: string;
  methodTitle: string;
  methods: { title: string; description: string }[];
  findingsTitle: string;
  findingsIntro: string;
  findings: { title: string; description: string; priority: string }[];
  journeyTitle: string;
  journeyDescription: string;
  journey: string[];
  strategyTitle: string;
  strategies: { title: string; description: string }[];
  deliverableTitle: string;
  deliverable: string;
  limitsTitle: string;
  limits: string;
  privacyTitle: string;
  privacy: string;

};

const copy: Record<"es" | "en" | "ca" | "it" | "nl", Copy> = {
  ca: {
    back: "Tornar al portafolis",
    badge: "Auditoria web · UX/UI · CRO · Consultoria digital",
    subtitle: "Avaluació de l’experiència digital d’una plataforma del sector hoteler, amb propostes per simplificar la navegació, millorar la claredat comercial i optimitzar el procés de reserva.",
    notice: "Cas d’estudi anonimitzat. Els esquemes són il·lustratius i no reprodueixen el web ni dades del client.",
    contextTitle: "El context",
    context: "La feina consistia a revisar un web d’allotjament des del punt de vista del visitant i del negoci: com es presenta l’oferta, com es comparen les opcions i com s’arriba a la reserva.",
    scopeTitle: "Abast de l’avaluació",
    scope: "Revisió visual i funcional de pàgines públiques en ordinador i mòbil, incloent recorreguts cap a un servei extern de reserves. Es van analitzar elements observables, no mètriques internes ni implementació tècnica.",
    methodTitle: "Àrees analitzades",
    methods: [
      {
        title: "Experiència d’usuari",
        description: "Navegació, jerarquia visual, llegibilitat i adaptació a mòbil."
      },
      {
        title: "Presentació de l’oferta",
        description: "Claredat de les característiques i comparació d’alternatives."
      },
      {
        title: "Procés de conversió",
        description: "Visibilitat d’accions, passos de reserva i continuïtat entre interfícies."
      },
      {
        title: "Estratègia tecnològica",
        description: "Opcions de millora i dependències que cal validar abans d’una renovació."
      }
    ],
    findingsTitle: "Oportunitats de millora",
    findingsIntro: "Recomanacions generals per protegir la identitat del client. Les prioritats són qualitatives.",
    findings: [
      {
        title: "Continuïtat del procés",
        description: "Revisar si es conserva la selecció en passar a un servei extern de reserves.",
        priority: "Alta"
      },
      {
        title: "Comparació d’opcions",
        description: "Presentar diferències amb resums clars i comparables.",
        priority: "Alta"
      },
      {
        title: "Accions visibles al mòbil",
        description: "Situar les accions principals abans i reduir passos innecessaris.",
        priority: "Mitjana-alta"
      },
      {
        title: "Claredat comercial",
        description: "Fer accessibles i comprensibles les condicions d’ofertes i serveis.",
        priority: "Mitjana"
      }
    ],
    journeyTitle: "Recorregut d’usuari avaluat",
    journeyDescription: "Representació conceptual de les etapes revisades; no s’ha extret de la plataforma original.",
    journey: [
      "Descoberta",
      "Comparació",
      "Selecció",
      "Reserva"
    ],
    strategyTitle: "Alternatives estratègiques avaluades",
    strategies: [
      {
        title: "Optimitzar el web actual",
        description: "Millores de contingut, disseny i recorreguts sense substituir tota la plataforma."
      },
      {
        title: "Nova experiència web",
        description: "Desenvolupament d’un nou web subjecte a validar les integracions disponibles."
      },
      {
        title: "Renovació integral",
        description: "Estudiar canvis tecnològics més amplis només si hi ha motius tècnics i operatius suficients."
      }
    ],
    deliverableTitle: "El lliurable",
    deliverable: "Un informe estructurat amb observacions, recomanacions prioritzades, escenaris d’evolució i passos següents per ajudar a prendre decisions.",
    limitsTitle: "Què no es va avaluar",
    limits: "No es va accedir a analítica, vendes reals ni codi font, ni es van fer proves de rendiment, auditories de seguretat o validacions d’integracions privades. No s’atribueixen millores de conversió ni resultats comercials mesurats.",
    privacyTitle: "Confidencialitat",
    privacy: "La identitat del client i l’informe original es mantenen privats. Aquesta pàgina només mostra una visió general del mètode i les recomanacions, amb gràfics conceptuals."
  },
  it: {
    back: "Torna al portfolio",
    badge: "Audit web · UX/UI · CRO · Consulenza digitale",
    subtitle: "Valutazione dell’esperienza digitale di una piattaforma alberghiera, con proposte per semplificare la navigazione, chiarire l’offerta commerciale e migliorare il percorso di prenotazione.",
    notice: "Caso di studio anonimizzato. Gli schemi sono illustrativi e non riproducono il sito né i dati del cliente.",
    contextTitle: "Il contesto",
    context: "Il lavoro ha esaminato un sito di strutture ricettive dal punto di vista dei visitatori e dell’attività: presentazione dell’offerta, confronto delle opzioni e accesso alla prenotazione.",
    scopeTitle: "Ambito della valutazione",
    scope: "Revisione visiva e funzionale delle pagine pubbliche su desktop e mobile, inclusi i passaggi verso un servizio esterno di prenotazione. Sono stati analizzati elementi osservabili, non metriche interne o implementazione tecnica.",
    methodTitle: "Aree analizzate",
    methods: [
      {
        title: "Esperienza utente",
        description: "Navigazione, gerarchia visiva, leggibilità e adattamento mobile."
      },
      {
        title: "Presentazione dell’offerta",
        description: "Chiarezza delle caratteristiche e facilità di confronto."
      },
      {
        title: "Percorso di conversione",
        description: "Visibilità delle azioni principali, passaggi di prenotazione e continuità tra interfacce."
      },
      {
        title: "Strategia tecnologica",
        description: "Possibili miglioramenti e dipendenze da verificare prima di un rifacimento."
      }
    ],
    findingsTitle: "Opportunità di miglioramento",
    findingsIntro: "Raccomandazioni generalizzate per tutelare l’identità del cliente. Le priorità sono qualitative.",
    findings: [
      {
        title: "Continuità del percorso",
        description: "Verificare se la selezione viene mantenuta passando al servizio esterno di prenotazione.",
        priority: "Alta"
      },
      {
        title: "Confronto delle opzioni",
        description: "Presentare le differenze con riepiloghi chiari e confrontabili.",
        priority: "Alta"
      },
      {
        title: "Azioni visibili su mobile",
        description: "Mostrare prima le azioni principali e ridurre i passaggi inutili.",
        priority: "Medio-alta"
      },
      {
        title: "Chiarezza commerciale",
        description: "Rendere facili da trovare e comprendere le condizioni di offerte e servizi.",
        priority: "Media"
      }
    ],
    journeyTitle: "Percorso utente analizzato",
    journeyDescription: "Rappresentazione concettuale delle fasi esaminate, non estratta dalla piattaforma originale.",
    journey: [
      "Scoperta",
      "Confronto",
      "Selezione",
      "Prenotazione"
    ],
    strategyTitle: "Alternative strategiche considerate",
    strategies: [
      {
        title: "Ottimizzare l’esistente",
        description: "Migliorare contenuti, design e percorsi senza sostituire l’intera piattaforma."
      },
      {
        title: "Nuova esperienza web",
        description: "Sviluppare un nuovo livello web dopo aver verificato le integrazioni disponibili."
      },
      {
        title: "Rinnovamento completo",
        description: "Valutare una trasformazione più ampia solo con adeguate motivazioni tecniche e operative."
      }
    ],
    deliverableTitle: "Il risultato consegnato",
    deliverable: "Un rapporto strutturato con osservazioni, raccomandazioni prioritarie, possibili scenari evolutivi e prossimi passi a supporto delle decisioni.",
    limitsTitle: "Esclusioni dall’analisi",
    limits: "Il lavoro non comprendeva accesso ad analytics, vendite reali, codice sorgente, test delle prestazioni, audit di sicurezza o verifica di integrazioni private. Non vengono dichiarati aumenti misurati delle conversioni o delle vendite.",
    privacyTitle: "Riservatezza",
    privacy: "L’identità del cliente e il rapporto originale restano riservati. Questa pagina presenta solo una panoramica generale del metodo e delle raccomandazioni, con grafici concettuali."
  },
  nl: {
    back: "Terug naar portfolio",
    badge: "Website-audit · UX/UI · CRO · Digitaal advies",
    subtitle: "Beoordeling van de digitale ervaring van een platform in de hotelsector, met aanbevelingen voor eenvoudigere navigatie, duidelijkere commerciële informatie en een beter boekingstraject.",
    notice: "Geanonimiseerde casestudy. De schema’s zijn illustratief en tonen geen website of gegevens van de klant.",
    contextTitle: "De context",
    context: "De opdracht onderzocht een accommodatiewebsite vanuit het perspectief van bezoekers en het bedrijf: hoe het aanbod wordt gepresenteerd, hoe opties worden vergeleken en hoe bezoekers het boekingsproces bereiken.",
    scopeTitle: "Reikwijdte van de beoordeling",
    scope: "Visuele en functionele beoordeling van openbare pagina’s op desktop en mobiel, inclusief routes naar een externe boekingsdienst. Alleen waarneembaar gedrag werd onderzocht, geen interne cijfers of technische implementatie.",
    methodTitle: "Onderzochte onderdelen",
    methods: [
      {
        title: "Gebruikerservaring",
        description: "Navigatie, visuele hiërarchie, leesbaarheid en mobiele weergave."
      },
      {
        title: "Presentatie van het aanbod",
        description: "Duidelijkheid van kenmerken en gemak bij het vergelijken van opties."
      },
      {
        title: "Conversietraject",
        description: "Zichtbaarheid van hoofdacties, boekingsstappen en samenhang tussen interfaces."
      },
      {
        title: "Technologiestrategie",
        description: "Verbeteropties en afhankelijkheden die vóór een vernieuwing moeten worden gecontroleerd."
      }
    ],
    findingsTitle: "Verbeterkansen",
    findingsIntro: "Algemene aanbevelingen om de identiteit van de klant te beschermen. Prioriteiten zijn kwalitatief.",
    findings: [
      {
        title: "Continuïteit van het traject",
        description: "Nagaan of de gemaakte keuze behouden blijft bij de overstap naar een externe boekingsdienst.",
        priority: "Hoog"
      },
      {
        title: "Opties vergelijken",
        description: "Onderscheidende kenmerken in heldere, vergelijkbare overzichten tonen.",
        priority: "Hoog"
      },
      {
        title: "Zichtbare acties op mobiel",
        description: "Belangrijke acties eerder tonen en onnodige stappen wegnemen.",
        priority: "Middelhoog"
      },
      {
        title: "Commerciële duidelijkheid",
        description: "Voorwaarden van aanbiedingen en diensten beter vindbaar en begrijpelijk maken.",
        priority: "Gemiddeld"
      }
    ],
    journeyTitle: "Onderzocht gebruikerstraject",
    journeyDescription: "Conceptuele weergave van de onderzochte stappen, niet afkomstig uit het oorspronkelijke platform.",
    journey: [
      "Ontdekken",
      "Vergelijken",
      "Kiezen",
      "Boeken"
    ],
    strategyTitle: "Overwogen strategische opties",
    strategies: [
      {
        title: "Bestaande site verbeteren",
        description: "Inhoud, ontwerp en gebruikersroutes verbeteren zonder het hele platform te vervangen."
      },
      {
        title: "Nieuwe webervaring",
        description: "Een nieuwe webomgeving ontwikkelen na controle van beschikbare integraties."
      },
      {
        title: "Brede vernieuwing",
        description: "Grotere technologische veranderingen alleen overwegen bij voldoende technische en operationele redenen."
      }
    ],
    deliverableTitle: "Het opgeleverde werk",
    deliverable: "Een gestructureerd rapport met bevindingen, geprioriteerde aanbevelingen, ontwikkelscenario’s en vervolgstappen ter ondersteuning van beslissingen.",
    limitsTitle: "Buiten de scope",
    limits: "Er was geen toegang tot analytics, werkelijke verkoopcijfers of broncode. Ook werden geen prestatietests, beveiligingsaudits of controles van besloten integraties uitgevoerd. Er worden geen gemeten conversie- of omzetverbeteringen geclaimd.",
    privacyTitle: "Vertrouwelijkheid",
    privacy: "De identiteit van de klant en het oorspronkelijke rapport blijven privé. Deze pagina geeft alleen een algemeen overzicht van de methode en aanbevelingen, met conceptuele illustraties."
  },
  es: {
    back: "Volver al portfolio",
    badge: "Auditoría web · UX/UI · CRO · Consultoría digital",
    subtitle: "Evaluación de la experiencia digital de una plataforma del sector hotelero, con propuestas para simplificar la navegación, mejorar la claridad comercial y optimizar el recorrido de reserva.",
    notice: "Caso de estudio anonimizado. Los esquemas son ilustrativos y no reproducen la web ni datos del cliente.",
    contextTitle: "El contexto",
    context: "El trabajo consistió en revisar una plataforma web de alojamiento desde la perspectiva del visitante y del negocio: cómo se presenta la oferta, cómo se comparan las opciones y cómo se llega al proceso de reserva.",
    scopeTitle: "Alcance de la evaluación",
    scope: "Revisión visual y funcional de páginas públicas en escritorio y móvil, incluyendo recorridos hacia un sistema de reservas de terceros. Se evaluaron elementos observables, no métricas internas ni la implementación técnica.",
    methodTitle: "Áreas analizadas",
    methods: [
      { title: "Experiencia de usuario", description: "Navegación, jerarquía visual, legibilidad y adaptación a móvil." },
      { title: "Presentación de la oferta", description: "Claridad de las características y facilidad para comparar alternativas." },
      { title: "Recorrido de conversión", description: "Visibilidad de acciones principales, pasos de reserva y continuidad entre interfaces." },
      { title: "Estrategia tecnológica", description: "Alternativas de mejora y dependencias que deben validarse antes de una renovación." },
    ],
    findingsTitle: "Oportunidades de mejora",
    findingsIntro: "Selección de recomendaciones expresadas de forma general para proteger la identidad del cliente. Las prioridades son cualitativas.",
    findings: [
      { title: "Continuidad del proceso", description: "Revisar la conservación del contexto elegido al pasar a un servicio de reserva externo.", priority: "Alta" },
      { title: "Comparación de opciones", description: "Presentar atributos diferenciales mediante resúmenes claros y comparables.", priority: "Alta" },
      { title: "Acciones visibles en móvil", description: "Acercar los accesos principales al inicio de los recorridos y reducir pasos innecesarios.", priority: "Media-alta" },
      { title: "Claridad comercial", description: "Explicar condiciones de ofertas y servicios con información fácil de localizar.", priority: "Media" },
    ],
    journeyTitle: "Recorrido de usuario evaluado",
    journeyDescription: "Representación conceptual de las etapas revisadas; no es un flujo extraído de la plataforma original.",
    journey: ["Descubrimiento", "Comparación", "Selección", "Reserva"],
    strategyTitle: "Alternativas estratégicas evaluadas",
    strategies: [
      { title: "Optimizar lo existente", description: "Mejoras de contenido, diseño y recorridos sin reemplazar toda la plataforma." },
      { title: "Nueva experiencia web", description: "Desarrollo de una nueva capa web sujeto a validar las integraciones disponibles." },
      { title: "Renovación integral", description: "Evaluación de una transformación más amplia solo si existen razones técnicas y operativas suficientes." },
    ],
    deliverableTitle: "El entregable",
    deliverable: "Un informe estructurado con observaciones, recomendaciones priorizadas, escenarios de evolución y próximos pasos para apoyar la toma de decisiones.",
    limitsTitle: "Qué no se evaluó",
    limits: "El trabajo no incluyó acceso a analítica, ventas reales, código fuente, pruebas de rendimiento, auditoría de seguridad ni validación de integraciones privadas. No se atribuyen mejoras de conversión ni resultados comerciales medidos.",
    privacyTitle: "Confidencialidad",
    privacy: "La identidad del cliente y el documento original se mantienen privados. Esta página presenta únicamente una descripción general del método y de los tipos de recomendaciones, con gráficos conceptuales.",
  },
  en: {
    back: "Back to portfolio",
    badge: "Web audit · UX/UI · CRO · Digital consulting",
    subtitle: "Review of a hospitality platform's digital experience, with recommendations to simplify navigation, improve commercial clarity and refine the booking journey.",
    notice: "Anonymised case study. Diagrams are illustrative and do not reproduce the client's website or data.",
    contextTitle: "Context",
    context: "The assignment reviewed an accommodation website from the visitor's and business's perspectives: how its offering is presented, how options can be compared and how visitors reach the booking process.",
    scopeTitle: "Scope of the review",
    scope: "Visual and functional review of public pages on desktop and mobile, including journeys to a third-party booking service. The review covered observable behaviour, not internal metrics or technical implementation.",
    methodTitle: "Areas reviewed",
    methods: [
      { title: "User experience", description: "Navigation, visual hierarchy, readability and mobile adaptation." },
      { title: "Offer presentation", description: "Clarity of features and ease of comparing alternatives." },
      { title: "Conversion journey", description: "Visibility of primary actions, booking steps and continuity between interfaces." },
      { title: "Technology strategy", description: "Improvement options and dependencies to validate before rebuilding." },
    ],
    findingsTitle: "Improvement opportunities",
    findingsIntro: "Generalised recommendations that protect the client's identity. Priorities are qualitative.",
    findings: [
      { title: "Journey continuity", description: "Review whether the selected context is preserved when moving to an external booking service.", priority: "High" },
      { title: "Comparing options", description: "Present distinguishing features in clear, comparable summaries.", priority: "High" },
      { title: "Mobile calls to action", description: "Surface primary actions earlier and reduce unnecessary steps.", priority: "Medium-high" },
      { title: "Commercial clarity", description: "Make conditions of offers and services easier to find and understand.", priority: "Medium" },
    ],
    journeyTitle: "User journey reviewed",
    journeyDescription: "Conceptual representation of the stages assessed, not an extract from the original platform.",
    journey: ["Discover", "Compare", "Select", "Book"],
    strategyTitle: "Strategic alternatives considered",
    strategies: [
      { title: "Improve the existing site", description: "Content, design and journey improvements without replacing the entire platform." },
      { title: "New web experience", description: "A new web layer, subject to validating available integrations." },
      { title: "Broader transformation", description: "Evaluate wider technology changes only when technical and operational reasons justify them." },
    ],
    deliverableTitle: "Deliverable",
    deliverable: "A structured report with observations, prioritised recommendations, possible evolution scenarios and next steps to support decision-making.",
    limitsTitle: "Outside the scope",
    limits: "The work did not include analytics access, actual sales data, source-code review, performance testing, security auditing or verification of private integrations. No measured conversion or commercial outcomes are claimed.",
    privacyTitle: "Confidentiality",
    privacy: "The client's identity and original report remain private. This page shares only a general overview of the method and types of recommendations, using conceptual visuals.",
  },
};

const headings = {
  es: { title: "Auditoría UX/UI y estrategia digital", motto: "Observar. Priorizar. Mejorar." },
  en: { title: "UX/UI Audit & Digital Strategy", motto: "Observe. Prioritise. Improve." },
  ca: { title: "Auditoria UX/UI i estratègia digital", motto: "Observar. Prioritzar. Millorar." },
  it: { title: "Audit UX/UI e strategia digitale", motto: "Osservare. Dare priorità. Migliorare." },
  nl: { title: "UX/UI-audit en digitale strategie", motto: "Observeren. Prioriteren. Verbeteren." },
} as const;

const methodIcons = [MonitorSmartphone, Layers3, MousePointerClick, ClipboardCheck];

export default function WebAudit({ locale }: Props) {
  const t = locale in copy ? copy[locale as keyof typeof copy] : copy.en;
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <Link href={`/${locale}/#proyectos`} className="mb-12 inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white">
          <ArrowLeft size={16} />{t.back}
        </Link>

        <header className="mb-14">
          <span className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60">{t.badge}</span>
          <h1 className="mb-6 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">{headings[locale as keyof typeof headings]?.title ?? headings.en.title}</h1>
          <p className="max-w-3xl text-xl leading-relaxed text-white/60 md:text-2xl">{t.subtitle}</p>
        </header>

        <section className="relative mb-10 overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 p-8 md:p-14">
          <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-sky-500/10 blur-[100px]" />
          <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-sky-200/60">UX / CRO / Strategy</p>
              <p className="max-w-xl text-2xl font-semibold leading-snug md:text-4xl">{headings[locale as keyof typeof headings]?.motto ?? headings.en.motto}</p>
            </div>
            <div className="flex items-center gap-3 text-sky-200/70"><MonitorSmartphone size={42} strokeWidth={1.3} /><ArrowRight size={22} /><ClipboardCheck size={42} strokeWidth={1.3} /></div>
          </div>
        </section>
        <p className="mb-24 flex items-start gap-3 text-sm text-white/40"><ShieldCheck size={18} className="mt-0.5 shrink-0" />{t.notice}</p>

        <section className="mb-24 grid gap-8 md:grid-cols-2">
          {[{ title: t.contextTitle, body: t.context }, { title: t.scopeTitle, body: t.scope }].map((item) => (
            <article key={item.title} className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-10">
              <h2 className="mb-5 text-2xl font-semibold">{item.title}</h2>
              <p className="leading-relaxed text-white/60">{item.body}</p>
            </article>
          ))}
        </section>

        <section className="mb-24">
          <h2 className="mb-10 text-3xl font-bold md:text-4xl">{t.methodTitle}</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {t.methods.map((item, index) => {
              const Icon = methodIcons[index];
              return (
                <article key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
                  <Icon size={28} className="mb-6 text-sky-200/70" />
                  <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
                  <p className="leading-relaxed text-white/55">{item.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mb-24">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">{t.findingsTitle}</h2>
          <p className="mb-9 max-w-3xl leading-relaxed text-white/55">{t.findingsIntro}</p>
          <div className="space-y-4">
            {t.findings.map((item, index) => (
              <article key={item.title} className="grid gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:grid-cols-[3rem_1fr_auto] md:items-center md:p-8">
                <span className="text-sm text-white/30">0{index + 1}</span>
                <div><h3 className="mb-2 text-lg font-semibold">{item.title}</h3><p className="text-sm leading-relaxed text-white/55">{item.description}</p></div>
                <span className="w-fit rounded-full border border-sky-300/20 bg-sky-300/5 px-3 py-1.5 text-xs text-sky-100/70">{item.priority}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-24 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-12">
          <div className="mb-5 flex items-center gap-3"><Route size={26} className="text-sky-200/70" /><h2 className="text-2xl font-bold md:text-3xl">{t.journeyTitle}</h2></div>
          <p className="mb-9 text-sm text-white/50">{t.journeyDescription}</p>
          <div className="grid gap-3 md:grid-cols-4">
            {t.journey.map((stage, index) => (
              <div key={stage} className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-black px-5 py-6">
                <div><span className="mb-2 block text-xs text-white/30">0{index + 1}</span><span className="font-medium">{stage}</span></div>
                {index < t.journey.length - 1 && <ArrowRight size={18} className="shrink-0 text-sky-200/40" />}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <h2 className="mb-10 text-3xl font-bold md:text-4xl">{t.strategyTitle}</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {t.strategies.map((item, index) => (
              <article key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
                <span className="mb-7 block text-sm text-sky-200/60">0{index + 1}</span>
                <h3 className="mb-4 text-xl font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-white/55">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-24 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-12">
          <div className="mb-5 flex items-center gap-3"><CheckCircle2 size={26} className="text-sky-200/70" /><h2 className="text-2xl font-bold">{t.deliverableTitle}</h2></div>
          <p className="max-w-3xl leading-relaxed text-white/60">{t.deliverable}</p>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          {[{ title: t.limitsTitle, body: t.limits }, { title: t.privacyTitle, body: t.privacy }].map((item) => (
            <article key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <h2 className="mb-4 text-xl font-semibold">{item.title}</h2>
              <p className="text-sm leading-relaxed text-white/50">{item.body}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
