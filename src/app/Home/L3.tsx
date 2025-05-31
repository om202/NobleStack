"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, MessageCircle, Shield, Code, Clock } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    {
      question: "What types of AI solutions do you build?",
      answer: "We specialize in building AI chatbots, automation systems, custom AI agents, and LLM-powered applications. Our solutions use cutting-edge technologies like GPT-4, Claude, Langchain, and CrewAI to create intelligent systems that handle tasks, interact naturally with users, and integrate seamlessly with your existing workflows.",
      icon: Code
    },
    {
      question: "How long does it take to build a custom website?",
      answer: "Typically, a modern web application takes 2-4 weeks from design to deployment. Simple websites can be delivered in 1-2 weeks, while complex SaaS platforms may take 4-8 weeks. We provide regular updates and involve you throughout the process to ensure we're building exactly what you need.",
      icon: Clock
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Absolutely! We offer comprehensive post-launch support including bug fixes, feature updates, security patches, and performance monitoring. Our support packages range from basic maintenance to full-scale development partnerships for growing businesses.",
      icon: Shield
    },
    {
      question: "Can you integrate AI into my existing website?",
      answer: "Yes! We excel at integrating AI features into existing websites and applications. Whether you want to add a chatbot, automate workflows, or implement AI-powered analytics, we can seamlessly integrate these capabilities without disrupting your current operations.",
      icon: MessageCircle
    }
  ];

  return (
    <section id="faq" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass text-gray-800 text-sm font-medium mb-4">
            <MessageCircle className="w-4 h-4 mr-2 text-blue-500" />
            Frequently Asked Questions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Got Questions?
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              {" "}We've Got Answers
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about Sigma Forge and how we can help bring your vision to life.
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
                  <Accordion.Trigger className="w-full text-left px-6 py-6 font-medium text-gray-900 hover:bg-gray-100 data-[state=open]:bg-gray-100 transition-all duration-300 flex items-center justify-between group">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                        <faq.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-lg">{faq.question}</span>
                    </div>
                    <ChevronDown className="w-5 h-5 text-gray-600 group-data-[state=open]:rotate-180 transition-transform duration-300" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="px-6 pb-6 text-gray-600 leading-relaxed data-[state=open]:animate-slide-up">
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to start your project?</h3>
              <p className="text-gray-600 mb-6">
                Let's discuss your vision and see how we can bring it to life with modern tech and AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <MessageCircle className="w-5 h-5" />
                  Schedule a Call
                </button>
                <button className="flex items-center justify-center gap-2 px-6 py-3 glass text-gray-800 rounded-xl hover:bg-gray-100 transition-all duration-300">
                  <Code className="w-5 h-5" />
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 