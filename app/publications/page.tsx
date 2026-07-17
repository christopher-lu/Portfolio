import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import PageHeader from "@/components/sections/PageHeader";
import PublicationsList from "@/components/sections/PublicationsList";

export default function PublicationsPage() {
  return (
    <Container>
      <Section>
        <PageHeader
          eyebrow="Publications"
          title="Publications"
          description="Research, technical writing, and professional publications."
        />

        <PublicationsList />
      </Section>
    </Container>
  );
}