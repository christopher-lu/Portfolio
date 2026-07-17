import ExperienceCard from "@/components/experience/ExperienceCard";

import { experiences } from "@/data/experience";

export default function ExperienceList() {
  return (
    <div className="space-y-8">
      {experiences.map((experience) => (
        <ExperienceCard
          key={experience.id}
          experience={experience}
        />
      ))}
    </div>
  );
}