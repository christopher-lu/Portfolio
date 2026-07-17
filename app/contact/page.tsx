import PageLayout from "@/components/layouts/PageLayout";
import ContactMethods from "@/components/contact/ContactMethods";

export default function ContactPage() {
  return (
    <PageLayout
      eyebrow="Contact"
      title="Let's Connect"
      description="Whether you're looking to collaborate on a project, discuss software engineering, healthcare technology, cloud architecture, or AI, I'd love to hear from you."
    >
      <ContactMethods />
    </PageLayout>
  );
}