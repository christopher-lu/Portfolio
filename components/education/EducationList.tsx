import EducationCard from "./EducationCard";

import { education } from "@/data/education";

export default function EducationList() {
  return (
    <div className="space-y-8">
      {education.map((item) => (
        <EducationCard
          key={item.id}
          education={item}
        />
      ))}
    </div>
  );
}