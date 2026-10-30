import { applyPageSeo, type PageSeoInput } from "@/lib/seo";
import { useEffect } from "react";

export function usePageSeo(seo: PageSeoInput) {
  const jsonLdKey = seo.jsonLd ? JSON.stringify(seo.jsonLd) : "";

  useEffect(() => {
    applyPageSeo(seo);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- serialize jsonLd for stable deps
  }, [
    seo.title,
    seo.description,
    seo.path,
    seo.image,
    seo.type,
    seo.noindex,
    jsonLdKey,
  ]);
}
