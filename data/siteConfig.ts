export interface SiteConfig {
  name: string;
  title: string;
  applicationName: string;
  description: string;
  tagline: string;
  url: string;
  locale: string;
  location: string;

  contact: {
    email: string;
  };

  links: {
    github: string;
    linkedin: string;
  };

  keywords: string[];

  technologies: string[];
}

export const siteConfig: SiteConfig = {
  name: "Christopher Lu",

  title: "Full Stack Software Engineer",

  applicationName: "Christopher Lu Portfolio",

  description:
    "Full Stack Software Engineer specializing in React, Next.js, TypeScript, Node.js, and modern web technologies.",

  tagline:
    "Building modern, scalable web applications with React, Next.js, and TypeScript.",

  url: "https://christopherlu.dev",

  locale: "en_US",

  location: "New York, NY",

  contact: {
    email: "lu.christopher.m@gmail.com",
  },

  links: {
    github: "https://github.com/christopher-lu",
    linkedin: "https://www.linkedin.com/in/christopher-lu19/",
  },

  keywords: [
    "Christopher Lu",
    "Software Engineer",
    "Full Stack Engineer",
    "Frontend Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Portfolio",
    "Web Developer",
  ],

  technologies: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "Kubernetes",
    "AWS",
  ],
};