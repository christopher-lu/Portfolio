import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import { SocialId } from "@/types/social";

export const socialConfig: Record<
  SocialId,
  {
    icon: React.ComponentType<{
      className?: string;
    }>;
    hover: string;
  }
> = {
  github: {
    icon: FaGithub,
    hover:
      "group-hover:bg-neutral-900 group-hover:text-white",
  },

  linkedin: {
    icon: FaLinkedin,
    hover:
      "group-hover:bg-[#0A66C2] group-hover:text-white",
  },

  email: {
    icon: Mail,
    hover:
      "group-hover:bg-red-500 group-hover:text-white",
  },
};