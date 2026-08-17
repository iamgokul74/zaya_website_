import React from "react";
import { UseFormReturn } from "react-hook-form";
import { RegistrationFormData } from "@/data/registration";
import { TRACKS_DATA } from "@/data/tracks";
import { Check, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

interface TrackSelectionStepProps {
  form: UseFormReturn<RegistrationFormData>;
}

export function TrackSelectionStep({ form }: TrackSelectionStepProps) {
  const {
    setValue,
    watch,
    formState: { errors },
  } = form;

  const selectedTrackId = watch("trackId");

  return (
    <div className="space-y-6">
      <div className="border-b border-signal-border/60 pb-4">
        <h3 className="font-display text-2xl font-bold tracking-tight text-signal-text uppercase">
          03 // CHALLENGE DOMAIN SELECTION
        </h3>
        <p className="font-sans text-xs text-signal-muted pt-1">
          Select 1 primary innovation domain for your hackathon prototype.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {TRACKS_DATA.map((track) => {
          const isSelected = selectedTrackId === track.id;

          return (
            <button
              key={track.id}
              type="button"
              onClick={() => setValue("trackId", track.id, { shouldValidate: true })}
              aria-pressed={isSelected}
              className={cn(
                "group relative flex flex-col justify-between rounded-xl border border-signal-border bg-signal-surface/80 p-5 text-left transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-signal-lime focus-visible:outline-offset-2",
                isSelected
                  ? "border-signal-lime bg-signal-elevated shadow-lg shadow-signal-lime/10 ring-1 ring-signal-lime/50"
                  : "hover:border-signal-lime/50 hover:bg-signal-elevated"
              )}
            >
              <div className="flex items-center justify-between border-b border-signal-border/40 pb-2.5 mb-2.5 font-mono text-xs">
                <span className="font-bold text-signal-lime">{track.number}</span>
                <span className="text-signal-muted text-[10px] uppercase truncate max-w-[140px]">
                  {track.category}
                </span>
              </div>

              <div className="space-y-1.5 my-auto">
                <h4 className="font-display font-bold text-base text-signal-text group-hover:text-signal-lime transition-colors uppercase leading-tight">
                  {track.name}
                </h4>
                <p className="font-sans text-xs text-signal-muted line-clamp-2 leading-relaxed">
                  {track.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 mt-3 border-t border-signal-border/30 font-mono text-[10px] uppercase">
                <span className="text-signal-muted">DOMAIN</span>
                <div
                  className={cn(
                    "flex h-5 w-5 items-center justify-center rounded border transition-colors",
                    isSelected
                      ? "border-signal-lime bg-signal-lime text-signal-bg"
                      : "border-signal-border bg-signal-bg text-transparent group-hover:border-signal-lime/40"
                  )}
                >
                  <Check className="h-3 w-3" />
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {errors.trackId && (
        <p role="alert" className="text-red-400 font-mono text-xs">
          {errors.trackId.message}
        </p>
      )}

      <div className="rounded-lg border border-signal-border/60 bg-signal-surface/40 p-4 font-mono text-xs text-signal-muted flex items-center gap-2">
        <Layers className="h-4 w-4 text-signal-cyan shrink-0" />
        <span>You can adjust your domain track selection prior to the 10-hour sprint kickoff.</span>
      </div>
    </div>
  );
}
