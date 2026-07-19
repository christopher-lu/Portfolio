import {
  FileText,
  Presentation,
  Users,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

import type { ContributionType } from "@/types/contribution";

export interface ContributionTypeConfig {
  label: string;
  icon: LucideIcon;
  cta: string;
}

export const contributionTypeConfig: Record<
  ContributionType,
  ContributionTypeConfig
> = {
  article: {
    label: "Article",
    icon: FileText,
    cta: "Read Article",
  },

  talk: {
    label: "Talk",
    icon: Presentation,
    cta: "Watch Talk",
  },

  panel: {
    label: "Panel",
    icon: Users,
    cta: "View Panel",
  },
};

export function getContributionTypeConfig(
  type: ContributionType
): ContributionTypeConfig {
  return contributionTypeConfig[type];
}