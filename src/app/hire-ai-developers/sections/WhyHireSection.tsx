import SectionHeader from "../../../components/SectionHeader";

export default function WhyHireSection() {
  const benefits = [
    "Build intelligent and scalable AI systems",
    "Automate business workflows and repetitive tasks",
    "Extract insights from complex data sets",
    "Improve operational efficiency",
    "Enhance customer experiences through AI-driven products",
    "Develop predictive analytics and recommendation engines",
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Why Hire AI Developers"
          description="Hiring experienced AI developers gives businesses access to specialized expertise required to build reliable and scalable AI solutions. Our AI developers focus on creating practical applications that solve real business challenges and generate measurable value."
          imageSrc="/undraw_ai-agent_pdkp.svg"
          imageAlt="Why hire AI developers illustration"
        />

        <div className="bg-subtle-theme rounded-2xl p-6 md:p-8 border border-theme">
          <h3 className="text-xl font-semibold text-main-theme mb-4">
            Benefits of Hiring AI Developers
          </h3>
          <ul className="space-y-3 text-main-theme/80 text-base leading-relaxed">
            {benefits.map((item, index) => (
              <li key={index} className="flex gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-base text-subtitle-theme mt-4">
            By hiring dedicated AI developers, businesses can accelerate innovation and stay competitive in an increasingly AI-driven market.
          </p>
        </div>
      </div>
    </section>
  );
}
