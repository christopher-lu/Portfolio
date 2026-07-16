import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

//change background color within dark mode to contrast with white font
type Contact = {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
  hoverColor: string;
};

type ContactInfoProps = {
  contacts: Contact[];
};

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

function ContactInfo({ contacts }: ContactInfoProps) {
  return (
    <div className="mt-12 flex flex-col items-center gap-8">
      {contacts.map((contact) => {
        const isExternal = contact.href.startsWith("http");

        return (
          <a
            key={contact.id}
            href={contact.href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="group flex items-center"
          >
            {/* Icon */}
            <div
              className={`
                flex
                h-16
                w-16
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-gray-300
                bg-white
                text-3xl
                shadow-md
                transition-all
                duration-300
                ${contact.hoverColor}
              `}
            >
              {contact.icon}
            </div>

            {/* Mobile */}
            <div
              className="
                ml-2
                rounded-r-full
                border-y
                border-r
                border-gray-300
                bg-white
                px-6
                py-4
                shadow-md

                md:hidden
              "
            >
              <span className="font-medium">
                {contact.label}
              </span>
            </div>

            {/* Desktop */}
            <div
              className="
                hidden
                md:flex

                ml-0

                max-w-0

                overflow-hidden
                whitespace-nowrap

                rounded-r-full

                border-y
                border-r
                border-gray-300

                bg-white

                px-0

                py-4

                opacity-0

                shadow-md

                transition-all
                duration-500
                ease-in-out

                group-hover:ml-2
                group-hover:max-w-xl
                group-hover:px-6
                group-hover:opacity-100
              "
            >
              <span className="font-medium text-lg">
                {contact.label}
              </span>
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col px-6 py-10">
      <section className="flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Christopher Lu
        </h1>

        <h2 className="mt-4 text-3xl md:text-4xl font-semibold">
          Contact Information
        </h2>

        <p className="mt-6 max-w-2xl text-lg text-gray-600">
          Feel free to reach out using any of the contact methods below.
          I&apos;m always happy to discuss software engineering,
          new opportunities, or interesting projects.
        </p>

        <ContactInfo contacts={contacts} />
      </section>

      <footer className="mt-auto pt-20">
        <nav className="flex flex-wrap justify-center gap-6 text-blue-600">
          <Link
            href="/"
            className="underline transition-colors hover:text-blue-800"
          >
            Back Home
          </Link>

          <Link
            href="/about"
            className="underline transition-colors hover:text-blue-800"
          >
            About Me
          </Link>

          <Link
            href="/experience"
            className="underline transition-colors hover:text-blue-800"
          >
            Experience
          </Link>

          <Link
            href="/publications"
            className="underline transition-colors hover:text-blue-800"
          >
            Publications
          </Link>
        </nav>
      </footer>
    </main>
  );
}