import type { TechnologyName } from "@/lib/technologies";

export type PublicationType =
  | "Research Paper"
  | "Technical Article"
  | "White Paper"
  | "Conference";

export type PublicationStatus =
  | "Published"
  | "Draft";

export interface Publication {
  id: string;

  title: string;

  type: PublicationType;

  publisher: string;

  published: string;

  summary: string;

  technologies: TechnologyName[];

  url?: string;

  featured: boolean;

  status: PublicationStatus;
}