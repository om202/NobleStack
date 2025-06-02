"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Code,
  Bot,
  Zap,
  Brain,
  Wrench,
  Sparkles,
  X,
} from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const [showProductBanner, setShowProductBanner] = useState(true);

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
    <section className="pt-24 sm:pt-28 pb-6 sm:pb-8 md:pb-10 lg:pb-12 px-4 min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-blue-100 text-blue-700 text-md-sm sm:text-base font-medium mb-4 sm:mb-6">
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
            Let&apos;s Build Something Intelligent
          </div>

          {/* Noble Stack Brand */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <Image
              src="/nbl.png"
              alt="Noble Stack Logo"
              width={70}
              height={70}
              className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px]"
              quality={100}
              priority
            />
            <div className="flex flex-col justify-center h-16 sm:h-24">
              <span className="text-lg sm:text-2xl mb-1 md:text-2xl font-medium text-gray-700 leading-none">
                Noble
              </span>
              <span className="text-lg sm:text-2xl md:text-2xl font-medium text-gray-700 leading-none">
                Stack
              </span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
            Where <span className="ai-meets-text">AI</span> Meets the{" "}
            <span className="modern-web-text">Modern Web</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto">
            At Noble Stack, we build intelligent digital products using advanced
            AI, LLMs, and modern web stacks. Our first product, Nepali
            Grammarly, is revolutionizing AI-powered writing tools for
            underserved languages.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10 sm:mb-16">
            <button className="group flex items-center justify-center gap-3 px-8 py-4 w-full sm:w-64 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-0.5 font-semibold">
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

        {/* Product Announcement - Ad Banner */}
        {showProductBanner && (
          <div className="relative bg-green-50 rounded-md p-3 pr-8 border border-green-200 mb-4">
            {/* Close Button */}
            <button
              onClick={() => setShowProductBanner(false)}
              className="absolute top-2 right-2 p-1 text-gray-400 hover:text-gray-600 transition-colors z-10"
            >
              <X className="w-3 h-3" />
            </button>

            <div className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-between gap-2 pr-2 sm:pr-0">
              {/* Left side - Content */}
              <div className="flex flex-col items-center sm:flex-row sm:items-center gap-2 sm:gap-4">
                <span className="inline-flex items-center px-2 py-1 rounded-md bg-emerald-100 text-emerald-700 text-sm font-medium w-fit">
                  <Sparkles className="w-3 h-3 mr-1" />
                  New Product
                </span>

                <div className="flex flex-col items-center sm:flex-row sm:items-center gap-1 sm:gap-2 text-center sm:text-left">
                  <h3 className="text-sm font-bold text-gray-900">
                    Introducing{" "}
                    <span className="text-emerald-600">Vyakaranly</span>
                  </h3>
                  <span className="text-sm text-gray-600 hidden sm:inline">
                    •
                  </span>
                  <p className="text-sm text-gray-600">
                  First Nepali language AI grammar checker — no more manual edits!
                  </p>
                </div>
              </div>

              {/* Right side - Buttons */}
              <div className="flex gap-2 sm:gap-3 sm:shrink-0 justify-center sm:justify-start">
                <button className="group flex items-center justify-center gap-1 px-3 py-1.5 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-md hover:bg-emerald-600 transition-all duration-300 font-medium text-sm">
                  Try Now
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-300" />
                </button>
                <button className="group flex items-center justify-center gap-1 px-3 py-1.5 h-8 bg-white text-emerald-600 rounded-md border border-emerald-300 hover:bg-emerald-50 transition-all duration-300 font-medium text-sm">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Value Propositions */}
        <div className="mb-10 sm:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                From Your Idea to Deployed Software
              </h3>
              <p className="text-base text-gray-600">
                Complete end-to-end development from concept to production
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                AI-Powered Solutions
              </h3>
              <p className="text-base text-gray-600">
                Intelligent automation and AI integration in every project
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Modern Tech Stack
              </h3>
              <p className="text-base text-gray-600">
                Latest technologies and best practices for optimal performance
              </p>
            </div>
          </div>
        </div>

        {/* Expertise Section */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200 mb-6 sm:mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            Our Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {expertiseAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <area.icon className="w-8 h-8 text-blue-500 mr-3" />
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

      <style jsx>{`
        @keyframes aiPulse {
          0% {
            background-position: 0% 50%;
          }
          25% {
            background-position: 50% 0%;
          }
          50% {
            background-position: 100% 50%;
          }
          75% {
            background-position: 50% 100%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes webGlow {
          0% {
            background-position: 0% 50%;
          }
          25% {
            background-position: 50% 0%;
          }
          50% {
            background-position: 100% 50%;
          }
          75% {
            background-position: 50% 100%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .ai-meets-text {
          background: linear-gradient(
            135deg,
            #1e40af,
            #3b82f6,
            #8b5cf6,
            #a855f7,
            #06b6d4,
            #0891b2,
            #10b981,
            #059669,
            #1e40af
          );
          background-size: 400% 400%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: aiPulse 2s ease-in-out infinite;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .modern-web-text {
          background: linear-gradient(
            45deg,
            #d97706,
            #f59e0b,
            #f97316,
            #ea580c,
            #dc2626,
            #b91c1c,
            #f59e0b,
            #d97706
          );
          background-size: 400% 400%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: webGlow 1.8s ease-in-out infinite;
          font-weight: 800;
          letter-spacing: -0.02em;
        }
      `}</style>
    </section>
  );
}
