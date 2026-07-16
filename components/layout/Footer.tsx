import Container from "@/components/ui/Container";
import NavLinks from "./NavLinks";

export default function Footer() {
  return (
    <footer
      className="
        mt-20
        border-t
        border-[var(--border)]
      "
    >
      <Container>
        <div className="py-10 text-center">
          <NavLinks mobile />

          <p className="mt-8 text-sm text-[var(--muted)]">
            © {new Date().getFullYear()} Christopher Lu
          </p>
        </div>
      </Container>
    </footer>
  );
}