import { ReactNode } from "react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import PageHeader from "@/components/sections/PageHeader";

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
  return (
    <Container>
      <Section>
        <PageHeader
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
          description={description}
          align={align}
        />

        {children}
      </Section>
    </Container>
  );
}