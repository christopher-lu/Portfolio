import { skillCategories } from "@/data/skills";

import SkillCategory from "./SkillCategory";

export default function SkillsGrid() {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {skillCategories.map((category) => (
        <SkillCategory
          key={category.id}
          title={category.title}
          skills={category.skills}
        />
      ))}
    </div>
  );
}