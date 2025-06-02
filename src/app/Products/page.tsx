"use client";

import {
  ArrowRight,
  Sparkles,
  Brain,
  Keyboard,
  User,
  Copy,
  CheckCircle,
  Download,
} from "lucide-react";
import Image from "next/image";

export default function ProductsPage() {

  return (
    <section className="py-12 px-4 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-md-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Nepali Writing
          </div>

          <div className="flex items-center justify-center gap-4 mb-6">
            <Image
              src="/vyakaranly_logo.png"
              alt="Vyakaranly Logo"
              width={60}
              height={60}
            />
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-gray-900">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Vyakaranly
              </span>
            </h1>
          </div>

          {/* Tagline */}
          <p className="text-base text-indigo-600 font-medium mb-6">
            AI-Powered Nepali Grammar Checker
          </p>

          <div className="space-y-4 mb-8 max-w-4xl mx-auto">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
              Perfect Your Nepali Writing with AI
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Instantly correct grammar, improve style, and write better Nepali. Free and easy to use.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 max-w-3xl mx-auto">
            <div className="flex items-center text-md-sm text-gray-700 bg-green-50 px-4 py-2 rounded-full">
              <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
              Grammar & spelling fixes
            </div>
            <div className="flex items-center text-md-sm text-gray-700 bg-green-50 px-4 py-2 rounded-full">
              <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
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
            <button className="flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-semibold text-lg">
              Try It Free
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>


        </div>

        {/* How It Works Section */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-4">
            How It Works
          </h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Simple steps to better Nepali writing
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Keyboard className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Type or Paste Text</h4>
              <p className="text-gray-600 text-md-sm">
                Enter your Nepali text in Devanagari or romanized format.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Get AI Suggestions</h4>
              <p className="text-gray-600 text-md-sm">
                AI finds errors and suggests improvements instantly.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Download className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Copy & Use</h4>
              <p className="text-gray-600 text-md-sm">
                Accept changes and copy the improved text.
              </p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
            Key Features
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Write Without Errors */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Grammar Correction</h4>
              <p className="text-gray-600 text-md-sm">
                Real-time grammar and spelling fixes for accurate Nepali text.
              </p>
            </div>

            {/* Type 'Namaste' – Get 'नमस्ते' */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center mb-4">
                <Keyboard className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Smart Input</h4>
              <p className="text-gray-600 text-md-sm">
                Type in English and get Devanagari script automatically.
              </p>
            </div>

            {/* Free Forever */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-4">
                <User className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Free to Use</h4>
              <p className="text-gray-600 text-md-sm">
                Create a free account for personalized features and history.
              </p>
            </div>

            {/* Save & Reuse Instantly */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4">
                <Copy className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Save & Copy</h4>
              <p className="text-gray-600 text-md-sm">
                Easily copy improved text and save your writing history.
              </p>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
