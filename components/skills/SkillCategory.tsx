"use client";

import AnimatedCard from "@/components/ui/AnimatedCard";
import Card from "@/components/ui/Card";

import SkillCard from "./SkillCard";

import {
  getTechnologiesByCategory,
  technologyCategoryMetadata,
} from "@/lib/technologies";

import type { Technology } from "@/types/technology";

interface SkillCategoryProps {
  category: Technology["category"];
}

export default function SkillCategory({
  category,
}: SkillCategoryProps) {
  const metadata = technologyCategoryMetadata[category];
  const technologies = getTechnologiesByCategory(category);

  const Icon = metadata.icon;

  return (
    <AnimatedCard>
      <Card className="h-full">
        <div className="flex h-full flex-col gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-[var(--secondary)] p-2 text-[var(--accent)]">
                <Icon className="h-5 w-5" />
              </div>

              <h3 className="text-xl font-semibold">
                {metadata.title}
              </h3>
            </div>

            <p className="text-sm leading-6 text-[var(--muted-foreground)]">
              {metadata.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {technologies.map((technology) => (
              <SkillCard
                key={technology}
                technology={technology}
              />
            ))}
          </div>
        </div>
      </Card>
    </AnimatedCard>
  );
}