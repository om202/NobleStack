import PageLayout from "../../components/PageLayout";
import HeroSection from "./L1";
import FeaturesSection from "./L2";
import ServicesSection from "./L3";
import FAQSection from "./L4";

export default function Home() {
  return (
    <PageLayout>
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <FAQSection />
    </PageLayout>
  );
} 