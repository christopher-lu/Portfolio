"use client";

import { useEffect, useState } from "react";

import {
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/solid";
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
      <button
        type="button"
        disabled
        aria-hidden="true"
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
          opacity-0
        "
      />
    );
  }

  const darkMode = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(darkMode ? "light" : "dark")}
      aria-label={
        darkMode
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
      className="
        group
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full
        border
        border-[var(--border)]
        bg-[var(--card)]
        shadow-[var(--shadow-md)]
        transition-all
        duration-200
        ease-out
        hover:bg-[var(--card-hover)]
        hover:-translate-y-0.5
        hover:scale-105
        hover:shadow-[var(--shadow-lg)]
        active:scale-[0.97]
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[var(--accent)]
        focus-visible:ring-offset-2
        focus-visible:ring-offset-[var(--background)]
      "
    >
      {darkMode ? (
        <SunIcon
          className="
            h-5
            w-5
            text-amber-400
            transition-transform
            duration-200
            ease-out
            group-hover:rotate-12
          "
        />
      ) : (
        <MoonIcon
          className="
            h-5
            w-5
            text-[var(--foreground)]
            transition-transform
            duration-200
            ease-out
            group-hover:rotate-12
          "
        />
      )}
    </button>
  );
}