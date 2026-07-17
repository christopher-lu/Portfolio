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

export type Technology = {
  name: string;
  icon: IconType;
};

export type TechnologySection = {
  title: string;
  items: Technology[];
};

export const technologySections: TechnologySection[] = [
  {
    title: "Languages",
    items: [
      {
        name: "JavaScript",
        icon: SiJavascript,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
      },
    ],
  },

  {
    title: "Frontend",
    items: [
      {
        name: "React",
        icon: SiReact,
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
      },
      {
        name: "Redux",
        icon: SiRedux,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },
      {
        name: "SASS",
        icon: SiSass,
      },
    ],
  },

  {
    title: "Backend",
    items: [
      {
        name: "Node.js",
        icon: SiNodedotjs,
      },
      {
        name: "Express.js",
        icon: SiExpress,
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
      },
      {
        name: "GraphQL",
        icon: SiGraphql,
      },
    ],
  },

  {
    title: "DevOps",
    items: [
      {
        name: "Docker",
        icon: SiDocker,
      },
      {
        name: "Kubernetes",
        icon: SiKubernetes,
      },
      {
        name: "Grafana",
        icon: SiGrafana,
      },
      {
        name: "Prometheus",
        icon: SiPrometheus,
      },
    ],
  },
];