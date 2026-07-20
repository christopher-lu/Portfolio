import EducationCard from "./EducationCard";

import { education } from "@/data/education";

export default function EducationTimeline() {
  return (
    <div className="relative mt-12 max-w-5xl">
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
        {education.map((item) => (
          <div
            key={item.id}
            className="relative flex items-start gap-8"
          >
            <div
              className="
                hidden
                h-10
                w-10
                shrink-0
                rounded-full
                border-4
                border-[var(--background)]
                bg-[var(--accent)]
                shadow-lg
                md:block
              "
            />

            <div className="flex-1">
              <EducationCard education={item} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}