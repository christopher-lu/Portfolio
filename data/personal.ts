export type SocialLink = {
  id: "github" | "linkedin" | "email";
  label: string;
  href: string;
};

export const personal = {
  name: "Christopher Lu",

  title: "Full Stack Software Engineer",

  tagline:
    "Building scalable cloud-native applications using React, Next.js, TypeScript, Node.js, and modern DevOps tooling.",

  location: "New York, NY",

  resume: "/Christopher_Lu_Resume.pdf",

  social: [
    {
      id: "github",
      label: "github.com/christopher-lu",
      href: "https://github.com/christopher-lu",
    },
    {
      id: "email",
      label: "lu.christopher.m@gmail.com",
      href: "mailto:lu.christopher.m@gmail.com",
    },
    {
      id: "linkedin",
      label: "linkedin.com/in/christopher-lu19",
      href: "https://www.linkedin.com/in/christopher-lu19/",
    },
  ] satisfies SocialLink[],
};