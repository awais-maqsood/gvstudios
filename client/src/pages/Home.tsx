import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Brain,
  Zap,
  Database,
  Shield,
  Cpu,
  Lightbulb,
  ChevronLeft,
  ChevronRight,
  Plus,
  Link2,
  Bot,
  Landmark,
  HeartPulse,
  GraduationCap,
  ShoppingCart,
  Gamepad2,
  Building2,
  Scale,
  Microchip,
  Smartphone,
  Layers3,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useScrollAnimation, useStaggerAnimation } from "@/hooks/useScrollAnimation";
import { serviceCategories } from "@/data/services";
import { Link } from "wouter";

/**
 * DESIGN PHILOSOPHY: Octaloop-Style Layout with Orange & Black Gvstudios Branding
 * Features dashed borders, grid layouts, featured service sections, and advanced animations
 */

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const [isIndustriesMenuOpen, setIsIndustriesMenuOpen] = useState(false);

  const testimonials = [
    {
      text: "Gvstudios delivered an outstanding AI-powered solution with seamless integration. Their team's technical expertise and collaborative approach made the project a success.",
      author: "Sarah Chen",
      title: "VP of AI, TechCorp"
    },
    {
      text: "Working with Gvstudios was exceptional. Their professionalism and deep understanding of ML systems transformed our data infrastructure completely.",
      author: "Michael Rodriguez",
      title: "CTO, FinanceHub"
    },
    {
      text: "Gvstudios delivered exceptional results with unmatched technical expertise. Their collaborative approach ensured outcomes that perfectly aligned with our vision.",
      author: "Priya Patel",
      title: "Head of Innovation, RetailGlobal"
    },
    {
      text: "The AI automation platform Gvstudios built for us reduced operational costs by 40%. Truly outstanding work and partnership.",
      author: "David Thompson",
      title: "CEO, LogisticsPro"
    }
  ];

  const faqs = [
    {
      question: "What AI services does Gvstudios provide?",
      answer: "We specialize in machine learning, deep learning, AI automation, data engineering, and AI governance. Our solutions span predictive analytics, computer vision, NLP, and autonomous systems."
    },
    {
      question: "How do I get started with Gvstudios?",
      answer: "Contact our team for a free consultation. We'll discuss your business goals, assess your data landscape, and propose a tailored AI strategy."
    },
    {
      question: "How can AI solutions benefit my business?",
      answer: "AI can automate processes, improve decision-making, enhance customer experiences, and unlock insights from your data. Our solutions typically deliver 30-50% efficiency gains."
    },
    {
      question: "What makes Gvstudios different?",
      answer: "We combine deep technical expertise with industry knowledge. Our 280+ specialists deliver production-ready AI systems with 99%+ accuracy and 24/7 support."
    },
    {
      question: "Which industries do you serve?",
      answer: "We work across 12+ industries including healthcare, finance, manufacturing, retail, energy, telecom, government, and more."
    }
  ];

  const featuredService = {
    title: "Artificial Intelligence",
    desc: "Machine Learning, NLP, Computer Vision and Generative AI engineered to automate, analyze and augment every layer of your business.",
    image: "https://www.octaloop.io/assets/service-ai-DrNXlC07.jpg",
    tags: ["GenAI", "MLOps", "Computer Vision", "NLP"],
  };

  const services = [
    { title: "IT Consultancy", desc: "Strategic technology advisory", icon: "⚙", image: "https://www.octaloop.io/assets/service-consultancy-E4sfdVQS.jpg" },
    { title: "Cybersecurity", desc: "Enterprise-grade protection", icon: "🛡", image: "https://www.octaloop.io/assets/service-cybersecurity-BBi4wjd2.jpg" },
    { title: "UI/UX & Design", desc: "Stunning digital experiences", icon: "✎", image: "https://www.octaloop.io/assets/service-design-BSMSFrb-.jpg" },
    { title: "Sales & Marketing", desc: "Data-driven growth", icon: "📈", image: "https://www.octaloop.io/assets/service-marketing-D2CadWla.jpg" },
    { title: "Web 3.0 Development", desc: "Blockchain, dApps & smart contracts", icon: "⛓", image: "https://www.octaloop.io/assets/service-web3-P2A4mAbw.jpg" },
    { title: "Quantum Computing", desc: "Next-gen algorithms", icon: "⚛", image: "https://www.octaloop.io/assets/service-quantum-DGf_VO8N.jpg" },
    { title: "Quality Assurance", desc: "Automated & manual testing", icon: "✓", image: "https://www.octaloop.io/assets/service-qa-RU_gLabG.jpg" },
    { title: "Mobile & Game Dev", desc: "Cross-platform apps & games", icon: "📱", image: "https://www.octaloop.io/assets/service-mobile-Bnsz5aK8.jpg" },
    { title: "Internet of Things", desc: "Smart devices & edge computing", icon: "◍", image: "https://www.octaloop.io/assets/service-iot-DKuVrN9C.jpg" },
    { title: "Augmented Reality", desc: "Immersive AR/VR experiences", icon: "◌", image: "https://www.octaloop.io/assets/service-ar-BHdXMvB9.jpg" },
    { title: "Digital Twin", desc: "Virtual replicas & simulations", icon: "▣", image: "https://www.octaloop.io/assets/digital-twin-hero-BovXLGVy.jpg" },
    { title: "GIS & Geospatial", desc: "Location intelligence & mapping", icon: "⌖", image: "https://www.octaloop.io/assets/gis-hero-DEMxVNSu.jpg" }
  ];

  const spatialCards = [
    {
      eyebrow: "DIGITAL TWIN",
      title: "Virtual replicas of physical assets",
      description:
        "Real-time simulation, predictive maintenance, and IoT-driven monitoring for factories, infrastructure, and cities.",
      points: ["3D Asset Modeling", "Predictive Analytics", "IoT Integration"],
      image:
        "https://www.octaloop.io/assets/digital-twin-hero-BovXLGVy.jpg",
    },
    {
      eyebrow: "GIS & GEOSPATIAL",
      title: "Location intelligence at scale",
      description:
        "Satellite imagery, terrain analysis, and spatial data engineering for smarter urban planning and resource decisions.",
      points: ["Satellite Imagery", "Spatial Analytics", "Smart Mapping"],
      image:
        "https://www.octaloop.io/assets/gis-hero-DEMxVNSu.jpg",
    },
    {
      eyebrow: "EMBODIED AI & ROBOTICS",
      title: "Where AI meets the physical world",
      description:
        "Sensory perception, on-device AI, and autonomous navigation powering the next generation of robotics and automation.",
      points: ["Sensor Fusion", "On-Device AI", "Autonomous Navigation"],
      image:
        "https://www.octaloop.io/assets/embodied-ai-hero-tUOufDHL.jpg",
    },
  ];

  const industries = [
    { title: "Blockchain / NFTs / DeFi", projects: "40+ Projects", icon: "◈", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663479913404/4ksf5uZVSYeBaJPwjChFSM/ai-data-flow-cEF8YMoyUN6uptPqjghePV.webp" },
    { title: "AI & NLP / Chatbots", projects: "35+ Projects", icon: "⟡", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663479913404/4ksf5uZVSYeBaJPwjChFSM/ai-circuit-board-cEF8YMoyUN6uptPqjghePV.webp" },
    { title: "SaaS / Web Platforms", projects: "20+ Projects", icon: "⌁", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663479913404/4ksf5uZVSYeBaJPwjChFSM/ai-neural-cEF8YMoyUN6uptPqjghePV.webp" },
    { title: "FinTech / Crypto", projects: "10+ Projects", icon: "◍", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663479913404/4ksf5uZVSYeBaJPwjChFSM/ai-data-flow-cEF8YMoyUN6uptPqjghePV.webp" },
    { title: "Mobile Apps", projects: "10+ Projects", icon: "▣", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663479913404/4ksf5uZVSYeBaJPwjChFSM/ai-circuit-board-cEF8YMoyUN6uptPqjghePV.webp" },
    { title: "HealthTech", projects: "8+ Projects", icon: "♡", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663479913404/4ksf5uZVSYeBaJPwjChFSM/ai-neural-cEF8YMoyUN6uptPqjghePV.webp" },
    { title: "Gaming / Metaverse", projects: "8+ Projects", icon: "⎔", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663479913404/4ksf5uZVSYeBaJPwjChFSM/ai-circuit-board-cEF8YMoyUN6uptPqjghePV.webp" },
    { title: "E-Commerce / Retail", projects: "6+ Projects", icon: "◠", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663479913404/4ksf5uZVSYeBaJPwjChFSM/ai-data-flow-cEF8YMoyUN6uptPqjghePV.webp" },
    { title: "EdTech", projects: "5+ Projects", icon: "◉", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663479913404/4ksf5uZVSYeBaJPwjChFSM/ai-neural-cEF8YMoyUN6uptPqjghePV.webp" },
    { title: "PropTech / Real Estate", projects: "5+ Projects", icon: "▤", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663479913404/4ksf5uZVSYeBaJPwjChFSM/ai-circuit-board-cEF8YMoyUN6uptPqjghePV.webp" },
    { title: "LegalTech", projects: "4+ Projects", icon: "⌘", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663479913404/4ksf5uZVSYeBaJPwjChFSM/ai-data-flow-cEF8YMoyUN6uptPqjghePV.webp" },
    { title: "IoT / Hardware", projects: "3+ Projects", icon: "⚙", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663479913404/4ksf5uZVSYeBaJPwjChFSM/ai-neural-cEF8YMoyUN6uptPqjghePV.webp" }
  ];

  const platformGroups = [
    {
      title: "Enterprise Operations",
      color: "bg-blue-500",
      items: [
        { name: "Asset Management Systems", desc: "End-to-end asset tracking, lifecycle management, and compliance reporting.", icon: "◍" },
        { name: "Billing & Invoicing", desc: "Automated invoicing, recurring billing, tax handling and revenue recognition.", icon: "◫" },
        { name: "ERP & System Integration", desc: "Odoo, SAP, NetSuite implementations with custom module development.", icon: "◈" },
        { name: "Workflow Automation", desc: "BPM, approval flows and RPA to streamline operational processes.", icon: "⟲" },
      ],
    },
    {
      title: "Customer & Commerce",
      color: "bg-amber-500",
      items: [
        { name: "CRM Platforms", desc: "Sales, service and marketing automation tailored to enterprise pipelines.", icon: "◉" },
        { name: "E-commerce & Marketplaces", desc: "Shopify, Magento, and headless commerce with multi-vendor support.", icon: "◠" },
        { name: "Payments & Wallets", desc: "Stripe, PayPal, Moonpay and crypto gateway integrations.", icon: "▤" },
        { name: "Customer Support Suites", desc: "Omnichannel helpdesks, live chat, and AI-driven ticket triage.", icon: "◌" },
      ],
    },
    {
      title: "People & Industry Platforms",
      color: "bg-emerald-500",
      items: [
        { name: "HR & Recruitment", desc: "AI-powered hiring, resume parsing, ATS and workforce management.", icon: "◉" },
        { name: "LMS & EdTech Platforms", desc: "Learning management, assessments, and live virtual classrooms.", icon: "◬" },
        { name: "Healthcare Solutions", desc: "EMR/EHR, telemedicine, and HIPAA-compliant patient platforms.", icon: "◍" },
        { name: "Logistics & Fleet Systems", desc: "Real-time tracking, route optimization, and warehouse management.", icon: "▣" },
      ],
    },
  ];

  const successSteps = [
    {
      title: "Discover & Define",
      desc: "We analyze your goals and challenges to set the right direction.",
      icon: Lightbulb,
    },
    {
      title: "Design & Match",
      desc: "Tailored solutions and the perfect talent for your needs.",
      icon: Brain,
    },
    {
      title: "Build & Deliver",
      desc: "Agile teams turn ideas into reality, fast and efficiently.",
      icon: Zap,
    },
    {
      title: "Scale & Support",
      desc: "Continuous support and flexibility to grow with you.",
      icon: Shield,
    },
  ];

  const caseStudies = [
    { category: "Healthcare AI", client: "MediTech Solutions", projects: "40+", description: "Diagnostic AI system using deep learning" },
    { category: "Financial ML", client: "FinServe Global", projects: "35+", description: "Fraud detection processing 1M+ transactions daily" },
    { category: "Supply Chain AI", client: "LogisticsPro", projects: "20+", description: "Demand forecasting reducing inventory costs by 35%" },
    { category: "Retail AI", client: "RetailHub", projects: "10+", description: "Personalization engine driving 40% engagement increase" },
    { category: "Manufacturing AI", client: "IndustryTech", projects: "10+", description: "Predictive maintenance preventing equipment failures" },
    { category: "Energy AI", client: "PowerGrid Solutions", projects: "8+", description: "Load forecasting reducing energy waste by 25%" }
  ];

  const leaders = [
    { name: "Awais Maqsood", role: "Founder & CEO", expertise: "AI Architecture & Strategy", image: `${import.meta.env.BASE_URL}awais-maqsood.png` },
    { name: "Waleed Waheed", role: "Founder & CTO", expertise: "ML Engineering & Infrastructure", image: `${import.meta.env.BASE_URL}waleed-waheed.png` },
  ];

  const industryMenuIcons = [
    Link2,
    Bot,
    Landmark,
    HeartPulse,
    GraduationCap,
    ShoppingCart,
    Gamepad2,
    Building2,
    Scale,
    Microchip,
    Smartphone,
    Layers3,
  ];

  const industryAccentClasses = [
    "bg-blue-500",
    "bg-blue-500",
    "bg-blue-500",
    "bg-blue-500",
    "bg-orange-500",
    "bg-orange-500",
    "bg-orange-500",
    "bg-orange-500",
    "bg-emerald-500",
    "bg-emerald-500",
    "bg-emerald-500",
    "bg-emerald-500",
  ];

  const featuredOverlay = "linear-gradient(110deg, rgba(0,0,0,0.82) 0%, rgba(17,17,17,0.58) 42%, rgba(245,158,11,0.28) 100%)";
  const serviceOverlays = [
    "linear-gradient(120deg, rgba(0,0,0,0.82) 0%, rgba(51,65,85,0.56) 58%, rgba(245,158,11,0.24) 100%)",
    "linear-gradient(120deg, rgba(0,0,0,0.82) 0%, rgba(55,65,81,0.54) 58%, rgba(234,88,12,0.22) 100%)",
    "linear-gradient(120deg, rgba(0,0,0,0.82) 0%, rgba(39,39,42,0.56) 58%, rgba(245,158,11,0.22) 100%)",
  ];
  const spatialOverlays = [
    "linear-gradient(130deg, rgba(0,0,0,0.64) 0%, rgba(30,58,138,0.5) 55%, rgba(245,158,11,0.18) 100%)",
    "linear-gradient(130deg, rgba(0,0,0,0.64) 0%, rgba(8,47,73,0.5) 55%, rgba(245,158,11,0.18) 100%)",
    "linear-gradient(130deg, rgba(0,0,0,0.64) 0%, rgba(30,27,75,0.5) 55%, rgba(245,158,11,0.18) 100%)",
  ];
  const industryOverlays = [
    "linear-gradient(145deg, rgba(12,12,12,0.78) 0%, rgba(17,24,39,0.58) 58%, rgba(245,158,11,0.14) 100%)",
    "linear-gradient(145deg, rgba(12,12,12,0.78) 0%, rgba(30,41,59,0.58) 58%, rgba(245,158,11,0.14) 100%)",
    "linear-gradient(145deg, rgba(12,12,12,0.78) 0%, rgba(51,65,85,0.56) 58%, rgba(245,158,11,0.14) 100%)",
    "linear-gradient(145deg, rgba(12,12,12,0.78) 0%, rgba(15,23,42,0.58) 58%, rgba(245,158,11,0.14) 100%)",
  ];
  const contactEmail = "awaismaqsood91@gmail.com";
  const contactMailto = `mailto:${contactEmail}?subject=${encodeURIComponent("Website Inquiry - Gvstudios")}`;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b-2 border-orange-200 animate-slide-in-down">
        <div className="container flex items-center justify-between py-4 md:py-6">
          <div className="flex items-center">
            <img src={`${import.meta.env.BASE_URL}gv-logo.png`} alt="Gvstudios logo" className="h-12 w-auto md:h-14" />
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <div
              className="relative"
              onMouseEnter={() => setIsServicesMenuOpen(true)}
              onMouseLeave={() => setIsServicesMenuOpen(false)}
            >
              <button
                type="button"
                className="text-black hover:text-amber-500 transition-colors"
                onClick={() => {
                  window.location.hash = "services";
                  setIsServicesMenuOpen((prev) => !prev);
                }}
              >
                Services
              </button>
              {isServicesMenuOpen && (
                <div className="absolute left-0 top-full mt-4 w-[900px] rounded-2xl border border-gray-200 bg-white shadow-2xl z-50">
                  <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-black">Our Services</h3>
                      <p className="text-gray-600">Comprehensive technology solutions</p>
                    </div>
                    <a href="#services" className="text-amber-500 font-semibold">View all</a>
                  </div>
                  <div className="grid grid-cols-2 gap-0">
                    {serviceCategories.map((category) => (
                      <div key={category.title} className="p-6 border-r border-b border-gray-100 even:border-r-0">
                        <h4 className="text-sm font-bold tracking-[0.12em] text-amber-500 mb-4">{category.title}</h4>
                        <ul className="space-y-3">
                          {category.services.map((service) => (
                            <li key={service.slug}>
                              <Link href={`/services/${service.slug}`} className="text-black hover:text-amber-500 transition-colors font-medium">
                                {service.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="px-6 py-4 text-gray-500 text-sm">Need help choosing? Contact us for recommendations.</div>
                </div>
              )}
            </div>
            <div
              className="relative"
              onMouseEnter={() => setIsIndustriesMenuOpen(true)}
              onMouseLeave={() => setIsIndustriesMenuOpen(false)}
            >
              <button
                type="button"
                className="text-black hover:text-amber-500 transition-colors"
                onClick={() => {
                  window.location.hash = "industries";
                  setIsIndustriesMenuOpen((prev) => !prev);
                }}
              >
                Industries
              </button>
              {isIndustriesMenuOpen && (
                <div className="absolute left-0 top-full mt-4 w-[760px] rounded-2xl border border-gray-200 bg-white shadow-2xl z-50">
                  <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-black">Industries We Serve</h3>
                      <p className="text-gray-600">Delivering innovation across sectors</p>
                    </div>
                    <a href="#industries" className="text-amber-500 font-semibold">View all</a>
                  </div>
                  <div className="grid grid-cols-2 gap-x-10 gap-y-4 px-6 py-6">
                    {industries.map((industry, idx) => {
                      const Icon = industryMenuIcons[idx % industryMenuIcons.length];
                      return (
                      <a
                        key={industry.title}
                        href="#industries"
                        className="flex items-center gap-3 text-black hover:text-amber-500 transition-colors"
                      >
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-500">
                          <Icon className="h-4 w-4" />
                        </span>
                        <span className="font-medium">{industry.title}</span>
                      </a>
                      );
                    })}
                  </div>
                  <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
                    <p className="text-gray-500 text-sm">Need help choosing?</p>
                    <Button asChild className="bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-full px-6">
                      <a href={contactMailto}>
                        Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              )}
            </div>
            <a href="#portfolio" className="text-black hover:text-amber-500 transition-colors">Case Studies</a>
            <a href="#about" className="text-black hover:text-amber-500 transition-colors">About Us</a>
          </div>
          <Button asChild className="bg-amber-500 hover:bg-amber-600 text-black font-semibold btn-interactive">
            <a href={contactMailto}>GET IN TOUCH</a>
          </Button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <video
            className="absolute inset-0 h-full w-full object-cover opacity-55"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260411_104032_69319010-2458-492b-b04d-b40a5dfa4482.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/75 to-white/55" />

          <div className="container relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-black animate-fade-in-up">
                Empowering The Next
                <br />
                Era Of <span className="text-amber-500">AI Solutions</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl animate-fade-in-up">
                Gvstudios is a global AI company delivering custom machine learning and end-to-end AI services that help businesses build, scale, and innovate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
                <Button asChild className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-6 text-base btn-interactive">
                  <a href={contactMailto}>GET IN TOUCH</a>
                </Button>
                <Button className="border-2 border-amber-500 text-black hover:bg-amber-50 font-semibold px-8 py-6 text-base btn-interactive">
                  EXPLORE SERVICES
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Fueling Success Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <video
            className="absolute inset-0 h-full w-full object-cover opacity-45"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_143803_f635b644-d959-4f16-9d29-cedaeb5c6de0.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-white/80" />
          <div className="container relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black">
              Fueling Success Through Innovative <span className="text-amber-500">Technology Solutions</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-16 leading-relaxed">
              At Gvstudios, we transform the way organizations operate through innovative technology services spanning AI, Machine Learning, Data Engineering, and beyond. Our expertise fuels growth, enhances efficiency, and drives measurable success across industries.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              <div className="text-center stagger-item animate-fade-in-up">
                <div className="text-5xl md:text-6xl font-bold text-amber-500 mb-3 font-mono">2500+</div>
                <p className="text-gray-600 font-semibold text-base">Projects Delivered</p>
              </div>
              <div className="text-center stagger-item animate-fade-in-up">
                <div className="text-5xl md:text-6xl font-bold text-amber-500 mb-3 font-mono">800+</div>
                <p className="text-gray-600 font-semibold text-base">Clients Worldwide</p>
              </div>
              <div className="text-center stagger-item animate-fade-in-up">
                <div className="text-5xl md:text-6xl font-bold text-amber-500 mb-3 font-mono">20+</div>
                <p className="text-gray-600 font-semibold text-base">Industries Served</p>
              </div>
              <div className="text-center stagger-item animate-fade-in-up">
                <div className="text-5xl md:text-6xl font-bold text-amber-500 mb-3 font-mono">280+</div>
                <p className="text-gray-600 font-semibold text-base">Tech Experts</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold tracking-[0.2em] text-amber-500 mb-3">OUR SERVICES</p>
              <h2 className="text-4xl md:text-5xl font-bold text-black">
                Engineering the <span className="text-amber-500 italic">future</span>, one service at a time
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto mt-6">
                From AI and blockchain to immersive AR and enterprise infrastructure - end-to-end solutions for startups and Fortune 500s alike.
              </p>
            </div>

            <div className="space-y-4">
              <div
                className="rounded-2xl overflow-hidden min-h-[300px] md:min-h-[360px] animate-fade-in-up"
                style={{
                  backgroundImage: `${featuredOverlay}, url('${featuredService.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="bg-gradient-to-r from-black/80 to-black/30 h-full p-6 md:p-8 flex flex-col justify-end">
                  <p className="text-white/80 text-xs font-semibold tracking-[0.18em] mb-2">FEATURED SERVICE</p>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">{featuredService.title}</h3>
                  <p className="text-white/90 mb-4 max-w-3xl">{featuredService.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {featuredService.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 text-[11px] font-semibold rounded-full bg-white/20 text-white">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href="#" className="text-white font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                    Explore Service <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {services.map((service, idx) => (
                  <div
                    key={service.title}
                    className="rounded-2xl overflow-hidden min-h-[170px] animate-fade-in-up"
                    style={{
                      animationDelay: `${idx * 0.05}s`,
                      backgroundImage: `${serviceOverlays[idx % serviceOverlays.length]}, url('${service.image}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="bg-gradient-to-r from-black/85 to-black/45 h-full p-5 flex flex-col justify-end">
                      <div className="mb-3">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/20 text-white text-xs font-bold">
                          {service.icon}
                        </span>
                      </div>
                      <h4 className="text-white font-bold mb-1">{service.title}</h4>
                      <p className="text-white/80 text-sm">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Spatial Intelligence Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold tracking-[0.2em] text-amber-500 mb-3">SPATIAL INTELLIGENCE & EMBODIED AI</p>
              <h2 className="text-4xl md:text-5xl font-bold text-black">
                Bridging the <span className="text-amber-500 italic">digital</span> and
                <br className="hidden md:block" /> physical worlds
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto mt-6">
                From virtual replicas of cities to autonomous robotic systems - engineered platforms that perceive, simulate, and act in the real world.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {spatialCards.map((card, idx) => (
                <article key={card.title} className="rounded-2xl border border-gray-200 overflow-hidden bg-white animate-fade-in-up" style={{ animationDelay: `${idx * 0.08}s` }}>
                  <div
                    className="min-h-[130px] bg-cover bg-center"
                    style={{ backgroundImage: `${spatialOverlays[idx % spatialOverlays.length]}, url('${card.image}')` }}
                  >
                    <div className="h-full min-h-[130px] bg-gradient-to-r from-black/70 to-black/40 p-4 flex flex-col justify-end">
                      <p className="text-[11px] tracking-[0.16em] font-semibold text-white/90">{card.eyebrow}</p>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-2xl font-bold text-black mb-2">{card.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{card.description}</p>
                    <ul className="space-y-1 mb-4">
                      {card.points.map((point) => (
                        <li key={point} className="text-sm text-gray-600">
                          • {point}
                        </li>
                      ))}
                    </ul>
                    <a href="#" className="text-amber-500 font-semibold text-sm flex items-center gap-1">
                      Explore <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 max-w-5xl mx-auto rounded-2xl border border-gray-200 bg-white grid grid-cols-2 md:grid-cols-4 overflow-hidden">
              <div className="p-6 text-center border-b md:border-b-0 md:border-r border-gray-200">
                <div className="text-4xl font-bold text-amber-500">40%</div>
                <p className="text-xs tracking-[0.18em] text-gray-500 mt-1">COST REDUCTION</p>
              </div>
              <div className="p-6 text-center border-b md:border-b-0 md:border-r border-gray-200">
                <div className="text-4xl font-bold text-amber-500">3x</div>
                <p className="text-xs tracking-[0.18em] text-gray-500 mt-1">FASTER PLANNING</p>
              </div>
              <div className="p-6 text-center md:border-r border-gray-200">
                <div className="text-4xl font-bold text-amber-500">99.7%</div>
                <p className="text-xs tracking-[0.18em] text-gray-500 mt-1">PRECISION RATE</p>
              </div>
              <div className="p-6 text-center">
                <div className="text-4xl font-bold text-amber-500">24/7</div>
                <p className="text-xs tracking-[0.18em] text-gray-500 mt-1">AUTONOMOUS OPS</p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section id="industries" className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold tracking-[0.2em] text-amber-500 mb-3">INDUSTRIES WE SERVE</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
                Our Industry <span className="text-amber-500 italic">Expertise</span>
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Deep domain knowledge across 12+ verticals - delivering tailored solutions that move the needle.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              {industries.map((industry, idx) => (
                <article
                  key={industry.title}
                  className="rounded-2xl border border-gray-200 p-5 bg-white shadow-sm hover:shadow-md transition-shadow animate-fade-in-up"
                  style={{
                    animationDelay: `${idx * 0.05}s`,
                  }}
                >
                  <div className={`h-1.5 w-10 rounded-full ${industryAccentClasses[idx % industryAccentClasses.length]} mb-4`} />
                  <div className="flex items-start justify-between mb-4">
                    <span className={`inline-flex items-center justify-center w-8 h-8 rounded-lg ${industryAccentClasses[idx % industryAccentClasses.length]} text-white text-xs font-bold`}>
                      {industry.icon}
                    </span>
                    <span className="px-2 py-1 text-[10px] uppercase tracking-[0.08em] font-semibold rounded-full bg-gray-100 text-gray-600">
                      {industry.projects}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-black mb-1 leading-tight">{industry.title}</h3>
                  <p className="text-sm text-gray-600">Industry-focused digital solutions and delivery expertise.</p>
                </article>
              ))}
            </div>

            <div className="text-center mt-10">
              <Button className="bg-black hover:bg-gray-900 text-white font-semibold px-8 py-5 text-sm rounded-full btn-interactive uppercase tracking-[0.06em]">
                View All Industries <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Enterprise Platforms Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold tracking-[0.2em] text-amber-500 mb-3">SOLUTIONS WE BUILD</p>
              <h2 className="text-4xl md:text-5xl font-bold text-black">
                Enterprise Products & <span className="text-amber-500">Industry Platforms</span>
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto mt-6">
                From core business systems to vertical-specific platforms, we engineer production-grade solutions that scale with your organization.
              </p>
            </div>

            <div className="space-y-8">
              {platformGroups.map((group) => (
                <div key={group.title}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`w-6 h-1 rounded-full ${group.color}`} />
                    <h3 className="text-xl font-bold text-black">{group.title}</h3>
                  </div>
                  <div className="grid md:grid-cols-4 gap-4">
                    {group.items.map((item) => (
                      <article key={item.name} className="rounded-2xl border border-gray-200 p-5 bg-white shadow-sm hover:shadow-md transition-shadow">
                        <div className="mb-3">
                          <span className={`inline-flex items-center justify-center w-8 h-8 rounded-lg ${group.color} text-white text-xs font-bold`}>
                            {item.icon}
                          </span>
                        </div>
                        <h4 className="text-base font-bold text-black mb-2">{item.name}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-gray-200 p-4 md:p-6 bg-white flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8">
                <div>
                  <p className="text-3xl font-bold text-black">120+</p>
                  <p className="text-xs tracking-[0.12em] text-gray-500">PLATFORMS DELIVERED</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-black">40M+</p>
                  <p className="text-xs tracking-[0.12em] text-gray-500">END USERS SERVED</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-black">99.9%</p>
                  <p className="text-xs tracking-[0.12em] text-gray-500">AVERAGE UPTIME</p>
                </div>
              </div>
              <Button asChild className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-6 rounded-xl">
                <a href={contactMailto}>
                  Discuss Your Platform <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                AI Projects That <span className="text-amber-500">Matter</span>
              </h2>
              <p className="text-gray-600">217+ AI projects delivered across 12+ industries</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {caseStudies.map((study, idx) => (
                <div
                  key={study.client}
                  className="border-2 border-dashed border-amber-300 rounded-lg p-6 hover:border-amber-500 hover:shadow-lg transition-all duration-300 stagger-item animate-fade-in-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <p className="text-amber-500 text-sm font-semibold mb-2">{study.projects}</p>
                  <h4 className="text-lg font-bold text-black mb-2">{study.category}</h4>
                  <p className="text-gray-600 text-sm mb-3">{study.client}</p>
                  <p className="text-gray-700 text-sm">{study.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Process Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Maximize Your Success with Us</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Give your business an edge through customized tech innovation, tailored teams, and future-ready solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-12">
              {successSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="text-center">
                    <div className="w-12 h-12 rounded-xl bg-amber-500 mx-auto mb-4 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-black mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="relative rounded-xl overflow-hidden bg-gradient-to-r from-amber-500 via-orange-500 to-black p-8 md:p-10">
              <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white/90 text-gray-700 flex items-center justify-center">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-9 h-9 rounded-full bg-white/90 text-gray-700 flex items-center justify-center">
                <ChevronRight className="w-4 h-4" />
              </button>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">Ready to Accelerate Your Digital Transformation?</h3>
                  <p className="text-white/90 max-w-2xl">
                    Partner with Gvstudios to build next-gen solutions powered by AI, blockchain, and cloud technologies.
                  </p>
                </div>
                <Button asChild className="bg-white hover:bg-gray-100 text-black font-semibold px-8 py-6 rounded-full self-start md:self-auto">
                  <a href={contactMailto}>
                    Get Started <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>

              <div className="flex items-center justify-center gap-2 mt-8">
                <span className="h-1.5 w-7 rounded-full bg-white" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                What Our <span className="text-amber-500">Clients Say</span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="border-2 border-dashed border-amber-300 rounded-lg p-8 md:p-12 mb-8 animate-fade-in-up">
                <p className="text-lg text-gray-700 mb-6 italic">"{testimonials[currentTestimonial].text}"</p>
                <div>
                  <p className="font-bold text-black">{testimonials[currentTestimonial].author}</p>
                  <p className="text-amber-500 text-sm">{testimonials[currentTestimonial].title}</p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                  className="p-2 border-2 border-amber-500 rounded-full hover:bg-amber-50 transition-all duration-300"
                >
                  <ChevronLeft className="w-6 h-6 text-amber-500" />
                </button>
                <div className="flex gap-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentTestimonial(idx)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        idx === currentTestimonial ? "bg-amber-500 w-8" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                  className="p-2 border-2 border-amber-500 rounded-full hover:bg-amber-50 transition-all duration-300"
                >
                  <ChevronRight className="w-6 h-6 text-amber-500" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section id="about" className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Minds Behind <span className="text-amber-500">Gvstudios</span>
              </h2>
              <p className="text-gray-600">Meet Our Leadership</p>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              {leaders.map((leader, idx) => (
                <div
                  key={leader.name}
                  className="w-full max-w-md border-2 border-dashed border-amber-300 rounded-lg p-8 text-center hover:border-amber-500 hover:shadow-lg transition-all duration-300 stagger-item animate-fade-in-up"
                  style={{ animationDelay: `${idx * 0.15}s` }}
                >
                  <div className="w-24 h-24 bg-amber-100 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                    {leader.image ? (
                      <img src={leader.image} alt={leader.name} className="h-full w-full object-cover" />
                    ) : (
                      <span className="text-4xl text-amber-500">👤</span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">{leader.name}</h3>
                  <p className="text-amber-500 font-semibold mb-2">{leader.role}</p>
                  <p className="text-gray-600 text-sm">{leader.expertise}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container max-w-3xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Frequently Asked <span className="text-amber-500">Questions</span>
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="border-2 border-dashed border-amber-300 rounded-lg overflow-hidden hover:border-amber-500 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                    className="w-full p-6 flex items-center justify-between hover:bg-amber-50 transition-colors duration-300"
                  >
                    <h3 className="text-lg font-bold text-black text-left">{faq.question}</h3>
                    <Plus
                      className={`w-6 h-6 text-amber-500 transition-transform duration-300 ${
                        expandedFaq === idx ? "rotate-45" : ""
                      }`}
                    />
                  </button>
                  {expandedFaq === idx && (
                    <div className="px-6 pb-6 border-t-2 border-dashed border-amber-300 bg-amber-50">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 md:py-24 bg-black">
          <div className="container max-w-2xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Discuss Your <span className="text-amber-500">Platform</span>
            </h2>
            <p className="text-white/80 mb-8">
              Ready to transform your business with AI? Let's discuss how Gvstudios can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 text-white placeholder:text-white/50 border-2 border-amber-500 focus:outline-none focus:border-amber-400 transition-colors duration-300"
              />
              <Button asChild className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 btn-interactive">
                <a href={contactMailto}>Subscribe Now</a>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-amber-500">
          <div className="container text-center animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
              Ready to Accelerate Your Digital Transformation?
            </h2>
            <p className="text-lg text-black/90 mb-8 max-w-2xl mx-auto">
              Partner with Gvstudios to build next-gen AI solutions powered by machine learning, deep learning, and autonomous systems.
            </p>
            <Button asChild className="bg-black hover:bg-gray-900 text-amber-500 font-semibold px-8 py-6 text-base btn-interactive">
              <a href={contactMailto}>
                Get Started <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-12 md:py-16">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="animate-fade-in-up">
              <img src={`${import.meta.env.BASE_URL}gv-logo.png`} alt="Gvstudios logo" className="h-14 w-auto mb-4" />
              <h4 className="font-bold mb-4 text-amber-500">Gvstudios</h4>
              <p className="text-white/70 text-sm">
                Enterprise AI solutions for the next generation of intelligent systems.
              </p>
            </div>
            <div className="animate-fade-in-up">
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-amber-500 transition-colors">Machine Learning</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Deep Learning</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">AI Automation</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Data Engineering</a></li>
              </ul>
            </div>
            <div className="animate-fade-in-up">
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-amber-500 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Careers</a></li>
              </ul>
            </div>
            <div className="animate-fade-in-up">
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="mailto:awaismaqsood91@gmail.com" className="hover:text-amber-500 transition-colors">awaismaqsood91@gmail.com</a></li>
                <li><a href="tel:+923085029353" className="hover:text-amber-500 transition-colors">+92 308 5029353</a></li>
                <li>Pakistan</li>
              </ul>
            </div>
          </div>

          <div className="border-t-2 border-white/10 pt-8 text-center text-white/70 text-sm">
            <p>&copy; 2026 Gvstudios. All rights reserved. | <a href="#" className="hover:text-amber-500">Terms of Service</a> | <a href="#" className="hover:text-amber-500">Privacy Policy</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
