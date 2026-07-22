import Image from "next/image";

import EmptyState from "@/components/ui/EmptyState";

type ProjectImageVariant = "card" | "featured";

interface ProjectImageProps {
  image?: string;
  video?: string;
  title: string;
  variant?: ProjectImageVariant;
}

const variants = {
  card: {
    width: 1200,
    height: 675,
    sizes:
      "(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw",
    priority: false,
    className: "h-56 w-full object-cover",
    emptyState: "card" as const,
  },

  featured: {
    width: 1400,
    height: 900,
    sizes: "(max-width:1024px) 100vw, 50vw",
    priority: true,
    className: "h-full w-full object-cover",
    emptyState: "hero" as const,
  },
};

export default function ProjectImage({
  image,
  title,
  variant = "card",
}: ProjectImageProps) {
  const config = variants[variant];

  if (!image) {
    return (
      <EmptyState
        title="Project Preview"
        description="Screenshot coming soon."
        size={config.emptyState}
      />
    );
  }

  return (
    <Image
      src={image}
      alt={`${title} screenshot`}
      width={config.width}
      height={config.height}
      sizes={config.sizes}
      priority={config.priority}
      className={config.className}
    />
  );
}