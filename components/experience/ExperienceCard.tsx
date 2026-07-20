"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Building2,
  Calendar,
  ExternalLink,
  MapPin,
} from "lucide-react";

import HighlightsList from "@/components/ui/HighlightsList";
import SectionHeading from "@/components/ui/SectionHeading";
import TechStack from "@/components/ui/TechStack";

import { cardHover } from "@/lib/animations";

import type { Experience } from "@/types/experience";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({
  experience,
}: ExperienceCardProps) {
  const {
    company,
    companyUrl,
    role,
    employmentType,
    location,
    startDate,
    endDate,
    description,
    achievements,
    technologies,
  } = experience;

  return (
    <motion.article
      whileHover={cardHover}
      className="
        rounded-2xl
        border
        border-[var(--border)]
        bg-[var(--surface)]
        p-6
        shadow-sm
        transition-shadow
        duration-300
        hover:shadow-lg
      "
    >
      <header className="space-y-3">
        <h3 className="text-2xl font-bold">
          {role}
        </h3>

        {companyUrl ? (
          <Link
            href={companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              text-lg
              font-semibold
              text-blue-600
              transition-colors
              hover:text-blue-500
            "
          >
            <Building2 className="h-5 w-5" />

            <span>{company}</span>

            <ExternalLink className="h-4 w-4" />
          </Link>
        ) : (
          <div className="inline-flex items-center gap-2 text-lg font-semibold">
            <Building2 className="h-5 w-5" />

            <span>{company}</span>
          </div>
        )}

        <div
          className="
            flex
            flex-wrap
            items-center
            gap-x-5
            gap-y-2
            text-sm
            text-[var(--muted-foreground)]
          "
        >
          <div className="inline-flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />

            <span>
              {startDate} – {endDate}
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4" />

            <span>{location}</span>
          </div>

          {employmentType && (
            <span
              className="
                rounded-full
                border
                border-[var(--border)]
                px-2
                py-0.5
                text-xs
                font-medium
              "
            >
              {employmentType}
            </span>
          )}
        </div>
      </header>

      <p className="mt-6 leading-7 text-[var(--muted-foreground)]">
        {description}
      </p>

      <section className="mt-6">
        <HighlightsList items={achievements} />
      </section>

      <section className="mt-8">
        <SectionHeading>
          Technologies
        </SectionHeading>

        <TechStack technologies={technologies} />
      </section>
    </motion.article>
  );
}