import Card from "@/components/ui/Card";

import type { EngineeringStorySection } from "@/types/engineering-story";

interface BaseStorySectionProps {
  section: EngineeringStorySection;
  headingLevel?: "h3" | "h4";
}

export default function BaseStorySection({
  section,
  headingLevel = "h3",
}: BaseStorySectionProps) {
  const Heading = headingLevel;

  return (
    <Card variant="article">
      <div className="space-y-5">
        <Heading className="text-2xl font-bold tracking-tight">
          {section.title}
        </Heading>

        <p className="leading-8 text-[var(--muted-foreground)]">
          {section.body}
        </p>
      </div>
    </Card>
  );
}