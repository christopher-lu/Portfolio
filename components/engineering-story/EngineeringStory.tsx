import EngineeringStorySection from "./EngineeringStorySection";

import type { EngineeringStory as EngineeringStoryType } from "@/types/engineering-story";

interface EngineeringStoryProps {
  story: EngineeringStoryType;
}

export default function EngineeringStory({
  story,
}: EngineeringStoryProps) {
  return (
    <div className="space-y-12">
      {story.sections.map((section) => (
        <EngineeringStorySection
          key={section.id}
          title={section.title}
          content={section.content}
        />
      ))}
    </div>
  );
}