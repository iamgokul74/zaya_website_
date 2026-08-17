export interface TimelineStep {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  statusTag: string;
  statusVariant: "lime" | "cyan" | "muted";
  actionUrl?: string;
  isKeyMilestone?: boolean;
}

export const TIMELINE_STEPS: TimelineStep[] = [
  {
    id: "registration",
    number: "01",
    title: "REGISTRATION",
    subtitle: "PHASE 01 // ONBOARDING",
    description: "Create your profile, submit your background details, and initiate entry into the ZAYATHON signal network.",
    statusTag: "OPEN",
    statusVariant: "lime",
    actionUrl: "/register",
  },
  {
    id: "team-formation",
    number: "02",
    title: "TEAM FORMATION",
    subtitle: "PHASE 02 // SQUAD RUSTER",
    description: "Assemble a squad of up to 4 builders across engineering, design, and domain expertise.",
    statusTag: "ACTIVE",
    statusVariant: "lime",
  },
  {
    id: "track-briefing",
    number: "03",
    title: "TRACK BRIEFING",
    subtitle: "PHASE 03 // DISCLOSURE",
    description: "Full problem statement reveal across 9 challenge domains and technical telemetry requirements.",
    statusTag: "UPCOMING",
    statusVariant: "cyan",
  },
  {
    id: "build-sprint",
    number: "04",
    title: "BUILD SPRINT",
    subtitle: "PHASE 04 // 10H WINDOW",
    description: "10-hour rapid prototyping sprint with mid-way mentorship check-ins and telemetry tracking.",
    statusTag: "UPCOMING",
    statusVariant: "cyan",
    isKeyMilestone: true,
  },
  {
    id: "code-freeze",
    number: "05",
    title: "CODE FREEZE",
    subtitle: "PHASE 05 // SUBMISSION",
    description: "Repository lock, video demo upload, and final technical architecture documentation submission.",
    statusTag: "UPCOMING",
    statusVariant: "muted",
  },
  {
    id: "eval-and-pitch",
    number: "06",
    title: "EVALUATION & DEMOS",
    subtitle: "PHASE 06 // FINALS",
    description: "Live prototype demonstration, jury evaluation, and national award announcement.",
    statusTag: "UPCOMING",
    statusVariant: "muted",
  },
];
