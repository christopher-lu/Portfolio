import Link from "next/link";

import {
  Building2,
  Calendar,
  ExternalLink,
  MapPin,
} from "lucide-react";

import ContributionTypeBadge from "@/components/contributions/ContributionTypeBadge";
import AnimatedCard from "@/components/ui/AnimatedCard";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import TechBadge from "@/components/ui/TechBadge";

import { getContributionTypeConfig } from "@/lib/contribution-types";
import { formatMonthYear } from "@/lib/formatters";

import type { Contribution } from "@/types/contribution";

interface ContributionCardProps {
  contribution: Contribution;
}

export default function ContributionCard({
  contribution,
}: ContributionCardProps) {
  const { cta } = getContributionTypeConfig(
    contribution.type
  );

  return (
    <AnimatedCard>
      <Card className="flex h-full flex-col">
        <div className="space-y-6">
          <div className="space-y-4">
            <ContributionTypeBadge
              type={contribution.type}
            />

            <h3 className="text-2xl font-semibold">
              {contribution.title}
            </h3>

            <div className="space-y-2 text-sm text-[var(--muted-foreground)]">
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4 shrink-0" />

                {contribution.organizationHref ? (
                  <Link
                    href={contribution.organizationHref}
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
                    {contribution.organization}

                    <ExternalLink className="h-3 w-3" />
                  </Link>
                ) : (
                  <span>{contribution.organization}</span>
                )}
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 shrink-0" />

                <span>
                  {formatMonthYear(contribution.date)}
                </span>
              </div>

              {contribution.location && (
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 shrink-0" />

                  <span>{contribution.location}</span>
                </div>
              )}
            </div>
          </div>

          <p className="text-[var(--muted-foreground)]">
            {contribution.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {contribution.tags.map((technology) => (
              <TechBadge
                key={technology}
                name={technology}
                clickable
              />
            ))}
          </div>
        </div>

        <div className="mt-auto pt-8">
          <Button
            href={contribution.href}
            external
            className="w-fit"
          >
            <span>{cta}</span>

            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </Card>
    </AnimatedCard>
  );
}