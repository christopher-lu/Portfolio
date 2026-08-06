import {
  CheckCircle2,
  FileText,
} from "lucide-react";

import type { PublicationStatus } from "@/types/publication";

export const publicationStatusConfig: Record<
  PublicationStatus,
  {
    label: string;
    variant: "success" | "secondary";
    icon: typeof CheckCircle2;
  }
> = {
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
};