import SectionHeader from "../../../components/SectionHeader";

export default function WhyChooseSection() {
  const benefits = [
    "Custom-built AI solutions—no generic templates or one-size-fits-all frameworks.",
    "Scalable architecture designed for long-term growth and future use cases.",
    "Enterprise-grade security practices around data, models, and infrastructure.",
    "A dedicated AI engineering team you can speak directly with.",
    "Transparent communication, realistic timelines, and clear deliverables.",
    "Ongoing optimization, monitoring, and support after initial launch.",
  ];

  const trustReasons = [
    "Production-ready AI systems that move beyond proof-of-concept prototypes.",
    "Reliable project timelines with structured milestones and checkpoints.",
    "Clear ROI measurement tied to efficiency, revenue, or customer outcomes.",
    "Ethical and secure AI development aligned with your compliance needs.",
    "Long-term partnership mindset focused on iteration and improvement.",
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Why Work with Noble Stack for AI Development?"
          description="Choosing the right AI company in Nepal makes all the difference. We focus on real outcomes—not hype—and design AI systems that your business can operate, trust, and scale."
          imageSrc="/undraw_team-spirit_18vw.svg"
          imageAlt="Why choose us illustration"
        />

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-subtle-theme rounded-2xl p-6 md:p-8 border border-theme">
            <h3 className="text-xl font-semibold text-main-theme mb-4">
              Benefits of Partnering with Us
            </h3>
            <ul className="space-y-3 text-main-theme/80 text-base leading-relaxed">
              {benefits.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-subtle-theme rounded-2xl p-6 md:p-8 border border-theme">
            <h3 className="text-xl font-semibold text-main-theme mb-4">
              Why Companies Trust Noble Stack
            </h3>
            <ul className="space-y-3 text-main-theme/80 text-base leading-relaxed">
              {trustReasons.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

