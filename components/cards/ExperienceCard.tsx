import Card from "@/components/ui/Card";
import CardHeader from "@/components/ui/CardHeader";
import CardTitle from "@/components/ui/CardTitle";
import CardContent from "@/components/ui/CardContent";

import { Experience } from "@/data/experience";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({
  experience,
}: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{experience.role}</CardTitle>

        <p className="mt-2 font-medium">
          {experience.company}
        </p>

        <p className="text-sm text-[var(--muted)]">
          {experience.location}
        </p>

        <p className="mt-2 text-sm text-[var(--muted)]">
          {experience.start} — {experience.end}
        </p>
      </CardHeader>

      <CardContent>
        <ul className="space-y-3">
          {experience.bullets.map((bullet) => (
            <li
              key={bullet}
              className="
                flex
                items-start
                gap-3
              "
            >
              <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent)]" />

              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}