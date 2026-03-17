import { Metadata } from 'next';
import HeroSection from './sections/HeroSection';
import ServicesSection from './sections/ServicesSection';
import EndToEndSection from './sections/EndToEndSection';
import LifecycleSection from './sections/LifecycleSection';
import HowWeWorkSection from './sections/HowWeWorkSection';
import WhyChooseSection from './sections/WhyChooseSection';
import WhoWeWorkWithSection from './sections/WhoWeWorkWithSection';
import FAQSection from './sections/FAQSection';
import TechnologiesSection from './sections/TechnologiesSection';
import CTASection from './sections/CTASection';

export const metadata: Metadata = {
    title: "Mobile App Development Services (iOS & Android) | Noble Stack Nepal",
    description: "Custom mobile app development services for iOS & Android. Noble Stack builds scalable, secure apps for startups, SaaS & enterprises. Based in Nepal. Book a free consultation.",
};

export const dynamic = 'force-static';

export default function MobileApps() {
    return (
        <main className="bg-page-theme">
            <HeroSection />
            {/* Dark gap spacer for visual separation */}
            <div className="h-6 sm:h-8 bg-page-theme" />
            <ServicesSection />
            {/* Dark gap spacer for visual separation */}
            <div className="h-6 sm:h-8 bg-page-theme" />
            <EndToEndSection />
            {/* Dark gap spacer for visual separation */}
            <div className="h-6 sm:h-8 bg-page-theme" />
            <LifecycleSection />
            {/* Dark gap spacer for visual separation */}
            <div className="h-6 sm:h-8 bg-page-theme" />
            <HowWeWorkSection />
            {/* Dark gap spacer for visual separation */}
            <div className="h-6 sm:h-8 bg-page-theme" />
            <WhyChooseSection />
            {/* Dark gap spacer for visual separation */}
            <div className="h-6 sm:h-8 bg-page-theme" />
            <WhoWeWorkWithSection />
            {/* Dark gap spacer for visual separation */}
            <div className="h-6 sm:h-8 bg-page-theme" />
            <TechnologiesSection />
            {/* Dark gap spacer for visual separation */}
            <div className="h-6 sm:h-8 bg-page-theme" />
            <FAQSection />
            <CTASection />
        </main>
    );
}
