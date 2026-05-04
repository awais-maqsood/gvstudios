import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Zap, Globe, Shield, Users, Briefcase } from "lucide-react";
import { useState, useEffect } from "react";
import ServiceCard from "@/components/ServiceCard";
import StatCard from "@/components/StatCard";
import TestimonialCard from "@/components/TestimonialCard";
import PortfolioCard from "@/components/PortfolioCard";
import IndustryCard from "@/components/IndustryCard";
import ProcessStep from "@/components/ProcessStep";
import AdvantageCard from "@/components/AdvantageCard";

/**
 * DESIGN PHILOSOPHY: Modern Tech Minimalism
 * - Deep charcoal (#1a1a1a) with white backgrounds
 * - Electric cyan (#00d9ff) for CTAs and accents
 * - Geometric precision with asymmetric layouts
 * - Typography-driven design using Space Mono for headlines
 * - Minimal animations and micro-interactions
 */

export default function Home() {
  const [stats, setStats] = useState({ projects: 0, clients: 0, industries: 0, experts: 0 });

  // Animate stats on scroll
  useEffect(() => {
    const animateStats = () => {
      setStats({ projects: 150, clients: 45, industries: 12, experts: 280 });
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateStats();
          observer.unobserve(entry.target);
        }
      });
    });

    const statsSection = document.getElementById("stats-section");
    if (statsSection) observer.observe(statsSection);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="container flex items-center justify-between h-16 md:h-20">
          <div className="text-2xl md:text-3xl font-bold text-foreground">
            <span className="text-accent">GV</span>Studios
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium hover:text-accent transition-colors">Services</a>
            <a href="#industries" className="text-sm font-medium hover:text-accent transition-colors">Industries</a>
            <a href="#portfolio" className="text-sm font-medium hover:text-accent transition-colors">Portfolio</a>
            <a href="#about" className="text-sm font-medium hover:text-accent transition-colors">About</a>
          </div>
          <Button className="cta-button">Get In Touch</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 lg:py-40">
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663479913404/4ksf5uZVSYeBaJPwjChFSM/hero-ai-tech-cdqXNHkiUK4i5YnzQaA38t.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <div className="geometric-accent"></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Empowering The Next<br />Era Of IT Solutions
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              Gvstudios is a global IT company delivering custom software development and end-to-end IT services that help businesses build, scale, and innovate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="cta-button">Get In Touch</Button>
              <Button className="cta-button-secondary">Explore Services <ArrowRight className="ml-2 w-4 h-4" /></Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <h2 className="section-title">Fueling Success Through Innovative Technology Solutions</h2>
          <p className="section-subtitle max-w-3xl">
            At Gvstudios, we transform the way organizations operate through innovative technology services spanning AI, Digital Twin, GIS, Cybersecurity, and beyond. Our expertise fuels growth, enhances efficiency, and drives measurable success across industries.
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section id="stats-section" className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <StatCard number={`${stats.projects}+`} label="Projects Delivered" />
            <StatCard number={`${stats.clients}+`} label="Clients Worldwide" />
            <StatCard number={`${stats.industries}+`} label="Industries Served" />
            <StatCard number={`${stats.experts}+`} label="Tech Experts" />
          </div>
        </div>
      </section>

      {/* Core Services - Spatial Intelligence & Embodied AI */}
      <section id="services" className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="mb-16">
            <div className="geometric-accent"></div>
            <h2 className="section-title">Spatial Intelligence & Embodied AI</h2>
            <p className="section-subtitle max-w-2xl">
              Bridging the digital and physical worlds
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Code2 className="w-10 h-10 text-accent" />}
              title="Digital Twin"
              subtitle="Virtual replicas of physical assets"
              description="Real-time simulation, predictive maintenance, and IoT-driven monitoring for factories, infrastructure, and entire cities."
              features={["3D Asset Modeling", "Predictive Analytics", "IoT Integration"]}
            />
            <ServiceCard
              icon={<Globe className="w-10 h-10 text-accent" />}
              title="GIS & Geospatial"
              subtitle="Location intelligence at scale"
              description="Satellite imagery, terrain analysis, and spatial data engineering for smarter urban planning and resource decisions."
              features={["Satellite Imagery", "Spatial Analytics", "Smart Mapping"]}
            />
            <ServiceCard
              icon={<Zap className="w-10 h-10 text-accent" />}
              title="Embodied AI & Robotics"
              subtitle="Where AI meets the physical world"
              description="Sensory perception, on-device AI, and autonomous navigation, powering the next generation of robotics and automation."
              features={["Sensor Fusion", "On-Device AI", "Autonomous Navigation"]}
            />
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">40%</div>
              <p className="text-sm text-muted-foreground">Cost Reduction</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">3x</div>
              <p className="text-sm text-muted-foreground">Faster Planning</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">99.7%</div>
              <p className="text-sm text-muted-foreground">Precision Rate</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">24/7</div>
              <p className="text-sm text-muted-foreground">Autonomous Ops</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="mb-16">
            <div className="geometric-accent"></div>
            <h2 className="section-title">Our Industry Expertise</h2>
            <p className="section-subtitle">
              Deep domain knowledge across 12+ verticals — delivering tailored solutions that move the needle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Healthcare & Life Sciences",
              "Finance & Fintech",
              "Oil & Gas",
              "Manufacturing",
              "Real Estate & Construction",
              "Retail & E-commerce",
              "Telecommunications",
              "Government & Public Sector",
              "Education & EdTech",
              "Logistics & Transportation",
              "Energy & Utilities",
              "Media & Entertainment"
            ].map((industry) => (
              <IndustryCard key={industry} industry={industry} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="cta-button">View All Industries</Button>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="mb-16">
            <div className="geometric-accent"></div>
            <h2 className="section-title">Projects & Clients We've Delivered For</h2>
            <p className="section-subtitle">
              217+ projects delivered across 12+ industries, from blockchain and AI to HealthTech and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { category: "International Development", client: "SPO – UNFPA", description: "United Nations Population Fund – Strategic Planning & Operations" },
              { category: "Oil & Gas", client: "CNPC / Bohai", description: "Oil & Gas HSE Software for China National Petroleum Corporation" },
              { category: "Finance & Fintech", client: "Tredit Finance", description: "Fintech platform for streamlined financial operations" },
              { category: "Technology", client: "Mobilium", description: "Mobile-first technology solutions and innovation platform" },
              { category: "Banking & Finance", client: "Asian Development Bank", description: "Digital solutions for Asia's premier development institution" },
              { category: "Enterprise SaaS", client: "SimpliRFP", description: "Streamlined RFP management and procurement automation" }
            ].map((project) => (
              <PortfolioCard key={project.client} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Solutions */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="mb-16">
            <div className="geometric-accent"></div>
            <h2 className="section-title">Enterprise Products & Industry Platforms</h2>
            <p className="section-subtitle">
              From core business systems to vertical-specific platforms, we engineer production-grade solutions that scale with your organization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Enterprise Operations */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-accent" />
                Enterprise Operations
              </h3>
              <div className="space-y-4">
                <div className="pl-4 border-l-2 border-accent">
                  <h4 className="font-semibold mb-1">Asset Management Systems</h4>
                  <p className="text-sm text-muted-foreground">End-to-end asset tracking, lifecycle management, and compliance reporting.</p>
                </div>
                <div className="pl-4 border-l-2 border-accent">
                  <h4 className="font-semibold mb-1">Billing & Invoicing</h4>
                  <p className="text-sm text-muted-foreground">Automated invoicing, recurring billing, tax handling and revenue recognition.</p>
                </div>
                <div className="pl-4 border-l-2 border-accent">
                  <h4 className="font-semibold mb-1">ERP & System Integration</h4>
                  <p className="text-sm text-muted-foreground">Odoo, SAP, NetSuite implementations with custom module development.</p>
                </div>
                <div className="pl-4 border-l-2 border-accent">
                  <h4 className="font-semibold mb-1">Workflow Automation</h4>
                  <p className="text-sm text-muted-foreground">BPM, approval flows and RPA to streamline operational processes.</p>
                </div>
              </div>
            </div>

            {/* Customer & Commerce */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <Users className="w-6 h-6 text-accent" />
                Customer & Commerce
              </h3>
              <div className="space-y-4">
                <div className="pl-4 border-l-2 border-accent">
                  <h4 className="font-semibold mb-1">CRM Platforms</h4>
                  <p className="text-sm text-muted-foreground">Sales, service and marketing automation tailored to enterprise pipelines.</p>
                </div>
                <div className="pl-4 border-l-2 border-accent">
                  <h4 className="font-semibold mb-1">E-commerce & Marketplaces</h4>
                  <p className="text-sm text-muted-foreground">Shopify, Magento, and headless commerce with multi-vendor support.</p>
                </div>
                <div className="pl-4 border-l-2 border-accent">
                  <h4 className="font-semibold mb-1">Payments & Wallets</h4>
                  <p className="text-sm text-muted-foreground">Stripe, PayPal, Moonpay and crypto gateway integrations.</p>
                </div>
                <div className="pl-4 border-l-2 border-accent">
                  <h4 className="font-semibold mb-1">Customer Support Suites</h4>
                  <p className="text-sm text-muted-foreground">Omnichannel helpdesks, live chat, and AI-driven ticket triage.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Platform Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">120+</div>
              <p className="text-sm text-muted-foreground">Platforms Delivered</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">40M+</div>
              <p className="text-sm text-muted-foreground">End Users Served</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">99.9%</div>
              <p className="text-sm text-muted-foreground">Average Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="mb-16">
            <div className="geometric-accent"></div>
            <h2 className="section-title">Maximize Your Success with Us</h2>
            <p className="section-subtitle">
              Give your business an edge through customized tech innovation, tailored teams, and future-ready solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discover & Define", desc: "We analyze your goals and challenges to set the right direction." },
              { step: "02", title: "Design & Match", desc: "Tailored solutions and the perfect talent for your needs." },
              { step: "03", title: "Build & Deliver", desc: "Agile teams turn ideas into reality, fast and efficiently." },
              { step: "04", title: "Scale & Support", desc: "Continuous support and flexibility to grow with you." }
            ].map((item, idx) => (
              <ProcessStep key={item.step} step={item.step} title={item.title} description={item.desc} isLast={idx === 3} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-foreground text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Accelerate Your Digital Transformation?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Partner with Gvstudios to build next-gen solutions powered by AI, blockchain, and cloud technologies.
          </p>
          <Button className="cta-button">Get Started</Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="mb-16">
            <div className="geometric-accent"></div>
            <h2 className="section-title">What They Said About Us</h2>
            <p className="section-subtitle">
              Trusted by startups, enterprises, and global brands to deliver impact-driven IT solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Kim Leibowitz", title: "Founder, CEO", quote: "Gvstudios delivered an outstanding AI-powered iOS and Android app with a seamless web admin portal. Their team collaborated on wireframes to match our vision perfectly, delivering a stunning UI." },
              { name: "Chris Anderson", title: "Founder, CEO", quote: "Working with Gvstudios was a pleasure. Their approachable team made collaboration easy and effective, fostering a smooth project experience. Their professionalism and teamwork shone through." },
              { name: "Evan Jacob", title: "Founder, CEO", quote: "Gvstudios delivered exceptional results for our platform with unmatched professionalism and technical expertise. Their collaborative approach ensured high-quality outcomes." }
            ].map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="mb-16">
            <div className="geometric-accent"></div>
            <h2 className="section-title">Our Global Footprint</h2>
            <p className="section-subtitle">The Gvstudios Advantage</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { metric: "8+", label: "Countries", description: "We connect you with skilled professionals across the globe, ensuring right expertise for your unique project needs." },
              { metric: "99%", label: "On-Time Delivery", description: "Whether you require a single specialist or a full team, our global network guarantees smooth and efficient project execution." },
              { metric: "280+", label: "Tech Experts", description: "Our teams on the ground understand local markets & cultures, providing tailored, strategic support to drive project success." },
              { metric: "48h", label: "Avg. Deployment", description: "Get your team up and running in as little as 48 hours with our pre-vetted talent pool ready for immediate deployment." },
              { metric: "100%", label: "Client Satisfaction", description: "Rigorous vetting, continuous monitoring, and dedicated QA processes ensure every deliverable meets the highest standards." },
              { metric: "20+", label: "Industries Served", description: "Award-winning solutions and partnerships with global technology leaders validate our expertise and commitment to excellence." }
            ].map((item) => (
              <AdvantageCard key={item.label} metric={item.metric} label={item.label} description={item.description} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-2xl">
          <div className="text-center mb-12">
            <div className="geometric-accent mx-auto mb-6"></div>
            <h2 className="section-title">Subscribe To Our Newsletter</h2>
            <p className="section-subtitle">
              Stay ahead with the latest updates, insights, and events from Gvstudios. Get exclusive content on AI, blockchain, and emerging tech trends.
            </p>
          </div>

          <form className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <Button className="cta-button">Subscribe</Button>
          </form>
          <p className="text-xs text-muted-foreground text-center mt-4">
            By subscribing, you agree to our Privacy Policy. No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-12 mb-12 pb-12 border-b border-gray-700">
            <div>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-accent transition-colors">IT Staffing</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Artificial Intelligence</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Cybersecurity</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Blockchain</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Mobile & Game Dev</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Staffing</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Training</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Global Offices</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Dubai, UAE (HQ)</li>
                <li>Pakistan Back Office</li>
                <li>London, UK</li>
                <li>Sydney, Australia</li>
                <li>Berlin, Germany</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <p className="text-sm text-gray-300 mb-2">business@gvstudios.com</p>
              <p className="text-sm text-gray-300 mb-4">+1 (555) 123-4567</p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-300 hover:text-accent transition-colors">LinkedIn</a>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors">Twitter</a>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors">Facebook</a>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2026 Gvstudios. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
