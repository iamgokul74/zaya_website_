"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FAQItemData } from "@/data/faq";
import { cn } from "@/lib/utils";

interface FAQItemProps {
  item: FAQItemData;
  isOpen: boolean;
  onToggle: () => void;
}

export function FAQItem({ item, isOpen, onToggle }: FAQItemProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-signal-border/80 bg-signal-surface/80 transition-all duration-300 overflow-hidden",
        isOpen && "border-signal-lime/60 bg-signal-elevated shadow-lg shadow-black/40"
      )}
    >
      <button
        type="button"
        id={`faq-trigger-${item.id}`}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus-visible:outline-2 focus-visible:outline-signal-lime focus-visible:outline-offset-2 cursor-pointer group"
      >
        <div className="flex items-center gap-3 sm:gap-4 pr-4">
          <span className="font-mono text-xs sm:text-sm font-bold text-signal-lime tracking-wider shrink-0">
            {item.number}
          </span>
          <span className="font-mono text-[10px] text-signal-border font-light shrink-0">|</span>
          <h3 className="font-display text-base sm:text-lg font-bold tracking-tight text-signal-text group-hover:text-signal-lime transition-colors uppercase leading-tight">
            {item.question}
          </h3>
        </div>

        <div
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded-lg border bg-signal-bg shrink-0 transition-colors",
            isOpen
              ? "border-signal-lime text-signal-lime bg-signal-lime/10"
              : "border-signal-border text-signal-muted group-hover:border-signal-lime/60 group-hover:text-signal-text"
          )}
        >
          {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${item.id}`}
            role="region"
            aria-labelledby={`faq-trigger-${item.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-signal-border/40 font-sans text-xs sm:text-sm text-signal-muted leading-relaxed">
              <p>{item.answer}</p>
              <div className="mt-3 flex items-center gap-2 font-mono text-[10px] text-signal-lime/80 uppercase tracking-widest">
                <span className="h-1 w-1 rounded-full bg-signal-lime" />
                <span>INTEL VERIFIED // {item.category}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
