import TechBadge from "@/components/ui/TechBadge";
import { cn } from "@/lib/utils";
import type { TechnologyName } from "@/lib/technologies";

interface TechStackProps {
  technologies: TechnologyName[];
  className?: string;
  clickable?: boolean;
}

export default function TechStack({
  technologies,
  className,
  clickable = false,
}: TechStackProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-2",
        className
      )}
    >
      {technologies.map((technology) => (
        <TechBadge
          key={technology}
          name={technology}
          clickable={clickable}
        />
      ))}
    </div>
  );
}