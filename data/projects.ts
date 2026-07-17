export type Project = {
  id: string;
  title: string;
  description: string;

  technologies: string[];

  github: string;

  demo?: string;

  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "portfolio",

    title: "Developer Portfolio",

    description:
      "Responsive portfolio built with Next.js using reusable components, dark mode, and a scalable design system.",

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],

    github: "https://github.com/christopher-lu",

    demo: "",

    featured: true,
  },
];