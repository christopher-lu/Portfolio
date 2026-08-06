import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Card from "@/components/ui/Card";

import type { Project } from "@/types/project";

interface RelatedProjectCardProps {
  project: Project;
}

export default function RelatedProjectCard({
  project,
}: RelatedProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="group"
    >
      <Card
        className="
          flex
          h-full
          flex-col
          justify-between
          transition-all
          duration-200
          hover:-translate-y-1
          hover:border-[var(--accent)]
        "
      >
        <div className="space-y-4">
          <div>
            <span className="text-sm font-medium text-[var(--accent)]">
              {project.category}
            </span>

            <h3 className="mt-2 text-xl font-bold">
              {project.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-[var(--muted-foreground)]">
              {project.tagline}
            </p>
          </div>
        </div>

        <div className="mt-8">
          <span
            className="
              inline-flex
              items-center
              gap-2
              text-sm
              font-medium
              text-[var(--accent)]
              transition-all
              duration-200
              group-hover:gap-3
            "
          >
            View Case Study

            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </span>
        </div>
      </Card>
    </Link>
  );
}