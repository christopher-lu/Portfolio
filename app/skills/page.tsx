import PageLayout from "@/components/layouts/PageLayout";

import SkillsGrid from "@/components/skills/SkillsGrid";

export default function SkillsPage() {
  return (
    <PageLayout
      eyebrow="Skills"
      title="Technical Skills"
      description="Technologies, programming languages, frameworks, cloud platforms, and tools used to build scalable, production-ready software solutions."
    >
      <SkillsGrid />
    </PageLayout>
  );
}