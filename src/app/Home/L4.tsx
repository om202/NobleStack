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
  Cpu,
  Database,
  Globe,
  Rocket,
  Brain,
} from "lucide-react";
import FAQItem from "../../components/FAQItem";

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("ai");
  const [animationKey, setAnimationKey] = useState(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
    setAnimationKey(prev => prev + 1);
  };



  const categories = [
    {
      id: "ai",
      name: "AI & Technology",
      icon: Cpu,
      count: "5 FAQs",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: "web",
      name: "Web Development",
      icon: Code,
      count: "5 FAQs",
      color: "from-blue-600 to-blue-700"
    },
    {
      id: "business",
      name: "Business & Support",
      icon: TrendingUp,
      count: "5 FAQs",
      color: "from-blue-500 to-blue-600"
    }
  ];

  const faqCategories = {
    ai: [
      {
        question: "What is AI, and how does it benefit my business?",
        answer: "AI (Artificial Intelligence) refers to advanced systems that simulate human intelligence to perform complex tasks like decision-making, learning, pattern recognition, and problem-solving. For businesses, AI offers transformative benefits: it automates repetitive processes (saving hundreds of hours monthly), enhances customer service through intelligent chatbots available 24/7, analyzes vast amounts of data to uncover actionable insights, predicts market trends, personalizes customer experiences, and improves decision-making with data-driven recommendations. Whether you're in e-commerce, healthcare, finance, or manufacturing, AI can reduce operational costs by 20-40% while simultaneously increasing productivity and customer satisfaction.",
        icon: Brain,
      },
      {
        question: "How does AI improve business operations?",
        answer: "AI revolutionizes business operations through intelligent automation and data analysis. It streamlines workflows by automating repetitive tasks like data entry, invoice processing, and customer inquiries, freeing your team to focus on strategic work. AI dramatically increases efficiency through predictive maintenance (preventing costly downtime), optimized inventory management, and intelligent scheduling. It reduces human error in critical processes, provides real-time insights from customer behavior and operational data, and enables faster, more accurate decision-making. Businesses implementing AI typically see 30-50% time savings, 25-35% cost reduction, and significant improvements in customer satisfaction scores within the first 6 months.",
        icon: Zap,
      },
      {
        question: "How do AI chatbots work?",
        answer: "AI chatbots leverage Natural Language Processing (NLP) and machine learning to understand and respond to user queries in natural, conversational language. They're powered by advanced models like GPT-4, Claude, or custom-trained models that learn from every interaction. The chatbot analyzes user intent, accesses your knowledge base or database, and generates contextually appropriate responses. Modern AI chatbots can handle complex multi-turn conversations, remember context, escalate to human agents when needed, and continuously improve through machine learning. They can be integrated with your CRM, support systems, and databases to provide personalized experiences, resolve 60-80% of common queries instantly, and operate 24/7 across multiple languages.",
        icon: MessageCircle,
      },
      {
        question: "Can AI enhance customer support?",
        answer: "Absolutely! AI transforms customer support from reactive to proactive. AI-powered chatbots provide instant responses to common questions 24/7, reducing wait times from hours to seconds. AI analyzes customer data to deliver personalized experiences, predicting needs before customers even ask. It automates routine tasks like password resets, order tracking, and account updates, allowing human agents to focus on complex issues requiring empathy and critical thinking. AI also provides real-time assistance to support agents with suggested responses and relevant customer history. The result? 70-80% reduction in response time, 50-60% decrease in support costs, higher customer satisfaction scores, and the ability to scale support without proportionally increasing headcount.",
        icon: Users,
      },
      {
        question: "What industries can benefit from AI solutions?",
        answer: "AI delivers measurable value across virtually every industry. E-commerce uses AI for personalized product recommendations, dynamic pricing, and fraud detection. Healthcare leverages AI for diagnostic assistance, patient monitoring, and drug discovery. Financial services deploy AI for risk assessment, algorithmic trading, fraud prevention, and customer service. Manufacturing uses AI for predictive maintenance, quality control, and supply chain optimization. Retail benefits from inventory management, customer behavior analysis, and personalized marketing. Customer service across all sectors uses AI chatbots and sentiment analysis. The common thread? AI automates tasks, predicts trends, improves accuracy, enhances customer experiences, and drives 20-40% efficiency gains regardless of industry.",
        icon: Globe,
      },
    ],
    web: [
      {
        question: "What technologies do you use for web development?",
        answer: "We specialize in cutting-edge web technologies that ensure your application is fast, scalable, and maintainable. Our core stack includes React.js and Next.js 14 for building responsive, dynamic user interfaces with server-side rendering for optimal performance and SEO. We use TypeScript for type-safe, bug-resistant code that's easier to maintain and scale. For styling, we leverage Tailwind CSS for rapid, consistent, and responsive design. On the backend, we use Node.js with Express or NestJS for robust APIs, integrated with PostgreSQL or MongoDB databases. We implement modern best practices like API-first architecture, component-driven development, automated testing, CI/CD pipelines, and cloud deployment on Vercel, AWS, or Firebase. This stack ensures your website loads in under 2 seconds, ranks well on search engines, and scales seamlessly as your business grows.",
        icon: Code,
      },
      {
        question: "What is full-stack web development?",
        answer: "Full-stack web development means we handle every layer of your web application from the user interface to the database and everything in between. The front-end (what users see) includes UI/UX design, responsive layouts, and interactive features built with React and Next.js. The back-end (server-side logic) handles business logic, authentication, data processing, and API development using Node.js and Express/NestJS. We also manage the database layer (PostgreSQL, MongoDB) for data storage and retrieval, implement real-time features with WebSockets, set up cloud infrastructure and deployment, configure CI/CD pipelines for automated updates, and ensure security, performance optimization, and monitoring. This comprehensive approach means you get a fully integrated, production-ready solution from a single team, ensuring consistency, faster development, better communication, and seamless integration between all components of your application.",
        icon: Database,
      },
      {
        question: "How do you ensure my website is SEO-friendly?",
        answer: "We implement comprehensive SEO strategies from day one of development. Our approach includes technical SEO: server-side rendering with Next.js for instant page loads and better indexing, optimized Core Web Vitals (LCP, FID, CLS) scoring 90+, mobile-first responsive design, and structured data (Schema.org markup) for rich search results. We focus on on-page SEO with optimized titles, meta descriptions, header hierarchies (H1-H6), keyword-rich content, and image optimization with proper alt text. We ensure site speed through code splitting, lazy loading, image optimization (WebP), CDN integration, and caching strategies that achieve sub-2-second load times. We also implement clean URL structures, XML sitemaps, robots.txt, canonical tags, and Open Graph metadata. Post-launch, we provide Google Search Console setup, analytics integration, and performance monitoring to continuously improve your rankings.",
        icon: Rocket,
      },
      {
        question: "How long does it take to develop a website?",
        answer: "Development timelines vary based on project complexity and requirements. A simple landing page or portfolio site typically takes 1-2 weeks, including design, development, and deployment. A corporate website with multiple pages, custom design, and content management takes 3-4 weeks. A full-featured e-commerce platform with product catalogs, payment integration, and admin dashboard requires 8-12 weeks. Custom web applications with complex functionality, API integrations, and user authentication take 12-16 weeks. Our process includes: Discovery & Planning (3-5 days) to understand requirements, Design & Prototyping (1-2 weeks) for mockups and user flow, Development sprints (2-8 weeks) with regular demos and feedback, Testing & QA (3-5 days) for quality assurance, and Deployment & Launch (2-3 days). We provide detailed project timelines during consultation and maintain transparent communication with weekly progress updates throughout the project.",
        icon: Clock,
      },
      {
        question: "Do you provide website maintenance and support?",
        answer: "Yes, we offer comprehensive post-launch maintenance and support packages tailored to your needs. Our ongoing services include security updates and patches to protect against vulnerabilities, performance monitoring and optimization to maintain fast load times, regular backups and disaster recovery planning, content updates and feature additions as your business evolves, bug fixes and troubleshooting within guaranteed response times, uptime monitoring with 99.9% availability targets, SEO monitoring and optimization recommendations, and analytics reporting with actionable insights. We offer flexible support tiers: Basic (monthly security updates and monitoring), Standard (includes content updates and priority support), and Premium (24/7 support, proactive optimization, and dedicated account management). All packages include direct communication channels, regular health check reports, and the peace of mind that your website stays secure, fast, and up-to-date without requiring internal technical resources.",
        icon: Shield,
      },
    ],
    business: [
      {
        question: "How long does it take to develop an AI product?",
        answer: "AI product development timelines depend significantly on complexity and scope. Simple AI projects like basic chatbots, sentiment analysis tools, or content generators typically take 1-3 months from concept to deployment. This includes requirements gathering, model selection/training, integration, and testing. Intermediate projects such as custom recommendation engines, intelligent document processing, or voice assistants require 3-6 months, involving more sophisticated model training, data preparation, and system integration. Complex AI systems like custom machine learning models, multi-agent systems, computer vision applications, or full AI automation platforms can take 6-12 months or more. The timeline includes: Discovery & Data Assessment (1-2 weeks), Model Development & Training (4-16 weeks depending on complexity), Integration & Testing (2-4 weeks), Deployment & Optimization (1-2 weeks), and Post-launch Refinement (ongoing). We use agile methodology with bi-weekly demos, allowing you to see progress and provide feedback throughout development, ensuring the final product meets your exact needs.",
        icon: Clock,
      },
      {
        question: "How do you integrate AI into existing systems?",
        answer: "We specialize in seamless AI integration that enhances your current infrastructure without disruption. Our process begins with a comprehensive analysis of your existing systems, identifying workflows, data sources, and integration points. We then design an integration strategy using API-first architecture, microservices for modularity, and webhook integrations for real-time communication. Implementation follows a gradual, risk-free approach: we start with a pilot in a non-critical area, validate results, then expand systematically. We use proven integration methods including REST/GraphQL APIs for communication between systems, queue systems (Redis, RabbitMQ) for async processing, database connectors for direct data access, and SDK development for easy integration. Throughout the process, we ensure zero downtime with blue-green deployments, comprehensive testing in staging environments, robust error handling and fallback mechanisms, and real-time monitoring. Your team receives training, documentation, and ongoing support to maximize the AI system's value.",
        icon: Zap,
      },
      {
        question: "What is your pricing structure?",
        answer: "We offer transparent, flexible pricing models to match your project needs and budget. Fixed-price projects are ideal for well-defined scopes with clear deliverables, providing predictable costs and timeline certainty—typically ranging from $5,000 for simple websites to $50,000+ for complex AI systems. Our retainer agreements suit ongoing development and support needs, offering dedicated monthly hours at preferred rates with priority support and flexible scope adjustments. For promising startups, we offer equity partnerships where we exchange development services for company equity, aligning our success with yours. All our pricing includes: detailed project proposals with milestone breakdowns, transparent cost estimates with no hidden fees, milestone-based payment schedules (typically 30% upfront, 40% mid-project, 30% on completion), comprehensive documentation and training, post-launch support period (typically 30 days), and optional maintenance packages. We provide custom quotes after a free consultation where we discuss your requirements, goals, and budget to recommend the most cost-effective approach.",
        icon: TrendingUp,
      },
      {
        question: "Do you work with international clients?",
        answer: "Absolutely! While we're proudly based in Kathmandu, Nepal, we serve clients across the globe including the US, Europe, Asia, and Australia. We've perfected remote collaboration through modern tools and processes that make distance irrelevant. We use dedicated Slack channels for instant communication, scheduled Zoom/Google Meet calls for face-to-face discussions, project management platforms (Linear, Jira) for transparent progress tracking, and collaborative design tools (Figma) for real-time feedback. We provide flexible scheduling with overlapping work hours to accommodate different time zones, clear documentation and asynchronous communication for 24/7 progress, and regular video updates and demos so you always know the project status. Our international experience means we understand diverse markets, cultural nuances, multi-language support needs, and global compliance requirements (GDPR, CCPA). Many clients appreciate our competitive pricing combined with world-class quality, making us an excellent value proposition compared to agencies in high-cost regions.",
        icon: Globe,
      },
      {
        question: "What happens after my project is completed?",
        answer: "Project completion is just the beginning of our partnership. After launch, we ensure you're fully equipped for success through comprehensive handoff and ongoing support. We provide detailed documentation including technical architecture, API documentation, user guides, and admin manuals, plus hands-on training sessions for your team covering system administration, content management, and best practices. You receive all source code, design files, and credentials for complete ownership. We offer flexible post-launch support including a complimentary 30-day warranty period for bug fixes, optional maintenance packages (monthly or annual), priority support SLAs with guaranteed response times, and feature enhancement services as your needs evolve. We also provide performance monitoring and optimization recommendations, security updates and patches, scalability planning as your user base grows, and strategic consulting for future improvements. Our goal is long-term partnership: we're invested in your success and available whenever you need expert guidance, updates, or new features as your business grows.",
        icon: Rocket,
      },
    ]
  };

  const currentFaqs = faqCategories[activeCategory as keyof typeof faqCategories];

  return (
    <section id="faq" className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme transition-colors">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-main-theme">
            Questions & Answers
          </h2>
          <p className="text-base text-muted-theme max-w-3xl mx-auto">
            Comprehensive technical documentation and answers to help you understand our capabilities,
            methodologies, and how we can solve your specific challenges.
          </p>
        </header>

        {/* Category Selection */}
        <nav aria-label="FAQ Categories" className="flex justify-center mb-12">
          <div className="bg-card-theme rounded-xl p-1.5 shadow-sm border border-theme inline-flex flex-wrap gap-1 max-w-full">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setOpenFaq(null);
                  setAnimationKey(prev => prev + 1);
                }}
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer ${activeCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-sm`
                  : 'text-muted-theme hover:text-main-theme hover:bg-subtle-theme'
                  }`}
              >
                <category.icon className="w-4 h-4 flex-shrink-0" />
                <span className="font-semibold text-sm hidden sm:inline">{category.name}</span>
              </button>
            ))}
          </div>
        </nav>

        {/* FAQ Items with enhanced styling */}
        <div className="space-y-4 mb-10" key={animationKey}>
          {currentFaqs.map((faq, index) => (
            <FAQItem
              key={`${activeCategory}-${index}`}
              question={faq.question}
              answer={faq.answer}
              isOpen={openFaq === index}
              onToggle={() => toggleFaq(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
