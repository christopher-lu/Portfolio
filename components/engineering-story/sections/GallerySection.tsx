import BaseStorySection from "./BaseStorySection";

import type { StorySectionProps } from "./types";

export default function GallerySection({
  section,
}: StorySectionProps) {
  return <BaseStorySection section={section} />;
}