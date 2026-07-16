import Container from "@/components/ui/Container";
import Brand from "./Brand";
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

          <div className="flex items-center gap-8">
            <NavLinks />

            <ThemeToggle />
          </div>
        </div>
      </Container>
    </header>
  );
}