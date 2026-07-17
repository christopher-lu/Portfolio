import Link from "next/link";

import type { ContactMethod } from "@/types/contact";

type Props = {
  method: ContactMethod;
};

export default function ContactCard({
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

        rounded-3xl

        border
        border-[var(--border)]

        bg-[var(--card)]

        p-10

        text-center

        transition-all
        duration-300

        hover:-translate-y-2
        hover:border-[var(--accent)]
        hover:shadow-2xl
      "
    >
      {/* Icon */}

      <div
        className="
          mx-auto

          flex

          h-20
          w-20

          items-center
          justify-center

          rounded-full

          bg-[var(--accent)]

          text-white

          transition-all
          duration-300

          group-hover:scale-110
          group-hover:rotate-6
        "
      >
        <Icon className="h-9 w-9" />
      </div>

      {/* Title */}

      <h3 className="mt-8 text-2xl font-bold">
        {method.label}
      </h3>

      {/* Value */}

      <p
        className="
          mt-4

          break-all

          text-[var(--muted-foreground)]

          transition-colors
          duration-300

          group-hover:text-[var(--foreground)]
        "
      >
        {method.value}
      </p>
    </Link>
  );
}