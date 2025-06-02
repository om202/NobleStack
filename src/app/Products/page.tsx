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
    <section className="pt-24 sm:pt-28 py-12 px-4 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-md-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Revolutionizing Nepali Language with AI
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
            AI-Powered. Nepali-Focused. Writer-Approved.
          </p>

          <div className="space-y-4 mb-8 max-w-4xl mx-auto">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
              Transform Your Nepali Writing with AI Precision
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Vyakaranly corrects grammar, improves style, and saves you time — instantly and for free.
              Write correct Nepali without stress, powered by advanced AI technology.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 max-w-3xl mx-auto">
            <div className="flex items-center text-md-sm text-gray-700 bg-green-50 px-4 py-2 rounded-full">
              <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
              Corrects grammar & spelling mistakes
            </div>
            <div className="flex items-center text-md-sm text-gray-700 bg-green-50 px-4 py-2 rounded-full">
              <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
              Improves sentence clarity in Nepali
            </div>
            <div className="flex items-center text-md-sm text-gray-700 bg-green-50 px-4 py-2 rounded-full">
              <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
              Real-time suggestions while you type
            </div>
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
            <p className="text-sm sm:text-md-sm text-gray-500 mt-6 font-medium">
              ↑ Live preview: Watch Vyakaranly transform your writing in
              real-time
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-semibold text-lg">
              Start Writing Smarter – It&apos;s Free
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>


        </div>

        {/* How It Works Section */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-4">
            How Vyakaranly Works
          </h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Get started in seconds and see immediate improvements to your Nepali writing
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Keyboard className="w-8 h-8 text-white" />
              </div>
              <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-md-sm font-bold mx-auto mb-4">1</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Paste or Type Nepali Text</h4>
              <p className="text-gray-600 text-md-sm">
                                 Start typing or paste your Nepali content into our smart editor. Works with both Devanagari and romanized text.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-md-sm font-bold mx-auto mb-4">2</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">AI Analyzes & Suggests Fixes</h4>
              <p className="text-gray-600 text-md-sm">
                Our advanced AI instantly identifies grammar errors, spelling mistakes, and suggests style improvements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-white" />
              </div>
              <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-md-sm font-bold mx-auto mb-4">3</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Accept Changes & Save</h4>
              <p className="text-gray-600 text-md-sm">
                Review suggestions, accept changes with one click, and copy the improved text for use anywhere.
              </p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
            Powerful Features for Perfect Nepali Writing
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Write Without Errors */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Write Without Errors</h4>
              <p className="text-gray-600 text-md-sm">
                Get real-time grammar corrections as you type. Advanced AI analyzes your Nepali text for perfect accuracy.
              </p>
            </div>

            {/* Type 'Namaste' – Get 'नमस्ते' */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center mb-4">
                <Keyboard className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Type &apos;Namaste&apos; – Get &apos;नमस्ते&apos;</h4>
              <p className="text-gray-600 text-md-sm">
                Smart romanized input that instantly converts English characters to beautiful Nepali Devanagari script.
              </p>
            </div>

            {/* Free Forever */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-4">
                <User className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Free Forever</h4>
              <p className="text-gray-600 text-md-sm">
                Create a free account for personalized suggestions, writing history, and advanced grammar analysis features.
              </p>
            </div>

            {/* Save & Reuse Instantly */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4">
                <Copy className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Save & Reuse Instantly</h4>
              <p className="text-gray-600 text-md-sm">
                Easily copy improved text and use anywhere. Your writing history is automatically saved for future reference.
              </p>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
