import {
  ArrowUpRight,
  BadgeCheck,
  Code2,
  LayoutDashboard,
  Workflow,
} from "lucide-react";

const projects = [
  {
    title: "CRM Dashboard",
    type: "SaaS / Web Application",
    description:
      "Conceptual dashboard for small businesses with metrics, clients, revenue and recent activity.",
    features: ["Dashboard", "Clients", "Metrics", "Responsive UI"],
    url: "https://crm-dashboard-dusky-zeta.vercel.app",
    icon: LayoutDashboard,
  },
  {
    title: "Restaurant Landing",
    type: "Premium Landing Page",
    description:
      "Visual restaurant landing page with menu showcase, reservations, reviews and premium aesthetics.",
    features: ["Visual Hero", "Menu", "Reservations", "WhatsApp CTA"],
    url: "https://restaurant-landing-liart.vercel.app/",
    icon: Code2,
  },
  {
    title: "LeadFlow Automation",
    type: "Automation / Workflow",
    description:
      "Conceptual automation demo for lead capture, CRM updates and follow-up emails.",
    features: ["Lead Capture", "CRM Update", "Email Flow", "Dashboard"],
    url: "https://leadflow-automation.vercel.app/",
    icon: Workflow,
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-3xl">
          <span className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            Demo Projects
          </span>

          <h2 className="text-4xl font-bold md:text-5xl">
            Interactive demos that showcase real digital solutions.
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-white/60">
            These conceptual projects are designed to demonstrate how modern
            websites, dashboards and automation workflows can help businesses
            look more professional and operate more efficiently.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article
                key={project.title}
                className="group flex flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] transition hover:-translate-y-1 hover:bg-white/[0.05]"
              >
                <div className="relative h-56 overflow-hidden border-b border-white/10 bg-black">
                  <iframe
                    src={project.url}
                    title={project.title}
                    className="h-[1000px] w-[1500px] origin-top-left scale-[0.19] border-0"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.title}`}
                    className="absolute inset-0"
                  />

                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4">
                    <span className="mb-3 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">
                      {project.type}
                    </span>

                    <h3 className="text-2xl font-semibold">
                      {project.title}
                    </h3>
                  </div>

                  <p className="mb-6 leading-relaxed text-white/60">
                    {project.description}
                  </p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-black px-3 py-1 text-xs text-white/55"
                      >
                        <BadgeCheck size={13} />
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-medium text-black transition hover:scale-105"
                    >
                      Open Demo
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 text-center">
          <h3 className="text-2xl font-semibold">
            Looking for something similar for your business?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-white/60">
            I can adapt this type of solution into a real website, internal tool
            or automation workflow tailored to your business needs.
          </p>

          <a
            href="#contacto"
            className="mt-6 inline-flex rounded-xl bg-white px-5 py-3 font-medium text-black transition hover:scale-105"
          >
            Let’s Talk
          </a>
        </div>
      </div>
    </section>
  );
}