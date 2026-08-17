"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroSignalField } from "./HeroSignalField";
import { HeroMetadata } from "./HeroMetadata";

export function Hero() {
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

  const lineRevealVariants: Variants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const fadeInVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      aria-labelledby="hero-headline"
      className="relative min-h-[90vh] sm:min-h-screen flex flex-col justify-between pt-28 sm:pt-36 pb-12 overflow-hidden"
    >
      {/* Visual System Background */}
      <HeroSignalField />

      {/* Main Content Area */}
      <Container showMarkers className="relative z-10 my-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl space-y-8"
        >
          {/* Eyebrow Identity Tag */}
          <motion.div
            variants={fadeInVariants}
            className="inline-flex items-center gap-2.5 rounded-full border border-signal-border bg-signal-surface/80 px-3.5 py-1.5 backdrop-blur-sm text-xs font-mono tracking-wider text-signal-muted uppercase"
          >
            <span className="h-2 w-2 rounded-full bg-signal-lime shadow-[0_0_8px_rgba(184,255,61,0.8)] animate-pulse" />
            <span>ZAYA CODE HUB PRESENTS</span>
            <span className="text-signal-border">/</span>
            <span className="text-signal-lime font-semibold">SIGNAL &apos;26</span>
          </motion.div>

          {/* Primary Editorial Headline */}
          <div className="space-y-1">
            <h1
              id="hero-headline"
              className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-signal-text leading-[0.92] uppercase"
            >
              <span className="block overflow-hidden pb-1">
                <motion.span variants={lineRevealVariants} className="block">
                  TURN IDEAS
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-1">
                <motion.span variants={lineRevealVariants} className="block">
                  INTO{" "}
                  <span className="relative inline-block text-signal-text">
                    IMPACT
                    <span className="text-signal-lime font-mono text-3xl sm:text-5xl lg:text-6xl align-super ml-1">
                      .
                    </span>
                  </span>
                </motion.span>
              </span>
            </h1>
          </div>

          {/* Supporting Copy */}
          <motion.p
            variants={fadeInVariants}
            className="text-signal-muted text-base sm:text-xl max-w-2xl font-sans leading-relaxed"
          >
            A high-intensity national technology hackathon where builders, engineers, and problem-solvers turn real-world challenges into production-ready solutions.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            variants={fadeInVariants}
            className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2"
          >
            <Button
              href="/register"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="h-4 w-4" />}
            >
              REGISTER NOW
            </Button>

            <Button
              href="#tracks"
              variant="secondary"
              size="lg"
              icon={<ArrowDown className="h-4 w-4 text-signal-cyan" />}
            >
              EXPLORE TRACKS
            </Button>
          </motion.div>

          {/* Verified Hackathon Metadata Cluster */}
          <motion.div variants={fadeInVariants} className="pt-4 max-w-lg">
            <HeroMetadata />
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll Indicator Prompt */}
      <Container className="relative z-10 pt-8 border-t border-signal-border/30 mt-12">
        <div className="flex items-center justify-between font-mono text-[10px] sm:text-xs text-signal-muted tracking-widest uppercase">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-signal-lime/60" />
            <span>ZAYATHON // SIGNAL ACTIVE</span>
          </div>

          <a
            href="#about"
            className="inline-flex items-center gap-2 hover:text-signal-lime transition-colors group focus-visible:outline-2 focus-visible:outline-signal-lime rounded"
          >
            <span>SCROLL TO EXPLORE</span>
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="h-3.5 w-3.5 text-signal-lime group-hover:translate-y-0.5 transition-transform" />
            </motion.div>
          </a>
        </div>
      </Container>
    </section>
  );
}
