"use client";

import Link from "next/link";
import {
  Phone,
  Box,
  ArrowRight,
  Calendar,
  CheckCircle,
  Code,
  Bot,
  Zap,
  Brain,
  Wrench,
  Image as ImageIcon,
  User,
  Network,
  Subtitles,
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
        <div className="relative py-16 sm:py-20 hero-gradient-bg">
          {/* Decorative Blur Elements */}
          <div className="hero-gradient-blur-blue"></div>
          <div className="hero-gradient-blur-green"></div>
          <div className="hero-gradient-blur-orange"></div>
          <div className="hero-gradient-blur-amber"></div>

          {/* Content */}
          <div className="max-w-6xl mx-auto px-4">
            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-12">
                {/* Noble Stack Brand */}
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Image
                    src="/nbl.png"
                    alt="Noble Stack Logo"
                    width={60}
                    height={60}
                    className="w-[43px] h-[43px] sm:w-[60px] sm:h-[60px] rounded-xl"
                    quality={100}
                    priority
                  />
                  <h2 className="text-[22px] sm:text-[29px] md:text-[29px] font-bold text-white">Noble Stack</h2>
                </div>

                <h1 className="text-[36px] md:text-[49px] font-black mb-6 leading-tight max-w-xl mx-auto">
                  Your Vision, Powered by AI & Modern Web
                </h1>

                <p className="text-base sm:text-lg md:text-lg text-gray-200 mb-8 max-w-3xl mx-auto">
                  We are an AI first IT company that helps you turn your ideas into intelligent, scalable digital products using AI that drive real business impact.
                </p>

                {/* Call to Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10 mt-8">
                  <CTAButton variant="primary" icon={Phone} iconPosition="left" className="w-full sm:w-auto" href="https://calendar.app.google/mWmd6v421Pk66LQ26">
                    Schedule A Call
                  </CTAButton>
                  <CTAButton variant="secondary" icon={Box} iconPosition="left" href="/Products" className="w-full sm:w-auto">
                    View Our Products
                  </CTAButton>
                </div>
              </div>

              {/* Proudly building in Nepal and USA */}
              <div className="mt-12 text-center">
                <p className="text-base sm:text-lg text-gray-300 font-medium flex items-center justify-center gap-2">
                  Proudly building in
                  <span className="inline-flex items-center gap-1.5">
                    Nepal
                    <Image
                      src="/Flag_of_Nepal.svg"
                      alt="Nepal Flag"
                      width={13}
                      height={13}
                      className="inline-block"
                    />
                  </span>
                  and
                  <span className="inline-flex items-center gap-1.5">
                    USA
                    <Image
                      src="/Flag_of_the_United_States.svg"
                      alt="USA Flag"
                      width={28}
                      height={28}
                      className="inline-block"
                    />
                  </span>
                </p>
              </div>
            </div>
          </div>


        </div>
      </div>


      {/* Products Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-gray-900 rounded-2xl p-6 sm:p-8 shadow-sm border border-theme mb-8">
          <h2 className="text-xl font-bold text-main-theme mb-8 text-center">
            Our Products
          </h2>

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
      </div>

      {/* Expertise Section */}
      <div className="max-w-6xl mx-auto px-4 pb-12">
        <div className="bg-gray-900 rounded-2xl p-6 sm:p-8 shadow-sm border border-theme">
          <h2 className="text-xl font-bold text-main-theme mb-8 text-center">
            Our Expertise
          </h2>

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
      </div>
    </section >
  );
}
