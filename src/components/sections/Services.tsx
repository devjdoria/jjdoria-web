import { Code2, Globe, LifeBuoy, Rocket, Workflow } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Webs profesionales",
    description:
      "Webs modernas, rápidas y cuidadas para transmitir confianza y convertir visitas en oportunidades.",
  },
  {
    icon: Rocket,
    title: "Landing pages",
    description:
      "Páginas enfocadas en captar clientes, validar ideas o lanzar servicios de forma rápida.",
  },
  {
    icon: Code2,
    title: "Aplicaciones web",
    description:
      "Herramientas internas, paneles, MVPs y soluciones a medida para tu negocio.",
  },
  {
    icon: LifeBuoy,
    title: "Mantenimiento",
    description:
      "Soporte, mejoras, actualizaciones y evolución continua para tu web o aplicación.",
  },
  {
    icon: Workflow,
    title: "Automatización básica",
    description:
      "Automatización de formularios, emails, integraciones y tareas repetitivas sencillas.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            Servicios
          </span>
          <h2 className="text-4xl font-bold md:text-5xl">
            Soluciones digitales claras, modernas y preparadas para crecer.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:bg-white/[0.06]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black">
                  <Icon size={22} />
                </div>

                <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
                <p className="leading-relaxed text-white/60">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}