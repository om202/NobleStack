"use client";

import {
  ArrowRight,
  CheckCircle,
  Globe,
  Brain,
  Zap,
  Shield,
  Users,
  Award,
  Languages,
  PenTool,
  Sparkles,
  Target
} from "lucide-react";
import Image from 'next/image';

export default function ProductsPage() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Intelligence",
      description: "Advanced machine learning models trained specifically on Nepali language patterns and grammar rules"
    },
    {
      icon: Languages,
      title: "Native Nepali Support",
      description: "Built from the ground up for Nepali language, understanding cultural context and linguistic nuances"
    },
    {
      icon: Zap,
      title: "Real-time Corrections",
      description: "Instant grammar and spell checking as you type, with intelligent suggestions for better writing"
    },
    {
      icon: Globe,
      title: "Multiple Script Support",
      description: "Works seamlessly with Devanagari script and Romanized Nepali text"
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your documents stay private with local processing and optional cloud features"
    },
    {
      icon: PenTool,
      title: "Writing Enhancement",
      description: "Not just corrections - improve your writing style, clarity, and professional tone"
    }
  ];

  const useCases = [
    {
      title: "Students & Academics",
      description: "Perfect for essays, research papers, and academic writing in Nepali",
      icon: "🎓"
    },
    {
      title: "Content Creators",
      description: "Bloggers, journalists, and writers creating quality Nepali content",
      icon: "✍️"
    },
    {
      title: "Businesses",
      description: "Professional Nepali communication, documentation, and marketing materials",
      icon: "🏢"
    },
    {
      title: "Government & NGOs",
      description: "Official documents, reports, and public communications in Nepali",
      icon: "🏛️"
    }
  ];

  const stats = [
    { number: "1st", label: "AI grammar checker for Nepali", icon: Award },
    { number: "500K+", label: "Words processed in beta", icon: Target },
    { number: "95%", label: "Accuracy in grammar detection", icon: CheckCircle },
    { number: "10M+", label: "Native Nepali speakers", icon: Users }
  ];

  return (
    <section className="pt-24 sm:pt-28 py-12 px-4 min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto">
        
        {/* Hero Section */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-4 sm:mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Introducing Our First Product
          </div>

          {/* Vyakaranly Logo */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <Image
              src="/vyakaranly_logo.png"
              alt="Vyakaranly Logo"
              width={60}
              height={60}
              className="w-12 h-12 sm:w-15 sm:h-15"
            />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
              <span className="text-indigo-600">Vyakaranly</span>
            </h1>
          </div>
          
          <blockquote className="text-base sm:text-lg text-gray-500 mb-6 sm:mb-8 max-w-3xl mx-auto">
            The world&apos;s first Nepali language grammar and spell checker.
            Write with confidence, express with clarity, communicate with precision.
          </blockquote>

          {/* Product Screenshot */}
          <div className="mb-10 sm:mb-16 max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden border border-gray-200">
              <Image
                src="/Vyakaranly.png"
                alt="Vyakaranly - AI-powered Nepali grammar checker interface"
                width={1200}
                height={800}
                className="w-full h-auto"
                priority
              />
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Live preview of Vyakaranly&apos;s intelligent Nepali writing assistant
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200 mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Why Vyakaranly?</h2>
            <div className="space-y-3 sm:space-y-4 text-base text-gray-600">
              <p><strong>🌟 The Problem:</strong> 10+ million Nepali speakers worldwide lack AI-powered writing tools</p>
              <p><strong>💡 Our Solution:</strong> Advanced AI trained on Nepali language patterns, grammar, and cultural context</p>
              <p><strong>🚀 The Impact:</strong> Empowering perfect Nepali communication for students, professionals, and creators</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-10 sm:mb-16">
            <button className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-xl hover:from-indigo-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold">
              Start Writing Better Nepali
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-700 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 font-semibold">
              Watch Demo
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 5v10l8-5-8-5z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-4 sm:p-6 text-center shadow-sm border border-gray-200">
              <stat.icon className="w-6 sm:w-8 h-6 sm:h-8 text-indigo-500 mx-auto mb-2 sm:mb-3" />
              <div className="text-lg sm:text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
              <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200 mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
            Powerful Features for Perfect Nepali Writing
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <feature.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200 mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
            Perfect for Every Nepali Writer
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center p-4 sm:p-6">
                <div className="text-3xl sm:text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200 text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">Ready to Transform Your Nepali Writing?</h3>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Join thousands of writers already using Vyakaranly to perfect their communication
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-xl hover:from-indigo-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold">
              Get Early Access
            </button>
            <button className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-700 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 font-semibold">
              Request Demo
            </button>
          </div>
        </div>

      </div>
    </section>
  );
} 