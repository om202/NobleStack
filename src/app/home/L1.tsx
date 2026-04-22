import React from "react";

import Link from "next/link";
import {
  Phone,
  Box,
  ArrowRight,
} from "lucide-react";
import {
  SiReact,
  SiOpenai,
  SiZapier,
  SiApple,
} from "react-icons/si";
import Image from "next/image";
import ServiceCard from "../../components/ServiceCard";
import CTAButton from "../../components/CTAButton";
import SectionHeader from "../../components/SectionHeader";
import CSSGlobe from "../../components/CSSGlobe";

export default function HeroSection() {

  const expertiseAreas = [
    {
      title: "Full-Stack Product Engineering",
      description: "Robust, full-stack systems from frontend to backend to infrastructure with code quality and scalability at the core.",
      icon: SiReact,
      backgroundImage: "/services/full-stack.webp",
      gradientOverlay: "bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100 dark:from-blue-900/60 dark:via-cyan-900/55 dark:to-indigo-900/60",
      href: "/Services/full-stack-engineering",
    },
    {
      title: "LLM-Powered AI Systems",
      description: "Systems that leverage cutting-edge language models to reason, retrieve, and respond seamlessly into your product.",
      icon: SiOpenai,
      backgroundImage: "/services/llm.webp",
      gradientOverlay: "bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100 dark:from-blue-900/60 dark:via-cyan-900/55 dark:to-indigo-900/60",
      href: "/Services/llm-ai-systems",
    },
    {
      title: "End-to-End Automation Systems",
      description: "Automation pipelines that save time, reduce human error, and scale with your growth.",
      icon: SiZapier,
      backgroundImage: "/services/automation.webp",
      gradientOverlay: "bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100 dark:from-blue-900/60 dark:via-cyan-900/55 dark:to-indigo-900/60",
      href: "/Services/automation-systems",
    },
    {
      title: "iOS & Android Apps",
      description: "Native and cross-platform mobile applications that deliver seamless experiences on iOS and Android.",
      icon: SiApple,
      backgroundImage: "/services/mobile-apps.webp",
      gradientOverlay: "bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100 dark:from-blue-900/60 dark:via-cyan-900/55 dark:to-indigo-900/60",
      href: "/Services/mobile-apps",
    },
  ];

  return (
    <section className="min-h-screen">
      {/* Hero Section with Network Background - Full Width */}
      <div className="relative w-full overflow-hidden">
        {/* Preload Background Images for fast LCP setup */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 light-mode-img">
            <Image
              src="/hero_gradient_light.webp"
              alt="Noble Stack AI and web development company Kathmandu Nepal"
              fill
              priority
              fetchPriority="high"
              quality={90}
              className="object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 dark-mode-img">
            <Image
              src="/hero_gradient.webp"
              alt="Noble Stack AI and web development company Kathmandu Nepal"
              fill
              priority
              fetchPriority="high"
              quality={90}
              className="object-cover object-center"
            />
          </div>
        </div>
        <div className="relative pt-28 pb-24 sm:pt-36 sm:pb-32 md:pt-44 md:pb-40">
          <CSSGlobe />

          {/* Content */}
          <div className="max-w-7xl mx-auto px-4">
            <div className="relative z-10">
              {/* Left-aligned on desktop, centered on mobile */}
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left max-w-2xl mx-auto lg:mx-0">
                <h2 className="text-[32px] md:text-[45px] mb-6 leading-tight text-main-theme font-serif text-engraved">
                  Top IT Company in Kathmandu, Nepal — AI-Powered Software & Web Solutions
                </h2>
                {/* SEO FIX: single H1 enforced */}
                <div className="mb-6">
                  <h1 className="text-xl md:text-2xl font-semibold text-main-theme">
                    We Build Scalable, AI-Driven Products For Your Business
                  </h1>
                </div>

                {/* SEO FIX: keyword density reduced */}
                <p className="text-lg text-subtitle-theme mb-8">
                  Noble Stack is an innovative technology firm building intelligent, scalable software products for businesses worldwide. We specialize in AI-driven web development, mobile apps, and full-stack solutions. Whether you need a cutting-edge SaaS platform, a business automation system, or custom engineered tech — our expert team delivers results that matter.
                </p>

                {/* Call to Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start mb-10 mt-8 sm:mt-16">
                  {/* SEO FIX: CTA optimized */}
                  <CTAButton variant="primary" icon={Phone} iconPosition="left" className="w-full sm:w-auto" href="https://calendar.app.google/mWmd6v421Pk66LQ26" shine>
                    Schedule a Free Consultation
                  </CTAButton>
                  <CTAButton variant="secondary" icon={Box} iconPosition="left" href="/products" className="w-full sm:w-auto">
                    Explore Our AI Products
                  </CTAButton>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>

      {/* npgo.to Section - Overlapping Hero */}
      <section id="npgoto" aria-label="npgo.to - Free URL Shortener for Nepal" className="max-w-7xl mx-auto px-3 -mt-12 sm:-mt-16 md:-mt-20 relative z-20">
        <div className="bg-card-theme rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm border border-theme mb-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Left side - Logo and Description */}
            <div className="flex-2 space-y-6">
              <div className="flex items-center gap-4">
                <Image
                  src="/npgoto.webp"
                  alt="npgo.to free URL shortener Nepal by Noble Stack"
                  width={64}
                  height={64}
                  className="rounded-lg"
                  style={{ width: 'auto', height: 'auto' }}
                  loading="lazy"
                />
                <div>
                  <h2 className="text-2xl font-serif text-main-theme mb-2">New Product Launch</h2>
                  <p className="text-lg font-semibold text-subtitle-theme">
                    {/* SEO FIX: keyword-rich internal link */}
                    <a href="https://npgo.to" className="hover:underline">Free URL Shortener for Nepal</a>
                  </p>
                </div>
              </div>

              <p className="text-base text-subtitle-theme leading-relaxed">
                Stop wasting time with complicated URL shorteners. Get your free, Nepal-made URL shortener and QR code generator built for Nepali businesses.
                Shorten URLs in seconds and manage everything from one dashboard.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                {/* SEO FIX: CTA optimized */}
                <CTAButton
                  variant="secondary"
                  href="https://npgo.to/"
                  icon={ArrowRight}
                  className="w-full sm:w-auto"
                >
                  Try Nepal's Free URL Shortener
                </CTAButton>
              </div>
            </div>

            {/* Right side - Screenshot */}
            <div className="flex-1 w-full max-w-md">
              <a
                href="https://npgo.to/"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl overflow-hidden border border-theme shadow-lg hover:shadow-xl transition-shadow"
              >
                {/* SEO FIX: keyword alt text added */}
                <Image
                  src="/npgoto_screen.webp"
                  alt="npgo.to free URL shortener Nepal by Noble Stack"
                  width={800}
                  height={600}
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="w-full h-auto"
                  style={{ width: '100%', height: 'auto' }}
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" aria-label="Our Expertise" className="max-w-7xl mx-auto px-3 pb-4 sm:px-4 sm:pb-8">
        <div className="bg-card-theme rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm border border-theme mb-8">
          {/* SEO FIX: keyword-rich heading & alt text added */}
          <SectionHeader
            title="Our Web, Mobile & AI Development Expertise"
            description="Core technologies and methodologies we use to build exceptional digital products."
            imageSrc="/undraw_dev-environment_n5by.svg"
            imageAlt="Web mobile and AI development expertise Nepal"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {expertiseAreas.map((area, index) => (
              <Link
                key={index}
                href={area.href}
                className="block h-full"
              >
                <ServiceCard
                  name={area.title}
                  description={area.description}
                  icon={area.icon}
                  backgroundImage={area.backgroundImage}
                  gradientOverlay={area.gradientOverlay}
                />
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            {/* SEO FIX: CTA optimized */}
            <CTAButton variant="secondary" href="/services" icon={ArrowRight}>
              View All IT Services
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" aria-label="Our Products" className="max-w-7xl mx-auto px-3 pb-4 sm:px-4 sm:pb-8">
        <div className="bg-card-theme rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm border border-theme">
          {/* SEO FIX: keyword-rich heading & alt text added */}
          <SectionHeader
            title="Real AI & Software Products Built by Our Nepal Team"
            description="From AI-powered mobile apps to professional networking platforms, explore the real-world products we've designed, developed, and launched for clients worldwide."
            imageSrc="/undraw_programming_j1zw.svg"
            imageAlt="AI software products built by Noble Stack Nepal team"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {/* Vibe AI */}
            {/* SEO FIX: keyword-rich internal link */}
            <Link
              href="/products/vibe-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <ServiceCard
                name="AI Photo Editor App by Noble Stack"
                description="Professional photo editing made simple. Remove backgrounds and enhance images with AI."
                imageSrc="/vibe.webp"
                imageAlt="Vibe AI photo editor app built by Noble Stack"
              />
            </Link>

            {/* npgo.to */}
            {/* SEO FIX: keyword-rich internal link */}
            <Link
              href="https://npgo.to"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <ServiceCard
                name="Free URL Shortener for Nepal"
                description="Free URL shortener and QR code generator made for Nepal. Shorten links instantly and track clicks."
                imageSrc="/npgoto.webp"
                imageAlt="npgo.to free URL shortener Nepal by Noble Stack"
              />
            </Link>

            {/* Loopn */}
            {/* SEO FIX: keyword-rich internal link */}
            <Link
              href="/products/loopn"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <ServiceCard
                name="AI Career Matching Platform Nepal"
                description="Professional Networking & Career Matching using AI. Resume matching for career growth."
                imageSrc="/loopn_logo.webp"
                imageAlt="Loopn AI career matching platform Nepal"
              />
            </Link>

            {/* Noble Appointments */}
            {/* SEO FIX: keyword-rich internal link */}
            <Link
              href="/products/noble-appointments"
              className="block h-full relative"
            >
              <ServiceCard
                name="Bikram Sambat Calendar App Nepal"
                description="Fully Nepali Bikram Sambat based calendar — specially built for Nepali businesses in mind!"
                imageSrc="/noble-appointments-logo.webp"
                imageAlt="Noble Appointments Bikram Sambat calendar app Nepal"
              />
              {/* Coming Soon Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-subtle-theme border border-theme text-muted-theme text-xs font-semibold">
                  Coming Soon
                </span>
              </div>
            </Link>
          </div>

          <div className="mt-12 text-center">
            {/* SEO FIX: CTA optimized */}
            <CTAButton variant="secondary" href="/products" icon={ArrowRight}>
              View All Software Products
            </CTAButton>
          </div>
        </div>
      </section>
    </section >
  );
}
