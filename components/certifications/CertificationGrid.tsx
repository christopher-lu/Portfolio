import { certifications } from "@/data/certifications";

import CertificationCard from "./CertificationCard";

export default function CertificationGrid() {
  if (certifications.length === 0) {
    return (
      <p className="text-center text-[var(--muted-foreground)]">
        Certifications coming soon.
      </p>
    );
  }

  const sorted = [...certifications].sort((a, b) => {
    if (a.featured === b.featured) return 0;

    return a.featured ? -1 : 1;
  });

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      {sorted.map((certification) => (
        <CertificationCard
          key={certification.id}
          certification={certification}
        />
      ))}
    </div>
  );
}