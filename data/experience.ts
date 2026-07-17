export type Experience = {
  id: string;
  company: string;
 role: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    id: "current",

    company: "Company Name",

    role: "Software Engineer",

    location: "New York, NY",

    start: "Jan 2024",

    end: "Present",

    bullets: [
      "Accomplished X by doing Y resulting in Z.",
      "Built scalable cloud-native applications.",
      "Improved deployment efficiency through automation.",
    ],
  },
];