import Container from "@/components/layouts/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="py-28">
      <Container>
        <div className="max-w-3xl">
          <p className="text-lg font-medium text-[var(--accent)]">
            Hello, I&apos;m
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Christopher Lu
          </h1>

          <p className="mt-6 text-2xl font-semibold">
            A Full Stack Software Engineer
          </p>

          <p className="mt-8 text-lg leading-8 text-[var(--muted-foreground)]">
            I build scalable web applications, cloud-native developer tools, and modern user experiences with React, Next.js, TypeScript, Node.js, and Kubernetes. I enjoy solving complex engineering problems through thoughtful architecture, clean code, and intuitive user experiences.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/projects">
              View Projects
            </Button>

            <Button
              href="/resume/Christopher_Lu_Resume.pdf"
              variant="outline"
            >
              Resume
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}