import type { ProjectStatus as ProjectStatusType } from "@/types/project";

type ProjectStatusProps = {
  status: ProjectStatusType;
};

const statusStyles: Record<ProjectStatusType, string> = {
  Completed: `
    bg-[var(--status-success-bg)]
    text-[var(--status-success-fg)]
  `,

  "In Progress": `
    bg-[var(--status-warning-bg)]
    text-[var(--status-warning-fg)]
  `,

  Planned: `
    bg-[var(--status-neutral-bg)]
    text-[var(--status-neutral-fg)]
  `,
};

export default function ProjectStatus({
  status,
}: ProjectStatusProps) {
  return (
    <span
      className={[
        "inline-flex",
        "items-center",
        "rounded-full",
        "px-3",
        "py-1",
        "text-xs",
        "font-semibold",
        "transition-colors",
        "duration-300",
        statusStyles[status],
      ].join(" ")}
    >
      {status}
    </span>
  );
}