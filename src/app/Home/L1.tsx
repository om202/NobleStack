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
import NetworkBackground from "../../components/NetworkBackground";

export default function HeroSection() {

  const expertiseAreas = [
    {
      title: "Full-Stack Product Engineering",
      description: "Robust, full-stack systems from frontend to backend to infrastructure with code quality and scalability at the core.",
      icon: SiReact,
      backgroundImage: "/services/full-stack.jpg",
      gradientOverlay: "bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100 dark:from-blue-900/60 dark:via-cyan-900/55 dark:to-indigo-900/60",
      href: "/Services/full-stack-engineering",
    },
    {
      title: "LLM-Powered AI Systems",
      description: "Systems that leverage cutting-edge language models to reason, retrieve, and respond seamlessly into your product.",
      icon: SiOpenai,
      backgroundImage: "/services/llm.jpg",
      gradientOverlay: "bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100 dark:from-blue-900/60 dark:via-cyan-900/55 dark:to-indigo-900/60",
      href: "/Services/llm-ai-systems",
    },
    {
      title: "End-to-End Automation Systems",
      description: "Automation pipelines that save time, reduce human error, and scale with your growth.",
      icon: SiZapier,
      backgroundImage: "/services/automation.jpg",
      gradientOverlay: "bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100 dark:from-blue-900/60 dark:via-cyan-900/55 dark:to-indigo-900/60",
      href: "/Services/automation-systems",
    },
    {
      title: "iOS & Android Apps",
      description: "Native and cross-platform mobile applications that deliver seamless experiences on iOS and Android.",
      icon: SiApple,
      backgroundImage: "/services/mobile-apps.jpg",
      gradientOverlay: "bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100 dark:from-blue-900/60 dark:via-cyan-900/55 dark:to-indigo-900/60",
      href: "/Services/mobile-apps",
    },
  ];

  return (
    <section className="min-h-screen">
      {/* Hero Section with Network Background - Full Width */}
      <div className="relative w-full overflow-hidden">
        <div className="relative pt-24 pb-20 sm:pt-28 sm:pb-24 md:pt-32 md:pb-28 hero-gradient-bg">
          {/* Network Background Effect - Layered on top */}
          <NetworkBackground
            particleCount={32}
            particleColor="rgba(0, 122, 255, 0.7)"
            lineColor="rgba(0, 122, 255, 0.65)"
            particleSize={2.5}
            lineWidth={3}
            connectionDistance={250}
            speed={0.4}
          />

          {/* Content */}
          <div className="max-w-7xl mx-auto px-4">
            <div className="relative z-10">
              {/* 60/40 Split Layout */}
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                {/* Left side - Text Content (65%) */}
                <div className="flex-13 lg:flex-13 w-full">
                  <h1 className="text-[32px] md:text-[45px] mb-6 leading-tight text-center lg:text-left text-main-theme font-serif text-engraved">
                    We Build Scalable, AI-Driven Products That Transform Your Business
                  </h1>

                  <p className="text-lg text-subtitle-theme mb-8 text-center lg:text-left">
                    <span className="font-bold text-main-theme text-xl">We are building for Nepal.</span> <br /> <br /> Transform your ideas into reality with our AI-powered software solutions and high-performance websites. Partner with our team of experts in Kathmandu, Nepal, to drive innovation.
                  </p>

                  {/* Call to Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-10 mt-8 sm:mt-16">
                    <CTAButton variant="primary" icon={Phone} iconPosition="left" className="w-full sm:w-auto" href="https://calendar.app.google/mWmd6v421Pk66LQ26" shine>
                      Schedule Consultation
                    </CTAButton>
                    <CTAButton variant="secondary" icon={Box} iconPosition="left" href="/Products" className="w-full sm:w-auto">
                      See Our Products
                    </CTAButton>
                  </div>
                </div>

                {/* Right side - Hero Illustration (35%) */}
                <div className="flex-7 lg:flex-7 w-full max-w-xs mx-auto lg:mx-0 lg:max-w-none lg:ml-auto">
                  <div className="relative w-full aspect-square">
                    <Image
                      src="/hero_illus.png"
                      alt="AI and Technology Illustration"
                      fill
                      className="object-contain lg:object-right"
                      priority
                    />
                  </div>
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
            <div className="flex-[2] space-y-6">
              <div className="flex items-center gap-4">
                <Image
                  src="/npgoto.webp"
                  alt="npgo.to Logo"
                  width={64}
                  height={64}
                  className="rounded-lg"
                />
                <div>
                  <h2 className="text-3xl font-serif text-main-theme mb-2">New Product Launch</h2>
                  <p className="text-lg font-semibold text-subtitle-theme">npgo.to - Free URL Shortener for Nepal</p>
                </div>
              </div>

              <p className="text-base text-subtitle-theme leading-relaxed">
                Stop wasting time with complicated URL shorteners. Get your free, Nepal-made URL shortener and QR code generator built specifically for Nepali businesses.
                Start shortening in seconds, track every click with real-time analytics, and manage everything from one powerful dashboard.
                Join hundreds of Nepali businesses already sharing smarter with npgo.to.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton
                  variant="secondary"
                  href="https://npgo.to/"
                  icon={ArrowRight}
                  className="w-full sm:w-auto"
                >
                  Try npgo.to Now
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
                <Image
                  src="/npgoto_screen.webp"
                  alt="npgo.to Screenshot"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" aria-label="Our Expertise" className="max-w-7xl mx-auto px-3 pb-4 sm:px-4 sm:pb-8">
        <div className="bg-card-theme rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm border border-theme mb-8">
          <SectionHeader
            title="Our Expertise"
            description="Core technologies and methodologies we use to build exceptional digital products."
            imageSrc="/undraw_dev-environment_n5by.svg"
            imageAlt="Our Expertise Illustration"
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
            <CTAButton variant="secondary" href="/Services" icon={ArrowRight}>
              View All Services
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" aria-label="Our Products" className="max-w-7xl mx-auto px-3 pb-4 sm:px-4 sm:pb-8">
        <div className="bg-card-theme rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm border border-theme">
          <SectionHeader
            title="Real Projects We've Built"
            description="From AI-powered mobile apps to professional networking platforms, explore the real-world products we've designed, developed, and launched for clients worldwide."
            imageSrc="/undraw_programming_j1zw.svg"
            imageAlt="Real Projects Illustration"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {/* Vibe AI */}
            <a
              href="https://apps.apple.com/us/app/ai-photo-editor-vibe/id6752835683"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <ServiceCard
                name="Vibe AI Photo Editor"
                description="Professional photo editing made simple. Remove backgrounds and enhance images with AI."
                imageSrc="/vibe.png"
                imageAlt="Vibe AI"
              />
            </a>

            {/* npgo.to */}
            <a
              href="https://npgo.to/"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <ServiceCard
                name="npgo.to"
                description="Free URL shortener and QR code generator made for Nepal. Shorten links instantly and track clicks."
                imageSrc="/npgoto.webp"
                imageAlt="npgo.to"
              />
            </a>

            {/* Loopn */}
            <a
              href="https://www.loopn.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <ServiceCard
                name="Loopn"
                description="Professional Networking & Career Matching using AI. Resume matching for career growth."
                imageSrc="/loopn_logo.png"
                imageAlt="Loopn"
              />
            </a>

            {/* Noble Appointments */}
            <div className="block h-full relative">
              <ServiceCard
                name="Noble Appointments"
                description="Fully Nepali Bikram Sambat based calendar — specially built for Nepali businesses in mind!"
                imageSrc="/noble-appointments-logo.png"
                imageAlt="Noble Appointments"
              />
              {/* Coming Soon Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-subtle-theme border border-theme text-muted-theme text-xs font-semibold">
                  Coming Soon
                </span>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <CTAButton variant="secondary" href="/Products" icon={ArrowRight}>
              View All Products
            </CTAButton>
          </div>
        </div>
      </section>
    </section >
  );
}
