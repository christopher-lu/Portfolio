import SectionHeading from "@/components/ui/SectionHeading";

interface HighlightsListProps {
  items: string[];
  title?: string;
}

export default function HighlightsList({
  items,
  title = "Highlights",
}: HighlightsListProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <div>
      <SectionHeading>{title}</SectionHeading>

      <ul className="space-y-2 text-[var(--muted-foreground)]">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3"
          >
            <span
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--foreground)]"
              aria-hidden="true"
            />

            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}