import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className,
}: CardProps) {
  return (
    <div
      className={cn(
        `
        rounded-2xl
        border
        border-[var(--border)]
        bg-[var(--card)]
        p-6
        shadow-sm

        transition-all
        duration-300

        hover:-translate-y-2
        hover:scale-[1.01]
        hover:shadow-xl
        `,
        className
      )}
    >
      {children}
    </div>
  );
}