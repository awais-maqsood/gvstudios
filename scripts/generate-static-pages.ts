/**
 * Post-build: emit crawlable HTML for each route with unique head tags + real body text.
 * Vercel serves these static files before the SPA rewrite, so Google sees the right page.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { allServices } from "../client/src/data/services.ts";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  SITE_NAME,
  SITE_URL,
} from "../client/src/lib/seo.ts";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "../dist/public");
const templatePath = path.join(distDir, "index.html");

type PageSpec = {
  path: string;
  title: string;
  description: string;
  bodyHtml: string;
  jsonLd: Record<string, unknown>[];
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function organizationGraph() {
  return {
    "@type": "Organization",
    name: SITE_NAME,
    alternateName: ["Gvstudios", "GV Studios"],
    url: SITE_URL,
    logo: `${SITE_URL}/gv-logo.png`,
    email: CONTACT_EMAIL,
    telephone: CONTACT_PHONE,
    description: DEFAULT_DESCRIPTION,
    areaServed: "Worldwide",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Islamabad",
      addressCountry: "PK",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: CONTACT_EMAIL,
      telephone: CONTACT_PHONE,
      availableLanguage: ["English"],
    },
  };
}

function replaceHead(html: string, page: PageSpec) {
  const url = `${SITE_URL}${page.path === "/" ? "/" : page.path}`;
  const title = escapeHtml(page.title);
  const description = escapeHtml(page.description);

  let next = html.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`);

  next = next.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
    `<meta name="description" content="${description}" />`,
  );
  next = next.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/,
    `<link rel="canonical" href="${url}" />`,
  );
  next = next.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:url" content="${url}" />`,
  );
  next = next.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:title" content="${title}" />`,
  );
  next = next.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:description" content="${description}" />`,
  );
  next = next.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/>/,
    `<meta name="twitter:title" content="${title}" />`,
  );
  next = next.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/,
    `<meta name="twitter:description" content="${description}" />`,
  );

  const jsonLdBlock = `<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@graph": page.jsonLd,
  })}</script>`;

  next = next.replace(
    /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
    jsonLdBlock,
  );

  next = next.replace(
    /name="viewport"\s+content="[^"]*"/,
    'name="viewport" content="width=device-width, initial-scale=1.0"',
  );

  // Inject crawlable body content inside #root so raw HTML has text + H1.
  // React createRoot will replace this on hydrate for interactive users.
  next = next.replace(
    /<div id="root"><\/div>/,
    `<div id="root">${page.bodyHtml}</div>`,
  );

  return next;
}

function homeBody() {
  const serviceLinks = allServices
    .map(
      (service) =>
        `<li><a href="/services/${service.slug}">${escapeHtml(service.title)}</a> — ${escapeHtml(service.shortDescription)}</li>`,
    )
    .join("");

  return `
<main>
  <header>
    <p><strong>${escapeHtml(SITE_NAME)}</strong> · <a href="https://gvstudio.live">gvstudio.live</a></p>
    <p>Contact: <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a> · <a href="tel:${CONTACT_PHONE}">${CONTACT_PHONE}</a> · Pakistan</p>
  </header>
  <h1>Empowering The Next Era Of AI &amp; IT Solutions</h1>
  <p>${escapeHtml(DEFAULT_DESCRIPTION)}</p>
  <h2>Services</h2>
  <ul>${serviceLinks}</ul>
  <h2>Frequently Asked Questions</h2>
  <h3>What AI services does GV Studio provide?</h3>
  <p>We specialize in machine learning, deep learning, AI automation, data engineering, and AI governance across predictive analytics, computer vision, NLP, and autonomous systems.</p>
  <h3>How do I get started with GV Studio?</h3>
  <p>Contact our team for a free consultation. We discuss your business goals, assess your data landscape, and propose a tailored AI and IT strategy.</p>
  <p><a href="mailto:${CONTACT_EMAIL}">Email ${CONTACT_EMAIL}</a> to get started.</p>
</main>`.trim();
}

function serviceBody(service: (typeof allServices)[number]) {
  return `
<main>
  <nav aria-label="Breadcrumb">
    <a href="/">Home</a> / <a href="/#services">Services</a> / ${escapeHtml(service.title)}
  </nav>
  <p>GV Studio service · Contact <a href="tel:${CONTACT_PHONE}">${CONTACT_PHONE}</a> · <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a></p>
  <h1>${escapeHtml(service.title)} Services</h1>
  <p>${escapeHtml(service.heroDescription)}</p>
  <p>${escapeHtml(service.shortDescription)}</p>
  <h2>What we build</h2>
  <ul>
    ${service.keyPoints
      .map(
        (point, index) =>
          `<li><strong>${escapeHtml(point)}</strong> — ${escapeHtml(service.outcomes[index] ?? "")}</li>`,
      )
      .join("")}
  </ul>
  <h2>Who it's for</h2>
  <ul>${service.audience.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
  <h2>Common use cases</h2>
  <ul>${service.useCases.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
  <h2>Example project: ${escapeHtml(service.exampleProject.title)}</h2>
  <h3>Problem</h3>
  <p>${escapeHtml(service.exampleProject.problem)}</p>
  <h3>Approach</h3>
  <p>${escapeHtml(service.exampleProject.approach)}</p>
  <h3>Result</h3>
  <p>${escapeHtml(service.exampleProject.result)}</p>
  <h2>Technology stack</h2>
  <ul>${service.techStack.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
  <h2>How we work</h2>
  <ol>${service.process.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}</ol>
  <h2>Frequently asked questions</h2>
  ${service.faqs
    .map(
      (faq) =>
        `<h3>${escapeHtml(faq.question)}</h3><p>${escapeHtml(faq.answer)}</p>`,
    )
    .join("")}
  <p><a href="mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(service.title + " Inquiry - GV Studio")}">Discuss ${escapeHtml(service.title)}</a></p>
  <h2>Related services</h2>
  <ul>
    ${allServices
      .filter((item) => item.slug !== service.slug)
      .slice(0, 4)
      .map(
        (item) =>
          `<li><a href="/services/${item.slug}">${escapeHtml(item.title)}</a></li>`,
      )
      .join("")}
  </ul>
  <p>Last updated: Nov 2026</p>
</main>`.trim();
}

function buildPages(): PageSpec[] {
  const home: PageSpec = {
    path: "/",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    bodyHtml: homeBody(),
    jsonLd: [
      organizationGraph(),
      {
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
        publisher: { "@type": "Organization", name: SITE_NAME },
      },
    ],
  };

  const services = allServices.map((service) => {
    const pathName = `/services/${service.slug}`;
    return {
      path: pathName,
      title: service.seoTitle.replace("Gvstudios", SITE_NAME),
      description: service.seoDescription.replaceAll("Gvstudios", SITE_NAME),
      bodyHtml: serviceBody(service),
      jsonLd: [
        organizationGraph(),
        {
          "@type": "Service",
          name: service.title,
          description: service.seoDescription.replaceAll("Gvstudios", SITE_NAME),
          url: `${SITE_URL}${pathName}`,
          provider: {
            "@type": "Organization",
            name: SITE_NAME,
            url: SITE_URL,
            telephone: CONTACT_PHONE,
            email: CONTACT_EMAIL,
          },
          areaServed: "Worldwide",
          serviceType: service.title,
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/#services` },
            {
              "@type": "ListItem",
              position: 3,
              name: service.title,
              item: `${SITE_URL}${pathName}`,
            },
          ],
        },
        {
          "@type": "FAQPage",
          mainEntity: service.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        },
      ],
    } satisfies PageSpec;
  });

  return [home, ...services];
}

function writePage(page: PageSpec, template: string) {
  const html = replaceHead(template, page);
  if (page.path === "/") {
    fs.writeFileSync(path.join(distDir, "index.html"), html, "utf8");
    return;
  }

  const outDir = path.join(distDir, page.path.replace(/^\//, ""));
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), html, "utf8");
}

function writeSitemap() {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = [
    { loc: `${SITE_URL}/`, changefreq: "weekly", priority: "1.0" },
    ...allServices.map((service) => ({
      loc: `${SITE_URL}/services/${service.slug}`,
      changefreq: "monthly",
      priority: "0.8",
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

  const publicSitemap = path.resolve(__dirname, "../client/public/sitemap.xml");
  fs.writeFileSync(publicSitemap, xml, "utf8");
  fs.writeFileSync(path.join(distDir, "sitemap.xml"), xml, "utf8");
  console.log(`Wrote sitemap.xml (${urls.length} urls, lastmod ${lastmod})`);
}

function assertUniquePageSeo(pages: PageSpec[]) {
  const titles = new Set<string>();
  const descriptions = new Set<string>();
  for (const page of pages) {
    if (titles.has(page.title)) {
      throw new Error(`Duplicate page title: ${page.title}`);
    }
    if (descriptions.has(page.description)) {
      throw new Error(`Duplicate meta description: ${page.description}`);
    }
    titles.add(page.title);
    descriptions.add(page.description);
  }
}

function main() {
  if (!fs.existsSync(templatePath)) {
    throw new Error(`Missing build output: ${templatePath}. Run vite build first.`);
  }

  const template = fs.readFileSync(templatePath, "utf8");
  const pages = buildPages();
  assertUniquePageSeo(pages);

  for (const page of pages) {
    writePage(page, template);
    console.log(`prerendered ${page.path}`);
  }

  writeSitemap();
  console.log(`Generated ${pages.length} crawlable HTML pages in ${distDir}`);
}

main();
