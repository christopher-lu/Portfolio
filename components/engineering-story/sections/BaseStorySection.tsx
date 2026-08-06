import Card from "@/components/ui/Card";

import type { EngineeringStorySection } from "@/types/engineering-story";

interface BaseStorySectionProps {
  section: EngineeringStorySection;
}

export default function BaseStorySection({
  section,
}: BaseStorySectionProps) {
  return (
    <Card variant="article">
      <div className="space-y-5">
        <h3 className="text-2xl font-bold tracking-tight">
          {section.title}
        </h3>

        <p className="leading-8 text-[var(--muted-foreground)]">
          {section.body}
        </p>
      </div>
    </Card>
  );
}