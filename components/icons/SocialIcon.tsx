import { socialConfig } from "./socialConfig";

import { SocialId } from "@/types/social";

type Props = {
  id: SocialId;
  className?: string;
};

export default function SocialIcon({
  id,
  className,
}: Props) {
  const Icon = socialConfig[id].icon;

  return <Icon className={className} />;
}