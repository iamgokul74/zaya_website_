"use client";

import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
  showText?: boolean;
}

export function ThemeToggle({ className, showText = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
      aria-pressed={isLight}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-signal-border bg-signal-surface px-3 py-1.5 font-mono text-xs font-medium text-signal-muted hover:border-signal-lime hover:text-signal-text transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-signal-lime",
        className
      )}
    >
      <div className="relative flex h-4 w-4 items-center justify-center">
        {isLight ? (
          <Sun className="h-4 w-4 text-amber-500 transition-transform duration-300 rotate-0 scale-100" />
        ) : (
          <Moon className="h-4 w-4 text-signal-cyan transition-transform duration-300 rotate-0 scale-100" />
        )}
      </div>

      {showText ? (
        <span className="uppercase text-[11px]">
          {isLight ? "LIGHT MODE" : "DARK MODE"}
        </span>
      ) : (
        <span className="hidden sm:inline text-[10px] uppercase font-bold text-signal-lime">
          {isLight ? "LIGHT" : "DARK"}
        </span>
      )}
    </button>
  );
}
