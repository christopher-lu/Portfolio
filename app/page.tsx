import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import PageHeader from "@/components/sections/PageHeader";

import { personal } from "@/data/personal";

export default function HomePage() {
  return (
    <Container>
      <Section>
        <PageHeader
          title={personal.name}
          subtitle={personal.title}
          description={personal.tagline}
          size="hero"
        />
      </Section>
    </Container>
  );
}