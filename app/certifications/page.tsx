import PageLayout from "@/components/layouts/PageLayout";

import CertificationGrid from "@/components/certifications/CertificationGrid";

export default function CertificationsPage() {
  return (
    <PageLayout
      eyebrow="Certifications"
      title="Professional Certifications"
      description="Industry certifications demonstrating expertise in cloud computing, software engineering, AI, and modern development practices."
    >
      <CertificationGrid />
    </PageLayout>
  );
}