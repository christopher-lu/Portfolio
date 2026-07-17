import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "portfolio",

    title: "Developer Portfolio",

    tagline: "Modern portfolio built with Next.js",

    description:
      "A responsive developer portfolio showcasing projects, technical skills, and professional experience.",

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],

    highlights: [
      "Reusable component architecture",
      "Dark & Light Theme",
      "Responsive Design",
    ],

    github: "https://github.com/christopher-lu/portfolio",


    featured: true,

    status: "Completed",

    category: "Frontend",
  },

  {
    id: "staffing-platform",

    title: "Klusterbud",

    tagline: "Kubernetes monitoring tool",

    description:
      "Monitoring tool for detecting anomolies within replica sets of Kubernetes clusters.",

    

    technologies: [
      "Kubernetes",
      "Docker",
      "Helm",
      "Grafana",
      "Prometheus",
      "React",
      "Node.js",
      "Express",
      "AWS",
      
      
    ],

    highlights: [
      "Custom PromQL queries to running Prometheus instances",
      "Visulaization of replica set anomlies detected",
      "Continuous monitoring of selected replica sets"
      
    ],

    github: "https://github.com/oslabs-beta/KlusterBud",

    featured: true,

    status: "Completed",

    category: "Full Stack",
  },
];