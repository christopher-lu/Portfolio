import Badge from "@/components/ui/Badge";

type Props = {
  skill: string;
};

export default function SkillBadge({
  skill,
}: Props) {
  return <Badge>{skill}</Badge>;
}