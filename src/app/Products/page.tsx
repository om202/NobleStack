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
  Target,
  Smartphone,
  Code,
  Database,
  Lock,
} from "lucide-react";
import Image from "next/image";

export default function ProductsPage() {
  const features = [
    {
      icon: Brain,
      title: "Advanced AI Neural Networks",
      description:
        "Our proprietary deep learning models are trained on millions of Nepali text samples, understanding context, cultural nuances, and linguistic patterns that generic tools miss",
    },
    {
      icon: Languages,
      title: "Smart Script Conversion",
      description:
        "Type &apos;namaste&apos; and watch it transform to &apos;नमस्ते&apos; instantly. Our intelligent romanization engine makes Nepali writing accessible to everyone, anywhere",
    },
    {
      icon: Zap,
      title: "Real-time Intelligent Suggestions",
      description:
        "Get instant grammar corrections, style improvements, and contextual suggestions as you type. No waiting, no delays - just perfect Nepali flowing from your thoughts",
    },
    {
      icon: Globe,
      title: "Universal Accessibility",
      description:
        "Works flawlessly across all devices and browsers. Whether you're on mobile, tablet, or desktop - your perfect Nepali writing assistant is always with you",
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description:
        "Your words are sacred. With end-to-end encryption, secure cloud infrastructure, and privacy-first architecture, your writing stays yours forever",
    },
    {
      icon: PenTool,
      title: "Beyond Grammar - True Enhancement",
      description:
        "We don't just fix mistakes. Our AI understands tone, formality, and context to help you express exactly what you mean with clarity and elegance",
    },
  ];

  const powerFeatures = [
    {
      icon: Code,
      title: "RESTful API Integration",
      description:
        "Developers can integrate our powerful AI into any application with our comprehensive API endpoints",
    },
    {
      icon: Database,
      title: "Scalable Cloud Architecture",
      description:
        "Built on modern microservices with Supabase backend, ensuring reliability and performance at any scale",
    },
    {
      icon: Lock,
      title: "Row-Level Security",
      description:
        "Advanced database security ensuring your data is protected with enterprise-grade access controls",
    },
    {
      icon: Smartphone,
      title: "Cross-Platform Ready",
      description:
        "Responsive design and API-first architecture means Vyakaranly works everywhere you do",
    },
  ];

  const useCases = [
    {
      title: "Students & Academics",
      description:
        "Write flawless essays, research papers, and academic content. Turn your ideas into professionally polished Nepali text that impresses professors and peers",
      icon: "🎓",
      highlight: "Perfect for thesis writing and academic excellence",
    },
    {
      title: "Content Creators & Journalists",
      description:
        "Create engaging blogs, articles, and social media content. Our AI helps you maintain your unique voice while ensuring grammatical perfection",
      icon: "✍️",
      highlight: "Boost your content quality and reader engagement",
    },
    {
      title: "Business Professionals",
      description:
        "Craft professional emails, reports, and presentations. Make every business communication count with polished, error-free Nepali text",
      icon: "🏢",
      highlight: "Elevate your professional image instantly",
    },
    {
      title: "Government & Organizations",
      description:
        "Ensure accuracy in official documents, public communications, and policy papers. Maintain the highest standards of written Nepali",
      icon: "🏛️",
      highlight: "Trusted by institutions for critical communications",
    },
  ];

  const stats = [
    {
      number: "World's 1st",
      label: "AI-powered Nepali grammar checker",
      icon: Award,
    },
    { number: "500K+", label: "Words enhanced in beta testing", icon: Target },
    { number: "98%", label: "User satisfaction rate", icon: CheckCircle },
    { number: "10M+", label: "Nepali speakers waiting for this", icon: Users },
  ];

  const faqs = [
    {
      question: "How accurate is Vyakaranly compared to human proofreading?",
      answer:
        "Our AI achieves 95%+ accuracy in grammar detection, trained specifically on Nepali language patterns. While we recommend reviewing suggestions for context, our system continuously learns and improves from real usage.",
    },
    {
      question: "Can I type in English and get perfect Nepali output?",
      answer:
        "Absolutely! Our smart romanization engine converts English characters to beautiful Devanagari script. Type &apos;namaste&apos; and get &apos;नमस्ते&apos; instantly. It&apos;s that simple.",
    },
    {
      question: "Is my sensitive content secure with Vyakaranly?",
      answer:
        "Your privacy is our priority. We use enterprise-grade encryption, secure processing, and strict data protection protocols. Your text is never permanently stored and remains completely confidential.",
    },
    {
      question: "Do I need technical knowledge to use Vyakaranly?",
      answer:
        "Not at all! While our technology is sophisticated, the interface is designed for everyone. Simply type or paste your text, and get intelligent suggestions instantly. No technical expertise required.",
    },
  ];

  return (
    <section className="pt-24 sm:pt-28 py-12 px-4 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Revolutionary AI Technology for Nepali Language
          </div>

          {/* Vyakaranly Logo */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <Image
              src="/vyakaranly_logo.png"
              alt="Vyakaranly Logo"
              width={80}
              height={80}
              className="w-16 h-16 sm:w-20 sm:h-20"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Vyakaranly
              </span>
            </h1>
          </div>

          <div className="space-y-4 mb-8 max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
              The World&apos;s First AI-Powered Nepali Writing Assistant
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Transform your Nepali writing from good to extraordinary. Our
              breakthrough AI technology understands not just grammar, but the
              soul of Nepali language.
            </p>
          </div>

          {/* Product Screenshot */}
          <div className="mb-12 sm:mb-16 max-w-5xl mx-auto">
            <div className="relative rounded-1xl overflow-hidden border-2 border-gray-200 ">
              <Image
                src="/Vyakaranly.png"
                alt="Vyakaranly - AI-powered Nepali grammar checker interface showing real-time suggestions"
                width={1200}
                height={800}
                className="w-full h-auto"
                priority
              />
            </div>
            <p className="text-sm text-gray-500 mt-6 font-medium">
              ↑ Live preview: Watch Vyakaranly transform your writing in
              real-time
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-semibold text-lg">
              Start Writing Perfect Nepali Now
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-700 rounded-xl border-2 border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-300 font-semibold text-lg">
              Watch Live Demo
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 5v10l8-5-8-5z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Problem & Solution */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 sm:p-12 mb-16 border border-indigo-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Why the World Needs Vyakaranly
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="p-6 bg-red-50 rounded-2xl border border-red-100">
                <h3 className="text-xl font-bold text-red-800 mb-3">
                  😟 The Problem
                </h3>
                <p className="text-red-700">
                  10+ million Nepali speakers worldwide struggle with writing
                  confidence. Generic grammar tools don&apos;t understand
                  Devanagari script, cultural context, or Nepali grammar rules.
                </p>
              </div>
              <div className="p-6 bg-green-50 rounded-2xl border border-green-100">
                <h3 className="text-xl font-bold text-green-800 mb-3">
                  🚀 Our Solution
                </h3>
                <p className="text-green-700">
                  Advanced AI trained exclusively on Nepali language patterns,
                  grammar rules, and cultural nuances. Real-time suggestions
                  that understand what you&apos;re trying to say.
                </p>
              </div>
            </div>
            <div className="p-6 bg-indigo-50 rounded-2xl border border-indigo-100">
              <h3 className="text-xl font-bold text-indigo-800 mb-4">
                💫 The Impact
              </h3>
              <div className="space-y-3 text-indigo-700">
                <p>✅ Students writing perfect academic papers</p>
                <p>
                  ✅ Professionals crafting flawless business communications
                </p>
                <p>
                  ✅ Content creators engaging millions with quality writing
                </p>
                <p>✅ Preserving and promoting beautiful Nepali language</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <stat.icon className="w-8 h-8 text-indigo-500 mx-auto mb-4" />
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
            Breakthrough Technology Meets Beautiful Simplicity
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Every feature designed to make your Nepali writing effortless,
            accurate, and impressive
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Excellence Section */}
        <div className="bg-gray-900 rounded-3xl p-8 sm:p-12 mb-16 text-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Built for Scale, Designed for Everyone
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Enterprise-grade technology that&apos;s so simple, anyone can use
              it. Here&apos;s what powers Vyakaranly under the hood.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {powerFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
            Success Stories Waiting to Happen
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            See how Vyakaranly transforms writing across every profession and
            passion
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-gray-50 to-indigo-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">{useCase.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-600 mb-3">{useCase.description}</p>
                    <p className="text-indigo-600 font-semibold text-sm">
                      {useCase.highlight}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 sm:p-12 mb-16 border border-indigo-100">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
            Everything You Want to Know
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Get instant answers to the most common questions about Vyakaranly
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 sm:p-12 text-white text-center">
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Write Nepali Like Never Before?
          </h3>
          <p className="text-xl mb-2 opacity-90">
            Join thousands who&apos;ve already discovered the future of Nepali
            writing
          </p>
          <p className="text-lg mb-8 opacity-75">
            No limits. No restrictions. Unlimited enhancement for your words.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center justify-center gap-3 px-10 py-4 bg-white text-indigo-600 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-bold text-lg">
              Get Early Access - Free Forever
              <Sparkles className="w-5 h-5" />
            </button>
            <button className="flex items-center justify-center gap-3 px-10 py-4 bg-transparent text-white rounded-xl border-2 border-white hover:bg-white hover:text-indigo-600 transition-all duration-300 font-bold text-lg">
              Watch Demo & Learn More
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <p className="text-sm mt-6 opacity-75">
            ✨ No credit card required • ⚡ Instant access • 🔒 Your data stays
            private
          </p>
        </div>
      </div>
    </section>
  );
}
