import clsx from "clsx";
import { LockClosedIcon } from "@heroicons/react/24/solid";

import Button from "@/components/ui/Button";

import type { ProjectResource } from "@/types/project";

interface ProjectLinksProps {
  resources?: ProjectResource[];
  resourceNotice?: string;
  className?: string;
}

export default function ProjectLinks({
  resources = [],
  resourceNotice,
  className,
}: ProjectLinksProps) {
  if (resources.length === 0) {
    return null;
  }

  const hasPrivateResources = resources.some(
    (resource) => !resource.public
  );

  return (
    <div className="space-y-4">
      <div
        className={clsx(
          "flex flex-wrap gap-3 pt-2",
          className
        )}
      >
        {resources.map((resource) => (
          <Button
            key={`${resource.type}-${resource.label}`}
            href={resource.public ? resource.href : undefined}
            disabled={!resource.public}
            external={resource.public}
            variant={
              resource.type === "github"
                ? "github"
                : "primary"
            }
          >
            {!resource.public && (
              <LockClosedIcon
                aria-hidden="true"
                className="h-4 w-4"
              />
            )}

            {resource.label}
          </Button>
        ))}
      </div>

      {hasPrivateResources && resourceNotice && (
        <p
          className="
            max-w-2xl
            text-sm
            italic
            leading-6
            text-[var(--muted-foreground)]
          "
        >
          {resourceNotice}
        </p>
      )}
    </div>
  );
}