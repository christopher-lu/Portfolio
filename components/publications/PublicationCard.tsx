import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

import type { Publication } from "@/types/publication";

type Props = {
  publication: Publication;
};

export default function PublicationCard({
  publication,
}: Props) {
  return (
    <Card className="flex h-full flex-col">
      {/* Header */}

      <div className="flex items-start justify-between">
        <span className="text-sm font-medium text-[var(--accent)]">
          {publication.type}
        </span>

        <span className="text-sm text-[var(--muted-foreground)]">
          {publication.published}
        </span>
      </div>

      {/* Title */}

      <h3 className="mt-5 text-2xl font-bold">
        {publication.title}
      </h3>

      <p className="mt-2 font-medium text-[var(--muted-foreground)]">
        {publication.publisher}
      </p>

      {/* Summary */}

      <p className="mt-5 text-[var(--muted-foreground)]">
        {publication.summary}
      </p>

      {/* Technologies */}

      <div className="mt-6 flex flex-wrap gap-2">
        {publication.technologies.map((tech) => (
          <span
            key={tech}
            className="
              rounded-full
              border
              border-[var(--border)]
              bg-[var(--surface)]
              px-3
              py-1
              text-sm
            "
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Link */}

      {publication.url && (
        <div className="mt-auto pt-8">
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