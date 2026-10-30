export type ServiceItem = {
  slug: string;
  title: string;
  shortDescription: string;
  heroDescription: string;
  seoTitle: string;
  seoDescription: string;
  keyPoints: string[];
  outcomes: string[];
  useCases: string[];
  process: string[];
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
        seoTitle: "Artificial Intelligence Services | Gvstudios",
        seoDescription:
          "Custom AI development, GenAI copilots, MLOps, computer vision, and NLP. Production-ready machine learning from Gvstudios.",
        keyPoints: ["GenAI & copilots", "ML model deployment", "AI governance"],
        outcomes: [
          "Automate repetitive workflows with measurable ROI",
          "Ship GenAI features safely with governance and evaluation",
          "Scale models from prototype to reliable production systems",
        ],
        useCases: [
          "Customer support copilots and knowledge assistants",
          "Document intelligence and automated extraction",
          "Forecasting, recommendations, and anomaly detection",
        ],
        process: [
          "Discovery & AI opportunity mapping",
          "Data readiness and model prototyping",
          "Production deployment with monitoring",
          "Continuous improvement and governance",
        ],
      },
      {
        slug: "embodied-ai",
        title: "Embodied AI",
        shortDescription: "AI that interacts with physical environments.",
        heroDescription:
          "Design robotic and sensor-driven systems with perception, planning, and control loops for real-world automation.",
        seoTitle: "Embodied AI & Robotics Solutions | Gvstudios",
        seoDescription:
          "Embodied AI for robotics and automation: perception, on-device inference, and autonomous control systems by Gvstudios.",
        keyPoints: ["Robot perception", "On-device inference", "Autonomous control"],
        outcomes: [
          "Connect sensors, models, and actuators into reliable loops",
          "Reduce latency with edge and on-device inference",
          "Move from lab demos to field-ready automation",
        ],
        useCases: [
          "Warehouse and factory robotics",
          "Inspection and monitoring drones",
          "Smart machines with closed-loop control",
        ],
        process: [
          "Environment and sensor assessment",
          "Perception and planning model design",
          "Edge deployment and safety testing",
          "Field iteration and performance tuning",
        ],
      },
      {
        slug: "digital-twin",
        title: "Digital Twin",
        shortDescription: "Virtual replicas for simulation and monitoring.",
        heroDescription:
          "Create digital twins for factories, cities, and assets to improve decisions with predictive simulation.",
        seoTitle: "Digital Twin Development Services | Gvstudios",
        seoDescription:
          "Digital twin platforms for factories, infrastructure, and cities—3D models, IoT data, and predictive simulation by Gvstudios.",
        keyPoints: ["3D asset models", "Predictive maintenance", "Operational dashboards"],
        outcomes: [
          "Simulate operations before costly physical changes",
          "Detect failures earlier with predictive maintenance",
          "Unify IoT telemetry into actionable dashboards",
        ],
        useCases: [
          "Manufacturing line optimization",
          "Smart building and campus operations",
          "Infrastructure and utility monitoring",
        ],
        process: [
          "Asset and data inventory",
          "Twin model and integration architecture",
          "Live data binding and simulation",
          "Operator dashboards and alerts",
        ],
      },
      {
        slug: "gis-geospatial",
        title: "GIS & Geospatial",
        shortDescription: "Location intelligence and spatial analytics.",
        heroDescription:
          "Use satellite and map-based intelligence to optimize planning, logistics, and infrastructure operations.",
        seoTitle: "GIS & Geospatial Analytics Services | Gvstudios",
        seoDescription:
          "GIS and geospatial analytics: satellite imagery, spatial dashboards, and location intelligence for planning and logistics.",
        keyPoints: ["Spatial analytics", "Remote sensing", "Geospatial dashboards"],
        outcomes: [
          "Turn location data into planning decisions",
          "Monitor land, assets, and networks at scale",
          "Improve logistics with spatial optimization",
        ],
        useCases: [
          "Urban planning and land-use analysis",
          "Logistics and territory optimization",
          "Environmental and infrastructure monitoring",
        ],
        process: [
          "Data source and coverage assessment",
          "Spatial pipeline and feature engineering",
          "Analytics models and map products",
          "Operational dashboards and APIs",
        ],
      },
      {
        slug: "quantum-computing",
        title: "Quantum Computing",
        shortDescription: "Advanced problem solving for future systems.",
        heroDescription:
          "Explore hybrid quantum-classical solutions for optimization, simulation, and research-heavy workloads.",
        seoTitle: "Quantum Computing Consulting | Gvstudios",
        seoDescription:
          "Quantum-ready architecture, algorithm prototyping, and hybrid quantum-classical pipelines with Gvstudios experts.",
        keyPoints: ["Quantum-ready architecture", "Algorithm prototyping", "Hybrid pipelines"],
        outcomes: [
          "Identify workloads that benefit from quantum approaches",
          "Prototype hybrid algorithms with classical fallbacks",
          "Prepare architecture for emerging quantum hardware",
        ],
        useCases: [
          "Complex optimization and scheduling",
          "Simulation and research workloads",
          "R&D exploration for enterprise innovation teams",
        ],
        process: [
          "Use-case screening and feasibility",
          "Algorithm and hybrid design",
          "Benchmarking against classical baselines",
          "Roadmap for production readiness",
        ],
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
        seoTitle: "Cybersecurity Services & Hardening | Gvstudios",
        seoDescription:
          "Enterprise cybersecurity: threat detection, zero-trust architecture, audits, and cloud security hardening by Gvstudios.",
        keyPoints: ["Threat detection", "Zero-trust architecture", "Security audits"],
        outcomes: [
          "Reduce attack surface across apps and cloud",
          "Detect and respond to threats faster",
          "Align controls with compliance requirements",
        ],
        useCases: [
          "Cloud security posture improvement",
          "Application penetration testing and hardening",
          "Zero-trust and identity architecture",
        ],
        process: [
          "Risk and architecture review",
          "Testing and gap remediation",
          "Monitoring and detection setup",
          "Ongoing hardening and governance",
        ],
      },
      {
        slug: "blockchain",
        title: "Blockchain",
        shortDescription: "Secure decentralized systems and smart contracts.",
        heroDescription:
          "Build trusted blockchain products from token logic to secure smart contract implementation.",
        seoTitle: "Blockchain & Smart Contract Development | Gvstudios",
        seoDescription:
          "Blockchain development for dApps, wallets, and secure smart contracts. Architecture and delivery by Gvstudios.",
        keyPoints: ["Smart contracts", "Wallet integrations", "Chain architecture"],
        outcomes: [
          "Launch secure on-chain products with audited patterns",
          "Integrate wallets and payments cleanly",
          "Design chain architecture that can scale",
        ],
        useCases: [
          "Token and NFT platforms",
          "DeFi and marketplace protocols",
          "Enterprise blockchain integrations",
        ],
        process: [
          "Product and threat modeling",
          "Contract and architecture design",
          "Secure implementation and testing",
          "Mainnet launch and monitoring",
        ],
      },
      {
        slug: "quality-assurance",
        title: "Quality Assurance",
        shortDescription: "Reliable software through automation and testing.",
        heroDescription:
          "Deliver stable releases with robust QA strategy, automated testing, and performance validation.",
        seoTitle: "QA & Test Automation Services | Gvstudios",
        seoDescription:
          "Software QA, test automation, and performance testing so your releases stay stable under real-world load.",
        keyPoints: ["Test automation", "Performance testing", "Release validation"],
        outcomes: [
          "Catch regressions before customers do",
          "Speed up releases with automated suites",
          "Validate performance under realistic load",
        ],
        useCases: [
          "CI/CD test automation for web and mobile",
          "Load and stress testing for critical APIs",
          "Release gates for enterprise products",
        ],
        process: [
          "QA strategy and coverage map",
          "Automation framework setup",
          "Performance and reliability testing",
          "Release checklist and continuous QA",
        ],
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
        seoTitle: "Custom Software Development Company | Gvstudios",
        seoDescription:
          "Custom web platforms, APIs, and cloud-native software development for startups and enterprises. Built by Gvstudios.",
        keyPoints: ["Web platforms", "API engineering", "Cloud deployment"],
        outcomes: [
          "Ship scalable products with clean architecture",
          "Integrate systems through reliable APIs",
          "Deploy and operate with cloud-native practices",
        ],
        useCases: [
          "SaaS and internal enterprise platforms",
          "Customer portals and workflow systems",
          "API and microservice modernization",
        ],
        process: [
          "Requirements and architecture design",
          "Iterative product development",
          "Quality, security, and performance hardening",
          "Cloud deployment and handover",
        ],
      },
      {
        slug: "web3-development",
        title: "Web 3.0 Development",
        shortDescription: "dApps, wallets, and decentralized infrastructure.",
        heroDescription:
          "Launch Web3 products with secure contracts, wallet UX, and production-ready decentralized architecture.",
        seoTitle: "Web3 & dApp Development Services | Gvstudios",
        seoDescription:
          "Web3 development for dApps, smart contracts, and wallet UX. Secure decentralized products from Gvstudios.",
        keyPoints: ["dApp development", "Smart contracts", "Wallet UX"],
        outcomes: [
          "Deliver Web3 products users can actually use",
          "Secure on-chain logic with production discipline",
          "Connect frontend UX to wallets and chains cleanly",
        ],
        useCases: [
          "Consumer and enterprise dApps",
          "NFT and token experiences",
          "Multi-chain wallet integrations",
        ],
        process: [
          "Product and chain selection",
          "UX and smart contract design",
          "Secure build and audit-ready delivery",
          "Launch support and iteration",
        ],
      },
      {
        slug: "mobile-game-development",
        title: "Mobile & Game Dev",
        shortDescription: "Cross-platform mobile apps and interactive products.",
        heroDescription:
          "Deliver performant mobile and game experiences across iOS, Android, and modern engines.",
        seoTitle: "Mobile App & Game Development | Gvstudios",
        seoDescription:
          "Cross-platform mobile apps and game development for iOS, Android, and modern engines. Built by Gvstudios.",
        keyPoints: ["Cross-platform apps", "Game loops & UX", "Store deployment"],
        outcomes: [
          "Launch polished apps across iOS and Android",
          "Build engaging interactive and game experiences",
          "Ship to stores with performance and QA gates",
        ],
        useCases: [
          "Consumer and enterprise mobile apps",
          "Casual and mid-core game products",
          "Realtime interactive experiences",
        ],
        process: [
          "Product and platform planning",
          "UI/UX and core loop development",
          "Performance optimization and testing",
          "Store release and post-launch support",
        ],
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
        seoTitle: "IT Consultancy & Technology Strategy | Gvstudios",
        seoDescription:
          "IT consultancy for architecture, technology roadmaps, and digital transformation delivery with Gvstudios advisors.",
        keyPoints: ["Solution architecture", "Technology strategy", "Delivery governance"],
        outcomes: [
          "Clarify the right architecture for growth",
          "Build a practical technology roadmap",
          "Improve delivery governance and outcomes",
        ],
        useCases: [
          "Digital transformation programs",
          "Cloud and platform modernization",
          "AI readiness and operating model design",
        ],
        process: [
          "Current-state assessment",
          "Target architecture and roadmap",
          "Delivery plan and vendor strategy",
          "Execution coaching and governance",
        ],
      },
      {
        slug: "it-staffing",
        title: "IT Staffing",
        shortDescription: "Dedicated talent for fast-moving teams.",
        heroDescription:
          "Extend your teams with vetted engineers, designers, and specialists aligned to your roadmap.",
        seoTitle: "IT Staffing & Dedicated Engineering Teams | Gvstudios",
        seoDescription:
          "Hire dedicated engineers, designers, and specialists. Flexible IT staffing and team extension from Gvstudios.",
        keyPoints: ["Dedicated teams", "Role-based hiring", "Flexible engagement"],
        outcomes: [
          "Scale delivery capacity without long hiring cycles",
          "Match specialists to your exact tech stack",
          "Keep flexibility as priorities change",
        ],
        useCases: [
          "Dedicated product engineering pods",
          "Short-term specialist augmentation",
          "Design, QA, and DevOps capacity boosts",
        ],
        process: [
          "Role and skill definition",
          "Candidate shortlisting and vetting",
          "Onboarding into your ways of working",
          "Ongoing performance and retention support",
        ],
      },
      {
        slug: "sales-marketing",
        title: "Sales & Marketing",
        shortDescription: "Growth systems backed by data and automation.",
        heroDescription:
          "Scale customer acquisition and retention with integrated CRM, campaigns, and analytics.",
        seoTitle: "Sales & Marketing Technology Services | Gvstudios",
        seoDescription:
          "Growth systems with CRM integrations, campaign automation, and analytics to scale acquisition and retention.",
        keyPoints: ["Growth funnels", "CRM integrations", "Campaign analytics"],
        outcomes: [
          "Connect marketing and sales data into one funnel",
          "Automate campaigns with measurable attribution",
          "Improve conversion with analytics-led iteration",
        ],
        useCases: [
          "CRM and marketing automation setups",
          "Lead scoring and pipeline visibility",
          "Performance analytics for growth teams",
        ],
        process: [
          "Funnel and tooling audit",
          "Integration and automation design",
          "Campaign and tracking implementation",
          "Optimization loops and reporting",
        ],
      },
    ],
  },
];

export const allServices = serviceCategories.flatMap((category) => category.services);

export function getServiceBySlug(slug: string) {
  return allServices.find((service) => service.slug === slug);
}

/** Homepage card titles mapped to real service routes when available */
export const serviceTitleToSlug: Record<string, string> = {
  "Artificial Intelligence": "artificial-intelligence",
  "IT Consultancy": "it-consultancy",
  Cybersecurity: "cybersecurity",
  "Sales & Marketing": "sales-marketing",
  "Web 3.0 Development": "web3-development",
  "Quantum Computing": "quantum-computing",
  "Quality Assurance": "quality-assurance",
  "Mobile & Game Dev": "mobile-game-development",
  "Digital Twin": "digital-twin",
  "GIS & Geospatial": "gis-geospatial",
  "Embodied AI & Robotics": "embodied-ai",
};
