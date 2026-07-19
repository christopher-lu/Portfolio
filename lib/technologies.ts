import { FaAws, FaSalesforce } from "react-icons/fa6";
import {
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGrafana,
  SiGooglecloud,
  SiHelm,
  SiJavascript,
  SiJira,
  SiKubernetes,
  SiNextdotjs,
  SiNodedotjs,
  SiPrometheus,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiZendesk,
} from "react-icons/si";

import type { Technology } from "@/types/technology";

export const technologies = {
  React: {
    label: "React",
    icon: SiReact,
    href: "https://react.dev",
    category: "frontend",
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

  "Google Cloud Platform": {
    label: "Google Cloud Platform",
    icon: SiGooglecloud,
    href: "https://cloud.google.com",
    category: "cloud",
  },

  AWS: {
    label: "AWS",
    icon: FaAws,
    href: "https://aws.amazon.com",
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
export function getTechnologies() {
  return technologies;
}