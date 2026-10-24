import SectionHeading from "@/components/ui/SectionHeading";

import type { ProjectMilestone } from "@/types/project";

interface ProjectMilestonesProps {
  milestones: ProjectMilestone[];
}

export default function ProjectMilestones({
  milestones,
}: ProjectMilestonesProps) {
  return (
    <section aria-labelledby="project-milestones-heading" className="space-y-5">
      <SectionHeading as="h2" id="project-milestones-heading">
        Development Milestones
      </SectionHeading>

      <div className="grid gap-4 md:grid-cols-3">
        {milestones.map((milestone) => (
          <div
            key={milestone.platform}
            className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5"
          >
            <h3 className="text-lg font-semibold">{milestone.platform}</h3>
            <p className="mt-2 text-sm font-semibold text-[var(--accent)]">
              {milestone.status}
            </p>
            <p className="mt-3 text-sm leading-6 text-[var(--muted-foreground)]">
              {milestone.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
