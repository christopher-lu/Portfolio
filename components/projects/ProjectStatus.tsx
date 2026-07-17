import type { ProjectStatus as ProjectStatusType } from "@/types/project";

type ProjectStatusProps = {
  status: ProjectStatusType;
};

const statusStyles: Record<ProjectStatusType, string> = {
  Completed: `
    bg-emerald-200
    text-emerald-900
    dark:bg-emerald-900/40
    dark:text-emerald-300
  `,

  "In Progress": `
    bg-amber-200
    text-amber-900
    dark:bg-amber-900/40
    dark:text-amber-300
  `,

  Planned: `
    bg-zinc-800
    text-white
    dark:bg-zinc-700
    dark:text-zinc-100
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
        statusStyles[status],
      ].join(" ")}
    >
      {status}
    </span>
  );
}