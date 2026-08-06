import BaseStorySection from "./BaseStorySection";

import type { StorySectionProps } from "./types";

export default function LessonSection({
  section,
}: StorySectionProps) {
  return <BaseStorySection section={section} />;
}