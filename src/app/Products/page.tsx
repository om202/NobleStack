"use client";

import {
  ArrowRight,
  Brain,
  Keyboard,
  User,
  Copy,
  CheckCircle,
  Download,
} from "lucide-react";
import Image from "next/image";
import CTAButton from "../../components/CTAButton";
import ServiceCard from "../../components/ServiceCard";

export default function ProductsPage() {

  return (
    <section className="py-12 px-4 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">

          <div className="flex items-center justify-center gap-4 mb-6">
            <Image
              src="/vyakaranly_logo.png"
              alt="Vyakaranly Logo"
              width={60}
              height={60}
            />
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-gray-900">
              <span className="text-gradient-nobleblue">
                Vyakaranly
              </span>
            </h1>
          </div>

          {/* Tagline */}
          <p className="text-base text-nobleblue-600 font-medium mb-6">
            AI-Powered Nepali Grammar Checker
          </p>

          <div className="space-y-4 mb-12 max-w-4xl mx-auto">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
              Perfect Your Nepali Writing with AI
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Instantly correct grammar, improve style, and write better Nepali. Free and easy to use.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 max-w-3xl mx-auto">
            <div className="flex items-center text-md-sm text-gray-700 bg-gray-50 px-4 py-2 rounded-lg border border-gray-200">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Grammar & spelling fixes
            </div>
            <div className="flex items-center text-md-sm text-gray-700 bg-gray-50 px-4 py-2 rounded-lg border border-gray-200">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Real-time suggestions
            </div>
          </div>

          <div className="mb-12">
            <div className="rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
              <Image
                src="/Vyakaranly.png"
                alt="Vyakaranly interface"
                width={1200}
                height={800}
                className="w-full h-auto"
                priority
              />
            </div>
            <p className="text-sm sm:text-md-sm text-gray-500 mt-6 font-medium text-center">
              ↑ See how Vyakaranly works
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <CTAButton variant="primary" icon={ArrowRight} className="w-full sm:w-auto text-lg px-10 py-5">
              Try It Free
            </CTAButton>
          </div>


        </div>

        {/* How It Works Section */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-6">
            How It Works
          </h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Simple steps to better Nepali writing
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <ServiceCard
              name="Type or Paste Text"
              description="Enter your Nepali text in Devanagari or romanized format."
              icon={Keyboard}
            />
            <ServiceCard
              name="Get AI Suggestions"
              description="AI finds errors and suggests improvements instantly."
              icon={Brain}
            />
            <ServiceCard
              name="Copy & Use"
              description="Accept changes and copy the improved text."
              icon={Download}
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
            Key Features
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              name="Grammar Correction"
              description="Real-time grammar and spelling fixes for accurate Nepali text."
              icon={Brain}
            />
            <ServiceCard
              name="Smart Input"
              description="Type in English and get Devanagari script automatically."
              icon={Keyboard}
            />
            <ServiceCard
              name="Free to Use"
              description="Create a free account for personalized features and history."
              icon={User}
            />
            <ServiceCard
              name="Save & Copy"
              description="Easily copy improved text and save your writing history."
              icon={Copy}
            />
          </div>
        </div>


      </div>
    </section>
  );
}
