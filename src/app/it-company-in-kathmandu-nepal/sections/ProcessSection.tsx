import SectionHeader from "../../../components/SectionHeader";

export default function ProcessSection() {
  const steps = [
    {
      title: "Business Requirement Analysis",
      description:
        "We start by understanding your business goals, target users, and technical needs—producing a clear scope document before any design or code begins.",
    },
    {
      title: "Strategy & Architecture",
      description:
        "We define a structured development roadmap and a scalable architecture that fits your stack, your team, and the systems you already run.",
    },
    {
      title: "UI/UX Design",
      description:
        "Our designers create intuitive, brand-aligned interfaces optimized for engagement and conversion. You review and approve before development starts.",
    },
    {
      title: "Development",
      description:
        "We build in structured sprints using a modern stack. Senior engineers review every PR, and you receive incremental builds throughout the cycle.",
    },
    {
      title: "Testing & Optimization",
      description:
        "Every system is tested for functionality, performance, security, and accessibility before delivery—not as a bolt-on after launch.",
    },
    {
      title: "Deployment & Ongoing Support",
      description:
        "We handle production deployment, monitoring, and post-launch maintenance—long-term partner, not a project-and-done agency.",
    },
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Our Development Process"
          description="A proven, structured delivery process that keeps your project on time, within scope, and ready to perform from day one."
          imageSrc="/undraw_programming_j1zw.svg"
          imageAlt="Development process illustration"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
