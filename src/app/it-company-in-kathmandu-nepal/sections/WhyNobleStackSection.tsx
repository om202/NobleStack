import SectionHeader from "../../../components/SectionHeader";

export default function WhyNobleStackSection() {
  const strengths = [
    "AI-first architecture, built into every product from day one, not bolted on later.",
    "Modern stack: Next.js, React, TypeScript, Node.js, AWS, and Vercel.",
    "Senior engineering review on every pull request, no junior team learning on your project.",
    "Real shipped products under real-world load, not just client decks.",
    "SEO and performance built in, not added by an agency after launch.",
    "Long-term technical support and maintenance after delivery.",
  ];

  const principles = [
    "Transparent communication with clear scope, milestones, and weekly updates.",
    "Affordable IT services in Kathmandu without compromising on engineering quality.",
    "Business-focused technology decisions, not framework-of-the-week chasing.",
    "Scalable products designed for long-term growth and future expansion.",
    "Direct access to the engineers building your product, no middle layers.",
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Why Noble Stack Is a Trusted IT Company in Kathmandu"
          description="Choosing the right IT partner is the difference between a product that ships and a project that drags. Here is what makes Noble Stack different."
          imageSrc="/undraw_team-spirit_18vw.svg"
          imageAlt="Why Noble Stack illustration"
        />

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-subtle-theme rounded-2xl p-6 md:p-8 border border-theme">
            <h3 className="text-xl font-semibold text-main-theme mb-4">
              What You Get
            </h3>
            <ul className="space-y-3 text-main-theme/80 text-base leading-relaxed">
              {strengths.map((item, index) => (
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
