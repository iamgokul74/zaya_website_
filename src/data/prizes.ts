export interface Prize {
  id: string;
  rank: string;
  title: string;
  badge: string;
  amount?: string;
  description: string;
  rewards: string[];
  accent: "lime" | "cyan" | "muted";
  featured?: boolean;
}

export interface SpecialReward {
  id: string;
  title: string;
  category: string;
  perks: string;
  badge: string;
}

export const PRIZES_DATA: Prize[] = [
  {
    id: "grand-winner",
    rank: "#01",
    title: "GRAND WINNER",
    badge: "CHAMPIONSHIP TIER",
    description:
      "Awarded to the overall top-performing team demonstrating outstanding technical architecture, innovation, and execution.",
    rewards: [
      "Winner Trophy & National Recognition",
      "Cash Prize & Premium Sponsor Perks",
      "Direct Internship Fast-Track Track",
      "Official Winner Certificate of Excellence",
    ],
    accent: "lime",
    featured: true,
  },
  {
    id: "runner-up",
    rank: "#02",
    title: "FIRST RUNNER UP",
    badge: "PODIUM TIER",
    description:
      "Recognizing the second-highest scoring team for exceptional technical depth and prototype completeness.",
    rewards: [
      "Runner-Up Trophy",
      "Cash Prize Share & Sponsor Vouchers",
      "Internship & Mentorship Access",
      "Official Runner-Up Certificate",
    ],
    accent: "cyan",
  },
  {
    id: "second-runner-up",
    rank: "#03",
    title: "SECOND RUNNER UP",
    badge: "PODIUM TIER",
    description:
      "Celebrating third-place excellence in problem solving, code quality, and domain impact.",
    rewards: [
      "Podium Trophy",
      "Cash Prize Share",
      "Developer Perks & Mentorship",
      "Official Podium Certificate",
    ],
    accent: "muted",
  },
];

export const SPECIAL_REWARDS_DATA: SpecialReward[] = [
  {
    id: "best-ai",
    title: "BEST AI & AGENTIC SYSTEM",
    category: "DOMAIN EXCELLENCE",
    perks: "Special Category Trophy + Dedicated Sponsor Swag & Mentorship",
    badge: "SPECIAL AWARD",
  },
  {
    id: "internships",
    title: "ZAYA CODE HUB INTERNSHIPS",
    category: "CAREER ACCELERATION",
    perks: "Direct interview fast-track for Web, AI & Mobile roles",
    badge: "OPPORTUNITY",
  },
  {
    id: "certificates",
    title: "VERIFIED CERTIFICATES",
    category: "ALL PARTICIPANTS",
    perks: "Official verifiable digital certificate for all valid project submissions",
    badge: "FOR ALL BUILDERS",
  },
];
