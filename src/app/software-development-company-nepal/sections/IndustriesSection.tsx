import { Rocket, Cloud, ShoppingCart, Landmark, Stethoscope } from "lucide-react";
import ServiceCard from "../../../components/ServiceCard";
import SectionHeader from "../../../components/SectionHeader";

export default function IndustriesSection() {
  const industries = [
    {
      icon: Rocket,
      name: "Startups & SaaS",
      description:
        "Scalable SaaS product development from MVP to market-ready platforms, built for speed without creating long-term technical debt.",
    },
    {
      icon: Landmark,
      name: "Fintech",
      description:
        "Secure financial services applications with strong compliance posture, audit logging, and the engineering rigor financial software demands.",
    },
    {
      icon: ShoppingCart,
      name: "E-Commerce",
      description:
        "High-performance online stores and retail management systems, mobile-first, conversion-optimized, and built to scale with seasonal traffic.",
    },
    {
      icon: Stethoscope,
      name: "Healthcare",
      description:
        "Telemedicine platforms, patient portals, and healthcare tools built with the privacy and reliability healthcare software requires.",
    },
    {
      icon: Cloud,
      name: "Business Automation",
      description:
        "Custom ERPs, CRMs, and internal systems that streamline operations, reduce manual work, and integrate cleanly with your existing tools.",
    },
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Industries We Serve"
          description="Cross-industry experience that lets us deliver software tailored to the realities of different business models, not generic templates."
          imageSrc="/undraw_engineering-team_13ax.svg"
          imageAlt="Industries illustration"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {industries.map((industry, index) => (
            <ServiceCard
              key={index}
              name={industry.name}
              description={industry.description}
              icon={industry.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
