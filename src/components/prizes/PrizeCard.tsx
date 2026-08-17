import React from "react";
import { Trophy, Award, CheckCircle2 } from "lucide-react";
import { Prize } from "@/data/prizes";
import { cn } from "@/lib/utils";

interface PrizeCardProps {
  prize: Prize;
  className?: string;
}

export function PrizeCard({ prize, className }: PrizeCardProps) {
  const isLime = prize.accent === "lime";
  const isCyan = prize.accent === "cyan";

  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-signal-border bg-signal-surface/80 p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:border-signal-lime/60 hover:bg-signal-elevated hover:shadow-2xl hover:shadow-black/50",
        prize.featured
          ? "border-signal-lime/80 bg-signal-elevated shadow-xl shadow-signal-lime/10 lg:p-10 min-h-[380px]"
          : "min-h-[320px]",
        className
      )}
    >
      {/* Background Signal Highlight */}
      {prize.featured && (
        <div
          aria-hidden="true"
          className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-signal-lime/10 blur-3xl pointer-events-none"
        />
      )}

      {/* Top Header Bar */}
      <div className="relative z-10 flex items-center justify-between border-b border-signal-border/40 pb-4 mb-4 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span
            className={cn(
              "font-bold text-lg sm:text-xl tracking-tight",
              isLime ? "text-signal-lime" : isCyan ? "text-signal-cyan" : "text-signal-muted"
            )}
          >
            {prize.rank}
          </span>
          <span className="text-signal-border">/</span>
          <span className="text-signal-muted tracking-wider uppercase text-[10px]">
            {prize.badge}
          </span>
        </div>

        <div
          className={cn(
            "inline-flex h-9 w-9 items-center justify-center rounded-lg border bg-signal-bg transition-colors",
            isLime
              ? "border-signal-lime/50 text-signal-lime"
              : isCyan
              ? "border-signal-cyan/50 text-signal-cyan"
              : "border-signal-border text-signal-muted"
          )}
        >
          {prize.featured ? <Trophy className="h-5 w-5" /> : <Award className="h-5 w-5" />}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 space-y-4 my-auto">
        <div>
          <h3
            className={cn(
              "font-display font-bold tracking-tight text-signal-text group-hover:text-signal-lime transition-colors uppercase leading-tight",
              prize.featured ? "text-2xl sm:text-4xl" : "text-xl sm:text-2xl"
            )}
          >
            {prize.title}
          </h3>
          {prize.amount && (
            <div className="font-mono text-xl sm:text-2xl font-bold text-signal-lime pt-1">
              {prize.amount}
            </div>
          )}
        </div>

        <p className="font-sans text-xs sm:text-sm text-signal-muted leading-relaxed">
          {prize.description}
        </p>

        {/* Rewards Bullet List */}
        <ul className="space-y-2 pt-2 border-t border-signal-border/30">
          {prize.rewards.map((reward, i) => (
            <li key={i} className="flex items-center gap-2 font-mono text-xs text-signal-text/90">
              <CheckCircle2 className="h-3.5 w-3.5 text-signal-lime shrink-0" />
              <span>{reward}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Technical Status Bar */}
      <div className="relative z-10 flex items-center justify-between pt-4 border-t border-signal-border/30 mt-6 font-mono text-[10px] text-signal-muted tracking-widest uppercase">
        <div className="flex items-center gap-1.5">
          <span
            className={cn(
              "h-1.5 w-1.5 rounded-full",
              isLime
                ? "bg-signal-lime shadow-[0_0_6px_rgba(184,255,61,0.8)]"
                : "bg-signal-cyan"
            )}
          />
          <span>VERIFIED REWARD</span>
        </div>
        <span>ZAYA SIGNAL</span>
      </div>
    </div>
  );
}
