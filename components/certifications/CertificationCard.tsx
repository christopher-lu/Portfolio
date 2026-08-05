import type { Certification } from "@/types/certification";
import { certificationStatusConfig } from "@/lib/status/certificationStatus";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import StatusBadge from "@/components/ui/StatusBadge";
import TechStack from "@/components/ui/TechStack";

interface CertificationCardProps {
  certification: Certification;
}

export default function CertificationCard({
  certification,
}: CertificationCardProps) {
  return (
    <Card className="flex h-full flex-col p-8">
      <header className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0 space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">
            {certification.title}
          </h2>

          <p className="text-lg text-[var(--accent)]">
            {certification.issuer}
          </p>

          <p className="text-sm text-[var(--muted-foreground)]">
            {certification.issued}
          </p>
        </div>

        <StatusBadge
          status={certification.status}
          config={certificationStatusConfig}
          className="shrink-0 self-start"
        />
      </header>

      <div className="mt-8 flex flex-1 flex-col">
        <section>
          <SectionHeading>
            Description
          </SectionHeading>

          <p className="mt-3 leading-7 text-[var(--muted-foreground)]">
            {certification.description}
          </p>
        </section>

        <section className="mt-8">
          <SectionHeading>
            Technologies
          </SectionHeading>

          <TechStack
            technologies={certification.technologies}
            className="mt-3"
          />
        </section>

        {certification.credentialUrl && (
          <div className="mt-10">
            <Button
              href={certification.credentialUrl}
              external
            >
              View Credential
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
}