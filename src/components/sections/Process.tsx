const steps = [
  "Entiendo tu situación",
  "Propongo una solución clara",
  "Desarrollo una primera versión",
  "Revisamos y mejoramos",
  "Publicamos y damos soporte",
];

export default function Process() {
  return (
    <section id="proceso" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            Proceso
          </span>
          <h2 className="text-4xl font-bold md:text-5xl">
            Trabajo simple, claro y sin complicaciones innecesarias.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-5">
          {steps.map((step, index) => (
            <div
              key={step}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
            >
              <span className="mb-6 block text-sm text-white/40">
                0{index + 1}
              </span>
              <h3 className="text-lg font-semibold">{step}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}