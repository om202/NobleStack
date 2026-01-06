import HeroSection from "./L1";
import FeaturesSection from "./L2";
import MobileDevSection from "./L2_5";
import ServicesSection from "./L3";
import Testimonials from "./Testimonials";
import SocialBadges from "./SocialBadges";
import FAQSection from "./L4";
import FacebookFeed from "@/components/FacebookFeed";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <MobileDevSection />
      <ServicesSection />
      <Testimonials />
      <FacebookFeed />
      <SocialBadges />
      <FAQSection />
    </main>
  );
} 