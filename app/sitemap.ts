import type { MetadataRoute } from "next";

import { siteConfig } from "@/data/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return siteConfig.navigation.map(
    ({ path, priority, changeFrequency }) => ({
      url: `${siteConfig.url}${path}`,
      lastModified,
      changeFrequency,
      priority,
    })
  );
}