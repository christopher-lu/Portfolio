import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const contacts: Contact[] = [
  {
    id: "github",
    label: "github.com/christopher-lu",
    href: "https://github.com/christopher-lu",
    icon: <FaGithub />,
    hoverColor: "group-hover:bg-neutral-900 group-hover:text-white",
  },
  {
    id: "email",
    label: "lu.christopher.m@gmail.com",
    href: "mailto:lu.christopher.m@gmail.com",
    icon: <FaEnvelope />,
    hoverColor: "group-hover:bg-red-500 group-hover:text-white",
  },
  {
    id: "linkedin",
    label: "linkedin.com/in/christopher-lu19",
    href: "https://www.linkedin.com/in/christopher-lu19/",
    icon: <FaLinkedin />,
    hoverColor: "group-hover:bg-[#0A66C2] group-hover:text-white",
  },
];
export type Contact = {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
  hoverColor: string;
};

