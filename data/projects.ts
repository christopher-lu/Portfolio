import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "klusterbud",

    title: "KlusterBud",

    tagline: "Kubernetes monitoring platform",

    description:
      "A full-stack Kubernetes observability platform enabling developers to monitor replica set health, detect anomalies, and visualize Prometheus metrics through an intuitive dashboard.",

    impact:
      "Improved Kubernetes debugging by surfacing replica set health, Prometheus metrics, and anomaly detection in one developer-focused interface.",

    technologies: [
      "React",
      "Node.js",
      "Express",
      "Docker",
      "Kubernetes",
      "Helm",
      "Prometheus",
      "Grafana",
      "AWS",
    ],

    highlights: [
      "Custom PromQL queries against live Prometheus instances",
      "Visualization of replica set anomalies",
      "Continuous monitoring of Kubernetes workloads",
    ],

    github: "https://github.com/oslabs-beta/KlusterBud",

    website: "https://klusterbud.com",

    status: "Completed",

    category: "Full Stack",

    displayOrder: 1,
  },

  {
    id: "portfolio",

    title: "Developer Portfolio",

    tagline: "Modern portfolio built with Next.js",

    description:
      "A responsive portfolio showcasing software engineering projects, publications, technical skills, and professional experience.",

    impact:
      "Designed a reusable component architecture emphasizing accessibility, responsiveness, and maintainability.",

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],

    highlights: [
      "Reusable component architecture",
      "Dark & Light theme support",
      "Responsive design",
    ],

    github: "https://github.com/christopher-lu/portfolio",

    status: "Completed",

    category: "Frontend",

    displayOrder: 2,
  },
];