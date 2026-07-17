import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import PageHeader from "@/components/sections/PageHeader";
import ExperienceTimeline from "@/components/experience/ExperienceTimeline";

export default function ExperiencePage() {
  return (
    <Container>
      <Section>
        <PageHeader
          eyebrow="Experience"
          title="Professional Experience"
          description="A timeline of my professional journey, highlighting leadership, technical expertise, and measurable impact across healthcare, technology, and enterprise environments."
        />

        <ExperienceTimeline />
      </Section>
    </Container>
  );
}