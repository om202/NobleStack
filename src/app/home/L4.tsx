import React from "react";
import { MessageCircle, Zap, Globe, ShieldCheck } from "lucide-react";
import SectionHeader from "../../components/SectionHeader";

export default function FAQSection() {
  const faqs = [
    {
      question: "What makes Noble Stack one of the best IT companies in Kathmandu, Nepal?",
      answer: "Noble Stack combines AI-first engineering with deep full-stack expertise, making us one of the leading IT companies in Kathmandu. We ship real products — not just MVPs — using technologies like React, Next.js, Node.js, and LangChain. Our team is based in Kathmandu and serves businesses across Nepal and internationally.",
      icon: ShieldCheck
    },
    {
      question: "What IT solutions does Noble Stack offer in Nepal?",
      answer: "As a full-service IT solution company in Nepal, we offer web development, mobile app development (iOS & Android), AI chatbot systems, LLM integration, business process automation, SaaS platform development, and e-commerce solutions. All services are available to businesses in Kathmandu and across Nepal.",
      icon: Zap
    },
    {
      question: "How is Noble Stack different from other IT firms in Kathmandu?",
      answer: "Unlike most IT firms in Kathmandu, Noble Stack is 'AI-first' — meaning we integrate artificial intelligence into every product we build. We also build and launch our own products (like npgo.to and Loopn), which means our skills are proven in the real market, not just client work.",
      icon: MessageCircle
    },
    {
      question: "Which industries does this IT software company in Kathmandu serve?",
      answer: "We serve a wide range of industries including e-commerce, healthcare, finance, manufacturing, and retail. Whether you're a local startup in Nepal or an international enterprise, our IT solutions are customized to automate tasks, enhance customer experiences, and drive efficiency in your specific sector.",
      icon: Globe
    }
  ];

  return (
    <section id="faq" className="py-12 px-3 sm:py-16 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-5xl mx-auto">
        {/* SEO FIX: keyword-rich FAQ heading */}
        <SectionHeader
          title="FAQs — Noble Stack IT Services in Nepal"
          description="Everything you need to know about partnering with the leading IT firm in Kathmandu."
          imageSrc="/undraw_questions_g2px.svg"
          imageAlt="Questions & Answers Illustration"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {faqs.map((faq, index) => {
            const Icon = faq.icon;
            return (
              <div key={index} className="bg-page-theme rounded-2xl p-6 sm:p-8 shadow-sm border border-theme transition-all duration-300 hover:shadow-md">
                <div className="flex gap-4 sm:gap-6 items-start flex-col sm:flex-row">
                  <div className="w-12 h-12 bg-main-theme/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-main-theme" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-main-theme mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-subtitle-theme leading-relaxed text-[15px] sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
