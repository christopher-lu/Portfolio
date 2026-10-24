"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import type { KeyboardEvent } from "react";
import type { ProjectScreenshot } from "@/types/project";

interface ProjectMediaGalleryProps {
  title: string;
  screenshots: ProjectScreenshot[];
}

export default function ProjectMediaGallery({
  title,
  screenshots,
}: ProjectMediaGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (screenshots.length === 0) {
    return null;
  }

  const index = Math.min(activeIndex, screenshots.length - 1);
  const active = screenshots[index];
  const hasMultipleScreenshots = screenshots.length > 1;

  function previous() {
    setActiveIndex((current) =>
      (current - 1 + screenshots.length) % screenshots.length
    );
  }

  function next() {
    setActiveIndex((current) => (current + 1) % screenshots.length);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (!hasMultipleScreenshots) return;

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      previous();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      next();
    }
  }

  return (
    <section
      aria-label={`${title} screenshot gallery`}
      aria-roledescription="carousel"
      className="space-y-4"
      onKeyDown={handleKeyDown}
      tabIndex={hasMultipleScreenshots ? 0 : undefined}
    >
      <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[color-mix(in_srgb,var(--card)_96%,var(--foreground)_4%)]">
        <figure className="flex min-h-[400px] flex-col items-center justify-center gap-4 px-14 py-7 sm:min-h-[520px] sm:px-16 lg:min-h-[620px]">
          <div
            className={
              active.platform === "mobile"
                ? "relative h-[340px] w-[162px] sm:h-[440px] sm:w-[210px] lg:h-[540px] lg:w-[258px]"
                : "relative aspect-video w-full max-w-[850px]"
            }
          >
            <Image
              src={active.src}
              alt={active.alt}
              fill
              sizes={
                active.platform === "mobile"
                  ? "(max-width: 640px) 162px, (max-width: 1024px) 210px, 258px"
                  : "(max-width: 768px) 90vw, (max-width: 1280px) 75vw, 850px"
              }
              className="rounded-lg object-contain"
              priority={index === 0}
            />
          </div>

          {active.caption && (
            <figcaption className="max-w-xl text-center text-sm leading-6 text-[var(--muted-foreground)]">
              {active.caption}
            </figcaption>
          )}
        </figure>

        {hasMultipleScreenshots && (
          <>
            <button
              type="button"
              onClick={previous}
              aria-label="Previous screenshot"
              className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] shadow-sm transition-colors hover:text-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] sm:left-4"
            >
              <ChevronLeft aria-hidden="true" className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Next screenshot"
              className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] shadow-sm transition-colors hover:text-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] sm:right-4"
            >
              <ChevronRight aria-hidden="true" className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      {hasMultipleScreenshots && (
        <div
          aria-label="Choose a screenshot"
          className="flex gap-3 overflow-x-auto py-2"
        >
          {screenshots.map((screenshot, thumbnailIndex) => (
            <button
              key={screenshot.src}
              type="button"
              onClick={() => setActiveIndex(thumbnailIndex)}
              aria-label={`Show screenshot ${thumbnailIndex + 1}: ${screenshot.alt}`}
              aria-current={thumbnailIndex === index ? "true" : undefined}
              className={`shrink-0 rounded-xl border p-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] ${
                thumbnailIndex === index
                  ? "border-[var(--accent)]"
                  : "border-[var(--border)]"
              }`}
            >
              <span
                className={
                  screenshot.platform === "mobile"
                    ? "relative block h-20 w-10"
                    : "relative block h-20 w-32"
                }
              >
                <Image
                  src={screenshot.src}
                  alt=""
                  fill
                  sizes={screenshot.platform === "mobile" ? "40px" : "128px"}
                  className="object-contain"
                />
              </span>
            </button>
          ))}
        </div>
      )}

      {hasMultipleScreenshots && (
        <p
          role="status"
          aria-live="polite"
          aria-atomic="true"
          className="text-center text-sm text-[var(--muted-foreground)]"
        >
          Screenshot {index + 1} of {screenshots.length}
        </p>
      )}
    </section>
  );
}
