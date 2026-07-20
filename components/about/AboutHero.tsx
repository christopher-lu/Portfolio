import Card from "@/components/ui/Card";

export default function AboutHero() {
  return (
    <Card className="p-8 md:p-10">
      <div className="max-w-4xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[var(--primary)]">
          Full Stack Software Engineer
        </p>

        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          Building reliable software with a focus on people, performance, and maintainability.
        </h2>

        <p className="mt-6 text-lg leading-8 text-[var(--muted-foreground)]">
          I&apos;m a software engineer who enjoys building scalable web applications, developer tools, and cloud-based solutions that solve real problems. My experience spans frontend development, backend services, Kubernetes observability, and customer-facing products, with an emphasis on clean architecture, thoughtful user experiences, and long-term maintainability.
        </p>
      </div>
    </Card>
  );
}