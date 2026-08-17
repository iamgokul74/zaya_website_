import React from "react";
import { cn } from "@/lib/utils";

interface TechnicalMarkerProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  code?: string;
  statusDot?: boolean;
  statusColor?: "lime" | "cyan" | "muted";
}

export function TechnicalMarker({
  label,
  code,
  statusDot = true,
  statusColor = "lime",
  className,
  ...props
}: TechnicalMarkerProps) {
  const dotColorClass = {
    lime: "bg-signal-lime shadow-[0_0_6px_rgba(184,255,61,0.6)]",
    cyan: "bg-signal-cyan shadow-[0_0_6px_rgba(99,230,255,0.6)]",
    muted: "bg-signal-muted",
  }[statusColor];

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded border border-signal-border/60 bg-signal-surface/60 px-2.5 py-1 text-[11px] font-mono tracking-widest text-signal-muted uppercase",
        className
      )}
      {...props}
    >
      {statusDot && (
        <span
          aria-hidden="true"
          className={cn("h-1.5 w-1.5 rounded-full", dotColorClass)}
        />
      )}
      {code && <span className="text-signal-text font-semibold">{code}</span>}
      {code && <span className="text-signal-border font-light">|</span>}
      <span className="text-signal-muted/90">{label}</span>
    </div>
  );
}
