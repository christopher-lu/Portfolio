import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import PageHeader from "@/components/sections/PageHeader";
import ProjectGrid from "@/components/projects/ProjectGrid";

export default function ProjectsPage() {
  return (
    <Container>
      <Section>
        <PageHeader
          eyebrow="Projects"
          title="Featured Projects"
          description="Applications demonstrating modern full-stack engineering, cloud-native architecture, and scalable software design."
        />

        <ProjectGrid />
      </Section>
    </Container>
  );
}