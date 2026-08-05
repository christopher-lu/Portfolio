import {
  CheckCircle2,
  Clock3,
  Pencil,
} from "lucide-react";

import type { CertificationStatus } from "@/types/certification";

export const certificationStatusConfig: Record<
  CertificationStatus,
  {
    label: string;
    variant: "success" | "warning" | "outline";
    icon: typeof CheckCircle2;
  }
> = {
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
};