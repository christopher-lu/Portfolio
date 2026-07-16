"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import useMounted from "@/hooks/useMounted";

export default function ThemeToggle() {
  const mounted = useMounted();

  const { theme, setTheme } = useTheme();

  if (!mounted) {
    return (
      <div className="h-12 w-12 rounded-full border border-[var(--border)] bg-[var(--card)]" />
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle Theme"
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
        hover:rotate-12
        active:scale-95
      "
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-yellow-400" />
      ) : (
        <Moon className="h-5 w-5 text-slate-700 dark:text-slate-200" />
      )}
    </button>
  );
}