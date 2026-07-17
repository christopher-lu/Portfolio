import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

import type { Certification } from "@/types/certification";

type Props = {
  certification: Certification;
};

export default function CertificationCard({
  certification,
}: Props) {
  return (
    <Card className="flex h-full flex-col">
      {/* Header */}

      <div className="flex items-start justify-between">
        <span className="text-sm font-medium text-[var(--accent)]">
          {certification.issuer}
        </span>

        <span className="text-sm text-[var(--muted-foreground)]">
          {certification.issued}
        </span>
      </div>

      {/* Title */}

      <h3 className="mt-5 text-2xl font-bold">
        {certification.name}
      </h3>

      {/* Credential */}

      {certification.credentialId && (
        <p className="mt-2 text-sm text-[var(--muted-foreground)]">
          Credential ID: {certification.credentialId}
        </p>
      )}

      {/* Expiration */}

      {certification.expires && (
        <p className="mt-2 text-sm text-[var(--muted-foreground)]">
          Expires: {certification.expires}
        </p>
      )}

      {/* Skills */}

      <div className="mt-6 flex flex-wrap gap-2">
        {certification.skills.map((skill) => (
          <span
            key={skill}
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
            {skill}
          </span>
        ))}
      </div>

      {/* Link */}

      {certification.url && (
        <div className="mt-auto pt-8">
          <Button
            href={certification.url}
            external
          >
            View Credential
          </Button>
        </div>
      )}
    </Card>
  );
}