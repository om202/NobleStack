import React from "react";

import Link from "next/link";
import {
  Phone,
  Box,
  ArrowRight,
  Code,
  Bot,
  Brain,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import ServiceCard from "../../components/ServiceCard";
import CTAButton from "../../components/CTAButton";

export default function HeroSection() {

  const expertiseAreas = [
    {
      title: "Artificial Intelligence",
      description: "Advanced AI solutions using GPT, Claude, and custom models to automate decisions and solve complex business problems.",
      icon: Brain,
    },
    {
      title: "Modern Web Development",
      description: "High-performance web apps built with Next.js and React, optimized for speed, SEO, and user experience.",
      icon: Code,
    },
    {
      title: "AI Agents & Automation",
      description: "24/7 intelligent agents that automate workflows, customer support, and business operations.",
      icon: Bot,
    },
    {
      title: "Custom Software",
      description: "End-to-end custom software built to fit your business, from concept to deployment and support.",
      icon: Wrench,
    },
  ];

  return (
    <section className="min-h-screen">
      {/* Hero Section with Background - Full Width */}
      <div className="relative w-full overflow-hidden">
        <div className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 hero-gradient-bg">
          {/* Content */}
          <div className="max-w-6xl mx-auto px-4">
            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-8">
                  <Image
                    src="/nbl.png"
                    alt="Noble Stack Logo"
                    width={50}
                    height={50}
                    className="rounded-lg w-10 h-10 md:w-[50px] md:h-[50px]"
                    priority
                    sizes="(max-width: 768px) 40px, 50px"
                  />
                  <span className="text-2xl md:text-3xl font-bold tracking-tight text-main-theme">
                    Noble Stack
                  </span>
                </div>

                <h1 className="text-[32px] md:text-[45px] font-bold mb-6 leading-tight max-w-4xl mx-auto text-main-theme">
                  We Convert Business Ideas Into Profitable AI Products
                </h1>

                <p className="text-base text-muted-theme mb-8 max-w-3xl mx-auto">
                  We're a software development agency specializing in AI, modern web & apps. From smart automations to high speed websites, we build products that deliver measurable business results.
                </p>

                {/* Call to Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10 mt-8">
                  <CTAButton variant="primary" icon={Phone} iconPosition="left" className="w-full sm:w-auto" href="https://calendar.app.google/mWmd6v421Pk66LQ26">
                    Schedule Free Consultation
                  </CTAButton>
                  <CTAButton variant="secondary" icon={Box} iconPosition="left" href="/Products" className="w-full sm:w-auto">
                    View Our Products
                  </CTAButton>
                </div>
              </div>

              {/* Proudly building in Nepal and USA */}
              <div className="mt-12 text-center">
                <p className="text-base text-muted-theme font-medium flex items-center justify-center gap-2">
                  Proudly building in
                  <span className="inline-flex items-center gap-1.5 text-main-theme">
                    Nepal
                    <Image
                      src="/Flag_of_Nepal.svg"
                      alt="Nepal Flag"
                      width={13}
                      height={13}
                      className="inline-block"
                      priority
                      sizes="13px"
                    />
                  </span>
                  and
                  <span className="inline-flex items-center gap-1.5 text-main-theme">
                    USA
                    <Image
                      src="/Flag_of_the_United_States.svg"
                      alt="USA Flag"
                      width={28}
                      height={28}
                      className="inline-block"
                      priority
                      sizes="28px"
                    />
                  </span>
                </p>
              </div>
            </div>
          </div>


        </div>
      </div>


      {/* Products Section */}
      <section id="products" aria-label="Our Products" className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-card-theme rounded-2xl p-6 sm:p-8 shadow-sm border border-theme mb-8">
          <header className="text-center mb-8">

            <h2 className="text-lg font-bold text-main-theme">
              Our Portfolio
            </h2>
            <p className="text-sm text-muted-theme mt-2 max-w-2xl mx-auto">
              Real products we've built and launched. These showcase our capabilities in AI development, web applications, and bringing ideas to market.
            </p>
          </header>

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

            {/* Create Profile Pic */}
            <a
              href="https://createprofilepic.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <ServiceCard
                name="Create Profile Pic"
                description="Create stunning profile pictures for any platform. Powered by Google's Nano Banana AI."
                imageSrc="/create_profile_pic_icon.png"
                imageAlt="Create Profile Pic"
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

            {/* Auto Captions */}
            <Link href="/Products" className="block h-full">
              <ServiceCard
                name="Auto Captions"
                description="Automated subtitle generator in any language. Translate or generate for native voice."
                imageSrc="/autosubai_icon.png"
                imageAlt="Auto Captions"
              />
            </Link>
          </div>

          <div className="mt-12 text-center">
            <CTAButton variant="secondary" href="/Products" icon={ArrowRight}>
              View All Products
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" aria-label="Our Expertise" className="max-w-6xl mx-auto px-4 pb-12">
        <div className="bg-card-theme rounded-2xl p-6 sm:p-8 shadow-sm border border-theme">
          <header className="text-center mb-8">

            <h2 className="text-lg font-bold text-main-theme">
              Our Expertise
            </h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {expertiseAreas.map((area, index) => (
              <ServiceCard
                key={index}
                name={area.title}
                description={area.description}
                icon={area.icon}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <CTAButton variant="secondary" href="/Services" icon={ArrowRight}>
              View All Services
            </CTAButton>
          </div>
        </div>
      </section>
    </section >
  );
}
