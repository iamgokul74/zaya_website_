"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Shield } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "ABOUT", href: "/#about" },
  { label: "TRACKS", href: "/#tracks" },
  { label: "TIMELINE", href: "/#timeline" },
  { label: "PRIZES", href: "/#prizes" },
  { label: "WHY US", href: "/#participate" },
  { label: "NETWORK", href: "/#partners" },
  { label: "FAQ", href: "/#faq" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-signal-bg/85 backdrop-blur-md border-b border-signal-border/60 py-3 shadow-lg shadow-black/40"
          : "bg-transparent py-5"
      )}
    >
      <Container className="flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group focus-visible:outline-2 focus-visible:outline-signal-lime focus-visible:outline-offset-2 rounded"
        >
          <span className="font-display font-bold text-xl sm:text-2xl tracking-wider text-signal-text group-hover:text-signal-lime transition-colors">
            ZAYATHON
          </span>
          <span className="font-mono text-xs font-bold text-signal-lime bg-signal-lime/10 border border-signal-lime/30 px-2 py-0.5 rounded">
            &apos;26
          </span>
        </Link>

        {/* Desktop Navigation Pill */}
        <nav
          aria-label="Main Navigation"
          className="hidden lg:flex items-center gap-1 rounded-full border border-signal-border/80 bg-signal-surface/80 px-4 py-1.5 backdrop-blur-md shadow-inner"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-mono text-xs font-medium text-signal-muted hover:text-signal-lime transition-colors px-3 py-1.5 rounded-full hover:bg-signal-elevated focus-visible:outline-2 focus-visible:outline-signal-lime"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Primary Action */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            href="/register"
            variant="primary"
            size="sm"
            icon={<ArrowRight className="h-4 w-4" />}
          >
            REGISTER
          </Button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-signal-border bg-signal-surface text-signal-text hover:border-signal-lime hover:text-signal-lime transition-colors focus-visible:outline-2 focus-visible:outline-signal-lime cursor-pointer"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="lg:hidden fixed inset-x-0 top-[65px] bottom-0 z-40 bg-signal-bg/95 backdrop-blur-xl border-b border-signal-border p-6 flex flex-col justify-between overflow-y-auto"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-signal-border/60 pb-3 font-mono text-xs text-signal-muted">
                <span>NAVIGATION TELEMETRY</span>
                <span className="text-signal-lime flex items-center gap-1">
                  <Shield className="h-3.5 w-3.5" /> ACTIVE
                </span>
              </div>

              <nav className="flex flex-col space-y-2">
                {NAV_LINKS.map((link, idx) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-display font-bold text-2xl text-signal-text hover:text-signal-lime transition-colors py-2 border-b border-signal-border/30 flex items-center justify-between uppercase"
                  >
                    <span>{link.label}</span>
                    <span className="font-mono text-xs text-signal-muted">0{idx + 1}</span>
                  </Link>
                ))}
              </nav>
            </div>

            <div className="pt-6 space-y-4">
              <Button
                href="/register"
                variant="primary"
                size="lg"
                className="w-full"
                onClick={() => setMobileMenuOpen(false)}
                icon={<ArrowRight className="h-4 w-4" />}
              >
                REGISTER NOW
              </Button>

              <div className="text-center font-mono text-[10px] text-signal-muted uppercase tracking-widest">
                ZAYATHON &apos;26 // ZAYA CODE HUB
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
