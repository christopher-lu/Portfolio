import type { ArchitectureDiagram } from "@/types/architecture";

export const portfolioArchitecture: ArchitectureDiagram = {
  title: "System Architecture",

  layers: [
    {
      id: "frontend",
      title: "Frontend",

      details: [
        "Next.js",
        "React",
        "TypeScript",
      ],
    },

    {
      id: "content",
      title: "Content",

      details: [
        "Typed Data Models",
        "Engineering Stories",
      ],
    },

    {
      id: "deployment",
      title: "Deployment",

      details: [
        "Vercel",
      ],
    },
  ],
};