import { ReactNode } from "react";

import Container from "@/components/ui/Container";

type PageLayoutProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  description: string;
  align?: "left" | "center";
  children: ReactNode;
};

export default function PageLayout({
  eyebrow,
  title,
  subtitle,
  description,
  align = "left",
  children,
}: PageLayoutProps) {
  const centered = align === "center";

  return (
    <Container>
      <section className="py-16">
        <header
          className={
            centered
              ? "mx-auto mb-12 flex max-w-3xl flex-col items-center text-center"
              : "mb-12 max-w-3xl"
          }
        >
          {eyebrow && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
              {eyebrow}
            </p>
          )}

          <h1 className="text-4xl font-bold tracking-tight">
            {title}
          </h1>

          {subtitle && (
            <h2 className="mt-4 text-xl font-semibold text-[var(--muted-foreground)]">
              {subtitle}
            </h2>
          )}

          <p className="mt-4 max-w-2xl text-[var(--muted-foreground)] leading-7">
            {description}
          </p>
        </header>

        {children}
      </section>
    </Container>
  );
}