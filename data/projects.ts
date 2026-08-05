import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "didt",

    title: "DIDT",

    tagline: "Cross-platform digital habit tracking ecosystem",

    description:
      "A full-stack habit tracking platform consisting of a responsive web application, native mobile application, and NestJS backend designed to help users build habits, monitor progress, and visualize long-term analytics across devices.",

    impact:
      "Designed as a scalable multi-platform architecture with shared business logic powering both web and mobile experiences while emphasizing maintainability, accessibility, and long-term extensibility.",

    category: "Full Stack",

    status: "In Progress",

    featured: true,

    featuredPriority: 1,

    displayOrder: 1,

    image: "/images/projects/didt.webp",

    media: {
      cover: "/images/projects/didt.webp",
    },

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "React Native",
      "Expo",
      "Docker",
      "AWS",
      "JWT",
      "REST APIs",
    ],

    highlights: [
      "Cross-platform architecture with shared NestJS backend",
      "Secure JWT authentication and role-based authorization",
      "Real-time habit analytics and progress tracking",
      "Responsive web and native mobile experiences",
    ],

    metrics: [],

    resources: [
      {
        type: "github",
        label: "Backend API",
        href: "https://github.com/christopher-lu/didt-backend",
      },
      {
        type: "github",
        label: "Web App",
        href: "https://github.com/christopher-lu/didt-web",
      },
      {
        type: "github",
        label: "Mobile App",
        href: "https://github.com/christopher-lu/didt-mobile",
      },
    ],
  },

  {
    id: "klusterbud",

    title: "KlusterBud",

    tagline: "Kubernetes monitoring platform",

    description:
      "A full-stack Kubernetes observability platform enabling developers to monitor replica set health, detect anomalies, and visualize Prometheus metrics through an intuitive dashboard.",

    impact:
      "Improved Kubernetes debugging by surfacing replica set health, Prometheus metrics, and anomaly detection in one developer-focused interface.",

    category: "Full Stack",

    status: "Completed",

    featured: true,

    featuredPriority: 2,

    displayOrder: 2,

    image: "/images/projects/klusterbuddash.webp",

    video: "/videos/projects/klusterbuddemo.mp4",

    media: {
      cover: "/images/projects/klusterbuddash.webp",
      video: "/videos/projects/klusterbuddemo.mp4",
    },

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

    metrics: [],

    engineeringStory: {
      featured: true,

      sections: [
        {
          id: "problem",

          type: "problem",

          title: "Problem",

          content:
            "Debugging Kubernetes clusters typically requires switching between kubectl, Prometheus, and Grafana, forcing developers to piece together cluster health across multiple tools."
        },

        {
          id: "results",

          type: "results",

          title: "Results",

          content:
            "KlusterBud consolidated observability into a single dashboard, allowing developers to monitor replica health, visualize Prometheus metrics, and identify anomalies without leaving the application."
        }
      ]
    },

    resources: [
      {
        type: "github",
        label: "Repository",
        href: "https://github.com/oslabs-beta/KlusterBud",
      },
      {
        type: "demo",
        label: "Demo",
        href: "/videos/projects/klusterbuddemo.mp4",
      },
    ],
  },

  {
    id: "portfolio",

    title: "Developer Portfolio",

    tagline: "Modern portfolio built with Next.js",

    description:
      "A responsive portfolio showcasing software engineering projects, publications, technical skills, and professional experience with reusable UI components and modern web technologies.",

    impact:
      "Designed a reusable component architecture emphasizing accessibility, responsive design, maintainability, and scalability for future portfolio growth.",

    category: "Frontend",

    status: "Completed",

    featured: false,

    image: "/images/projects/portfolio.webp",

    media: {
      cover: "/images/projects/portfolio.webp",
    },

    displayOrder: 3,

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
      "SEO-optimized App Router architecture",
    ],

    metrics: [],

    resources: [
      {
        type: "github",
        label: "Repository",
        href: "https://github.com/christopher-lu/Portfolio",
      },
    ],
  },
];