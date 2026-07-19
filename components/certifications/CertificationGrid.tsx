import CertificationCard from "@/components/certifications/CertificationCard";

import { certifications } from "@/data/certifications";

export default function CertificationGrid() {
  const sortedCertifications = [...certifications].sort(
    (a, b) => Number(b.featured) - Number(a.featured)
  );

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {sortedCertifications.map((certification) => (
        <CertificationCard
          key={certification.id}
          certification={certification}
        />
      ))}
    </div>
  );
}