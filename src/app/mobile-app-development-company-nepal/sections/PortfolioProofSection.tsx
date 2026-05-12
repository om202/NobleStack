import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeader from "../../../components/SectionHeader";
import CTAButton from "../../../components/CTAButton";

export default function PortfolioProofSection() {
  const portfolios = [
    {
      title: "Vibe AI Photo Editor",
      status: "Live on Apple App Store",
      platforms: "iOS (iPhone & iPad)",
      tech: "Swift, SwiftUI, CoreML, cloud AI processing",
      description:
        "An AI-powered photo editing app for iPhone. Users remove image backgrounds instantly with AI, enhance photo quality automatically, and create professional-grade profile pictures, all on iOS.",
      highlight:
        "This is not a demo or client project. It is Noble Stack's own product, built by our team, shipped to the App Store, and used by real users globally.",
      linkText: "Download on App Store",
      link: "https://apps.apple.com/us/app/ai-photo-editor-vibe/id6752835683",
    },
    {
      title: "Auto Captions",
      status: "In development",
      platforms: "iOS and Android",
      tech: "React Native, AI speech-to-text, multilingual NLP",
      description:
        "An AI subtitle generator that creates accurate captions for video content automatically. Supports multiple languages and syncs precisely to video timing using AI.",
      highlight:
        "Built for content creators, educators, and businesses who need accessible video without manual transcription work.",
      linkText: "Learn More",
      link: "/products",
    },
    {
      title: "Noble Appointments",
      status: "In development",
      platforms: "iOS and Android",
      tech: "Flutter, Bikram Sambat date engine",
      description:
        "A fully Nepali Bikram Sambat (BS) calendar app built specifically for Nepali businesses and individuals. BS-to-AD conversion, Nepali festivals and holidays, and business scheduling workflows.",
      highlight:
        "The first calendar app built natively around Nepal's official calendar system.",
      linkText: "Learn More",
      link: "/products",
    },
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Mobile Apps Built and Shipped by Noble Stack"
          description="We do not describe mobile development capability. We demonstrate it through real products, live on the App Store and downloadable today."
          imageSrc="/undraw_portfolio_btd8.svg"
          imageAlt="Portfolio illustration"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {portfolios.map((item, idx) => (
            <div
              key={idx}
              className="bg-subtle-theme rounded-2xl p-6 md:p-7 border border-theme flex flex-col"
            >
              <span className="inline-block px-3 py-1 bg-card-theme border border-theme text-xs font-semibold text-main-theme rounded-full mb-4 self-start">
                {item.status}
              </span>

              <h3 className="text-lg md:text-xl font-semibold text-main-theme mb-3">
                {item.title}
              </h3>

              <div className="text-sm text-subtitle-theme space-y-1 mb-4">
                <p>
                  <span className="font-semibold text-main-theme">Platform:</span>{" "}
                  {item.platforms}
                </p>
                <p>
                  <span className="font-semibold text-main-theme">Tech:</span>{" "}
                  {item.tech}
                </p>
              </div>

              <p className="text-base text-subtitle-theme leading-relaxed mb-4">
                {item.description}
              </p>

              <p className="text-sm text-main-theme/80 italic leading-relaxed mb-6 pt-4 border-t border-theme">
                {item.highlight}
              </p>

              <Link
                href={item.link}
                target={item.link.startsWith("http") ? "_blank" : undefined}
                rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 text-main-theme font-medium hover:text-blue-500 transition-colors mt-auto"
              >
                {item.linkText}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <CTAButton variant="secondary" href="/products" icon={ArrowRight}>
            View All Products
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
