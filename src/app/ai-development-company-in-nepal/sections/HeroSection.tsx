import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 sm:pt-28">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/mohamed-nohassi--0xMiYQmk8g-unsplash.webp"
          alt="Abstract AI-themed background"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-cyan-900/55 to-indigo-900/60" />

      {/* Additional gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-page-theme/60" />

      {/* Glow accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10">
        <div className="w-96 h-96 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 text-center">
        {/* Back Link */}
        <Link
          href="/services"
          className="inline-flex items-center gap-2 mb-12 px-6 py-3 bg-card-theme border border-theme rounded-xl hover:bg-subtle-theme transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Services</span>
        </Link>

        {/* Title */}
        <h1 className="text-[32px] md:text-[45px] font-bold mb-4 text-white">
          AI Development Company in Nepal Delivering Intelligent Business
          Solutions
        </h1>

        {/* Description */}
        <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
          Noble Stack is a leading AI development company in Nepal helping
          businesses automate operations, unlock powerful data insights, and
          scale faster with intelligent technology. We design and build custom
          artificial intelligence systems that solve real business problems—not
          just experiments.
        </p>
      </div>
    </section>
  );
}

