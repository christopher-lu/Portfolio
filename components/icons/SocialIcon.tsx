import { socialConfig } from "./socialConfig";

type Props = {
  id: keyof typeof socialConfig;
};

export default function SocialIcon({
  id,
}: Props) {
  const Icon = socialConfig[id].icon;

  return <Icon size={22} />;
}