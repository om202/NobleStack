import { Metadata } from 'next';
import HeroSection from './sections/HeroSection';
import SolutionsSection from './sections/SolutionsSection';
import EndToEndSection from './sections/EndToEndSection';
import UseCasesSection from './sections/UseCasesSection';
import HowWeWorkSection from './sections/HowWeWorkSection';
import WhyChooseSection from './sections/WhyChooseSection';
import WhoWeWorkWithSection from './sections/WhoWeWorkWithSection';
import FAQSection from './sections/FAQSection';
import TechnologiesSection from './sections/TechnologiesSection';
import CTASection from './sections/CTASection';

export const metadata: Metadata = {
    title: "Automation Systems & Workflow Automation Services - Noble Stack",
    description: "We design and build end-to-end automation systems that eliminate repetitive work, reduce human error, and scale seamlessly with your business.",
};

export const dynamic = 'force-static';

export default function AutomationSystems() {
    return (
        <main className="bg-page-theme">
            <HeroSection />
            {/* Dark gap spacer for visual separation */}
            <div className="h-6 sm:h-8 bg-page-theme" />
            <SolutionsSection />
            {/* Dark gap spacer for visual separation */}
            <div className="h-6 sm:h-8 bg-page-theme" />
            <EndToEndSection />
            {/* Dark gap spacer for visual separation */}
            <div className="h-6 sm:h-8 bg-page-theme" />
            <UseCasesSection />
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
