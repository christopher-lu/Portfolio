import type { EngineeringStorySection as StorySection } from "@/types/engineering-story";

interface EngineeringStorySectionProps {
  section: StorySection;
}

export default function EngineeringStorySection({
  section,
}: EngineeringStorySectionProps) {
  return (
    <section className="space-y-4">
      <h3 className="text-2xl font-semibold tracking-tight">
        {section.title}
      </h3>

      <p className="leading-8 text-[var(--muted-foreground)]">
        {section.body}
      </p>
    </section>
  );
}