"use client";

import { motion } from "framer-motion";
import { Calendar, GraduationCap, MapPin } from "lucide-react";

import Card from "@/components/ui/Card";

import { cardHover } from "@/lib/animations";

import type { Education } from "@/types/education";

interface EducationCardProps {
  education: Education;
}

export default function EducationCard({
  education,
}: EducationCardProps) {
  const {
    institution,
    program,
    fieldOfStudy,
    location,
    startDate,
    endDate,
    description,
    highlights,
  } = education;

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
          {program}
        </h3>

        <div
          className="
            inline-flex
            items-center
            gap-2
            text-lg
            font-semibold
            text-blue-600
          "
        >
          <GraduationCap className="h-5 w-5" />

          <span>{institution}</span>
        </div>

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
        </div>
      </header>

      <p className="mt-4 font-medium">
        {fieldOfStudy}
      </p>

      <p className="mt-6 leading-7 text-[var(--muted-foreground)]">
        {description}
      </p>

      <section className="mt-6">
        <h4
          className="
            mb-3
            text-sm
            font-semibold
            uppercase
            tracking-wide
            text-[var(--muted-foreground)]
          "
        >
          Highlights
        </h4>

        <ul className="space-y-3">
          {highlights.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3"
            >
              <span
                className="
                  mt-2
                  h-2
                  w-2
                  shrink-0
                  rounded-full
                  bg-blue-500
                "
                aria-hidden="true"
              />

              <span className="leading-7">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </motion.article>
  );
}