import SectionHeading from "@/components/ui/SectionHeading";

import EngineeringStorySection from "./EngineeringStorySection";

import type { EngineeringStory as EngineeringStoryType } from "@/types/engineering-story";

interface EngineeringStoryProps {
  story: EngineeringStoryType;
}

export default function EngineeringStory({
  story,
}: EngineeringStoryProps) {
  if (!story.sections.length) {
    return null;
  }

  return (
    <section className="space-y-12">
      <div className="space-y-3">
        <SectionHeading as="h2">
          Engineering Insights
        </SectionHeading>

        {story.summary && (
          <p className="max-w-3xl leading-8 text-[var(--muted-foreground)]">
            {story.summary}
          </p>
        )}
      </div>

      <div className="space-y-8">
        {story.sections.map((section) => (
          <EngineeringStorySection
            key={section.id}
            section={section}
          />
        ))}
      </div>
    </section>
  );
}