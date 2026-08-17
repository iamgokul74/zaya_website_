"use client";

import { motion } from "framer-motion";

export function HeroSignalField() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden z-0"
    >
      {/* Ambient Radial Spotlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[600px] sm:w-[900px] rounded-full bg-radial-vignette opacity-70 blur-3xl" />

      {/* Vector Technical Grid Crosshairs */}
      <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-full w-full border-x border-signal-border/20">
          {/* Top Left Neutral Technical Tag */}
          <div className="absolute top-12 left-4 text-signal-muted/30 font-mono text-[10px]">
            + SYS_NODE: 01 // LOC: ONLINE
          </div>

          {/* Top Right Coordinate Tag */}
          <div className="absolute top-12 right-4 text-signal-muted/30 font-mono text-[10px]">
            SYS_FREQ: 144.00MHz
          </div>

          {/* Center Subtle Orbit Node */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="h-72 w-72 sm:h-96 sm:w-96 rounded-full border border-signal-border/20 border-dashed"
            />
          </div>

          {/* Floating Signal Point */}
          <motion.div
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/3 right-1/4 h-2 w-2 rounded-full bg-signal-lime/80 shadow-[0_0_12px_rgba(184,255,61,0.8)]"
          />
        </div>
      </div>
    </div>
  );
}
