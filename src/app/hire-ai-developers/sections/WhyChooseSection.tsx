import SectionHeader from "../../../components/SectionHeader";

export default function WhyChooseSection() {
  const reasons = [
    "Experienced AI engineers",
    "Scalable AI architectures",
    "Secure and reliable AI deployments",
    "Transparent development processes",
    "Dedicated support and collaboration",
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Why Businesses Choose Noble Stack"
          description="Businesses choose Noble Stack for AI development because we focus on delivering practical and scalable artificial intelligence solutions. Our developers combine deep technical expertise with a strong understanding of business needs."
          imageSrc="/undraw_team-spirit_18vw.svg"
          imageAlt="Why choose Noble Stack illustration"
        />

        <div className="bg-subtle-theme rounded-2xl p-6 md:p-8 border border-theme">
          <h3 className="text-xl font-semibold text-main-theme mb-4">
            Key Reasons Businesses Work With Us
          </h3>
          <ul className="space-y-3 text-main-theme/80 text-base leading-relaxed">
            {reasons.map((item, index) => (
              <li key={index} className="flex gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-base text-subtitle-theme mt-4">
            Our goal is to help businesses successfully implement artificial intelligence technologies that drive growth and innovation.
          </p>
        </div>
      </div>
    </section>
  );
}
