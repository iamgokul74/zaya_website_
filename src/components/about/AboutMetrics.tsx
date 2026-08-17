"use client";

import { motion, Variants } from "framer-motion";
import { MissionMetric } from "@/data/about";
import { cn } from "@/lib/utils";

interface AboutMetricsProps {
  metrics: MissionMetric[];
  className?: string;
}

export function AboutMetrics({ metrics, className }: AboutMetricsProps) {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 md:divide-x divide-signal-border/80 rounded-2xl border border-signal-border bg-signal-surface/60 backdrop-blur-md p-6 sm:p-8 shadow-2xl shadow-black/40",
        className
      )}
    >
      {metrics.map((metric, idx) => (
        <motion.div
          key={metric.label}
          variants={itemVariants}
          className={cn(
            "flex flex-col justify-between space-y-3",
            idx !== 0 && "md:pl-8",
            idx !== metrics.length - 1 && "md:pr-8"
          )}
        >
          <div className="flex items-baseline justify-between font-mono">
            <span className="text-[11px] text-signal-lime font-semibold tracking-widest uppercase">
              0{idx + 1} {"//"} {metric.unit}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-signal-border group-hover:bg-signal-lime transition-colors" />
          </div>

          <div className="space-y-1">
            <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-signal-text">
              {metric.value}
            </div>
            <div className="font-mono text-xs font-semibold tracking-wider text-signal-muted uppercase">
              {metric.label}
            </div>
          </div>

          <p className="font-sans text-xs text-signal-muted/80 leading-relaxed pt-1">
            {metric.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
