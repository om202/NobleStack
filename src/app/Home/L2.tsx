"use client";

import { 
  Zap, 
  Shield, 
  Users, 
  Brain, 
  Rocket, 
  BarChart3, 
  Globe, 
  Settings,
  Play,
  ChevronRight
} from "lucide-react";
import { useState } from "react";
import React from "react";

export default function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: "insights",
      title: "AI-Powered Analytics",
      description: "Real-time insights and predictions for your business decisions",
      icon: Brain,
      color: "from-blue-500 to-cyan-500",
      stats: ["95% Accuracy", "Real-time Data", "Predictive Models"],
      demo: "View Live Demo"
    },
    {
      id: "security",
      title: "Enterprise Security",
      description: "Bank-level security with 99.9% uptime guarantee",
      icon: Shield,
      color: "from-green-500 to-emerald-500",
      stats: ["256-bit Encryption", "SOC 2 Compliant", "24/7 Monitoring"],
      demo: "Security Report"
    },
    {
      id: "collaboration",
      title: "Team Workspace",
      description: "Collaborate seamlessly with real-time sync and shared resources",
      icon: Users,
      color: "from-purple-500 to-pink-500",
      stats: ["Unlimited Users", "Real-time Sync", "Version Control"],
      demo: "Try Workspace"
    },
    {
      id: "scaling",
      title: "Auto-Scaling Tools",
      description: "Automated workflows and scaling solutions for growing businesses",
      icon: Rocket,
      color: "from-orange-500 to-red-500",
      stats: ["Auto Deploy", "Load Balancing", "Performance Optimization"],
      demo: "Scale Now"
    }
  ];

  const tools = [
    { name: "Business Intelligence", icon: BarChart3, usage: "Active" },
    { name: "Global Analytics", icon: Globe, usage: "24/7" },
    { name: "Automation Hub", icon: Settings, usage: "Running" },
    { name: "Performance Monitor", icon: Zap, usage: "Live" }
  ];

  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* App-like Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass text-white text-sm font-medium mb-4">
            <Zap className="w-4 h-4 mr-2 text-yellow-400" />
            Premium Features Available
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Your Complete
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}Business Toolkit
            </span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Everything you need to monitor, analyze, and scale your startup - all in one powerful platform.
          </p>
        </div>

        {/* App-like Dashboard Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 animate-slide-up">
          {tools.map((tool, index) => (
            <div key={index} className="glass rounded-2xl p-6 card-hover group cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${features[index % features.length].color} rounded-xl flex items-center justify-center shadow-lg`}>
                  <tool.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded-full">
                  {tool.usage}
                </span>
              </div>
              <h3 className="text-white font-semibold mb-2">{tool.name}</h3>
              <button className="flex items-center text-gray-300 text-sm group-hover:text-white transition-colors">
                Open Tool
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
                  activeFeature === index ? 'ring-2 ring-white/30 bg-white/20' : ''
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {feature.stats.map((stat, statIndex) => (
                        <span key={statIndex} className="text-xs px-3 py-1 glass-dark text-gray-300 rounded-full">
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
              <h3 className="text-2xl font-bold text-white">Live Demo</h3>
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
                <span className="text-white font-medium">{features[activeFeature].title}</span>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Performance</span>
                  <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${features[activeFeature].color} w-4/5`}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Efficiency</span>
                  <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${features[activeFeature].color} w-5/6`}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Integration</span>
                  <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
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