import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import ThemeProvider from "@/providers/ThemeProvider";
import Navbar from "@/components/navigation/Navbar";
import { siteConfig } from "@/data/siteConfig";
import StructuredData from "@/components/seo/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,

  applicationName: siteConfig.applicationName,

  keywords: siteConfig.keywords,

  authors: [
    {
      name: siteConfig.author,
    },
  ],

  creator: siteConfig.author,

  publisher: siteConfig.author,

  alternates: {
    canonical: siteConfig.url,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: new URL(siteConfig.socialImage, siteConfig.url).toString(),
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      new URL(siteConfig.socialImage, siteConfig.url).toString(),
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <StructuredData />

          <Navbar />

          <main className="pt-20">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}