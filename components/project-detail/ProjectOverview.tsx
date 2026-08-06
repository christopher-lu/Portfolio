import Callout from "@/components/ui/Callout";
import HighlightsList from "@/components/ui/HighlightsList";
import SectionHeading from "@/components/ui/SectionHeading";
import TechStack from "@/components/ui/TechStack";

import type { Project } from "@/types/project";

interface ProjectOverviewProps {
  project: Project;
}

export default function ProjectOverview({
  project,
}: ProjectOverviewProps) {
  return (
    <div className="space-y-10">
      {project.impact && (
        <Callout>
          {project.impact}
        </Callout>
      )}

      <section>
        <SectionHeading>
          Overview
        </SectionHeading>

        <p className="mt-4 leading-8 text-[var(--muted-foreground)]">
          {project.description}
        </p>
      </section>

      <section>
        <SectionHeading>
            Highlights
        </SectionHeading>

        <div className="mt-4">
            <HighlightsList
            items={project.highlights}
            />
        </div>
      </section>

      <section>
        <SectionHeading>
          Technologies
        </SectionHeading>

        <TechStack
          technologies={project.technologies}
          className="mt-4"
        />
      </section>
    </div>
  );
}