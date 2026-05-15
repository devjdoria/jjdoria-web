"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 text-sm text-white/40 md:flex-row">
        <p>
          © {new Date().getFullYear()} JJDoria. {t("rights")}
        </p>

        <p>{t("services")}</p>
      </div>
    </footer>
  );
}