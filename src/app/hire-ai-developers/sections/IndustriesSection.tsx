import { Heart, Landmark, ShoppingCart, Layers, Truck } from "lucide-react";
import SectionHeader from "../../../components/SectionHeader";

export default function IndustriesSection() {
  const industries = [
    {
      icon: Heart,
      title: "Healthcare",
      description:
        "AI solutions help healthcare organizations analyze patient data, improve diagnostics, and optimize treatment planning.",
    },
    {
      icon: Landmark,
      title: "Finance",
      description:
        "Financial institutions use AI for fraud detection, risk analysis, algorithmic trading, and automated financial insights.",
    },
    {
      icon: ShoppingCart,
      title: "Ecommerce",
      description:
        "AI enables ecommerce companies to deliver personalized recommendations, demand forecasting, and intelligent customer analytics.",
    },
    {
      icon: Layers,
      title: "SaaS",
      description:
        "Software companies use AI to build intelligent features that enhance user experience and automate workflows.",
    },
    {
      icon: Truck,
      title: "Logistics",
      description:
        "Logistics companies use AI for route optimization, inventory forecasting, and supply chain analytics.",
    },
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Industries We Serve"
          description="Artificial intelligence solutions are valuable across multiple industries. Our AI development services support businesses in diverse sectors."
          imageSrc="/undraw_engineering-team_13ax.svg"
          imageAlt="Industries we serve illustration"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="bg-subtle-theme rounded-2xl p-6 md:p-7 border border-theme"
              >
                <Icon className="w-7 h-7 text-blue-500 mb-4" />
                <h3 className="text-lg font-semibold text-main-theme mb-3">
                  {industry.title}
                </h3>
                <p className="text-base text-subtitle-theme leading-relaxed">
                  {industry.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
