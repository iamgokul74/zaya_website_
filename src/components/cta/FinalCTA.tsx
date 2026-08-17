"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section
      id="final-cta"
      aria-labelledby="cta-title"
      className="relative py-28 sm:py-40 border-t border-signal-border/60 overflow-hidden bg-signal-surface"
    >
      {/* Radial Glow Spotlight */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] rounded-full bg-radial-vignette opacity-80 blur-3xl pointer-events-none"
      />

      <Container showMarkers className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl space-y-8 text-left"
        >
          {/* Identity Tag */}
          <SectionLabel code="08" label="FINAL SIGNAL" variant="lime" />

          {/* Headline */}
          <h2
            id="cta-title"
            className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-signal-text uppercase leading-[0.92]"
          >
            YOUR BUILD <br />
            <span className="text-signal-lime">STARTS HERE.</span>
          </h2>

          {/* Supporting Copy */}
          <p className="text-signal-muted text-lg sm:text-xl max-w-2xl font-sans leading-relaxed">
            Choose your challenge domain. Assemble your squad of up to 4 builders. Turn real-world challenges into high-impact production solutions.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-4">
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
              icon={<Terminal className="h-4 w-4 text-signal-cyan" />}
            >
              EXPLORE TRACKS
            </Button>
          </div>

          {/* Technical Metadata Footer Badge */}
          <div className="pt-8 border-t border-signal-border/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-signal-muted tracking-widest uppercase">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-signal-lime animate-pulse" />
              <span>SYSTEM READY // ENTRY POINT / 01</span>
            </div>
            <span>ZAYATHON BY ZAYA CODE HUB &apos;26</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
