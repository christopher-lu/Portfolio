import type { TechnologyName } from "@/lib/technologies";
import type { EngineeringStory } from "./engineering-story";
import type { ArchitectureDiagram } from "./architecture";

export type ProjectStatus =
  | "Completed"
  | "In Progress"
  | "MVP"
  | "Production"
  | "Archived";

export type ProjectCategory =
  | "Frontend"
  | "Backend"
  | "Full Stack"
  | "Open Source"
  | "Mobile";

export type ProjectResourceType =
  | "github"
  | "website"
  | "demo"
  | "documentation";

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectScreenshot {
  src: string;
  alt: string;
  platform: "mobile" | "web" | "showcase";
  caption?: string;
}

export interface ProjectMedia {
  cover?: string;
  coverLayout?: "banner";
  coverFit?: "cover" | "contain";
  coverDimensions?: { width: number; height: number };
  poster?: string;
  video?: string;
  gallery?: string[];

  /** Optional case-study media. Only reference assets that exist in /public. */
  screenshots?: ProjectScreenshot[];
  demoVideo?: string;

  placeholderTitle?: string;
  placeholderDescription?: string;
}

export interface ProjectMilestone {
  platform: "Mobile" | "Backend" | "Web";
  status: string;
  description: string;
}

export interface ProjectResource {
  type: ProjectResourceType;
  label: string;
  href: string;
  public: boolean;
}

export interface Project {
  id: string;

  title: string;
  tagline: string;
  description: string;
  impact?: string;

  category: ProjectCategory;
  status: ProjectStatus;

  featured?: boolean;

  featuredPriority?: number;

  displayOrder: number;

  technologies: TechnologyName[];

  highlights: string[];

  metrics?: ProjectMetric[];

  milestones?: ProjectMilestone[];

  media?: ProjectMedia;

  architecture?: ArchitectureDiagram;

  engineeringStory?: EngineeringStory;

  resources?: ProjectResource[];

  resourceNotice?: string;

  /*
   * Legacy fields.
   * Remove after Project migration is complete.
   */

  image?: string;
  video?: string;

  github?: string;
  demo?: string;
  website?: string;
}