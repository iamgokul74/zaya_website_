import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Track } from "@/data/tracks";
import { TrackSignalPattern } from "./TrackSignalPattern";
import { cn } from "@/lib/utils";

interface TrackCardProps {
  track: Track;
  featured?: boolean;
  className?: string;
}

export function TrackCard({ track, featured = false, className }: TrackCardProps) {
  const isLime = track.accent === "lime";

  return (
    <Link
      href="/register"
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-signal-border bg-signal-surface/80 p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:border-signal-lime/60 hover:bg-signal-elevated hover:shadow-xl hover:shadow-black/40 focus-visible:outline-2 focus-visible:outline-signal-lime focus-visible:outline-offset-2",
        featured ? "lg:col-span-2 lg:row-span-2 min-h-[360px] lg:p-10" : "min-h-[240px]",
        className
      )}
    >
      {/* Background Signal Pattern */}
      <TrackSignalPattern type={track.patternType} />

      {/* Top Bar: Numbering & Arrow CTA */}
      <div className="relative z-10 flex items-center justify-between border-b border-signal-border/40 pb-4 mb-4">
        <div className="flex items-center gap-2 font-mono text-xs tracking-wider">
          <span
            className={cn(
              "font-bold",
              isLime ? "text-signal-lime" : "text-signal-cyan"
            )}
          >
            {track.number}
          </span>
          <span className="text-signal-border">/</span>
          <span className="text-signal-muted uppercase">{track.category}</span>
        </div>

        <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-signal-border bg-signal-bg text-signal-muted group-hover:border-signal-lime/60 group-hover:bg-signal-lime group-hover:text-signal-bg transition-all duration-200">
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>

      {/* Main Title & Description */}
      <div className="relative z-10 space-y-3 my-auto">
        <h3
          className={cn(
            "font-display font-bold tracking-tight text-signal-text group-hover:text-signal-lime transition-colors uppercase leading-tight",
            featured ? "text-3xl sm:text-4xl lg:text-5xl" : "text-xl sm:text-2xl"
          )}
        >
          {track.name}
        </h3>

        <p
          className={cn(
            "font-sans text-signal-muted leading-relaxed",
            featured ? "text-sm sm:text-base max-w-xl" : "text-xs sm:text-sm line-clamp-3"
          )}
        >
          {track.description}
        </p>
      </div>

      {/* Bottom Technical Status Bar */}
      <div className="relative z-10 flex items-center justify-between pt-4 border-t border-signal-border/30 mt-4 font-mono text-[10px] text-signal-muted tracking-widest uppercase">
        <div className="flex items-center gap-1.5">
          <span
            className={cn(
              "h-1.5 w-1.5 rounded-full transition-all group-hover:scale-125",
              isLime
                ? "bg-signal-lime shadow-[0_0_6px_rgba(184,255,61,0.6)]"
                : "bg-signal-cyan shadow-[0_0_6px_rgba(99,230,255,0.6)]"
            )}
          />
          <span>DOMAIN ACTIVE</span>
        </div>
        <span className="group-hover:text-signal-text transition-colors">
          BUILD TRACK →
        </span>
      </div>
    </Link>
  );
}
