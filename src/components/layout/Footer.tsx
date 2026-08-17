import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { EVENT_CONSTANTS } from "@/data/constants";
import { ArrowRight, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-signal-border/60 bg bg-signal-bg pt-20 pb-12 overflow-hidden text-signal-text">
      {/* Background Signal Grid Layer */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"
      />

      <Container showMarkers className="relative z-10 space-y-16">
        {/* Main Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Brand & Mission Column */}
          <div className="md:col-span-5 space-y-6">
            <Link href="/" className="inline-block group focus-visible:outline-2 focus-visible:outline-signal-lime">
              <span className="font-display text-2xl font-bold tracking-wider text-signal-text group-hover:text-signal-lime transition-colors">
                {EVENT_CONSTANTS.name}
              </span>
              <span className="ml-2 font-mono text-xs font-bold text-signal-lime bg-signal-lime/10 border border-signal-lime/30 px-2 py-0.5 rounded">
                {EVENT_CONSTANTS.year}
              </span>
            </Link>

            <p className="font-sans text-xs sm:text-sm text-signal-muted leading-relaxed max-w-md">
              A high-intensity technology hackathon by ZAYA CODE HUB where builders, designers, and problem-solvers turn real-world challenges into working solutions.
            </p>

            <div className="flex items-center gap-2 font-mono text-xs text-signal-lime">
              <span className="h-2 w-2 rounded-full bg-signal-lime animate-pulse" />
              <span>SYS_SIGNAL: ONLINE // LOC: VIRTUAL</span>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-4 space-y-4 font-mono text-xs">
            <span className="text-signal-muted uppercase tracking-widest block font-bold border-b border-signal-border/40 pb-2">
              NAVIGATION // TELEMETRY
            </span>

            <div className="grid grid-cols-2 gap-2 text-signal-text">
              <Link href="/#about" className="hover:text-signal-lime transition-colors">
                01 // ABOUT
              </Link>
              <Link href="/#tracks" className="hover:text-signal-lime transition-colors">
                02 // TRACKS
              </Link>
              <Link href="/#timeline" className="hover:text-signal-lime transition-colors">
                03 // JOURNEY
              </Link>
              <Link href="/#prizes" className="hover:text-signal-lime transition-colors">
                04 // REWARDS
              </Link>
              <Link href="/#participate" className="hover:text-signal-lime transition-colors">
                05 // WHY US
              </Link>
              <Link href="/#partners" className="hover:text-signal-lime transition-colors">
                06 // NETWORK
              </Link>
              <Link href="/#faq" className="hover:text-signal-lime transition-colors">
                07 // FAQ
              </Link>
              <Link href="/register" className="text-signal-lime hover:underline font-bold">
                08 // REGISTER
              </Link>
            </div>
          </div>

          {/* Quick Handoff Action & External Links */}
          <div className="md:col-span-3 space-y-6">
            <div className="space-y-3">
              <span className="font-mono text-xs text-signal-muted uppercase tracking-widest block font-bold border-b border-signal-border/40 pb-2">
                FINAL HANDOFF
              </span>

              <Button
                href="/register"
                variant="primary"
                size="sm"
                className="w-full justify-between"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                ENTER THE SIGNAL
              </Button>
            </div>

            <div className="space-y-2 font-mono text-[11px] text-signal-muted">
              <span className="block text-signal-muted uppercase font-bold">VERIFIED LINKS</span>
              <a
                href={EVENT_CONSTANTS.organizerWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-signal-text hover:text-signal-lime transition-colors border-b border-signal-border/30 pb-1"
              >
                <span>ZAYA CODE HUB</span>
                <ExternalLink className="h-3 w-3" />
              </a>
              <a
                href={EVENT_CONSTANTS.learningHubWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-signal-text hover:text-signal-lime transition-colors border-b border-signal-border/30 pb-1"
              >
                <span>ZAYA LEARNING HUB</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Technical Copyright Bar */}
        <div className="pt-8 border-t border-signal-border/40 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-signal-muted uppercase">
          <div>
            &copy; 2026 {EVENT_CONSTANTS.organizer}. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-4 text-[10px]">
            <span>DESIGN SYSTEM: ZAYA / SIGNAL</span>
            <span>BUILD: STABLE v1.0</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
