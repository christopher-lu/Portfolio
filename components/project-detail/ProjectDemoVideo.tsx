import SectionHeading from "@/components/ui/SectionHeading";

interface ProjectDemoVideoProps {
  src?: string;
  poster?: string;
  heading?: string;
  description?: string;
  layout?: "portrait" | "landscape";
}

export default function ProjectDemoVideo({
  src,
  poster,
  heading = "Product Walkthrough",
  description,
  layout = "landscape",
}: ProjectDemoVideoProps) {
  if (!src) return null;

  return (
    <section
      id="project-demo"
      aria-labelledby="project-demo-heading"
      className="scroll-mt-24 space-y-5"
    >
      <SectionHeading as="h2" id="project-demo-heading">
        {heading}
      </SectionHeading>
      {description && (
        <p className="max-w-3xl leading-7 text-[var(--muted-foreground)]">
          {description}
        </p>
      )}
      <video
        controls
        playsInline
        preload="metadata"
        poster={poster}
        aria-label={heading}
        className={
          layout === "portrait"
            ? "mx-auto block h-auto max-h-[720px] w-auto max-w-full rounded-2xl border border-[var(--border)] bg-black object-contain"
            : "max-h-[600px] w-full rounded-2xl border border-[var(--border)] bg-black object-contain"
        }
      >
        <source src={src} type="video/mp4" />
        Your browser does not support embedded video.
      </video>
    </section>
  );
}
