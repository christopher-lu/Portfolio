import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export const cardVariants = {
  default: `
    rounded-2xl
    border
    border-[var(--border)]
    bg-[var(--card)]
    p-6
    shadow-sm
  `,

  article: `
    rounded-2xl
    border
    border-[var(--border)]
    bg-[var(--card)]
    p-8
    lg:p-10
    shadow-sm
  `,
} as const;

export type CardVariant = keyof typeof cardVariants;

interface CardProps {
  children: ReactNode;

  className?: string;

  variant?: CardVariant;
}

export default function Card({
  children,
  className,
  variant = "default",
}: CardProps) {
  return (
    <div
      className={cn(
        cardVariants[variant],
        className
      )}
    >
      {children}
    </div>
  );
}