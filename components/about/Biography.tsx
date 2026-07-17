import { personal } from "@/data/personal";

export default function Biography() {
  return (
    <section>
      <h2 className="mb-6 text-3xl font-bold">
        My Story
      </h2>

      <div className="space-y-6 text-lg leading-8 text-[var(--muted)]">
        <p>{personal.bio}</p>
      </div>
    </section>
  );
}