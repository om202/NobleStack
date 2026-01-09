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

export default function HeroSection() {

  const expertiseAreas = [
    {
      title: "Full-Stack Product Engineering",
      description: "Robust, full-stack systems from frontend to backend to infrastructure with code quality and scalability at the core.",
      icon: SiReact,
      backgroundImage: "/services/full-stack.jpg",
      gradientOverlay: "bg-gradient-to-br from-blue-900/90 via-cyan-900/85 to-indigo-900/90",
    },
    {
      title: "LLM-Powered AI Systems",
      description: "Systems that leverage cutting-edge language models to reason, retrieve, and respond seamlessly into your product.",
      icon: SiOpenai,
      backgroundImage: "/services/llm.jpg",
      gradientOverlay: "bg-gradient-to-br from-blue-900/90 via-cyan-900/85 to-indigo-900/90",
    },
    {
      title: "End-to-End Automation Systems",
      description: "Automation pipelines that save time, reduce human error, and scale with your growth.",
      icon: SiZapier,
      backgroundImage: "/services/automation.jpg",
      gradientOverlay: "bg-gradient-to-br from-blue-900/90 via-cyan-900/85 to-indigo-900/90",
    },
    {
      title: "iOS & Android Apps",
      description: "Native and cross-platform mobile applications that deliver seamless experiences on iOS and Android.",
      icon: SiApple,
      backgroundImage: "/services/mobile-apps.jpg",
      gradientOverlay: "bg-gradient-to-br from-blue-900/90 via-cyan-900/85 to-indigo-900/90",
    },
  ];

  return (
    <section className="min-h-screen">
      {/* Hero Section with Background - Full Width */}
      <div className="relative w-full overflow-hidden">
        <div className="relative pt-32 pb-28 sm:pt-36 sm:pb-32 md:pt-44 md:pb-40 hero-gradient-bg">
          {/* Content */}
          <div className="max-w-6xl mx-auto px-4">
            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-12">
                {/* Logo */}
                <div className="flex items-center justify-center gap-3 mb-8">
                  <Image
                    src="/nbl.png"
                    alt="Noble Stack Logo"
                    width={48}
                    height={48}
                    className="rounded-lg"
                    priority
                  />
                  <span className="text-3xl font-bold text-white tracking-tight">Noble Stack</span>
                </div>

                <h1 className="text-[32px] md:text-[45px] font-bold mb-6 leading-tight max-w-4xl mx-auto text-white">
                  We Build Scalable, AI-Driven Products That Transform Your Business
                </h1>

                <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto">
                  Transform your ideas into reality with our AI-powered software solutions and high-performance websites. Partner with our team of experts in Kathmandu, Nepal, to drive innovation.
                </p>

                {/* Call to Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10 mt-8 sm:mt-16">
                  <CTAButton variant="primary" icon={Phone} iconPosition="left" className="w-full sm:w-auto" href="https://calendar.app.google/mWmd6v421Pk66LQ26">
                    Schedule Consultation
                  </CTAButton>
                  <CTAButton variant="secondary" icon={Box} iconPosition="left" href="/Products" className="w-full sm:w-auto">
                    See Our Products
                  </CTAButton>
                </div>
              </div>


            </div>
          </div>


        </div>
      </div>

      {/* Expertise Section - Overlapping Hero */}
      <section id="expertise" aria-label="Our Expertise" className="max-w-6xl mx-auto px-3 -mt-12 sm:-mt-16 md:-mt-20 relative z-20">
        <div className="bg-card-theme rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm border border-theme mb-8">
          <SectionHeader
            title="Our Expertise"
            description="Core technologies and methodologies we use to build exceptional digital products."
            imageSrc="/undraw_dev-environment_n5by.svg"
            imageAlt="Our Expertise Illustration"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {expertiseAreas.map((area, index) => (
              <ServiceCard
                key={index}
                name={area.title}
                description={area.description}
                icon={area.icon}
                backgroundImage={area.backgroundImage}
                gradientOverlay={area.gradientOverlay}
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

      {/* Products Section */}
      <section id="products" aria-label="Our Products" className="max-w-6xl mx-auto px-3 pb-8 sm:px-4 sm:pb-12">
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
