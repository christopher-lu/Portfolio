"use client";

import Section from "@/components/ui/Section";

import SkillsGrid from "./SkillsGrid";

export default function SkillsSection() {
  return (
    <Section
      title="Skills"
      description="Technologies, tools, and platforms I use to build scalable, maintainable, and user-focused applications."
    >
      <SkillsGrid />
    </Section>
  );
}