import { publications } from "@/data/publications";

import PublicationCard from "@/components/cards/PublicationCard";

export default function PublicationsList() {
  if (publications.length === 0) {
    return (
      <p className="text-[var(--muted-foreground)]">
        Publications coming soon.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      {publications.map((publication) => (
        <PublicationCard
          key={publication.id}
          publication={publication}
        />
      ))}
    </div>
  );
}