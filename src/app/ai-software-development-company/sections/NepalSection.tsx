import SectionHeader from "../../../components/SectionHeader";

export default function NepalSection() {
  const reasons = [
    "World-class AI engineering",
    "Competitive development costs",
    "Transparent collaboration",
    "Scalable software architecture",
    "Long-term technical partnerships",
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="AI Software Development in Nepal"
          description="Noble Stack operates from Kathmandu, Nepal while serving businesses globally. Our goal is to help organizations worldwide build next-generation intelligent software systems."
          imageSrc="/undraw_team-spirit_18vw.svg"
          imageAlt="Nepal AI development illustration"
        />

        <div className="bg-subtle-theme rounded-2xl p-6 md:p-8 border border-theme">
          <h3 className="text-xl font-semibold text-main-theme mb-4">
            Why Companies Choose Our AI Development Services
          </h3>
          <ul className="space-y-3 text-main-theme/80 text-base leading-relaxed">
            {reasons.map((item, index) => (
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
