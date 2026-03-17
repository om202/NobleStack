import SectionHeader from "../../../components/SectionHeader";

export default function IndustriesSection() {
  const industries = [
    "SaaS and technology startups",
    "E-commerce platforms",
    "Fintech companies",
    "Logistics companies",
    "Healthcare platforms",
    "Education technology",
    "Enterprise software companies",
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Industries Using AI Software"
          description="AI technologies are transforming nearly every industry. Each industry benefits from custom AI solutions tailored to its operational challenges."
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
