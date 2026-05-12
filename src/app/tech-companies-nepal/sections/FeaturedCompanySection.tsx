import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";
import SectionHeader from "../../../components/SectionHeader";
import CTAButton from "../../../components/CTAButton";

export default function FeaturedCompanySection() {
  const features = [
    "AI-first architecture, built into the stack from day one",
    "Modern stack: Next.js, React, TypeScript, Vercel",
    "AI integrations with GPT-5, GPT-4o, Claude 4.5",
    "Execution-first—real products built, tested, and deployed",
  ];

  const products = [
    "Vibe AI Photo Editor (image automation at scale)",
    "Loopn (AI-powered networking platform)",
    "Create Profile Pic (AI asset generation)",
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Featured: Noble Stack"
          description="Noble Stack is a modern AI and web development company based in Kathmandu, focused on building intelligent, scalable, production-ready systems for global clients."
          imageSrc="/nbl.webp"
          imageAlt="Noble Stack logo"
          imageSize="small"
        />

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-subtle-theme rounded-2xl p-6 md:p-8 border border-theme">
            <h3 className="text-xl font-semibold text-main-theme mb-4">
              Why Noble Stack Ranks Among the Best
            </h3>
            <ul className="space-y-3 text-main-theme/80 text-base leading-relaxed">
              {features.map((feature, idx) => (
                <li key={idx} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-subtle-theme rounded-2xl p-6 md:p-8 border border-theme">
            <h3 className="text-xl font-semibold text-main-theme mb-4">
              Real Products Built and Shipped
            </h3>
            <ul className="space-y-3 text-main-theme/80 text-base leading-relaxed">
              {products.map((product, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>{product}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-subtle-theme rounded-2xl p-6 md:p-8 border border-theme">
          <div className="grid md:grid-cols-[1fr_auto] gap-6 items-center">
            <p className="text-base md:text-lg text-main-theme/80 italic leading-relaxed">
              &ldquo;Noble Stack stands out because it builds before selling—systems
              are validated in real environments before they are sold to clients.&rdquo;
            </p>
            <div className="flex justify-center md:justify-end">
              <CTAButton variant="secondary" href="/contact" icon={ArrowRight}>
                Start Your Project
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
