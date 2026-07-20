export interface NavigationItem {
  path: string;
  priority: number;
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
}

export interface SiteConfig {
  // Identity
  name: string;
  author: string;

  /**
   * Site title used for SEO and metadata.
   */
  title: string;

  /**
   * Professional title used for Schema.org and UI.
   */
  jobTitle: string;

  applicationName: string;

  // SEO
  description: string;
  tagline: string;
  keywords: string[];

  // Site
  url: string;
  locale: string;
  location: string;
  socialImage: string;

  // Contact
  contact: {
    email: string;
  };

  // External Links
  links: {
    github: string;
    linkedin: string;
  };

  // Featured Technologies
  technologies: string[];

  // Sitemap
  navigation: NavigationItem[];
}

export const siteConfig: SiteConfig = {
  // Identity
  name: "Christopher Lu",

  author: "Christopher Lu",

  title: "Christopher Lu | Full Stack Software Engineer",

  jobTitle: "Full Stack Software Engineer",

  applicationName: "Christopher Lu Portfolio",

  // SEO
  description:
    "Full Stack Software Engineer specializing in React, Next.js, TypeScript, Node.js, and modern web technologies.",

  tagline:
    "Building modern, scalable web applications with React, Next.js, and TypeScript.",

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
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "Kubernetes",
    "AWS",
    "Portfolio",
    "Web Developer",
    "New York",
  ],

  // Site
  url: "https://christopherlu.dev",

  locale: "en_US",

  location: "New York, NY",

  socialImage: "/opengraph-image",

  // Contact
  contact: {
    email: "lu.christopher.m@gmail.com",
  },

  // External Links
  links: {
    github: "https://github.com/christopher-lu",
    linkedin: "https://www.linkedin.com/in/christopher-lu19/",
  },

  // Featured Technologies
  technologies: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "Kubernetes",
    "AWS",
  ],

  // Sitemap
  navigation: [
    {
      path: "",
      priority: 1,
      changeFrequency: "weekly",
    },
    {
      path: "/about",
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      path: "/experience",
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      path: "/projects",
      priority: 0.9,
      changeFrequency: "weekly",
    },
    {
      path: "/skills",
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      path: "/certifications",
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      path: "/publications",
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      path: "/contact",
      priority: 0.7,
      changeFrequency: "yearly",
    },
  ],
};