import { Metadata } from "next";
import HeroSection from "./sections/HeroSection";
import ServicesSection from "./sections/ServicesSection";
import ProcessSection from "./sections/ProcessSection";
import WhyChooseSection from "./sections/WhyChooseSection";
import CaseStudySection from "./sections/CaseStudySection";
import IndustriesSection from "./sections/IndustriesSection";
import FAQSection from "./sections/FAQSection";
import CTASection from "./sections/CTASection";

export const metadata: Metadata = {
  title: "AI Development Company in Nepal | Noble Stack",
  description:
    "Noble Stack is a leading AI development company in Nepal helping businesses automate operations, unlock data insights, and scale faster with intelligent technology.",
};

export const dynamic = "force-static";

export default function AIDevelopmentCompanyNepalPage() {
  return (
    <main className="bg-page-theme">
      <HeroSection />
      <div className="h-6 sm:h-8 bg-page-theme" />
      <ServicesSection />
      <div className="h-6 sm:h-8 bg-page-theme" />
      <ProcessSection />
      <div className="h-6 sm:h-8 bg-page-theme" />
      <WhyChooseSection />
      <div className="h-6 sm:h-8 bg-page-theme" />
      <CaseStudySection />
      <div className="h-6 sm:h-8 bg-page-theme" />
      <IndustriesSection />
      <div className="h-6 sm:h-8 bg-page-theme" />
      <FAQSection />
      <CTASection />
    </main>
  );
}

