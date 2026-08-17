import React from "react";
import { UseFormReturn, useFieldArray } from "react-hook-form";
import { RegistrationFormData } from "@/data/registration";
import { User, Plus, Trash2, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface BuilderDetailsStepProps {
  form: UseFormReturn<RegistrationFormData>;
}

export function BuilderDetailsStep({ form }: BuilderDetailsStepProps) {
  const {
    control,
    register,
    formState: { errors },
  } = form;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "members",
  });

  const canAddMore = fields.length < 4;

  const handleAddBuilder = () => {
    if (canAddMore) {
      append({
        name: "",
        email: "",
        college: "",
        year: "3rd Year",
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-signal-border/60 pb-4">
        <div>
          <h3 className="font-display text-2xl font-bold tracking-tight text-signal-text uppercase">
            02 // BUILDER ROSTER ({fields.length} / 4)
          </h3>
          <p className="font-sans text-xs text-signal-muted pt-1">
            Specify team member details. Squads can consist of 1 to 4 builders max.
          </p>
        </div>

        {canAddMore && (
          <Button
            type="button"
            variant="secondary"
            size="sm"
            onClick={handleAddBuilder}
            icon={<Plus className="h-4 w-4 text-signal-lime" />}
          >
            ADD BUILDER
          </Button>
        )}
      </div>

      <div className="space-y-6">
        {fields.map((field, index) => {
          const isLeader = index === 0;

          return (
            <div
              key={field.id}
              className="rounded-xl border border-signal-border/80 bg-signal-surface/60 p-5 space-y-4 font-mono text-xs relative"
            >
              <div className="flex items-center justify-between border-b border-signal-border/40 pb-2">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-signal-lime">
                    BUILDER 0{index + 1}
                  </span>
                  {isLeader && (
                    <span className="rounded bg-signal-lime/20 border border-signal-lime/40 px-2 py-0.5 text-[10px] text-signal-lime">
                      TEAM LEADER
                    </span>
                  )}
                </div>

                {!isLeader && fields.length > 1 && (
                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="inline-flex items-center gap-1 text-[11px] text-red-400 hover:text-red-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-red-400 rounded"
                  >
                    <Trash2 className="h-3.5 w-3.5" /> REMOVE
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label
                    htmlFor={`members.${index}.name`}
                    className="flex items-center gap-1.5 font-semibold text-signal-text uppercase text-[11px]"
                  >
                    <User className="h-3.5 w-3.5 text-signal-lime" />
                    Full Name <span className="text-signal-lime">*</span>
                  </label>
                  <input
                    id={`members.${index}.name`}
                    type="text"
                    placeholder="Builder Name"
                    {...register(`members.${index}.name` as const)}
                    className="w-full rounded-lg border border-signal-border bg-signal-bg px-3.5 py-2.5 text-signal-text placeholder:text-signal-muted/50 focus:border-signal-lime focus:outline-none"
                  />
                  {errors.members?.[index]?.name && (
                    <p className="text-red-400 text-[10px]">
                      {errors.members[index]?.name?.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label
                    htmlFor={`members.${index}.email`}
                    className="flex items-center gap-1.5 font-semibold text-signal-text uppercase text-[11px]"
                  >
                    Email Address <span className="text-signal-lime">*</span>
                  </label>
                  <input
                    id={`members.${index}.email`}
                    type="email"
                    placeholder="builder@univ.edu"
                    {...register(`members.${index}.email` as const)}
                    className="w-full rounded-lg border border-signal-border bg-signal-bg px-3.5 py-2.5 text-signal-text placeholder:text-signal-muted/50 focus:border-signal-lime focus:outline-none"
                  />
                  {errors.members?.[index]?.email && (
                    <p className="text-red-400 text-[10px]">
                      {errors.members[index]?.email?.message}
                    </p>
                  )}
                </div>

                {/* College / University */}
                <div className="space-y-1.5">
                  <label
                    htmlFor={`members.${index}.college`}
                    className="flex items-center gap-1.5 font-semibold text-signal-text uppercase text-[11px]"
                  >
                    <GraduationCap className="h-3.5 w-3.5 text-signal-cyan" />
                    College / University <span className="text-signal-lime">*</span>
                  </label>
                  <input
                    id={`members.${index}.college`}
                    type="text"
                    placeholder="Institute Name"
                    {...register(`members.${index}.college` as const)}
                    className="w-full rounded-lg border border-signal-border bg-signal-bg px-3.5 py-2.5 text-signal-text placeholder:text-signal-muted/50 focus:border-signal-lime focus:outline-none"
                  />
                  {errors.members?.[index]?.college && (
                    <p className="text-red-400 text-[10px]">
                      {errors.members[index]?.college?.message}
                    </p>
                  )}
                </div>

                {/* Academic Year */}
                <div className="space-y-1.5">
                  <label
                    htmlFor={`members.${index}.year`}
                    className="flex items-center gap-1.5 font-semibold text-signal-text uppercase text-[11px]"
                  >
                    Academic Year <span className="text-signal-lime">*</span>
                  </label>
                  <select
                    id={`members.${index}.year`}
                    {...register(`members.${index}.year` as const)}
                    className="w-full rounded-lg border border-signal-border bg-signal-bg px-3.5 py-2.5 text-signal-text focus:border-signal-lime focus:outline-none"
                  >
                    <option value="1st Year">1st Year</option>
                    <option value="2nd Year">2nd Year</option>
                    <option value="3rd Year">3rd Year</option>
                    <option value="Final Year">Final Year</option>
                  </select>
                  {errors.members?.[index]?.year && (
                    <p className="text-red-400 text-[10px]">
                      {errors.members[index]?.year?.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
