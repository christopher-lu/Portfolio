import type {
  ComponentPropsWithoutRef,
  ReactNode,
} from "react";

import { cn } from "@/lib/utils";

type HeadingTag = "h2" | "h3" | "h4";

interface SectionHeadingProps
  extends ComponentPropsWithoutRef<HeadingTag> {
  children: ReactNode;
  as?: HeadingTag;
}

export default function SectionHeading({
  children,
  as = "h2",
  className,
  ...props
}: SectionHeadingProps) {
  const Heading = as;

  return (
    <Heading
      className={cn(
        "mb-3 text-sm font-semibold uppercase tracking-wide text-[var(--muted-foreground)]",
        className
      )}
      {...props}
    >
      {children}
    </Heading>
  );
}