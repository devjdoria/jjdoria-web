"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useState } from "react";

const locales = [
  { code: "en", label: "EN"},
  { code: "es", label: "ES"},
  { code: "it", label: "IT"},
  { code: "ca", label: "CAT"},
  { code: "nl", label: "NL"},
];

export default function Navbar() {
  const t = useTranslations("Navbar");

  const locale = useLocale();

  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const activeLocale =
    locales.find((item) => item.code === locale) ?? locales[0];

  const getLocalizedPath = (nextLocale: string) => {
    const segments = pathname.split("/");

    segments[1] = nextLocale;

    return segments.join("/") || `/${nextLocale}`;
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href={`/${locale}`}
          className="flex items-center gap-3 transition hover:opacity-90"
        >
          <Image
            src="/jjdoria-logo.svg"
            alt="JJDoria Logo"
            width={180}
            height={48}
            priority
            className="h-12 w-auto object-contain"
          />
        </a>

        <div className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          <a href="#servicios" className="transition hover:text-white">
            {t("services")}
          </a>

          <a href="#proyectos" className="transition hover:text-white">
            {t("projects")}
          </a>

          <a href="#proceso" className="transition hover:text-white">
            {t("process")}
          </a>

          <a href="#contacto" className="transition hover:text-white">
            {t("contact")}
          </a>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 transition hover:bg-white/10"
            >
              <span>{activeLocale.flag}</span>

              <span className="hidden sm:inline">
                {activeLocale.label}
              </span>

              <ChevronDown size={15} />
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-44 overflow-hidden rounded-xl border border-white/10 bg-black/95 p-1 shadow-2xl backdrop-blur">
                {locales.map((item) => (
                  <a
                    key={item.code}
                    href={getLocalizedPath(item.code)}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition ${
                      locale === item.code
                        ? "bg-white text-black"
                        : "text-white/70 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <span>{item.flag}</span>

                    <span>{item.label}</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href="#contacto"
            className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black transition hover:scale-105"
          >
            {t("cta")}
          </a>
        </div>
      </nav>
    </header>
  );
}