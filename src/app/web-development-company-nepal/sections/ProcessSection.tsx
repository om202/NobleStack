import SectionHeader from "../../../components/SectionHeader";

export default function ProcessSection() {
  const steps = [
    {
      title: "Discovery and Planning",
      description:
        "We understand your business goals, target users, technical requirements, and competitive landscape. You get a clear scope, sitemap, and technical specification before any design or code is written.",
    },
    {
      title: "Design and Prototyping",
      description:
        "Our designers create wireframes and high-fidelity UI mockups aligned to your brand. You review and approve before development begins. Every design is mobile-first, scaling up to desktop.",
    },
    {
      title: "Development and Testing",
      description:
        "Structured sprints with code reviews at every stage. Lighthouse audits, cross-browser testing, and load testing run before delivery, not as an afterthought.",
    },
    {
      title: "Deployment and Launch",
      description:
        "Production deployment to Vercel, AWS, or GCP, including domain, SSL, CDN, and monitoring. We run a full pre-launch checklist and stay available during your go-live window.",
    },
    {
      title: "Support and Iteration",
      description:
        "After launch we provide maintenance, performance monitoring, security updates, and feature development. Long-term partner, not a project-and-done agency.",
    },
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="How We Deliver Web Projects"
          description="A structured delivery process so your project arrives on time, within scope, and ready to perform from launch day."
          imageSrc="/undraw_programming_j1zw.svg"
          imageAlt="Process illustration"
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
