import Card from "@/components/ui/Card";

import type { Education } from "@/types/education";

type Props = {
  education: Education;
};

export default function EducationCard({
  education,
}: Props) {
  return (
    <Card className="flex h-full flex-col">
      <div className="flex flex-col justify-between gap-2 md:flex-row md:items-start">
        <div>
          <h3 className="text-2xl font-bold">
            {education.degree}
          </h3>

          <p className="mt-1 text-lg font-medium text-[var(--accent)]">
            {education.institution}
          </p>

          <p className="text-sm text-[var(--muted-foreground)]">
            {education.location}
          </p>
        </div>

        <div className="text-sm text-[var(--muted-foreground)] md:text-right">
          {education.startDate} – {education.endDate}
        </div>
      </div>

      <p className="mt-2 font-medium">
        {education.fieldOfStudy}
      </p>

      <p className="mt-6 text-[var(--muted-foreground)]">
        {education.description}
      </p>

      <div className="mt-6">
        <h4 className="mb-3 font-semibold">
          Highlights
        </h4>

        <ul className="space-y-2">
          {education.achievements.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2"
            >
              <span className="mt-1 text-[var(--accent)]">
                •
              </span>

              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}