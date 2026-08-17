import React from "react";
import Link from "next/link";
import { TimelineStep } from "@/data/timeline";
import { cn } from "@/lib/utils";

interface TimelineCheckpointProps {
  step: TimelineStep;
  isActive?: boolean;
  onHover?: () => void;
  className?: string;
}

export function TimelineCheckpoint({
  step,
  isActive = false,
  onHover,
  className,
}: TimelineCheckpointProps) {
  const isLime = step.statusVariant === "lime";
  const isCyan = step.statusVariant === "cyan";

  const Content = (
    <div
      onMouseEnter={onHover}
      onFocus={onHover}
      className={cn(
        "group relative flex flex-col justify-between rounded-xl border border-signal-border bg-signal-surface/80 p-5 sm:p-6 backdrop-blur-md transition-all duration-300 hover:border-signal-lime/60 hover:bg-signal-elevated hover:shadow-xl hover:shadow-black/40 focus-visible:outline-2 focus-visible:outline-signal-lime focus-visible:outline-offset-2 cursor-pointer h-full",
        isActive && "border-signal-lime/80 bg-signal-elevated shadow-lg shadow-signal-lime/10",
        step.isKeyMilestone && "ring-1 ring-signal-lime/30",
        className
      )}
    >
      {/* Top Header: Step Number & Status Badge */}
      <div className="flex items-center justify-between border-b border-signal-border/40 pb-3 mb-3 font-mono text-xs">
        <div className="flex items-center gap-1.5 font-bold">
          <span className={cn(isLime ? "text-signal-lime" : isCyan ? "text-signal-cyan" : "text-signal-muted")}>
            {step.number}
          </span>
          <span className="text-signal-border">/</span>
          <span className="text-signal-muted text-[10px] tracking-wider uppercase">CHECKPOINT</span>
        </div>

        <span
          className={cn(
            "inline-flex items-center gap-1 rounded border px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase",
            isLime
              ? "border-signal-lime/40 bg-signal-lime/10 text-signal-lime"
              : isCyan
              ? "border-signal-cyan/40 bg-signal-cyan/10 text-signal-cyan"
              : "border-signal-border bg-signal-bg text-signal-muted"
          )}
        >
          <span
            className={cn(
              "h-1 w-1 rounded-full",
              isLime ? "bg-signal-lime animate-pulse" : isCyan ? "bg-signal-cyan" : "bg-signal-muted"
            )}
          />
          {step.statusTag}
        </span>
      </div>

      {/* Main Content */}
      <div className="space-y-1.5 my-auto">
        <p className="font-mono text-[10px] tracking-widest text-signal-muted uppercase">
          {step.subtitle}
        </p>
        <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight text-signal-text group-hover:text-signal-lime transition-colors uppercase">
          {step.title}
        </h3>
        <p className="font-sans text-xs text-signal-muted leading-relaxed line-clamp-3">
          {step.description}
        </p>
      </div>

      {/* Bottom Technical Line */}
      <div className="flex items-center justify-between pt-3 mt-3 border-t border-signal-border/30 font-mono text-[9px] text-signal-muted tracking-widest uppercase">
        <span>STAGE // 0{step.number}</span>
        <span className="group-hover:text-signal-lime transition-colors">
          {step.actionUrl ? "JOIN →" : "DETAILS"}
        </span>
      </div>
    </div>
  );

  if (step.actionUrl) {
    return <Link href={step.actionUrl}>{Content}</Link>;
  }

  return Content;
}
