import {
  Award,
  Building2,
  Calendar,
  ExternalLink,
} from "lucide-react";

import AnimatedCard from "@/components/ui/AnimatedCard";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import TechBadge from "@/components/ui/TechBadge";

import { formatMonthYear } from "@/lib/formatters";

import type { Certification } from "@/types/certification";

interface CertificationCardProps {
  certification: Certification;
}

export default function CertificationCard({
  certification,
}: CertificationCardProps) {
  return (
    <AnimatedCard>
      <Card className="flex h-full flex-col">
        <div className="space-y-6">
          <div className="space-y-4">
            <Badge
              variant="secondary"
              className="inline-flex w-fit items-center gap-2"
            >
              <Award className="h-4 w-4" />

              <span>Certification</span>
            </Badge>

            <h3 className="text-2xl font-semibold">
              {certification.title}
            </h3>

            <div className="space-y-2 text-sm text-[var(--muted-foreground)]">
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4 shrink-0" />

                {certification.issuerHref ? (
                  <a
                    href={certification.issuerHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-1
                      transition-colors
                      hover:text-[var(--accent)]
                    "
                  >
                    <span>{certification.issuer}</span>

                    <ExternalLink className="h-3 w-3" />
                  </a>
                ) : (
                  <span>{certification.issuer}</span>
                )}
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 shrink-0" />

                <span>
                  {formatMonthYear(certification.issueDate)}
                </span>
              </div>

              {certification.credentialId && (
                <div className="text-xs text-[var(--muted)]">
                  Credential ID: {certification.credentialId}
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {certification.skills.map((technology) => (
              <TechBadge
                key={technology}
                name={technology}
                clickable
              />
            ))}
          </div>
        </div>

        <div className="mt-auto pt-8">
          {certification.credentialUrl ? (
            <Button
              href={certification.credentialUrl}
              external
              className="w-fit"
            >
              Verify Credential
            </Button>
          ) : (
            <Badge
              variant="outline"
              className="w-fit"
            >
              Planned Certification
            </Badge>
          )}
        </div>
      </Card>
    </AnimatedCard>
  );
}