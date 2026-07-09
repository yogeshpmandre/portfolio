"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] =
    useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-10 w-10 rounded-xl" />
    );
  }

  return (
    <button
        onClick={() =>
            setTheme(theme === "dark" ? "light" : "dark")
        }
        className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            border
            border-slate-200
            bg-white
            shadow-sm
            transition-all
            duration-300
            hover:shadow-md
            dark:border-slate-700
            dark:bg-slate-900
        "
        aria-label="Toggle Theme"
        >
        {theme === "dark" ? (
            <Sun size={18} />
        ) : (
            <Moon size={18} />
        )}
    </button>
  );
}