import Card from "@/components/ui/Card";

import type { Experience } from "@/types/experience";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({
  experience,
}: Props) {
  return (
    <Card className="flex h-full flex-col">
      {/* Header */}

      <div className="flex flex-col justify-between gap-2 md:flex-row md:items-start">
        <div>
          <h3 className="text-2xl font-bold">
            {experience.role}
          </h3>

          <p className="mt-1 text-lg font-medium text-[var(--accent)]">
            {experience.company}
          </p>

          <p className="text-sm text-[var(--muted-foreground)]">
            {experience.location}
          </p>
        </div>

        <div className="text-sm text-[var(--muted-foreground)] md:text-right">
          <p>
            {experience.startDate} – {experience.endDate}
          </p>

          {experience.current && (
            <span className="font-medium text-[var(--accent)]">
              Current
            </span>
          )}
        </div>
      </div>

      {/* Description */}

      <p className="mt-6 text-[var(--muted-foreground)]">
        {experience.description}
      </p>

      {/* Achievements */}

      <div className="mt-6">
        <h4 className="mb-3 font-semibold">
          Key Achievements
        </h4>

        <ul className="space-y-2">
          {experience.achievements.map((achievement) => (
            <li
              key={achievement}
              className="flex items-start gap-2"
            >
              <span className="mt-1 text-[var(--accent)]">
                •
              </span>

              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Technologies */}

      <div className="mt-6 flex flex-wrap gap-2">
        {experience.technologies.map((tech) => (
          <span
            key={tech}
            className="
              rounded-full
              border
              border-[var(--border)]
              bg-[var(--surface)]
              px-3
              py-1
              text-sm
            "
          >
            {tech}
          </span>
        ))}
      </div>
    </Card>
  );
}