import { Metadata } from "next";
import HeroSection from "./sections/HeroSection";
import WhyHireSection from "./sections/WhyHireSection";
import ServicesSection from "./sections/ServicesSection";
import SkillsSection from "./sections/SkillsSection";
import ProcessSection from "./sections/ProcessSection";
import HiringModelsSection from "./sections/HiringModelsSection";
import IndustriesSection from "./sections/IndustriesSection";
import WhyChooseSection from "./sections/WhyChooseSection";
import FAQSection from "./sections/FAQSection";
import CTASection from "./sections/CTASection";

export const metadata: Metadata = {
  title:
    "Hire AI Developers | Dedicated AI Engineers for Custom AI Solutions – Noble Stack",
  description:
    "Hire AI developers from Noble Stack to build AI chatbots, automation systems, machine learning models, and generative AI applications. Work with dedicated AI engineers today.",
  openGraph: {
    title:
      "Hire AI Developers | Dedicated AI Engineers for Custom AI Solutions – Noble Stack",
    description:
      "Hire AI developers from Noble Stack to build AI chatbots, automation systems, machine learning models, and generative AI applications. Work with dedicated AI engineers today.",
    url: "https://noblestack.io/hire-ai-developers",
    siteName: "Noble Stack",
  },
  alternates: {
    canonical: "https://noblestack.io/hire-ai-developers",
  },
};

export const dynamic = "force-static";

export default function HireAIDevelopersPage() {
  return (
    <main className="bg-page-theme">
      <HeroSection />
      <div className="h-6 sm:h-8 bg-page-theme" />
      <WhyHireSection />
      <div className="h-6 sm:h-8 bg-page-theme" />
      <ServicesSection />
      <div className="h-6 sm:h-8 bg-page-theme" />
      <SkillsSection />
      <div className="h-6 sm:h-8 bg-page-theme" />
      <ProcessSection />
      <div className="h-6 sm:h-8 bg-page-theme" />
      <HiringModelsSection />
      <div className="h-6 sm:h-8 bg-page-theme" />
      <IndustriesSection />
      <div className="h-6 sm:h-8 bg-page-theme" />
      <WhyChooseSection />
      <div className="h-6 sm:h-8 bg-page-theme" />
      <FAQSection />
      <CTASection />

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "AI Developer Hiring",
            provider: {
              "@type": "Organization",
              name: "Noble Stack",
              url: "https://www.noblestack.io",
            },
            areaServed: "Worldwide",
            description:
              "Hire dedicated AI developers for custom AI solutions including machine learning, generative AI, AI chatbots, and automation systems.",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What does an AI developer do?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "An AI developer builds software systems that use artificial intelligence technologies such as machine learning, natural language processing, and predictive analytics to analyze data and automate tasks.",
                },
              },
              {
                "@type": "Question",
                name: "How long does AI development take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The timeline for AI development depends on the complexity of the solution. Small AI systems may take several weeks, while more advanced machine learning platforms may require several months of development.",
                },
              },
              {
                "@type": "Question",
                name: "Can AI solutions integrate with existing software?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, AI systems can integrate with existing applications through APIs and software integrations, allowing businesses to enhance their current technology infrastructure.",
                },
              },
              {
                "@type": "Question",
                name: "Do AI systems require large datasets?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Large datasets improve the performance of AI models, but many solutions can be built using smaller datasets combined with pre-trained models and advanced AI frameworks.",
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
