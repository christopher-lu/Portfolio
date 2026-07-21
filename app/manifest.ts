import type { MetadataRoute } from "next";

import { siteConfig } from "@/data/siteConfig";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.applicationName,

    short_name: siteConfig.name,

    description: siteConfig.description,

    start_url: "https://christopherlu.dev",

    display: "standalone",

    background_color: "#ffffff",

    theme_color: "#2563eb",

    lang: "en-US",

    categories: [
      "portfolio",
      "developer",
      "technology",
    ],

    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}