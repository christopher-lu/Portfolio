import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import PageHeader from "@/components/sections/PageHeader";
import ContactMethods from "@/components/sections/ContactMethods";

import { personal } from "@/data/personal";

export default function ContactPage() {
  return (
    <Container>
      <Section>
        <PageHeader
          eyebrow="Contact"
          title={personal.name}
          subtitle="Let's Connect"
          description="Feel free to reach out through any of the platforms below."
        />

        <ContactMethods />
      </Section>
    </Container>
  );
}