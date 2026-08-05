import {
  FaAws,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaSalesforce,
} from "react-icons/fa6";

import {
  SiCss,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGrafana,
  SiGraphql,
  SiGooglecloud,
  SiHelm,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiJira,
  SiKubernetes,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPrometheus,
  SiReact,
  SiRedux,
  SiRedis,
  SiSass,
  SiTailwindcss,
  SiTestinglibrary,
  SiTypescript,
  SiWebpack,
  SiZendesk,
} from "react-icons/si";

import {
  Boxes,
  Cloud,
  Code2,
  Monitor,
  Server,
  Wrench,
} from "lucide-react";

import type { Technology } from "@/types/technology";

export const technologyCategoryOrder = [
  "frontend",
  "backend",
  "mobile",
  "language",
  "cloud",
  "devops",
  "tooling",
  "platform",
  "support",
] as const;


export const technologyCategoryMetadata = {
  frontend: {
    title: "Frontend",
    description:
      "Modern user interfaces and client-side development.",
    icon: Monitor,
  },

  backend: {
    title: "Backend",
    description:
      "Server-side development, APIs, and databases.",
    icon: Server,
  },

  mobile: {
    title: "Mobile",
    description:
      "Cross-platform mobile application development.",
    icon: Monitor,
  },

  language: {
    title: "Languages",
    description:
      "Programming languages used throughout my projects.",
    icon: Code2,
  },

  cloud: {
    title: "Cloud",
    description:
      "Cloud platforms and managed infrastructure.",
    icon: Cloud,
  },

  devops: {
    title: "DevOps",
    description:
      "Containerization, orchestration, deployment, and monitoring.",
    icon: Boxes,
  },

  tooling: {
    title: "Tools & Workflow",
    description:
      "Testing, version control, build tooling, and project management.",
    icon: Wrench,
  },

  platform: {
    title: "Platforms",
    description: "Enterprise software and customer-facing platforms.",
    icon: Boxes,
  },

  support: {
    title: "Customer Success",
    description:
      "Technical support and customer success experience.",
    icon: Wrench,
  },
} as const;

export const technologies = {
  React: {
    label: "React",
    icon: SiReact,
    href: "https://react.dev",
    category: "frontend",
  },

  "React Native": {
    label: "React Native",
    href: "https://reactnative.dev",
    category: "mobile",
  },

  Expo: {
    label: "Expo",
    href: "https://expo.dev",
    category: "mobile",
  },

  "Next.js": {
    label: "Next.js",
    icon: SiNextdotjs,
    href: "https://nextjs.org",
    category: "frontend",
  },

  TypeScript: {
    label: "TypeScript",
    icon: SiTypescript,
    href: "https://www.typescriptlang.org",
    category: "language",
  },

  JavaScript: {
    label: "JavaScript",
    icon: SiJavascript,
    href: "https://developer.mozilla.org/docs/Web/JavaScript",
    category: "language",
  },

  "Node.js": {
    label: "Node.js",
    icon: SiNodedotjs,
    href: "https://nodejs.org",
    category: "backend",
  },

  Express: {
    label: "Express",
    icon: SiExpress,
    href: "https://expressjs.com",
    category: "backend",
  },

  NestJS: {
    label: "NestJS",
    icon: SiNestjs,
    href: "https://nestjs.com",
    category: "backend",
  },

  Prisma: {
    label: "Prisma",
    icon: SiPrisma,
    href: "https://www.prisma.io",
    category: "backend",
  },

  Redis: {
    label: "Redis",
    icon: SiRedis,
    href: "https://redis.io",
    category: "backend",
  },

  JWT: {
    label: "JWT",
    href: "https://jwt.io",
    category: "backend",
  },

  Docker: {
    label: "Docker",
    icon: SiDocker,
    href: "https://www.docker.com",
    category: "devops",
  },

  Kubernetes: {
    label: "Kubernetes",
    icon: SiKubernetes,
    href: "https://kubernetes.io",
    category: "devops",
  },

  Helm: {
    label: "Helm",
    icon: SiHelm,
    href: "https://helm.sh",
    category: "devops",
  },

  Prometheus: {
    label: "Prometheus",
    icon: SiPrometheus,
    href: "https://prometheus.io",
    category: "devops",
  },

  Grafana: {
    label: "Grafana",
    icon: SiGrafana,
    href: "https://grafana.com",
    category: "devops",
  },

  Firebase: {
    label: "Firebase",
    icon: SiFirebase,
    href: "https://firebase.google.com",
    category: "cloud",
  },

 "Google Cloud": {
  label: "Google Cloud",
  icon: SiGooglecloud,
  href: "https://cloud.google.com",
  category: "cloud",
},

  Cloud: {
  label: "Cloud",
  category: "cloud",
  },

  AWS: {
    label: "AWS",
    icon: FaAws,
    href: "https://aws.amazon.com",
    category: "cloud",
  },

  IAM: {
  label: "IAM",
  href: "https://aws.amazon.com/iam",
  category: "cloud",
},

EC2: {
  label: "EC2",
  href: "https://aws.amazon.com/ec2",
  category: "cloud",
},

S3: {
  label: "S3",
  href: "https://aws.amazon.com/s3",
  category: "cloud",
},

VPC: {
  label: "VPC",
  href: "https://aws.amazon.com/vpc",
  category: "cloud",
},

  "Tailwind CSS": {
    label: "Tailwind CSS",
    icon: SiTailwindcss,
    href: "https://tailwindcss.com",
    category: "frontend",
  },

  Jira: {
    label: "Jira",
    icon: SiJira,
    href: "https://www.atlassian.com/software/jira",
    category: "tooling",
  },

  Salesforce: {
    label: "Salesforce",
    icon: FaSalesforce,
    href: "https://www.salesforce.com",
    category: "platform",
  },

  Zendesk: {
    label: "Zendesk",
    icon: SiZendesk,
    href: "https://www.zendesk.com",
    category: "platform",
  },

  "REST APIs": {
    label: "REST APIs",
    category: "backend",
  },

  CRM: {
    label: "CRM",
    category: "platform",
  },

  "Technical Support": {
    label: "Technical Support",
    category: "support",
  },

  "Customer Success": {
    label: "Customer Success",
    category: "support",
  },

  VoIP: {
    label: "VoIP",
    category: "platform",
  },

  Lattice: {
    label: "Lattice",
    href: "https://lattice.com",
    category: "platform",
  },

  "Apple Ecosystem": {
    label: "Apple Ecosystem",
    category: "platform",
  },

  "Proprietary CRM": {
    label: "Proprietary CRM",
    category: "platform",
  },

  "Proprietary Voice and Chat Platform": {
    label: "Proprietary Voice and Chat Platform",
    category: "platform",
  },

  Redux: {
  label: "Redux",
  icon: SiRedux,
  href: "https://redux.js.org",
  category: "frontend",
},

HTML5: {
  label: "HTML5",
  icon: SiHtml5,
  href: "https://developer.mozilla.org/docs/Web/HTML",
  category: "frontend",
},

CSS3: {
  label: "CSS3",
  icon: SiCss,
  href: "https://developer.mozilla.org/docs/Web/CSS",
  category: "frontend",
},

Sass: {
  label: "Sass",
  icon: SiSass,
  href: "https://sass-lang.com",
  category: "frontend",
},

Bootstrap: {
  label: "Bootstrap",
  icon: FaBootstrap,
  href: "https://getbootstrap.com",
  category: "frontend",
},

GraphQL: {
  label: "GraphQL",
  icon: SiGraphql,
  href: "https://graphql.org",
  category: "backend",
},

MongoDB: {
  label: "MongoDB",
  icon: SiMongodb,
  href: "https://mongodb.com",
  category: "backend",
},

PostgreSQL: {
  label: "PostgreSQL",
  icon: SiPostgresql,
  href: "https://postgresql.org",
  category: "backend",
},  

Git: {
  label: "Git",
  icon: FaGitAlt,
  href: "https://git-scm.com",
  category: "tooling",
},

GitHub: {
  label: "GitHub",
  icon: FaGithub,
  href: "https://github.com",
  category: "tooling",
},

Webpack: {
  label: "Webpack",
  icon: SiWebpack,
  href: "https://webpack.js.org",
  category: "tooling",
},

Jest: {
  label: "Jest",
  icon: SiJest,
  href: "https://jestjs.io",
  category: "tooling",
},

"React Testing Library": {
  label: "React Testing Library",
  icon: SiTestinglibrary,
  href: "https://testing-library.com/docs/react-testing-library/intro",
  category: "tooling",
},
} as const satisfies Record<string, Technology>;

export type TechnologyName = keyof typeof technologies;

/**
 * Returns metadata for a single technology.
 */
export function getTechnology(name: TechnologyName): Technology {
  return technologies[name];
}

/**
 * Returns the entire technology registry.
 * Useful for the Skills page, filters, and future navigation.
 */
export function getTechnologies(): typeof technologies {
  return technologies;
}

export function getTechnologyNames(): TechnologyName[] {
  return Object.keys(technologies) as TechnologyName[];
}

export function getTechnologyCategories(): Technology["category"][] {
  return [
    ...new Set(
      Object.values(technologies).map(
        (technology) => technology.category
      ),
    ),
  ];
}

export function getTechnologiesByCategory(
  category: Technology["category"]
): TechnologyName[] {
  return (Object.entries(technologies) as [TechnologyName, Technology][])
    .filter(([, technology]) => technology.category === category)
    .map(([name]) => name)
    .sort((a, b) =>
  technologies[a].label.localeCompare(
    technologies[b].label
  )
);
}


export function getOrderedTechnologyCategories(): Technology["category"][] {
  return technologyCategoryOrder.filter(
    (category) => getTechnologiesByCategory(category).length > 0
  );
}