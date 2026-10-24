import SectionHeading from "@/components/ui/SectionHeading";

interface ProjectDemoVideoProps {
  src?: string;
  poster?: string;
}

export default function ProjectDemoVideo({
  src,
  poster,
}: ProjectDemoVideoProps) {
  if (!src) return null;

  return (
    <section aria-labelledby="project-demo-heading" className="space-y-5">
      <SectionHeading as="h2" id="project-demo-heading">
        Product Walkthrough
      </SectionHeading>
      <video
        controls
        playsInline
        preload="metadata"
        poster={poster}
        aria-label="Application demonstration video"
        className="max-h-[600px] w-full rounded-2xl border border-[var(--border)] bg-black object-contain"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support embedded video.
      </video>
    </section>
  );
}
