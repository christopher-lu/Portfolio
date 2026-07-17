import Link from "next/link";

import type { ContactMethod } from "@/types/contact";

type Props = {
  method: ContactMethod;
};

export default function ContactPill({
  method,
}: Props) {
  const Icon = method.icon;

  const external =
    method.href.startsWith("http");

  return (
    <Link
      href={method.href}
      target={external ? "_blank" : undefined}
      rel={
        external
          ? "noopener noreferrer"
          : undefined
      }
      className="
        group

        flex

        items-center

        rounded-2xl

        border
        border-[var(--border)]

        bg-[var(--card)]

        p-6

        transition-all
        duration-300

        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      {/* Icon */}

      <div
        className="
          flex

          h-14
          w-14

          shrink-0

          items-center
          justify-center

          rounded-full

          bg-[var(--accent)]

          text-white
        "
      >
        <Icon className="h-6 w-6" />
      </div>

      {/* Text */}

      <div
        className="
          ml-5

          flex-1

          overflow-hidden
        "
      >
        <h3
          className="
            text-lg

            font-semibold
          "
        >
          {method.label}
        </h3>

        <p
          className="
            mt-1

            break-all

            text-sm

            text-[var(--muted-foreground)]

            opacity-80

            transition-all
            duration-300

            group-hover:opacity-100
          "
        >
          {method.value}
        </p>
      </div>
    </Link>
  );
}