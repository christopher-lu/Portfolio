import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface BackLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function BackLink({
  href,
  children,
}: BackLinkProps) {
  return (
    <Link
      href={href}
      className="
        inline-flex
        items-center
        gap-2
        text-sm
        font-medium
        text-[var(--muted-foreground)]
        transition-colors
        hover:text-[var(--foreground)]
      "
    >
      <ArrowLeft className="h-4 w-4" />
      {children}
    </Link>
  );
}