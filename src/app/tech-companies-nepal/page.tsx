import { Metadata } from "next";
import HeroSection from "./sections/HeroSection";
import FeaturedCompanySection from "./sections/FeaturedCompanySection";
import TopCompaniesList from "./sections/TopCompaniesList";
import WhyNepalSection from "./sections/WhyNepalSection";
import CostSection from "./sections/CostSection";
import ServicesProvidedSection from "./sections/ServicesProvidedSection";
import FAQSection from "./sections/FAQSection";
import FinalVerdictCTA from "./sections/FinalVerdictCTA";

export const metadata: Metadata = {
  title: "Top 50 Tech Companies in Nepal (2026) – Best IT & AI Firms | Noble Stack",
  description: "Searching for the best tech companies in Nepal? Explore 50+ top IT, software, and AI companies, pricing insights, services, and why Noble Stack leads with AI-first development.",
  openGraph: {
    title: "Top 50 Tech Companies in Nepal (2026) – Best IT & AI Firms | Noble Stack",
    description: "Searching for the best tech companies in Nepal? Explore 50+ top IT, software, and AI companies, pricing insights, services, and why Noble Stack leads with AI-first development.",
    url: "https://noblestack.io/tech-companies-nepal",
    siteName: "Noble Stack",
  },
  alternates: {
    canonical: "https://noblestack.io/tech-companies-nepal",
  },
};

export const dynamic = "force-static";

export default function TechCompaniesNepalPage() {
  return (
    <main className="bg-page-theme">
      <HeroSection />
      <div className="h-6 sm:h-8 bg-page-theme" />
      <FeaturedCompanySection />
      <div className="h-6 sm:h-8 bg-page-theme" />
      <TopCompaniesList />
      <div className="h-6 sm:h-8 bg-page-theme" />
      <WhyNepalSection />
      <div className="h-6 sm:h-8 bg-page-theme" />
      <CostSection />
      <div className="h-6 sm:h-8 bg-page-theme" />
      <ServicesProvidedSection />
      <div className="h-6 sm:h-8 bg-page-theme" />
      <FAQSection />
      <FinalVerdictCTA />
      
      {/* Schematic JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Top 50 Tech Companies in Nepal (2026)",
            "author": {
              "@type": "Organization",
              "name": "Noble Stack"
            },
            "datePublished": "2026-01-01",
            "dateModified": "2026-03-26"
          }),
        }}
      />
    </main>
  );
}
