export type ProjectStatus =
  | "Completed"
  | "In Progress";

export type ProjectCategory =
  | "Frontend"
  | "Backend"
  | "Full Stack"
  | "Cloud";

export interface Project {
  id: string;

  title: string;

  tagline: string;

  description: string;

  image: string;

  technologies: string[];

  highlights: string[];

  github?: string;

  demo?: string;

  featured: boolean;

  status: ProjectStatus;

  category: ProjectCategory;
}