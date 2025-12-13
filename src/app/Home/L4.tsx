"use client";

import { useState } from "react";
import {
  MessageCircle,
  Shield,
  Code,
  Clock,
  Zap,
  TrendingUp,
  Users,
  ArrowRight,
  Cpu,
  Database,
  Globe,
  Rocket,
} from "lucide-react";
import FAQItem from "../../components/FAQItem";
import CTAButton from "../../components/CTAButton";

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
      color: "from-nobleblue-500 to-nobleblue-600"
    },
    {
      id: "business",
      name: "Business",
      icon: TrendingUp,
      count: "5 FAQs",
      color: "from-nobleblue-600 to-nobleblue-700"
    },
    {
      id: "support",
      name: "Support",
      icon: Shield,
      count: "5 FAQs",
      color: "from-nobleblue-500 to-nobleblue-600"
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
    <section id="faq" className="py-12 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            <span className="text-gradient-nobleblue">
              Questions & Answers
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive technical documentation and answers to help you understand our capabilities,
            methodologies, and how we can solve your specific challenges.
          </p>
        </div>

        {/* Category Selection */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-xl p-1.5 shadow-sm border border-gray-200 inline-flex gap-1">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setOpenFaq(null);
                  setAnimationKey(prev => prev + 1);
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${activeCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-sm`
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
              >
                <category.icon className="w-4 h-4" />
                <div className="text-left">
                  <div className="font-semibold text-sm">{category.name}</div>
                  <div className={`text-xs ${activeCategory === category.id ? 'text-white/80' : 'text-gray-500'}`}>
                    {category.count}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Items with enhanced styling */}
        <div className="space-y-4 mb-16" key={animationKey}>
          {currentFaqs.map((faq, index) => (
            <FAQItem
              key={`${activeCategory}-${index}`}
              question={faq.question}
              answer={faq.answer}
              metrics={faq.metrics}
              isOpen={openFaq === index}
              onToggle={() => toggleFaq(index)}
            />
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
          <CTAButton variant="primary" icon={ArrowRight} className="inline-flex shadow-lg hover:shadow-xl" href="https://calendar.app.google/mWmd6v421Pk66LQ26">
            Schedule Technical Consultation
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
