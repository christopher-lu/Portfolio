import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaFilePdf,
} from "react-icons/fa";

import type { ContactInfo } from "@/types/contact";

export const contact: ContactInfo = {
  availability:
    "Open to Software Engineering, AI, and Cloud opportunities.",

  methods: [
    {
      id: "email",

      label: "Email",

      value: "you@email.com",

      href: "mailto:you@email.com",

      icon: FaEnvelope,
    },

    {
      id: "linkedin",

      label: "LinkedIn",

      value: "linkedin.com/in/username",

      href: "https://linkedin.com/in/username",

      icon: FaLinkedin,
    },

    {
      id: "github",

      label: "GitHub",

      value: "github.com/username",

      href: "https://github.com/username",

      icon: FaGithub,
    },

    {
      id: "resume",

      label: "Resume",

      value: "Download PDF",

      href: "/resume.pdf",

      icon: FaFilePdf,
    },
  ],
};