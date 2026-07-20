import type { MetadataRoute } from "next";

//replace sitemap with deployed url
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://YOUR-DOMAIN.vercel.app/sitemap.xml",
  };
}