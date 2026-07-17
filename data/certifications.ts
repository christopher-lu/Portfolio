import type { Certification } from "@/types/certification";

export const certifications: Certification[] = [
  {
    id: "aws-sa",

    name: "AWS Certified Solutions Architect – Associate",

    issuer: "Amazon Web Services",

    issued: "2025",

    expires: "2028",

    credentialId: "ABC123456",

    skills: [
      "AWS",
      "Cloud",
      "Architecture",
      "Networking",
    ],

    url: "https://www.credly.com/",

    featured: true,
  },

  {
    id: "azure-ai",

    name: "Microsoft Certified: Azure AI Engineer Associate",

    issuer: "Microsoft",

    issued: "2024",

    skills: [
      "Azure",
      "AI",
      "Machine Learning",
    ],

    url: "https://learn.microsoft.com/",

    featured: true,
  },
];