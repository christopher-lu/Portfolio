import { contact } from "@/data/contact";

export default function Availability() {
  return (
    <div
      className="
        mb-16

        rounded-3xl

        border
        border-[var(--border)]

        bg-gradient-to-br
        from-[var(--card)]
        via-[var(--card)]
        to-[var(--surface)]

        p-10

        text-center

        shadow-sm

        transition-all
        duration-300

        hover:shadow-lg
      "
    >
      {/* Status Badge */}

      <div
        className="
          inline-flex

          items-center

          rounded-full

          border
          border-green-500/20

          bg-green-500/10

          px-4
          py-2

          text-sm
          font-medium

          text-green-600

          dark:text-green-400
        "
      >
        <span
          className="
            mr-2

            h-2.5
            w-2.5

            rounded-full

            bg-green-500

            animate-pulse
          "
        />

        Open to Opportunities
      </div>

      {/* Heading */}

      <h2 className="mt-8 text-3xl font-bold">
        Let&apos;s Build Something Great
      </h2>

      {/* Description */}

      <p
        className="
          mx-auto

          mt-6

          max-w-3xl

          text-lg

          leading-8

          text-[var(--muted)]
        "
      >
        {contact.availability}
      </p>
    </div>
  );
}