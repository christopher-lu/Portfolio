import type { TechnologyName } from "@/lib/technologies";

export type ProjectStatus =
  | "Completed"
  | "In Progress"
  | "Planned";

export type ProjectCategory =
  | "Frontend"
  | "Backend"
  | "Full Stack"
  | "Mobile"
  | "AI"
  | "Healthcare";

export interface Project {
  id: string;

  title: string;
  tagline: string;
  description: string;

  /**
   * One-sentence business or engineering impact.
   */
  impact?: string;

  /**
   * Image shown on project cards.
   * Stored under /public/projects.
   */
  image?: string;

  technologies: TechnologyName[];
  highlights: string[];

  github?: string;
  demo?: string;

  status: ProjectStatus;
  category: ProjectCategory;

  /**
   * Controls display priority.
   * Lower numbers appear first.
   * displayOrder === 1 is used as the Featured Project.
   */
  displayOrder: number;

  startDate?: string;
  endDate?: string;
}