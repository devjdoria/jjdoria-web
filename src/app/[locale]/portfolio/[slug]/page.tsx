import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

import AntonioHormigo from "@/components/portfolio/AntonioHormigo";
import CremInternational from "@/components/portfolio/CremInternational";
import QuantiPlant from "@/components/portfolio/QuantiPlant";
import WebAudit from "@/components/portfolio/WebAudit";

type Props = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export default async function PortfolioProjectPage({ params }: Props) {
  const { locale, slug } = await params;

  if (!routing.locales.includes(locale as "es" | "en" | "ca" | "it" | "nl")) {
    notFound();
  }

  switch (slug) {
    case "antonio-hormigo":
      return <AntonioHormigo locale={locale} />;
    case "crem-international":
      return <CremInternational locale={locale} />;
    case "quantiplant":
      return <QuantiPlant locale={locale} />;
    case "auditoria-web":
      return <WebAudit locale={locale} />;
    default:
      notFound();
  }
}
