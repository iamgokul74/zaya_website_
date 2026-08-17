import React from "react";
import { UseFormReturn } from "react-hook-form";
import { RegistrationFormData } from "@/data/registration";
import { Users, Mail, Phone, Shield } from "lucide-react";

interface TeamDetailsStepProps {
  form: UseFormReturn<RegistrationFormData>;
}

export function TeamDetailsStep({ form }: TeamDetailsStepProps) {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div className="space-y-6">
      <div className="border-b border-signal-border/60 pb-4">
        <h3 className="font-display text-2xl font-bold tracking-tight text-signal-text uppercase">
          01 // SQUAD IDENTITY &amp; LEADER
        </h3>
        <p className="font-sans text-xs text-signal-muted pt-1">
          Establish your hackathon squad name and primary team leader contact details.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
        {/* Team Name */}
        <div className="space-y-2 md:col-span-2">
          <label htmlFor="teamName" className="flex items-center gap-2 font-semibold text-signal-text uppercase">
            <Users className="h-4 w-4 text-signal-lime" />
            Squad / Team Name <span className="text-signal-lime">*</span>
          </label>
          <input
            id="teamName"
            type="text"
            placeholder="e.g. CYBER_NEXUS"
            {...register("teamName")}
            aria-invalid={errors.teamName ? "true" : "false"}
            aria-describedby={errors.teamName ? "teamName-error" : undefined}
            className="w-full rounded-lg border border-signal-border bg-signal-bg px-4 py-3 text-signal-text placeholder:text-signal-muted/50 focus:border-signal-lime focus:outline-none focus:ring-1 focus:ring-signal-lime"
          />
          {errors.teamName && (
            <p id="teamName-error" role="alert" className="text-red-400 text-[11px] pt-1">
              {errors.teamName.message}
            </p>
          )}
        </div>

        {/* Leader Name */}
        <div className="space-y-2">
          <label htmlFor="leaderName" className="flex items-center gap-2 font-semibold text-signal-text uppercase">
            <Shield className="h-4 w-4 text-signal-cyan" />
            Team Leader Full Name <span className="text-signal-lime">*</span>
          </label>
          <input
            id="leaderName"
            type="text"
            placeholder="e.g. Rahul Yadav"
            {...register("leaderName")}
            aria-invalid={errors.leaderName ? "true" : "false"}
            aria-describedby={errors.leaderName ? "leaderName-error" : undefined}
            className="w-full rounded-lg border border-signal-border bg-signal-bg px-4 py-3 text-signal-text placeholder:text-signal-muted/50 focus:border-signal-lime focus:outline-none focus:ring-1 focus:ring-signal-lime"
          />
          {errors.leaderName && (
            <p id="leaderName-error" role="alert" className="text-red-400 text-[11px] pt-1">
              {errors.leaderName.message}
            </p>
          )}
        </div>

        {/* Leader Email */}
        <div className="space-y-2">
          <label htmlFor="leaderEmail" className="flex items-center gap-2 font-semibold text-signal-text uppercase">
            <Mail className="h-4 w-4 text-signal-lime" />
            Leader Email Address <span className="text-signal-lime">*</span>
          </label>
          <input
            id="leaderEmail"
            type="email"
            placeholder="leader@university.edu"
            {...register("leaderEmail")}
            aria-invalid={errors.leaderEmail ? "true" : "false"}
            aria-describedby={errors.leaderEmail ? "leaderEmail-error" : undefined}
            className="w-full rounded-lg border border-signal-border bg-signal-bg px-4 py-3 text-signal-text placeholder:text-signal-muted/50 focus:border-signal-lime focus:outline-none focus:ring-1 focus:ring-signal-lime"
          />
          {errors.leaderEmail && (
            <p id="leaderEmail-error" role="alert" className="text-red-400 text-[11px] pt-1">
              {errors.leaderEmail.message}
            </p>
          )}
        </div>

        {/* Leader Phone */}
        <div className="space-y-2 md:col-span-2">
          <label htmlFor="leaderPhone" className="flex items-center gap-2 font-semibold text-signal-text uppercase">
            <Phone className="h-4 w-4 text-signal-cyan" />
            Contact Phone Number <span className="text-signal-lime">*</span>
          </label>
          <input
            id="leaderPhone"
            type="tel"
            placeholder="+91 9876543210"
            {...register("leaderPhone")}
            aria-invalid={errors.leaderPhone ? "true" : "false"}
            aria-describedby={errors.leaderPhone ? "leaderPhone-error" : undefined}
            className="w-full rounded-lg border border-signal-border bg-signal-bg px-4 py-3 text-signal-text placeholder:text-signal-muted/50 focus:border-signal-lime focus:outline-none focus:ring-1 focus:ring-signal-lime"
          />
          {errors.leaderPhone && (
            <p id="leaderPhone-error" role="alert" className="text-red-400 text-[11px] pt-1">
              {errors.leaderPhone.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
