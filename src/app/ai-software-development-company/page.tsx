import { Metadata } from "next";
import HeroSection from "./sections/HeroSection";
import WhatIsSection from "./sections/WhatIsSection";
import ServicesSection from "./sections/ServicesSection";
import BenefitsSection from "./sections/BenefitsSection";
import TechStackSection from "./sections/TechStackSection";
import ProcessSection from "./sections/ProcessSection";
import IndustriesSection from "./sections/IndustriesSection";
import NepalSection from "./sections/NepalSection";
import WhyChooseSection from "./sections/WhyChooseSection";
import CaseStudySection from "./sections/CaseStudySection";
import FAQSection from "./sections/FAQSection";
import CTASection from "./sections/CTASection";

export const metadata: Metadata = {
  title:
    "AI Software Development Company | Custom AI Solutions | Noble Stack",
  description:
    "AI software development company building custom AI solutions, machine learning systems, generative AI applications, and automation platforms. Start your AI project today.",
  openGraph: {
    title:
      "AI Software Development Company | Custom AI Solutions | Noble Stack",
    description:
      "AI software development company building custom AI solutions, machine learning systems, generative AI applications, and automation platforms. Start your AI project today.",
    url: "https://noblestack.io/ai-software-development-company",
    siteName: "Noble Stack",
  },
  alternates: {
    canonical: "https://noblestack.io/ai-software-development-company",
  },
};

export const dynamic = "force-static";

export default function AISoftwareDevelopmentCompanyPage() {
  return (
    <main className="bg-page-theme">
      <HeroSection />
      <div className="h-6 sm:h-8 bg-page-theme" />
      <WhatIsSection />
      <div className="h-6 sm:h-8 bg-page-theme" />
      <ServicesSection />
      <div className="h-6 sm:h-8 bg-page-theme" />
      <BenefitsSection />
      <div className="h-6 sm:h-8 bg-page-theme" />
      <TechStackSection />
      <div className="h-6 sm:h-8 bg-page-theme" />
      <ProcessSection />
      <div className="h-6 sm:h-8 bg-page-theme" />
      <IndustriesSection />
      <div className="h-6 sm:h-8 bg-page-theme" />
      <NepalSection />
      <div className="h-6 sm:h-8 bg-page-theme" />
      <WhyChooseSection />
      <div className="h-6 sm:h-8 bg-page-theme" />
      <CaseStudySection />
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
            serviceType: "AI Software Development",
            provider: {
              "@type": "Organization",
              name: "Noble Stack",
              url: "https://www.noblestack.io",
            },
            areaServed: "Worldwide",
            description:
              "Custom AI software development including machine learning systems, generative AI, AI SaaS platforms, and automation solutions.",
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
                name: "What does an AI software development company do?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "An AI software development company designs intelligent applications using technologies such as machine learning, automation, and natural language processing to automate processes and analyze data.",
                },
              },
              {
                "@type": "Question",
                name: "How long does AI software development take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most AI software projects require 3–6 months depending on complexity, data availability, and system integration requirements.",
                },
              },
              {
                "@type": "Question",
                name: "How much does AI software development cost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Costs vary depending on system complexity, infrastructure requirements, and development scope. Small automation projects may cost tens of thousands, while enterprise AI platforms require larger investments.",
                },
              },
              {
                "@type": "Question",
                name: "Can AI integrate with existing software systems?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. AI systems can integrate into existing applications using APIs, cloud infrastructure, and modern software architectures.",
                },
              },
              {
                "@type": "Question",
                name: "Is AI software useful for small businesses?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Many small and medium businesses use AI to automate operations, analyze customer data, and improve decision-making.",
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
