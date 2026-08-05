import {
  Archive,
  CheckCircle2,
  Clock3,
  Rocket,
} from "lucide-react";

import type { ProjectStatus } from "@/types/project";

export const projectStatusConfig: Record<
  ProjectStatus,
  {
    label: string;
    variant: "success" | "warning" | "outline" | "secondary";
    icon: typeof CheckCircle2;
  }
> = {
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
};