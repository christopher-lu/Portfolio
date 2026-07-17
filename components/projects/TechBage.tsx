import Badge from "@/components/ui/Badge";

type Props = {
  tech: string;
};

export default function TechBadge({
  tech,
}: Props) {
  return <Badge>{tech}</Badge>;
}