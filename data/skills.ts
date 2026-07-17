import type { SkillCategory } from "@/types/skill";

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages",
    skills: [
      "TypeScript",
      "JavaScript",
      "Python",
      "SQL",
      "Java",
      "C#",
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Redux",
      "HTML5",
      "CSS3",
    ],
  },
  {
    id: "backend",
    title: "Backend",
    skills: [
      "Node.js",
      "Express",
      ".NET",
      "Spring Boot",
      "REST APIs",
    ],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    skills: [
      "AWS",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
    ],
  },
  {
    id: "databases",
    title: "Databases",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "SQL Server",
    ],
  },
];