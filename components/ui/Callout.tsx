import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface CalloutProps {
  children: ReactNode;
  className?: string;
}

export default function Callout({
  children,
  className,
}: CalloutProps) {
  return (
    <div
      className={cn(
        `
        rounded-xl
        border
        border-[var(--border)]
        bg-[color-mix(in_srgb,var(--card)_96%,var(--foreground)_4%)]
        p-5

        transition-colors
        duration-300
        `,
        className
      )}
    >
      <p
        className="
          italic
          leading-8
          text-[var(--muted-foreground)]
        "
      >
        {children}
      </p>
    </div>
  );
}