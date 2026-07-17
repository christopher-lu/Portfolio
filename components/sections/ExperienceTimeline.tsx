import ExperienceCard from "@/components/cards/ExperienceCard";
import { experience } from "@/data/experience";

export default function ExperienceTimeline() {
  return (
    <div className="mt-12 space-y-8">
      {experience.map((job) => (
        <ExperienceCard
          key={job.id}
          experience={job}
        />
      ))}
    </div>
  );
}