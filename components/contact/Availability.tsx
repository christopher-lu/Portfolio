import { contact } from "@/data/contact";

export default function Availability() {
  return (
    <section className="rounded-3xl border border-[var(--border)] bg-gradient-to-br from-[var(--card)] to-[var(--surface)] p-10 shadow-sm transition-shadow duration-300 hover:shadow-lg">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-2 text-sm font-medium text-green-600">
        <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
        Open to Opportunities
      </div>

      <h2 className="text-4xl font-bold">
        Let&apos;s Build Something Great
      </h2>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">
        {contact.availability}
      </p>
    </section>
  );
}