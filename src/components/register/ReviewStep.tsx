import React from "react";
import { UseFormReturn } from "react-hook-form";
import { RegistrationFormData } from "@/data/registration";
import { TRACKS_DATA } from "@/data/tracks";
import { ShieldCheck, Edit3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ReviewStepProps {
  form: UseFormReturn<RegistrationFormData>;
  onEditStep: (step: number) => void;
  isSubmitting: boolean;
}

export function ReviewStep({ form, onEditStep, isSubmitting }: ReviewStepProps) {
  const { getValues, register, formState: { errors } } = form;
  const data = getValues();

  const selectedTrack = TRACKS_DATA.find((t) => t.id === data.trackId);

  return (
    <div className="space-y-6">
      <div className="border-b border-signal-border/60 pb-4">
        <h3 className="font-display text-2xl font-bold tracking-tight text-signal-text uppercase">
          04 // COMMAND REVIEW &amp; CONFIRMATION
        </h3>
        <p className="font-sans text-xs text-signal-muted pt-1">
          Review your squad identity, builder roster, and domain selection before dispatching registration.
        </p>
      </div>

      <div className="space-y-6 font-mono text-xs">
        {/* Squad & Leader Summary */}
        <div className="rounded-xl border border-signal-border bg-signal-surface/60 p-5 space-y-3">
          <div className="flex items-center justify-between border-b border-signal-border/40 pb-2">
            <span className="font-bold text-signal-lime uppercase">SQUAD &amp; LEADER</span>
            <button
              type="button"
              onClick={() => onEditStep(1)}
              className="inline-flex items-center gap-1 text-[11px] text-signal-cyan hover:underline cursor-pointer"
            >
              <Edit3 className="h-3 w-3" /> EDIT STEP 01
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-signal-text">
            <div>
              <span className="text-signal-muted text-[10px] uppercase block">Squad Name</span>
              <span className="font-bold text-base">{data.teamName}</span>
            </div>
            <div>
              <span className="text-signal-muted text-[10px] uppercase block">Team Leader</span>
              <span className="font-semibold">{data.leaderName}</span>
            </div>
            <div>
              <span className="text-signal-muted text-[10px] uppercase block">Leader Email</span>
              <span>{data.leaderEmail}</span>
            </div>
            <div>
              <span className="text-signal-muted text-[10px] uppercase block">Leader Phone</span>
              <span>{data.leaderPhone}</span>
            </div>
          </div>
        </div>

        {/* Builder Roster Summary */}
        <div className="rounded-xl border border-signal-border bg-signal-surface/60 p-5 space-y-3">
          <div className="flex items-center justify-between border-b border-signal-border/40 pb-2">
            <span className="font-bold text-signal-lime uppercase">
              BUILDER ROSTER ({data.members.length} / 4)
            </span>
            <button
              type="button"
              onClick={() => onEditStep(2)}
              className="inline-flex items-center gap-1 text-[11px] text-signal-cyan hover:underline cursor-pointer"
            >
              <Edit3 className="h-3 w-3" /> EDIT STEP 02
            </button>
          </div>

          <div className="space-y-2">
            {data.members.map((member, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-signal-border/20 pb-2 text-signal-text">
                <div>
                  <span className="text-signal-lime font-bold">{`0${i + 1}.`}</span>{" "}
                  <span className="font-semibold">{member.name}</span>
                  <span className="text-signal-muted text-[11px]"> ({member.email})</span>
                </div>
                <div className="text-signal-muted text-[11px]">
                  {member.college} {"//"} {member.year}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Track Selection Summary */}
        <div className="rounded-xl border border-signal-border bg-signal-surface/60 p-5 space-y-3">
          <div className="flex items-center justify-between border-b border-signal-border/40 pb-2">
            <span className="font-bold text-signal-lime uppercase">CHALLENGE DOMAIN</span>
            <button
              type="button"
              onClick={() => onEditStep(3)}
              className="inline-flex items-center gap-1 text-[11px] text-signal-cyan hover:underline cursor-pointer"
            >
              <Edit3 className="h-3 w-3" /> EDIT STEP 03
            </button>
          </div>

          <div className="flex items-center justify-between text-signal-text">
            <div>
              <span className="text-signal-muted text-[10px] uppercase block">Selected Track</span>
              <span className="font-display font-bold text-lg text-signal-lime">
                {selectedTrack?.name}
              </span>
            </div>
            <span className="rounded border border-signal-lime/40 bg-signal-lime/10 px-2.5 py-1 text-[11px] text-signal-lime font-mono uppercase">
              {selectedTrack?.category}
            </span>
          </div>
        </div>

        {/* Code of Conduct Consent */}
        <div className="rounded-xl border border-signal-border bg-signal-surface/40 p-5 space-y-2">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              {...register("acceptedTerms")}
              className="mt-1 h-4 w-4 rounded border-signal-border bg-signal-bg text-signal-lime focus:ring-signal-lime cursor-pointer"
            />
            <span className="text-xs text-signal-muted leading-relaxed">
              I confirm that all team information is accurate, all squad members satisfy eligibility criteria (up to 3rd year undergraduate), and our squad agrees to adhere to the ZAYATHON Code of Conduct.
            </span>
          </label>
          {errors.acceptedTerms && (
            <p role="alert" className="text-red-400 text-[11px] pt-1">
              {errors.acceptedTerms.message}
            </p>
          )}
        </div>
      </div>

      {/* Command Submit Action */}
      <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-signal-border/40">
        <div className="flex items-center gap-2 font-mono text-xs text-signal-muted">
          <ShieldCheck className="h-4 w-4 text-signal-lime" />
          <span>READY FOR SIGNAL DISPATCH</span>
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          icon={<ArrowRight className="h-4 w-4" />}
        >
          {isSubmitting ? "DISPATCHING PROTOCOL..." : "DISPATCH REGISTRATION"}
        </Button>
      </div>
    </div>
  );
}
