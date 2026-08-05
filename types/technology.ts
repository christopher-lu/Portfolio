import type { IconType } from "react-icons";

export type TechnologyCategory =
  | "frontend"
  | "backend"
  | "mobile"
  | "language"
  | "cloud"
  | "devops"
  | "tooling"
  | "platform"
  | "support";

export interface Technology {
  label: string;
  icon?: IconType;
  href?: string;
  category: TechnologyCategory;
}