import PageHeader from "@/components/sections/PageHeader";
import SocialLinks from "@/components/footer/SocialLinks";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function ContactPage() {
  return (
    <Container>
      <Section>
        <PageHeader
          title="Christopher Lu"
          subtitle="Contact Information"
          description="Feel free to reach out through any of the platforms below."
        />

        <div className="mt-12 flex justify-center">
          <SocialLinks vertical />
        </div>
      </Section>
    </Container>
  );
}