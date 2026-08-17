"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import {
  registrationSchema,
  RegistrationFormData,
  INITIAL_REGISTRATION_DATA,
} from "@/data/registration";
import { RegistrationProgress } from "./RegistrationProgress";
import { TeamDetailsStep } from "./TeamDetailsStep";
import { BuilderDetailsStep } from "./BuilderDetailsStep";
import { TrackSelectionStep } from "./TrackSelectionStep";
import { ReviewStep } from "./ReviewStep";
import { RegistrationSuccess } from "./RegistrationSuccess";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function RegistrationShell() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<RegistrationFormData | null>(null);

  const form = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
    defaultValues: INITIAL_REGISTRATION_DATA,
    mode: "onTouched",
  });

  const { trigger, handleSubmit, formState: { isSubmitting } } = form;

  // Validate fields for current step before advancing
  const handleNextStep = async () => {
    let isValid = false;

    if (currentStep === 1) {
      isValid = await trigger(["teamName", "leaderName", "leaderEmail", "leaderPhone"]);
    } else if (currentStep === 2) {
      isValid = await trigger("members");
    } else if (currentStep === 3) {
      isValid = await trigger("trackId");
    }

    if (isValid && currentStep < 4) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const onSubmit = (data: RegistrationFormData) => {
    setSubmittedData(data);
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isSubmitted && submittedData) {
    return <RegistrationSuccess data={submittedData} />;
  }

  return (
    <div className="space-y-8">
      {/* Registration Command Center Header */}
      <div className="space-y-4 max-w-3xl">
        <SectionLabel code="SYS.REG" label="ENTRY PROTOCOL" variant="lime" />
        <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-signal-text uppercase">
          ENTER THE <span className="text-signal-lime">SIGNAL.</span>
        </h1>
        <p className="text-signal-muted text-base sm:text-lg font-sans leading-relaxed">
          Register your squad, add your builders, select your innovation domain, and dispatch your entry into ZAYATHON &apos;26.
        </p>
      </div>

      {/* Technical Multi-Step Progress Nav */}
      <RegistrationProgress
        currentStep={currentStep}
        totalSteps={4}
        onStepClick={(step) => setCurrentStep(step)}
      />

      {/* Active Step Form Shell */}
      <form onSubmit={handleSubmit(onSubmit)} className="rounded-2xl border border-signal-border bg-signal-surface/80 p-6 sm:p-10 backdrop-blur-md shadow-2xl shadow-black/40 space-y-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            {currentStep === 1 && <TeamDetailsStep form={form} />}
            {currentStep === 2 && <BuilderDetailsStep form={form} />}
            {currentStep === 3 && <TrackSelectionStep form={form} />}
            {currentStep === 4 && (
              <ReviewStep
                form={form}
                onEditStep={(step) => setCurrentStep(step)}
                isSubmitting={isSubmitting}
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Step Navigation Controls (Steps 1 to 3) */}
        {currentStep < 4 && (
          <div className="flex items-center justify-between pt-6 border-t border-signal-border/40 font-mono text-xs">
            {currentStep > 1 ? (
              <Button
                type="button"
                variant="secondary"
                size="md"
                onClick={handlePrevStep}
                icon={<ArrowLeft className="h-4 w-4" />}
                iconPosition="left"
              >
                PREVIOUS STEP
              </Button>
            ) : (
              <div />
            )}

            <Button
              type="button"
              variant="primary"
              size="md"
              onClick={handleNextStep}
              icon={<ArrowRight className="h-4 w-4" />}
            >
              NEXT STEP ({currentStep + 1} / 4)
            </Button>
          </div>
        )}
      </form>
    </div>
  );
}
