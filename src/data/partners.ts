export interface Partner {
  id: string;
  name: string;
  type: string;
  tier: "ORGANIZER" | "ECOSYSTEM" | "COMMUNITY";
  description: string;
  url?: string;
  accent: "lime" | "cyan" | "muted";
}

export const PARTNERS_DATA: Partner[] = [
  {
    id: "zaya-code-hub",
    name: "ZAYA CODE HUB",
    type: "ORGANIZER & HOST PLATFORM",
    tier: "ORGANIZER",
    description:
      "Educational developer platform & innovation ecosystem presenting ZAYATHON '26.",
    url: "https://www.zayacodehub.online/",
    accent: "lime",
  },
  {
    id: "zaya-learning-hub",
    name: "ZAYA LEARNING HUB",
    type: "SKILLS & RECOGNITION PLATFORM",
    tier: "ECOSYSTEM",
    description:
      "Providing proctored skill benchmarks, eBooks, and code learning resources.",
    url: "https://www.zayacodehub.in/",
    accent: "cyan",
  },
  {
    id: "student-dev-network",
    name: "STUDENT DEVELOPER ECOSYSTEM",
    type: "COMMUNITY NETWORK",
    tier: "COMMUNITY",
    description:
      "National student builder network uniting coders, designers, and innovators.",
    accent: "lime",
  },
];
