import SectionHeader from "../../../components/SectionHeader";

export default function WhyNobleStackSection() {
  const reasons = [
    {
      title: "We Build Before We Sell",
      description:
        "Most web agencies only do client work. We have built and shipped our own web products—npgo.to, Loopn, Create Profile Pic—using the same architecture and quality standards we apply to client projects.",
    },
    {
      title: "AI-First by Default",
      description:
        "Noble Stack is an AI-first engineering company that specializes in web development. Every site we build is designed to integrate AI capabilities—intelligent search, automation, personalization—from the architecture level.",
    },
    {
      title: "Modern Stack, Not Legacy",
      description:
        "Many Nepal web companies still build with WordPress, PHP, and jQuery. We engineer exclusively in Next.js, React, TypeScript, and Node.js—the stack used by Vercel, Stripe, and leading global SaaS companies.",
    },
    {
      title: "SEO and Performance Built In",
      description:
        "We build with Core Web Vitals, structured data, semantic HTML, server-side rendering, and clean URL architecture from day one. You don't need an SEO agency afterwards to fix what we shipped.",
    },
    {
      title: "Transparent Communication",
      description:
        "Scope, milestones, delivery dates, and change requests are handled through structured project management with regular updates. You always know where your project stands.",
    },
    {
      title: "International Standards at Nepal Prices",
      description:
        "Nepali engineering talent delivers work equivalent to US and European standards—at 60–80% lower cost. Our developers have built systems used by global users.",
    },
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Why Choose Noble Stack as Your Web Partner"
          description="There are over 150 web development companies in Nepal. Here is what separates Noble Stack from the rest."
          imageSrc="/undraw_team-spirit_18vw.svg"
          imageAlt="Why choose Noble Stack illustration"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="bg-subtle-theme rounded-2xl p-6 md:p-7 border border-theme"
            >
              <h3 className="text-lg md:text-xl font-semibold text-main-theme mb-3">
                {reason.title}
              </h3>
              <p className="text-base text-subtitle-theme leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
