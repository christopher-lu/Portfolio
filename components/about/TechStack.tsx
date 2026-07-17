import PageLayout from "@/components/layouts/PageLayout";

import AboutContent from "@/components/about/AboutContent";

import { personal } from "@/data/personal";

export default function AboutPage() {
  return (
    <PageLayout
      eyebrow="About"
      title={personal.name}
      subtitle={personal.title}
      description={personal.tagline}
    >
      <AboutContent />
    </PageLayout>
  );
}