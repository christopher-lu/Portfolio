"use client";

import clsx from "clsx";

import Button from "@/components/ui/Button";

import type { ProjectResource } from "@/types/project";

interface ProjectLinksProps {
  resources?: ProjectResource[];
  className?: string;
}

const RESOURCE_ORDER: Record<ProjectResource["type"], number> = {
  demo: 0,
  website: 1,
  github: 2,
  documentation: 3,
};

export default function ProjectLinks({
  resources = [],
  className,
}: ProjectLinksProps) {
  if (resources.length === 0) return null;

  const sorted = [...resources].sort(
    (a, b) => RESOURCE_ORDER[a.type] - RESOURCE_ORDER[b.type]
  );

  return (
    <div
      className={clsx(
        "flex flex-wrap gap-3",
        className
      )}
    >
      {sorted.map((resource) => (
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