export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-semibold tracking-tight">
          JJDoria<span className="text-white/40">.dev</span>
        </a>

        <div className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          <a href="#servicios" className="transition hover:text-white">
            Servicios
          </a>
          <a href="#proyectos" className="transition hover:text-white">
            Proyectos
          </a>
          <a href="#proceso" className="transition hover:text-white">
            Proceso
          </a>
          <a href="#contacto" className="transition hover:text-white">
            Contacto
          </a>
        </div>

        <a
          href="#contacto"
          className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black transition hover:scale-105"
        >
          Hablemos
        </a>
      </nav>
    </header>
  );
}