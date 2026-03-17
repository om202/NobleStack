import { Metadata } from 'next';
import HeroSection from './sections/HeroSection';
import TrustedSecuritySection from './sections/TrustedSecuritySection';
import ServicesSection from './sections/ServicesSection';
import TechnologiesSection from './sections/TechnologiesSection';
import StandardsSection from './sections/StandardsSection';
import WhyChooseSection from './sections/WhyChooseSection';
import FAQSection from './sections/FAQSection';
import CTASection from './sections/CTASection';

export const metadata: Metadata = {
    title: "Application Security Services - Noble Stack",
    description: "Enterprise Security, Privacy & Compliance for Web and AI Applications. Build secure, compliant, and resilient digital products with application security services that protect modern web, SaaS, and AI-driven systems.",
};

export const dynamic = 'force-static';

export default function SecurityPrivacy() {
    return (
        <main className="bg-page-theme">
            <HeroSection />
            {/* Dark gap spacer for visual separation */}
            <div className="h-6 sm:h-8 bg-page-theme" />
            <TrustedSecuritySection />
            {/* Dark gap spacer for visual separation */}
            <div className="h-6 sm:h-8 bg-page-theme" />
            <ServicesSection />
            {/* Dark gap spacer for visual separation */}
            <div className="h-6 sm:h-8 bg-page-theme" />
            <TechnologiesSection />
            {/* Dark gap spacer for visual separation */}
            <div className="h-6 sm:h-8 bg-page-theme" />
            <StandardsSection />
            {/* Dark gap spacer for visual separation */}
            <div className="h-6 sm:h-8 bg-page-theme" />
            <WhyChooseSection />
            {/* Dark gap spacer for visual separation */}
            <div className="h-6 sm:h-8 bg-page-theme" />
            <FAQSection />
            <CTASection />
        </main>
    );
}
