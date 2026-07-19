import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type BadgeVariant =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "outline";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variants: Record<BadgeVariant, string> = {
  primary: `
    bg-[var(--primary)]
    text-white
  `,

  secondary: `
    bg-[var(--muted)]
    text-[var(--foreground)]
  `,

  success: `
    bg-emerald-600
    text-white
  `,

  warning: `
    bg-amber-500
    text-white
  `,

  danger: `
    bg-red-600
    text-white
  `,

  outline: `
    border
    border-[var(--border)]
    bg-transparent
    text-[var(--foreground)]
  `,
};

export default function Badge({
  children,
  variant = "primary",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        `
        inline-flex
        items-center
        rounded-full
        px-3
        py-1
        text-xs
        font-semibold
        transition-colors
        `,
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}