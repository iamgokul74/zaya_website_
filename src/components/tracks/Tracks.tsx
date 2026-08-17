"use client";

import { motion, Variants } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TRACKS_DATA } from "@/data/tracks";
import { TrackCard } from "./TrackCard";

export function Tracks() {
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
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const featuredTrack = TRACKS_DATA[0];
  const gridTracks = TRACKS_DATA.slice(1);

  return (
    <section
      id="tracks"
      aria-labelledby="tracks-title"
      className="relative py-24 sm:py-36 border-t border-signal-border/40 overflow-hidden bg-signal-bg"
    >
      {/* Subtle Section Divider Line */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-signal-cyan/30 to-transparent"
      />

      <Container showMarkers className="relative z-10 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-signal-border/60">
          <div className="space-y-4 max-w-2xl">
            <SectionLabel code="02" label="THE CHALLENGES" variant="lime" />

            <h2
              id="tracks-title"
              className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-signal-text uppercase leading-none"
            >
              BUILD WHERE <span className="text-signal-lime">THE FUTURE</span>{" "}
              NEEDS YOU.
            </h2>
          </div>

          <p className="font-mono text-xs text-signal-muted tracking-widest uppercase md:text-right max-w-xs">
            09 DOMAINS. INFINITE DIRECTIONS. PICK YOUR SIGNAL AND EXECUTE.
          </p>
        </div>

        {/* Asymmetrical Track Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {/* Domain 01: Featured Large Card */}
          <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-2 lg:row-span-2">
            <TrackCard track={featuredTrack} featured />
          </motion.div>

          {/* Domains 02 - 09: Structured Grid Cards */}
          {gridTracks.map((track) => (
            <motion.div key={track.id} variants={itemVariants}>
              <TrackCard track={track} />
            </motion.div>
          ))}
        </motion.div>

        {/* Tracks Footer Metadata Signal */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-signal-border/30 font-mono text-xs text-signal-muted tracking-widest uppercase">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-signal-lime" />
            <span>ALL DOMAINS ACTIVE &amp; OPEN FOR REGISTRATION</span>
          </div>
          <span>ZAYATHON // SIGNAL &apos;26</span>
        </div>
      </Container>
    </section>
  );
}
