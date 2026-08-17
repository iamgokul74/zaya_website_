import React from "react";
import { cn } from "@/lib/utils";

interface MetadataItem {
  value: string;
  label: string;
  unit?: string;
  highlight?: boolean;
}

const META_ITEMS: MetadataItem[] = [
  { value: "10", unit: "HRS", label: "BUILD WINDOW", highlight: true },
  { value: "09", unit: "DOMAINS", label: "CHALLENGE TRACKS" },
  { value: "04", unit: "MEMBERS", label: "MAX / TEAM SIZE" },
];

export function HeroMetadata({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "grid grid-cols-3 divide-x divide-signal-border/60 rounded-xl border border-signal-border bg-signal-surface/80 backdrop-blur-md p-3 sm:p-4 shadow-xl shadow-black/20",
        className
      )}
    >
      {META_ITEMS.map((item) => (
        <div key={item.label} className="px-3 sm:px-5 py-1 space-y-1">
          <div className="flex items-baseline gap-1.5 font-mono">
            <span
              className={cn(
                "text-2xl sm:text-3xl font-bold tracking-tight",
                item.highlight ? "text-signal-lime" : "text-signal-text"
              )}
            >
              {item.value}
            </span>
            {item.unit && (
              <span className="text-[10px] sm:text-xs font-semibold text-signal-muted tracking-wider">
                {item.unit}
              </span>
            )}
          </div>
          <p className="font-mono text-[9px] sm:text-[11px] tracking-wider text-signal-muted uppercase truncate">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}
