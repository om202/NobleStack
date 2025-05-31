"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, MessageCircle, Shield, Zap, Users } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    {
      question: "How does the AI-powered insights feature work?",
      answer: "Our AI analyzes market trends, competitor data, and user feedback in real-time to provide actionable recommendations for your startup. It uses machine learning models trained on thousands of successful business patterns.",
      icon: Zap
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required to start, and you can cancel anytime with no questions asked.",
      icon: MessageCircle
    },
    {
      question: "How secure is my data?",
      answer: "We use enterprise-grade security with end-to-end encryption, maintain SOC 2 compliance, and store data in secure cloud infrastructure with 99.9% uptime guarantee.",
      icon: Shield
    },
    {
      question: "Can my team collaborate on the platform?",
      answer: "Absolutely! Our platform supports unlimited team members with real-time collaboration tools, shared workspaces, role-based permissions, and activity tracking.",
      icon: Users
    }
  ];

  return (
    <section id="faq" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass text-white text-sm font-medium mb-4">
            <MessageCircle className="w-4 h-4 mr-2 text-blue-400" />
            Frequently Asked Questions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Got Questions?
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              {" "}We've Got Answers
            </span>
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Everything you need to know about StartupFlow and how it can help your business grow.
          </p>
        </div>

        <div className="animate-slide-up">
          <Accordion.Root
            type="single"
            collapsible
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <Accordion.Item
                key={index}
                value={`item-${index}`}
                className="glass rounded-2xl overflow-hidden card-hover"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="w-full text-left px-6 py-6 font-medium text-white hover:bg-white/10 data-[state=open]:bg-white/10 transition-all duration-300 flex items-center justify-between group">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                        <faq.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-lg">{faq.question}</span>
                    </div>
                    <ChevronDown className="w-5 h-5 text-gray-300 group-data-[state=open]:rotate-180 transition-transform duration-300" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="px-6 pb-6 text-gray-300 leading-relaxed data-[state=open]:animate-slide-up">
                  <div className="pl-14">
                    {faq.answer}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>

          {/* Additional Support Section */}
          <div className="mt-12 text-center">
            <div className="glass rounded-2xl p-8 card-hover">
              <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
              <p className="text-gray-300 mb-6">
                Our support team is here to help you get the most out of StartupFlow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <MessageCircle className="w-5 h-5" />
                  Contact Support
                </button>
                <button className="flex items-center justify-center gap-2 px-6 py-3 glass text-white rounded-xl hover:bg-white/20 transition-all duration-300">
                  <Users className="w-5 h-5" />
                  Join Community
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 