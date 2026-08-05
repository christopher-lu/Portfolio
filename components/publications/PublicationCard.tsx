import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import StatusBadge from "@/components/ui/StatusBadge";

import { publicationStatusConfig } from "@/lib/status";

import type { Publication } from "@/types/publication";

type Props = {
  publication: Publication;
};

export default function PublicationCard({
  publication,
}: Props) {
  return (
    <Card className="flex h-full flex-col p-8">
      <header className="flex items-start justify-between gap-6">
        <div className="min-w-0">
          <span className="text-sm font-semibold uppercase tracking-widest text-[var(--accent)]">
            {publication.type}
          </span>

          <h2 className="mt-3 text-2xl font-bold tracking-tight">
            {publication.title}
          </h2>

          <p className="mt-2 text-lg text-[var(--muted-foreground)]">
            {publication.publisher}
          </p>

          <p className="mt-1 text-sm text-[var(--muted-foreground)]">
            {publication.published}
          </p>
        </div>

        <StatusBadge
          status={publication.status}
          config={publicationStatusConfig}
          className="shrink-0"
        />
      </header>

      <section className="mt-8">
        <SectionHeading>
          Summary
        </SectionHeading>

        <p className="mt-3 leading-7 text-[var(--muted-foreground)]">
          {publication.summary}
        </p>
      </section>

      <section className="mt-8">
        <SectionHeading>
          Technologies
        </SectionHeading>

        <div className="mt-3 flex flex-wrap gap-2">
          {publication.technologies.map((technology) => (
            <span
              key={technology}
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
              {technology}
            </span>
          ))}
        </div>
      </section>

      {publication.url && (
        <div className="mt-auto pt-10">
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