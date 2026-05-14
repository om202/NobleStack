import SectionHeader from "../../../components/SectionHeader";

export default function ProcessSection() {
  const steps = [
    {
      title: "Discovery and Planning",
      description:
        "We begin by understanding your business goals, target users, technical requirements, and competitive landscape. You receive a clear scope document, sitemap, and technical specification before any design or code is written. This stage prevents scope creep and misaligned expectations.",
    },
    {
      title: "Design and Prototyping",
      description:
        "Our designers create wireframes and high-fidelity UI mockups aligned to your brand identity. You review and approve before development begins. Every design is mobile-first, scaling up to desktop, not the reverse. Designs are tested for accessibility compliance (WCAG 2.1 AA) before handoff.",
    },
    {
      title: "Development and Testing",
      description:
        "Structured development sprints with code reviews at every stage. Lighthouse audits, cross-browser testing (Chrome, Firefox, Safari, Edge), and load testing run before delivery. TypeScript strict mode enforced. No untested code ships to production.",
    },
    {
      title: "Deployment and Launch",
      description:
        "Production deployment to Vercel, AWS, or Google Cloud, including domain configuration, SSL certificates, CDN setup, and uptime monitoring. We run a full pre-launch checklist covering SEO, performance, security headers, and analytics instrumentation. We stay available during your go-live window.",
    },
    {
      title: "Support and Iteration",
      description:
        "After launch we provide maintenance, performance monitoring, security updates, and feature development under structured monthly retainer agreements. Noble Stack is a long-term engineering partner, not a project-and-done agency.",
    },
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="How Noble Stack Delivers Web Development Projects"
          description="A structured five-stage delivery process so your project arrives on time, within scope, and ready to rank in Google from launch day."
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
