import Image from "next/image";

import SectionHeading from "@/components/ui/SectionHeading";

import type { ProjectMedia } from "@/types/project";

interface ProjectMediaGalleryProps {
  media?: ProjectMedia;
}

export default function ProjectMediaGallery({
  media,
}: ProjectMediaGalleryProps) {
  const screenshots = media?.screenshots ?? [];
  const demoVideo = media?.demoVideo;

  if (screenshots.length === 0 && !demoVideo) {
    return null;
  }

  return (
    <section aria-labelledby="project-media-heading" className="space-y-8">
      <div className="space-y-3">
        <SectionHeading as="h2" id="project-media-heading">
          Product Walkthrough
        </SectionHeading>
        <p className="text-[var(--muted-foreground)]">
          Screenshots and demonstrations captured from the application.
        </p>
      </div>

      {screenshots.length > 0 && (
        <div className="grid gap-6 md:grid-cols-2">
          {screenshots.map((screenshot) => (
            <figure
              key={screenshot.src}
              className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5"
            >
              <div
                className={
                  screenshot.platform === "mobile"
                    ? "relative mx-auto aspect-[9/19] w-full max-w-[260px]"
                    : "relative aspect-video w-full"
                }
              >
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  fill
                  sizes={
                    screenshot.platform === "mobile"
                      ? "(max-width: 768px) 260px, 260px"
                      : "(max-width: 768px) 100vw, 50vw"
                  }
                  className="object-contain"
                />
              </div>
              {screenshot.caption && (
                <figcaption className="mt-4 text-sm leading-6 text-[var(--muted-foreground)]">
                  {screenshot.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      )}

      {demoVideo && (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Mobile App Demo</h3>
          <video
            controls
            playsInline
            preload="metadata"
            poster={media?.poster}
            className="max-h-[560px] w-full rounded-2xl border border-[var(--border)] bg-black object-contain"
          >
            <source src={demoVideo} type="video/mp4" />
            Your browser does not support embedded video.
          </video>
        </div>
      )}
    </section>
  );
}
