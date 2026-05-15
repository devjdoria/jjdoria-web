import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.devjjdoria.com"),
  title: {
    default: "JJDoria | Software Development",
    template: "%s | JJDoria",
  },
  description:
    "Modern websites, web applications and business automation for entrepreneurs and small businesses.",
  applicationName: "JJDoria",
  authors: [{ name: "Jeremy Doria" }],
  creator: "Jeremy Doria",
  publisher: "JJDoria",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "JJDoria | Software Development",
    description:
      "Modern websites, web applications and business automation for entrepreneurs and small businesses.",
    url: "https://www.devjjdoria.com/en",
    siteName: "JJDoria",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "JJDoria | Software Development",
    description:
      "Modern websites, web applications and business automation for entrepreneurs and small businesses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
