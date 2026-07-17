import { personal } from "@/data/personal";

export default function PersonalMission() {
  return (
    <section className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-10">
      <h2 className="text-3xl font-bold">
        My Mission
      </h2>

      <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
        {personal.mission}
      </p>
    </section>
  );
}