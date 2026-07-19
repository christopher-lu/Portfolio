import type { TechnologyName } from "@/lib/technologies";

export interface Certification {
  id: string;

  title: string;

  issuer: string;

  issuerHref?: string;

  issueDate: string;

  expirationDate?: string;

  credentialId?: string;

  credentialUrl?: string;

  skills: TechnologyName[];

  featured?: boolean;
}