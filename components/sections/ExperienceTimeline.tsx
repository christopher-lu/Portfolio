import ExperienceCard from "@/components/cards/ExperienceCard";
import { experience } from "@/data/experience";

export default function ExperienceTimeline() {
  return (
    <div
      className="
        relative

        mx-auto

        mt-16

        max-w-5xl
      "
    >
      {/* Vertical Line */}

      <div
        className="
          absolute

          left-5

          top-0

          hidden

          h-full

          w-px

          bg-[var(--border)]

          md:block
        "
      />

      <div className="space-y-12">
        {experience.map((job) => (
          <div
            key={job.id}
            className="
              relative

              flex

              items-start

              gap-8
            "
          >
            {/* Timeline Node */}

            <div
              className="
                hidden

                h-10
                w-10

                shrink-0

                items-center
                justify-center

                rounded-full

                border-4

                border-[var(--background)]

                bg-[var(--accent)]

                shadow-lg

                md:flex
              "
            />

            {/* Card */}

            <div className="flex-1">
              <ExperienceCard experience={job} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}