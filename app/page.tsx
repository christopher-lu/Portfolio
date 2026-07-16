import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function HomePage() {
  return (
    <Container>
      <Section className="text-center">
        <h1 className="text-5xl font-bold md:text-7xl">
          Christopher Lu
        </h1>

        <p className="mt-6 text-xl text-[var(--muted)]">
          Full Stack Software Engineer
        </p>

        <p className="mx-auto mt-6 max-w-2xl text-lg">
          Building scalable web applications with React,
          Next.js, TypeScript, Node.js and modern cloud
          technologies.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Button href="/about">
            About Me
          </Button>

          <Button href="/projects">
            View Projects
          </Button>
        </div>
      </Section>
    </Container>
  );
}