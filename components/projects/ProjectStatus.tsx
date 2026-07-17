import Badge from "@/components/ui/Badge";

type Props = {
  status: "Completed" | "In Progress";
};

export default function ProjectStatus({
  status,
}: Props) {
  return (
    <Badge
      className={
        status === "Completed"
          ? "text-green-600"
          : "text-yellow-600"
      }
    >
      {status}
    </Badge>
  );
}