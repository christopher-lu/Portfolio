import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
};

export default function Button({
  href,
  children,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className="
        inline-flex
        items-center
        justify-center
        rounded-lg
        bg-[var(--accent)]
        px-6
        py-3
        font-semibold
        text-white
        transition-all
        duration-300
        hover:scale-105
        hover:opacity-90
      "
    >
      {children}
    </Link>
  );
}