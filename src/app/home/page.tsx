import dynamic from 'next/dynamic';
import HeroSection from "./L1";
import FeaturesSection from "./L2";
import MobileDevSection from "./L2_5";
import ServicesSection from "./L3";
import Testimonials from "./Testimonials";
import AboutUs from "./AboutUs";
import WhyNobleStack from "./WhyNobleStack";
import SocialBadges from "./SocialBadges";
import ContactCTA from "./ContactCTA";

const VideoGallery = dynamic(() => import("./VideoGallery"));
const FAQSection = dynamic(() => import("./L4"));

export default function Home() {
  return (
    <main className="bg-page-theme">
      <HeroSection />
      <VideoGallery />
      {/* Dark gap spacer for visual separation */}
      <div className="h-6 sm:h-8 bg-page-theme" />
      <AboutUs />
      {/* Dark gap spacer for visual separation */}
      <div className="h-6 sm:h-8 bg-page-theme" />
      <WhyNobleStack />
      {/* Dark gap spacer for visual separation */}
      <div className="h-6 sm:h-8 bg-page-theme" />
      <FeaturesSection />
      {/* Dark gap spacer for visual separation */}
      <div className="h-6 sm:h-8 bg-page-theme" />
      <MobileDevSection />
      {/* Dark gap spacer for visual separation */}
      <div className="h-6 sm:h-8 bg-page-theme" />
      <ServicesSection />
      {/* Dark gap spacer for visual separation */}
      <div className="h-6 sm:h-8 bg-page-theme" />
      <Testimonials />
      {/* Dark gap spacer for visual separation */}
      <div className="h-6 sm:h-8 bg-page-theme" />
      <SocialBadges />
      <ContactCTA />
      {/* Dark gap spacer for visual separation */}
      <div className="h-6 sm:h-8 bg-page-theme" />
      <FAQSection />
    </main>
  );
} 