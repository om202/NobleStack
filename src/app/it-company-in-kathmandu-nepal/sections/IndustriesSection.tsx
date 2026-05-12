import SectionHeader from "../../../components/SectionHeader";

export default function IndustriesSection() {
  const industries = [
    "Healthcare and health-tech platforms",
    "Education and EdTech",
    "Finance and fintech systems",
    "Real estate and property tech",
    "E-commerce and online retail",
    "Logistics and supply chain",
    "Hospitality and hotel management",
    "Travel and tourism",
    "NGOs and non-profit organizations",
    "SaaS startups and B2B platforms",
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Industries We Serve"
          description="Cross-industry experience that lets us deliver software tailored to the realities of different business models—from local Nepali businesses to international SaaS companies."
          imageSrc="/undraw_engineering-team_13ax.svg"
          imageAlt="Industries illustration"
        />

        <div className="bg-subtle-theme rounded-2xl p-6 md:p-8 border border-theme">
          <ul className="grid sm:grid-cols-2 gap-3 text-main-theme/80 text-base leading-relaxed">
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
