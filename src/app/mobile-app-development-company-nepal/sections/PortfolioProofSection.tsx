import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Zap, CalendarDays } from "lucide-react";

export default function PortfolioProofSection() {
  const portfolios = [
    {
      title: "Vibe AI Photo Editor — Live on Apple App Store",
      platforms: "iOS (iPhone and iPad)",
      tech: "Swift, SwiftUI, CoreML, cloud AI processing",
      status: "Live and downloadable globally",
      description: "Vibe AI is an AI-powered photo editing app for iPhone. Users can remove image backgrounds instantly using AI, enhance photo quality automatically, and create professional-grade profile pictures — all within the app on iOS.",
      highlight: "This is not a demo or client project. It is Noble Stack's own product, built by our team, shipped to the App Store, and used by real users.",
      link: "https://apps.apple.com/us/app/ai-photo-editor-vibe/id6752835683",
      image: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&q=80&w=800",
      icon: <BadgeCheck className="w-5 h-5 text-blue-500" />
    },
    {
      title: "Auto Captions — AI Subtitle Generator",
      platforms: "iOS and Android",
      tech: "React Native, AI speech-to-text, multilingual NLP",
      status: "In development",
      description: "Auto Captions generates accurate subtitles and captions for video content automatically. It supports multiple languages and syncs captions precisely to video timing using AI.",
      highlight: "Built for content creators, educators, and businesses who need accessible video content without manual transcription work.",
      link: "/products",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
      icon: <Zap className="w-5 h-5 text-indigo-500" />
    },
    {
      title: "Noble Appointments — Nepali Calendar App",
      platforms: "iOS and Android",
      tech: "Flutter, Bikram Sambat date calculation engine",
      status: "In development",
      description: "Noble Appointments is a fully Nepali Bikram Sambat (BS) calendar application built specifically for Nepali businesses and individuals. It handles BS-to-AD date conversion, Nepali festivals and holidays, and business scheduling workflows.",
      highlight: "The first calendar app built natively around Nepal's official calendar system.",
      link: "/products",
      image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800",
      icon: <CalendarDays className="w-5 h-5 text-blue-400" />
    }
  ];

  return (
    <section className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-main-theme mb-6">
          Mobile Apps Built and Shipped by Noble Stack
        </h2>
        <p className="text-lg text-muted-theme">
          Noble Stack does not describe mobile development capability. We demonstrate it.
        </p>
      </div>

      <div className="space-y-12 max-w-6xl mx-auto">
        {portfolios.map((item, index) => (
          <div key={index} className="grid md:grid-cols-2 gap-8 items-center bg-card-theme p-6 sm:p-8 rounded-3xl border border-theme hover:border-blue-500/30 transition-colors">
            <div className={`space-y-6 ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-subtle-theme text-sm font-semibold rounded-full border border-theme">
                {item.icon}
                <span className="text-main-theme">{item.status}</span>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-main-theme mb-3">{item.title}</h3>
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-theme mb-4">
                  <p><span className="font-semibold text-main-theme">Platform:</span> {item.platforms}</p>
                  <p><span className="font-semibold text-main-theme">Tech:</span> {item.tech}</p>
                </div>
                <p className="text-muted-theme leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/50 rounded-xl text-sm font-medium text-blue-800 dark:text-blue-200">
                {item.highlight}
              </div>

              <Link 
                href={item.link}
                target={item.link.startsWith("http") ? "_blank" : undefined}
                rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                {item.title.includes("Vibe AI") ? "Download on App Store" : "Learn More"}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className={`relative aspect-video sm:aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-lg ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
              <Image 
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link 
          href="/products"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-main-theme bg-card-theme border border-theme hover:bg-subtle-theme rounded-xl transition-all"
        >
          View All Products
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
