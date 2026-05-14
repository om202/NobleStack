import SectionHeader from "../../../components/SectionHeader";

export default function WhyNobleStackSection() {
  const reasons = [
    {
      title: "We Build Before We Sell",
      description:
        "Most web agencies only do client work. Noble Stack has built and shipped its own production web products, npgo.to, Loopn, and Create Profile Pic, using the same architecture and quality standards we apply to every client engagement. Our credibility is demonstrated, not claimed.",
    },
    {
      title: "AI-First Engineering by Default",
      description:
        "Noble Stack specializes in AI-integrated web development. Every website and web application we build is designed from the ground up to support intelligent automation, personalized experiences, and LLM-powered features, not as expensive add-ons, but as a standard part of how we architect.",
    },
    {
      title: "Modern Stack, No Legacy Code",
      description:
        "Many web development companies in Nepal still build with WordPress, PHP, and jQuery. Noble Stack engineers exclusively in Next.js, React, TypeScript, and Node.js. This means faster load times, better SEO, stronger security, and codebases that are maintainable for years, not months.",
    },
    {
      title: "SEO and Performance Built Into the Code",
      description:
        "We build with Core Web Vitals, structured data (schema markup), semantic HTML, server-side rendering, and clean URL architecture from day one. You do not need to hire an SEO consultant after launch to fix what we shipped, because we ship it correctly.",
    },
    {
      title: "International Standards at Nepal Prices",
      description:
        "Noble Stack delivers engineering work equivalent to US and European standards at 60–80% lower cost. Web development hourly rates in Nepal range from $25–$99/hr. Equivalent talent in the US or UK costs $100–$250/hr. On a 3-month project, that is $20,000–$60,000 in savings without compromising quality.",
    },
    {
      title: "Transparent, Structured Communication",
      description:
        "Scope, milestones, delivery dates, and change requests are handled through structured project management with regular written updates. You always know where your project stands. No surprises at handoff.",
    },
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Why Choose Noble Stack as Your Web Development Partner in Nepal"
          description="There are over 150 web development companies in Nepal. Here is what separates Noble Stack from the rest, and why businesses in Singapore, the UK, Australia, and the US choose us for production web development."
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
