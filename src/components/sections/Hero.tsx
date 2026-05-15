"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,119,198,0.15),transparent_40%)]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-5xl text-center"
      >
        <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur">
          {t("badge")}
        </div>

        <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
          {t("title")}
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-white/70 md:text-xl">
          {t("description")}
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#servicios"
            className="rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:scale-105"
          >
            {t("services")}
          </a>

          <a
            href="#contacto"
            className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-medium backdrop-blur transition hover:bg-white/10"
          >
            {t("contact")}
          </a>
        </div>
      </motion.div>
    </section>
  );
}