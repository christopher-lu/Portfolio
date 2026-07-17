import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export const socialConfig = {
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
    icon: FaEnvelope,
    hover:
      "group-hover:bg-red-500 group-hover:text-white",
  },
} as const;