import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: ReactNode;
  className?: string;
}

export default function SectionHeading({
  children,
  className,
}: SectionHeadingProps) {
  return (
    <h4
      className={cn(
        "mb-3 text-sm font-semibold uppercase tracking-wide text-[var(--muted-foreground)]",
        className
      )}
    >
      {children}
    </h4>
  );
}