import { CheckCircle2 } from "lucide-react";

export default function WhyNobleStackSection() {
  const reasons = [
    {
      title: "We Build Before We Sell",
      desc: "Most web agencies only do client work. Noble Stack has built and shipped its own web products — npgo.to, Loopn, Create Profile Pic — using the same architecture and quality standards we apply to client projects. Our systems are tested under real-world load before we ever propose them to you."
    },
    {
      title: "AI-First by Default",
      desc: "Noble Stack is not a traditional web agency. We are an AI-first engineering company that specializes in web development. Every website or web app we build is designed to integrate AI capabilities — intelligent search, automation, personalization, and content generation — from the architecture level, not bolted on later."
    },
    {
      title: "Modern Stack, Not Legacy Technology",
      desc: "Many Nepal web companies still build with WordPress, PHP, and jQuery. Noble Stack engineers exclusively in Next.js, React, TypeScript, and Node.js — the modern stack used by Vercel, Stripe, and leading global SaaS companies. This means faster sites, better SEO, lower maintenance costs, and clean code you can build on."
    },
    {
      title: "SEO and Performance Built In",
      desc: "Noble Stack builds every website with Core Web Vitals, structured data, semantic HTML, server-side rendering, and clean URL architecture from day one. You don't need to hire an SEO agency after launch to fix what we broke. Performance is part of our engineering standards, not an afterthought."
    },
    {
      title: "Transparent Communication",
      desc: "We document everything. Scope of work, milestones, delivery dates, and change requests are handled through structured project management with regular updates. You always know where your project stands."
    },
    {
      title: "International Standards at Nepal Prices",
      desc: "Nepal's engineering talent delivers work equivalent to US and European standards — at 60–80% lower cost. Noble Stack's developers have built systems used by global users across Singapore, the US, Australia, and beyond."
    }
  ];

  return (
    <section className="py-20 relative bg-page-theme">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-main-theme mb-4">
            Why Choose Noble Stack as Your Web Development Partner in Nepal?
          </h2>
          <p className="text-lg text-theme max-w-2xl mx-auto">
            There are over 150 web development companies in Nepal. Here is what separates Noble Stack.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
          {reasons.map((reason, idx) => (
            <div key={idx} className="flex gap-4 group">
              <div className="shrink-0 mt-1">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-main-theme mb-2">{reason.title}</h3>
                <p className="text-theme leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
