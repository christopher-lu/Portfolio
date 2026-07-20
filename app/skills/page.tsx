import type { Metadata } from "next";

import PageLayout from "@/components/layouts/PageLayout";
import SkillsGrid from "@/components/skills/SkillsGrid";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Technologies, tools, and platforms I use to build scalable, maintainable, and user-focused applications.",
};

export default function SkillsPage() {
  return (
    <PageLayout
      title="Skills"
      description="Technologies, tools, and platforms I use to build scalable, maintainable, and user-focused applications."
    >
      <SkillsGrid />
    </PageLayout>
  );
}