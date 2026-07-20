import type { TechnologyName } from "@/lib/technologies";

export type CertificationStatus =
  | "Earned"
  | "In Progress"
  | "Planned";

export interface Certification {
  id: string;

  title: string;

  issuer: string;

  issued: string;

  description: string;

  technologies: TechnologyName[];

  credentialUrl?: string;

  status: CertificationStatus;

  displayOrder: number;
}