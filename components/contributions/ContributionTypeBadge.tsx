import Badge from "@/components/ui/Badge";

import { getContributionTypeConfig } from "@/lib/contribution-types";

import type { ContributionType } from "@/types/contribution";

interface ContributionTypeBadgeProps {
  type: ContributionType;
}

export default function ContributionTypeBadge({
  type,
}: ContributionTypeBadgeProps) {
  const { icon: Icon, label } = getContributionTypeConfig(type);

  return (
    <Badge
      variant="secondary"
      className="inline-flex items-center gap-1.5"
    >
      <Icon className="h-3.5 w-3.5" />

      <span>{label}</span>
    </Badge>
  );
}