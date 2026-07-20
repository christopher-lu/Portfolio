import Container from "@/components/layouts/Container";
import FeaturedProjectCard from "@/components/projects/FeaturedProjectCard";
import Button from "@/components/ui/Button";

import { projects } from "@/data/projects";

export default function FeaturedWork() {
  const featuredProject = projects.find(
    (project) => project.displayOrder === 1
  );

  if (!featuredProject) {
    return null;
  }

  return (
    <section className="py-20">
      <Container>
        <header className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--accent)]">
            Selected Work
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight">
            Featured Work
          </h2>

          <p className="mt-4 text-lg leading-8 text-[var(--muted-foreground)]">
            A closer look at one of my favorite projects,
            showcasing modern full stack engineering,
            cloud-native infrastructure, and thoughtful
            developer experiences.
          </p>
        </header>

        <FeaturedProjectCard project={featuredProject} />

        <div className="mt-12 flex justify-center">
          <Button href="/projects" variant="outline">
            Explore All Projects →
          </Button>
        </div>
      </Container>
    </section>
  );
}