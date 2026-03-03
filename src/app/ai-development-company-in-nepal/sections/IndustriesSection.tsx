import SectionHeader from "../../../components/SectionHeader";

export default function IndustriesSection() {
  const industries = [
    "E-commerce and online marketplaces",
    "Fintech and digital banking",
    "Healthcare and health-tech platforms",
    "Logistics, transport, and supply chain",
    "SaaS products and B2B platforms",
    "Manufacturing and industrial operations",
    "EdTech and learning platforms",
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Who Needs AI Development Services?"
          description="If your business handles data, runs repetitive processes, or relies on predictions and forecasting, AI can help you operate faster and more accurately."
          imageSrc="/undraw_engineering-team_13ax.svg"
          imageAlt="Industries we serve illustration"
        />

        <div className="bg-subtle-theme rounded-2xl p-6 md:p-8 border border-theme">
          <ul className="space-y-3 text-main-theme/80 text-base leading-relaxed">
            {industries.map((item, index) => (
              <li key={index} className="flex gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

