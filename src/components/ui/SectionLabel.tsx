import React from "react";
import { cn } from "@/lib/utils";

interface SectionLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  code?: string;
  label: string;
  variant?: "lime" | "cyan" | "muted";
}

export function SectionLabel({
  code,
  label,
  variant = "lime",
  className,
  ...props
}: SectionLabelProps) {
  const dotColorClass = {
    lime: "bg-signal-lime shadow-[0_0_8px_rgba(184,255,61,0.5)]",
    cyan: "bg-signal-cyan shadow-[0_0_8px_rgba(99,230,255,0.5)]",
    muted: "bg-signal-muted",
  }[variant];

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2.5 rounded-full border border-signal-border bg-signal-surface/80 px-3.5 py-1.5 backdrop-blur-sm text-xs font-mono tracking-wider text-signal-text uppercase shadow-sm",
        className
      )}
      {...props}
    >
      <span
        aria-hidden="true"
        className={cn("h-1.5 w-1.5 rounded-full animate-pulse", dotColorClass)}
      />
      {code && (
        <>
          <span className="text-signal-lime font-medium">{code}</span>
          <span className="text-signal-border" aria-hidden="true">
            /
          </span>
        </>
      )}
      <span className="text-signal-text/90 tracking-widest">{label}</span>
    </div>
  );
}
