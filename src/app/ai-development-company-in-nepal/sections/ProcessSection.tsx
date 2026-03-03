import SectionHeader from "../../../components/SectionHeader";

export default function ProcessSection() {
  const steps = [
    {
      title: "Step 1: Discovery & Assessment",
      description:
        "We analyze your business processes, goals, and data to identify where AI can create the most impact across operations, products, and customer experience.",
    },
    {
      title: "Step 2: Strategy & Architecture Design",
      description:
        "We design a scalable AI architecture tailored to your workflows, data sources, and technical stack so that solutions remain reliable and future-proof.",
    },
    {
      title: "Step 3: Development & Model Training",
      description:
        "Our AI engineers build, test, and train intelligent systems using real-world data, with a strong focus on accuracy, robustness, and explainability.",
    },
    {
      title: "Step 4: Deployment & Integration",
      description:
        "We integrate AI into your existing software, tools, and infrastructure with minimal disruption, ensuring smooth roll-out to your teams and customers.",
    },
    {
      title: "Step 5: Monitoring & Optimization",
      description:
        "We continuously monitor, measure, and optimize models and workflows so that performance, reliability, and ROI improve over time.",
    },
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="How Our AI Development Process Works"
          description="From strategy to deployment and optimization, we partner with you across the full AI lifecycle so that every system we ship is practical, maintainable, and tied to clear business outcomes."
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

