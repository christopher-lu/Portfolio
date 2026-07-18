import { ReactNode } from "react";

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
  align = "center",
  size = "page",
  children,
}: PageHeaderProps) {
  const alignment =
    align === "center"
      ? "text-center items-center"
      : "text-left items-start";

  const titleSize =
    size === "hero"
      ? "text-5xl md:text-7xl"
      : "text-4xl md:text-5xl";

  const subtitleSize =
    size === "hero"
      ? "text-2xl md:text-3xl"
      : "text-xl md:text-2xl";

  return (
    <header
      className={`
        mx-auto
        mb-16
        flex
        max-w-4xl
        flex-col
        ${alignment}
      `}
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
        className={`
          mt-3
          font-extrabold
          tracking-tight
          ${titleSize}
        `}
      >
        {title}
      </h1>

      {subtitle && (
        <h2
          className={`
            mt-4
            font-semibold
            text-[var(--muted)]
            ${subtitleSize}
          `}
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
            text-[var(--muted)]
          "
        >
          {description}
        </p>
      )}

      {children && (
        <div
          className="
            mt-10
            flex
            flex-wrap
            justify-center
            gap-4
          "
        >
          {children}
        </div>
      )}
    </header>
  );
}