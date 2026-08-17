"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TIMELINE_STEPS } from "@/data/timeline";
import { TimelineCheckpoint } from "./TimelineCheckpoint";
import { cn } from "@/lib/utils";

export function Timeline() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="timeline"
      aria-labelledby="timeline-title"
      className="relative py-24 sm:py-36 border-t border-signal-border/40 overflow-hidden bg-signal-bg"
    >
      {/* Subtle Visual Transition & Top Connector Line */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-signal-lime/40 to-transparent"
      />

      <Container showMarkers className="relative z-10 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-signal-border/60">
          <div className="space-y-4 max-w-2xl">
            <SectionLabel code="03" label="THE JOURNEY" variant="lime" />

            <h2
              id="timeline-title"
              className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-signal-text uppercase leading-none"
            >
              FROM FIRST IDEA <br />
              <span className="text-signal-lime">TO FINAL PITCH.</span>
            </h2>
          </div>

          <p className="font-mono text-xs text-signal-muted tracking-widest uppercase md:text-right max-w-xs">
            ONE EVENT. ONE 10-HOUR BUILD SPRINT. A REVOLUTIONARY PROGRESSION.
          </p>
        </div>

        {/* DESKTOP HORIZONTAL TIMELINE PROGRESSION (1024px+) */}
        <div className="hidden lg:block space-y-8">
          {/* Signal Connecting Line */}
          <div aria-hidden="true" className="relative w-full h-1 bg-signal-border/60 rounded-full my-6">
            <motion.div
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-signal-lime via-signal-cyan to-signal-lime rounded-full"
              initial={{ width: "16.66%" }}
              animate={{ width: `${((activeStepIndex + 1) / TIMELINE_STEPS.length) * 100}%` }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />

            {/* Glowing Traveling Signal Point */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 h-3.5 w-3.5 rounded-full bg-signal-lime shadow-[0_0_12px_rgba(184,255,61,0.9)]"
              animate={{ left: `${(activeStepIndex / (TIMELINE_STEPS.length - 1)) * 96}%` }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          </div>

          {/* Desktop Checkpoint Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-3 xl:grid-cols-6 gap-4"
          >
            {TIMELINE_STEPS.map((step, idx) => (
              <motion.div key={step.id} variants={itemVariants}>
                <TimelineCheckpoint
                  step={step}
                  isActive={activeStepIndex === idx}
                  onHover={() => setActiveStepIndex(idx)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* MOBILE & TABLET VERTICAL MISSION CONTROL TIMELINE (< 1024px) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="lg:hidden relative border-l-2 border-signal-border/80 pl-6 sm:pl-8 ml-3 space-y-8"
        >
          {TIMELINE_STEPS.map((step, idx) => (
            <motion.div key={step.id} variants={itemVariants} className="relative">
              {/* Timeline Connector Point */}
              <span
                aria-hidden="true"
                className={cn(
                  "absolute -left-[31px] sm:-left-[39px] top-6 h-4 w-4 rounded-full border-2 border-signal-bg transition-colors",
                  idx <= activeStepIndex
                    ? "bg-signal-lime shadow-[0_0_8px_rgba(184,255,61,0.8)]"
                    : "bg-signal-border"
                )}
              />

              <TimelineCheckpoint
                step={step}
                isActive={activeStepIndex === idx}
                onHover={() => setActiveStepIndex(idx)}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline Footer Metadata Signal */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-signal-border/30 font-mono text-xs text-signal-muted tracking-widest uppercase">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-signal-lime animate-pulse" />
            <span>TIMELINE PROGRESSION // LIVE CHRONOLOGY</span>
          </div>
          <span>ZAYATHON BY ZAYA CODE HUB</span>
        </div>
      </Container>
    </section>
  );
}
