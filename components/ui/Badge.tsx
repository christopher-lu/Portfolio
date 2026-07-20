import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export type BadgeVariant =
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
  icon?: ReactNode;
}

const variants: Record<BadgeVariant, string> = {
  primary: `
    bg-[var(--primary)]
    text-white
  `,

  secondary: `
    border
    border-[var(--border)]
    bg-transparent
    text-[var(--muted-foreground)]
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
  icon,
}: BadgeProps) {
  return (
    <span
      className={cn(
        `
        inline-flex
        items-center
        gap-1.5
        rounded-full
        px-3.5
        py-1
        text-xs
        font-semibold
        tracking-wide
        transition-colors
        `,
        variants[variant],
        className
      )}
    >
      {icon}

      {children}
    </span>
  );
}