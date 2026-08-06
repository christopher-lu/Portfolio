import type { ArchitectureDiagram } from "@/types/architecture";

export const didtArchitecture: ArchitectureDiagram = {
  title: "System Architecture",

  layers: [
    {
      id: "web",
      title: "Web Application",

      details: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
      ],
    },

    {
      id: "mobile",
      title: "Mobile Application",

      details: [
        "React Native",
        "Expo",
      ],
    },

    {
      id: "backend",
      title: "Backend API",

      details: [
        "NestJS",
        "REST API",
        "JWT Authentication",
      ],
    },

    {
      id: "database",
      title: "Database",

      details: [
        "PostgreSQL",
        "Prisma ORM",
      ],
    },

    {
      id: "cloud",
      title: "Infrastructure",

      details: [
        "AWS",
      ],
    },
  ],
};