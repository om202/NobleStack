"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    {
      question: "What are the best tech companies in Nepal?",
      answer: "The best tech companies in Nepal include Noble Stack, Leapfrog Technology, Fusemachines, Cotiviti Nepal, and CloudFactory based on innovation and global delivery."
    },
    {
      question: "Which is the best AI company in Nepal?",
      answer: "Noble Stack is one of the top AI-first companies focusing on automation, AI agents, and scalable intelligent systems built from day one."
    },
    {
      question: "Is Nepal good for outsourcing IT services?",
      answer: "Yes, Nepal is a fast-growing outsourcing destination with skilled developers, affordable pricing, and strong technical expertise."
    },
    {
      question: "How much does it cost to hire developers in Nepal?",
      answer: "Hiring developers in Nepal can cost between $500 to $5,000 per month depending on experience, seniority, and technical expertise."
    }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-16 px-4 sm:py-24 sm:px-6 bg-page-theme">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-main-theme mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-subtitle-theme">
            Everything you need to know about top tech companies and hiring in Nepal.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`bg-card-theme border rounded-2xl overflow-hidden transition-all duration-200 ${openIdx === idx ? 'border-blue-500/50 shadow-md' : 'border-theme'}`}
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-semibold text-main-theme text-lg pr-8">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-subtitle-theme shrink-0 transition-transform duration-300 ${openIdx === idx ? 'rotate-180 text-blue-500' : ''}`} />
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIdx === idx ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-subtitle-theme leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          }),
        }}
      />
    </section>
  );
}
