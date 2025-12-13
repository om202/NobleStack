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

export default function HeroSection() {

  const expertiseAreas = [
    {
      title: "Artificial Intelligence",
      description: "Advanced AI solutions and machine learning implementations",
      icon: Brain,
    },
    {
      title: "Modern Web Development",
      description: "Fast, responsive, and scalable web applications",
      icon: Code,
    },
    {
      title: "AI Agents & Automation",
      description: "Intelligent automation systems and AI-powered workflows",
      icon: Bot,
    },
    {
      title: "Custom New Software",
      description: "Tailored software solutions built from the ground up",
      icon: Wrench,
    },
  ];

  return (
    <section className="py-12 px-4 min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto">
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
              <span className="text-[24px] sm:text-[32px] md:text-[32px] font-medium text-gray-700 leading-none mb-1">
                Noble
              </span>
              <span className="text-[24px] sm:text-[32px] md:text-[32px] font-medium text-gray-700 leading-none">
                Stack
              </span>
            </div>
          </div>

          <h1 className="text-[32.4px] md:text-[43.2px] lg:text-[54px] font-bold mb-6 leading-tight text-gray-900">
            Where <span className="text-nobleblue-600">AI</span> Meets the{" "}
            <span className="text-nobleblue-600">Modern Web</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            At Noble Stack, we build intelligent digital products using AI, LLMs, and modern web technologies to turn ideas into scalable, high-impact solutions.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group flex items-center justify-center gap-3 px-8 py-4 w-full sm:w-64 gradient-nobleblue-up text-white rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 font-semibold">
              Schedule A Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <Link
              href="/Products"
              className="group flex items-center justify-center gap-3 px-8 py-4 w-full sm:w-64 bg-white text-gray-800 rounded-xl border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-0.5 font-semibold"
            >
              View Our Products
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>



        {/* Value Propositions */}
        <div className="mb-16">
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

        {/* Expertise Section */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-8 text-center">
            Our Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {expertiseAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mr-3">
                    <area.icon className="w-6 h-6 text-nobleblue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {area.title}
                  </h3>
                </div>
                <p className="text-base text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
