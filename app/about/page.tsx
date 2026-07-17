import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import PageHeader from "@/components/sections/PageHeader";
import TechStack from "@/components/sections/TechStack";

import { personal } from "@/data/personal";

export default function AboutPage() {
  return (
    <Container>
      <Section>
        <PageHeader
          eyebrow="About"
          title={personal.name}
          subtitle={personal.title}
          description={personal.tagline}
        />

        <TechStack />
      </Section>
    </Container>
  );
}