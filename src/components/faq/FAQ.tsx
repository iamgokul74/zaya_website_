"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FAQ_DATA } from "@/data/faq";
import { FAQItem } from "./FAQItem";

export function FAQ() {
  const [openId, setOpenId] = useState<string>("eligibility");

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
      id="faq"
      aria-labelledby="faq-title"
      className="relative py-24 sm:py-36 border-t border-signal-border/40 overflow-hidden bg-signal-bg"
    >
      {/* Subtle Divider Line */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-signal-lime/40 to-transparent"
      />

      <Container showMarkers className="relative z-10 space-y-16">
        {/* Asymmetrical Layout Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <SectionLabel code="07" label="INTEL" variant="lime" />

            <h2
              id="faq-title"
              className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-signal-text uppercase leading-[0.96]"
            >
              QUESTIONS? <br />
              <span className="text-signal-lime">CHECK THE SIGNAL.</span>
            </h2>

            <p className="text-signal-muted text-base sm:text-lg font-sans leading-relaxed">
              Essential technical &amp; operational information for student builders, squad team leaders, and hackathon participants.
            </p>

            <div className="hidden lg:flex items-center gap-2 font-mono text-xs text-signal-muted tracking-widest uppercase pt-4 border-t border-signal-border/40">
              <span className="h-2 w-2 rounded-full bg-signal-lime animate-pulse" />
              <span>KNOWLEDGE TELEMETRY ACTIVE</span>
            </div>
          </div>

          {/* Accordion Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-7 space-y-4"
          >
            {FAQ_DATA.map((item) => (
              <motion.div key={item.id} variants={itemVariants}>
                <FAQItem
                  item={item}
                  isOpen={openId === item.id}
                  onToggle={() => setOpenId(openId === item.id ? "" : item.id)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
