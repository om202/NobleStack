"use client";

import {
  ArrowRight,
  CheckCircle,
  Code,
  Bot,
  Smartphone,
  Zap,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState("expertise");

  const techStack = [
    { name: "React.js", icon: "⚛️", category: "Frontend" },
    { name: "Next.js", icon: "▲", category: "Framework" },
    { name: "OpenAI", icon: "🤖", category: "AI" },
    { name: "Langchain", icon: "🦜", category: "AI Tools" },
  ];

  const services = [
    {
      title: "AI & Automation",
      description: "Custom AI agents, chatbots, and automation systems",
      icon: Bot,
      projects: "25+ Projects",
    },
    {
      title: "Modern Web Apps",
      description: "Lightning-fast, SEO-optimized websites and SaaS platforms",
      icon: Code,
      projects: "50+ Websites",
    },
    {
      title: "Custom Software",
      description: "Tailored solutions from your idea to deployed software",
      icon: Smartphone,
      projects: "30+ Solutions",
    },
  ];

  return (
    <section className="py-12 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* App-like Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100/50 text-gray-700 text-sm font-medium mb-6 hover:from-blue-100 hover:to-purple-100 transition-all duration-300">
            <Zap className="w-4 h-4 mr-2 text-purple-500" />
            Let&apos;s Build Something Brilliant
          </div>

          {/* Noble Stack Brand */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <Image
              src="/nbl.png"
              alt="Noble Stack Logo"
              width={64}
              height={64}
            />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Noble Stack
            </h2>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
            Where AI Meets
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              {" "}
              the Modern Web
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            At Noble Stack, we build intelligent digital products using advanced
            AI, LLMs, and modern web stacks. Innovation isn&apos;t a goal —
            it&apos;s our process.{" "}
          </p>
        </div>

        {/* Service Navigation Tabs */}
        <div className="flex justify-center mb-8 animate-slide-up">
          <div className="glass rounded-2xl p-2 inline-flex">
            {["expertise", "portfolio", "stack"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-xl capitalize transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12 animate-slide-up">
          {/* Main Showcase Card */}
          <div className="lg:col-span-2">
            <div className="glass rounded-2xl p-8 card-hover">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Our Expertise
                </h2>
                <div className="flex gap-2">
                  <button className="w-3 h-3 bg-red-500 rounded-full"></button>
                  <button className="w-3 h-3 bg-yellow-500 rounded-full"></button>
                  <button className="w-3 h-3 bg-green-500 rounded-full"></button>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 mb-6">
                {services.map((service, index) => (
                  <div key={index} className="glass-dark rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <service.icon className="w-6 h-6 text-blue-400" />
                      <span className="text-green-400 text-sm font-medium">
                        {service.projects}
                      </span>
                    </div>
                    <div className="text-xl font-bold text-gray-900 mb-1">
                      {service.title}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {service.description}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center gap-2 flex-1 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300">
                  Schedule A Call
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="flex items-center justify-center gap-2 flex-1 py-4 glass text-gray-800 rounded-xl hover:bg-gray-100 transition-all duration-300">
                  View Portfolio
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M8 5v10l7-5z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Side Panel */}
          <div className="space-y-6">
            {/* Tech Stack */}
            <div className="glass rounded-2xl p-6 card-hover">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Core Tech Stack
              </h3>
              <div className="space-y-3">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 glass-dark rounded-xl"
                  >
                    <span className="text-2xl">{tech.icon}</span>
                    <div>
                      <div className="text-gray-900 font-medium">
                        {tech.name}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {tech.category}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Services Overview */}
            <div className="glass rounded-2xl p-6 card-hover">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                What We Build
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-600">
                    AI Chatbots & Automation
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">Modern Web Applications</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-600">
                    Custom Software Solutions
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-600">SaaS Platforms</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Value Propositions */}
        <div className="text-center animate-fade-in">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
              From Your Idea to Deployed Software
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
              AI-Powered Solutions
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
              Modern Tech Stack
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
