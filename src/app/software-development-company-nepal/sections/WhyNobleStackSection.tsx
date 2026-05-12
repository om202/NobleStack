import SectionHeader from "../../../components/SectionHeader";

export default function WhyNobleStackSection() {
  const reasons = [
    "Scalable architecture built for high-growth startups and enterprise scale.",
    "Agile delivery with quick time-to-market, without cutting engineering corners.",
    "Modern tech stack focused on performance, security, and maintainability.",
    "Proven track record with international clients across multiple time zones.",
    "Senior engineering review on every PR, not a junior team learning on your project.",
    "Long-term partnership mindset focused on iteration and continuous improvement.",
  ];

  const principles = [
    "We build before we sell, our own products validate our engineering standards.",
    "Transparent communication with structured updates and clear deliverables.",
    "Realistic timelines with milestone-based delivery you can plan around.",
    "Clean architecture and documented code you can build on for years.",
    "Direct access to the engineers building your product, no middle layers.",
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Why Noble Stack as Your Software Partner"
          description="Choosing the right partner is the difference between a product that ships and a project that drags. Here is what makes Noble Stack a reliable choice."
          imageSrc="/undraw_team-spirit_18vw.svg"
          imageAlt="Why choose Noble Stack illustration"
        />

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-subtle-theme rounded-2xl p-6 md:p-8 border border-theme">
            <h3 className="text-xl font-semibold text-main-theme mb-4">
              What You Get
            </h3>
            <ul className="space-y-3 text-main-theme/80 text-base leading-relaxed">
              {reasons.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-subtle-theme rounded-2xl p-6 md:p-8 border border-theme">
            <h3 className="text-xl font-semibold text-main-theme mb-4">
              How We Work
            </h3>
            <ul className="space-y-3 text-main-theme/80 text-base leading-relaxed">
              {principles.map((item, index) => (
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
