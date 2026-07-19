import Card from "@/components/ui/Card";

export default function ContactHero() {
  return (
    <Card className="p-8 md:p-10">
      <div className="max-w-3xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[var(--primary)]">
          Let&apos;s Connect
        </p>

        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          Let&apos;s build something great together.
        </h2>

        <p className="mt-6 text-lg leading-8 text-[var(--muted-foreground)]">
          Whether you&apos;re looking to discuss an opportunity, collaborate on a
          project, or simply connect with another engineer, I&apos;d love to hear
          from you. Feel free to reach out through any of the channels below.
        </p>
      </div>
    </Card>
  );
}