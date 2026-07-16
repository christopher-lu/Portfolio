"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import ThemeToggle from "./ThemeToggle";
import Brand from "./Brand";
import NavLinks from "./NavLinks";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Header Controls */}
      <div className="flex items-center gap-3 md:hidden">
        <button
          aria-label="Open navigation menu"
          onClick={() => setOpen(true)}
          className="
            rounded-lg
            p-2
            transition
            hover:bg-[var(--card)]
          "
        >
          <Menu size={26} />
        </button>

        <ThemeToggle />
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="
            fixed
            inset-0
            z-40
            bg-black/40
            backdrop-blur-sm
          "
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <aside
        className={`
          fixed
          top-0
          left-0
          z-50
          h-full
          w-72

          bg-[var(--background)]

          border-r
          border-[var(--border)]

          p-8

          transition-transform
          duration-300

          ${
            open
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        <div className="flex items-center justify-between">
          <Brand />

          <button
            aria-label="Close navigation menu"
            onClick={() => setOpen(false)}
          >
            <X />
          </button>
        </div>

        <div className="mt-12">
          <NavLinks
            mobile
            onNavigate={() => setOpen(false)}
                />
        </div>
      </aside>
    </>
  );
}