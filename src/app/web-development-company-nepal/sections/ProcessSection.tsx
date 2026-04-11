export default function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Discovery and Planning",
      desc: "We start by understanding your business goals, target users, technical requirements, and competitive landscape. We produce a clear project scope, sitemap, and technical specification before any design or code is written."
    },
    {
      num: "02",
      title: "Design and Prototyping",
      desc: "Our designers create wireframes and high-fidelity UI mockups aligned with your brand. You review and approve designs before development begins. We build mobile-first — every design is optimized for smartphones before it scales to desktop."
    },
    {
      num: "03",
      title: "Development and Testing",
      desc: "We build in structured sprints with code reviews at every stage. Every component is tested for functionality, performance, and accessibility. We run Lighthouse audits, cross-browser testing, and load testing before delivery."
    },
    {
      num: "04",
      title: "Deployment and Launch",
      desc: "We handle production deployment to Vercel, AWS, or GCP — including domain setup, SSL configuration, CDN integration, and monitoring. We conduct a full pre-launch checklist and stay available during your go-live window."
    },
    {
      num: "05",
      title: "Support and Iteration",
      desc: "After launch, Noble Stack provides maintenance, performance monitoring, security updates, and feature development. We are a long-term partner, not a project-and-done agency."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-page-theme">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-main-theme mb-4">
            How We Deliver Web Projects
          </h2>
          <p className="text-lg text-theme max-w-2xl mx-auto">
            Noble Stack follows a structured delivery process so your project arrives on time, within scope, and ready to perform.
          </p>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-theme before:to-transparent">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-page-theme bg-blue-500 text-white font-bold text-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow shadow-blue-500/20 z-10">
                {step.num}
              </div>
              
              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card-theme border border-theme p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-main-theme mb-3">{step.title}</h3>
                <p className="text-theme leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
