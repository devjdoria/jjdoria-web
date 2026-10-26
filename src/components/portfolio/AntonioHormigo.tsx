import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Globe2,
  LayoutDashboard,
  Palette,
  Settings2,
} from "lucide-react";


type ProjectContent = {
  back: string;
  category: string;
  subtitle: string;
  visit: string;
  contextTitle: string;
  context: string;
  challengeTitle: string;
  challenge: string;
  solutionTitle: string;
  publicTitle: string;
  publicDescription: string;
  privateTitle: string;
  privateDescription: string;
  galleryTitle: string;
  galleryDescription: string;
  adminTitle: string;
  adminDescription: string;
  workTitle: string;
  workDescription: string;
  workItems: string[];
  processTitle: string;
  process: string;
  resultTitle: string;
  result: string;
  technologies: string;
  finalTitle: string;
  finalDescription: string;

};

const content: Record<"es" | "en" | "ca" | "it" | "nl", ProjectContent> = {
  ca: {
    back: "Tornar al portafolis",
    category: "Desenvolupament Full Stack · Disseny UI/UX",
    subtitle: "Una plataforma digital per mostrar i gestionar l’obra d’un artista.",
    visit: "Visitar el web",
    contextTitle: "Del catàleg PDF a una plataforma digital",
    context: "Antonio Hormigo preparava un catàleg de les seves obres en PDF. Després de conèixer les seves necessitats, vaig proposar transformar-lo en una plataforma web per mostrar les obres en qualsevol moment i gestionar el catàleg de manera autònoma.",
    challengeTitle: "El repte",
    challenge: "Crear una experiència visual respectuosa amb la identitat artística de les obres i, alhora, oferir una eina senzilla per administrar continguts, decidir quines peces mostrar i controlar-ne la disponibilitat.",
    solutionTitle: "Una solució amb dos entorns",
    publicTitle: "Web pública",
    publicDescription: "Un espai visual per descobrir l’obra de l’artista, explorar peces per grups i filtres, consultar publicacions i trobar informació de contacte.",
    privateTitle: "Panell privat",
    privateDescription: "Un sistema d’administració a mida per crear i editar obres, gestionar publicacions, modificar textos, organitzar categories i controlar la visibilitat i disponibilitat de les peces.",
    galleryTitle: "Explorant la plataforma",
    galleryDescription: "Una experiència visual que dona protagonisme a les obres, amb navegació clara i una presentació cuidada de cada peça.",
    adminTitle: "Administració desenvolupada a mida",
    adminDescription: "A més de la web pública, vaig desenvolupar un entorn privat perquè l’artista gestioni el catàleg, les publicacions i el contingut de la plataforma.",
    workTitle: "La meva aportació",
    workDescription: "Em vaig encarregar de tot el projecte: des de la proposta inicial i el disseny visual fins al desenvolupament, l’autenticació, la gestió de dades i la publicació.",
    workItems: [
      "Anàlisi de necessitats i proposta de solució",
      "Disseny visual i experiència d’usuari",
      "Desenvolupament frontend i backend",
      "Autenticació i administració privada",
      "Gestió d’obres, publicacions i categories",
      "Control de visibilitat i disponibilitat",
      "Adaptació responsive",
      "Proves, ajustos i desplegament"
    ],
    processTitle: "Un desenvolupament adaptat al client",
    process: "El projecte va començar amb una proposta creativa inspirada en les obres de l’artista. Després de presentar la primera versió, vaig incorporar noves funcions sol·licitades pel client, com els grups d’obres i les publicacions, fins a arribar a la plataforma definitiva.",
    resultTitle: "El resultat",
    result: "Una plataforma web publicada que permet a l’artista presentar la seva obra i mantenir el catàleg actualitzat de manera autònoma, sense modificar codi.",
    technologies: "Tecnologies utilitzades",
    finalTitle: "Descobreix el projecte real",
    finalDescription: "Explora la plataforma publicada i descobreix com es presenta l’obra d’Antonio Hormigo."
  },
  it: {
    back: "Torna al portfolio",
    category: "Sviluppo Full Stack · Design UI/UX",
    subtitle: "Una piattaforma digitale progettata per presentare e gestire le opere di un artista.",
    visit: "Visita il sito",
    contextTitle: "Dal catalogo PDF a una piattaforma digitale",
    context: "Antonio Hormigo stava preparando un catalogo PDF delle sue opere. Dopo aver compreso le sue esigenze, ho proposto di trasformarlo in una piattaforma web per mostrare le opere in qualsiasi momento e gestire il catalogo in autonomia.",
    challengeTitle: "La sfida",
    challenge: "Creare un’esperienza visiva rispettosa dell’identità artistica delle opere e offrire al contempo uno strumento intuitivo per gestire i contenuti, scegliere quali pezzi mostrare e controllarne la disponibilità.",
    solutionTitle: "Una soluzione con due ambienti",
    publicTitle: "Sito pubblico",
    publicDescription: "Uno spazio visivo per scoprire le opere dell’artista, esplorarle attraverso gruppi e filtri, leggere le pubblicazioni e trovare i contatti.",
    privateTitle: "Pannello privato",
    privateDescription: "Un sistema di amministrazione su misura per creare e modificare opere, gestire pubblicazioni, aggiornare testi, organizzare categorie e controllare visibilità e disponibilità.",
    galleryTitle: "Esplorare la piattaforma",
    galleryDescription: "Un’esperienza visiva che mette al centro le opere, con navigazione chiara e presentazione curata di ogni pezzo.",
    adminTitle: "Amministrazione sviluppata su misura",
    adminDescription: "Oltre al sito pubblico, ho sviluppato un ambiente privato in cui l’artista può gestire catalogo, pubblicazioni e contenuti della piattaforma.",
    workTitle: "Il mio contributo",
    workDescription: "Ho seguito l’intero progetto: dalla proposta iniziale e dal design visivo allo sviluppo, all’autenticazione, alla gestione dei dati e alla pubblicazione.",
    workItems: [
      "Analisi delle esigenze e proposta di soluzione",
      "Design visivo ed esperienza utente",
      "Sviluppo frontend e backend",
      "Autenticazione e amministrazione privata",
      "Gestione di opere, pubblicazioni e categorie",
      "Controllo di visibilità e disponibilità",
      "Design responsive",
      "Test, perfezionamenti e distribuzione"
    ],
    processTitle: "Uno sviluppo su misura per il cliente",
    process: "Il progetto è iniziato con una proposta creativa ispirata alle opere dell’artista. Dopo la prima versione, ho aggiunto le funzionalità richieste dal cliente, tra cui gruppi di opere e pubblicazioni, fino alla piattaforma definitiva.",
    resultTitle: "Il risultato",
    result: "Una piattaforma web online che consente all’artista di presentare le proprie opere e aggiornare autonomamente il catalogo senza modificare codice.",
    technologies: "Tecnologie utilizzate",
    finalTitle: "Scopri il progetto online",
    finalDescription: "Esplora la piattaforma pubblicata e scopri come vengono presentate le opere di Antonio Hormigo."
  },
  nl: {
    back: "Terug naar portfolio",
    category: "Full-stackontwikkeling · UI/UX-ontwerp",
    subtitle: "Een digitaal platform om het werk van een kunstenaar te presenteren en beheren.",
    visit: "Website bezoeken",
    contextTitle: "Van pdf-catalogus naar digitaal platform",
    context: "Antonio Hormigo werkte aan een pdf-catalogus van zijn kunstwerken. Nadat ik zijn behoeften had besproken, stelde ik voor om hiervan een webplatform te maken waarop hij zijn werk altijd kan tonen en de catalogus zelfstandig kan beheren.",
    challengeTitle: "De uitdaging",
    challenge: "Een visuele ervaring creëren die de artistieke identiteit van de werken respecteert en tegelijk een eenvoudige tool bieden om inhoud te beheren, werken te selecteren en beschikbaarheid bij te houden.",
    solutionTitle: "Eén oplossing met twee omgevingen",
    publicTitle: "Publieke website",
    publicDescription: "Een visuele plek om het werk van de kunstenaar te ontdekken, werken te verkennen via groepen en filters, publicaties te lezen en contactgegevens te vinden.",
    privateTitle: "Privédashboard",
    privateDescription: "Een op maat gemaakt beheersysteem om kunstwerken te maken en bewerken, publicaties te beheren, teksten aan te passen, categorieën in te delen en zichtbaarheid en beschikbaarheid te regelen.",
    galleryTitle: "Het platform verkennen",
    galleryDescription: "Een visuele ervaring waarin de kunstwerken centraal staan, met duidelijke navigatie en een verzorgde presentatie van elk werk.",
    adminTitle: "Beheer op maat",
    adminDescription: "Naast de publieke website ontwikkelde ik een besloten omgeving waarin de kunstenaar zijn catalogus, publicaties en website-inhoud kan beheren.",
    workTitle: "Mijn bijdrage",
    workDescription: "Ik verzorgde het volledige project: van het eerste voorstel en visuele ontwerp tot ontwikkeling, authenticatie, gegevensbeheer en publicatie.",
    workItems: [
      "Behoefteanalyse en oplossingsvoorstel",
      "Visueel ontwerp en gebruikerservaring",
      "Frontend- en backendontwikkeling",
      "Authenticatie en besloten beheer",
      "Beheer van werken, publicaties en categorieën",
      "Controle over zichtbaarheid en beschikbaarheid",
      "Responsive ontwerp",
      "Tests, verbeteringen en deployment"
    ],
    processTitle: "Ontwikkeld rond de klant",
    process: "Het project begon met een creatief voorstel geïnspireerd op de werken van de kunstenaar. Na de eerste versie voegde ik op verzoek functies toe, waaronder werkengroepen en publicaties, tot het definitieve platform klaar was.",
    resultTitle: "Het resultaat",
    result: "Een live webplatform waarmee de kunstenaar zijn werk kan presenteren en de catalogus zelfstandig actueel houdt, zonder code aan te passen.",
    technologies: "Gebruikte technologieën",
    finalTitle: "Bekijk het echte project",
    finalDescription: "Verken het gepubliceerde platform en ontdek hoe het werk van Antonio Hormigo wordt gepresenteerd."
  },
  es: {
    back: "Volver al portfolio",
    category: "Desarrollo Full Stack · Diseño UI/UX",
    subtitle:
      "Una plataforma digital diseñada para mostrar y gestionar la obra de un artista.",
    visit: "Visitar web",

    contextTitle: "Del catálogo PDF a una plataforma digital",
    context:
      "Antonio Hormigo estaba preparando un catálogo de sus obras en formato PDF. Tras conocer sus necesidades, propuse transformar esa idea en una plataforma web que permitiera mostrar sus obras en cualquier momento y gestionar su catálogo de forma independiente.",

    challengeTitle: "El desafío",
    challenge:
      "Crear una experiencia visual que respetara la identidad artística de las obras y, al mismo tiempo, ofrecer al artista una herramienta sencilla para administrar sus contenidos, controlar qué piezas mostrar y gestionar su disponibilidad.",

    solutionTitle: "Una solución con dos entornos",

    publicTitle: "Web pública",
    publicDescription:
      "Un espacio visual para descubrir el trabajo del artista, explorar sus obras mediante grupos y filtros, consultar publicaciones y acceder a su información de contacto.",

    privateTitle: "Panel privado",
    privateDescription:
      "Un sistema de administración desarrollado a medida para crear y editar obras, gestionar publicaciones, modificar textos, organizar categorías y controlar la visibilidad y disponibilidad de las piezas.",

    galleryTitle: "Explorando la plataforma",
    galleryDescription:
      "Una experiencia visual diseñada para dar protagonismo a las obras del artista, con una navegación clara y una presentación cuidada de cada pieza.",

    adminTitle: "Administración desarrollada a medida",
    adminDescription:
      "Además de la web pública, desarrollé un entorno privado desde el que el artista puede gestionar su catálogo, sus publicaciones y la información de la plataforma.",

    workTitle: "Mi aportación",
    workDescription:
      "Me encargué del proyecto completo: desde la propuesta inicial y el diseño visual hasta el desarrollo de la aplicación, la autenticación, la gestión de datos y su publicación.",

    workItems: [
      "Análisis de necesidades y propuesta de solución",
      "Diseño visual y experiencia de usuario",
      "Desarrollo frontend y backend",
      "Autenticación y administración privada",
      "Gestión de obras, publicaciones y categorías",
      "Control de visibilidad y disponibilidad",
      "Adaptación responsive",
      "Pruebas, ajustes y despliegue",
    ],

    processTitle: "Un desarrollo adaptado al cliente",
    process:
      "El proyecto comenzó con una primera propuesta diseñada con libertad creativa, tomando como referencia las propias obras del artista. Tras presentar la primera versión, incorporé nuevas funcionalidades solicitadas por el cliente, como los grupos de obras y las publicaciones, hasta llegar a la plataforma definitiva.",

    resultTitle: "El resultado",
    result:
      "Una plataforma web publicada que permite al artista presentar su trabajo y mantener actualizado su catálogo de forma autónoma, sin necesidad de modificar código.",

    technologies: "Tecnologías utilizadas",

    finalTitle: "Descubre el proyecto real",
    finalDescription:
      "Explora la plataforma publicada y descubre cómo se presenta la obra de Antonio Hormigo.",
  },

  en: {
    back: "Back to portfolio",
    category: "Full Stack Development · UI/UX Design",
    subtitle:
      "A digital platform designed to showcase and manage an artist's work.",
    visit: "Visit website",

    contextTitle: "From a PDF catalogue to a digital platform",
    context:
      "Antonio Hormigo was preparing a PDF catalogue of his artworks. After understanding his needs, I proposed turning that idea into a web platform where his work could be viewed at any time and managed independently.",

    challengeTitle: "The challenge",
    challenge:
      "Create a visual experience that respects the artistic identity of the work while providing an intuitive tool for managing content, deciding which pieces to display and controlling their availability.",

    solutionTitle: "One platform, two environments",

    publicTitle: "Public website",
    publicDescription:
      "A visual space to discover the artist's work, explore artworks through groups and filters, read publications and find contact information.",

    privateTitle: "Private dashboard",
    privateDescription:
      "A custom administration system for creating and editing artworks, managing publications, updating text, organising categories and controlling visibility and availability.",

    galleryTitle: "Exploring the platform",
    galleryDescription:
      "A visual experience designed to put the artist's work first, with intuitive navigation and a carefully designed presentation of each artwork.",

    adminTitle: "Custom-built administration",
    adminDescription:
      "Alongside the public website, I developed a private environment where the artist can manage his catalogue, publications and website content.",

    workTitle: "My contribution",
    workDescription:
      "I handled the entire project, from the initial proposal and visual design to application development, authentication, data management and deployment.",

    workItems: [
      "Requirements analysis and solution proposal",
      "Visual design and user experience",
      "Frontend and backend development",
      "Authentication and private administration",
      "Artwork, publication and category management",
      "Visibility and availability controls",
      "Responsive design",
      "Testing, improvements and deployment",
    ],

    processTitle: "Built around the client's needs",
    process:
      "The project began with an initial proposal developed with creative freedom and inspired by the artist's work. After presenting the first version, I incorporated additional features requested by the client, including artwork groups and publications.",

    resultTitle: "The result",
    result:
      "A live web platform that allows the artist to showcase his work and independently keep his catalogue up to date without editing code.",

    technologies: "Technologies",

    finalTitle: "Explore the live project",
    finalDescription:
      "Visit the published platform and discover how Antonio Hormigo's work is presented.",
  },
};

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Full Stack",
];

const projectImages = {
  hero: "/projects/antonio-hormigo/hero.webp",
  gallery: "/projects/antonio-hormigo/galeria.webp",
  artwork: "/projects/antonio-hormigo/obra.webp",
  admin: "/projects/antonio-hormigo/admin.webp",
  adminArtworks: "/projects/antonio-hormigo/admin-obras.webp",
  adminPublications:
    "/projects/antonio-hormigo/admin-publicaciones.webp",
};

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
    <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950">
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

function BrowserPreview({
  src,
  alt,
  label,
}: {
  src: string;
  alt: string;
  label: string;
}) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950">
      {/* Barra superior estilo navegador */}
      <div className="flex items-center gap-3 border-b border-white/10 bg-zinc-900 px-5 py-4">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
        </div>

        <span className="ml-3 truncate text-xs text-white/35">
          {label}
        </span>
      </div>

      {/* Captura real */}
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={1000}
        sizes="(max-width: 768px) 100vw, 80vw"
        className="h-auto w-full"
      />
    </div>
  );
}

export default function AntonioHormigo({ locale }: { locale: string }) {

  // Traducciones completas en español e inglés.
  // El resto de idiomas utilizarán inglés temporalmente.
  const t = locale in content ? content[locale as keyof typeof content] : content.en;

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        {/* Volver al portfolio */}
        <Link
          href={`/${locale}/#proyectos`}
          className="mb-12 inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white"
        >
          <ArrowLeft size={16} />
          {t.back}
        </Link>

        {/* HERO */}
        <header className="mb-16">
          <span className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60">
            {t.category}
          </span>

          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
            Antonio Hormigo
          </h1>

          <p className="max-w-3xl text-xl leading-relaxed text-white/60 md:text-2xl">
            {t.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/50"
              >
                {technology}
              </span>
            ))}
          </div>

          <a
            href="https://antoniohormigo.es"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:scale-105"
          >
            <Globe2 size={18} />
            {t.visit}
            <ArrowUpRight size={16} />
          </a>
        </header>

        {/* IMAGEN PRINCIPAL */}
        <section className="mb-24">
          <ProjectImage
            src={projectImages.hero}
            alt="Página principal de Antonio Hormigo"
            priority
          />
        </section>

        {/* CONTEXTO Y DESAFÍO */}
        <section className="mb-24 grid gap-8 md:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <h2 className="mb-5 text-2xl font-semibold">
              {t.contextTitle}
            </h2>

            <p className="leading-relaxed text-white/60">
              {t.context}
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <h2 className="mb-5 text-2xl font-semibold">
              {t.challengeTitle}
            </h2>

            <p className="leading-relaxed text-white/60">
              {t.challenge}
            </p>
          </div>
        </section>

        {/* SOLUCIÓN */}
        <section className="mb-24">
          <h2 className="mb-10 text-3xl font-bold md:text-4xl">
            {t.solutionTitle}
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-10">
              <Palette
                className="mb-6 text-white/70"
                size={32}
              />

              <h3 className="mb-4 text-2xl font-semibold">
                {t.publicTitle}
              </h3>

              <p className="leading-relaxed text-white/60">
                {t.publicDescription}
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-10">
              <LayoutDashboard
                className="mb-6 text-white/70"
                size={32}
              />

              <h3 className="mb-4 text-2xl font-semibold">
                {t.privateTitle}
              </h3>

              <p className="leading-relaxed text-white/60">
                {t.privateDescription}
              </p>
            </div>
          </div>
        </section>

        {/* GALERÍA DE LA WEB PÚBLICA */}
        <section className="mb-24">
          <div className="mb-10">
            <h2 className="text-3xl font-bold md:text-4xl">
              {t.galleryTitle}
            </h2>

            <p className="mt-4 max-w-2xl leading-relaxed text-white/60">
              {t.galleryDescription}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <ProjectImage
              src={projectImages.gallery}
              alt="Galería de obras de Antonio Hormigo"
            />

            <ProjectImage
              src={projectImages.artwork}
              alt="Vista individual de una obra de Antonio Hormigo"
            />
          </div>
        </section>

        {/* MI APORTACIÓN */}
        <section className="mb-24 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-12">
          <div className="mb-6 flex items-center gap-3">
            <Settings2
              size={28}
              className="text-white/70"
            />

            <h2 className="text-3xl font-bold">
              {t.workTitle}
            </h2>
          </div>

          <p className="mb-8 max-w-3xl leading-relaxed text-white/60">
            {t.workDescription}
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {t.workItems.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 text-white/70"
              >
                <CheckCircle2
                  size={18}
                  className="mt-1 shrink-0 text-emerald-400"
                />

                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* PANEL DE ADMINISTRACIÓN */}
        <section className="mb-24">
          <div className="mb-10">
            <h2 className="text-3xl font-bold md:text-4xl">
              {t.adminTitle}
            </h2>

            <p className="mt-4 max-w-3xl leading-relaxed text-white/60">
              {t.adminDescription}
            </p>
          </div>

          <div className="space-y-6">
            <BrowserPreview
              src={projectImages.admin}
              alt="Panel de administración de Antonio Hormigo"
              label="Admin Dashboard"
            />

            <div className="grid gap-6 md:grid-cols-2">
              <BrowserPreview
                src={projectImages.adminArtworks}
                alt="Gestión de obras desde el panel"
                label="Artwork Management"
              />

              <BrowserPreview
                src={projectImages.adminPublications}
                alt="Gestión de publicaciones"
                label="Publication Management"
              />
            </div>
          </div>
        </section>

        {/* PROCESO Y RESULTADO */}
        <section className="mb-24 grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-5 text-3xl font-bold">
              {t.processTitle}
            </h2>

            <p className="leading-relaxed text-white/60">
              {t.process}
            </p>
          </div>

          <div>
            <h2 className="mb-5 text-3xl font-bold">
              {t.resultTitle}
            </h2>

            <p className="leading-relaxed text-white/60">
              {t.result}
            </p>
          </div>
        </section>

        {/* TECNOLOGÍAS */}
        <section className="mb-24 border-t border-white/10 pt-12">
          <h2 className="mb-6 text-xl font-semibold">
            {t.technologies}
          </h2>

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

        {/* CTA FINAL */}
        <section className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 text-center md:p-12">
          <h2 className="text-3xl font-bold md:text-4xl">
            {t.finalTitle}
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-white/60">
            {t.finalDescription}
          </p>

          <a
            href="https://antoniohormigo.es"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:scale-105"
          >
            {t.visit}
            <ArrowUpRight size={18} />
          </a>
        </section>
      </div>
    </main>
  );
}