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
  SiStreamlit,
  SiHuggingface,
  SiAmazon,
  SiGoogle,
  SiAnthropic,
  SiLangchain,
  SiFastapi,
  SiN8N,
  SiZapier
} from "react-icons/si";
import React from "react";
import TechStackCarousel from "../../components/TechStackCarousel";
import AnimatedFeatureCarousel from "../../components/AnimatedFeatureCarousel";

export default function AIServicesSection() {
  const aiFeatures = [
    {
      id: "ai-chatbots",
      title: "Intelligent AI Chatbots That Actually Work",
      description: "We build chatbots powered by GPT-4, Claude, and custom-trained models that understand context, maintain conversations, and deliver real business value—not just scripted responses.",
      icon: MessageCircle,
      color: "from-blue-500 to-cyan-500",
      stats: ["99% Uptime", "Human-like Responses", "Multi-Platform", "Custom Trained"],
    },
    {
      id: "automation",
      title: "AI Automation That Eliminates Busywork",
      description: "Our automation systems handle repetitive tasks, process data intelligently, and integrate seamlessly with your existing tools—saving hours of manual work every day.",
      icon: Zap,
      color: "from-purple-500 to-pink-500",
      stats: ["Smart Workflows", "Tool Integration", "24/7 Operation", "ROI Tracking"],
    },
    {
      id: "custom-ai",
      title: "Custom AI Solutions Built for Your Business",
      description: "From document processing to predictive analytics, we create bespoke AI systems that solve your unique challenges with cutting-edge machine learning and LLMs.",
      icon: Brain,
      color: "from-green-500 to-emerald-500",
      stats: ["Tailored Models", "Enterprise Ready", "Scalable", "Production-Tested"],
    },
    {
      id: "rapid-deployment",
      title: "Deploy AI in Days, Not Months",
      description: "While others take months to deploy AI, we deliver working solutions in days. Our proven frameworks and pre-built components accelerate your AI transformation.",
      icon: Cpu,
      color: "from-orange-500 to-red-500",
      stats: ["Fast Deployment", "Proven Framework", "Quick ROI", "Minimal Downtime"],
    }
  ];

  const aiServices = [
    { name: "AI Chatbots & Virtual Assistants", icon: MessageCircle, status: "AI Expert", description: "GPT-4, Claude, Custom Models" },
    { name: "Business Process Automation", icon: Zap, status: "Automation Pro", description: "Smart Workflows & Integration" },
    { name: "Custom AI Development", icon: Brain, status: "ML Specialist", description: "Tailored AI Solutions" },
    { name: "AI Strategy & Consulting", icon: Settings, status: "Strategic Partner", description: "AI Transformation Guide" }
  ];

  const aiTechStack = [
    { name: "OpenAI", icon: SiOpenai, color: "#00A67E" },
    { name: "Claude", icon: SiAnthropic, color: "#FF6B35" },
    { name: "Hugging Face Transformers", icon: SiHuggingface, color: "#FFD21E" },
    { name: "LangChain", icon: SiLangchain, color: "#339933" },
    { name: "LLamaIndex", icon: Brain, color: "#FF4500" },
    { name: "Pinecone", icon: Brain, color: "#FF69B4" },
    { name: "Weaviate", icon: Brain, color: "#00CED1" },
    { name: "Qdrant", icon: Brain, color: "#8A2BE2" },
    { name: "Milvus", icon: Brain, color: "#FF1493" },
    { name: "FAISS", icon: Brain, color: "#4169E1" },
    { name: "AWS Bedrock", icon: SiAmazon, color: "#FF9900" },
    { name: "Azure OpenAI Service", icon: Bot, color: "#0078D4" },
    { name: "Google Vertex AI", icon: SiGoogle, color: "#4285F4" },
    { name: "LangGraph", icon: SiLangchain, color: "#32CD32" },
    { name: "MS AutoGen", icon: Bot, color: "#00BCF2" },
    { name: "CrewAI", icon: Brain, color: "#FF6347" },
    { name: "Semantic Kernel", icon: Brain, color: "#9370DB" },
    { name: "SuperAGI", icon: Brain, color: "#FF4500" },
    { name: "AgentLite", icon: Brain, color: "#20B2AA" },
    { name: "Streamlit", icon: SiStreamlit, color: "#FF4B4B" },
    { name: "Gradio", icon: Bot, color: "#FFA500" },
    { name: "FastAPI", icon: SiFastapi, color: "#009688" },
    { name: "n8n", icon: SiN8N, color: "#EA4B71" },
    { name: "Zapier", icon: SiZapier, color: "#FF4A00" }
  ];

  return (
    <section id="ai-services" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-base font-medium mb-4">
            <Bot className="w-4 h-4 mr-2" />
            AI Automation & Chatbot Specialists
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            We Build AI That
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              {" "}Actually Works
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            While others promise AI magic, we deliver proven solutions. Our AI chatbots and automation systems 
            are already transforming businesses, handling millions of interactions, and saving countless hours of manual work.
          </p>
          
          <button className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-800 rounded-xl border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 font-semibold">
            Get Your AI Solution
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* AI Tech Stack - Auto Scrolling */}
        <TechStackCarousel 
          technologies={aiTechStack}
          title="Cutting-Edge AI Technologies We Master"
          autoScrollInterval={2000}
        />

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
                <p className="text-base text-gray-600 mb-4">{service.description}</p>
              </div>
              <button className="flex items-center text-purple-600 text-base group-hover:text-purple-700 transition-colors">
                Learn More
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Why Our AI Solutions Dominate - Animated Carousel */}
        <AnimatedFeatureCarousel
          features={aiFeatures}
          title="Why Our AI Solutions Dominate the Competition"
          autoScrollInterval={4500}
        />
      </div>
    </section>
  );
} 