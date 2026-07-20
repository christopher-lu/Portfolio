import { ReactNode } from "react";

import { cn } from "@/lib/utils";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center";
  size?: "page" | "hero";
  children?: ReactNode;
};

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
  description,
  align = "left",
  size = "page",
  children,
}: PageHeaderProps) {
  const centered = align === "center";

  return (
    <header
      className={cn(
        "mb-16 flex flex-col",
        centered
          ? "mx-auto max-w-4xl items-center text-center"
          : "max-w-3xl items-start text-left"
      )}
    >
      {eyebrow && (
        <p
          className="
            text-sm
            font-semibold
            uppercase
            tracking-[0.25em]
            text-[var(--accent)]
          "
        >
          {eyebrow}
        </p>
      )}

      <h1
        className={cn(
          "mt-3 font-extrabold tracking-tight",
          size === "hero"
            ? "text-5xl md:text-7xl"
            : "text-4xl md:text-5xl"
        )}
      >
        {title}
      </h1>

      {subtitle && (
        <h2
          className={cn(
            "mt-4 font-semibold text-[var(--muted-foreground)]",
            size === "hero"
              ? "text-2xl md:text-3xl"
              : "text-xl md:text-2xl"
          )}
        >
          {subtitle}
        </h2>
      )}

      {description && (
        <p
          className="
            mt-6
            max-w-2xl
            text-lg
            leading-8
            text-[var(--muted-foreground)]
          "
        >
          {description}
        </p>
      )}

      {children && (
        <div
          className={cn(
            "mt-10 flex flex-wrap gap-4",
            centered
              ? "justify-center"
              : "justify-start"
          )}
        >
          {children}
        </div>
      )}
    </header>
  );
}