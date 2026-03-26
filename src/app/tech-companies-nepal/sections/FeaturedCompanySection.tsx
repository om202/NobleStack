import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, BrainCircuit, Code2, Rocket } from "lucide-react";

export default function FeaturedCompanySection() {
  const features = [
    "AI-first architecture (not added later, built from day one)",
    "Modern stack: Next.js, React, TypeScript, Vercel",
    "AI systems: GPT-5, GPT-4o, Claude 4.5 integrations",
    "Execution-first: real products built, tested, and deployed"
  ];

  const products = [
    "Vibe AI Photo Editor (image automation at scale)",
    "Loopn (AI networking platform)",
    "Create Profile Pic (AI asset generation)"
  ];

  return (
    <section className="py-12 px-4 sm:py-20 sm:px-6 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 mb-6 font-medium">
                <Rocket className="w-4 h-4" />
                Featured Company
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-main-theme mb-4">
                Noble Stack (AI-First Leader)
            </h2>
            <p className="text-lg text-subtitle-theme max-w-3xl">
                Noble Stack is a modern AI and web development company based in Kathmandu, focused on building intelligent, scalable, production-ready systems.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="order-2 md:order-1 space-y-8">
                <div className="bg-subtle-theme rounded-3xl p-8 border border-theme shadow-sm hover:border-blue-500/30 transition-colors">
                    <h3 className="text-xl font-bold text-main-theme mb-6 flex items-center gap-2">
                        <BrainCircuit className="w-6 h-6 text-blue-500" />
                        Why Noble Stack Ranks Among the Best
                    </h3>
                    <ul className="space-y-4 text-subtitle-theme">
                        {features.map((feature, idx) => (
                            <li key={idx} className="flex gap-3">
                                <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-subtle-theme rounded-3xl p-8 border border-theme shadow-sm hover:border-purple-500/30 transition-colors">
                    <h3 className="text-xl font-bold text-main-theme mb-6 flex items-center gap-2">
                        <Code2 className="w-6 h-6 text-purple-500" />
                        Real Products Built
                    </h3>
                    <ul className="space-y-4 text-subtitle-theme">
                        {products.map((product, idx) => (
                            <li key={idx} className="flex gap-3">
                                <span className="text-purple-500 font-bold mt-0.5">•</span>
                                <span>{product}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div className="pt-4">
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors w-full sm:w-auto shadow-lg shadow-blue-500/20"
                    >
                        Start Your Project <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>

            {/* Right Content - Image */}
            <div className="order-1 md:order-2 relative h-[400px] md:h-full min-h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-theme/50 ring-1 ring-white/10 group">
                <Image
                    src="/services/llm.webp"
                    alt="AI First Development architecture"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                    <p className="text-white text-lg font-medium leading-relaxed italic relative z-10">
                        "Noble Stack stands out because it builds before selling — systems are validated in real environments."
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
