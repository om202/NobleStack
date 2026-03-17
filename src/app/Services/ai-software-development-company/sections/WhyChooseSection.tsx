import SectionHeader from "../../../../components/SectionHeader";

export default function WhyChooseSection() {
  const differentiators = [
    "AI-first engineering team",
    "Enterprise-grade architecture design",
    "Scalable machine learning infrastructure",
    "Modern AI development stack",
    "Transparent project management",
    "Long-term partnership approach",
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Why Choose Noble Stack as Your AI Development Partner"
          description="Organizations trust Noble Stack because we focus on building production-ready AI systems that solve real problems—not experimental prototypes."
          imageSrc="/undraw_engineering-team_13ax.svg"
          imageAlt="Why choose Noble Stack illustration"
        />

        <div className="bg-subtle-theme rounded-2xl p-6 md:p-8 border border-theme">
          <h3 className="text-xl font-semibold text-main-theme mb-4">
            What Makes Us Different
          </h3>
          <ul className="space-y-3 text-main-theme/80 text-base leading-relaxed">
            {differentiators.map((item, index) => (
              <li key={index} className="flex gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-base text-subtitle-theme mt-6">
            We build AI systems designed for real business outcomes—not experimental prototypes.
          </p>
        </div>
      </div>
    </section>
  );
}
