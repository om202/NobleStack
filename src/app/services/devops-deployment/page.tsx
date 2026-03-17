import { Metadata } from 'next';
import HeroSection from './sections/HeroSection';
import CapabilitiesSection from './sections/CapabilitiesSection';
import EndToEndSection from './sections/EndToEndSection';
import HowWeWorkSection from './sections/HowWeWorkSection';
import WhyChooseSection from './sections/WhyChooseSection';
import WhoWeWorkWithSection from './sections/WhoWeWorkWithSection';
import ImpactSection from './sections/ImpactSection';
import TechnologiesSection from './sections/TechnologiesSection';
import BestPracticesSection from './sections/BestPracticesSection';
import FAQSection from './sections/FAQSection';
import CTASection from './sections/CTASection';

export const metadata: Metadata = {
    title: "DevOps Services Company | Deployment & CI/CD Solutions – Noble Stack",
    description: "Noble Stack provides enterprise DevOps and deployment services, CI/CD automation, cloud infrastructure, and monitoring solutions. Schedule a free consultation.",
};

export const dynamic = 'force-static';

export default function DevOpsDeployment() {
    return (
        <main className="bg-page-theme">
            <HeroSection />
            <div className="h-6 sm:h-8 bg-page-theme" />
            <CapabilitiesSection />
            <div className="h-6 sm:h-8 bg-page-theme" />
            <EndToEndSection />
            <div className="h-6 sm:h-8 bg-page-theme" />
            <HowWeWorkSection />
            <div className="h-6 sm:h-8 bg-page-theme" />
            <WhyChooseSection />
            <div className="h-6 sm:h-8 bg-page-theme" />
            <WhoWeWorkWithSection />
            <div className="h-6 sm:h-8 bg-page-theme" />
            <ImpactSection />
            <div className="h-6 sm:h-8 bg-page-theme" />
            <TechnologiesSection />
            <div className="h-6 sm:h-8 bg-page-theme" />
            <BestPracticesSection />
            <div className="h-6 sm:h-8 bg-page-theme" />
            <FAQSection />
            <CTASection />
        </main>
    );
}
