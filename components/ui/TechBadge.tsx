import Badge from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import {
  getTechnology,
  type TechnologyName,
} from "@/lib/technologies";

interface TechBadgeProps {
  name: TechnologyName;
  className?: string;
  clickable?: boolean;
}

export default function TechBadge({
  name,
  className,
  clickable = false,
}: TechBadgeProps) {
  const technology = getTechnology(name);

  const Icon = technology.icon;

  const content = (
    <Badge
      variant="secondary"
      className={cn(
        "gap-2 transition-colors duration-200",
        clickable &&
          technology.href &&
          "cursor-pointer hover:border-blue-500 hover:text-blue-500",
        className
      )}
    >
      {Icon && (
        <Icon
          aria-hidden="true"
          className="h-4 w-4 shrink-0"
        />
      )}

      <span>{technology.label}</span>
    </Badge>
  );

  if (clickable && technology.href) {
    return (
      <a
        href={technology.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${technology.label} documentation in a new tab`}
        className="
          rounded-md
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-[var(--accent)]
          focus-visible:ring-offset-2
          focus-visible:ring-offset-[var(--background)]
        "
      >
        {content}
      </a>
    );
  }

  return content;
}