"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  ChartNoAxesCombined,
  Coffee,
  FlaskConical,
  Palette,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const projectConfig = [
  {
    slug: "antonio-hormigo",
    url: "https://antoniohormigo.es",
    icon: Palette,
    preview: "website",
    technologies: ["Next.js", "TypeScript", "Full Stack", "CMS"],
  },
  {
    slug: "crem-international",
    url: null,
    icon: Coffee,
    preview: "industrial",
    technologies: ["JavaScript", "Node.js", "Docker"],
  },
  {
    slug: "quantiplant",
    url: null,
    icon: FlaskConical,
    preview: "research",
    technologies: ["Python", "Flask", "Raspberry Pi", "Docker"],
  },
  {
    slug: "auditoria-web",
    url: null,
    icon: ChartNoAxesCombined,
    preview: "audit",
    technologies: ["UX/UI", "CRO", "Web Audit", "Digital Strategy"],
  },
] as const;

type AuditCopy = {
  title: string;
  type: string;
  description: string;
  features: [string, string, string, string];
  visual: string;
};

// The fourth project is localized here so existing translation JSON files remain untouched.
// It can be moved to Projects.items.3 in each locale later.
const auditTranslations: Record<string, AuditCopy> = {
  es: {
    title: "Auditoría UX/UI y estrategia digital",
    type: "Consultoría digital",
    description:
      "Evaluación visual, funcional y comercial de una web del sector hotelero. Análisis de navegación, experiencia móvil y procesos de reserva, con recomendaciones de mejora priorizadas.",
    features: ["Auditoría UX/UI", "Análisis de conversión", "Priorización", "Estrategia digital"],
    visual: "UX / UI · Auditoría web",
  },
  en: {
    title: "UX/UI Audit & Digital Strategy",
    type: "Digital Consulting",
    description:
      "Visual, functional and commercial review of a hospitality website. Analysis of navigation, mobile experience and booking journeys, with prioritized recommendations.",
    features: ["UX/UI audit", "Conversion review", "Prioritization", "Digital strategy"],
    visual: "UX / UI · Website audit",
  },
  ca: {
    title: "Auditoria UX/UI i estratègia digital",
    type: "Consultoria digital",
    description:
      "Avaluació visual, funcional i comercial d'un web del sector hoteler. Anàlisi de navegació, experiència mòbil i processos de reserva, amb recomanacions prioritzades.",
    features: ["Auditoria UX/UI", "Anàlisi de conversió", "Priorització", "Estratègia digital"],
    visual: "UX / UI · Auditoria web",
  },
  it: {
    title: "Audit UX/UI e strategia digitale",
    type: "Consulenza digitale",
    description:
      "Valutazione visiva, funzionale e commerciale di un sito nel settore alberghiero. Analisi di navigazione, esperienza mobile e prenotazioni, con raccomandazioni prioritarie.",
    features: ["Audit UX/UI", "Analisi conversioni", "Priorità", "Strategia digitale"],
    visual: "UX / UI · Audit del sito",
  },
  nl: {
    title: "UX/UI-audit en digitale strategie",
    type: "Digitaal advies",
    description:
      "Visuele, functionele en commerciële evaluatie van een website in de hotelsector. Analyse van navigatie, mobiele ervaring en boekingsprocessen, met geprioriteerde aanbevelingen.",
    features: ["UX/UI-audit", "Conversieanalyse", "Prioritering", "Digitale strategie"],
    visual: "UX / UI · Website-audit",
  },
};

function WebsitePreview({ url, title }: { url: string; title: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.2);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateScale = () => {
      const { width, height } = container.getBoundingClientRect();
      const iframeWidth = 1440;
      const iframeHeight = 900;
      setScale(Math.max(width / iframeWidth, height / iframeHeight));
    };

    updateScale();
    const observer = new ResizeObserver(updateScale);
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative h-56 overflow-hidden border-b border-white/10 bg-zinc-950">
      <iframe
        src={url}
        title={title}
        loading="lazy"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[900px] w-[1440px] border-0"
        style={{ transform: `translate(-50%, -50%) scale(${scale})` }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
    </div>
  );
}

function ProjectVisual({ type, auditLabel }: { type: "industrial" | "research" | "audit"; auditLabel: string }) {
  const industrial = type === "industrial";
  const audit = type === "audit";
  const Icon = industrial ? Coffee : audit ? ChartNoAxesCombined : FlaskConical;
  const glow = industrial ? "bg-amber-500/15" : audit ? "bg-sky-500/15" : "bg-emerald-500/15";

  return (
    <div className="relative flex h-56 items-center justify-center overflow-hidden border-b border-white/10 bg-zinc-950">
      <div className={`absolute h-56 w-56 rounded-full blur-[100px] ${glow}`} />
      <div className="relative flex flex-col items-center gap-4">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
          <Icon size={56} strokeWidth={1.2} className="text-white/70" />
        </div>
        <span className="text-center text-xs font-medium uppercase tracking-[0.3em] text-white/35">
          {industrial ? "Industrial Software" : audit ? auditLabel : "Research & Automation"}
        </span>
      </div>
    </div>
  );
}

export default function Projects() {
  const t = useTranslations("Projects");
  const locale = useLocale();
  const auditCopy = auditTranslations[locale] ?? auditTranslations.en;

  const projects = projectConfig.map((project, index) => ({
    ...project,
    title: index === 3 ? auditCopy.title : t(`items.${index}.title`),
    type: index === 3 ? auditCopy.type : t(`items.${index}.type`),
    description: index === 3 ? auditCopy.description : t(`items.${index}.description`),
    features: index === 3
      ? auditCopy.features
      : [
          t(`items.${index}.features.0`),
          t(`items.${index}.features.1`),
          t(`items.${index}.features.2`),
          t(`items.${index}.features.3`),
        ],
  }));

  return (
    <section id="proyectos" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <span className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            {t("badge")}
          </span>
          <h2 className="text-4xl font-bold md:text-5xl">{t("title")}</h2>
          <p className="mt-5 text-lg leading-relaxed text-white/60">{t("description")}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <article
                key={project.slug}
                className={`group flex flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] transition hover:-translate-y-1 hover:bg-white/[0.05] ${index === 0 ? "lg:col-span-2" : ""}`}
              >
                {project.preview === "website" && project.url ? (
                  <WebsitePreview url={project.url} title={project.title} />
                ) : (
                  <ProjectVisual
                    type={project.preview === "industrial" ? "industrial" : project.preview === "audit" ? "audit" : "research"}
                    auditLabel={auditCopy.visual}
                  />
                )}

                <div className="flex flex-1 flex-col p-6 md:p-8">
                  <div className="mb-4">
                    <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">
                      <Icon size={14} />
                      {project.type}
                    </span>
                    <h3 className="text-2xl font-semibold md:text-3xl">{project.title}</h3>
                  </div>

                  <p className="mb-6 max-w-2xl leading-relaxed text-white/60">{project.description}</p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span key={technology} className="rounded-full border border-white/10 bg-black px-3 py-1 text-xs text-white/55">
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="mb-8 flex flex-wrap gap-2">
                    {project.features.map((feature) => (
                      <span key={feature} className="inline-flex items-center gap-1 rounded-full border border-white/10 px-3 py-1 text-xs text-white/55">
                        <BadgeCheck size={13} />
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-3">
                    <Link
                      href={`/${locale}/portfolio/${project.slug}`}
                      className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-medium text-black transition hover:scale-105"
                    >
                      {t("viewProject")}
                      <ArrowRight size={16} />
                    </Link>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
                      >
                        {t("visitWebsite")}
                        <ArrowUpRight size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 text-center">
          <h3 className="text-2xl font-semibold">{t("ctaTitle")}</h3>
          <p className="mx-auto mt-3 max-w-2xl text-white/60">{t("ctaDescription")}</p>
          <a href="#contacto" className="mt-6 inline-flex rounded-xl bg-white px-5 py-3 font-medium text-black transition hover:scale-105">
            {t("ctaButton")}
          </a>
        </div>
      </div>
    </section>
  );
}
