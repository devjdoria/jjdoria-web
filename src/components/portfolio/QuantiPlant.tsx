import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Camera,
  CheckCircle2,
  Clock3,
  FlaskConical,
  FolderOpen,
  Lightbulb,
  Server,
} from "lucide-react";

type Props = { locale: string };

type Translation = {
  back: string;
  category: string;
  subtitle: string;
  contextTitle: string;
  context: string;
  challengeTitle: string;
  challenge: string;
  solutionTitle: string;
  solution: string;
  diagramTitle: string;
  diagramNote: string;
  stages: { title: string; description: string }[];
  featuresTitle: string;
  features: string[];
  hardwareTitle: string;
  hardware: string;
  softwareTitle: string;
  software: string;
  resultsTitle: string;
  results: string;
  techTitle: string;
  galleryTitle: string;
  galleryDescription: string;
  noteTitle: string;
  note: string;

};

const translations: Record<"es" | "en" | "ca" | "it" | "nl", Translation> = {
  ca: {
    back: "Tornar al portafolis",
    category: "Projecte universitari · Sistemes encastats · Full Stack",
    subtitle: "Sistema de fotografia automatitzada per seguir experiments amb llavors i plàntules, controlat des d’una interfície web local.",
    contextTitle: "Fotografia automatitzada per a la recerca",
    context: "QuantiPlant va ser el meu Treball de Fi de Grau: un prototip amb Raspberry Pi 5, càmera HQ i il·luminació LED per documentar experiments amb plaques de Petri i plàntules.",
    challengeTitle: "El repte",
    challenge: "Facilitar l’obtenció d’imatges comparables al llarg del temps, reduir la intervenció manual i simplificar l’organització i descàrrega de les captures.",
    solutionTitle: "Una solució de maquinari i programari",
    solution: "Vaig dissenyar i integrar el sistema de captura i desenvolupar una aplicació web accessible des de la xarxa local. Permet fer fotos manuals, programar captures periòdiques, ajustar la càmera i consultar els resultats.",
    diagramTitle: "Funcionament del sistema",
    diagramNote: "Esquema conceptual del projecte; no és una captura real de la interfície.",
    stages: [
      {
        title: "Configurar",
        description: "Triar els ajustos de càmera i programar les captures."
      },
      {
        title: "Capturar",
        description: "Activar la il·luminació i fer la fotografia."
      },
      {
        title: "Consultar",
        description: "Organitzar imatges i exportar-les en ZIP."
      }
    ],
    featuresTitle: "Funcionalitats desenvolupades",
    features: [
      "Captura manual i programada de fotografies",
      "Control automàtic de la il·luminació LED",
      "Ajustos de càmera des de la interfície web",
      "Organització d’imatges en galeries i carpetes",
      "Descàrrega de fotos i exportació ZIP",
      "Accés des de la xarxa local",
      "Execució amb serveis i contenidors",
      "Proves automatitzades del programari"
    ],
    hardwareTitle: "Maquinari i muntatge",
    hardware: "Raspberry Pi 5, càmera HQ, il·luminació LED i suport dissenyat i imprès en 3D. El muntatge mantenia una posició de captura consistent.",
    softwareTitle: "Aplicació i automatització",
    software: "El backend es va desenvolupar amb Python i Flask. La captura utilitzava eines de càmera de Raspberry Pi, amb Bash, Docker i systemd per a l’entorn d’execució.",
    resultsTitle: "Proves i resultats",
    results: "El prototip es va fer servir per documentar experiments amb captures periòdiques, inclosa una sèrie cada 12 hores. Les proves amb pytest van assolir una cobertura del 72 %.",
    techTitle: "Tecnologies utilitzades",
    galleryTitle: "Resultats de l’experiment",
    galleryDescription: "Imatge real obtinguda durant les proves del prototip.",
    noteTitle: "Abast del projecte",
    note: "QuantiPlant és un prototip acadèmic de captura i organització d’imatges. No inclou segmentació amb IA, previsualització en directe ni autenticació d’usuaris. El diagrama és conceptual; les fotografies i la captura de la interfície són reals."
  },
  it: {
    back: "Torna al portfolio",
    category: "Progetto universitario · Sistemi embedded · Full Stack",
    subtitle: "Sistema di fotografia automatizzata per monitorare esperimenti su semi e piantine, controllato tramite interfaccia web locale.",
    contextTitle: "Fotografia automatizzata per la ricerca",
    context: "QuantiPlant è stato il mio progetto di laurea: un prototipo che combina Raspberry Pi 5, fotocamera HQ e illuminazione LED per documentare esperimenti con piastre di Petri e piantine.",
    challengeTitle: "La sfida",
    challenge: "Raccogliere immagini confrontabili nel tempo, ridurre gli interventi manuali e semplificare organizzazione e download degli scatti.",
    solutionTitle: "Hardware e software integrati",
    solution: "Ho progettato e integrato il sistema di acquisizione e sviluppato un’applicazione web accessibile dalla rete locale. Consente scatti manuali e programmati, regolazione della fotocamera e consultazione dei risultati.",
    diagramTitle: "Funzionamento del sistema",
    diagramNote: "Schema concettuale del progetto, non uno screenshot dell’interfaccia originale.",
    stages: [
      {
        title: "Configurare",
        description: "Scegliere le impostazioni e programmare gli scatti."
      },
      {
        title: "Acquisire",
        description: "Attivare la luce e scattare la fotografia."
      },
      {
        title: "Consultare",
        description: "Organizzare le immagini ed esportarle in ZIP."
      }
    ],
    featuresTitle: "Funzionalità sviluppate",
    features: [
      "Fotografia manuale e programmata",
      "Controllo automatico dell’illuminazione LED",
      "Impostazioni della fotocamera via web",
      "Gallerie e organizzazione in cartelle",
      "Download delle foto ed esportazione ZIP",
      "Accesso tramite rete locale",
      "Esecuzione con servizi e container",
      "Test automatizzati del software"
    ],
    hardwareTitle: "Hardware e assemblaggio",
    hardware: "Raspberry Pi 5, fotocamera HQ, illuminazione LED e supporto progettato e stampato in 3D. Il montaggio mantiene costante la posizione di acquisizione.",
    softwareTitle: "Applicazione e automazione",
    software: "Il backend è stato sviluppato con Python e Flask. Per acquisire le immagini ho usato strumenti della fotocamera Raspberry Pi; Bash, Docker e systemd supportavano l’ambiente di esecuzione.",
    resultsTitle: "Test e risultati",
    results: "Il prototipo ha documentato esperimenti con fotografie periodiche, inclusa una serie di scatti ogni 12 ore. La suite pytest ha raggiunto il 72% di copertura.",
    techTitle: "Tecnologie utilizzate",
    galleryTitle: "Risultati dell’esperimento",
    galleryDescription: "Immagine reale ottenuta durante i test del prototipo.",
    noteTitle: "Ambito del progetto",
    note: "QuantiPlant è un prototipo accademico per acquisire e organizzare immagini. Non include segmentazione tramite IA, anteprima dal vivo o autenticazione utenti. Lo schema è concettuale; fotografie e screenshot dell’interfaccia provengono dal progetto reale."
  },
  nl: {
    back: "Terug naar portfolio",
    category: "Afstudeerproject · Embedded systemen · Full stack",
    subtitle: "Een geautomatiseerd fotografiesysteem om experimenten met zaden en zaailingen te volgen, bediend via een lokale webinterface.",
    contextTitle: "Geautomatiseerde fotografie voor onderzoek",
    context: "QuantiPlant was mijn afstudeerproject: een prototype met Raspberry Pi 5, HQ-camera en ledverlichting om experimenten met petrischalen en zaailingen vast te leggen.",
    challengeTitle: "De uitdaging",
    challenge: "Door de tijd heen vergelijkbare beelden vastleggen, handmatig werk beperken en foto’s eenvoudig organiseren en downloaden.",
    solutionTitle: "Hardware en software samen",
    solution: "Ik ontwierp en integreerde de opnameopstelling en ontwikkelde een webapplicatie voor het lokale netwerk. Gebruikers kunnen handmatig fotograferen, periodieke opnamen plannen, camera-instellingen aanpassen en resultaten bekijken.",
    diagramTitle: "Werking van het systeem",
    diagramNote: "Conceptueel schema van het project, geen schermafbeelding van de oorspronkelijke interface.",
    stages: [
      {
        title: "Instellen",
        description: "Camera-instellingen kiezen en opnamen plannen."
      },
      {
        title: "Opnemen",
        description: "Verlichting inschakelen en een foto maken."
      },
      {
        title: "Bekijken",
        description: "Afbeeldingen ordenen en als ZIP exporteren."
      }
    ],
    featuresTitle: "Ontwikkelde functies",
    features: [
      "Handmatige en geplande foto-opnamen",
      "Automatische aansturing van ledverlichting",
      "Camera-instellingen via de webinterface",
      "Afbeeldingen in galerijen en mappen ordenen",
      "Foto’s downloaden en ZIP-export",
      "Toegang via het lokale netwerk",
      "Uitvoering met services en containers",
      "Geautomatiseerde softwaretests"
    ],
    hardwareTitle: "Hardware en opstelling",
    hardware: "Raspberry Pi 5, HQ-camera, ledverlichting en een zelfontworpen 3D-geprinte houder. De opstelling hield de opnamepositie consistent.",
    softwareTitle: "Applicatie en automatisering",
    software: "De backend is ontwikkeld met Python en Flask. Voor de opnamen werden Raspberry Pi-cameratools gebruikt; Bash, Docker en systemd ondersteunden de runtimeomgeving.",
    resultsTitle: "Tests en resultaten",
    results: "Het prototype legde experimenten vast met periodieke foto’s, waaronder een reeks om de 12 uur. De pytest-testsuite behaalde 72% codedekking.",
    techTitle: "Gebruikte technologieën",
    galleryTitle: "Experimentele resultaten",
    galleryDescription: "Echte foto gemaakt tijdens het testen van het prototype.",
    noteTitle: "Projectomvang",
    note: "QuantiPlant is een academisch prototype voor het vastleggen en organiseren van beelden. Het bevat geen AI-segmentatie, live cameravoorbeeld of gebruikersauthenticatie. Het processchema is conceptueel; de foto’s en schermafbeelding komen uit het echte project."
  },
  es: {
    back: "Volver al portfolio",
    category: "Proyecto universitario · Sistemas embebidos · Full Stack",
    subtitle:
      "Sistema de captura fotográfica automatizada para el seguimiento de experimentos con semillas y plántulas, controlado desde una interfaz web local.",
    contextTitle: "Fotografía automatizada para investigación",
    context:
      "QuantiPlant fue mi Trabajo de Fin de Grado: un prototipo que combina una Raspberry Pi 5, una cámara HQ y un sistema de iluminación LED para documentar experimentos con placas de Petri y plántulas.",
    challengeTitle: "El desafío",
    challenge:
      "Facilitar la obtención de imágenes comparables a lo largo del tiempo, reduciendo la intervención manual y ofreciendo una forma sencilla de organizar y descargar las capturas.",
    solutionTitle: "Una solución de hardware y software",
    solution:
      "Diseñé e integré el sistema de captura y desarrollé una aplicación web accesible desde la red local. La interfaz permite realizar fotografías manualmente, programar capturas periódicas, ajustar parámetros de cámara y consultar los resultados.",
    diagramTitle: "Funcionamiento del sistema",
    diagramNote:
      "Esquema conceptual del proyecto. No representa una captura real de su interfaz.",
    stages: [
      {
        title: "Configurar",
        description: "Elegir ajustes de cámara y programar la captura.",
      },
      {
        title: "Capturar",
        description: "Activar la iluminación y tomar la fotografía.",
      },
      {
        title: "Consultar",
        description: "Organizar imágenes y exportarlas en ZIP.",
      },
    ],
    featuresTitle: "Funcionalidades desarrolladas",
    features: [
      "Captura manual y programada de fotografías",
      "Control automático de la iluminación LED",
      "Ajustes de cámara desde una interfaz web",
      "Organización de imágenes en galerías y carpetas",
      "Descarga de fotografías y exportación ZIP",
      "Acceso a la aplicación desde la red local",
      "Ejecución del sistema mediante servicios y contenedores",
      "Pruebas automatizadas del software",
    ],
    hardwareTitle: "Hardware y montaje",
    hardware:
      "Raspberry Pi 5, cámara HQ, iluminación LED y soporte diseñado e impreso en 3D. El montaje se orientó a mantener una posición de captura consistente.",
    softwareTitle: "Aplicación y automatización",
    software:
      "El backend se desarrolló con Python y Flask. La captura utilizó herramientas de cámara de Raspberry Pi, y el entorno incluyó Bash, Docker y systemd para su funcionamiento.",
    resultsTitle: "Pruebas y resultados",
    results:
      "El prototipo se utilizó para documentar experimentos mediante capturas periódicas, incluyendo una serie de imágenes tomadas cada 12 horas. La batería de pruebas con pytest alcanzó una cobertura del 72 %.",
    techTitle: "Tecnologías utilizadas",
    galleryTitle: "Resultados del experimento",
    galleryDescription: "Imagen real obtenida durante las pruebas del prototipo.",
    noteTitle: "Alcance del proyecto",
    note:
      "QuantiPlant es un prototipo académico de captura y organización de imágenes. No incluye segmentación por inteligencia artificial, vista previa en directo ni autenticación de usuarios. El diagrama de funcionamiento es conceptual; las fotografías y la captura de la interfaz corresponden al proyecto real.",
  },
  en: {
    back: "Back to portfolio",
    category: "University project · Embedded systems · Full Stack",
    subtitle:
      "An automated photography system for monitoring seed and seedling experiments, controlled through a local web interface.",
    contextTitle: "Automated photography for research",
    context:
      "QuantiPlant was my final degree project: a prototype combining a Raspberry Pi 5, HQ camera and LED lighting to document experiments involving Petri dishes and seedlings.",
    challengeTitle: "The challenge",
    challenge:
      "Make it easier to collect consistent images over time, reduce manual intervention and provide a straightforward way to organise and download the photographs.",
    solutionTitle: "Hardware and software working together",
    solution:
      "I designed and integrated the capture setup and developed a web application accessible over the local network. Users can take photographs manually, schedule periodic captures, adjust camera settings and browse results.",
    diagramTitle: "System workflow",
    diagramNote:
      "Conceptual diagram of the project, not a screenshot of its original interface.",
    stages: [
      {
        title: "Configure",
        description: "Choose camera settings and schedule captures.",
      },
      {
        title: "Capture",
        description: "Activate the lighting and take the photograph.",
      },
      {
        title: "Review",
        description: "Organise images and export them as ZIP files.",
      },
    ],
    featuresTitle: "Features developed",
    features: [
      "Manual and scheduled photography",
      "Automatic LED lighting control",
      "Camera settings through a web interface",
      "Image galleries and folder organisation",
      "Photo downloads and ZIP export",
      "Access from the local network",
      "Execution using services and containers",
      "Automated software tests",
    ],
    hardwareTitle: "Hardware and assembly",
    hardware:
      "Raspberry Pi 5, HQ camera, LED lighting and a custom 3D-printed mount. The assembly was designed to keep the camera position consistent.",
    softwareTitle: "Application and automation",
    software:
      "The backend was developed with Python and Flask. Image capture used Raspberry Pi camera tools, while Bash, Docker and systemd supported the runtime environment.",
    resultsTitle: "Testing and results",
    results:
      "The prototype documented experiments with periodic photographs, including a series captured every 12 hours. The pytest test suite achieved 72% coverage.",
    techTitle: "Technologies",
    galleryTitle: "Experiment results",
    galleryDescription: "Real image captured during prototype testing.",
    noteTitle: "Project scope",
    note:
      "QuantiPlant is an academic prototype for capturing and organising images. It does not include AI image segmentation, a live camera preview or user authentication. The workflow diagram is conceptual; the photographs and interface screenshot are real project material.",
  },
};

const technologies = [
  "Python 3",
  "Flask",
  "Raspberry Pi 5",
  "Picamera2 / rpicam-still",
  "Docker",
  "Bash",
  "systemd",
  "pytest",
  "Git",
];

const stageIcons = [Clock3, Camera, FolderOpen];


function ProjectImage({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="group overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950">
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={1000}
        priority={priority}
        unoptimized
        sizes="(max-width: 768px) 100vw, 80vw"
        className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.02]"
      />
    </div>
  );
}

function BrowserPreview({ src, alt, label }: { src: string; alt: string; label: string }) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950">
      <div className="flex items-center gap-3 border-b border-white/10 bg-zinc-900 px-5 py-4">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
        </div>
        <span className="ml-3 truncate text-xs text-white/35">{label}</span>
      </div>
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={1000}
        unoptimized
        sizes="(max-width: 768px) 100vw, 80vw"
        className="h-auto w-full"
      />
    </div>
  );
}

export default function QuantiPlant({ locale }: Props) {
  const t = locale in translations ? translations[locale as keyof typeof translations] : translations.en;

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <Link
          href={`/${locale}/#proyectos`}
          className="mb-12 inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white"
        >
          <ArrowLeft size={16} />
          {t.back}
        </Link>

        <header className="mb-16">
          <span className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60">
            {t.category}
          </span>
          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
            QuantiPlant
          </h1>
          <p className="max-w-3xl text-xl leading-relaxed text-white/60 md:text-2xl">
            {t.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {technologies.slice(0, 5).map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/50"
              >
                {technology}
              </span>
            ))}
          </div>
        </header>

        {/* Fotografía real del prototipo */}
        <section className="mb-24">
          <ProjectImage
            src="/projects/quantiplant/hero.webp"
            alt="Prototipo físico de QuantiPlant con cámara, iluminación y Raspberry Pi"
            priority
          />
        </section>

        <section className="mb-24 grid gap-8 md:grid-cols-2">
          <article className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <FlaskConical className="mb-6 text-white/60" size={28} />
            <h2 className="mb-5 text-2xl font-semibold">{t.contextTitle}</h2>
            <p className="leading-relaxed text-white/60">{t.context}</p>
          </article>
          <article className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <Clock3 className="mb-6 text-white/60" size={28} />
            <h2 className="mb-5 text-2xl font-semibold">{t.challengeTitle}</h2>
            <p className="leading-relaxed text-white/60">{t.challenge}</p>
          </article>
        </section>

        <section className="mb-24">
          <h2 className="mb-5 text-3xl font-bold md:text-4xl">{t.solutionTitle}</h2>
          <p className="mb-10 max-w-3xl leading-relaxed text-white/60">{t.solution}</p>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-12">
            <h3 className="mb-8 text-2xl font-semibold">{t.diagramTitle}</h3>
            <div className="grid gap-6 md:grid-cols-3">
              {t.stages.map((stage, index) => {
                const Icon = stageIcons[index];
                return (
                  <article
                    key={stage.title}
                    className="rounded-2xl border border-white/10 bg-black p-6"
                  >
                    <div className="mb-6 flex items-center justify-between">
                      <Icon size={28} className="text-emerald-200/70" />
                      <span className="text-sm text-white/30">0{index + 1}</span>
                    </div>
                    <h4 className="mb-3 text-lg font-semibold">{stage.title}</h4>
                    <p className="text-sm leading-relaxed text-white/50">{stage.description}</p>
                  </article>
                );
              })}
            </div>
            <p className="mt-8 border-t border-white/10 pt-6 text-sm text-white/40">
              {t.diagramNote}
            </p>
          </div>
        </section>

        <section className="mb-24 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-12">
          <div className="mb-8 flex items-center gap-3">
            <CheckCircle2 size={28} className="text-emerald-300" />
            <h2 className="text-3xl font-bold">{t.featuresTitle}</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {t.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3 text-white/70">
                <CheckCircle2 size={18} className="mt-1 shrink-0 text-emerald-300" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Hardware y software: imágenes originales del proyecto */}
        <section className="mb-24 grid gap-10 md:grid-cols-2">
          <article>
            <ProjectImage
              src="/projects/quantiplant/hardware.webp"
              alt="Montaje de hardware del prototipo QuantiPlant"
            />
            <div className="mt-6 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
              <Lightbulb className="mb-5 text-white/60" size={28} />
              <h2 className="mb-4 text-2xl font-semibold">{t.hardwareTitle}</h2>
              <p className="leading-relaxed text-white/60">{t.hardware}</p>
            </div>
          </article>
          <article>
            <BrowserPreview
              src="/projects/quantiplant/interfaz.webp"
              alt="Captura real de la interfaz web de QuantiPlant"
              label="QuantiPlant · Web interface"
            />
            <div className="mt-6 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
              <Server className="mb-5 text-white/60" size={28} />
              <h2 className="mb-4 text-2xl font-semibold">{t.softwareTitle}</h2>
              <p className="leading-relaxed text-white/60">{t.software}</p>
            </div>
          </article>
        </section>

        <section className="mb-24">
          <h2 className="mb-5 text-3xl font-bold">{t.resultsTitle}</h2>
          <p className="mb-8 max-w-3xl leading-relaxed text-white/60">{t.results}</p>
          <ProjectImage
            src="/projects/quantiplant/experimento.webp"
            alt="Fotografías reales del experimento documentado con QuantiPlant"
          />
        </section>

        <section className="mb-24 border-t border-white/10 pt-12">
          <h2 className="mb-6 text-xl font-semibold">{t.techTitle}</h2>
          <div className="flex flex-wrap gap-3">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/60"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-10">
          <h2 className="mb-4 text-xl font-semibold">{t.noteTitle}</h2>
          <p className="max-w-3xl text-sm leading-relaxed text-white/50">{t.note}</p>
        </section>
      </div>
    </main>
  );
}
