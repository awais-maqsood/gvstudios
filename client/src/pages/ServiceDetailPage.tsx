import { Button } from "@/components/ui/button";
import { getServiceBySlug } from "@/data/services";
import { ArrowRight } from "lucide-react";
import { Link, useRoute } from "wouter";
import NotFound from "./NotFound";

export default function ServiceDetailPage() {
  const [, params] = useRoute("/services/:slug");
  const slug = params?.slug ?? "";
  const service = getServiceBySlug(slug);

  if (!service) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 bg-white border-b-2 border-orange-200">
        <div className="container flex items-center justify-between py-4 md:py-6">
          <Link href="/" className="flex items-center">
            <img src={`${import.meta.env.BASE_URL}gv-logo.png`} alt="Gvstudios logo" className="h-12 w-auto md:h-14" />
          </Link>
          <Button asChild className="bg-amber-500 hover:bg-amber-600 text-black font-semibold">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </nav>

      <main>
        <section className="py-20 md:py-28 bg-gradient-to-r from-amber-100 via-white to-amber-50">
          <div className="container max-w-5xl">
            <p className="text-sm font-semibold tracking-[0.18em] text-amber-500 mb-4">SERVICE DETAIL</p>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">{service.title}</h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl">{service.heroDescription}</p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container max-w-5xl">
            <div className="grid md:grid-cols-3 gap-6">
              {service.keyPoints.map((point) => (
                <div key={point} className="rounded-xl border-2 border-dashed border-amber-300 p-6 bg-amber-50/50">
                  <h3 className="text-xl font-bold text-black mb-2">{point}</h3>
                  <p className="text-gray-700">
                    We tailor this capability to your business context with practical, production-ready implementation.
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Button className="bg-black hover:bg-gray-900 text-amber-500 font-semibold px-8 py-6">
                Discuss This Service <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
