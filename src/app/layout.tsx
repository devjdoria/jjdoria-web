import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JJDoria | Software development",
  description:
    "Modern web-sites, apps and business automation.",
  openGraph: {
    title: "JJDoria",
    description:
      "Software development and AI automation.",
    url: "https://www.devjjdoria.com",
    siteName: "JJDoria",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
