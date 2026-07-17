import Link from "next/link";

export default function Brand() {
  return (
    <Link
      href="/"
      className="
        text-2xl
        font-bold
        tracking-tight
        transition-colors
        hover:text-[var(--accent)]
      "
    >
      Christopher Lu
    </Link>
  );
}