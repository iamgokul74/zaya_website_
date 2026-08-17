export interface MissionMetric {
  value: string;
  unit: string;
  label: string;
  description: string;
}

export const ABOUT_MISSION_DATA = {
  sectionCode: "01",
  sectionLabel: "THE MISSION",
  headline: "BUILD SOMETHING THAT MATTERS.",
  description:
    "ZAYATHON by ZAYA CODE HUB is a premier national hackathon designed to unite passionate student builders, developers, and designers. We provide an intense, collaborative launchpad where real-world industry challenges are transformed into high-impact, production-ready solutions within 10 focused hours.",
  metrics: [
    {
      value: "10 H",
      unit: "WINDOW",
      label: "BUILD DURATION",
      description: "Non-stop sprint from architecture to execution.",
    },
    {
      value: "09",
      unit: "TRACKS",
      label: "CHALLENGE DOMAINS",
      description: "AI, Web3, FinTech, Open Innovation & more.",
    },
    {
      value: "04",
      unit: "MAX",
      label: "TEAM CAPACITY",
      description: "Collaborative teams of up to 4 builders.",
    },
  ] as MissionMetric[],
};
