const projects = [
  {
    title: "Web para restaurante",
    tag: "Landing + reservas",
    description:
      "Landing premium para restaurante con carta destacada, reseñas, reservas y diseño visual orientado a conversión.",
    url: "https://restaurant-landing-liart.vercel.app/",
  },
  {
    title: "Dashboard de clientes",
    tag: "Aplicación web",
    description:
      "Panel conceptual con gestión de clientes, métricas de negocio y actividad reciente.",
    url: "https://crm-dashboard-dusky-zeta.vercel.app",
  },
  {
    title: "Automatización básica",
    tag: "Lead workflow",
    description:
      "Demo conceptual de automatización para capturar leads, actualizar un CRM y enviar emails de seguimiento.",
    url: "https://leadflow-automation.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            Proyectos demo
          </span>
          <h2 className="text-4xl font-bold md:text-5xl">
            Ejemplos visuales del tipo de soluciones que puedo construir.
          </h2>
          <p className="mt-5 text-white/60">
            Algunos proyectos son conceptuales y están pensados para mostrar
            funcionalidades reales aplicadas a negocios pequeños.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
            >
              <div className="flex h-52 items-center justify-center bg-gradient-to-br from-white/15 to-white/[0.02]">
                <div className="w-4/5 rounded-2xl border border-white/10 bg-black/50 p-4 shadow-2xl">
                  <div className="mb-4 flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-white/30" />
                    <span className="h-3 w-3 rounded-full bg-white/20" />
                    <span className="h-3 w-3 rounded-full bg-white/10" />
                  </div>
                  <div className="mb-3 h-4 w-2/3 rounded bg-white/20" />
                  <div className="mb-2 h-3 w-full rounded bg-white/10" />
                  <div className="mb-2 h-3 w-5/6 rounded bg-white/10" />
                  <div className="mt-5 grid grid-cols-3 gap-2">
                    <div className="h-12 rounded bg-white/10" />
                    <div className="h-12 rounded bg-white/10" />
                    <div className="h-12 rounded bg-white/10" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <span className="mb-3 inline-block rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">
                  {project.tag}
                </span>
                <h3 className="mb-3 text-xl font-semibold">{project.title}</h3>
                <p className="text-white/60">{project.description}</p>
                  {"url" in project && (
                    <a
                      href={project.url}
                      target="_blank"
                      className="mt-5 inline-flex rounded-xl bg-white px-4 py-2 text-sm font-medium text-black transition hover:scale-105"
                    >
                      Ver demo
                    </a>
                  )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}