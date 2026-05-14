import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import CTAButton from "../../../components/CTAButton";

export default function HeroSection() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 sm:pt-28">
      <div className="absolute inset-0">
        <Image
          src="/web-dev-hero.webp"
          alt="Web developer working on dual-monitor setup with code editor open"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/75 via-blue-900/70 to-slate-900/80" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-page-theme/70" />

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10">
        <div className="w-96 h-96 bg-gradient-to-br from-indigo-400 to-blue-600 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 text-center">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 mb-12 px-6 py-3 bg-card-theme border border-theme rounded-xl hover:bg-subtle-theme transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Services</span>
        </Link>

        <h1 className="text-[32px] md:text-[45px] font-bold mb-4 text-white">
          Web Development Company in Nepal | Noble Stack
        </h1>

        <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
          Kathmandu-based Noble Stack builds fast, SEO-optimized websites and
          web apps for Nepali and global clients, engineered exclusively in
          Next.js, React, and TypeScript, and shipped with a 90+ Google
          Lighthouse score as a minimum standard.
        </p>

        <CTAButton variant="primary" href="/contact" icon={ArrowRight}>
          Schedule a Free Consultation
        </CTAButton>
      </div>
    </section>
  );
}
