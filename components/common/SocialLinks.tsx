import { cn } from "@/lib/utils";

import { social } from "@/data/social";

import SocialIcon from "@/components/icons/SocialIcon";
import { socialConfig } from "@/components/icons/socialConfig";

interface SocialLinksProps {
  direction?: "horizontal" | "vertical";
  className?: string;
}

export default function SocialLinks({
  direction = "horizontal",
  className,
}: SocialLinksProps) {
  return (
    <div
      className={cn(
        direction === "vertical"
          ? "flex flex-col items-center gap-6"
          : "flex flex-wrap justify-center gap-6",
        className
      )}
    >
      {social.map((contact) => {
        const config = socialConfig[contact.id];

        const isExternal =
          contact.href.startsWith("http");

        return (
          <a
            key={contact.id}
            href={contact.href}
            target={isExternal ? "_blank" : undefined}
            rel={
              isExternal
                ? "noopener noreferrer"
                : undefined
            }
            aria-label={contact.label}
            className="
              group
              flex
              items-center
              rounded-full
              border
              border-[var(--border)]
              bg-[var(--card)]
              shadow-sm
              transition-shadow
              duration-300
              hover:shadow-lg
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-[var(--accent)]
              focus-visible:ring-offset-2
              dark:focus-visible:ring-offset-[var(--background)]
            "
          >
            <div
              className={cn(
                `
                flex
                h-14
                w-14
                shrink-0
                items-center
                justify-center
                rounded-full
                transition-colors
                duration-300
                `,
                config?.hover
              )}
            >
              <SocialIcon id={contact.id} />
            </div>

            <div
              className="
                overflow-hidden
                max-w-0
                transition-[max-width]
                duration-300
                group-hover:max-w-xs
              "
            >
              <span
                className="
                  whitespace-nowrap
                  pl-4
                  pr-5
                  font-medium
                "
              >
                {contact.label}
              </span>
            </div>
          </a>
        );
      })}
    </div>
  );
}