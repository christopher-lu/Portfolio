"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/navigation";

type NavLinksProps = {
  mobile?: boolean;
};

export default function NavLinks({
  mobile = false,
}: NavLinksProps) {
  const pathname = usePathname();

  return (
    <nav
      className={
        mobile
          ? "flex flex-col gap-6"
          : "hidden md:flex items-center gap-8"
      }
    >
      {navigation.map((item) => {
        const active = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`
              relative
              font-medium
              transition-colors
              duration-300
              hover:text-[var(--accent)]
              ${
                active
                  ? "text-[var(--accent)]"
                  : "text-[var(--foreground)]"
              }
            `}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}