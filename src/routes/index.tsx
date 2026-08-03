import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { SiteHeader } from "@/components/site/site-header";
import { Hero } from "@/components/site/hero";
import { Services } from "@/components/site/services";
import { About } from "@/components/site/about";
import { WhyUs } from "@/components/site/why-us";
import { Portfolio } from "@/components/site/portfolio";
import { Testimonials } from "@/components/site/testimonials";
import { Process } from "@/components/site/process";
import { CtaBand } from "@/components/site/cta-band";
import { Contact } from "@/components/site/contact";
import { SiteFooter } from "@/components/site/site-footer";
import { WhatsAppButton } from "@/components/site/whatsapp-button";
import { CONTACT } from "@/lib/site";

const title = "webdegital — Agence digitale : création de sites web modernes";
const description =
  "webdegital crée des sites vitrines, portfolios, landing pages et solutions digitales sur mesure pour entreprises, entrepreneurs et professionnels.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://webdegital.ma/" },
      { property: "og:image", content: "https://webdegital.ma/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://webdegital.ma/og-image.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://webdegital.ma/" },
      { rel: "sitemap", type: "application/xml", href: "/sitemap.xml" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "webdegital",
          description,
          telephone: CONTACT.phoneDisplay,
          email: CONTACT.email,
          areaServed: "MA",
          serviceType: [
            "Création de sites web",
            "Sites vitrines",
            "Sites portfolio",
            "Landing pages",
            "Solutions digitales",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <About />
        <WhyUs />
        <Portfolio />
        <Testimonials />
        <Process />
        <CtaBand />
        <Contact />
      </main>
      <SiteFooter />
      <WhatsAppButton />
      <Toaster position="top-center" />
    </div>
  );
}
