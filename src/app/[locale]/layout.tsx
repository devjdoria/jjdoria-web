import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

type Locale = "en" | "es" | "it" | "ca" | "nl";

const metadataByLocale: Record<
  Locale,
  {
    title: string;
    description: string;
    ogLocale: string;
  }
> = {
  en: {
    title: "Software Development",
    description:
      "Modern websites, web applications and business automation for entrepreneurs and small businesses.",
    ogLocale: "en_GB",
  },
  es: {
    title: "Desarrollo de Software",
    description:
      "Webs modernas, aplicaciones web y automatización de procesos para emprendedores y pequeñas empresas.",
    ogLocale: "es_ES",
  },
  it: {
    title: "Sviluppo Software",
    description:
      "Siti web moderni, applicazioni web e automazione dei processi per imprenditori e piccole aziende.",
    ogLocale: "it_IT",
  },
  ca: {
    title: "Desenvolupament de Software",
    description:
      "Webs modernes, aplicacions web i automatització de processos per a emprenedors i petits negocis.",
    ogLocale: "ca_ES",
  },
  nl: {
    title: "Softwareontwikkeling",
    description:
      "Moderne websites, webapplicaties en bedrijfsautomatisering voor ondernemers en kleine bedrijven.",
    ogLocale: "nl_NL",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const currentLocale = locale as Locale;
  const metadata = metadataByLocale[currentLocale];
  const url = `https://www.devjjdoria.com/${currentLocale}`;

  return {
    title: metadata.title,
    description: metadata.description,
    alternates: {
      canonical: url,
      languages: {
        en: "https://www.devjjdoria.com/en",
        es: "https://www.devjjdoria.com/es",
        it: "https://www.devjjdoria.com/it",
        ca: "https://www.devjjdoria.com/ca",
        nl: "https://www.devjjdoria.com/nl",
        "x-default": "https://www.devjjdoria.com/en",
      },
    },
    openGraph: {
      title: `JJDoria | ${metadata.title}`,
      description: metadata.description,
      url,
      siteName: "JJDoria",
      locale: metadata.ogLocale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `JJDoria | ${metadata.title}`,
      description: metadata.description,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = (await import(`@/messages/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}