import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "github"
  | "success"
  | "danger";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  external?: boolean;
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: ButtonProps) {
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
    focus:outline-none
    focus:ring-2
    focus:ring-[var(--accent)]
    focus:ring-offset-2
    dark:focus:ring-offset-[var(--background)]
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

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={[
        baseClasses,
        variants[variant],
        className,
      ].join(" ")}
    >
      {children}
    </Link>
  );
}