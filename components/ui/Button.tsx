import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  external?: boolean;
};

export default function Button({
  href,
  children,
  variant = "primary",
  external = false,
}: ButtonProps) {
  const baseClasses = `
    inline-flex
    items-center
    justify-center
    rounded-lg
    px-6
    py-3
    font-semibold
    transition-all
    duration-300
  `;

  const variants = {
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
  };

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`${baseClasses} ${variants[variant]}`}
    >
      {children}
    </Link>
  );
}