"use client";

import { motion, Variants } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PARTNERS_DATA } from "@/data/partners";
import { ExternalLink, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export function Partners() {
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
    hidden: { opacity: 0, y: 20 },
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
      id="partners"
      aria-labelledby="partners-title"
      className="relative py-24 sm:py-32 border-t border-signal-border/40 overflow-hidden bg-signal-bg"
    >
      {/* Subtle Connector Divider Line */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-signal-cyan/40 to-transparent"
      />

      <Container showMarkers className="relative z-10 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-signal-border/60">
          <div className="space-y-4 max-w-2xl">
            <SectionLabel code="06" label="NETWORK" variant="lime" />

            <h2
              id="partners-title"
              className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-signal-text uppercase leading-none"
            >
              BACKED BY <span className="text-signal-lime">THE NETWORK.</span>
            </h2>
          </div>

          <p className="font-mono text-xs text-signal-muted tracking-widest uppercase md:text-right max-w-xs">
            ORGANIZED &amp; POWERED BY ZAYA CODE HUB DEVELOPER ECOSYSTEM.
          </p>
        </div>

        {/* Typographic Partner Network Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {PARTNERS_DATA.map((partner) => {
            const isLime = partner.accent === "lime";

            const Content = (
              <div
                className={cn(
                  "group relative flex flex-col justify-between rounded-xl border border-signal-border bg-signal-surface/80 p-6 backdrop-blur-md transition-all duration-300 hover:border-signal-lime/60 hover:bg-signal-elevated hover:shadow-xl hover:shadow-black/40 h-full",
                  partner.tier === "ORGANIZER" && "border-signal-lime/60 bg-signal-elevated"
                )}
              >
                <div className="flex items-center justify-between border-b border-signal-border/40 pb-3 mb-3 font-mono text-xs">
                  <span className="text-signal-muted text-[10px] tracking-wider uppercase">
                    {partner.type}
                  </span>
                  <span
                    className={cn(
                      "inline-flex items-center gap-1 rounded border px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase",
                      isLime
                        ? "border-signal-lime/40 bg-signal-lime/10 text-signal-lime"
                        : "border-signal-cyan/40 bg-signal-cyan/10 text-signal-cyan"
                    )}
                  >
                    <ShieldCheck className="h-3 w-3" />
                    {partner.tier}
                  </span>
                </div>

                <div className="space-y-2 my-auto py-2">
                  <h3 className="font-display text-2xl font-bold tracking-tight text-signal-text group-hover:text-signal-lime transition-colors uppercase">
                    {partner.name}
                  </h3>
                  <p className="font-sans text-xs text-signal-muted leading-relaxed">
                    {partner.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 mt-3 border-t border-signal-border/30 font-mono text-[10px] text-signal-muted tracking-widest uppercase">
                  <span>VERIFIED PARTNER</span>
                  {partner.url ? (
                    <span className="inline-flex items-center gap-1 text-signal-lime group-hover:underline">
                      VISIT SITE <ExternalLink className="h-3 w-3" />
                    </span>
                  ) : (
                    <span>ACTIVE</span>
                  )}
                </div>
              </div>
            );

            if (partner.url) {
              return (
                <motion.a
                  key={partner.id}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  className="block h-full focus-visible:outline-2 focus-visible:outline-signal-lime focus-visible:outline-offset-2 rounded-xl"
                >
                  {Content}
                </motion.a>
              );
            }

            return (
              <motion.div key={partner.id} variants={itemVariants}>
                {Content}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Section Footer Signal */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-signal-border/30 font-mono text-xs text-signal-muted tracking-widest uppercase">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-signal-lime" />
            <span>ZAYA CODE HUB COMMUNITY &amp; PARTNER NETWORK</span>
          </div>
          <span>OFFICIAL EVENT PARTNERSHIP</span>
        </div>
      </Container>
    </section>
  );
}
