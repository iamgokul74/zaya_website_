import React from "react";
import Link from "next/link";
import { RegistrationFormData } from "@/data/registration";
import { TRACKS_DATA } from "@/data/tracks";
import { ShieldCheck, ExternalLink, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface RegistrationSuccessProps {
  data: RegistrationFormData;
}

export function RegistrationSuccess({ data }: RegistrationSuccessProps) {
  const selectedTrack = TRACKS_DATA.find((t) => t.id === data.trackId);

  return (
    <div className="rounded-2xl border border-signal-lime/60 bg-signal-surface/90 p-8 sm:p-12 backdrop-blur-xl space-y-8 shadow-2xl shadow-signal-lime/10 max-w-3xl mx-auto">
      {/* Header Badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-signal-border pb-6">
        <div className="inline-flex items-center gap-2.5 rounded-full border border-signal-lime/40 bg-signal-lime/10 px-4 py-1.5 font-mono text-xs font-semibold text-signal-lime uppercase">
          <span className="h-2 w-2 rounded-full bg-signal-lime animate-pulse" />
          <span>PROTOCOL DISPATCHED // READY</span>
        </div>

        <span className="font-mono text-xs text-signal-muted tracking-widest uppercase">
          SYS_STATUS: VALIDATED
        </span>
      </div>

      {/* Main Announcement */}
      <div className="space-y-4">
        <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-signal-text uppercase">
          READY TO ENTER <br />
          <span className="text-signal-lime">THE SIGNAL.</span>
        </h2>

        <p className="font-sans text-base text-signal-muted leading-relaxed">
          Your local squad validation protocol for <strong className="text-signal-text font-semibold">{data.teamName}</strong> is complete. Complete the final step to complete official registration.
        </p>
      </div>

      {/* Validated Details Box */}
      <div className="rounded-xl border border-signal-border bg-signal-bg p-6 font-mono text-xs space-y-3">
        <div className="text-signal-lime font-bold border-b border-signal-border/40 pb-2 uppercase">
          VALIDATED SQUAD TELEMETRY
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-signal-text">
          <div>
            <span className="text-signal-muted text-[10px] uppercase block">Squad Name</span>
            <span className="font-bold">{data.teamName}</span>
          </div>
          <div>
            <span className="text-signal-muted text-[10px] uppercase block">Team Leader</span>
            <span>{data.leaderName} ({data.leaderEmail})</span>
          </div>
          <div>
            <span className="text-signal-muted text-[10px] uppercase block">Roster Size</span>
            <span>{data.members.length} Builders</span>
          </div>
          <div>
            <span className="text-signal-muted text-[10px] uppercase block">Challenge Domain</span>
            <span className="text-signal-lime font-semibold">{selectedTrack?.name}</span>
          </div>
        </div>
      </div>

      {/* Handoff Actions */}
      <div className="space-y-4 pt-4 border-t border-signal-border">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="https://www.zayathon.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-signal-lime px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-signal-bg transition-all hover:bg-signal-lime/90 focus-visible:outline-2 focus-visible:outline-signal-lime cursor-pointer"
          >
            CONTINUE TO OFFICIAL REGISTRATION <ExternalLink className="h-4 w-4" />
          </a>

          <Link href="/">
            <Button variant="secondary" size="lg" icon={<ArrowLeft className="h-4 w-4" />}>
              RETURN TO HOME
            </Button>
          </Link>
        </div>

        <p className="font-mono text-[11px] text-signal-muted text-center sm:text-left">
          <ShieldCheck className="h-3.5 w-3.5 text-signal-lime inline mr-1" />
          Official handoff link dispatches to the ZAYATHON official portal.
        </p>
      </div>
    </div>
  );
}
