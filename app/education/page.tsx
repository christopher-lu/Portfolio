import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import PageHeader from "@/components/sections/PageHeader";

import EducationTimeline from "@/components/education/EducationTimeline";

export default function EducationPage() {
  return (
    <Container>
      <Section>
        <PageHeader
          eyebrow="Education"
          title="Education"
          description="Academic background, degrees, and achievements that have shaped my technical foundation."
        />

        <EducationTimeline />
      </Section>
    </Container>
  );
}