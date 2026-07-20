import {
  CheckCircle2,
  Clock3,
  Pencil,
  FileText,
} from "lucide-react";

export const statusConfig = {
  Completed: {
    label: "Completed",
    variant: "success",
    icon: CheckCircle2,
  },

  Earned: {
    label: "Earned",
    variant: "success",
    icon: CheckCircle2,
  },

  "In Progress": {
    label: "In Progress",
    variant: "warning",
    icon: Clock3,
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

export type Status =
  keyof typeof statusConfig;