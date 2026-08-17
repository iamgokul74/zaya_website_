import React from "react";
import { Track } from "@/data/tracks";

interface TrackSignalPatternProps {
  type: Track["patternType"];
}

export function TrackSignalPattern({ type }: TrackSignalPatternProps) {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden opacity-20 transition-opacity duration-300 group-hover:opacity-40"
    >
      <svg
        className="h-full w-full stroke-signal-muted/40 fill-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id={`pattern-${type}`}
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            {type === "neural" && (
              <>
                <circle cx="16" cy="16" r="2" className="fill-signal-lime/60" />
                <path d="M 0 16 L 32 16 M 16 0 L 16 32" strokeWidth="0.75" />
              </>
            )}
            {type === "robotics" && (
              <>
                <rect x="4" y="4" width="24" height="24" strokeWidth="0.75" />
                <circle cx="16" cy="16" r="4" strokeWidth="0.75" />
              </>
            )}
            {type === "cyber" && (
              <>
                <line x1="0" y1="8" x2="32" y2="8" strokeWidth="0.5" />
                <line x1="0" y1="24" x2="32" y2="24" strokeWidth="0.5" />
                <rect x="12" y="12" width="8" height="8" strokeWidth="0.75" />
              </>
            )}
            {type === "pulse" && (
              <path
                d="M 0 16 Q 8 8 16 16 T 32 16"
                strokeWidth="0.75"
              />
            )}
            {type === "fintech" && (
              <>
                <path d="M 0 32 L 12 16 L 20 24 L 32 4" strokeWidth="0.75" />
                <circle cx="32" cy="4" r="2" className="fill-signal-cyan/60" />
              </>
            )}
            {type === "iot" && (
              <>
                <circle cx="8" cy="8" r="3" strokeWidth="0.75" />
                <circle cx="24" cy="24" r="3" strokeWidth="0.75" />
                <line x1="8" y1="8" x2="24" y2="24" strokeWidth="0.5" />
              </>
            )}
            {type === "agri" && (
              <>
                <path d="M 0 0 L 32 32 M 32 0 L 0 32" strokeWidth="0.5" />
                <circle cx="16" cy="16" r="1.5" className="fill-signal-lime/60" />
              </>
            )}
            {type === "logistics" && (
              <>
                <path d="M 0 16 L 16 0 L 32 16 L 16 32 Z" strokeWidth="0.75" />
              </>
            )}
            {type === "open" && (
              <>
                <circle cx="16" cy="16" r="12" strokeWidth="0.5" strokeDasharray="3 3" />
                <circle cx="16" cy="16" r="2" className="fill-signal-lime/60" />
              </>
            )}
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#pattern-${type})`} />
      </svg>
    </div>
  );
}
