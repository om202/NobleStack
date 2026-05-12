import SectionHeader from "../../../components/SectionHeader";

export default function ProcessSection() {
  const steps = [
    {
      title: "Requirement Analysis",
      description:
        "We start by understanding your business goals, target users, and technical needs—producing a clear scope document before any design or code is written.",
    },
    {
      title: "UI/UX Design",
      description:
        "Our designers create intuitive, brand-aligned interfaces. You review and approve high-fidelity designs before development begins.",
    },
    {
      title: "Development",
      description:
        "We build in structured sprints using modern tech stacks. Senior engineers review every PR, and you get incremental builds throughout the cycle.",
    },
    {
      title: "Testing & QA",
      description:
        "Rigorous functional, performance, and security testing across devices and environments to ensure reliability before release.",
    },
    {
      title: "Deployment",
      description:
        "Production deployment with automated CI/CD pipelines, domain and SSL setup, monitoring, and a full pre-launch checklist.",
    },
    {
      title: "Maintenance & Support",
      description:
        "Ongoing maintenance, security patches, performance monitoring, and feature development—we are a long-term partner, not a project-and-done agency.",
    },
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Our Software Development Process"
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
