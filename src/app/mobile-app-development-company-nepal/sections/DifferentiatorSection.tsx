import { Cpu, Rocket, Code2, LineChart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function DifferentiatorSection() {
  const cards = [
    {
      icon: <Rocket className="w-6 h-6 text-indigo-500" />,
      title: "Real Products. Not Just Client Projects.",
      description: "Vibe AI Photo Editor is live on the US, Singapore, Australia, and Nepal Apple App Store right now. That is verifiable proof of production mobile engineering — something no other Nepal-based mobile company can match with a public, downloadable product."
    },
    {
      icon: <Cpu className="w-6 h-6 text-blue-500" />,
      title: "AI Is the Foundation, Not a Feature",
      description: "Noble Stack is Nepal's only AI-first mobile development company. We design every mobile application with AI capabilities built into the architecture from the first planning session. Without a costly rebuild later."
    },
    {
      icon: <Code2 className="w-6 h-6 text-indigo-500" />,
      title: "Modern Stack. Zero Legacy Code.",
      description: "Swift and SwiftUI for iOS. Kotlin and Jetpack Compose for Android. React Native and Flutter for cross-platform. No outdated hybrid wrappers. No shortcuts that create technical debt you inherit."
    },
    {
      icon: <LineChart className="w-6 h-6 text-blue-500" />,
      title: "International Quality at Nepal Pricing",
      description: "Noble Stack's engineers deliver output equivalent to US and European development teams at 60–80% lower cost. Quality that matches or exceeds Western agencies at a fraction of the price."
    }
  ];

  return (
    <section className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-main-theme mb-6">
          Why Noble Stack Is Different from Other Mobile App Developers in Nepal
        </h2>
        <p className="text-lg text-muted-theme">
          Most mobile development agencies in Nepal only do client work. Noble Stack builds its own products. We have designed, developed, and launched Vibe AI Photo Editor operating under real-world load.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {cards.map((card, index) => (
          <div key={index} className="bg-card-theme border border-theme rounded-2xl p-8 hover:border-blue-500/50 transition-colors shadow-sm hover:shadow-md">
            <div className="w-12 h-12 bg-subtle-theme rounded-xl flex items-center justify-center mb-6">
              {card.icon}
            </div>
            <h3 className="text-xl font-bold text-main-theme mb-4">{card.title}</h3>
            <p className="text-muted-theme leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>

      <div className="max-w-5xl mx-auto mt-12 bg-blue-600 rounded-2xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-3">Transparent Communication and Delivery</h3>
          <p className="text-blue-100 max-w-xl">
            Structured project management with weekly written updates, milestone-based delivery, code repository access, and documented scope. We communicate in English and adjust to your timezone.
          </p>
        </div>
        <Link 
          href="/contact"
          className="shrink-0 px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors"
        >
          Work With Us
        </Link>
      </div>
    </section>
  );
}
