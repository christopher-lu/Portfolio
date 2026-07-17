import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiSass,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiDocker,
  SiKubernetes,
  SiGrafana,
  SiPrometheus,
} from "react-icons/si";

import { IconType } from "react-icons";

export type TechnologyId =
  | "javascript"
  | "typescript"
  | "react"
  | "nextjs"
  | "redux"
  | "tailwind"
  | "sass"
  | "node"
  | "express"
  | "mongodb"
  | "postgresql"
  | "graphql"
  | "docker"
  | "kubernetes"
  | "grafana"
  | "prometheus";

export type Technology = {
  id: TechnologyId;
  name: string;
  icon: IconType;
  color: string;
};

export type TechnologySection = {
  title: string;
  items: Technology[];
};

export const technologyRegistry: Record<TechnologyId, Technology> = {
  javascript: {
    id: "javascript",
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
  },

  typescript: {
    id: "typescript",
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
  },

  react: {
    id: "react",
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
  },

  nextjs: {
    id: "nextjs",
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#000000",
  },

  redux: {
    id: "redux",
    name: "Redux",
    icon: SiRedux,
    color: "#764ABC",
  },

  tailwind: {
    id: "tailwind",
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#38BDF8",
  },

  sass: {
    id: "sass",
    name: "SASS",
    icon: SiSass,
    color: "#CC6699",
  },

  node: {
    id: "node",
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#339933",
  },

  express: {
    id: "express",
    name: "Express.js",
    icon: SiExpress,
    color: "#888888",
  },

  mongodb: {
    id: "mongodb",
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
  },

  postgresql: {
    id: "postgresql",
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#336791",
  },

  graphql: {
    id: "graphql",
    name: "GraphQL",
    icon: SiGraphql,
    color: "#E10098",
  },

  docker: {
    id: "docker",
    name: "Docker",
    icon: SiDocker,
    color: "#2496ED",
  },

  kubernetes: {
    id: "kubernetes",
    name: "Kubernetes",
    icon: SiKubernetes,
    color: "#326CE5",
  },

  grafana: {
    id: "grafana",
    name: "Grafana",
    icon: SiGrafana,
    color: "#F46800",
  },

  prometheus: {
    id: "prometheus",
    name: "Prometheus",
    icon: SiPrometheus,
    color: "#E6522C",
  },
};

export const technologySections: TechnologySection[] = [
  {
    title: "Languages",
    items: [
      technologyRegistry.javascript,
      technologyRegistry.typescript,
    ],
  },

  {
    title: "Frontend",
    items: [
      technologyRegistry.react,
      technologyRegistry.nextjs,
      technologyRegistry.redux,
      technologyRegistry.tailwind,
      technologyRegistry.sass,
    ],
  },

  {
    title: "Backend",
    items: [
      technologyRegistry.node,
      technologyRegistry.express,
      technologyRegistry.mongodb,
      technologyRegistry.postgresql,
      technologyRegistry.graphql,
    ],
  },

  {
    title: "DevOps",
    items: [
      technologyRegistry.docker,
      technologyRegistry.kubernetes,
      technologyRegistry.grafana,
      technologyRegistry.prometheus,
    ],
  },
];