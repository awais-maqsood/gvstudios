import { Button } from "@/components/ui/button";
import { allServices, getServiceBySlug } from "@/data/services";
import { usePageSeo } from "@/hooks/usePageSeo";
import {
  CONTACT_EMAIL,
  breadcrumbSchema,
  faqPageSchema,
  serviceSchema,
} from "@/lib/seo";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Plus,
  Target,
  Users,
  Wrench,
} from "lucide-react";
import { useState } from "react";
import { Link, useRoute } from "wouter";
import NotFound from "./NotFound";

export default function ServiceDetailPage() {
  const [, params] = useRoute("/services/:slug");
  const slug = params?.slug ?? "";
  const service = getServiceBySlug(slug);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  usePageSeo(
    service
      ? {
          title: service.seoTitle,
          description: service.seoDescription,
          path: `/services/${service.slug}`,
          jsonLd: [
            serviceSchema({
              name: service.title,
              description: service.seoDescription,
              path: `/services/${service.slug}`,
            }),
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Services", path: "/#services" },
              { name: service.title, path: `/services/${service.slug}` },
            ]),
            faqPageSchema(service.faqs),
          ],
        }
      : {
          title: "Service Not Found | GV Studio",
          description: "The requested GV Studio service page could not be found.",
          path: `/services/${slug}`,
          noindex: true,
        },
  );

  if (!service) {
    return <NotFound />;
  }

  const related = allServices
    .filter((item) => item.slug !== service.slug)
    .slice(0, 4);
  const contactMailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    `${service.title} Inquiry - GV Studio`,
  )}`;
  const heroOverlay =
    "linear-gradient(110deg, rgba(0,0,0,0.88) 0%, rgba(17,17,17,0.72) 45%, rgba(245,158,11,0.35) 100%)";

  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 bg-white border-b-2 border-orange-200">
        <div className="container flex items-center justify-between py-4 md:py-6">
          <Link href="/" className="flex items-center">
            <img
              src="/gv-logo.png"
              alt="GV Studio - AI and IT solutions company"
              width="160"
              height="56"
              className="h-12 w-auto md:h-14"
            />
          </Link>
          <div className="flex items-center gap-4">
            <a
              href="https://bots.gvstudio.live/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline text-sm font-medium text-black hover:text-amber-500 transition-colors"
            >
              Bots
            </a>
            <Button asChild className="bg-amber-500 hover:bg-amber-600 text-black font-semibold">
              <a href={contactMailto}>Get a Quote</a>
            </Button>
          </div>
        </div>
      </nav>

      <main>
        <section
          className="relative overflow-hidden min-h-[520px] md:min-h-[580px] flex items-end"
          style={{
            backgroundImage: `${heroOverlay}, url('${service.heroImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container relative z-10 max-w-5xl py-16 md:py-24">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/70">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-amber-400">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <a href="/#services" className="hover:text-amber-400">
                    Services
                  </a>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-white font-medium">{service.title}</li>
              </ol>
            </nav>

            <p className="text-sm font-semibold tracking-[0.18em] text-amber-400 mb-4">
              GV STUDIO SERVICE
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 max-w-4xl">
              {service.title}{" "}
              <span className="text-amber-400">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mb-4">
              {service.heroDescription}
            </p>
            <p className="text-base text-white/75 max-w-3xl mb-8">
              {service.shortDescription} Partner with GV Studio to design, build,
              and scale production-ready solutions for your team.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button asChild className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-6">
                <a href={contactMailto}>
                  Discuss this service <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-2 border-white/40 bg-transparent text-white hover:bg-white/10 font-semibold px-8 py-6"
              >
                <a href="/#services">All services</a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              {service.keyPoints.map((point) => (
                <span
                  key={point}
                  className="px-3 py-1.5 text-xs font-semibold rounded-full bg-white/15 text-white border border-white/20"
                >
                  {point}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white" aria-labelledby="capabilities-heading">
          <div className="container max-w-5xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-amber-500 mb-3">
              WHAT WE BUILD
            </p>
            <h2 id="capabilities-heading" className="text-3xl md:text-4xl font-bold text-black mb-4">
              Capabilities that ship to production
            </h2>
            <p className="text-gray-600 max-w-2xl mb-10">
              Concrete delivery areas for {service.title.toLowerCase()} — not slideware.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {service.keyPoints.map((point, index) => (
                <article
                  key={point}
                  className="rounded-2xl border-2 border-dashed border-amber-300 p-6 bg-amber-50/40 hover:border-amber-500 transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-black font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <Wrench className="h-5 w-5 text-amber-500" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">{point}</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {service.outcomes[index]}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gray-50" aria-labelledby="audience-heading">
          <div className="container max-w-5xl">
            <div className="grid md:grid-cols-[1fr_1.2fr] gap-10 items-start">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-amber-500 mb-3">
                  WHO IT&apos;S FOR
                </p>
                <h2 id="audience-heading" className="text-3xl md:text-4xl font-bold text-black mb-4">
                  Built for teams that need results
                </h2>
                <p className="text-gray-600">
                  {service.title} engagements work best when the problem is real and the operators care about production ownership.
                </p>
              </div>
              <ul className="space-y-3">
                {service.audience.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-amber-200 bg-white p-4"
                  >
                    <Users className="h-5 w-5 text-amber-500 mt-0.5 shrink-0" />
                    <span className="text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white" aria-labelledby="usecases-heading">
          <div className="container max-w-5xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-amber-500 mb-3">
              USE CASES
            </p>
            <h2 id="usecases-heading" className="text-3xl md:text-4xl font-bold text-black mb-10">
              Where this shows up in the real world
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {service.useCases.map((useCase, index) => (
                <article
                  key={useCase}
                  className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-amber-300 transition-all"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-black text-amber-500 text-sm font-bold mb-4">
                    {index + 1}
                  </span>
                  <h3 className="text-lg font-bold text-black leading-snug">{useCase}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-black text-white" aria-labelledby="example-heading">
          <div className="container max-w-5xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-amber-500 mb-3">
              EXAMPLE PROJECT
            </p>
            <h2 id="example-heading" className="text-3xl md:text-4xl font-bold mb-3">
              {service.exampleProject.title}
            </h2>
            <p className="text-white/70 mb-10 max-w-2xl">
              A representative delivery pattern — anonymized where client confidentiality applies.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { label: "Problem", text: service.exampleProject.problem, icon: Target },
                { label: "Approach", text: service.exampleProject.approach, icon: Wrench },
                { label: "Result", text: service.exampleProject.result, icon: CheckCircle2 },
              ].map(({ label, text, icon: Icon }) => (
                <article
                  key={label}
                  className="rounded-2xl border border-white/15 bg-white/5 p-6"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Icon className="h-5 w-5 text-amber-500" />
                    <h3 className="text-sm font-semibold tracking-[0.14em] text-amber-500 uppercase">
                      {label}
                    </h3>
                  </div>
                  <p className="text-white/85 leading-relaxed">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-amber-50/50" aria-labelledby="stack-heading">
          <div className="container max-w-5xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-amber-500 mb-3">
              TECHNOLOGY STACK
            </p>
            <h2 id="stack-heading" className="text-3xl md:text-4xl font-bold text-black mb-4">
              Tools we reach for
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              Stack choices follow your constraints — these are common building blocks for {service.title.toLowerCase()} work.
            </p>
            <div className="flex flex-wrap gap-3">
              {service.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full border-2 border-dashed border-amber-400 bg-white text-black font-semibold text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white" aria-labelledby="process-heading">
          <div className="container max-w-5xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-amber-500 mb-3">
              HOW WE WORK
            </p>
            <h2 id="process-heading" className="text-3xl md:text-4xl font-bold text-black mb-10">
              From discovery to durable delivery
            </h2>
            <ol className="grid md:grid-cols-4 gap-4">
              {service.process.map((step, index) => (
                <li
                  key={step}
                  className="relative rounded-2xl border-2 border-dashed border-amber-300 p-5 bg-white"
                >
                  <p className="text-amber-500 font-bold text-sm tracking-[0.12em] mb-3">
                    STEP {index + 1}
                  </p>
                  <h3 className="text-lg font-bold text-black leading-snug">{step}</h3>
                  {index < service.process.length - 1 && (
                    <ChevronRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-amber-400 z-10 bg-white" />
                  )}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gray-50" aria-labelledby="faq-heading">
          <div className="container max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-amber-500 mb-3 text-center">
              FAQ
            </p>
            <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-black mb-10 text-center">
              Questions teams ask about {service.title}
            </h2>
            <div className="space-y-4">
              {service.faqs.map((faq, idx) => (
                <div
                  key={faq.question}
                  className="border-2 border-dashed border-amber-300 rounded-lg overflow-hidden hover:border-amber-500 transition-colors bg-white"
                >
                  <button
                    type="button"
                    onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                    className="w-full p-6 flex items-center justify-between hover:bg-amber-50 transition-colors"
                  >
                    <h3 className="text-lg font-bold text-black text-left pr-4">
                      {faq.question}
                    </h3>
                    <Plus
                      className={`w-6 h-6 text-amber-500 shrink-0 transition-transform ${
                        expandedFaq === idx ? "rotate-45" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`px-6 pb-6 border-t-2 border-dashed border-amber-300 bg-amber-50 ${
                      expandedFaq === idx ? "block" : "hidden"
                    }`}
                  >
                    <p className="text-gray-700 leading-relaxed pt-4">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-amber-500">
          <div className="container max-w-5xl flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
                Ready to discuss {service.title}?
              </h2>
              <p className="text-black/80 max-w-xl">
                Tell us what you need to automate, secure, or ship. We&apos;ll respond with a practical next step.
              </p>
            </div>
            <Button asChild className="bg-black hover:bg-gray-900 text-amber-500 font-semibold px-8 py-6 self-start md:self-auto">
              <a href={contactMailto}>
                Get started <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-black text-white" aria-labelledby="related-heading">
          <div className="container max-w-5xl">
            <h2 id="related-heading" className="text-3xl md:text-4xl font-bold mb-8">
              Related <span className="text-amber-500">services</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  className="group rounded-xl border border-white/15 p-5 hover:border-amber-500 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-amber-500 mb-2">{item.title}</h3>
                      <p className="text-white/75 text-sm">{item.shortDescription}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-white/40 group-hover:text-amber-500 transition-colors shrink-0 mt-1" />
                  </div>
                </Link>
              ))}
            </div>
            <p className="mt-8 text-white/70">
              <Link href="/" className="text-amber-500 hover:underline">
                Back to GV Studio home
              </Link>{" "}
              or browse all offerings in{" "}
              <a href="/#services" className="text-amber-500 hover:underline">
                services
              </a>
              .
            </p>
            <p className="mt-6 text-xs text-white/40">Last updated: Nov 2026</p>
          </div>
        </section>
      </main>
    </div>
  );
}
