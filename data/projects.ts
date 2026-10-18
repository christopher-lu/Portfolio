import type { Project } from "@/types/project";

import {
  didtArchitecture,
  klusterbudArchitecture,
  portfolioArchitecture,
} from "./architecture";

import {
  didtStory,
  klusterbudStory,
  portfolioStory,
} from "./engineering-stories";

export const projects: Project[] = [
  {
    id: "didt",

    title: "Did I Do That (DIDT)",

    tagline: "Small habits. Daily wins. Lasting growth.",

    description:
      "DIDT is a cross-platform habit tracking application built around quick daily tracking, recoverable habit management, and trustworthy progress. Its React Native mobile client has reached the alpha milestone, supported by a shared NestJS API and PostgreSQL database. The Next.js web client is being developed against the same backend contracts.",

    impact:
      "Delivered a validated mobile alpha backed by server-authoritative tracking, calendar-aware eligibility, history, and recovery workflows. The same API now supports ongoing web alpha development without duplicating core domain rules across clients.",

    category: "Full Stack",

    status: "In Progress",

    featured: true,

    featuredPriority: 1,

    displayOrder: 1,

    media: {
      placeholderTitle: "DIDT mobile alpha",

      placeholderDescription:
        "Mobile alpha is functional and validated. Product screenshots and a walkthrough are being prepared.",
      // Add real screenshot paths and a demoVideo after the assets are approved.
      // See docs/didt-showcase-assets.md for the expected filenames and metadata.
    },

    milestones: [
      {
        platform: "Mobile",
        status: "Alpha launched",
        description:
          "React Native and Expo client with habit management, daily tracking, history, recovery, and theme support.",
      },
      {
        platform: "Backend",
        status: "Functional",
        description:
          "Shared NestJS API with PostgreSQL/Prisma persistence and backend-owned tracking rules for mobile and web.",
      },
      {
        platform: "Web",
        status: "Approaching alpha",
        description:
          "Next.js client integrating the same authenticated API, dashboard, habits, categories, and history workflows.",
      },
    ],

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
      "JWT",
      "REST APIs",
    ],

    highlights: [
      "Validated React Native / Expo mobile alpha with shared NestJS backend",
      "Backend-authoritative Today eligibility, Boolean and quantitative tracking",
      "Calendar history, completion analytics, and 30-day lifecycle recovery",
      "Next.js web application progressing toward the mobile alpha feature set",
    ],

    metrics: [],

    architecture: didtArchitecture,

    engineeringStory: didtStory,

    resourceNotice:
      "DIDT source repositories remain private during alpha development.",

    resources: [
      {
        type: "github",
        label: "Backend API",
        href: "https://github.com/christopher-lu/didt-backend",
        public: false,
      },
      {
        type: "github",
        label: "Web App",
        href: "https://github.com/christopher-lu/didt-web",
        public: false,
      },
      {
        type: "github",
        label: "Mobile App",
        href: "https://github.com/christopher-lu/didt-mobile",
        public: false,
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

    architecture: klusterbudArchitecture,

    engineeringStory: klusterbudStory,

    resourceNotice: undefined,

    resources: [
      {
        type: "github",
        label: "Repository",
        href: "https://github.com/oslabs-beta/KlusterBud",
        public: true,
      },
      {
        type: "demo",
        label: "Demo",
        href: "/videos/projects/klusterbuddemo.mp4",
        public: true,
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

    displayOrder: 3,

    image: "/images/projects/portfolio.webp",

    media: {
      cover: "/images/projects/portfolio.webp",
    },

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

    architecture: portfolioArchitecture,

    engineeringStory: portfolioStory,

    resourceNotice: undefined,

    resources: [
      {
        type: "github",
        label: "Repository",
        href: "https://github.com/christopher-lu/Portfolio",
        public: true,
      },
    ],
  },
];