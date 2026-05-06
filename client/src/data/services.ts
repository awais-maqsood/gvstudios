export type ServiceItem = {
  slug: string;
  title: string;
  shortDescription: string;
  heroDescription: string;
  keyPoints: string[];
};

export type ServiceCategory = {
  title: string;
  services: ServiceItem[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    title: "AI & DATA",
    services: [
      {
        slug: "artificial-intelligence",
        title: "Artificial Intelligence",
        shortDescription: "End-to-end AI systems for automation and growth.",
        heroDescription:
          "Build practical AI solutions from strategy to deployment, including GenAI, model operations, and intelligent workflows.",
        keyPoints: ["GenAI & copilots", "ML model deployment", "AI governance"],
      },
      {
        slug: "embodied-ai",
        title: "Embodied AI",
        shortDescription: "AI that interacts with physical environments.",
        heroDescription:
          "Design robotic and sensor-driven systems with perception, planning, and control loops for real-world automation.",
        keyPoints: ["Robot perception", "On-device inference", "Autonomous control"],
      },
      {
        slug: "digital-twin",
        title: "Digital Twin",
        shortDescription: "Virtual replicas for simulation and monitoring.",
        heroDescription:
          "Create digital twins for factories, cities, and assets to improve decisions with predictive simulation.",
        keyPoints: ["3D asset models", "Predictive maintenance", "Operational dashboards"],
      },
      {
        slug: "gis-geospatial",
        title: "GIS & Geospatial",
        shortDescription: "Location intelligence and spatial analytics.",
        heroDescription:
          "Use satellite and map-based intelligence to optimize planning, logistics, and infrastructure operations.",
        keyPoints: ["Spatial analytics", "Remote sensing", "Geospatial dashboards"],
      },
      {
        slug: "quantum-computing",
        title: "Quantum Computing",
        shortDescription: "Advanced problem solving for future systems.",
        heroDescription:
          "Explore hybrid quantum-classical solutions for optimization, simulation, and research-heavy workloads.",
        keyPoints: ["Quantum-ready architecture", "Algorithm prototyping", "Hybrid pipelines"],
      },
    ],
  },
  {
    title: "SECURITY",
    services: [
      {
        slug: "cybersecurity",
        title: "Cybersecurity",
        shortDescription: "Protection across cloud, app, and data layers.",
        heroDescription:
          "Strengthen your security posture with proactive testing, hardening, monitoring, and compliance engineering.",
        keyPoints: ["Threat detection", "Zero-trust architecture", "Security audits"],
      },
      {
        slug: "blockchain",
        title: "Blockchain",
        shortDescription: "Secure decentralized systems and smart contracts.",
        heroDescription:
          "Build trusted blockchain products from token logic to secure smart contract implementation.",
        keyPoints: ["Smart contracts", "Wallet integrations", "Chain architecture"],
      },
      {
        slug: "quality-assurance",
        title: "Quality Assurance",
        shortDescription: "Reliable software through automation and testing.",
        heroDescription:
          "Deliver stable releases with robust QA strategy, automated testing, and performance validation.",
        keyPoints: ["Test automation", "Performance testing", "Release validation"],
      },
    ],
  },
  {
    title: "BUILD & DEPLOY",
    services: [
      {
        slug: "software-development",
        title: "Software Development",
        shortDescription: "Custom web and enterprise applications.",
        heroDescription:
          "Engineer scalable products with modern web architecture, API layers, and cloud-native delivery.",
        keyPoints: ["Web platforms", "API engineering", "Cloud deployment"],
      },
      {
        slug: "web3-development",
        title: "Web 3.0 Development",
        shortDescription: "dApps, wallets, and decentralized infrastructure.",
        heroDescription:
          "Launch Web3 products with secure contracts, wallet UX, and production-ready decentralized architecture.",
        keyPoints: ["dApp development", "Smart contracts", "Wallet UX"],
      },
      {
        slug: "mobile-game-development",
        title: "Mobile & Game Dev",
        shortDescription: "Cross-platform mobile apps and interactive products.",
        heroDescription:
          "Deliver performant mobile and game experiences across iOS, Android, and modern engines.",
        keyPoints: ["Cross-platform apps", "Game loops & UX", "Store deployment"],
      },
    ],
  },
  {
    title: "CONSULTING",
    services: [
      {
        slug: "it-consultancy",
        title: "IT Consultancy",
        shortDescription: "Architecture and technology roadmap guidance.",
        heroDescription:
          "Plan and execute transformation with expert advisory on systems architecture, operations, and scale.",
        keyPoints: ["Solution architecture", "Technology strategy", "Delivery governance"],
      },
      {
        slug: "it-staffing",
        title: "IT Staffing",
        shortDescription: "Dedicated talent for fast-moving teams.",
        heroDescription:
          "Extend your teams with vetted engineers, designers, and specialists aligned to your roadmap.",
        keyPoints: ["Dedicated teams", "Role-based hiring", "Flexible engagement"],
      },
      {
        slug: "sales-marketing",
        title: "Sales & Marketing",
        shortDescription: "Growth systems backed by data and automation.",
        heroDescription:
          "Scale customer acquisition and retention with integrated CRM, campaigns, and analytics.",
        keyPoints: ["Growth funnels", "CRM integrations", "Campaign analytics"],
      },
    ],
  },
];

export const allServices = serviceCategories.flatMap((category) => category.services);

export function getServiceBySlug(slug: string) {
  return allServices.find((service) => service.slug === slug);
}
