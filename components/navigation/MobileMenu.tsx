"use client";

import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import Brand from "./Brand";
import NavLinks from "./NavLinks";
import ThemeToggle from "./ThemeToggle";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeMenu();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
      {/* Mobile Controls */}

      <div className="flex items-center gap-3 md:hidden">
        <button
          aria-label="Open navigation menu"
          onClick={() => setOpen(true)}
          className="
            rounded-lg
            p-2
            transition-colors
            duration-200
            hover:bg-[var(--surface)]
          "
        >
          <Menu size={26} />
        </button>

        <ThemeToggle />
      </div>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMenu}
              className="
                fixed
                inset-0
                z-40

                bg-black/40

                backdrop-blur-sm
              "
            />

            {/* Drawer */}

            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{
                type: "spring",
                stiffness: 330,
                damping: 32,
              }}
              className="
                fixed
                top-0
                left-0
                z-50

                flex
                h-screen
                w-[92vw]
                max-w-[420px]
                flex-col

                border-r
                border-[var(--border)]

                bg-[var(--background)]

                shadow-[10px_0_40px_rgba(0,0,0,0.25)]
              "
            >
              {/* Header */}

              <div
                className="
                  flex
                  h-20
                  items-center
                  justify-between

                  border-b
                  border-[var(--border)]

                  px-6
                "
              >
                <Brand />

                <button
                  aria-label="Close navigation menu"
                  onClick={closeMenu}
                  className="
                    rounded-lg
                    p-2
                    transition-colors
                    duration-200
                    hover:bg-[var(--surface)]
                  "
                >
                  <X size={28} />
                </button>
              </div>

              {/* Navigation */}

              <div
                className="
                  flex-1

                  px-8
                  pt-10
                  pb-16
                "
              >
                <NavLinks
                  mobile
                  onNavigate={closeMenu}
                />
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}