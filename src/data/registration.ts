import { z } from "zod";

export const memberSchema = z.object({
  name: z.string().min(2, "Full name must be at least 2 characters."),
  email: z.string().email("Enter a valid email address."),
  college: z.string().min(2, "College/University name is required."),
  year: z.string().min(1, "Academic year is required."),
});

export const registrationSchema = z.object({
  teamName: z.string().min(2, "Team name must be at least 2 characters."),
  leaderName: z.string().min(2, "Leader name must be at least 2 characters."),
  leaderEmail: z.string().email("Enter a valid email address for the leader."),
  leaderPhone: z.string().min(10, "Phone number must be at least 10 digits."),
  members: z
    .array(memberSchema)
    .min(1, "At least 1 builder (Leader) is required.")
    .max(4, "Maximum 4 builders per team."),
  trackId: z.string().min(1, "Please select an innovation domain track."),
  acceptedTerms: z
    .boolean()
    .refine((val) => val === true, "You must accept the hackathon code of conduct."),
});

export type RegistrationFormData = z.infer<typeof registrationSchema>;
export type MemberFormData = z.infer<typeof memberSchema>;

export const INITIAL_REGISTRATION_DATA: RegistrationFormData = {
  teamName: "",
  leaderName: "",
  leaderEmail: "",
  leaderPhone: "",
  members: [
    {
      name: "",
      email: "",
      college: "",
      year: "3rd Year",
    },
  ],
  trackId: "agentic-ai",
  acceptedTerms: false,
};
