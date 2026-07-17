import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import PageHeader from "@/components/sections/PageHeader";

import ContactMethods from "@/components/contact/ContactMethods";

export default function ContactPage() {
  return (
    <Container>
      <Section>
        <PageHeader
          eyebrow="Contact"
          title="Let's Connect"
          description="I'm always interested in discussing software engineering, cloud architecture, healthcare technology, and new opportunities."
        />

        <ContactMethods />
      </Section>
    </Container>
  );
}