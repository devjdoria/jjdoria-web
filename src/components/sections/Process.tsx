"use client";

import { useTranslations } from "next-intl";

export default function Process() {
  const t = useTranslations("Process");

  const steps = [
    t("steps.0"),
    t("steps.1"),
    t("steps.2"),
    t("steps.3"),
    t("steps.4"),
  ];

  return (
    <section id="proceso" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            {t("badge")}
          </span>

          <h2 className="text-4xl font-bold md:text-5xl">
            {t("title")}
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