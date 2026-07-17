import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "portfolio",

    title: "Developer Portfolio",

    tagline: "Modern portfolio built with Next.js",

    description:
      "A responsive developer portfolio showcasing projects, technical skills, and professional experience.",

    

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],

    highlights: [
      "Reusable component architecture",
      "Dark & Light Theme",
      "Responsive Design",
    ],

    github: "https://github.com/christopher-lu/portfolio",


    featured: true,

    status: "Completed",

    category: "Frontend",
  },

  {
    id: "staffing-platform",

    title: "Healthcare Staffing Platform",

    tagline: "Full-stack staffing management system",

    description:
      "Platform for managing healthcare professionals, scheduling, and staffing workflows.",

    

    technologies: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
    ],

    highlights: [
      "Role-based authentication",
      "Scheduling dashboard",
      "REST API architecture",
    ],

    github: "https://github.com/yourusername/staffing-platform",

    featured: true,

    status: "In Progress",

    category: "Full Stack",
  },
];