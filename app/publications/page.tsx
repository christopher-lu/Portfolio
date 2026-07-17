import PageLayout from "@/components/layouts/PageLayout";

import PublicationsList from "@/components/publications/PublicationsList";

export default function PublicationsPage() {
  return (
    <PageLayout
      eyebrow="Publications"
      title="Publications"
      description="Research, technical writing, and professional publications."
    >
      <PublicationsList />
    </PageLayout>
  );
}