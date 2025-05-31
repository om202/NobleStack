"use client";

import { 
  Bot, 
  Code, 
  Smartphone, 
  Brain, 
  Rocket, 
  Zap, 
  Globe, 
  Settings,
  Play,
  ChevronRight
} from "lucide-react";
import { 
  SiReact, 
  SiNextdotjs, 
  SiOpenai, 
  SiLangchain,
  SiHuggingface,
  SiPython,
  SiTensorflow,
  SiTypescript
} from "react-icons/si";
import { useState } from "react";
import React from "react";

export default function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: "ai-automation",
      title: "AI Agents & Automation",
      description: "Intelligent automation systems that handle repetitive tasks and streamline operations",
      icon: Bot,
      color: "from-blue-500 to-cyan-500",
      stats: ["Smart Task Handling", "24/7 Operations", "Workflow Optimization"],
      demo: "View AI Demo"
    },
    {
      id: "web-development",
      title: "Modern Web Development",
      description: "Lightning-fast, SEO-optimized websites that convert visitors into customers",
      icon: Code,
      color: "from-green-500 to-emerald-500",
      stats: ["Blazing Fast", "SEO Optimized", "Responsive Design"],
      demo: "See Portfolio"
    },
    {
      id: "ai-chatbots",
      title: "AI Chatbots",
      description: "Natural conversation AI powered by GPT-4 and Claude for customer support",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      stats: ["Natural Conversations", "Custom Trained", "Deploy Ready"],
      demo: "Try Chatbot"
    },
    {
      id: "custom-software",
      title: "Custom Software",
      description: "From your idea to deployed software with precision and modern tech",
      icon: Smartphone,
      color: "from-orange-500 to-red-500",
      stats: ["Custom Built", "Modern Stack", "Scalable Solutions"],
      demo: "Get Quote"
    }
  ];

  const services = [
    { name: "Artificial Intelligence", icon: Brain, status: "Core Service" },
    { name: "Modern Web Development", icon: Globe, status: "Specialized" },
    { name: "AI Agents & Automation", icon: Settings, status: "Advanced" },
    { name: "Custom Software", icon: Rocket, status: "Full-Stack" }
  ];

  const techStack = [
    { name: "React.js", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "Hugging Face", icon: SiHuggingface, color: "#FFD21E" },
    { name: "Langchain", icon: SiLangchain, color: "#1C3C3C" },
    { name: "OpenAI", icon: SiOpenai, color: "#412991" },
    { name: "CrewAI", icon: Bot, color: "#FF6B6B" },
    { name: "LlamaIndex", icon: Brain, color: "#00D2FF" },
    { name: "MS AutoGen", icon: SiPython, color: "#0078D4" }
  ];

  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass text-gray-800 text-sm font-medium mb-4">
            <Zap className="w-4 h-4 mr-2 text-yellow-500" />
            Core Engineering Stack
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            We Build Modern
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}Websites That Convert
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We design and build lightning-fast, SEO-optimized websites that look great on every screen. From portfolio pages to SaaS platforms, we craft digital experiences that work.
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-16 animate-slide-up">
          {techStack.map((tech, index) => (
            <div key={index} className="glass rounded-2xl p-4 card-hover group cursor-pointer text-center">
              <div className="flex justify-center mb-2">
                <tech.icon 
                  size={32} 
                  style={{ color: tech.color }}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-gray-900 font-medium text-sm">{tech.name}</h3>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 animate-slide-up">
          {services.map((service, index) => (
            <div key={index} className="glass rounded-2xl p-6 card-hover group cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${features[index].color} rounded-xl flex items-center justify-center shadow-lg`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs px-2 py-1 bg-green-500/20 text-green-500 rounded-full">
                  {service.status}
                </span>
              </div>
              <h3 className="text-gray-900 font-semibold mb-2">{service.name}</h3>
              <button className="flex items-center text-gray-600 text-sm group-hover:text-gray-900 transition-colors">
                Learn More
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Interactive Feature Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-slide-up">
          {/* Feature Cards */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className={`glass rounded-2xl p-6 card-hover cursor-pointer transition-all duration-300 ${
                  activeFeature === index ? 'ring-2 ring-gray-300 bg-gray-50' : ''
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {feature.stats.map((stat, statIndex) => (
                        <span key={statIndex} className="text-xs px-3 py-1 glass-dark text-gray-600 rounded-full">
                          {stat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Demo Panel */}
          <div className="glass rounded-2xl p-8 card-hover">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Service Preview</h3>
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>

            <div className="glass-dark rounded-xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-8 h-8 bg-gradient-to-r ${features[activeFeature].color} rounded-lg flex items-center justify-center`}>
                  {React.createElement(features[activeFeature].icon, { className: "w-4 h-4 text-white" })}
                </div>
                <span className="text-gray-900 font-medium">{features[activeFeature].title}</span>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Quality</span>
                  <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${features[activeFeature].color} w-5/6`}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Speed</span>
                  <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${features[activeFeature].color} w-4/5`}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Innovation</span>
                  <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${features[activeFeature].color} w-full`}></div>
                  </div>
                </div>
              </div>
            </div>

            <button className={`w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r ${features[activeFeature].color} text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300`}>
              <Play className="w-5 h-5" />
              {features[activeFeature].demo}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 