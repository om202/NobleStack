import { Metadata } from 'next';
import { ArrowRight } from "lucide-react";
import AlbumArtServices from "../../components/AlbumArtServices";
import TechTicker from "../../components/TechTicker";
import ServicesCTA from "../../components/ServicesCTA";

export const metadata: Metadata = {
  title: "Services - Noble Stack",
  description: "Explore our comprehensive AI and web development services including Full-Stack Engineering, LLM-Powered AI Systems, Automation, and DevOps.",
};

export default function Services() {
  const services = [
    {
      icon: "React",
      title: "Full-Stack Product Engineering",
      description:
        "We engineer robust, full-stack systems — from frontend to backend to infrastructure — with code quality and scalability at the core.",
      features: [
        "React, Next.js & Tailwind CSS",
        "Node.js, NestJS & GraphQL",
        "PostgreSQL, MongoDB & Real-time Sync",
        "Docker, AWS & CI/CD Pipelines",
      ],
      color: "blue",
    },
    {
      icon: "OpenAI",
      title: "LLM-Powered AI Systems",
      description:
        "We design systems that leverage cutting-edge language models to reason, retrieve, and respond — integrated seamlessly into your product or process.",
      features: [
        "OpenAI, Anthropic & Mistral APIs",
        "LangChain, RAG & CrewAI",
        "Notion, PDF & Web Data Sources",
        "RunPod, Modal & GPU Inference",
      ],
      color: "purple",
    },
    {
      icon: "Zapier",
      title: "End-to-End Automation Systems",
      description:
        "From business logic to background jobs, we build automation pipelines that save time, reduce human error, and scale with your growth.",
      features: [
        "Zapier, n8n & Make Workflows",
        "Python, Node.js & Cloud Functions",
        "Gmail, Slack & Stripe Integrations",
        "React Admin & Real-time Dashboards",
      ],
      color: "green",
    },
    {
      icon: "Docker",
      title: "Deployment & DevOps",
      description:
        "We ensure your product runs smoothly in production with modern DevOps practices — from zero-downtime deploys to intelligent monitoring.",
      features: [
        "GitHub Actions & GitLab CI",
        "Docker & Container Registry",
        "GCP, AWS & Firebase Hosting",
        "Datadog & Real-time Monitoring",
      ],
      color: "orange",
    },
    {
      icon: "Auth0",
      title: "Security, Privacy & Reliability",
      description:
        "From identity to data to systems — we build with trust and resilience in mind, ensuring your application is safe, compliant, and production-ready.",
      features: [
        "OAuth2, JWT & Multi-provider Auth",
        "HTTPS, AES & Encryption at Rest",
        "GDPR, CCPA & Audit Trails",
        "2FA, Rate Limiting & Session Management",
      ],
      color: "red",
    },
    {
      icon: "GitHub Actions",
      title: "Agile, But Engineered",
      description:
        "We move fast — but not recklessly. Our process merges the flexibility of agile with the discipline of software engineering.",
      features: [
        "Scrum, Kanban & Weekly Demos",
        "Code Reviews & Pair Programming",
        "Unit, Integration & E2E Testing",
        "Tech Specs, API Docs & Changelogs",
      ],
      color: "indigo",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description:
        "We understand your requirements and create a comprehensive project roadmap.",
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description:
        "Our team creates wireframes and prototypes to visualize your solution.",
    },
    {
      step: "03",
      title: "Development & Testing",
      description:
        "We build your solution using best practices and rigorous testing procedures.",
    },
    {
      step: "04",
      title: "Deployment & Support",
      description:
        "We deploy your solution and provide ongoing support and maintenance.",
    },
  ];

  // All technologies for the ticker
  const allTechnologies = [
    // Frontend
    { name: "React.js", color: "from-blue-400 to-blue-600" },
    { name: "Next.js", color: "from-gray-700 to-gray-900" },
    { name: "TypeScript", color: "from-blue-500 to-blue-700" },
    { name: "Tailwind CSS", color: "from-cyan-400 to-cyan-600" },
    { name: "Framer Motion", color: "from-purple-500 to-purple-700" },
    { name: "Radix UI", color: "from-indigo-500 to-indigo-700" },
    { name: "ShadCN UI", color: "from-gray-600 to-gray-800" },
    { name: "Redux", color: "from-purple-600 to-purple-800" },
    { name: "Zustand", color: "from-orange-500 to-orange-700" },
    { name: "SWR", color: "from-blue-600 to-blue-800" },
    { name: "Zod", color: "from-blue-700 to-blue-900" },
    { name: "Figma", color: "from-pink-500 to-pink-700" },
    // Backend
    { name: "Node.js", color: "from-green-500 to-green-700" },
    { name: "Express.js", color: "from-gray-600 to-gray-800" },
    { name: "NestJS", color: "from-red-500 to-red-700" },
    { name: "GraphQL", color: "from-pink-500 to-pink-700" },
    { name: "Prisma", color: "from-gray-700 to-gray-900" },
    { name: "PostgreSQL", color: "from-blue-600 to-blue-800" },
    { name: "MongoDB", color: "from-green-600 to-green-800" },
    { name: "Docker", color: "from-blue-500 to-blue-700" },
    { name: "AWS", color: "from-orange-500 to-orange-700" },
    { name: "Vercel", color: "from-gray-800 to-black" },
    { name: "Firebase", color: "from-yellow-500 to-orange-600" },
    { name: "Clerk", color: "from-purple-600 to-purple-800" },
    // AI & ML
    { name: "OpenAI", color: "from-emerald-500 to-emerald-700" },
    { name: "Claude", color: "from-orange-500 to-orange-700" },
    { name: "LangChain", color: "from-green-600 to-green-800" },
    { name: "Hugging Face", color: "from-yellow-500 to-yellow-700" },
    { name: "Pinecone", color: "from-pink-500 to-pink-700" },
    { name: "Weaviate", color: "from-cyan-500 to-cyan-700" },
    { name: "AWS Bedrock", color: "from-orange-600 to-orange-800" },
    { name: "Vertex AI", color: "from-blue-600 to-blue-800" },
    { name: "LangGraph", color: "from-green-500 to-green-700" },
    { name: "CrewAI", color: "from-red-500 to-red-700" },
    { name: "Streamlit", color: "from-red-400 to-red-600" },
    { name: "FastAPI", color: "from-teal-500 to-teal-700" },
    // Automation
    { name: "Zapier", color: "from-orange-500 to-red-600" },
    { name: "n8n", color: "from-red-500 to-pink-600" },
    { name: "Make", color: "from-purple-500 to-purple-700" },
    { name: "GitHub Actions", color: "from-gray-700 to-gray-900" },
    { name: "GitLab CI", color: "from-orange-600 to-orange-800" },
    { name: "Jest", color: "from-red-600 to-red-800" },
    { name: "Prettier", color: "from-yellow-500 to-yellow-700" },
    { name: "ESLint", color: "from-purple-600 to-purple-800" },
    { name: "Datadog", color: "from-purple-700 to-purple-900" },
    { name: "Stripe", color: "from-blue-600 to-purple-700" },
    { name: "Slack API", color: "from-green-500 to-green-700" },
    { name: "Gmail API", color: "from-red-500 to-red-700" },
  ];

  return (
    <>
      {/* Hero Section */}
      <main className="py-12 px-4 min-h-screen bg-noble-dark">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <header className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-main-theme">
              Our Services
            </h1>
          </header>

          {/* Services Carousel */}
          <section id="services" aria-label="Services List" className="mb-16">
            <AlbumArtServices services={services} />
          </section>

          {/* Process Section */}
          <section id="process" aria-label="Our Process" className="bg-gray-900 rounded-2xl p-6 sm:p-8 shadow-sm border border-theme mb-16">
            <header className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-main-theme mb-6">
                Our Process
              </h2>
              <p className="text-md-sm sm:text-base text-muted-theme max-w-2xl mx-auto">
                We follow a proven methodology to ensure your project is
                delivered on time, within budget, and exceeds your expectations.
              </p>
            </header>

            {/* Mobile Layout - Vertical Flow */}
            <div className="block lg:hidden space-y-6 sm:space-y-8">
              {process.map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="relative mb-4 sm:mb-6">
                    <div className="w-20 h-20 bg-gray-800 rounded-2xl flex items-center justify-center shadow-sm">
                      <span className="text-2xl font-bold text-nobleblue-600">
                        {step.step}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-main-theme mb-2 sm:mb-3 text-center">
                    {step.title}
                  </h3>

                  <p className="text-md-sm sm:text-base text-muted-theme text-center max-w-xs">
                    {step.description}
                  </p>

                  {/* Vertical Arrow for Mobile */}
                  {index < process.length - 1 && (
                    <div className="mt-8 mb-4">
                      <div className="bg-gradient-to-br from-nobleblue-500 to-nobleblue-600 rounded-full p-2">
                        <ArrowRight className="w-5 h-5 text-white transform rotate-90" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop Layout - Horizontal Flow */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-4 gap-12">
                {process.map((step, index) => (
                  <div key={index} className="text-center relative">
                    <div className="relative mb-6">
                      <div className="w-20 h-20 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto shadow-sm">
                        <span className="text-2xl font-bold text-nobleblue-600">
                          {step.step}
                        </span>
                      </div>

                      {/* Connecting Arrow */}
                      {index < process.length - 1 && (
                        <div className="absolute top-1/2 left-full transform -translate-y-1/2 w-12 flex items-center justify-center">
                          <div className="bg-gradient-to-br from-nobleblue-500 to-nobleblue-600 rounded-full p-2">
                            <ArrowRight className="w-5 h-5 text-white" />
                          </div>
                        </div>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-main-theme mb-3">
                      {step.title}
                    </h3>

                    <p className="text-base text-muted-theme">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Technology Stack */}
          <section id="tech-stack" aria-label="Technology Stack" className="bg-gray-900 rounded-2xl p-6 sm:p-8 shadow-sm border border-theme mb-16">
            <header className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-main-theme">
                Technology Stack
              </h2>
              <p className="text-md-sm sm:text-base text-muted-theme max-w-2xl mx-auto mb-8">
                We work with the latest and most reliable technologies to build
                robust, scalable solutions. Watch our expertise in action —
                technologies refresh dynamically to showcase our full stack.
              </p>
            </header>

            {/* Animated Technology Ticker */}
            <TechTicker
              technologies={allTechnologies}
              interval={1200}
              className="py-8"
            />

            <div className="text-center mt-8">
              <p className="text-md-sm text-muted-theme">
                {allTechnologies.length}+ Technologies in our arsenal • Always
                evolving
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <ServicesCTA />
        </div>
      </main >
    </>
  );
}
