"use client";

import { motion, Variants } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ABOUT_MISSION_DATA } from "@/data/about";
import { AboutMetrics } from "./AboutMetrics";

export function About() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative py-24 sm:py-36 border-t border-signal-border/40 overflow-hidden bg-signal-bg"
    >
      {/* Subtle Visual Transition & Signal Connector Line */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-signal-lime/30 to-transparent"
      />

      <Container showMarkers className="relative z-10 space-y-16">
        {/* Asymmetrical Editorial Composition Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
        >
          {/* Left Column: Section Label & Large Editorial Title */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div variants={itemVariants}>
              <SectionLabel
                code={ABOUT_MISSION_DATA.sectionCode}
                label={ABOUT_MISSION_DATA.sectionLabel}
                variant="lime"
              />
            </motion.div>

            <motion.h2
              id="about-title"
              variants={itemVariants}
              className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-signal-text uppercase leading-[0.96]"
            >
              BUILD SOMETHING{" "}
              <span className="block text-signal-lime">THAT MATTERS.</span>
            </motion.h2>
          </div>

          {/* Right Column: Editorial Paragraph & Mission Signal Accent */}
          <div className="lg:col-span-5 space-y-6 lg:pt-14">
            <motion.p
              variants={itemVariants}
              className="text-signal-muted text-base sm:text-lg font-sans leading-relaxed border-l-2 border-signal-lime/50 pl-5"
            >
              {ABOUT_MISSION_DATA.description}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 font-mono text-xs text-signal-muted/80 tracking-widest uppercase pt-2"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-signal-cyan animate-ping" />
              <span>ZAYA CODE HUB // INITIATIVE</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Integrated Metrics Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="pt-4"
        >
          <AboutMetrics metrics={ABOUT_MISSION_DATA.metrics} />
        </motion.div>
      </Container>
    </section>
  );
}
