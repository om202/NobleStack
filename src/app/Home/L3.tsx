"use client";

import { 
  Bot, 
  Zap, 
  MessageCircle, 
  Brain,
  ChevronRight,
  ArrowRight,
  Cpu,
  Settings
} from "lucide-react";
import { 
  SiOpenai, 
  SiPython, 
  SiStreamlit,
  SiHuggingface,
  SiDocker,
  SiAmazon
} from "react-icons/si";
import React from "react";
import { useState, useEffect } from "react";

export default function AIServicesSection() {
  const [activeFeature, setActiveFeature] = useState(0);

  // Auto-cycle through features every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % aiFeatures.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const aiFeatures = [
    {
      id: "ai-chatbots",
      title: "Intelligent AI Chatbots That Actually Work",
      description: "We build chatbots powered by GPT-4, Claude, and custom-trained models that understand context, maintain conversations, and deliver real business value—not just scripted responses.",
      icon: MessageCircle,
      color: "from-blue-500 to-cyan-500",
      stats: ["99% Uptime", "Human-like Responses", "Multi-Platform", "Custom Trained"],
      demo: "See Live Demo"
    },
    {
      id: "automation",
      title: "AI Automation That Eliminates Busywork",
      description: "Our automation systems handle repetitive tasks, process data intelligently, and integrate seamlessly with your existing tools—saving hours of manual work every day.",
      icon: Zap,
      color: "from-purple-500 to-pink-500",
      stats: ["Smart Workflows", "Tool Integration", "24/7 Operation", "ROI Tracking"],
      demo: "View Results"
    },
    {
      id: "custom-ai",
      title: "Custom AI Solutions Built for Your Business",
      description: "From document processing to predictive analytics, we create bespoke AI systems that solve your unique challenges with cutting-edge machine learning and LLMs.",
      icon: Brain,
      color: "from-green-500 to-emerald-500",
      stats: ["Tailored Models", "Enterprise Ready", "Scalable", "Production-Tested"],
      demo: "Explore Solutions"
    },
    {
      id: "rapid-deployment",
      title: "Deploy AI in Days, Not Months",
      description: "While others take months to deploy AI, we deliver working solutions in days. Our proven frameworks and pre-built components accelerate your AI transformation.",
      icon: Cpu,
      color: "from-orange-500 to-red-500",
      stats: ["Fast Deployment", "Proven Framework", "Quick ROI", "Minimal Downtime"],
      demo: "Speed Test"
    }
  ];

  const aiServices = [
    { name: "AI Chatbots & Virtual Assistants", icon: MessageCircle, status: "AI Expert", description: "GPT-4, Claude, Custom Models" },
    { name: "Business Process Automation", icon: Zap, status: "Automation Pro", description: "Smart Workflows & Integration" },
    { name: "Custom AI Development", icon: Brain, status: "ML Specialist", description: "Tailored AI Solutions" },
    { name: "AI Strategy & Consulting", icon: Settings, status: "Strategic Partner", description: "AI Transformation Guide" }
  ];

  const aiTechStack = [
    { name: "OpenAI GPT", icon: SiOpenai, color: "#00A67E" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "Streamlit", icon: SiStreamlit, color: "#FF4B4B" },
    { name: "Hugging Face", icon: SiHuggingface, color: "#FFD21E" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "Amazon AWS", icon: SiAmazon, color: "#FF9900" }
  ];

  return (
    <section id="ai-services" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
            <Bot className="w-4 h-4 mr-2" />
            AI Automation & Chatbot Specialists
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            We Build AI That
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              {" "}Actually Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            While others promise AI magic, we deliver proven solutions. Our AI chatbots and automation systems 
            are already transforming businesses, handling millions of interactions, and saving countless hours of manual work.
          </p>
          
          <button className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-800 rounded-xl border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 font-semibold">
            Get Your AI Solution
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* AI Tech Stack */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Cutting-Edge AI Technologies We Master
          </h3>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 min-h-[180px] flex flex-col justify-center">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {aiTechStack.map((tech, index) => (
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
        </div>

        {/* AI Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {aiServices.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300 group cursor-pointer min-h-[180px] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${aiFeatures[index].color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs px-2 py-1 bg-purple-500/20 text-purple-500 rounded-full">
                    {service.status}
                  </span>
                </div>
                <h3 className="text-gray-900 font-semibold mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
              </div>
              <button className="flex items-center text-purple-600 text-sm group-hover:text-purple-700 transition-colors">
                Learn More
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Why Our AI Solutions Dominate - Animated Carousel */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Why Our AI Solutions Dominate the Competition
          </h3>
          
          {/* Animated Feature Display */}
          <div className="relative overflow-hidden">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 min-h-[180px] flex flex-col justify-center">
              <div 
                key={activeFeature} 
                className="flex items-start gap-6 animate-fade-in"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${aiFeatures[activeFeature].color} rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                  {React.createElement(aiFeatures[activeFeature].icon, { className: "w-8 h-8 text-white" })}
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">{aiFeatures[activeFeature].title}</h4>
                  <p className="text-lg text-gray-600 mb-6">{aiFeatures[activeFeature].description}</p>
                  <div className="flex flex-wrap gap-3">
                    {aiFeatures[activeFeature].stats.map((stat, statIndex) => (
                      <span key={statIndex} className="text-sm px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-medium">
                        {stat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center mt-6 gap-3">
              {aiFeatures.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeFeature 
                      ? `bg-gradient-to-r ${aiFeatures[activeFeature].color}` 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 