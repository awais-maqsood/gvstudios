export type ServiceExampleProject = {
  title: string;
  problem: string;
  approach: string;
  result: string;
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceItem = {
  slug: string;
  title: string;
  shortDescription: string;
  heroDescription: string;
  seoTitle: string;
  seoDescription: string;
  heroImage: string;
  keyPoints: string[];
  outcomes: string[];
  useCases: string[];
  process: string[];
  audience: string[];
  techStack: string[];
  exampleProject: ServiceExampleProject;
  faqs: ServiceFaq[];
};

export type ServiceCategory = {
  title: string;
  services: ServiceItem[];
};

const IMG = {
  ai: "https://www.octaloop.io/assets/service-ai-DrNXlC07.jpg",
  consultancy: "https://www.octaloop.io/assets/service-consultancy-E4sfdVQS.jpg",
  cyber: "https://www.octaloop.io/assets/service-cybersecurity-BBi4wjd2.jpg",
  marketing: "https://www.octaloop.io/assets/service-marketing-D2CadWla.jpg",
  web3: "https://www.octaloop.io/assets/service-web3-P2A4mAbw.jpg",
  quantum: "https://www.octaloop.io/assets/service-quantum-DGf_VO8N.jpg",
  qa: "https://www.octaloop.io/assets/service-qa-RU_gLabG.jpg",
  mobile: "https://www.octaloop.io/assets/service-mobile-Bnsz5aK8.jpg",
  twin: "https://www.octaloop.io/assets/digital-twin-hero-BovXLGVy.jpg",
  gis: "https://www.octaloop.io/assets/gis-hero-DEMxVNSu.jpg",
  embodied: "https://www.octaloop.io/assets/embodied-ai-hero-tUOufDHL.jpg",
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
          "GV Studio builds production AI systems — GenAI copilots, computer vision and NLP — for enterprises that need on-prem or edge deployment.",
        seoTitle: "Artificial Intelligence Services | GV Studio",
        seoDescription:
          "Custom AI development, GenAI copilots, MLOps, computer vision, and NLP. Production-ready machine learning from GV Studio.",
        heroImage: IMG.ai,
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
        audience: [
          "Enterprises needing on-prem or edge AI with data residency",
          "Product teams shipping GenAI features into existing apps",
          "Operators with high-volume document or support workflows",
          "Telecom and regulated industries that require auditability",
        ],
        techStack: [
          "PyTorch",
          "ONNX",
          "Triton",
          "LangChain",
          "Kubernetes",
          "MLflow",
          "FastAPI",
          "PostgreSQL",
          "Redis",
          "OpenTelemetry",
        ],
        exampleProject: {
          title: "Enterprise knowledge copilot",
          problem:
            "Support and ops teams spent hours searching fragmented manuals and tickets for answers customers needed immediately.",
          approach:
            "We built a retrieval-augmented GenAI copilot with evaluation harnesses, role-based access, and deployment options for private cloud.",
          result:
            "Faster first-response times, fewer escalations, and a governed path from pilot to production without leaking sensitive data.",
        },
        faqs: [
          {
            question: "What AI services does GV Studio provide?",
            answer:
              "We build GenAI copilots, computer vision, NLP, forecasting, and MLOps pipelines — from discovery through production monitoring.",
          },
          {
            question: "Can you deploy AI on-premises or at the edge?",
            answer:
              "Yes. We design for on-prem, private cloud, and edge inference when latency, cost, or data residency rules out public SaaS models.",
          },
          {
            question: "How long does a typical AI engagement take?",
            answer:
              "A focused pilot often lands in 4–8 weeks. Production rollout depends on data readiness, integrations, and governance requirements.",
          },
          {
            question: "Do you only build prototypes?",
            answer:
              "No. We emphasize production systems: evaluation, observability, rollback plans, and ownership handoff to your team.",
          },
        ],
      },
      {
        slug: "embodied-ai",
        title: "Embodied AI",
        shortDescription: "AI that interacts with physical environments.",
        heroDescription:
          "Design robotic and sensor-driven systems with perception, planning, and control loops for real-world automation.",
        seoTitle: "Embodied AI & Robotics Solutions | GV Studio",
        seoDescription:
          "Embodied AI for robotics and automation: perception, on-device inference, and autonomous control systems by GV Studio.",
        heroImage: IMG.embodied,
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
        audience: [
          "Manufacturers exploring automation cells",
          "Logistics teams deploying warehouse robots",
          "Hardware startups needing perception software",
          "Inspection teams using drones or mobile sensors",
        ],
        techStack: [
          "ROS 2",
          "OpenCV",
          "PyTorch",
          "TensorRT",
          "ONNX Runtime",
          "CUDA",
          "MQTT",
          "C++",
          "Python",
          "NVIDIA Jetson",
        ],
        exampleProject: {
          title: "Edge perception for inspection",
          problem:
            "Manual inspection of industrial assets was slow, inconsistent, and hard to scale across sites.",
          approach:
            "We deployed on-device vision models with sensor fusion and a control loop that flagged anomalies for human review.",
          result:
            "Faster coverage per shift and a repeatable inspection workflow that works without constant cloud connectivity.",
        },
        faqs: [
          {
            question: "What is embodied AI?",
            answer:
              "Embodied AI connects perception and decision models to physical actuators — robots, drones, and machines that act in the real world.",
          },
          {
            question: "Do you work with existing robot hardware?",
            answer:
              "Yes. We integrate with common robot platforms and sensors, or design software around the hardware you already operate.",
          },
          {
            question: "Can models run offline at the edge?",
            answer:
              "Yes. We optimize for on-device inference so critical loops stay low-latency even when the network is unreliable.",
          },
        ],
      },
      {
        slug: "digital-twin",
        title: "Digital Twin",
        shortDescription: "Virtual replicas for simulation and monitoring.",
        heroDescription:
          "Create digital twins for factories, cities, and assets to improve decisions with predictive simulation.",
        seoTitle: "Digital Twin Development Services | GV Studio",
        seoDescription:
          "Digital twin platforms for factories, infrastructure, and cities—3D models, IoT data, and predictive simulation by GV Studio.",
        heroImage: IMG.twin,
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
        audience: [
          "Plant and facilities operators",
          "Smart city and campus programs",
          "Utilities monitoring distributed assets",
          "Teams planning capital changes with simulation first",
        ],
        techStack: [
          "Three.js",
          "Unity",
          "MQTT",
          "Kafka",
          "TimescaleDB",
          "Grafana",
          "Python",
          "Node.js",
          "Kubernetes",
          "REST / WebSocket APIs",
        ],
        exampleProject: {
          title: "Live twin for operations monitoring",
          problem:
            "Operators lacked a single view of asset state and could not simulate changes before investing in physical upgrades.",
          approach:
            "We bound IoT telemetry to a digital twin model with alerting and what-if simulation for key operational scenarios.",
          result:
            "Clearer situational awareness and fewer blind investments — decisions backed by live data and simulated outcomes.",
        },
        faqs: [
          {
            question: "Do digital twins require 3D models?",
            answer:
              "Not always. Some twins are data and process models first; 3D visualization is added when it improves operator decisions.",
          },
          {
            question: "Can you integrate existing IoT systems?",
            answer:
              "Yes. We connect common industrial protocols, message buses, and historians so the twin reflects live operations.",
          },
          {
            question: "Who uses the twin day to day?",
            answer:
              "Typically operations, maintenance, and planning teams — via dashboards, alerts, and controlled simulation tools.",
          },
        ],
      },
      {
        slug: "gis-geospatial",
        title: "GIS & Geospatial",
        shortDescription: "Location intelligence and spatial analytics.",
        heroDescription:
          "Use satellite and map-based intelligence to optimize planning, logistics, and infrastructure operations.",
        seoTitle: "GIS & Geospatial Analytics Services | GV Studio",
        seoDescription:
          "GIS and geospatial analytics: satellite imagery, spatial dashboards, and location intelligence for planning and logistics.",
        heroImage: IMG.gis,
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
        audience: [
          "Urban planning and public-sector teams",
          "Logistics and field-service operations",
          "Infrastructure and utility network owners",
          "Companies with large geospatial datasets",
        ],
        techStack: [
          "PostGIS",
          "GeoServer",
          "QGIS",
          "GDAL",
          "Mapbox",
          "Leaflet",
          "Python",
          "Rasterio",
          "GeoJSON",
          "Tile servers",
        ],
        exampleProject: {
          title: "Spatial planning dashboard",
          problem:
            "Planners worked from disconnected maps and spreadsheets, making coverage and territory decisions slow and error-prone.",
          approach:
            "We built a geospatial pipeline and interactive dashboard that unified imagery, boundaries, and operational layers.",
          result:
            "Faster planning cycles and a shared spatial source of truth for field and HQ teams.",
        },
        faqs: [
          {
            question: "What geospatial data can you work with?",
            answer:
              "Satellite imagery, cadastral layers, GPS tracks, network topologies, and custom business geodata — depending on licensing and access.",
          },
          {
            question: "Do you build map products or only analysis?",
            answer:
              "Both. We deliver analysis pipelines, APIs, and operator-facing map dashboards tailored to your workflows.",
          },
          {
            question: "Can this integrate with existing GIS tools?",
            answer:
              "Yes. We work alongside tools like QGIS and enterprise GIS stacks rather than forcing a rip-and-replace.",
          },
        ],
      },
      {
        slug: "quantum-computing",
        title: "Quantum Computing",
        shortDescription: "Advanced problem solving for future systems.",
        heroDescription:
          "Explore hybrid quantum-classical solutions for optimization, simulation, and research-heavy workloads.",
        seoTitle: "Quantum Computing Consulting | GV Studio",
        seoDescription:
          "Quantum-ready architecture, algorithm prototyping, and hybrid quantum-classical pipelines with GV Studio experts.",
        heroImage: IMG.quantum,
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
        audience: [
          "Innovation and R&D labs",
          "Enterprises with hard optimization problems",
          "Teams preparing a multi-year quantum roadmap",
          "Research groups needing engineering partners",
        ],
        techStack: [
          "Qiskit",
          "PennyLane",
          "Cirq",
          "Python",
          "NumPy",
          "Classical optimizers",
          "HPC pipelines",
          "Cloud quantum SDKs",
        ],
        exampleProject: {
          title: "Hybrid optimization spike",
          problem:
            "A classical optimizer plateaued on a large combinatorial scheduling problem with rising compute cost.",
          approach:
            "We screened the workload, prototyped a hybrid quantum-classical formulation, and benchmarked against classical baselines.",
          result:
            "A clear feasibility report and roadmap — including when quantum is worth pursuing versus sticking with classical methods.",
        },
        faqs: [
          {
            question: "Is quantum ready for production today?",
            answer:
              "For most enterprises, quantum is exploratory. We help you find real use cases and avoid hype-driven spend.",
          },
          {
            question: "Do you replace classical systems?",
            answer:
              "No. We design hybrid approaches with classical fallbacks so you keep reliable production paths.",
          },
          {
            question: "What do we get from an engagement?",
            answer:
              "Feasibility analysis, prototypes where warranted, benchmarks, and a practical roadmap tied to your business constraints.",
          },
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
        seoTitle: "Cybersecurity Services & Hardening | GV Studio",
        seoDescription:
          "Enterprise cybersecurity: threat detection, zero-trust architecture, audits, and cloud security hardening by GV Studio.",
        heroImage: IMG.cyber,
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
        audience: [
          "SaaS and product companies shipping customer data features",
          "Enterprises hardening cloud and identity posture",
          "Teams preparing for audits or customer security reviews",
          "Operators needing practical detection and response, not just reports",
        ],
        techStack: [
          "OWASP",
          "Burp Suite",
          "SIEM",
          "WAF",
          "IAM / OIDC",
          "Kubernetes security",
          "Terraform",
          "Vault",
          "CloudTrail / Cloud Audit",
          "OpenTelemetry",
        ],
        exampleProject: {
          title: "Cloud and app hardening program",
          problem:
            "A growing product team had accumulated cloud misconfigurations and unclear identity boundaries before a major customer review.",
          approach:
            "We ran architecture review and testing, fixed critical gaps, and stood up monitoring with a prioritized remediation roadmap.",
          result:
            "Reduced attack surface, clearer ownership of controls, and a posture the team could defend in security questionnaires.",
        },
        faqs: [
          {
            question: "Do you only produce audit reports?",
            answer:
              "No. We pair findings with remediation and engineering support so gaps actually get closed.",
          },
          {
            question: "Can you help with zero-trust design?",
            answer:
              "Yes. We design identity, network, and access patterns that match how your teams and apps actually work.",
          },
          {
            question: "Do you cover application and cloud security?",
            answer:
              "Yes. We work across application hardening, cloud posture, detection, and ongoing governance.",
          },
          {
            question: "How do engagements usually start?",
            answer:
              "With a scoped risk and architecture review so remediation effort goes to the highest-impact issues first.",
          },
        ],
      },
      {
        slug: "blockchain",
        title: "Blockchain",
        shortDescription: "Secure decentralized systems and smart contracts.",
        heroDescription:
          "Build trusted blockchain products from token logic to secure smart contract implementation.",
        seoTitle: "Blockchain & Smart Contract Development | GV Studio",
        seoDescription:
          "Blockchain development for dApps, wallets, and secure smart contracts. Architecture and delivery by GV Studio.",
        heroImage: IMG.web3,
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
        audience: [
          "Startups launching token or NFT products",
          "Enterprises exploring permissioned or hybrid chains",
          "Teams needing wallet and payment integrations",
          "Founders who want security-first contract delivery",
        ],
        techStack: [
          "Solidity",
          "Hardhat",
          "Foundry",
          "Ethers.js",
          "Web3.js",
          "OpenZeppelin",
          "The Graph",
          "IPFS",
          "Node.js",
          "TypeScript",
        ],
        exampleProject: {
          title: "Secure marketplace contracts",
          problem:
            "A marketplace needed on-chain settlement with wallet UX that non-crypto users could complete without friction.",
          approach:
            "We threat-modeled the flows, implemented contracts with audited patterns, and integrated wallet UX with thorough test coverage.",
          result:
            "A launch-ready on-chain path with clearer risk controls and smoother user wallet interactions.",
        },
        faqs: [
          {
            question: "Which chains do you support?",
            answer:
              "Primarily EVM-compatible chains, with architecture advice when multi-chain or L2 choices matter for cost and UX.",
          },
          {
            question: "Do you arrange security audits?",
            answer:
              "We build audit-ready contracts and can coordinate with external auditors as part of launch readiness.",
          },
          {
            question: "Can you integrate existing wallets and payments?",
            answer:
              "Yes. Wallet connect flows, custodial options where needed, and payment rails that fit your product model.",
          },
        ],
      },
      {
        slug: "quality-assurance",
        title: "Quality Assurance",
        shortDescription: "Reliable software through automation and testing.",
        heroDescription:
          "Deliver stable releases with robust QA strategy, automated testing, and performance validation.",
        seoTitle: "QA & Test Automation Services | GV Studio",
        seoDescription:
          "Software QA, test automation, and performance testing so your releases stay stable under real-world load.",
        heroImage: IMG.qa,
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
        audience: [
          "Product teams shipping frequent releases",
          "Platforms with critical API or checkout paths",
          "Enterprises needing formal release gates",
          "Startups outgrowing manual-only QA",
        ],
        techStack: [
          "Playwright",
          "Cypress",
          "Jest",
          "pytest",
          "k6",
          "JMeter",
          "GitHub Actions",
          "Selenium",
          "Appium",
          "Allure",
        ],
        exampleProject: {
          title: "CI release gates for a SaaS platform",
          problem:
            "Regressions kept escaping to production because critical flows relied on slow, inconsistent manual checks.",
          approach:
            "We mapped risk-based coverage, automated smoke and regression suites in CI, and added performance checks on core APIs.",
          result:
            "Faster, safer releases with clear pass/fail gates before every production deploy.",
        },
        faqs: [
          {
            question: "Do you replace our QA team?",
            answer:
              "We augment and systematize. Automation and strategy free your team to focus on exploratory and high-risk testing.",
          },
          {
            question: "Can you test web, mobile, and APIs?",
            answer:
              "Yes. We design coverage across UI, API, and performance layers based on where failures hurt most.",
          },
          {
            question: "How quickly can automation show value?",
            answer:
              "A focused smoke suite in CI often lands within weeks and pays back immediately on every merge.",
          },
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
        seoTitle: "Custom Software Development Company | GV Studio",
        seoDescription:
          "Custom web platforms, APIs, and cloud-native software development for startups and enterprises. Built by GV Studio.",
        heroImage: IMG.consultancy,
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
        audience: [
          "Startups building their core product platform",
          "Enterprises modernizing legacy systems",
          "Operators needing telecom-grade backends",
          "Teams that want ownership, not black-box vendors",
        ],
        techStack: [
          "TypeScript",
          "Node.js",
          "Python",
          "React",
          "PostgreSQL",
          "Redis",
          "Kafka",
          "Docker",
          "Kubernetes",
          "AWS / GCP",
        ],
        exampleProject: {
          title: "Telecom-grade charging backend",
          problem:
            "A tier-1 operator needed reliable real-time charging and mediation capable of high subscriber volume.",
          approach:
            "We engineered distributed services with clear APIs, observability, and operational runbooks suited to telecom SLAs.",
          result:
            "A production backend pattern built for scale, with visibility for ops and a path to iterate without downtime drama.",
        },
        faqs: [
          {
            question: "Do you build greenfield products and modernize existing systems?",
            answer:
              "Yes. We ship new platforms and also refactor or wrap legacy systems behind cleaner APIs.",
          },
          {
            question: "What stacks do you prefer?",
            answer:
              "We are pragmatic: TypeScript/Node, Python, React, and cloud-native infrastructure are common, but we match your constraints.",
          },
          {
            question: "How do you handle handover?",
            answer:
              "Documentation, runbooks, and pair sessions so your team can operate and extend the system after delivery.",
          },
          {
            question: "Can you work with our in-house engineers?",
            answer:
              "Absolutely. Embedded collaboration is often the fastest path to durable outcomes.",
          },
        ],
      },
      {
        slug: "web3-development",
        title: "Web 3.0 Development",
        shortDescription: "dApps, wallets, and decentralized infrastructure.",
        heroDescription:
          "Launch Web3 products with secure contracts, wallet UX, and production-ready decentralized architecture.",
        seoTitle: "Web3 & dApp Development Services | GV Studio",
        seoDescription:
          "Web3 development for dApps, smart contracts, and wallet UX. Secure decentralized products from GV Studio.",
        heroImage: IMG.web3,
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
        audience: [
          "Founders launching consumer dApps",
          "Brands building token or NFT experiences",
          "Teams needing polished wallet UX",
          "Products bridging Web2 accounts and on-chain actions",
        ],
        techStack: [
          "React",
          "Next.js",
          "TypeScript",
          "Solidity",
          "wagmi",
          "RainbowKit",
          "Hardhat",
          "IPFS",
          "The Graph",
          "Vercel",
        ],
        exampleProject: {
          title: "Consumer dApp with wallet onboarding",
          problem:
            "Users abandoned the product at wallet connect because the flow assumed crypto-native knowledge.",
          approach:
            "We redesigned onboarding, hardened contracts, and shipped a frontend that guided users through connect, sign, and confirm states.",
          result:
            "Higher completion rates on key on-chain actions and a clearer path from first visit to first successful transaction.",
        },
        faqs: [
          {
            question: "Is Web3 development only smart contracts?",
            answer:
              "No. Great Web3 products need UX, indexing, off-chain APIs, and operations — we build the full stack.",
          },
          {
            question: "Can you support multi-chain launches?",
            answer:
              "Yes, when it is justified. We help you choose chains based on fees, users, and operational cost — not trends alone.",
          },
          {
            question: "How do you handle security?",
            answer:
              "Threat modeling, tested contracts, least-privilege patterns, and audit-ready delivery before mainnet risk.",
          },
        ],
      },
      {
        slug: "mobile-game-development",
        title: "Mobile & Game Dev",
        shortDescription: "Cross-platform mobile apps and interactive products.",
        heroDescription:
          "Deliver performant mobile and game experiences across iOS, Android, and modern engines.",
        seoTitle: "Mobile App & Game Development | GV Studio",
        seoDescription:
          "Cross-platform mobile apps and game development for iOS, Android, and modern engines. Built by GV Studio.",
        heroImage: IMG.mobile,
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
        audience: [
          "Startups shipping mobile-first products",
          "Studios building casual or mid-core games",
          "Enterprises needing internal or customer apps",
          "Teams preparing App Store and Play releases",
        ],
        techStack: [
          "React Native",
          "Flutter",
          "Unity",
          "Swift",
          "Kotlin",
          "Firebase",
          "GraphQL",
          "REST APIs",
          "Fastlane",
          "Play / App Store Connect",
        ],
        exampleProject: {
          title: "Cross-platform consumer app launch",
          problem:
            "A product needed iOS and Android parity quickly without maintaining two fully separate codebases.",
          approach:
            "We shipped a cross-platform app with shared business logic, native polish where it mattered, and store-ready release pipelines.",
          result:
            "A coordinated dual-store launch with performance budgets and a maintainable codebase for ongoing releases.",
        },
        faqs: [
          {
            question: "Native or cross-platform — which do you recommend?",
            answer:
              "It depends on UX depth, timeline, and team skills. We recommend based on your product constraints, not a fixed stack.",
          },
          {
            question: "Do you handle store submissions?",
            answer:
              "Yes. We prepare builds, metadata, and release pipelines for App Store and Google Play.",
          },
          {
            question: "Can you build games as well as apps?",
            answer:
              "Yes. We cover interactive products from utility apps to game loops with Unity or similar engines.",
          },
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
        seoTitle: "IT Consultancy & Technology Strategy | GV Studio",
        seoDescription:
          "IT consultancy for architecture, technology roadmaps, and digital transformation delivery with GV Studio advisors.",
        heroImage: IMG.consultancy,
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
        audience: [
          "CTOs and founders setting a multi-year tech roadmap",
          "Enterprises mid-modernization",
          "Teams evaluating build-vs-buy decisions",
          "Organizations preparing for AI or cloud programs",
        ],
        techStack: [
          "Architecture reviews",
          "C4 / ADR docs",
          "Cloud landing zones",
          "API strategy",
          "Data platforms",
          "DevOps maturity",
          "Security baselines",
          "Vendor evaluation",
        ],
        exampleProject: {
          title: "Platform modernization roadmap",
          problem:
            "Leadership had competing vendor pitches and no shared target architecture for the next 18 months.",
          approach:
            "We assessed the current estate, defined a target architecture, and sequenced a delivery roadmap with governance checkpoints.",
          result:
            "A decision-ready plan the leadership team could fund and execute without thrash between vendors.",
        },
        faqs: [
          {
            question: "Is consultancy only workshops and slides?",
            answer:
              "No. We produce actionable architecture, roadmaps, and can stay through execution coaching when you want continuity.",
          },
          {
            question: "Can you advise and also build?",
            answer:
              "Yes. Many clients start with advisory and continue into delivery with the same team for consistency.",
          },
          {
            question: "How long is a typical advisory engagement?",
            answer:
              "Focused assessments often run 2–6 weeks; longer retainers support ongoing architecture and governance.",
          },
        ],
      },
      {
        slug: "it-staffing",
        title: "IT Staffing",
        shortDescription: "Dedicated talent for fast-moving teams.",
        heroDescription:
          "Extend your teams with vetted engineers, designers, and specialists aligned to your roadmap.",
        seoTitle: "IT Staffing & Dedicated Engineering Teams | GV Studio",
        seoDescription:
          "Hire dedicated engineers, designers, and specialists. Flexible IT staffing and team extension from GV Studio.",
        heroImage: IMG.consultancy,
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
        audience: [
          "Product companies with backlog pressure",
          "Enterprises needing specialist surge capacity",
          "Startups delaying full-time hires",
          "Teams needing design, QA, or DevOps support",
        ],
        techStack: [
          "Full-stack engineers",
          "Mobile developers",
          "ML engineers",
          "DevOps / SRE",
          "QA automation",
          "UI/UX designers",
          "Tech leads",
          "Scrum facilitation",
        ],
        exampleProject: {
          title: "Dedicated engineering pod",
          problem:
            "A product team needed senior capacity in weeks, not months, without freezing roadmap work for recruiting.",
          approach:
            "We defined roles, vetted candidates against the stack, and onboarded a pod into the client’s rituals and tooling.",
          result:
            "Immediate delivery velocity with clear ownership and the option to scale the pod up or down as priorities shifted.",
        },
        faqs: [
          {
            question: "Are people employees of GV Studio or contractors?",
            answer:
              "We provide dedicated talent under flexible engagement models — details are agreed per role and region.",
          },
          {
            question: "How fast can someone start?",
            answer:
              "Common profiles can shortlist within days; niche senior roles may take longer for quality matching.",
          },
          {
            question: "Can staff work in our timezone and tools?",
            answer:
              "Yes. We align to your ceremonies, repos, and communication stack so they operate as part of your team.",
          },
        ],
      },
      {
        slug: "sales-marketing",
        title: "Sales & Marketing",
        shortDescription: "Growth systems backed by data and automation.",
        heroDescription:
          "Scale customer acquisition and retention with integrated CRM, campaigns, and analytics.",
        seoTitle: "Sales & Marketing Technology Services | GV Studio",
        seoDescription:
          "Growth systems with CRM integrations, campaign automation, and analytics to scale acquisition and retention.",
        heroImage: IMG.marketing,
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
        audience: [
          "Growth teams drowning in disconnected tools",
          "Sales orgs needing cleaner pipeline data",
          "Founders building their first serious funnel stack",
          "Marketing teams that need engineering help on tracking",
        ],
        techStack: [
          "HubSpot",
          "Salesforce",
          "Segment",
          "GA4",
          "Meta / Google Ads APIs",
          "n8n / Zapier",
          "PostgreSQL",
          "dbt",
          "Looker / Metabase",
          "Webhooks",
        ],
        exampleProject: {
          title: "Unified lead-to-revenue funnel",
          problem:
            "Marketing and sales disagreed on lead quality because attribution and CRM stages were inconsistent.",
          approach:
            "We audited the funnel, integrated CRM and ad platforms, and implemented scoring plus reporting both teams trusted.",
          result:
            "Clearer pipeline visibility and campaign decisions based on shared metrics instead of conflicting spreadsheets.",
        },
        faqs: [
          {
            question: "Do you run ads or build the systems behind them?",
            answer:
              "We focus on the systems — CRM, automation, tracking, and analytics — so your growth team can operate with reliable data.",
          },
          {
            question: "Which CRMs do you integrate?",
            answer:
              "Commonly HubSpot and Salesforce, plus custom CRM or warehouse setups when needed.",
          },
          {
            question: "Can you fix broken attribution?",
            answer:
              "Yes. We rebuild event tracking and funnel definitions so acquisition and revenue numbers reconcile.",
          },
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
  "Software Development": "software-development",
  Blockchain: "blockchain",
  "IT Staffing": "it-staffing",
};
