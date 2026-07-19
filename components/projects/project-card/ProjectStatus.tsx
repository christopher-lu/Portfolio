import Badge from "@/components/ui/Badge";
import type { ProjectStatus as Status } from "@/types/project";

interface ProjectStatusProps {
  status: Status;
}

const variants: Record<
  Status,
  "success" | "secondary" | "outline"
> = {
  Completed: "success",
  "In Progress": "secondary",
  Planned: "outline",
};

export default function ProjectStatus({
  status,
}: ProjectStatusProps) {
  return (
    <Badge variant={variants[status]}>
      {status}
    </Badge>
  );
}