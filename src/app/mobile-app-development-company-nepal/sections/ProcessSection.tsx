export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Discovery and Planning",
      description: "Before any design begins, we define your target users, core use cases, technical requirements, platform strategy (iOS-first, Android-first, or cross-platform), and third-party integrations.",
      deliverable: "Project specification document, scope agreement, timeline with milestones."
    },
    {
      number: "02",
      title: "UI/UX Design",
      description: "Our designers create wireframes and high-fidelity mobile UI mockups that are intuitive, brand-aligned, and built around platform conventions. iOS designs follow Apple's HIG. Android follows Material 3.",
      deliverable: "Clickable prototype, approved UI designs, component library."
    },
    {
      number: "03",
      title: "Development in Sprints",
      description: "We build in structured 2-week sprints. At the end of every sprint, you receive a working build on your physical device via TestFlight (iOS) or Google Play internal track (Android). Code is reviewed by a senior engineer on every PR.",
      deliverable: "Working incremental builds every 2 weeks, code repository with full access."
    },
    {
      number: "04",
      title: "Quality Assurance",
      description: "Every Noble Stack mobile app goes through structured QA. We test functionality, performance under load, security (OWASP Mobile Top 10), cross-device compatibility, and accessibility.",
      deliverable: "QA report, tested production build, resolved issue log."
    },
    {
      number: "05",
      title: "Deployment and Launch",
      description: "We manage the complete App Store Connect and Google Play Console submission process. App review submission, screenshot design, ASO keyword optimization, and compliance review.",
      deliverable: "Live app on App Store and/or Google Play."
    },
    {
      number: "06",
      title: "Post-Launch Support",
      description: "After launch, we monitor crash reports via Firebase Crashlytics, track performance metrics, respond to user feedback, and release updates. We are a long-term engineering partner.",
      deliverable: "Maintenance plan, SLA agreement, ongoing support channel."
    }
  ];

  return (
    <section className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-main-theme mb-6">
          How Noble Stack Builds Mobile Apps — Our 6-Step Process
        </h2>
        <p className="text-lg text-muted-theme">
          Noble Stack follows a structured delivery process that reduces risk, keeps you informed at every stage, and produces production-ready apps that perform under real-world conditions.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col sm:flex-row gap-6 bg-card-theme p-6 sm:p-8 rounded-2xl border border-theme hover:border-blue-500/30 transition-colors">
            <div className="shrink-0 w-16 h-16 bg-blue-500/10 text-blue-500 rounded-2xl flex items-center justify-center text-2xl font-bold border border-blue-500/20">
              {step.number}
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-main-theme">{step.title}</h3>
              <p className="text-muted-theme leading-relaxed">
                {step.description}
              </p>
              <div className="bg-subtle-theme border border-theme rounded-xl p-4 text-sm">
                <span className="font-semibold text-main-theme block mb-1">Deliverable:</span> 
                <span className="text-muted-theme">{step.deliverable}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
