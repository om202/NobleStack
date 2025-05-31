import Navigation from "../../components/common/Navigation";
import Footer from "../../components/common/Footer";
import HeroSection from "./L1";
import FeaturesSection from "./L2";
import ServicesSection from "./L3";
import FAQSection from "./L4";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pb-24">
        <HeroSection />
        <FeaturesSection />
        <ServicesSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
} 