import PageLayout from "@/components/layouts/PageLayout";

import ProjectGrid from "@/components/projects/ProjectGrid";

export default function ProjectsPage() {
  return (
    <PageLayout
      eyebrow="Projects"
      title="Featured Projects"
      description="Applications demonstrating modern full-stack engineering, cloud-native architecture, and scalable software design."
    >
      <ProjectGrid />
    </PageLayout>
  );
}