import type { TechnologyName } from "@/lib/technologies";

export type ContributionType =
  | "article"
  | "talk"
  | "panel";

export interface Contribution {
  id: string;

  title: string;

  type: ContributionType;

  organization: string;

  organizationHref?: string;

  date: string;

  description: string;

  href: string;

  tags: TechnologyName[];

  featured?: boolean;

  location?: string;

  image?: string;
}