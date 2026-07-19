"use client";

import { useEffect, useState } from "react";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setMounted(true);
    });

    return () => cancelAnimationFrame(id);
  }, []);

  if (!mounted) {
    return (
      <div
        className="
          h-12
          w-12
          rounded-full
          border
          border-[var(--border)]
          bg-[var(--card)]
        "
      />
    );
  }

  const darkMode = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(darkMode ? "light" : "dark")}
      aria-label="Toggle theme"
      className="
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full
        border
        border-[var(--border)]
        bg-[var(--card)]
        shadow-lg
        transition-all
        duration-300
        hover:scale-110
        hover:rotate-180
        active:scale-95
      "
    >
      {darkMode ? (
        <Sun className="h-5 w-5 text-yellow-400" />
      ) : (
        <Moon className="h-5 w-5 text-slate-700 dark:text-slate-200" />
      )}
    </button>
  );
}