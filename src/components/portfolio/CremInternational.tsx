import Link from "next/link";
import {
  ArrowLeft, CheckCircle2, Coffee, Code2, Cpu, Download,
  FileArchive, Settings2, Workflow,
} from "lucide-react";

type LocaleContent = {
  back: string; category: string; subtitle: string;
  contextTitle: string; context: string;
  challengeTitle: string; challenge: string;
  solutionTitle: string; solution: string;
  flowTitle: string; flowDescription: string;
  flowItems: { title: string; description: string }[];
  note: string; contributionTitle: string; contributionDescription: string;
  contributions: string[]; resultTitle: string; result: string;
  technologyTitle: string; confidentialityTitle: string; confidentiality: string;

};

const content: Record<"es" | "en" | "ca" | "it" | "nl", LocaleContent> = {
  ca: {
    back: "Tornar al portafolis",
    category: "Programari industrial · Desenvolupament Full Stack",
    subtitle: "Desenvolupament d’una eina web interna per configurar màquines de cafè professionals i generar fitxers PMF.",
    contextTitle: "Programari per a un entorn industrial",
    context: "Durant vuit mesos al departament de programari de CREM International, primer en pràctiques i després com a enginyer de programari, vaig treballar en solucions per configurar màquines de cafè professionals. Un dels projectes principals va ser una eina web per crear i modificar fitxers PMF.",
    challengeTitle: "El repte",
    challenge: "Les màquines tenen nombrosos paràmetres que afecten el funcionament, les receptes i la interfície de pantalla. Calia facilitar-ne l’edició visual i estructurada sense modificar els fitxers manualment.",
    solutionTitle: "Configuració des del navegador",
    solution: "Vaig desenvolupar una aplicació web Full Stack per editar paràmetres de components, configurar receptes, personalitzar elements de pantalla i gestionar relacions entre paràmetres. L’eina generava un fitxer PMF descarregable.",
    flowTitle: "Flux de treball",
    flowDescription: "Esquema conceptual del procés. No reprodueix pantalles ni documentació interna.",
    flowItems: [
      {
        title: "Configuració",
        description: "Edició de paràmetres, receptes i elements d’interfície."
      },
      {
        title: "Generació PMF",
        description: "Creació del fitxer segons la configuració definida."
      },
      {
        title: "Descàrrega",
        description: "Exportació del fitxer PMF per a l’ús posterior."
      }
    ],
    note: "Una altra eina independent transferia els fitxers PMF a les màquines; aquesta aplicació no feia aquest pas.",
    contributionTitle: "La meva aportació",
    contributionDescription: "Vaig participar en el desenvolupament de l’aplicació web i vaig preparar-ne l’entorn Docker. Per separat, també vaig treballar amb Python en programari encastat de comunicació amb perifèrics.",
    contributions: [
      "Desenvolupament Full Stack de l’aplicació web",
      "Edició visual de paràmetres de maquinària",
      "Configuració de receptes i elements de pantalla",
      "Gestió de relacions entre components",
      "Generació i descàrrega de fitxers PMF",
      "Entorn de desenvolupament amb Docker",
      "Treball addicional amb Python en sistemes encastats",
      "Col·laboració amb el departament de programari"
    ],
    resultTitle: "El resultat",
    result: "Una eina interna que reunia l’edició de configuracions complexes en una interfície web i permetia generar fitxers PMF descarregables, desenvolupada en un entorn professional de programari industrial.",
    technologyTitle: "Tecnologies utilitzades",
    confidentialityTitle: "Informació del projecte",
    confidentiality: "Aquest cas descriu la meva feina a nivell general. Les representacions són conceptuals; no es publiquen captures de l’aplicació original, codi font ni documentació interna."
  },
  it: {
    back: "Torna al portfolio",
    category: "Software industriale · Sviluppo Full Stack",
    subtitle: "Sviluppo di uno strumento web interno per configurare macchine da caffè professionali e generare file PMF.",
    contextTitle: "Software per un ambiente industriale",
    context: "Durante otto mesi nel reparto software di CREM International, prima come tirocinante e poi come ingegnere software, ho lavorato a soluzioni per la configurazione di macchine da caffè professionali. Un progetto principale era uno strumento web per creare e modificare file PMF.",
    challengeTitle: "La sfida",
    challenge: "Le macchine hanno numerosi parametri che influenzano funzionamento, ricette e interfaccia dello schermo. Occorreva renderli modificabili attraverso uno strumento visivo strutturato, senza intervenire manualmente sui file.",
    solutionTitle: "Configurazione dal browser",
    solution: "Ho sviluppato un’applicazione web Full Stack per modificare parametri dei componenti, configurare ricette, personalizzare elementi dello schermo e gestire relazioni tra impostazioni. Lo strumento generava un file PMF scaricabile.",
    flowTitle: "Flusso di lavoro",
    flowDescription: "Schema concettuale del processo. Non riproduce schermate né documenti interni.",
    flowItems: [
      {
        title: "Configurazione",
        description: "Modifica di parametri, ricette ed elementi dell’interfaccia."
      },
      {
        title: "Generazione PMF",
        description: "Creazione del file dalle impostazioni definite."
      },
      {
        title: "Download",
        description: "Esportazione del file PMF per l’utilizzo successivo."
      }
    ],
    note: "Il trasferimento dei file PMF alle macchine era gestito da uno strumento separato; questa applicazione non eseguiva tale operazione.",
    contributionTitle: "Il mio contributo",
    contributionDescription: "Ho contribuito allo sviluppo dell’applicazione web e preparato l’ambiente Docker. Separatamente ho lavorato anche con Python su software embedded per la comunicazione con periferiche.",
    contributions: [
      "Sviluppo Full Stack dell’applicazione web",
      "Modifica visiva dei parametri delle macchine",
      "Configurazione di ricette ed elementi dello schermo",
      "Gestione delle relazioni tra componenti",
      "Generazione e download dei file PMF",
      "Ambiente di sviluppo Docker",
      "Ulteriore lavoro su software embedded con Python",
      "Collaborazione con il reparto software"
    ],
    resultTitle: "Il risultato",
    result: "Uno strumento interno che riuniva la modifica di configurazioni complesse in un’interfaccia web e consentiva di generare file PMF scaricabili, sviluppato in un contesto professionale di software industriale.",
    technologyTitle: "Tecnologie utilizzate",
    confidentialityTitle: "Informazioni sul progetto",
    confidentiality: "Questo caso descrive il mio lavoro a livello generale. Le immagini sono concettuali: non vengono pubblicati screenshot originali, codice sorgente o documentazione interna."
  },
  nl: {
    back: "Terug naar portfolio",
    category: "Industriële software · Full-stackontwikkeling",
    subtitle: "Ontwikkeling van een interne webtool voor het configureren van professionele koffiemachines en genereren van PMF-bestanden.",
    contextTitle: "Software in een industriële omgeving",
    context: "Tijdens acht maanden op de softwareafdeling van CREM International, eerst als stagiair en daarna als software-engineer, werkte ik aan oplossingen voor de configuratie van professionele koffiemachines. Een belangrijk project was een webtool om PMF-configuratiebestanden te maken en aan te passen.",
    challengeTitle: "De uitdaging",
    challenge: "De machines hebben veel parameters die de werking, recepten en scherminterface beïnvloeden. Die instellingen moesten via een gestructureerde visuele tool te bewerken zijn, zonder bestanden handmatig aan te passen.",
    solutionTitle: "Configureren via de browser",
    solution: "Ik ontwikkelde een full-stackwebapplicatie voor het aanpassen van machineparameters, instellen van recepten, personaliseren van schermelementen en beheren van relaties tussen instellingen. De tool genereerde een downloadbaar PMF-bestand.",
    flowTitle: "Werkproces",
    flowDescription: "Conceptueel processchema. Het toont geen interne schermen of documentatie.",
    flowItems: [
      {
        title: "Configuratie",
        description: "Parameters, recepten en interface-elementen bewerken."
      },
      {
        title: "PMF genereren",
        description: "Een bestand opbouwen uit de gekozen instellingen."
      },
      {
        title: "Download",
        description: "Het PMF-bestand exporteren voor later gebruik."
      }
    ],
    note: "Een afzonderlijke tool verzorgde de overdracht van PMF-bestanden naar de machines; deze applicatie deed dat niet.",
    contributionTitle: "Mijn bijdrage",
    contributionDescription: "Ik werkte aan de webapplicatie en richtte de Docker-omgeving in. Daarnaast werkte ik afzonderlijk met Python aan embedded software voor communicatie met randapparatuur.",
    contributions: [
      "Full-stackontwikkeling van de webapplicatie",
      "Visueel bewerken van machineparameters",
      "Configuratie van recepten en schermelementen",
      "Beheer van relaties tussen componenten",
      "PMF-bestanden genereren en downloaden",
      "Docker-ontwikkelomgeving",
      "Aanvullend embedded Python-werk",
      "Samenwerking binnen de softwareafdeling"
    ],
    resultTitle: "Het resultaat",
    result: "Een interne tool die complexe configuraties via een webinterface bewerkbaar maakte en downloadbare PMF-bestanden genereerde, ontwikkeld in een professionele industriële softwareomgeving.",
    technologyTitle: "Gebruikte technologieën",
    confidentialityTitle: "Over dit project",
    confidentiality: "Deze casestudy beschrijft mijn werk op hoofdlijnen. De beelden zijn conceptueel; originele schermafbeeldingen, broncode en interne documentatie worden niet gepubliceerd."
  },
  es: {
    back: "Volver al portfolio",
    category: "Software industrial · Desarrollo Full Stack",
    subtitle: "Desarrollo de una herramienta web interna para configurar máquinas de café profesionales y generar archivos PMF.",
    contextTitle: "Software para un entorno industrial",
    context: "Durante mis ocho meses en el departamento de software de CREM International, primero en prácticas y después como ingeniero de software, trabajé en soluciones relacionadas con la configuración de máquinas de café profesionales. Uno de los proyectos principales fue una herramienta web para crear y modificar archivos de configuración PMF.",
    challengeTitle: "El desafío",
    challenge: "Las máquinas disponen de numerosos parámetros que afectan a su funcionamiento, sus recetas y la interfaz de pantalla. Era necesario facilitar su edición desde un entorno visual y estructurado, sin modificar manualmente los archivos de configuración.",
    solutionTitle: "Configuración desde el navegador",
    solution: "Desarrollé una aplicación web Full Stack que permitía editar parámetros de los componentes de las máquinas, configurar recetas, personalizar elementos de pantalla y gestionar relaciones entre parámetros. A partir de esos valores, la herramienta generaba un archivo PMF descargable.",
    flowTitle: "Flujo de trabajo",
    flowDescription: "Esquema conceptual del proceso. No reproduce pantallas ni documentación interna.",
    flowItems: [
      { title: "Configuración", description: "Edición de parámetros, recetas y elementos de interfaz." },
      { title: "Generación PMF", description: "Creación del archivo a partir de la configuración definida." },
      { title: "Descarga", description: "Exportación del archivo PMF para su uso posterior." },
    ],
    note: "La transferencia del PMF a las máquinas se realizaba mediante otra herramienta, independiente de esta aplicación.",
    contributionTitle: "Mi aportación",
    contributionDescription: "Participé en el desarrollo de la herramienta web y preparé su entorno con Docker. Por separado, también trabajé con Python en software embebido relacionado con la comunicación con periféricos.",
    contributions: [
      "Desarrollo Full Stack de la herramienta web",
      "Edición visual de parámetros de maquinaria",
      "Configuración de recetas y elementos de pantalla",
      "Gestión de relaciones entre componentes",
      "Generación y descarga de archivos PMF",
      "Entorno de desarrollo con Docker",
      "Trabajo adicional en software embebido con Python",
      "Colaboración con el departamento de software",
    ],
    resultTitle: "El resultado",
    result: "Una herramienta interna que reunía la edición de configuraciones complejas en una interfaz web y permitía generar archivos PMF descargables. El trabajo se desarrolló en un entorno profesional de software industrial.",
    technologyTitle: "Tecnologías utilizadas",
    confidentialityTitle: "Información del proyecto",
    confidentiality: "Este caso de estudio describe mi trabajo a nivel general. Las representaciones son conceptuales; no se publican capturas de la aplicación original, código fuente ni documentación interna.",
  },
  en: {
    back: "Back to portfolio",
    category: "Industrial Software · Full Stack Development",
    subtitle: "An internal web application for configuring professional coffee machines and generating PMF files.",
    contextTitle: "Software for an industrial environment",
    context: "During eight months in CREM International's software department, first as an intern and then as a software engineer, I worked on solutions related to professional coffee machine configuration. One major project was a web tool for creating and modifying PMF configuration files.",
    challengeTitle: "The challenge",
    challenge: "The machines contain many parameters affecting their behaviour, recipes and screen interface. The goal was to make those settings editable through a structured visual tool rather than manually changing configuration files.",
    solutionTitle: "Browser-based configuration",
    solution: "I developed a Full Stack web application for editing machine component parameters, configuring recipes, customising screen elements and managing relationships between settings. The tool generated a downloadable PMF file from the chosen configuration.",
    flowTitle: "Workflow",
    flowDescription: "Conceptual process diagram. It does not reproduce internal screens or documentation.",
    flowItems: [
      { title: "Configuration", description: "Edit parameters, recipes and interface elements." },
      { title: "PMF generation", description: "Build the file from the selected settings." },
      { title: "Download", description: "Export the PMF file for subsequent use." },
    ],
    note: "A separate tool handled transferring PMF files to the machines; this application did not perform that step.",
    contributionTitle: "My contribution",
    contributionDescription: "I worked on the web application and set up its Docker environment. Separately, I also worked with Python on embedded software related to peripheral communication.",
    contributions: [
      "Full Stack web application development",
      "Visual editing of machine parameters",
      "Recipe and screen element configuration",
      "Management of component relationships",
      "PMF file generation and download",
      "Docker development environment",
      "Additional embedded Python software work",
      "Collaboration within the software department",
    ],
    resultTitle: "The result",
    result: "An internal tool bringing complex configuration editing into a web interface and enabling downloadable PMF file generation, developed in a professional industrial software environment.",
    technologyTitle: "Technologies",
    confidentialityTitle: "About this project",
    confidentiality: "This case study describes my work at a general level. Visuals are conceptual; no original application screenshots, source code or internal documentation are published.",
  },
};

const technologies = ["JavaScript", "Node.js", "CSS", "Docker", "Python (embedded work)"];
const flowIcons = [Settings2, FileArchive, Download];

export default function CremInternational({ locale }: { locale: string }) {
  const t = locale in content ? content[locale as keyof typeof content] : content.en;

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <Link href={`/${locale}/#proyectos`} className="mb-12 inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white">
          <ArrowLeft size={16} />{t.back}
        </Link>

        <header className="mb-16">
          <span className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60">{t.category}</span>
          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">CREM International</h1>
          <p className="max-w-3xl text-xl leading-relaxed text-white/60 md:text-2xl">{t.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {technologies.map((tech) => <span key={tech} className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/50">{tech}</span>)}
          </div>
        </header>

        <section className="relative mb-24 flex min-h-80 items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 p-10 md:min-h-[420px]">
          <div className="absolute h-80 w-80 rounded-full bg-amber-500/10 blur-[120px]" />
          <div className="relative flex flex-col items-center gap-8 text-center">
            <div className="flex items-center gap-5">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6"><Coffee size={48} strokeWidth={1.3} className="text-amber-200/80" /></div>
              <Workflow size={28} className="text-white/30" />
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6"><Code2 size={48} strokeWidth={1.3} className="text-white/70" /></div>
            </div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-white/40">Industrial Software Development</p>
          </div>
        </section>

        <section className="mb-24 grid gap-8 md:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <Cpu className="mb-6 text-white/60" size={28} /><h2 className="mb-5 text-2xl font-semibold">{t.contextTitle}</h2>
            <p className="leading-relaxed text-white/60">{t.context}</p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <Settings2 className="mb-6 text-white/60" size={28} /><h2 className="mb-5 text-2xl font-semibold">{t.challengeTitle}</h2>
            <p className="leading-relaxed text-white/60">{t.challenge}</p>
          </div>
        </section>

        <section className="mb-24">
          <div className="mb-10 max-w-3xl"><h2 className="mb-5 text-3xl font-bold md:text-4xl">{t.solutionTitle}</h2><p className="leading-relaxed text-white/60">{t.solution}</p></div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-12">
            <h3 className="mb-4 text-2xl font-semibold">{t.flowTitle}</h3>
            <p className="mb-10 max-w-2xl text-white/50">{t.flowDescription}</p>
            <div className="grid gap-6 md:grid-cols-3">
              {t.flowItems.map((item, index) => {
                const Icon = flowIcons[index];
                return <div key={item.title} className="rounded-2xl border border-white/10 bg-black p-6">
                  <div className="mb-6 flex items-center justify-between"><Icon size={28} className="text-amber-200/70" /><span className="text-sm text-white/30">0{index + 1}</span></div>
                  <h4 className="mb-3 text-lg font-semibold">{item.title}</h4><p className="text-sm leading-relaxed text-white/50">{item.description}</p>
                </div>;
              })}
            </div>
            <p className="mt-8 border-t border-white/10 pt-6 text-sm leading-relaxed text-white/40">{t.note}</p>
          </div>
        </section>

        <section className="mb-24 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-12">
          <h2 className="mb-6 text-3xl font-bold">{t.contributionTitle}</h2>
          <p className="mb-8 max-w-3xl leading-relaxed text-white/60">{t.contributionDescription}</p>
          <div className="grid gap-4 md:grid-cols-2">{t.contributions.map((item) => <div key={item} className="flex items-start gap-3 text-white/70"><CheckCircle2 size={18} className="mt-1 shrink-0 text-amber-300" /><span>{item}</span></div>)}</div>
        </section>

        <section className="mb-24"><h2 className="mb-5 text-3xl font-bold">{t.resultTitle}</h2><p className="max-w-3xl leading-relaxed text-white/60">{t.result}</p></section>
        <section className="mb-24 border-t border-white/10 pt-12"><h2 className="mb-6 text-xl font-semibold">{t.technologyTitle}</h2><div className="flex flex-wrap gap-3">{technologies.map((tech) => <span key={tech} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/60">{tech}</span>)}</div></section>
        <section className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-10"><h2 className="mb-4 text-xl font-semibold">{t.confidentialityTitle}</h2><p className="max-w-3xl text-sm leading-relaxed text-white/50">{t.confidentiality}</p></section>
      </div>
    </main>
  );
}
