"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SignalPulseProps {
  className?: string;
  color?: "lime" | "cyan";
  label?: string;
}

export function SignalPulse({ className, color = "lime", label = "SIGNAL // ONLINE" }: SignalPulseProps) {
  const isLime = color === "lime";

  return (
    <div className={cn("inline-flex items-center gap-3 rounded-lg border border-signal-border bg-signal-surface px-4 py-2.5 font-mono text-xs", className)}>
      <div className="relative flex h-3 w-3 items-center justify-center">
        <motion.span
          animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
          className={cn(
            "absolute h-full w-full rounded-full",
            isLime ? "bg-signal-lime/60" : "bg-signal-cyan/60"
          )}
        />
        <span
          className={cn(
            "relative h-2 w-2 rounded-full",
            isLime ? "bg-signal-lime shadow-[0_0_8px_rgba(184,255,61,0.8)]" : "bg-signal-cyan shadow-[0_0_8px_rgba(99,230,255,0.8)]"
          )}
        />
      </div>
      <span className="text-signal-text tracking-widest">{label}</span>
    </div>
  );
}
