import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import PageHeader from "@/components/sections/PageHeader";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";

export default function ExperiencePage() {
  return (
    <Container>
      <Section>
        <PageHeader
          eyebrow="Experience"
          title="Professional Experience"
          description="Building scalable software across healthcare, cloud infrastructure, and modern web technologies."
        />

        <ExperienceTimeline />
      </Section>
    </Container>
  );
}