import SectionHeader from "../../../../components/SectionHeader";

export default function ProcessSection() {
  const steps = [
    {
      title: "AI Strategy & Discovery",
      description:
        "We analyze your business goals, workflows, and data infrastructure to identify high-impact AI opportunities.",
    },
    {
      title: "Architecture Design",
      description:
        "Our engineers design scalable AI architectures including machine learning pipelines and cloud infrastructure.",
    },
    {
      title: "Model Development",
      description:
        "AI models are trained using real datasets and optimized for accuracy and performance in production environments.",
    },
    {
      title: "Software Development & Integration",
      description:
        "The AI system is integrated into web platforms, SaaS applications, APIs, or internal enterprise tools.",
    },
    {
      title: "Deployment & Continuous Improvement",
      description:
        "After launch, we monitor system performance and continuously improve models based on real usage data.",
    },
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Our AI Software Development Process"
          description="From strategy to deployment and continuous improvement, we follow a structured process designed to deliver production-ready AI systems."
          imageSrc="/undraw_programming_j1zw.svg"
          imageAlt="AI development process illustration"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-subtle-theme rounded-2xl p-6 md:p-7 border border-theme"
            >
              <p className="text-sm font-semibold text-main-theme/70 mb-2">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="text-lg md:text-xl font-semibold text-main-theme mb-3">
                {step.title}
              </h3>
              <p className="text-base text-subtitle-theme leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
