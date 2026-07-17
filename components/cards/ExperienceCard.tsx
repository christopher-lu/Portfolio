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
    <Card className="relative w-full">
      <CardHeader>
        <CardTitle>{experience.role}</CardTitle>

        <p className="mt-2 text-lg font-semibold">
          {experience.company}
        </p>

        <div
          className="
            mt-3

            flex
            flex-wrap
            gap-4

            text-sm

            text-[var(--muted)]
          "
        >
          <span>{experience.location}</span>

          <span>
            {experience.start} — {experience.end}
          </span>
        </div>
      </CardHeader>

      <CardContent>
        <ul className="space-y-4">
          {experience.bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex items-start gap-4"
            >
              <span
                className="
                  mt-2

                  h-2.5
                  w-2.5

                  rounded-full

                  bg-[var(--accent)]
                "
              />

              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}