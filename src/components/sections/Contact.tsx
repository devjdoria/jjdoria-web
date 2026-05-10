export default function Contact() {
  return (
    <section id="contacto" className="px-6 py-28">
      <div className="mx-auto max-w-4xl text-center">
        <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
          Contacto
        </span>

        <h2 className="text-4xl font-bold md:text-6xl">
          ¿Tienes una idea, una web que mejorar o un proceso que automatizar?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
          Cuéntame tu caso y te propongo una solución clara, realista y adaptada
          a tu negocio.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="mailto:tuemail@ejemplo.com"
            className="rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:scale-105"
          >
            Enviar email
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-medium backdrop-blur transition hover:bg-white/10"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}