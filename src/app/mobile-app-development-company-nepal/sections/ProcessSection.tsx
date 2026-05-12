import SectionHeader from "../../../components/SectionHeader";

export default function ProcessSection() {
  const steps = [
    {
      title: "Discovery and Planning",
      description:
        "We define your target users, core use cases, technical requirements, platform strategy, and third-party integrations.",
      deliverable: "Project specification, scope agreement, milestone timeline.",
    },
    {
      title: "UI/UX Design",
      description:
        "Wireframes and high-fidelity mobile UI mockups, intuitive, brand-aligned, and built around platform conventions. iOS follows Apple's HIG. Android follows Material 3.",
      deliverable: "Clickable prototype, approved UI, component library.",
    },
    {
      title: "Development in Sprints",
      description:
        "Structured 2-week sprints. At the end of every sprint, you receive a working build via TestFlight (iOS) or Google Play internal track (Android). Senior engineer review on every PR.",
      deliverable: "Working incremental builds every 2 weeks, full repo access.",
    },
    {
      title: "Quality Assurance",
      description:
        "Structured QA covering functionality, performance under load, security (OWASP Mobile Top 10), cross-device compatibility, and accessibility.",
      deliverable: "QA report, tested production build, resolved issue log.",
    },
    {
      title: "Deployment and Launch",
      description:
        "Complete App Store Connect and Google Play Console submission, app review, screenshot design, ASO keyword optimization, and compliance review.",
      deliverable: "Live app on App Store and/or Google Play.",
    },
    {
      title: "Post-Launch Support",
      description:
        "After launch, we monitor crashes via Firebase Crashlytics, track performance, respond to user feedback, and ship updates. Long-term engineering partner.",
      deliverable: "Maintenance plan, SLA agreement, ongoing support channel.",
    },
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="How Noble Stack Builds Mobile Apps"
          description="A structured 6-step delivery process that reduces risk, keeps you informed at every stage, and produces production-ready apps that perform under real-world conditions."
          imageSrc="/undraw_programming_j1zw.svg"
          imageAlt="Process illustration"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-subtle-theme rounded-2xl p-6 md:p-7 border border-theme flex flex-col"
            >
              <p className="text-sm font-semibold text-main-theme/70 mb-2">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="text-lg md:text-xl font-semibold text-main-theme mb-3">
                {step.title}
              </h3>
              <p className="text-base text-subtitle-theme leading-relaxed mb-4 flex-grow">
                {step.description}
              </p>
              <div className="bg-card-theme border border-theme rounded-xl p-4 text-sm">
                <span className="font-semibold text-main-theme block mb-1">
                  Deliverable
                </span>
                <span className="text-subtitle-theme">{step.deliverable}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
