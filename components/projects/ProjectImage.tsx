import Image from "next/image";

import EmptyState from "@/components/ui/EmptyState";

type ProjectImageVariant = "card" | "featured";

interface ProjectImageProps {
  image?: string;
  video?: string;

  placeholderTitle?: string;
  placeholderDescription?: string;

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
  placeholderTitle = "Project Preview",
  placeholderDescription = "Screenshot coming soon.",
}: ProjectImageProps) {
  const config = variants[variant];

  if (!image) {
    if (variant === "featured") {
      return (
        <div className="flex h-64 w-full items-center justify-center bg-[color-mix(in_srgb,var(--card)_96%,var(--foreground)_4%)]">
          <EmptyState
            title={placeholderTitle}
            description={placeholderDescription}
            size="card"
          />
        </div>
      );
    }

    return (
      <EmptyState
        title={placeholderTitle}
        description={placeholderDescription}
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