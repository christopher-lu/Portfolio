import SectionHeading from "@/components/ui/SectionHeading";

import EngineeringStorySection from "./EngineeringStorySection";

import type { EngineeringStory as EngineeringStoryType } from "@/types/engineering-story";

interface EngineeringStoryProps {
  story: EngineeringStoryType;
}

export default function EngineeringStory({
  story,
}: EngineeringStoryProps) {
  return (
    <section className="space-y-16">
      <SectionHeading>
        Engineering Insights
      </SectionHeading>

      {story.sections.map((section) => (
        <EngineeringStorySection
          key={section.id}
          section={section}
        />
      ))}
    </section>
  );
}