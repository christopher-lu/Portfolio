import Container from "@/components/ui/Container";

import Brand from "./Brand";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header
      className="
        sticky
        top-0
        z-50

        border-b

        border-[var(--border)]

        bg-[var(--background)]/80

        backdrop-blur
      "
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Brand />

          {/* Desktop */}

          <div className="hidden md:flex items-center gap-8">
            <NavLinks />

            <ThemeToggle />
          </div>

          {/* Mobile */}

          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}