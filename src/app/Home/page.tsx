import HeroSection from "./L1";
import FeaturesSection from "./L2";
import ServicesSection from "./L3";
import SocialBadges from "./SocialBadges";
import FAQSection from "./L4";
import FacebookFeed from "@/components/FacebookFeed";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <FacebookFeed />
      <SocialBadges />
      <FAQSection />
    </main>
  );
} 