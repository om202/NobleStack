import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import CTAButton from "../../../components/CTAButton";
import { Rocket, Calendar } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 sm:pt-28">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/mohamed-nohassi--0xMiYQmk8g-unsplash.webp"
          alt="AI Software Development"
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

        {/* Featured Snippet */}
        <div className="mb-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 max-w-3xl mx-auto text-left">
          <p className="text-sm font-semibold text-blue-300 mb-2 uppercase tracking-wide">What is an AI Software Development Company?</p>
          <p className="text-base text-white/90 leading-relaxed">
            An AI software development company designs and builds applications that use artificial intelligence technologies such as machine learning, natural language processing, and predictive analytics to automate tasks, analyze data, and make intelligent decisions. These systems enable businesses to operate more efficiently, deliver personalized experiences, and scale operations with intelligent automation.
          </p>
        </div>

        {/* Title */}
        <h1 className="text-[32px] md:text-[45px] font-bold mb-6 text-white">
          AI Software Development Company for Intelligent Digital Products
        </h1>

        {/* Description */}
        <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed mb-4">
          Modern businesses generate massive amounts of data—but only companies using AI-powered software turn that data into real competitive advantage.
        </p>
        <p className="text-base text-white/80 max-w-3xl mx-auto leading-relaxed mb-4">
          Noble Stack is an experienced AI software development company that builds intelligent applications using machine learning, automation, and advanced data systems. We help organizations design and deploy custom AI solutions that improve operations, automate decision-making, and unlock new revenue opportunities.
        </p>
        <p className="text-base text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
          Build intelligent software that works faster, learns continuously, and scales with your business.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton variant="primary" icon={Rocket} href="https://calendar.app.google/mWmd6v421Pk66LQ26" className="w-full sm:w-auto">
            Start Your AI Project
          </CTAButton>
          <CTAButton variant="secondary" icon={Calendar} href="https://calendar.app.google/mWmd6v421Pk66LQ26" className="w-full sm:w-auto">
            Schedule a Free AI Consultation
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
