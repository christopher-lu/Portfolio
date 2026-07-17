import Card from "@/components/ui/Card";

import SkillBadge from "./SkillBadge";

type Props = {
  title: string;
  skills: string[];
};

export default function SkillCategory({
  title,
  skills,
}: Props) {
  return (
    <Card>
      <h2 className="mb-6 text-xl font-bold">
        {title}
      </h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <SkillBadge
            key={skill}
            skill={skill}
          />
        ))}
      </div>
    </Card>
  );
}