"use client";

import { ArrowRight, Star, CheckCircle, TrendingUp, Users, Zap, Target } from "lucide-react";
import { useState } from "react";

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState("overview");

  const stats = [
    { label: "Active Users", value: "12.5k", icon: Users, trend: "+23%" },
    { label: "Revenue Growth", value: "$45.2k", icon: TrendingUp, trend: "+18%" },
    { label: "Success Rate", value: "94.8%", icon: Target, trend: "+5%" },
    { label: "AI Insights", value: "2.1k", icon: Zap, trend: "+31%" }
  ];

  return (
    <section className="py-12 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* App-like Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass text-gray-800 text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2 text-yellow-500" />
            Now in Public Beta • 10k+ Users
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
            Your AI-Powered
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              {" "}
              Startup Dashboard
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Monitor, analyze, and scale your business with real-time insights and automated workflows.
          </p>
        </div>

        {/* App-like Navigation Tabs */}
        <div className="flex justify-center mb-8 animate-slide-up">
          <div className="glass rounded-2xl p-2 inline-flex">
            {["overview", "analytics", "tools"].map((tab) => (
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

        {/* Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12 animate-slide-up">
          {/* Main Dashboard Card */}
          <div className="lg:col-span-2">
            <div className="glass rounded-2xl p-8 card-hover">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Business Overview</h2>
                <div className="flex gap-2">
                  <button className="w-3 h-3 bg-red-500 rounded-full"></button>
                  <button className="w-3 h-3 bg-yellow-500 rounded-full"></button>
                  <button className="w-3 h-3 bg-green-500 rounded-full"></button>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {stats.map((stat, index) => (
                  <div key={index} className="glass-dark rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <stat.icon className="w-5 h-5 text-blue-400" />
                      <span className="text-green-400 text-sm font-medium">{stat.trend}</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center gap-2 flex-1 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300">
                  Open Dashboard
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="flex items-center justify-center gap-2 flex-1 py-4 glass text-gray-800 rounded-xl hover:bg-gray-100 transition-all duration-300">
                  View Demo
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 5v10l7-5z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Side Panel */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="glass rounded-2xl p-6 card-hover">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 p-3 glass-dark rounded-xl text-gray-800 hover:bg-gray-100 transition-all duration-300">
                  <Zap className="w-5 h-5 text-yellow-500" />
                  Generate Report
                </button>
                <button className="w-full flex items-center gap-3 p-3 glass-dark rounded-xl text-gray-800 hover:bg-gray-100 transition-all duration-300">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  Analyze Trends
                </button>
                <button className="w-full flex items-center gap-3 p-3 glass-dark rounded-xl text-gray-800 hover:bg-gray-100 transition-all duration-300">
                  <Target className="w-5 h-5 text-blue-500" />
                  Set Goals
                </button>
              </div>
            </div>

            {/* Activity Feed */}
            <div className="glass rounded-2xl p-6 card-hover">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">New user signup</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-600">Revenue milestone reached</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-600">AI insight generated</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center animate-fade-in">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
              Free 14-day trial
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
              No credit card required
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
              Enterprise security
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 