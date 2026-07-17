"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigation } from "@/data/navigation";

type NavLinksProps = {
  mobile?: boolean;
  onNavigate?: () => void;
};

export default function NavLinks({
  mobile = false,
  onNavigate,
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
            onClick={onNavigate}
            aria-current={active ? "page" : undefined}
            className={`
              group
              relative
              w-fit
              pb-1
              text-base
              font-medium
              transition-colors
              duration-300

              ${
                active
                  ? "text-[var(--accent)]"
                  : "text-[var(--foreground)] hover:text-[var(--accent)]"
              }
            `}
          >
            {item.label}

            {/* Animated Underline */}
            <span
              className={`
                absolute
                left-0
                -bottom-0.5
                h-0.5
                bg-[var(--accent)]
                transition-all
                duration-300

                ${
                  active
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }
              `}
            />
          </Link>
        );
      })}
    </nav>
  );
}