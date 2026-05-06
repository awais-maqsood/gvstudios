import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Zap, Database, Shield, Cpu, Lightbulb, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { useState, useEffect } from "react";
import { useScrollAnimation, useStaggerAnimation } from "@/hooks/useScrollAnimation";

/**
 * DESIGN PHILOSOPHY: Octaloop-Style Layout with Orange & Black Gvstudios Branding
 * Features dashed borders, grid layouts, featured service sections, and advanced animations
 */

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

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

  const services = [
    { icon: "🧠", title: "Machine Learning", desc: "Predictive models and intelligent automation" },
    { icon: "⚡", title: "Deep Learning", desc: "Neural networks for vision and NLP" },
    { icon: "🤖", title: "AI Automation", desc: "Process automation and RPA" },
    { icon: "💾", title: "Data Engineering", desc: "Pipelines and data infrastructure" },
    { icon: "🔒", title: "AI Governance", desc: "Compliance and responsible AI" },
    { icon: "💡", title: "AI Consulting", desc: "Strategy and transformation" },
    { icon: "📊", title: "Analytics", desc: "Business intelligence and insights" },
    { icon: "🔍", title: "Computer Vision", desc: "Image and video analysis" },
    { icon: "💬", title: "NLP", desc: "Language understanding and generation" },
    { icon: "🌐", title: "Embeddings", desc: "Vector databases and retrieval" }
  ];

  const industries = [
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
    { name: "Awais Khan", role: "Founder & CEO", expertise: "AI Architecture & Strategy" },
    { name: "Fatima Ahmed", role: "Founder & CTO", expertise: "ML Engineering & Infrastructure" },
    { name: "Hassan Ali", role: "VP Engineering", expertise: "Platform Development & DevOps" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b-2 border-orange-200 animate-slide-in-down">
        <div className="container flex items-center justify-between py-4 md:py-6">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold">
              <span className="text-amber-500">GV</span>
              <span className="text-black">Studios</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#services" className="text-black hover:text-amber-500 transition-colors">Services</a>
            <a href="#industries" className="text-black hover:text-amber-500 transition-colors">Industries</a>
            <a href="#portfolio" className="text-black hover:text-amber-500 transition-colors">Case Studies</a>
            <a href="#about" className="text-black hover:text-amber-500 transition-colors">About Us</a>
          </div>
          <Button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold btn-interactive">
            GET IN TOUCH
          </Button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div
            className="absolute inset-0 opacity-40 parallax-bg"
            style={{
              backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663479913404/4ksf5uZVSYeBaJPwjChFSM/hero-ai-neural-cEF8YMoyUN6uptPqjghePV.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/70" />

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
                <Button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-6 text-base btn-interactive">
                  GET IN TOUCH
                </Button>
                <Button className="border-2 border-amber-500 text-amber-500 hover:bg-amber-50 font-semibold px-8 py-6 text-base btn-interactive">
                  EXPLORE SERVICES
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
              At Gvstudios, we transform the way organizations operate through innovative AI services spanning machine learning, deep learning, automation, and beyond. Our expertise fuels growth, enhances efficiency, and drives measurable success across industries.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              <div className="text-center stagger-item animate-fade-in-up">
                <div className="text-5xl md:text-6xl font-bold text-amber-500 mb-2 font-mono">1500+</div>
                <p className="text-gray-700 font-semibold">Projects Delivered</p>
              </div>
              <div className="text-center stagger-item animate-fade-in-up">
                <div className="text-5xl md:text-6xl font-bold text-amber-500 mb-2 font-mono">479+</div>
                <p className="text-gray-700 font-semibold">Clients Worldwide</p>
              </div>
              <div className="text-center stagger-item animate-fade-in-up">
                <div className="text-5xl md:text-6xl font-bold text-amber-500 mb-2 font-mono">12+</div>
                <p className="text-gray-700 font-semibold">Industries Served</p>
              </div>
              <div className="text-center stagger-item animate-fade-in-up">
                <div className="text-5xl md:text-6xl font-bold text-amber-500 mb-2 font-mono">280+</div>
                <p className="text-gray-700 font-semibold">AI Specialists</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <p className="text-amber-500 font-semibold text-sm uppercase tracking-wider mb-4">WHAT WE DO</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Engineering Digital <span className="text-amber-500">Transformation</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                End-to-end AI solutions, from machine learning and deep learning to autonomous systems and enterprise infrastructure.
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-4 mb-8">
              {services.slice(0, 5).map((service, idx) => (
                <div
                  key={service.title}
                  className="border-2 border-dashed border-amber-300 rounded-lg p-6 hover:border-amber-500 hover:shadow-lg transition-all duration-300 stagger-item animate-fade-in-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <h3 className="font-bold text-black mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.desc}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-5 gap-4">
              {services.slice(5).map((service, idx) => (
                <div
                  key={service.title}
                  className="border-2 border-dashed border-amber-300 rounded-lg p-6 hover:border-amber-500 hover:shadow-lg transition-all duration-300 stagger-item animate-fade-in-up"
                  style={{ animationDelay: `${(idx + 5) * 0.1}s` }}
                >
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <h3 className="font-bold text-black mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Service */}
        <section className="py-16 md:py-24 bg-gray-900">
          <div className="container">
            <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-16">
              Engineering the <span className="text-amber-500">future</span>, one service at a time
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Featured Large Card */}
              <div
                className="md:col-span-2 rounded-2xl overflow-hidden border-2 border-dashed border-amber-400 hover:border-amber-500 transition-all duration-300 animate-fade-in-up"
                style={{
                  backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663479913404/4ksf5uZVSYeBaJPwjChFSM/ai-circuit-board-cEF8YMoyUN6uptPqjghePV.webp')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minHeight: "400px"
                }}
              >
                <div className="bg-gradient-to-r from-black/80 to-black/40 h-full p-8 flex flex-col justify-end">
                  <p className="text-amber-400 text-sm font-semibold mb-2">FEATURED SERVICE</p>
                  <h3 className="text-4xl font-bold text-white mb-3">Artificial Intelligence</h3>
                  <p className="text-white/90 mb-4">Machine Learning, NLP, Computer Vision and Generative AI engineered to automate, analyze and augment every layer of your business.</p>
                  <a href="#" className="text-amber-400 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                    Explore Service <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Side Cards */}
              <div className="space-y-6">
                <div
                  className="rounded-2xl overflow-hidden border-2 border-dashed border-amber-400 hover:border-amber-500 transition-all duration-300 p-6 animate-fade-in-up"
                  style={{
                    backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663479913404/4ksf5uZVSYeBaJPwjChFSM/ai-data-flow-cEF8YMoyUN6uptPqjghePV.webp')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "190px"
                  }}
                >
                  <div className="bg-gradient-to-r from-black/90 to-black/50 h-full p-6 flex flex-col justify-end rounded-lg">
                    <h4 className="text-white font-bold mb-2">Data Engineering</h4>
                    <p className="text-white/80 text-sm">Strategic advisory</p>
                  </div>
                </div>

                <div
                  className="rounded-2xl overflow-hidden border-2 border-dashed border-amber-400 hover:border-amber-500 transition-all duration-300 p-6 animate-fade-in-up"
                  style={{
                    backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663479913404/4ksf5uZVSYeBaJPwjChFSM/ai-neural-cEF8YMoyUN6uptPqjghePV.webp')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "190px"
                  }}
                >
                  <div className="bg-gradient-to-r from-black/90 to-black/50 h-full p-6 flex flex-col justify-end rounded-lg">
                    <h4 className="text-white font-bold mb-2">AI Governance</h4>
                    <p className="text-white/80 text-sm">Enterprise-grade protection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section id="industries" className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                AI Across <span className="text-amber-500">Every Industry</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Deep domain expertise spanning 12+ verticals with tailored AI solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-4 mb-8">
              {industries.slice(0, 4).map((industry, idx) => (
                <div
                  key={industry}
                  className="border-2 border-dashed border-amber-300 rounded-lg p-6 hover:border-amber-500 hover:bg-amber-50 transition-all duration-300 stagger-item animate-fade-in-up"
                  style={{ animationDelay: `${idx * 0.08}s` }}
                >
                  <p className="font-semibold text-black">{industry}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-4 gap-4 mb-8">
              {industries.slice(4, 8).map((industry, idx) => (
                <div
                  key={industry}
                  className="border-2 border-dashed border-amber-300 rounded-lg p-6 hover:border-amber-500 hover:bg-amber-50 transition-all duration-300 stagger-item animate-fade-in-up"
                  style={{ animationDelay: `${(idx + 4) * 0.08}s` }}
                >
                  <p className="font-semibold text-black">{industry}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              {industries.slice(8).map((industry, idx) => (
                <div
                  key={industry}
                  className="border-2 border-dashed border-amber-300 rounded-lg p-6 hover:border-amber-500 hover:bg-amber-50 transition-all duration-300 stagger-item animate-fade-in-up"
                  style={{ animationDelay: `${(idx + 8) * 0.08}s` }}
                >
                  <p className="font-semibold text-black">{industry}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-6 text-base btn-interactive">
                View All Industries
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

            <div className="grid md:grid-cols-3 gap-8">
              {leaders.map((leader, idx) => (
                <div
                  key={leader.name}
                  className="border-2 border-dashed border-amber-300 rounded-lg p-8 text-center hover:border-amber-500 hover:shadow-lg transition-all duration-300 stagger-item animate-fade-in-up"
                  style={{ animationDelay: `${idx * 0.15}s` }}
                >
                  <div className="w-24 h-24 bg-amber-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-4xl text-amber-500">👤</span>
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
              <Button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 btn-interactive">
                Subscribe Now
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
            <Button className="bg-black hover:bg-gray-900 text-amber-500 font-semibold px-8 py-6 text-base btn-interactive">
              Get Started <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-12 md:py-16">
        <div className="container">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            <div className="animate-fade-in-up">
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
                <li><a href="mailto:ai@gvstudios.com" className="hover:text-amber-500 transition-colors">ai@gvstudios.com</a></li>
                <li><a href="tel:+1234567890" className="hover:text-amber-500 transition-colors">+1 (234) 567-890</a></li>
                <li>Dubai, UAE</li>
              </ul>
            </div>
            <div className="animate-fade-in-up">
              <h4 className="font-bold mb-4">Global Offices</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>🇦🇪 Dubai</li>
                <li>🇵🇰 Pakistan</li>
                <li>🇬🇧 London</li>
                <li>🇺🇸 USA</li>
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
