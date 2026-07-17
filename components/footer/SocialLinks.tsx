import { social } from "@/data/social";

import SocialIcon from "@/components/icons/SocialIcon";
import { socialConfig } from "@/components/icons/socialConfig";

type Props = {
  vertical?: boolean;
};

export default function SocialLinks({
  vertical = false,
}: Props) {
  return (
    <div
      className={
        vertical
          ? "flex flex-col items-center gap-6"
          : "flex flex-wrap justify-center gap-6"
      }
    >
      {social.map((contact) => {
        const hover = socialConfig[contact.id].hover;

        const external =
          contact.href.startsWith("http");

        return (
          <a
            key={contact.id}
            href={contact.href}
            target={
              external ? "_blank" : undefined
            }
            rel={
              external
                ? "noopener noreferrer"
                : undefined
            }
            className="
              group
              flex
              items-center
              w-fit
              rounded-full
              border
              border-[var(--border)]
              bg-[var(--card)]
              shadow-sm
              transition-all
              duration-300
              hover:shadow-lg
            "
          >
            <div
              className={`
                flex
                h-14
                w-14
                shrink-0
                items-center
                justify-center
                rounded-full
                transition-all
                duration-300
                ${hover}
              `}
            >
              <SocialIcon id={contact.id} />
            </div>

            <div
              className="
                overflow-hidden
                max-w-0
                transition-all
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