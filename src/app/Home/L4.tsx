"use client";

import { useState } from "react";
import {
  ChevronDown,
  MessageCircle,
  Shield,
  Code,
  Clock,
} from "lucide-react";

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What types of AI solutions do you build?",
      answer:
        "We specialize in building AI chatbots, automation systems, custom AI agents, and LLM-powered applications. Our solutions use cutting-edge technologies like GPT-4, Claude, Langchain, and CrewAI to create intelligent systems that handle tasks, interact naturally with users, and integrate seamlessly with your existing workflows.",
      icon: Code,
    },
    {
      question: "How long does it take to build a custom website?",
      answer:
        "Typically, a modern web application takes 2-4 weeks from design to deployment. Simple websites can be delivered in 1-2 weeks, while complex SaaS platforms may take 4-8 weeks. We provide regular updates and involve you throughout the process to ensure we&apos;re building exactly what you need.",
      icon: Clock,
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer:
        "Absolutely! We offer comprehensive post-launch support including bug fixes, feature updates, security patches, and performance monitoring. Our support packages range from basic maintenance to full-scale development partnerships for growing businesses.",
      icon: Shield,
    },
    {
      question: "Can you integrate AI into my existing website?",
      answer:
        "Yes! We excel at integrating AI features into existing websites and applications. Whether you want to add a chatbot, automate workflows, or implement AI-powered analytics, we can seamlessly integrate these capabilities without disrupting your current operations.",
      icon: MessageCircle,
    },
  ];

  return (
    <section id="faq" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
            <MessageCircle className="w-4 h-4 mr-2" />
            Frequently Asked Questions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Got Questions?
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              {" "}
              We&apos;ve Got Answers
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about Noble Stack and how we can help
            bring your vision to life.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left px-6 py-6 hover:bg-gray-50 transition-colors duration-300 flex items-center justify-between group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-sm">
                    <faq.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${
                    openFaq === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openFaq === index && (
                <div className="px-6 pb-6 border-t border-gray-100">
                  <div className="pl-16 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
