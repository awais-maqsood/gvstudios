import { Button } from "@/components/ui/button";
import { allServices, getServiceBySlug } from "@/data/services";
import { usePageSeo } from "@/hooks/usePageSeo";
import {
  CONTACT_EMAIL,
  breadcrumbSchema,
  serviceSchema,
} from "@/lib/seo";
import { ArrowRight } from "lucide-react";
import { Link, useRoute } from "wouter";
import NotFound from "./NotFound";

export default function ServiceDetailPage() {
  const [, params] = useRoute("/services/:slug");
  const slug = params?.slug ?? "";
  const service = getServiceBySlug(slug);

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
          ],
        }
      : {
          title: "Service Not Found | Gvstudios",
          description: "The requested Gvstudios service page could not be found.",
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
    `${service.title} Inquiry - Gvstudios`,
  )}`;

  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 bg-white border-b-2 border-orange-200">
        <div className="container flex items-center justify-between py-4 md:py-6">
          <Link href="/" className="flex items-center">
            <img
              src={`${import.meta.env.BASE_URL}gv-logo.png`}
              alt="Gvstudios - AI and IT solutions company"
              className="h-12 w-auto md:h-14"
            />
          </Link>
          <Button asChild className="bg-amber-500 hover:bg-amber-600 text-black font-semibold">
            <a href={contactMailto}>Get a Quote</a>
          </Button>
        </div>
      </nav>

      <main>
        <section className="py-20 md:py-28 bg-gradient-to-r from-amber-100 via-white to-amber-50">
          <div className="container max-w-5xl">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-600">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-amber-500">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <a href="/#services" className="hover:text-amber-500">
                    Services
                  </a>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-black font-medium">{service.title}</li>
              </ol>
            </nav>
            <p className="text-sm font-semibold tracking-[0.18em] text-amber-500 mb-4">
              GVSTUDIOS SERVICE
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
              {service.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl">
              {service.heroDescription}
            </p>
            <p className="mt-4 text-base text-gray-600 max-w-3xl">
              {service.shortDescription} Partner with Gvstudios to design, build,
              and scale production-ready solutions for your team.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white" aria-labelledby="capabilities-heading">
          <div className="container max-w-5xl">
            <h2 id="capabilities-heading" className="text-3xl md:text-4xl font-bold text-black mb-8">
              What we deliver
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {service.keyPoints.map((point, index) => (
                <div
                  key={point}
                  className="rounded-xl border-2 border-dashed border-amber-300 p-6 bg-amber-50/50"
                >
                  <h3 className="text-xl font-bold text-black mb-2">{point}</h3>
                  <p className="text-gray-700">{service.outcomes[index]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-amber-50/40" aria-labelledby="usecases-heading">
          <div className="container max-w-5xl">
            <h2 id="usecases-heading" className="text-3xl md:text-4xl font-bold text-black mb-8">
              Common use cases
            </h2>
            <ul className="grid md:grid-cols-3 gap-6">
              {service.useCases.map((useCase) => (
                <li
                  key={useCase}
                  className="rounded-xl border border-amber-200 bg-white p-6 text-gray-700"
                >
                  {useCase}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white" aria-labelledby="process-heading">
          <div className="container max-w-5xl">
            <h2 id="process-heading" className="text-3xl md:text-4xl font-bold text-black mb-8">
              How we work
            </h2>
            <ol className="grid md:grid-cols-2 gap-6">
              {service.process.map((step, index) => (
                <li
                  key={step}
                  className="rounded-xl border-2 border-dashed border-amber-300 p-6 bg-white"
                >
                  <p className="text-amber-500 font-bold mb-2">Step {index + 1}</p>
                  <h3 className="text-xl font-bold text-black">{step}</h3>
                </li>
              ))}
            </ol>
            <div className="mt-10">
              <Button asChild className="bg-black hover:bg-gray-900 text-amber-500 font-semibold px-8 py-6">
                <a href={contactMailto}>
                  Discuss {service.title} <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
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
                  className="rounded-xl border border-white/15 p-5 hover:border-amber-500 transition-colors"
                >
                  <h3 className="text-xl font-bold text-amber-500 mb-2">{item.title}</h3>
                  <p className="text-white/75 text-sm">{item.shortDescription}</p>
                </Link>
              ))}
            </div>
            <p className="mt-8 text-white/70">
              <Link href="/" className="text-amber-500 hover:underline">
                Back to Gvstudios home
              </Link>{" "}
              or browse all offerings in{" "}
              <a href="/#services" className="text-amber-500 hover:underline">
                services
              </a>
              .
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
