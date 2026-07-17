import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

import type { Publication } from "@/types/publication";

type Props = {
  publication: Publication;
};

export default function PublicationCard({
  publication,
}: Props) {
  return (
    <Card className="flex h-full flex-col">
      <div className="mb-3">
        <span className="text-sm text-[var(--muted-foreground)]">
          {publication.type}
        </span>
      </div>

      <h3 className="text-2xl font-bold">
        {publication.title}
      </h3>

      <p className="mt-2 text-sm text-[var(--muted-foreground)]">
        {publication.publisher}
      </p>

      <p className="mt-4 flex-1">
        {publication.summary}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {publication.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-[var(--border)] px-3 py-1 text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      {publication.url && (
        <div className="mt-8">
          <Button
            href={publication.url}
            external
          >
            Read Publication
          </Button>
        </div>
      )}
    </Card>
  );
}