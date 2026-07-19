import type { ReactNode } from "react";

import Container from "@/components/layouts/Container";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({
  id,
  title,
  description,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-16 md:py-20", className)}
    >
      <Container>
        {(title || description) && (
          <header className="mb-12 max-w-3xl">
            {title && (
              <h2 className="text-4xl font-bold tracking-tight">
                {title}
              </h2>
            )}

            {description && (
              <p className="mt-4 text-lg text-[var(--muted-foreground)]">
                {description}
              </p>
            )}
          </header>
        )}

        {children}
      </Container>
    </section>
  );
}