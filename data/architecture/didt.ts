import type { ArchitectureDiagram } from "@/types/architecture";

export const didtArchitecture: ArchitectureDiagram = {
  title: "Cross-Platform System Architecture",

  // Each client connects directly to the same backend.
  parallelClients: [
    {
      id: "mobile",
      title: "Mobile Application — Alpha",
      details: ["React Native", "Expo", "TypeScript"],
    },
    {
      id: "web",
      title: "Web Application — In Development",
      details: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    },
  ],

  layers: [
    {
      id: "backend",
      title: "Shared Backend API",
      details: [
        "NestJS REST API",
        "JWT Authentication",
        "Authoritative Tracking & History",
      ],
    },
    {
      id: "database",
      title: "Persistence",
      details: ["PostgreSQL", "Prisma ORM"],
    },
  ],
};
