import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  actions?: ReactNode;
  className?: string;
}

export default function PageHeader({
  eyebrow,
  title,
  description,
  actions,
  className,
}: PageHeaderProps) {
  return (
    <header
      className={cn(
        "mb-16 flex flex-col gap-6",
        className
      )}
    >
      <div className="space-y-4">
        {eyebrow && (
          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[var(--accent)]
            "
          >
            {eyebrow}
          </p>
        )}

        <h1
          className="
            text-4xl
            font-bold
            tracking-tight
            md:text-5xl
          "
        >
          {title}
        </h1>

        {description && (
          <div
            className="
              max-w-3xl
              text-lg
              leading-8
              text-[var(--muted-foreground)]
            "
          >
            {description}
          </div>
        )}
      </div>

      {actions && (
        <div className="flex flex-wrap gap-4">
          {actions}
        </div>
      )}
    </header>
  );
}