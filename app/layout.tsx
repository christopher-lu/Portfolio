import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import { siteConfig } from "@/data/siteConfig";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: `${siteConfig.name} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,

  applicationName: siteConfig.applicationName,

  keywords: siteConfig.keywords,

  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],

  creator: siteConfig.name,

  publisher: siteConfig.name,

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",

    url: siteConfig.url,

    siteName: siteConfig.name,

    title: `${siteConfig.name} | ${siteConfig.title}`,

    description: siteConfig.description,

    locale: siteConfig.locale,

    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Portfolio`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: `${siteConfig.name} | ${siteConfig.title}`,

    description: siteConfig.description,

    images: ["/opengraph-image"],
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
        {/* ThemeProvider */}
        {/* Navbar */}
        {children}
        {/* Footer */}
      </body>
    </html>
  );
}