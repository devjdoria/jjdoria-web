export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 text-sm text-white/40 md:flex-row">
        <p>© {new Date().getFullYear()} JJDoria. Todos los derechos reservados.</p>
        <p>Desarrollo web · Aplicaciones · Automatización</p>
      </div>
    </footer>
  );
}