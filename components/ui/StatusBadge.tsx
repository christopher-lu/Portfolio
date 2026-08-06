import Badge from "@/components/ui/Badge";

interface StatusConfig {
  label: string;
  variant: React.ComponentProps<typeof Badge>["variant"];
}

interface StatusBadgeProps<T extends string> {
  status: T;
  config: Record<T, StatusConfig>;
  className?: string;
}

export default function StatusBadge<T extends string>({
  status,
  config,
  className,
}: StatusBadgeProps<T>) {
  const { label, variant } = config[status];

  return (
    <Badge
      variant={variant}
      className={className}
    >
      {label}
    </Badge>
  );
}