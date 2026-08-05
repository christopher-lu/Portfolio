import {
  CheckCircle2,
  Clock3,
  Pencil,
  FileText,
  Archive,
  Rocket,
} from "lucide-react";

export const statusConfig = {
  Completed: {
    label: "Completed",
    variant: "success",
    icon: CheckCircle2,
  },

  "In Progress": {
    label: "In Progress",
    variant: "warning",
    icon: Clock3,
  },

  MVP: {
    label: "MVP",
    variant: "outline",
    icon: Rocket,
  },

  Production: {
    label: "Production",
    variant: "success",
    icon: CheckCircle2,
  },

  Archived: {
    label: "Archived",
    variant: "secondary",
    icon: Archive,
  },

  // ------------------------------------------------------------------
  // Legacy statuses
  // Keep during Portfolio v2 migration.
  // Remove after Publications / Certifications are migrated.
  // ------------------------------------------------------------------

  Earned: {
    label: "Earned",
    variant: "success",
    icon: CheckCircle2,
  },

  Planned: {
    label: "Planned",
    variant: "outline",
    icon: Pencil,
  },

  Published: {
    label: "Published",
    variant: "success",
    icon: CheckCircle2,
  },

  Draft: {
    label: "Draft",
    variant: "secondary",
    icon: FileText,
  },
} as const;

export type Status = keyof typeof statusConfig;