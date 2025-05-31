"use client";

import { 
  Smartphone, 
  Rocket, 
  Zap, 
  Globe, 
  Play,
  ChevronRight,
  ArrowRight,
  Monitor,
  Palette,
  BarChart3
} from "lucide-react";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript,
  SiTailwindcss,
  SiVercel,
  SiFigma
} from "react-icons/si";
import { useState } from "react";
import React from "react";

export default function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(0);

  const webFeatures = [
    {
      id: "responsive-design",
      title: "Responsive & Mobile-First",
      description: "Beautiful designs that work perfectly on every device, from mobile to desktop",
      icon: Smartphone,
      color: "from-blue-500 to-cyan-500",
      stats: ["Mobile Optimized", "Cross-Platform", "Touch-Friendly"],
      demo: "View Demo"
    },
    {
      id: "performance",
      title: "Lightning-Fast Performance",
      description: "Optimized websites that load in milliseconds and rank high on Google",
      icon: Zap,
      color: "from-green-500 to-emerald-500",
      stats: ["Core Web Vitals", "SEO Optimized", "Fast Loading"],
      demo: "Speed Test"
    },
    {
      id: "modern-design",
      title: "Modern UI/UX Design",
      description: "Contemporary designs that capture attention and guide users to conversion",
      icon: Palette,
      color: "from-purple-500 to-pink-500",
      stats: ["User-Centered", "Conversion Focused", "Brand Aligned"],
      demo: "See Designs"
    },
    {
      id: "analytics",
      title: "Data-Driven Results",
      description: "Built-in analytics and optimization tools to track and improve conversions",
      icon: BarChart3,
      color: "from-orange-500 to-red-500",
      stats: ["Analytics Ready", "A/B Testing", "Performance Tracking"],
      demo: "View Analytics"
    }
  ];

  const webServices = [
    { name: "Modern Web Development", icon: Globe, status: "Specialized", description: "React, Next.js, TypeScript" },
    { name: "E-commerce Websites", icon: Smartphone, status: "Expert", description: "Shopify, Custom Solutions" },
    { name: "SaaS Platforms", icon: Monitor, status: "Advanced", description: "Full-Stack Applications" },
    { name: "Landing Pages", icon: Rocket, status: "Conversion Pro", description: "High-Converting Pages" }
  ];

  const webTechStack = [
    { name: "React.js", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Vercel", icon: SiVercel, color: "#000000" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E" }
  ];

  const conversionFeatures = [
    {
      title: "SEO Optimization",
      description: "Built for search engines from day one",
      icon: Globe,
    },
    {
      title: "Fast Loading",
      description: "Optimized performance for better user experience",
      icon: Zap,
    },
    {
      title: "Mobile-First",
      description: "Designed for mobile, enhanced for desktop",
      icon: Smartphone,
    },
    {
      title: "Conversion Focus",
      description: "Every element designed to drive results",
      icon: BarChart3,
    },
  ];

  return (
    <section id="features" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
            <Globe className="w-4 h-4 mr-2" />
            Modern Web Development Experts
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            We Build Modern
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              {" "}Websites That Convert
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specializing in lightning-fast, SEO-optimized websites that look stunning on every device. 
            From landing pages to complex web applications, we create digital experiences that drive results.
          </p>
        </div>

        {/* Value Propositions */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {conversionFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Modern Tech Stack */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Modern Web Technologies We Master
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {webTechStack.map((tech, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="bg-gray-50 rounded-2xl p-6 group-hover:bg-gray-100 transition-colors duration-300">
                  <div className="flex justify-center mb-3">
                    <tech.icon 
                      size={40} 
                      style={{ color: tech.color }}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="text-gray-900 font-medium text-sm">{tech.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Web Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {webServices.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300 group cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${webFeatures[index].color} rounded-xl flex items-center justify-center shadow-lg`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-500 rounded-full">
                  {service.status}
                </span>
              </div>
              <h3 className="text-gray-900 font-semibold mb-2">{service.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{service.description}</p>
              <button className="flex items-center text-blue-600 text-sm group-hover:text-blue-700 transition-colors">
                Learn More
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Interactive Website Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Feature Cards */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              What Makes Our Websites Convert
            </h3>
            {webFeatures.map((feature, index) => (
              <div
                key={feature.id}
                className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 cursor-pointer ${
                  activeFeature === index ? 'ring-2 ring-blue-500 bg-blue-50' : ''
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {feature.stats.map((stat, statIndex) => (
                        <span key={statIndex} className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">
                          {stat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Website Preview Panel */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-2xl font-bold text-gray-900">Website Preview</h4>
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-8 h-8 bg-gradient-to-r ${webFeatures[activeFeature].color} rounded-lg flex items-center justify-center`}>
                  {React.createElement(webFeatures[activeFeature].icon, { className: "w-4 h-4 text-white" })}
                </div>
                <span className="text-gray-900 font-medium">{webFeatures[activeFeature].title}</span>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Performance</span>
                  <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${webFeatures[activeFeature].color} w-5/6`}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">SEO Score</span>
                  <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${webFeatures[activeFeature].color} w-4/5`}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Conversion Rate</span>
                  <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${webFeatures[activeFeature].color} w-full`}></div>
                  </div>
                </div>
              </div>
            </div>

            <button className={`w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r ${webFeatures[activeFeature].color} text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300`}>
              <Play className="w-5 h-5" />
              {webFeatures[activeFeature].demo}
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Build Your Modern Website?
            </h3>
                         <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
               Let&apos;s create a website that not only looks amazing but drives real business results. 
               From concept to conversion, we&apos;ll build something extraordinary together.
             </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold">
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="group flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-800 rounded-xl border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 font-semibold">
                View Our Work
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 