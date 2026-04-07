import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 sm:pt-28">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/services/ai-software-development.webp"
          alt="Top tech companies in Nepal AI development team"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-cyan-900/60 to-indigo-900/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-page-theme/95" />

      {/* Glow accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20">
        <div className="w-96 h-96 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-full blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 text-center flex flex-col items-center">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-12 px-6 py-3 bg-card-theme border border-theme rounded-xl hover:bg-subtle-theme transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4 text-main-theme" />
          <span className="text-main-theme">Back to Home</span>
        </Link>

        {/* Title */}
        <h1 className="text-[36px] md:text-[52px] font-extrabold mb-6 text-white leading-tight">
          Top 50 Tech Companies in Nepal (2026)
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-10">
          Discover the best IT, software, and AI companies including Noble Stack. Find the right partner for your project and explore global outsourcing opportunities in Nepal&apos;s tech hub.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
            <Link
              href="#top-companies"
              className="px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-100 transition-colors w-full sm:w-auto"
            >
              Explore Companies
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-blue-600/20 border border-blue-500/50 text-white font-semibold rounded-xl hover:bg-blue-600/30 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto backdrop-blur-sm"
            >
              Work With Us <ArrowRight className="w-4 h-4" />
            </Link>
        </div>
      </div>
    </section>
  );
}
