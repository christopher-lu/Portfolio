import type { IconType } from "react-icons";

export type TechnologyCategory =
  | "frontend"
  | "backend"
  | "language"
  | "cloud"
  | "devops"
  | "database"
  | "tooling"
  | "platform"
  | "support"
  | "other";

export interface Technology {
  label: string;
  icon?: IconType;
  href?: string;
  category: TechnologyCategory;
}