"use client";

import {
  ArrowRight,
  Sparkles,
  Brain,
  Keyboard,
  User,
  Copy,
} from "lucide-react";
import Image from "next/image";

export default function ProductsPage() {

  return (
    <section className="pt-24 sm:pt-28 py-12 px-4 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Revolutionizing Nepali Language with AI
          </div>

          <div className="flex items-center justify-center gap-4 mb-8">
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

          <div className="space-y-4 mb-8 max-w-4xl mx-auto">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
              The World&apos;s First AI-Powered Nepali Writing Assistant
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Transform your Nepali writing from good to extraordinary. Our
              breakthrough AI technology understands not just grammar, but the
              soul of Nepali language.
            </p>
          </div>

          <div className="mb-12 max-w-5xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden border-2 border-gray-200 shadow-2xl">
              <Image
                src="/Vyakaranly.png"
                alt="Vyakaranly - AI-powered Nepali grammar checker interface showing real-time suggestions"
                width={1200}
                height={800}
                className="w-full h-auto"
                priority
              />
            </div>
            <p className="text-xs sm:text-sm text-gray-500 mt-6 font-medium">
              ↑ Live preview: Watch Vyakaranly transform your writing in
              real-time
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-semibold text-base">
              Try Vyakaranly Now!
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
            Powerful Features for Perfect Nepali Writing
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* AI Grammar Analysis */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">AI Grammar Analysis</h4>
              <p className="text-gray-600 text-sm">
                Advanced AI analyzes your Nepali text for grammar corrections, style improvements, and better word choices in Devanagari script.
              </p>
            </div>

            {/* Romanized Input */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center mb-4">
                <Keyboard className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Romanized Input</h4>
              <p className="text-gray-600 text-sm">
                Type in English characters that automatically convert to Nepali Devanagari. Type &apos;namaste&apos; and get &apos;नमस्ते&apos; instantly.
              </p>
            </div>

            {/* Free Account Features */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-4">
                <User className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Free Account</h4>
              <p className="text-gray-600 text-sm">
                Create a free account for personalized suggestions, writing history, and access to advanced grammar analysis features.
              </p>
            </div>

            {/* Copy & Save */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4">
                <Copy className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Copy & Save</h4>
              <p className="text-gray-600 text-sm">
                Easily copy improved text and use anywhere. Your writing history is automatically saved for future reference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
