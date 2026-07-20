import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Christopher Lu Portfolio",
    short_name: "Christopher Lu",
    description:
      "Full Stack Software Engineer specializing in React, Next.js, TypeScript, and cloud-native application development.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2563eb",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}