export interface ParticipationValue {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  highlight: string;
  accent: "lime" | "cyan" | "muted";
}

export const PARTICIPATION_VALUES: ParticipationValue[] = [
  {
    id: "build",
    number: "01",
    title: "BUILD",
    category: "RAPID EXECUTION",
    description:
      "Transform an abstract concept into a fully functional, production-ready prototype during an intense 10-hour sprint.",
    highlight: "10-Hour Non-Stop Engineering",
    accent: "lime",
  },
  {
    id: "prove",
    number: "02",
    title: "PROVE",
    category: "SYSTEM VALIDATION",
    description:
      "Stress-test your architectural decisions, code quality, and technical problem solving against real-world challenge domains.",
    highlight: "Real Domain Telemetry",
    accent: "cyan",
  },
  {
    id: "show",
    number: "03",
    title: "SHOW",
    category: "LIVE DEMONSTRATION",
    description:
      "Present your working system directly to an expert jury panel of engineers, founders, and industry leaders.",
    highlight: "Direct Jury Evaluation",
    accent: "lime",
  },
  {
    id: "connect",
    number: "04",
    title: "CONNECT",
    category: "CAREER ACCELERATION",
    description:
      "Unlock direct interview opportunities and fast-track hiring pathways for developer roles at ZAYA CODE HUB.",
    highlight: "Direct Internship Pathways",
    accent: "cyan",
  },
  {
    id: "recognize",
    number: "05",
    title: "RECOGNIZE",
    category: "NATIONAL REWARD",
    description:
      "Compete for national podium trophies, challenge track distinctions, and exclusive developer perk packages.",
    highlight: "Podium Trophies & Awards",
    accent: "lime",
  },
  {
    id: "credential",
    number: "06",
    title: "CREDENTIAL",
    category: "VERIFIED PORTFOLIO",
    description:
      "Receive an official verifiable digital certificate of achievement to validate your hackathon accomplishments on your resume.",
    highlight: "Verifiable Digital Badges",
    accent: "muted",
  },
];
