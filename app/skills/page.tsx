import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import PageHeader from "@/components/sections/PageHeader";

import SkillsGrid from "@/components/skills/SkillsGrid";

export default function SkillsPage() {
  return (
    <Container>
      <Section>
        <PageHeader
          eyebrow="Skills"
          title="Technical Skills"
          description="Technologies, programming languages, frameworks, cloud platforms, and tools used to build scalable, production-ready software solutions."
        />

        <SkillsGrid />
      </Section>
    </Container>
  );
}