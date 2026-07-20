import type { Education } from "@/types/education";

export const education: Education[] = [
  {
    id: "codesmith",

    institution: "Codesmith",

    program: "Software Engineering Immersive",

    fieldOfStudy: "Full Stack Software Engineering",

    location: "New York, NY",

    startDate: "2023",

    endDate: "2023",

    description:
      "Completed an advanced software engineering immersive focused on full stack application development, computer science fundamentals, scalable system design, and collaborative Agile software development through project-based learning.",

    highlights: [
      "Built production-scale full stack applications using React, Next.js, TypeScript, Node.js, Express.js, PostgreSQL, and MongoDB",
      "Collaborated in Agile engineering teams using Git workflows, pair programming, and code reviews",
      "Designed and deployed scalable applications featuring REST APIs, authentication, database design, and modern software engineering best practices",
    ],
  },

  {
    id: "stony-brook",

    institution: "Stony Brook University",

    program: "Undergraduate Biology Program",

    fieldOfStudy: "Biology",

    location: "Stony Brook, NY",

    startDate: "2008",

    endDate: "2013",

    description:
      "Completed undergraduate coursework in Biology, developing a strong foundation in analytical thinking, scientific research, data interpretation, and evidence-based problem solving.",

    highlights: [
      "Completed undergraduate coursework in Biology",
      "Developed analytical and quantitative problem-solving skills",
      "Applied scientific methodology through laboratory coursework",
    ],
  },
];