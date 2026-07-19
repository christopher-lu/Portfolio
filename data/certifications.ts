import type { Certification } from "@/types/certification";

export const certifications: Certification[] = [
  {
    id: "aws-ccp",

    title: "AWS Certified Cloud Practitioner",

    issuer: "Amazon Web Services",

    issuerHref:
      "https://aws.amazon.com/certification/",

    issueDate: "2026-01",

    skills: [
      "AWS",
      "Cloud",
    ],

    featured: true,
  },

  {
    id: "coursera-professional-certificate",

    title: "Professional Certificate (Placeholder)",

    issuer: "Coursera",

    issuerHref:
      "https://www.coursera.org",

    issueDate: "2026-06",

    skills: [
      "Cloud",
      "AWS",
      "React",
      "TypeScript",
    ],

    featured: true,
  },
];