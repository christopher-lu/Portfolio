"use client";

import TechBadge from "@/components/ui/TechBadge";

import type { TechnologyName } from "@/lib/technologies";

interface SkillCardProps {
  technology: TechnologyName;
}

export default function SkillCard({
  technology,
}: SkillCardProps) {
  return (
    <TechBadge
      name={technology}
      clickable
    />
  );
}