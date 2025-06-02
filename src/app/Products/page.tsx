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
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Introducing Our First Product
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            <span className="text-emerald-600">Nepali Grammarly</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            The world's first AI-powered grammar and spell checker designed specifically for the Nepali language. 
            Write with confidence, express with clarity, communicate with precision.
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 mb-12 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Nepali Grammarly?</h2>
            <div className="text-lg text-gray-700 space-y-3">
              <p><strong>🌟 The Problem:</strong> 10+ million Nepali speakers worldwide lack AI-powered writing tools</p>
              <p><strong>💡 Our Solution:</strong> Advanced AI trained on Nepali language patterns, grammar, and cultural context</p>
              <p><strong>🚀 The Impact:</strong> Empowering perfect Nepali communication for students, professionals, and creators</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group flex items-center justify-center gap-3 px-8 py-4 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 transition-all duration-300 transform hover:-translate-y-0.5 font-semibold text-lg">
              Start Writing Better Nepali
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="group flex items-center justify-center gap-3 px-8 py-4 bg-white text-emerald-600 rounded-xl border-2 border-emerald-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-300 transform hover:-translate-y-0.5 font-semibold text-lg">
              Watch Demo
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 5v10l8-5-8-5z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-200">
              <stat.icon className="w-8 h-8 text-emerald-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Powerful Features for Perfect Nepali Writing
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Perfect for Every Nepali Writer
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Nepali Writing?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of writers already using Nepali Grammarly to perfect their communication
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-emerald-600 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-0.5 font-semibold text-lg">
              Get Early Access
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl hover:bg-white hover:text-emerald-600 transition-all duration-300 transform hover:-translate-y-0.5 font-semibold text-lg">
              Request Demo
            </button>
          </div>
        </div>

      </div>
    </div>
  );
} 