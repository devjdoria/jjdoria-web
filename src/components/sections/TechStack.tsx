"use client";

import { useTranslations } from "next-intl";

const tech = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "REST APIs",
  "PostgreSQL",
  "MongoDB",
  "Tailwind CSS",
  "Vercel",
  "Supabase",
];

export default function TechStack() {
  const t = useTranslations("Tech");

  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-12">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
              {t("badge")}
            </span>

            <h2 className="text-4xl font-bold md:text-5xl">
              {t("title")}
            </h2>
          </div>

          <div>
            <p className="mb-8 leading-relaxed text-white/60">
              {t("description")}
            </p>

            <div className="flex flex-wrap gap-3">
              {tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-black px-4 py-2 text-sm text-white/70"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}