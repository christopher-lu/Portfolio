import Link from "next/link";

import Container from "@/components/ui/Container";
import { navigation } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-[var(--border)]">
      <Container>
        <div className="flex flex-col items-center py-12">

          {/* Name */}

          <h2 className="text-2xl font-bold">
            Christopher Lu
          </h2>

          <p className="mt-2 text-[var(--muted)]">
            Full Stack Software Engineer
          </p>

          {/* Navigation */}

          <nav className="mt-10">
            <ul
              className="
                flex
                flex-col
                items-center
                gap-4

                md:flex-row
                md:gap-8
              "
            >
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="
                      transition-colors
                      hover:text-[var(--accent)]
                    "
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}

          <div
            className="
              mt-10

              flex
              flex-col
              items-center
              gap-4

              md:flex-row
              md:gap-8
            "
          >
            <a
              href="https://github.com/christopher-lu"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[var(--accent)]"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/christopher-lu19/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[var(--accent)]"
            >
              LinkedIn
            </a>

            <a
              href="mailto:lu.christopher.m@gmail.com"
              className="transition-colors hover:text-[var(--accent)]"
            >
              Email
            </a>
          </div>

          <p
            className="
              mt-12
              text-sm
              text-[var(--muted)]
            "
          >
            © {new Date().getFullYear()} Christopher Lu
          </p>

        </div>
      </Container>
    </footer>
  );
}