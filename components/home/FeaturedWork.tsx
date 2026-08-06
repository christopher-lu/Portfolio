import Container from "@/components/layouts/Container";
import FeaturedProjectCard from "@/components/projects/FeaturedProjectCard";
import Button from "@/components/ui/Button";

import { projects } from "@/data/projects";

const MAX_FEATURED_PROJECTS = 1;

export default function FeaturedWork() {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .sort(
      (a, b) =>
        (a.featuredPriority ?? Number.MAX_SAFE_INTEGER) -
        (b.featuredPriority ?? Number.MAX_SAFE_INTEGER)
    )
    .slice(0, MAX_FEATURED_PROJECTS);

  if (featuredProjects.length === 0) {
    return null;
  }

  return (
    <section className="py-20">
      <Container>
        <header className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--accent)]">
            Featured Work
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight">
            Selected Projects
          </h2>

          <p className="mt-4 text-lg leading-8 text-[var(--muted-foreground)]">
            A collection of projects highlighting full-stack engineering,
            cloud-native infrastructure, scalable application architecture,
            and modern user experiences.
          </p>
        </header>

        <div className="space-y-16">
          {featuredProjects.map((project) => (
            <FeaturedProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="/projects" variant="outline">
            Explore All Projects →
          </Button>
        </div>
      </Container>
    </section>
  );
}