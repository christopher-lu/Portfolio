import PublicationCard from "./PublicationCard";

import { publications } from "@/data/publications";

export default function PublicationsList() {
  if (publications.length === 0) {
    return (
      <p className="text-center text-[var(--muted-foreground)]">
        Publications coming soon.
      </p>
    );
  }

  const sortedPublications = [...publications].sort((a, b) => {
    if (a.featured === b.featured) return 0;

    return a.featured ? -1 : 1;
  });

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      {sortedPublications.map((publication) => (
        <PublicationCard
          key={publication.id}
          publication={publication}
        />
      ))}
    </div>
  );
}