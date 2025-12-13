"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Code,
  Bot,
  Zap,
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
      description: "Cutting-edge AI solutions leveraging GPT, Claude, and custom machine learning models to solve complex business challenges and automate decision-making processes",
      icon: Brain,
    },
    {
      title: "Modern Web Development",
      description: "Lightning-fast, responsive web applications built with Next.js, React, and modern frameworks, optimized for performance, SEO, and exceptional user experiences",
      icon: Code,
    },
    {
      title: "AI Agents & Automation",
      description: "Intelligent automation systems that work 24/7, from customer service chatbots to complex workflow orchestration, reducing manual work and increasing efficiency",
      icon: Bot,
    },
    {
      title: "Custom New Software",
      description: "End-to-end custom software development tailored to your unique business needs, from initial concept and design through deployment and ongoing support",
      icon: Wrench,
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50">
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
                    width={75}
                    height={75}
                    className="w-[54px] h-[54px] sm:w-[75px] sm:h-[75px]"
                    quality={100}
                    priority
                  />
                  <div className="flex flex-col justify-center">
                    <span className="text-[24px] sm:text-[32px] md:text-[32px] font-medium text-gray-800 leading-none mb-1">
                      Noble
                    </span>
                    <span className="text-[24px] sm:text-[32px] md:text-[32px] font-medium text-gray-800 leading-none">
                      Stack
                    </span>
                  </div>
                </div>

                <h1 className="text-[32.4px] md:text-[43.2px] lg:text-[54px] font-bold mb-6 leading-tight text-gray-900">
                  Where <span className="text-nobleblue-600">AI</span> Meets the{" "}
                  <span className="text-nobleblue-600">Modern Web</span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                  At Noble Stack, we build intelligent digital products using AI, LLMs, and modern web technologies to turn ideas into scalable, high-impact solutions.
                </p>

                {/* Call to Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                  <CTAButton variant="primary" icon={ArrowRight} className="w-full sm:w-auto">
                    Schedule A Call
                  </CTAButton>
                  <CTAButton variant="secondary" href="/Products" className="w-full sm:w-auto">
                    View Our Products
                  </CTAButton>
                </div>
              </div>

              {/* Value Propositions */}
              <div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <ServiceCard
                    name="Idea to Deployed Software"
                    description="Complete end-to-end development from concept to production"
                    icon={CheckCircle}
                  />
                  <ServiceCard
                    name="AI Powered Solutions"
                    description="Intelligent automation and AI integration in every project"
                    icon={Bot}
                  />
                  <ServiceCard
                    name="Modern Tech Stack"
                    description="Latest technologies and best practices for optimal performance"
                    icon={Zap}
                  />
                </div>
              </div>

              {/* Proudly building in Nepal and USA */}
              <div className="mt-12 text-center">
                <p className="text-base sm:text-lg text-gray-600 font-medium flex items-center justify-center gap-2">
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

      {/* Expertise Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-8 text-center">
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
        </div>
      </div>
    </section>
  );
}
