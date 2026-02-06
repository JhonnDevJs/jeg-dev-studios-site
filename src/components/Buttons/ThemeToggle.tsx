"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors flex items-center justify-center"
      aria-label="Cambiar tema"
    >
      {currentTheme === "dark" ? (
        <span className="material-symbols-outlined text-white">light_mode</span>
      ) : (
        <span className="material-symbols-outlined text-blue-600">dark_mode</span>
      )}
    </button>
  );
}