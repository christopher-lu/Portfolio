import type { Education } from "@/types/education";

export const education: Education[] = [
  {
    id: "masters",

    institution: "University Name",

    degree: "Master of Science",

    fieldOfStudy: "Computer Science",

    location: "New York, NY",

    startDate: "2022",

    endDate: "2024",

    description:
      "Focused on software engineering, cloud computing, and distributed systems.",

    achievements: [
      "Graduate Research Assistant",
      "Dean's List",
      "Graduate with Honors",
    ],
  },

  {
    id: "bachelors",

    institution: "University Name",

    degree: "Bachelor of Science",

    fieldOfStudy: "Information Technology",

    location: "New York, NY",

    startDate: "2018",

    endDate: "2022",

    description:
      "Coursework emphasized software development, databases, and networking.",

    achievements: [
      "Capstone Project",
      "Academic Scholarship",
    ],
  },
];