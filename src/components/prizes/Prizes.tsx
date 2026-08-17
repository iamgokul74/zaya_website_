"use client";

import { motion, Variants } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PRIZES_DATA, SPECIAL_REWARDS_DATA } from "@/data/prizes";
import { PrizeCard } from "./PrizeCard";
import { Award, Briefcase, FileCheck } from "lucide-react";

export function Prizes() {
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

  const grandWinner = PRIZES_DATA[0];
  const podiumRunners = PRIZES_DATA.slice(1);

  return (
    <section
      id="prizes"
      aria-labelledby="prizes-title"
      className="relative py-24 sm:py-36 border-t border-signal-border/40 overflow-hidden bg-signal-bg"
    >
      {/* Subtle Divider Overlay */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-signal-lime/40 to-transparent"
      />

      <Container showMarkers className="relative z-10 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-signal-border/60">
          <div className="space-y-4 max-w-2xl">
            <SectionLabel code="04" label="THE REWARD" variant="lime" />

            <h2
              id="prizes-title"
              className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-signal-text uppercase leading-none"
            >
              BUILD. <span className="text-signal-lime">PROVE.</span> WIN.
            </h2>
          </div>

          <p className="font-mono text-xs text-signal-muted tracking-widest uppercase md:text-right max-w-xs">
            EXCELLENCE RECOGNIZED. TOP HARDWARE &amp; SOFTWARE BUILDERS REWARDED.
          </p>
        </div>

        {/* Podium Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="space-y-6"
        >
          {/* #01 Grand Winner (Top Dominant Card) */}
          <motion.div variants={itemVariants} className="w-full">
            <PrizeCard prize={grandWinner} />
          </motion.div>

          {/* #02 & #03 Runners Up (2-Column Grid) */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {podiumRunners.map((prize) => (
              <motion.div key={prize.id} variants={itemVariants}>
                <PrizeCard prize={prize} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Special Category Recognition & Career Opportunity Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6 pt-6"
        >
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-signal-lime animate-pulse" />
            <h3 className="font-mono text-xs font-semibold text-signal-text tracking-widest uppercase">
              SPECIAL CATEGORIES &amp; RECOGNITION
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SPECIAL_REWARDS_DATA.map((item, idx) => (
              <div
                key={item.id}
                className="rounded-xl border border-signal-border/80 bg-signal-surface/60 p-6 backdrop-blur-md space-y-3 hover:border-signal-lime/50 transition-colors"
              >
                <div className="flex items-center justify-between font-mono text-[10px] text-signal-muted tracking-widest uppercase">
                  <span>{item.category}</span>
                  <span className="text-signal-lime font-semibold">{item.badge}</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-signal-bg border border-signal-border text-signal-lime shrink-0">
                    {idx === 0 ? (
                      <Award className="h-5 w-5" />
                    ) : idx === 1 ? (
                      <Briefcase className="h-5 w-5 text-signal-cyan" />
                    ) : (
                      <FileCheck className="h-5 w-5 text-signal-lime" />
                    )}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-display font-bold text-lg text-signal-text uppercase">
                      {item.title}
                    </h4>
                    <p className="font-sans text-xs text-signal-muted leading-relaxed">
                      {item.perks}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Section Footer Marker */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-signal-border/30 font-mono text-xs text-signal-muted tracking-widest uppercase">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-signal-lime" />
            <span>ALL SUBMISSIONS EVALUATED BY EXPERT JURY</span>
          </div>
          <span>ZAYATHON REWARD SYSTEM</span>
        </div>
      </Container>
    </section>
  );
}
