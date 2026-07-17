import type { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    id: "current",

    company: "Company Name",

    role: "Software Engineer",

    location: "New York, NY",

    startDate: "2024",

    endDate: "Present",

    current: true,

    description:
      "Developing scalable web applications using modern frontend and backend technologies.",

    achievements: [
      "Built reusable React component libraries",
      "Improved application performance",
      "Designed RESTful APIs",
    ],

    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "AWS",
    ],
  },
];