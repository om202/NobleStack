import dynamic from 'next/dynamic';
import HeroSection from "./L1";
import AboutUs from "./AboutUs";
import FeaturesSection from "./L2";
import MobileDevSection from "./L2_5";
import ServicesSection from "./L3";
import AutomationSection from "./AutomationSection";
import CaseStudies from "./CaseStudies";
import WhyChoose from "./WhyChoose";
import ProcessSection from "./ProcessSection";
import LocalGlobal from "./LocalGlobal";
import Testimonials from "./Testimonials";
import SocialBadges from "./SocialBadges";
import ContactCTA from "./ContactCTA";

const VideoGallery = dynamic(() => import("./VideoGallery"));
const FAQSection = dynamic(() => import("./L4"));

const Spacer = () => <div className="h-6 sm:h-8 bg-page-theme" />;

export default function Home() {
  return (
    <main className="bg-page-theme">
      <HeroSection />
      <VideoGallery />
      <Spacer />
      <AboutUs />
      <Spacer />
      <FeaturesSection />
      <Spacer />
      <MobileDevSection />
      <Spacer />
      <ServicesSection />
      <Spacer />
      <AutomationSection />
      <Spacer />
      <CaseStudies />
      <Spacer />
      <WhyChoose />
      <Spacer />
      <ProcessSection />
      <Spacer />
      <LocalGlobal />
      <Spacer />
      <Testimonials />
      <Spacer />
      <SocialBadges />
      <FAQSection />
      <ContactCTA />
    </main>
  );
}
