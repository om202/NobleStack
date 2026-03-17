import SectionHeader from "../../../components/SectionHeader";

export default function ProcessSection() {
  const steps = [
    {
      title: "Requirement Analysis",
      description:
        "We understand your business goals, identify challenges, and determine how artificial intelligence can create value.",
    },
    {
      title: "Data Preparation",
      description:
        "Our team collects, cleans, and structures data to ensure that machine learning models perform accurately.",
    },
    {
      title: "AI Model Development",
      description:
        "Our engineers design and train machine learning models using advanced algorithms and training techniques.",
    },
    {
      title: "Testing & Optimization",
      description:
        "AI models are tested extensively and optimized to improve accuracy, performance, and scalability.",
    },
    {
      title: "Deployment & Integration",
      description:
        "AI solutions are deployed into production environments and integrated with existing software platforms.",
    },
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="AI Development Process"
          description="A structured development process ensures that AI solutions are designed effectively and deliver measurable results."
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
