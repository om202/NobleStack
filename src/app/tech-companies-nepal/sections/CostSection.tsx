import SectionHeader from "../../../components/SectionHeader";

export default function CostSection() {
  const tiers = [
    {
      level: "Junior Developer",
      range: "$500 – $1,200",
      term: "per month",
      description: "0–2 years experience. Suitable for standard tasks, support work, and maintenance.",
    },
    {
      level: "Mid-Level Developer",
      range: "$1,200 – $2,500",
      term: "per month",
      description: "2–5 years experience. Capable of independent feature development and code reviews.",
    },
    {
      level: "Senior Developer",
      range: "$2,500 – $5,000",
      term: "per month",
      description: "5+ years experience. System architecture, complex AI integrations, and team leadership.",
    },
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Cost of Hiring Developers in Nepal (2026)"
          description="Compared to Western markets, Nepal offers high-quality engineering at 60–80% lower cost, without compromising on quality or communication standards."
          imageSrc="/undraw_working_n9u0.svg"
          imageAlt="Pricing illustration"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className="bg-subtle-theme rounded-2xl p-6 md:p-8 border border-theme flex flex-col"
            >
              <h3 className="text-lg md:text-xl font-semibold text-main-theme mb-2">
                {tier.level}
              </h3>
              <p className="text-sm text-subtitle-theme mb-6">
                {tier.description}
              </p>
              <div className="mt-auto">
                <div className="text-2xl md:text-3xl font-bold text-main-theme">
                  {tier.range}
                </div>
                <div className="text-sm text-subtitle-theme mt-1">
                  {tier.term}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
