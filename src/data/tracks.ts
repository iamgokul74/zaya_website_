export interface Track {
  id: string;
  number: string;
  name: string;
  shortName: string;
  category: string;
  description: string;
  accent: "lime" | "cyan" | "muted";
  patternType:
    | "neural"
    | "robotics"
    | "cyber"
    | "pulse"
    | "fintech"
    | "iot"
    | "agri"
    | "logistics"
    | "open";
  featured?: boolean;
}

export const TRACKS_DATA: Track[] = [
  {
    id: "agentic-ai",
    number: "01",
    name: "AGENTIC AI",
    shortName: "Agentic AI",
    category: "AUTONOMOUS INTELLIGENCE",
    description:
      "Build multi-agent systems, autonomous reasoning frameworks, and intelligent workflow automation tools capable of executing complex task sequences.",
    accent: "lime",
    patternType: "neural",
    featured: true,
  },
  {
    id: "robotics-autonomous",
    number: "02",
    name: "ROBOTICS & AUTONOMOUS SYSTEMS",
    shortName: "Robotics",
    category: "HARDWARE & KINEMATICS",
    description:
      "Architect ROS-driven perception modules, drone navigation systems, and embedded hardware interfaces for real-world physical automation.",
    accent: "cyan",
    patternType: "robotics",
  },
  {
    id: "cybersecurity",
    number: "03",
    name: "CYBERSECURITY & THREAT INTELLIGENCE",
    shortName: "Cybersecurity",
    category: "SECURITY & RECON",
    description:
      "Engineer proactive zero-trust defense architectures, automated vulnerability scanning pipelines, and cryptographic validation protocols.",
    accent: "lime",
    patternType: "cyber",
  },
  {
    id: "healthtech",
    number: "04",
    name: "HEALTHTECH & MEDAI",
    shortName: "HealthTech",
    category: "DIAGNOSTICS & BIOINFOMATICS",
    description:
      "Develop AI diagnostic models, predictive patient monitoring software, and secure EHR interoperability engines for modern healthcare.",
    accent: "cyan",
    patternType: "pulse",
  },
  {
    id: "fintech-blockchain",
    number: "05",
    name: "FINTECH & BLOCKCHAIN",
    shortName: "FinTech",
    category: "DECENTRALIZED FINANCE",
    description:
      "Formulate verifiable smart contract protocols, high-frequency algorithmic trade networks, and fraud-detection telemetry pipelines.",
    accent: "lime",
    patternType: "fintech",
  },
  {
    id: "smart-cities-iot",
    number: "06",
    name: "SMART CITIES & IOT",
    shortName: "Smart Cities",
    category: "URBAN INFRASTRUCTURE",
    description:
      "Connect distributed sensor telemetry grids, optimize real-time energy grid distribution, and build resilient municipal monitoring dashboards.",
    accent: "cyan",
    patternType: "iot",
  },
  {
    id: "agritech",
    number: "07",
    name: "AGRITECH & RURAL INNOVATION",
    shortName: "Agritech",
    category: "SUSTAINABLE AGRICULTURE",
    description:
      "Leverage multispectral satellite imagery, automated crop health analytics, and hyper-local weather risk modeling for agricultural resilience.",
    accent: "lime",
    patternType: "agri",
  },
  {
    id: "transportation-logistics",
    number: "08",
    name: "TRANSPORTATION & LOGISTICS",
    shortName: "Logistics",
    category: "SUPPLY CHAIN TELEMETRY",
    description:
      "Optimize last-mile route dispatch algorithms, automated inventory tracking nodes, and carbon footprint telemetry platforms.",
    accent: "cyan",
    patternType: "logistics",
  },
  {
    id: "open-innovation",
    number: "09",
    name: "OPEN INNOVATION",
    shortName: "Open Innovation",
    category: "WILDCARD & FRONTIER TECH",
    description:
      "Pioneer disruptive solutions at the intersection of emerging technologies that transcend traditional domain classifications.",
    accent: "lime",
    patternType: "open",
  },
];
