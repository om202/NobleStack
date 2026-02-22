import { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import HeroSection from './sections/HeroSection';
import WhyChooseSection from './sections/WhyChooseSection';
import CapabilitiesSection from './sections/CapabilitiesSection';
import ApplicationsSection from './sections/ApplicationsSection';
import HowWeWorkSection from './sections/HowWeWorkSection';
import WhoWeWorkWithSection from './sections/WhoWeWorkWithSection';
import TechnologiesSection from './sections/TechnologiesSection';
import CTASection from './sections/CTASection';

const FAQSection = nextDynamic(() => import('./sections/FAQSection'));

export const metadata: Metadata = {
    title: "LLM-Powered AI Systems Company | Enterprise AI Solutions – Noble Stack",
    description: "Noble Stack builds enterprise LLM-powered AI systems, RAG architectures, and AI agents. Secure, scalable, production-ready AI solutions.",
};

export const dynamic = 'force-static';

export default function LLMAISystems() {
    return (
        <main className="bg-page-theme">
            <HeroSection />
            <div className="h-6 sm:h-8 bg-page-theme" />
            <WhyChooseSection />
            <div className="h-6 sm:h-8 bg-page-theme" />
            <CapabilitiesSection />
            <div className="h-6 sm:h-8 bg-page-theme" />
            <ApplicationsSection />
            <div className="h-6 sm:h-8 bg-page-theme" />
            <HowWeWorkSection />
            <div className="h-6 sm:h-8 bg-page-theme" />
            <WhoWeWorkWithSection />
            <div className="h-6 sm:h-8 bg-page-theme" />
            <TechnologiesSection />
            <div className="h-6 sm:h-8 bg-page-theme" />
            <FAQSection />
            <CTASection />
        </main>
    );
}
