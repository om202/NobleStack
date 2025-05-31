import Navigation from "../../components/common/Navigation";
import Footer from "../../components/common/Footer";
import HeroSection from "./L1";
import FeaturesSection from "./L2";
import FAQSection from "./L3";
import CTASection from "./L4";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
} 