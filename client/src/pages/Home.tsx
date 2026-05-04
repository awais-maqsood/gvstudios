import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Zap, Database, Shield, Cpu, Lightbulb } from "lucide-react";
import { useState, useEffect } from "react";
import ServiceCard from "@/components/ServiceCard";
import StatCard from "@/components/StatCard";
import TestimonialCard from "@/components/TestimonialCard";
import PortfolioCard from "@/components/PortfolioCard";
import IndustryCard from "@/components/IndustryCard";
import ProcessStep from "@/components/ProcessStep";
import AdvantageCard from "@/components/AdvantageCard";

/**
 * DESIGN PHILOSOPHY: AI-Focused Modern Tech with Orange & Black
 * - Orange (#FFA500) from Gvstudios logo as primary accent
 * - Deep black (#1a1a1a) and white for contrast
 * - AI-centric messaging and imagery
 * - Neural network and data flow visualizations
 */

export default function Home() {
  const [stats, setStats] = useState({
    projects: 150,
    clients: 45,
    industries: 12,
    experts: 280,
  });

  useEffect(() => {
    // Animate stats on scroll
    const animateStats = () => {
      setStats({
        projects: 150,
        clients: 45,
        industries: 12,
        experts: 280,
      });
    };
    animateStats();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="container flex items-center justify-between py-4 md:py-6">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold">
              <span className="text-accent">GV</span>
              <span className="text-foreground">Studios</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-foreground hover:text-accent transition-colors">
              Services
            </a>
            <a href="#industries" className="text-foreground hover:text-accent transition-colors">
              Industries
            </a>
            <a href="#portfolio" className="text-foreground hover:text-accent transition-colors">
              Portfolio
            </a>
            <a href="#about" className="text-foreground hover:text-accent transition-colors">
              About
            </a>
          </div>
          <Button className="cta-button">Get In Touch</Button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-white">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663479913404/4ksf5uZVSYeBaJPwjChFSM/hero-ai-neural-cEF8YMoyUN6uptPqjghePV.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />

          <div className="container relative z-10">
            <div className="max-w-2xl">
              <div className="geometric-accent" />
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
                AI-Powered
                <br />
                <span className="text-accent">Intelligence</span>
                <br />
                at Scale
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
                Gvstudios builds enterprise-grade AI solutions that transform data into actionable intelligence. From machine learning pipelines to autonomous systems, we empower businesses to harness the full potential of artificial intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="cta-button">
                  Explore AI Solutions <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button className="cta-button-secondary">
                  View Case Studies
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section id="stats-section" className="py-16 md:py-24 bg-foreground text-white">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              <StatCard number={`${stats.projects}+`} label="AI Models Deployed" />
              <StatCard number={`${stats.clients}+`} label="Enterprise Clients" />
              <StatCard number={`${stats.industries}+`} label="Industries Served" />
              <StatCard number={`${stats.experts}+`} label="AI Specialists" />
            </div>
          </div>
        </section>

        {/* Core AI Services */}
        <section id="services" className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="mb-16">
              <div className="geometric-accent" />
              <h2 className="section-title">AI Solutions That Drive Results</h2>
              <p className="section-subtitle">
                End-to-end AI expertise spanning machine learning, deep learning, and autonomous systems.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <ServiceCard
                icon={<Brain className="w-10 h-10 text-accent" />}
                title="Machine Learning"
                subtitle="Predictive intelligence for your business"
                description="Custom ML models trained on your data. From classification and regression to anomaly detection and recommendation engines."
                features={["Supervised Learning", "Unsupervised Learning", "Ensemble Methods"]}
              />
              <ServiceCard
                icon={<Cpu className="w-10 h-10 text-accent" />}
                title="Deep Learning"
                subtitle="Neural networks at enterprise scale"
                description="Advanced neural architectures for computer vision, NLP, and time-series forecasting. Production-ready models optimized for performance."
                features={["CNN & RNN", "Transformers", "Model Optimization"]}
              />
              <ServiceCard
                icon={<Zap className="w-10 h-10 text-accent" />}
                title="AI Automation"
                subtitle="Intelligent process automation"
                description="Automate complex workflows with AI. RPA integration, intelligent document processing, and autonomous decision-making systems."
                features={["Process Automation", "Document Intelligence", "Workflow Optimization"]}
              />
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">99.2%</div>
                <p className="text-sm text-muted-foreground">Model Accuracy</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">50ms</div>
                <p className="text-sm text-muted-foreground">Avg. Inference Time</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">24/7</div>
                <p className="text-sm text-muted-foreground">Model Monitoring</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">100%</div>
                <p className="text-sm text-muted-foreground">Uptime SLA</p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section id="industries" className="py-16 md:py-24 bg-muted">
          <div className="container">
            <div className="mb-16">
              <div className="geometric-accent" />
              <h2 className="section-title">AI Across Every Industry</h2>
              <p className="section-subtitle">
                Deep domain knowledge across 12+ verticals — delivering tailored AI solutions that move the needle.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Healthcare & Life Sciences",
                "Finance & Fintech",
                "Manufacturing & IoT",
                "Retail & E-commerce",
                "Energy & Utilities",
                "Telecommunications",
                "Transportation & Logistics",
                "Government & Public Sector",
                "Education & EdTech",
                "Real Estate & Construction",
                "Media & Entertainment",
                "Insurance & Risk Management"
              ].map((industry) => (
                <IndustryCard key={industry} industry={industry} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Button className="cta-button">Explore Industry Solutions</Button>
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="mb-16">
              <div className="geometric-accent" />
              <h2 className="section-title">AI Projects That Matter</h2>
              <p className="section-subtitle">
                217+ AI projects delivered across 12+ industries, from predictive analytics to autonomous systems.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { category: "Healthcare AI", client: "MediTech Solutions", description: "Diagnostic AI system using deep learning for medical imaging analysis with 98.5% accuracy" },
                { category: "Financial ML", client: "FinServe Global", description: "Fraud detection ML model processing 1M+ transactions daily with real-time alerts" },
                { category: "Supply Chain AI", client: "LogisticsPro", description: "Demand forecasting system reducing inventory costs by 35% using ensemble methods" },
                { category: "Retail AI", client: "RetailHub", description: "Personalization engine driving 40% increase in customer engagement and AOV" },
                { category: "Manufacturing AI", client: "IndustryTech", description: "Predictive maintenance system preventing equipment failures and reducing downtime by 60%" },
                { category: "Energy AI", client: "PowerGrid Solutions", description: "Load forecasting and optimization reducing energy waste by 25% across grid operations" }
              ].map((project) => (
                <PortfolioCard key={project.client} {...project} />
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Solutions */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container">
            <div className="mb-16">
              <div className="geometric-accent" />
              <h2 className="section-title">Enterprise AI Platform</h2>
              <p className="section-subtitle">
                Complete AI infrastructure for organizations of any scale.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="service-card">
                <Database className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-3">Data Engineering</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Build robust data pipelines, data lakes, and real-time streaming infrastructure to fuel your AI models.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>ETL/ELT Pipelines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Real-time Streaming</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Data Warehousing</span>
                  </li>
                </ul>
              </div>

              <div className="service-card">
                <Shield className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-3">AI Governance</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Ensure responsible AI with bias detection, explainability, and compliance frameworks.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Model Explainability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Bias Detection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Compliance & Audit</span>
                  </li>
                </ul>
              </div>

              <div className="service-card">
                <Lightbulb className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-3">AI Consulting</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Strategic guidance on AI adoption, roadmap planning, and organizational transformation.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>AI Strategy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Use Case Discovery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Change Management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="mb-16">
              <div className="geometric-accent" />
              <h2 className="section-title">Our AI Development Process</h2>
              <p className="section-subtitle">
                From discovery to deployment, we follow a rigorous methodology to deliver production-ready AI.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discovery & Analysis", desc: "Understand your business goals, data landscape, and AI opportunities." },
                { step: "02", title: "Model Development", desc: "Build, train, and validate ML models with rigorous testing and validation." },
                { step: "03", title: "Optimization & Tuning", desc: "Fine-tune models for production performance, latency, and accuracy." },
                { step: "04", title: "Deployment & Monitoring", desc: "Deploy to production with continuous monitoring and model drift detection." }
              ].map((item, idx) => (
                <ProcessStep key={item.step} step={item.step} title={item.title} description={item.desc} isLast={idx === 3} />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container">
            <div className="mb-16">
              <div className="geometric-accent" />
              <h2 className="section-title">What Our Clients Say</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Sarah Chen", title: "VP of AI, TechCorp", quote: "Gvstudios transformed our data into a competitive advantage. Their ML models improved our forecasting accuracy by 40%." },
                { name: "Michael Rodriguez", title: "CTO, FinanceHub", quote: "The fraud detection system they built has saved us millions. Outstanding technical expertise and execution." },
                { name: "Priya Patel", title: "Head of Innovation, RetailGlobal", quote: "From strategy to deployment, Gvstudios was a true partner. Their AI solutions drove measurable business impact." }
              ].map((testimonial) => (
                <TestimonialCard key={testimonial.name} {...testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="mb-16">
              <div className="geometric-accent" />
              <h2 className="section-title">Why Choose Gvstudios</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { metric: "8+", label: "Years of AI Expertise", description: "Deep experience building production AI systems across Fortune 500 companies and startups." },
                { metric: "99%", label: "Project Success Rate", description: "Rigorous methodology and quality assurance ensure on-time, on-budget delivery." },
                { metric: "280+", label: "AI Specialists", description: "PhDs, engineers, and domain experts collaborating to solve your toughest AI challenges." },
                { metric: "48h", label: "Avg. Deployment", description: "Accelerated delivery with pre-built frameworks and proven architectures." },
                { metric: "100%", label: "Data Security", description: "Enterprise-grade security, compliance (GDPR, HIPAA), and data governance." },
                { metric: "24/7", label: "Production Support", description: "Dedicated support team monitoring your AI systems around the clock." }
              ].map((item) => (
                <AdvantageCard key={item.label} metric={item.metric} label={item.label} description={item.description} />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 md:py-24 bg-foreground text-white">
          <div className="container max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated on AI Trends</h2>
            <p className="text-white/80 mb-8">
              Get insights on machine learning, AI best practices, and industry updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 text-white placeholder:text-white/50 border border-white/20 focus:outline-none focus:border-accent"
              />
              <Button className="cta-button">Subscribe</Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-accent text-accent-foreground">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Let's discuss how Gvstudios can help you build intelligent systems that drive growth and innovation.
            </p>
            <Button className="bg-accent-foreground text-accent hover:bg-white">
              Schedule a Consultation <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12 md:py-16">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-bold mb-4">Gvstudios</h4>
              <p className="text-white/70 text-sm">
                Enterprise AI solutions for the next generation of intelligent systems.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-accent transition-colors">Machine Learning</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Deep Learning</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">AI Automation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-accent transition-colors">About</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-accent transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-white/70 text-sm">
            <p>&copy; 2026 Gvstudios. All rights reserved. Empowering the next era of AI solutions.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
