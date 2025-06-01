"use client";

import { useState } from "react";
import {
  ChevronDown,
  MessageCircle,
  Shield,
  Code,
  Clock,
  Zap,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  Cpu,
  Database,
  Globe,
  Rocket,
} from "lucide-react";

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("technical");
  const [animationKey, setAnimationKey] = useState(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
    setAnimationKey(prev => prev + 1);
  };



  const categories = [
    {
      id: "technical",
      name: "Technical",
      icon: Code,
      count: "4 FAQs",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "business",
      name: "Business",
      icon: TrendingUp,
      count: "5 FAQs", 
      color: "from-green-500 to-emerald-500"
    },
    {
      id: "support",
      name: "Support",
      icon: Shield,
      count: "5 FAQs",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const faqCategories = {
    technical: [
      {
        question: "What cutting-edge AI technologies do you implement?",
        answer: "We leverage state-of-the-art AI technologies including GPT-4 Turbo, Claude 3.5 Sonnet, LangChain for agent orchestration, CrewAI for multi-agent systems, and custom transformer models. Our tech stack includes vector databases (Pinecone, Weaviate), semantic search, RAG architectures, and real-time AI inference systems.",
        icon: Cpu,
        metrics: ["GPT-4 Integration", "Vector Search", "Real-time AI", "Custom Models"],
        complexity: "Advanced",
        deliveryTime: "2-6 weeks"
      },
      {
        question: "How do you ensure optimal performance in web applications?",
        answer: "We implement advanced performance optimization techniques including Next.js 14 App Router, Server Components, streaming SSR, edge computing with Vercel Edge Functions, image optimization, code splitting, and sophisticated caching strategies. We achieve Core Web Vitals scores of 95+ consistently.",
        icon: Zap,
        metrics: ["<2s Load Time", "95+ CWV Score", "Edge Computing", "Optimized Assets"],
        complexity: "Expert",
        deliveryTime: "1-4 weeks"
      },
      {
        question: "What databases and infrastructure do you work with?",
        answer: "Our infrastructure expertise spans PostgreSQL, MongoDB, Redis for caching, Supabase for real-time features, PlanetScale for global databases, and cloud platforms including Vercel, AWS, and Railway. We implement CI/CD pipelines, automated testing, and monitoring systems.",
        icon: Database,
        metrics: ["Multi-Cloud", "Auto-scaling", "99.9% Uptime", "Global CDN"],
        complexity: "Enterprise",
        deliveryTime: "2-8 weeks"
      },
      {
        question: "How do you integrate AI into existing systems seamlessly?",
        answer: "We use microservices architecture, API-first design, webhook integrations, and gradual migration strategies. Our AI integration includes smart APIs, background processing, queue systems, and comprehensive monitoring to ensure zero downtime during implementation.",
        icon: Globe,
        metrics: ["Zero Downtime", "API-First", "Microservices", "Smart Routing"],
        complexity: "Advanced",
        deliveryTime: "3-6 weeks"
      }
    ],
    business: [
      {
        question: "What's your typical project timeline and methodology?",
        answer: "We follow an agile development approach with 1-2 week sprints. Discovery phase takes 3-5 days, design 1-2 weeks, development 2-8 weeks depending on complexity, and deployment with testing 3-5 days. You get regular demos and can provide feedback throughout.",
        icon: Clock,
        metrics: ["Agile Sprints", "Regular Demos", "Client Feedback", "Iterative Delivery"],
        complexity: "Structured",
        deliveryTime: "1-8 weeks"
      },
      {
        question: "How do you ensure ROI and business value?",
        answer: "We focus on measurable outcomes: conversion rate optimization, user engagement metrics, performance KPIs, and business intelligence integration. Our solutions typically see 30-200% improvement in key metrics within 3 months of launch.",
        icon: TrendingUp,
        metrics: ["30-200% ROI", "KPI Tracking", "A/B Testing", "Analytics Integration"],
        complexity: "Results-Driven",
        deliveryTime: "Ongoing"
      },
      {
        question: "Do you work with enterprise clients and scaling requirements?",
        answer: "Absolutely! We handle enterprise-grade solutions with advanced security, compliance (SOC2, GDPR), multi-tenant architectures, and systems that scale to millions of users. Our solutions include load balancing, auto-scaling, and global deployment strategies.",
        icon: Users,
        metrics: ["Enterprise Security", "Multi-tenant", "Global Scale", "Compliance Ready"],
        complexity: "Enterprise",
        deliveryTime: "4-12 weeks"
      },
      {
        question: "What's your pricing structure and how do you handle project costs?",
        answer: "We offer flexible pricing models including fixed-price projects, retainer agreements, and equity partnerships for startups. Our transparent pricing includes detailed proposals with milestone-based payments, no hidden costs, and optional maintenance packages post-launch.",
        icon: TrendingUp,
        metrics: ["Transparent Pricing", "Milestone Payments", "No Hidden Costs", "Flexible Models"],
        complexity: "Transparent",
        deliveryTime: "Custom"
      },
      {
        question: "How do you handle communication and project collaboration?",
        answer: "We maintain constant communication through dedicated Slack channels, weekly video calls, real-time project dashboards, and collaborative tools like Figma and Linear. You'll have direct access to our development team and regular progress updates with actionable feedback loops.",
        icon: MessageCircle,
        metrics: ["Slack Integration", "Weekly Calls", "Live Dashboards", "Direct Access"],
        complexity: "Collaborative",
        deliveryTime: "Ongoing"
      }
    ],
    support: [
      {
        question: "What does your post-launch support include?",
        answer: "Comprehensive support including 24/7 monitoring, automated alerts, performance optimization, security updates, feature enhancements, and dedicated support channels. We offer SLA-backed response times and proactive maintenance.",
        icon: Shield,
        metrics: ["24/7 Monitoring", "SLA Backed", "Proactive Support", "Security Updates"],
        complexity: "Comprehensive",
        deliveryTime: "Ongoing"
      },
      {
        question: "How do you handle scaling and future enhancements?",
        answer: "Our architecture is built for growth with modular design, microservices, API versioning, and cloud-native patterns. We provide roadmap planning, capacity planning, and can seamlessly add new features or scale infrastructure as your business grows.",
        icon: Rocket,
        metrics: ["Modular Design", "Cloud-Native", "Roadmap Planning", "Seamless Scaling"],
        complexity: "Future-Proof",
        deliveryTime: "Ongoing"
      },
      {
        question: "Do you provide training and onboarding for our team?",
        answer: "Yes! We provide comprehensive training including technical documentation, video tutorials, hands-on workshops, and knowledge transfer sessions. Our training covers system administration, content management, and best practices for ongoing maintenance.",
        icon: Users,
        metrics: ["Video Tutorials", "Hands-on Training", "Documentation", "Knowledge Transfer"],
        complexity: "Educational",
        deliveryTime: "1-2 weeks"
      },
      {
        question: "How do you handle migration from existing systems?",
        answer: "We specialize in seamless migrations with zero downtime strategies, data integrity verification, gradual rollouts, and comprehensive backup systems. Our migration process includes risk assessment, testing environments, and rollback procedures to ensure business continuity.",
        icon: Database,
        metrics: ["Zero Downtime", "Data Integrity", "Gradual Rollout", "Backup Systems"],
        complexity: "Migration Expert",
        deliveryTime: "2-6 weeks"
      },
      {
        question: "What security measures and compliance standards do you follow?",
        answer: "We implement enterprise-grade security including HTTPS/TLS encryption, OAuth authentication, role-based access control, and regular security audits. We ensure compliance with GDPR, SOC2, HIPAA where required, and follow OWASP security guidelines.",
        icon: Shield,
        metrics: ["Enterprise Security", "GDPR Compliant", "OWASP Guidelines", "Regular Audits"],
        complexity: "Security-First",
        deliveryTime: "Built-in"
      }
    ]
  };

  const currentFaqs = faqCategories[activeCategory as keyof typeof faqCategories];

  return (
    <section id="faq" className="py-6 sm:py-8 md:py-10 lg:py-12 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-base font-medium mb-4">
            <MessageCircle className="w-4 h-4 mr-2" />
            Technical FAQ & Solutions Guide
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Technical Deep Dive
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              {" "}
              Questions & Answers
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive technical documentation and answers to help you understand our capabilities, 
            methodologies, and how we can solve your specific challenges.
          </p>
        </div>

                {/* Category Selection */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-sm border border-gray-200 flex flex-col sm:flex-row gap-2 sm:gap-0 w-full max-w-md sm:max-w-none sm:inline-flex">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setOpenFaq(null);
                  setAnimationKey(prev => prev + 1);
                }}
                className={`flex items-center gap-3 px-4 sm:px-6 py-3 rounded-xl transition-all duration-200 justify-center sm:justify-start ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-sm`
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <div className="text-left sm:text-left text-center">
                  <div className="font-semibold text-sm sm:text-base">{category.name}</div>
                  <div className={`text-xs ${activeCategory === category.id ? 'text-white/80' : 'text-gray-500'}`}>
                    {category.count}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

                 {/* FAQ Items with enhanced styling */}
         <div className="space-y-4 mb-10 sm:mb-16" key={animationKey}>
           {currentFaqs.map((faq, index) => (
             <div
               key={`${activeCategory}-${index}`}
               className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-200"
             >
              <button
                                 onClick={() => toggleFaq(index)}
                 className="w-full text-left px-6 py-6 hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between group"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className={`w-12 h-12 bg-gradient-to-r ${categories.find(c => c.id === activeCategory)?.color} rounded-xl flex items-center justify-center shadow-sm`}>
                    <faq.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-lg font-semibold text-gray-900">
                        {faq.question}
                      </span>
                      <span className="text-base px-2 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
                        {faq.complexity}
                      </span>
                    </div>
                    <div className="text-base text-gray-500">
                      Delivery: {faq.deliveryTime}
                    </div>
                  </div>
                </div>
                                 <ChevronDown
                   className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${
                     openFaq === index ? "rotate-180" : ""
                   }`}
                 />
              </button>

                             {openFaq === index && (
                 <div className="px-6 pb-6 border-t border-gray-100">
                   <div className="pl-16 pt-6">
                    <p className="text-base text-gray-600 leading-relaxed mb-6">
                      {faq.answer}
                    </p>
                    
                                         {/* Metrics Grid */}
                     <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                       {faq.metrics.map((metric, metricIndex) => (
                         <div
                           key={metricIndex}
                           className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg border"
                         >
                           <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                           <span className="text-base font-medium text-gray-700">{metric}</span>
                         </div>
                       ))}
                     </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Have a specific question?
          </h3>
          <p className="text-base text-gray-600 mb-6 max-w-2xl mx-auto">
            Our team is ready to discuss your unique requirements and provide 
            detailed solutions tailored to your project needs.
          </p>
                     <button className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 shadow-lg hover:shadow-xl font-semibold">
             Schedule Technical Consultation
             <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-200" />
           </button>
        </div>
      </div>
    </section>
  );
}
