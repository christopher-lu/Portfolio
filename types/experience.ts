import type { TechnologyName } from "@/lib/technologies";

export interface Experience {
  id: string;

  company: string;
  companyUrl?: string;

  role: string;
  employmentType?: "Full-time" | "Part-time" | "Contract" | "Open Source";

  location: string;

  startDate: string;
  endDate: string;
  current: boolean;

  description: string;

  achievements: string[];

  technologies: TechnologyName[];
}