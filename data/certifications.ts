import type { Certification } from "@/types/certification";

const certificationData: Certification[] = [
  {
    id: "aws-cloud-practitioner",

    title: "AWS Certified Cloud Practitioner",

    issuer: "Amazon Web Services",

    issued: "Planned · 2026",

    description:
      "Validates foundational knowledge of AWS Cloud concepts, core services, security, pricing, and architectural best practices.",

    technologies: [
      "AWS",
      "IAM",
      "EC2",
      "S3",
      "VPC",
    ],

    status: "Planned",

    displayOrder: 1,
  },

  {
    id: "google-cloud-developer",

    title:
      "Google Professional Cloud Developer",

    issuer: "Google Cloud",

    issued: "Future Goal",

    description:
      "Demonstrates the ability to build, deploy, and maintain scalable cloud-native applications using Google Cloud Platform.",

    technologies: [
      "Google Cloud",
      "Docker",
      "Kubernetes",
    ],

    status: "Planned",

    displayOrder: 2,
  },
];

export const certifications =
  certificationData.sort(
    (a, b) => a.displayOrder - b.displayOrder
  );