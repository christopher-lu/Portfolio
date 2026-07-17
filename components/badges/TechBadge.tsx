import type { Technology } from "@/data/technologies";

type Props = {
  technology: Technology;
};

export default function TechBadge({
  technology,
}: Props) {
  const Icon = technology.icon;

  return (
    <span
      className="
        flex
        items-center
        gap-2

        rounded-full

        border
        border-[var(--border)]

        px-3
        py-1.5

        text-sm

        bg-[var(--card)]
      "
    >
      <Icon
        size={16}
        style={{
          color: technology.color,
        }}
      />

      {technology.name}
    </span>
  );
}