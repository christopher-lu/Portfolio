import type {
  ComponentPropsWithoutRef,
  ReactNode,
} from "react";

import Container from "@/components/layouts/Container";
import { cn } from "@/lib/utils";

type HeadingTag = "h1" | "h2" | "h3";

interface SectionProps {
  id?: string;

  title?: string;

  description?: string;

  children: ReactNode;

  className?: string;

  as?: HeadingTag;

  headingProps?: ComponentPropsWithoutRef<HeadingTag>;
}

export default function Section({
  id,
  title,
  description,
  children,
  className,
  as = "h2",
  headingProps,
}: SectionProps) {
  const Heading = as;

  return (
    <section
      id={id}
      className={cn(
        "pt-8 pb-16 md:pt-10 md:pb-20",
        className
      )}
    >
      <Container>
        {(title || description) && (
          <header className="mb-12 max-w-3xl">
            {title && (
              <Heading
                className="text-4xl font-bold tracking-tight"
                {...headingProps}
              >
                {title}
              </Heading>
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