"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PARTICIPATION_VALUES } from "@/data/participation";
import { cn } from "@/lib/utils";
import { ArrowRight, Check } from "lucide-react";

export function WhyParticipate() {
  const [activeIndex, setActiveIndex] = useState(0);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

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
    <section
      id="participate"
      aria-labelledby="participate-title"
      className="relative py-24 sm:py-36 border-t border-signal-border/40 overflow-hidden bg-signal-bg"
    >
      {/* Connector Divider Line */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-signal-lime/40 to-transparent"
      />

      <Container showMarkers className="relative z-10 space-y-16">
        {/* Asymmetrical Editorial Header Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-6 space-y-6">
            <SectionLabel code="05" label="WHY ZAYATHON" variant="lime" />

            <h2
              id="participate-title"
              className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-signal-text uppercase leading-[0.96]"
            >
              DON&apos;T JUST BUILD. <br />
              <span className="text-signal-lime">BUILD SOMETHING THAT GETS NOTICED.</span>
            </h2>

            <p className="text-signal-muted text-base sm:text-lg font-sans leading-relaxed">
              ZAYATHON provides high-intensity technical exposure, direct career opportunities, and national recognition for serious student innovators.
            </p>
          </div>

          {/* Right Active Value Preview Box (Desktop) */}
          <div className="lg:col-span-6 hidden lg:block lg:pt-14">
            <div className="rounded-2xl border border-signal-lime/60 bg-signal-elevated p-8 backdrop-blur-md space-y-6 shadow-2xl shadow-signal-lime/5">
              <div className="flex items-center justify-between font-mono text-xs border-b border-signal-border/60 pb-3">
                <span className="text-signal-lime font-bold">
                  PROPOSITION // {PARTICIPATION_VALUES[activeIndex].number}
                </span>
                <span className="text-signal-muted uppercase">
                  {PARTICIPATION_VALUES[activeIndex].category}
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="font-display text-3xl font-bold text-signal-text uppercase">
                  {PARTICIPATION_VALUES[activeIndex].title}
                </h3>
                <p className="font-sans text-sm text-signal-muted leading-relaxed">
                  {PARTICIPATION_VALUES[activeIndex].description}
                </p>
              </div>

              <div className="inline-flex items-center gap-2 rounded border border-signal-lime/40 bg-signal-lime/10 px-3 py-1.5 font-mono text-xs text-signal-lime">
                <Check className="h-4 w-4" />
                <span>{PARTICIPATION_VALUES[activeIndex].highlight}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Builder Journey Value List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {PARTICIPATION_VALUES.map((item, idx) => {
            const isSelected = activeIndex === idx;
            const isLime = item.accent === "lime";

            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                onMouseEnter={() => setActiveIndex(idx)}
                className={cn(
                  "group relative flex flex-col justify-between rounded-xl border border-signal-border bg-signal-surface/80 p-6 backdrop-blur-md transition-all duration-300 hover:border-signal-lime/60 hover:bg-signal-elevated cursor-pointer",
                  isSelected && "border-signal-lime/80 bg-signal-elevated shadow-lg shadow-black/40"
                )}
              >
                <div className="flex items-center justify-between border-b border-signal-border/40 pb-3 mb-3 font-mono text-xs">
                  <span
                    className={cn(
                      "font-bold",
                      isLime ? "text-signal-lime" : "text-signal-cyan"
                    )}
                  >
                    {item.number}
                  </span>
                  <span className="text-signal-muted text-[10px] tracking-wider uppercase">
                    {item.category}
                  </span>
                </div>

                <div className="space-y-2 my-auto">
                  <h3 className="font-display text-xl font-bold tracking-tight text-signal-text group-hover:text-signal-lime transition-colors uppercase">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-signal-muted leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 mt-4 border-t border-signal-border/30 font-mono text-[10px] text-signal-muted tracking-widest uppercase">
                  <span className="text-signal-lime/90 font-medium">
                    {item.highlight}
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 text-signal-muted group-hover:text-signal-lime group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
