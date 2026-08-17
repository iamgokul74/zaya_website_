export interface FAQItemData {
  id: string;
  number: string;
  question: string;
  answer: string;
  category: "ELIGIBILITY" | "TEAMS" | "BUILD" | "SUBMISSION" | "REWARDS";
}

export const FAQ_DATA: FAQItemData[] = [
  {
    id: "eligibility",
    number: "01",
    question: "WHO IS ELIGIBLE TO PARTICIPATE IN ZAYATHON?",
    answer:
      "ZAYATHON is open to passionate student developers, builders, and designers up to their 3rd year of undergraduate studies across engineering, computer science, and technical disciplines.",
    category: "ELIGIBILITY",
  },
  {
    id: "team-size",
    number: "02",
    question: "WHAT IS THE MAXIMUM TEAM SIZE ALLOWED?",
    answer:
      "Teams can consist of up to 4 members. You can register as an existing squad or form a team with other builders during the onboarding phase.",
    category: "TEAMS",
  },
  {
    id: "duration",
    number: "03",
    question: "HOW LONG IS THE HACKATHON BUILD WINDOW?",
    answer:
      "ZAYATHON runs as a 10-hour non-stop rapid prototyping sprint, covering ideation, architecture setup, development, and project submission.",
    category: "BUILD",
  },
  {
    id: "domains",
    number: "04",
    question: "WHAT CHALLENGE DOMAINS CAN WE BUILD IN?",
    answer:
      "Participants can build solutions across 9 innovation domains: Agentic AI, Robotics & Autonomous Systems, Cybersecurity, HealthTech, FinTech & Blockchain, Smart Cities & IoT, Agritech, Transportation & Logistics, and Open Innovation.",
    category: "BUILD",
  },
  {
    id: "submission",
    number: "05",
    question: "WHAT ARE THE FINAL SUBMISSION DELIVERABLES?",
    answer:
      "Teams must submit a working code repository link, a technical architecture overview, and a brief video demonstration of their functional prototype.",
    category: "SUBMISSION",
  },
  {
    id: "rewards-internships",
    number: "06",
    question: "WHAT REWARDS AND CAREER OPPORTUNITIES ARE OFFERED?",
    answer:
      "Top podium winners receive trophies, cash prize shares, and direct fast-track internship evaluation pathways with ZAYA CODE HUB. All valid submissions receive verifiable digital certificates.",
    category: "REWARDS",
  },
  {
    id: "fee",
    number: "07",
    question: "IS THERE ANY ENTRY OR REGISTRATION FEE?",
    answer:
      "No. Registration for ZAYATHON by ZAYA CODE HUB is completely free for all eligible student teams.",
    category: "ELIGIBILITY",
  },
];
