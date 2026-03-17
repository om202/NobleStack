import SectionHeader from "../../../components/SectionHeader";

export default function WhatIsSection() {
  const capabilities = [
    "Learn from data",
    "Detect patterns",
    "Predict future outcomes",
    "Automate complex workflows",
    "Improve performance over time",
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="What Is AI Software Development?"
          description="AI software development involves creating intelligent systems that simulate human decision-making using algorithms, data models, and machine learning techniques. Unlike traditional software, AI applications can self-improve, enabling organizations to build digital systems that drive productivity and innovation."
          imageSrc="/undraw_ai-agent_pdkp.svg"
          imageAlt="AI Software Development illustration"
        />

        <div className="bg-subtle-theme rounded-2xl p-6 md:p-8 border border-theme">
          <h3 className="text-xl font-semibold text-main-theme mb-4">
            What AI Applications Can Do
          </h3>
          <ul className="space-y-3 text-main-theme/80 text-base leading-relaxed">
            {capabilities.map((item, index) => (
              <li key={index} className="flex gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-base text-subtitle-theme mt-4">
            This allows organizations to build self-improving digital systems that drive productivity and innovation.
          </p>
        </div>
      </div>
    </section>
  );
}
