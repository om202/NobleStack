import { Check } from "lucide-react";
import CTAButton from "../../../components/CTAButton";
import SectionHeader from "../../../components/SectionHeader";

export default function CostSection() {
  const tiers = [
    {
      name: "Small Projects",
      blurb: "MVPs, simple web apps, basic mobile applications.",
      price: "$5,000 – $20,000",
      timeline: "1–3 months",
      features: [
        "Core features and standard UI/UX",
        "Single platform delivery",
        "Production deployment & handover",
      ],
    },
    {
      name: "Medium Projects",
      blurb: "Complete SaaS platforms, complex mobile apps, advanced integrations.",
      price: "$20,000 – $80,000",
      timeline: "3–6 months",
      features: [
        "Custom architecture & integrations",
        "Premium UI/UX with design system",
        "Cross-platform delivery & QA",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise Solutions",
      blurb: "Large-scale ERPs, fintech systems, custom AI platforms.",
      price: "$80,000+",
      timeline: "6+ months",
      features: [
        "Microservices & enterprise architecture",
        "Compliance & security review",
        "Long-term engineering partnership",
      ],
    },
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Software Development Cost in Nepal"
          description="Nepal offers high-quality engineering at a fraction of US or European rates. The right cost tier depends on the scope, complexity, and timeline of your project."
          imageSrc="/undraw_working_n9u0.svg"
          imageAlt="Pricing illustration"
        />

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`bg-subtle-theme rounded-2xl p-6 md:p-8 border flex flex-col ${
                tier.highlighted ? "border-blue-500/40" : "border-theme"
              }`}
            >
              <h3 className="text-lg md:text-xl font-semibold text-main-theme mb-2">
                {tier.name}
              </h3>
              <p className="text-sm text-subtitle-theme mb-6">{tier.blurb}</p>

              <div className="mb-6">
                <div className="text-2xl md:text-3xl font-bold text-main-theme">
                  {tier.price}
                </div>
                <div className="text-sm text-subtitle-theme mt-1">
                  {tier.timeline}
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-main-theme/80"
                  >
                    <Check className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <CTAButton variant="secondary" href="/contact" className="w-full">
                Get an Estimate
              </CTAButton>
            </div>
          ))}
        </div>

        <div className="bg-subtle-theme rounded-2xl p-6 md:p-8 border border-theme">
          <h4 className="text-lg font-semibold text-main-theme mb-2">
            Cost Comparison vs US / Europe
          </h4>
          <p className="text-base text-subtitle-theme leading-relaxed">
            An $80,000 project built by senior engineers in Nepal would typically
            cost $200,000–$300,000 in the US or Western Europe. The lower cost
            reflects regional living costs—not lower engineering quality.
          </p>
        </div>
      </div>
    </section>
  );
}
