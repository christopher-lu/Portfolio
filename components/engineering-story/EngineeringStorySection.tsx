interface EngineeringStorySectionProps {
  title: string;

  content: string;
}

export default function EngineeringStorySection({
  title,
  content,
}: EngineeringStorySectionProps) {
  return (
    <section className="space-y-3">
      <h3 className="text-2xl font-semibold tracking-tight">
        {title}
      </h3>

      <p className="leading-8 text-[var(--muted-foreground)]">
        {content}
      </p>
    </section>
  );
}