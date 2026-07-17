export interface Publication {
  id: string;

  title: string;

  type:
    | "Research Paper"
    | "Technical Article"
    | "White Paper"
    | "Conference";

  publisher: string;

  published: string;

  summary: string;

  technologies: string[];

  url?: string;

  featured: boolean;
}