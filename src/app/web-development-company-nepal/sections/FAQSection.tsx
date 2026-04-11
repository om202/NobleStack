"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is the best web development company in Nepal?",
      a: "Noble Stack is recognized as one of the best web development companies in Nepal. We specialize in AI-first web development using Next.js, React, and TypeScript, and have shipped real web products — npgo.to, Loopn, and Create Profile Pic — that validate our engineering capability. Based in Kathmandu, we serve both Nepali businesses and international clients."
    },
    {
      q: "How much does web development cost in Nepal?",
      a: "Web development costs in Nepal depend on the project type and scope. A standard business website typically costs NPR 50,000–200,000. A custom web application or SaaS platform ranges from NPR 500,000 to NPR 5,000,000 or more. Hourly developer rates in Nepal fall between $25–$99/hr — approximately 60–80% lower than equivalent US or UK rates. Noble Stack provides detailed project estimates after a free discovery call."
    },
    {
      q: "How long does it take to build a website in Nepal?",
      a: "A standard business website takes 2–4 weeks from kickoff to launch. A custom web application takes 6–12 weeks. A full SaaS platform with complex features typically requires 3–6 months. Noble Stack provides a realistic project timeline in the initial scope document and updates it at every milestone."
    },
    {
      q: "What technologies does Noble Stack use for web development?",
      a: "Noble Stack builds web applications using Next.js, React, TypeScript, Tailwind CSS, Node.js, NestJS, GraphQL, PostgreSQL, MongoDB, and Prisma ORM. Infrastructure is managed on Vercel, AWS, or GCP with Docker, CI/CD pipelines, and GitHub Actions. All sites are built mobile-first and optimized for Google Core Web Vitals."
    },
    {
      q: "Does Noble Stack work with international clients?",
      a: "Yes. Noble Stack works with clients in Singapore, the United States, the United Kingdom, Australia, and across Asia. Our team communicates in English, follows structured project management practices, and has delivered products deployed globally. International clients often reach us for web development outsourcing to Nepal."
    },
    {
      q: "Can Noble Stack rebuild my existing WordPress website?",
      a: "Yes. Noble Stack migrates existing WordPress, PHP, or legacy websites to modern Next.js or React applications — preserving your content, URL structure, and SEO rankings while dramatically improving performance, security, and maintainability."
    },
    {
      q: "Do you provide website maintenance after launch?",
      a: "Yes. Noble Stack offers ongoing maintenance plans covering security updates, performance monitoring, content updates, bug fixes, and feature development after launch. We provide clear SLAs and dedicated support for all maintained projects."
    },
    {
      q: "Why should I hire a web development company in Nepal instead of a freelancer?",
      a: "A web development company provides structured project management, a full team (designers, developers, QA), accountability, and long-term support. Freelancers can be cost-effective for small tasks but often lack the depth of resources needed for complex projects, ongoing maintenance, or fast delivery timelines. Noble Stack gives you team-level execution at Nepal pricing."
    }
  ];

  return (
    <section className="py-20 bg-card-theme border-t border-theme overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[80px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[80px] -z-10" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-main-theme mb-4">
            Frequently Asked Questions About Web Development in Nepal
          </h2>
          <p className="text-lg text-theme">
            Direct answers to the most common questions about working with us.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border border-theme rounded-2xl overflow-hidden transition-all duration-300 ${
                openIdx === idx ? "bg-page-theme shadow-md" : "bg-card-theme hover:bg-page-theme"
              }`}
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left font-bold text-main-theme text-lg"
              >
                <h3 className="text-base sm:text-lg m-0 p-0 font-bold">{faq.q}</h3>
                <ChevronDown 
                  className={`w-5 h-5 shrink-0 transition-transform duration-300 ${openIdx === idx ? "rotate-180 text-blue-500" : "text-theme"}`} 
                />
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIdx === idx ? "max-h-[500px] pb-5 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="text-theme leading-relaxed">
                  <p>{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
