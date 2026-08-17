import React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface RegistrationProgressProps {
  currentStep: number;
  totalSteps: number;
  onStepClick: (step: number) => void;
}

const STEPS = [
  { number: "01", label: "SQUAD IDENTITY" },
  { number: "02", label: "BUILDER ROSTER" },
  { number: "03", label: "CHALLENGE DOMAIN" },
  { number: "04", label: "COMMAND REVIEW" },
];

export function RegistrationProgress({
  currentStep,
  onStepClick,
}: RegistrationProgressProps) {
  return (
    <nav
      aria-label="Registration Step Progress"
      className="w-full rounded-xl border border-signal-border bg-signal-surface/80 p-4 backdrop-blur-md"
    >
      <ol className="grid grid-cols-2 md:grid-cols-4 gap-3 font-mono text-xs">
        {STEPS.map((step, idx) => {
          const stepNum = idx + 1;
          const isCompleted = stepNum < currentStep;
          const isCurrent = stepNum === currentStep;

          return (
            <li key={step.number}>
              <button
                type="button"
                onClick={() => isCompleted && onStepClick(stepNum)}
                disabled={!isCompleted && !isCurrent}
                aria-current={isCurrent ? "step" : undefined}
                className={cn(
                  "w-full flex items-center gap-2.5 rounded-lg border p-3 text-left transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-signal-lime",
                  isCurrent
                    ? "border-signal-lime bg-signal-elevated text-signal-lime shadow-md shadow-signal-lime/10"
                    : isCompleted
                    ? "border-signal-lime/40 bg-signal-surface/60 text-signal-text hover:border-signal-lime/80"
                    : "border-signal-border/60 bg-signal-bg/50 text-signal-muted cursor-not-allowed opacity-60"
                )}
              >
                <span
                  className={cn(
                    "flex h-6 w-6 items-center justify-center rounded text-[11px] font-bold shrink-0 transition-colors",
                    isCurrent
                      ? "bg-signal-lime text-signal-bg"
                      : isCompleted
                      ? "bg-signal-lime/20 text-signal-lime"
                      : "bg-signal-border text-signal-muted"
                  )}
                >
                  {isCompleted ? <Check className="h-3.5 w-3.5" /> : step.number}
                </span>

                <span className="font-semibold text-[11px] tracking-wider uppercase truncate">
                  {step.label}
                </span>
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
