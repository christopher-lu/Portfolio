import type { ArchitectureDiagram } from "@/types/architecture";

export const klusterbudArchitecture: ArchitectureDiagram = {
  title: "System Architecture",

  layers: [
    {
      id: "frontend",
      title: "Dashboard",

      details: [
        "React",
      ],
    },

    {
      id: "backend",
      title: "Backend API",

      details: [
        "Node.js",
        "Express",
      ],
    },

    {
      id: "metrics",
      title: "Metrics",

      details: [
        "Prometheus",
        "PromQL",
      ],
    },

    {
      id: "cluster",
      title: "Infrastructure",

      details: [
        "Kubernetes",
      ],
    },
  ],
};