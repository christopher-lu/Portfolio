import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "github"
  | "success"
  | "danger";

interface ButtonProps {
  href?: string;
  children: ReactNode;
  variant?: ButtonVariant;
  external?: boolean;
  disabled?: boolean;
  className?: string;
}

const baseClasses = `
inline-flex
items-center
justify-center
gap-2
rounded-lg
px-6
py-3
font-semibold

transition-all
duration-300

focus-visible:outline-none
focus-visible:ring-2
focus-visible:ring-[var(--accent)]
focus-visible:ring-offset-2
focus-visible:ring-offset-[var(--background)]
`;

const variants: Record<ButtonVariant, string> = {
  primary: `
    bg-[var(--accent)]
    text-white
    hover:scale-105
    hover:opacity-90
  `,

  secondary: `
    border
    border-[var(--border)]
    bg-transparent
    text-[var(--foreground)]
    hover:bg-[var(--card)]
  `,

  outline: `
    border
    border-[var(--accent)]
    bg-transparent
    text-[var(--accent)]
    hover:bg-[var(--accent)]
    hover:text-white
  `,

  github: `
    border
    border-[var(--border)]
    bg-transparent
    text-[var(--foreground)]

    hover:border-[var(--github)]
    hover:bg-[var(--github)]
    hover:text-[var(--background)]
  `,

  success: `
    bg-emerald-600
    text-white
    hover:bg-emerald-700
  `,

  danger: `
    bg-red-600
    text-white
    hover:bg-red-700
  `,
};

export default function Button({
  href,
  children,
  variant = "primary",
  external = false,
  disabled = false,
  className,
}: ButtonProps) {
  const classes = cn(
    baseClasses,
    variants[variant],
    disabled &&
      `
      cursor-not-allowed
      opacity-50
      grayscale
      pointer-events-none
      `,
    className
  );

  if (disabled || !href) {
    return (
      <button
        type="button"
        disabled
        className={classes}
      >
        {children}
      </button>
    );
  }

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={classes}
    >
      {children}
    </Link>
  );
}
