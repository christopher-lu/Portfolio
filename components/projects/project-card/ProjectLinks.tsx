import clsx from "clsx";

import Button from "@/components/ui/Button";

import type { ProjectResource } from "@/types/project";

interface ProjectLinksProps {
  resources?: ProjectResource[];
  className?: string;
}

export default function ProjectLinks({
  resources = [],
  className,
}: ProjectLinksProps) {
  if (resources.length === 0) {
    return null;
  }

  return (
    <div
      className={clsx(
        "flex flex-wrap gap-3 pt-2",
        className
      )}
    >
      {resources.map((resource) => (
        <Button
          key={`${resource.type}-${resource.label}`}
          href={resource.href}
          variant={
            resource.type === "github"
              ? "github"
              : "primary"
          }
          external
        >
          {resource.label}
        </Button>
      ))}
    </div>
  );
}