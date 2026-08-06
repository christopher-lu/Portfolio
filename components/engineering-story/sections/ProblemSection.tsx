import BaseStorySection from "./BaseStorySection";

import type { StorySectionProps } from "./types";

export default function ProblemSection({
  section,
}: StorySectionProps) {
  return <BaseStorySection section={section} />;
}