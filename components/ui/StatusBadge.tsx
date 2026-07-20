import Badge from "@/components/ui/Badge";

import {
  statusConfig,
  type Status,
} from "@/lib/status";

interface StatusBadgeProps {
  status: Status;
  className?: string;
}

export default function StatusBadge({
  status,
  className,
}: StatusBadgeProps) {
  const { variant, label } = statusConfig[status];

  return (
    <Badge
      variant={variant}
      className={className}
    >
      {label}
    </Badge>
  );
}