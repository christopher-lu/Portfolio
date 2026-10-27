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
      "DIDT is a cross-platform habit tracker designed to make daily check-ins quick and progress easy to understand. It supports check-off and quantity-based habits, flexible schedules, calendar history, and recoverable habit management. The React Native and Expo app uses a shared NestJS API backed by PostgreSQL, which the Next.js web client is also integrating.",

    impact:
      "Combined a simple daily workflow with reliable tracking rules, so users can change goals, correct entries, and restore deleted habits without distorting their progress. A shared NestJS backend supports consistent behavior across the mobile app and the web experience in development.",

    category: "Full Stack",

    status: "In Progress",

    featured: true,

    featuredPriority: 1,

    displayOrder: 1,

    media: {
      cover: "/images/projects/didt/showcase-v3-today-overview.webp",
      coverLayout: "banner",
      showcaseDisclosure:
        "The images above are composed product showcases. The working app demo below shows actual interactions captured in the iOS Simulator.",
      demoVideo: "/videos/projects/didt-walkthrough.mp4",
      poster: "/images/projects/didt/didt-walkthrough-poster.jpg",
      demoVideoHeading: "Working App Demo",
      demoVideoLayout: "portrait",
      demoVideoDescription:
        "Recorded directly from DIDT running in the iOS Simulator. The walkthrough shows category and habit creation, custom increments and units, progress corrections and undo, calendar history, deletion and restoration, and theme switching.",
      // Seven coordinated 1672×941 showcase images; use the same first image for the featured cover.
      screenshots: [
        {
          src: "/images/projects/didt/showcase-v3-today-overview.webp",
          alt: "DIDT Today dashboard showing scheduled habits and daily progress",
          platform: "showcase",
          caption:
            "Daily Progress: Check scheduled habits and see progress at a glance.",
        },
        {
          src: "/images/projects/didt/showcase-v3-flexible-tracking.webp",
          alt: "DIDT tracking options for check-off and quantity-based habits",
          platform: "showcase",
          caption:
            "Flexible Tracking: Check habits off or record quantities, customize units and tap increments, and keep priorities in view.",
        },
        {
          src: "/images/projects/didt/showcase-v3-history-calendar.webp",
          alt: "DIDT history calendar with completed habits and a progress summary",
          platform: "showcase",
          caption:
            "History & Insights: Explore past check-ins and patterns over time.",
        },
        {
          src: "/images/projects/didt/showcase-v3-create-habit.webp",
          alt: "DIDT habit creation screen with category, priority, and scheduling options",
          platform: "showcase",
          caption:
            "Create a Habit: Set up a routine with the schedule and tracking options that fit your goal.",
        },
        {
          src: "/images/projects/didt/showcase-v3-sign-in.webp",
          alt: "DIDT sign-in screen",
          platform: "showcase",
          caption:
            "Sign In: Return to your routines with a straightforward sign-in experience.",
        },
        {
          src: "/images/projects/didt/showcase-v3-create-account.webp",
          alt: "DIDT account registration screen",
          platform: "showcase",
          caption:
            "Create Account: Set up an account to begin tracking your habits.",
        },
        {
          src: "/images/projects/didt/showcase-v3-appearance.webp",
          alt: "DIDT appearance settings showing available themes",
          platform: "showcase",
          caption: "Appearance: Choose a theme that suits your preferences.",
        },
      ],
    },

    milestones: [
      {
        platform: "Mobile",
        status: "Alpha launched",
        description:
          "React Native and Expo app with daily tracking, habit management, calendar history, recovery, and theme support.",
      },
      {
        platform: "Backend",
        status: "Functional",
        description:
          "Shared NestJS REST API with Prisma and PostgreSQL, handling authentication, scheduling, tracking, and history for both clients.",
      },
      {
        platform: "Web",
        status: "Approaching Alpha",
        description:
          "Next.js client integrating authentication, dashboard views, habits, categories, and history through the shared API.",
      },
    ],

    technologies: [
      "Next.js",
      "Turbopack",
      "React",
      "TanStack Query",
      "TypeScript",
      "Tailwind CSS",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "React Native",
      "Expo",
      "Metro",
      "Xcode",
      "Android Studio",
      "Docker",
      "Railway",
      "JWT",
      "REST APIs",
    ],

    highlights: [
      "Developed the React Native and Expo client for habit management and daily check-ins",
      "Implemented schedule-aware check-off and quantity-based tracking with undo support",
      "Built calendar history, completion analytics, and a 30-day habit recovery workflow",
      "Extending shared API contracts and tracking rules to the Next.js web client",
    ],

    metrics: [],

    architecture: didtArchitecture,

    engineeringStory: didtStory,

    resourceNotice:
      "DIDT's source repositories are private while the project is in development.",

    resources: [
      {
        type: "demo",
        label: "Demo",
        href: "/projects/didt#project-demo",
        public: true,
      },
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
      demoVideo: "/videos/projects/klusterbuddemo.mp4",
      demoVideoHeading: "Working App Demo",
      demoVideoLayout: "landscape",
      demoVideoDescription:
        "A recorded walkthrough of the KlusterBud interface and its Kubernetes monitoring workflow.",
      poster: "/images/projects/klusterbuddash.webp",
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
        href: "/projects/klusterbud#project-demo",
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

    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],

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
