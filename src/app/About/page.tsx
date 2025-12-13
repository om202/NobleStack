"use client";

import {
  Star,
  Rocket,
  Brain,
  Users,
  Zap,
  MessageCircle,
  Wrench,
  Heart,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AlbumArtTeam from "../../components/AlbumArtTeam";
import ServiceCard from "../../components/ServiceCard";
import CTAButton from "../../components/CTAButton";

export default function About() {
  const teamMembers = [
    {
      name: "Ved Prakash",
      role: "CEO",
      expertise: "Strategic Leadership\nBusiness Development",
      image: "/ved.png",
      bio: "",
    },

    {
      name: "Omprakash",
      role: "CTO",
      expertise: "Technology Strategy\nSystem Architecture",
      image: "/om.png",
      bio: "",
    },
    {
      name: "Hesamullah",
      role: "Marketing Lead",
      expertise: "Growth Strategy\nDigital Marketing",
      image: "/Hesamullah.png",
      bio: "",
    },
  ];

  const companyValues = [
    {
      id: "innovation",
      title: "Innovation-Driven",
      description: "We embrace change. We're constantly experimenting with the latest frameworks, APIs, and AI models - not just to stay relevant, but to build what's next.",
      icon: Brain,
      color: "from-nobleblue-500 to-nobleblue-600",
      stats: ["Latest Tech", "AI Integration", "Future-Ready", "Cutting-Edge"],
    },
    {
      id: "client-first",
      title: "Client-First Engineering",
      description: "We don't chase trends - we solve real problems. Every line of code, every design choice, is built to serve the client's goals and improve outcomes.",
      icon: Users,
      color: "from-nobleblue-400 to-nobleblue-500",
      stats: ["Problem Solving", "Goal-Oriented", "Results-Driven", "Client Focus"],
    },
    {
      id: "fast-thoughtful",
      title: "Fast, But Thoughtful",
      description: "We move quickly - like a startup should - but never at the cost of quality. We believe speed and stability can (and must) co-exist.",
      icon: Zap,
      color: "from-nobleblue-500 to-nobleblue-400",
      stats: ["Quick Delivery", "High Quality", "Stable Code", "Startup Speed"],
    },
    {
      id: "clear-communication",
      title: "Clear Communication",
      description: "We explain complex things simply. Whether you're technical or not, we'll keep you in the loop and speak your language - Nepali or English.",
      icon: MessageCircle,
      color: "from-nobleblue-600 to-nobleblue-500",
      stats: ["Simple Explanations", "Multilingual", "Regular Updates", "Transparent"],
    },
    {
      id: "build-with-craft",
      title: "Build with Craft",
      description: "Clean code. Reusable components. Scalable infrastructure. We treat every project like it's our own - because your success is our portfolio.",
      icon: Wrench,
      color: "from-nobleblue-500 to-nobleblue-600",
      stats: ["Clean Code", "Scalable", "Reusable", "Professional"],
    },
    {
      id: "made-for-nepal",
      title: "Made for Nepal, Built to Scale",
      description: "We're proud to be based in Nepal - and we build software that empowers local businesses while meeting global standards.",
      icon: Heart,
      color: "from-nobleblue-600 to-nobleblue-700",
      stats: ["Local Pride", "Global Standards", "Nepal-Focused", "World-Class"],
    },
  ];



  return (
    <>
      {/* Hero Section */}
      <section className="py-12 px-4 min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-gray-900">
              About Noble Stack
            </h1>

            <blockquote className="text-base sm:text-lg text-gray-500 mb-8 max-w-3xl mx-auto">
              &ldquo;We&apos;re a group of hardworking smart people working
              diligently to bring the latest technology, which is changing
              rapidly like never before, accessible to people of Nepal.&rdquo;
            </blockquote>
          </div>

          {/* Team Section - iTunes Style */}
          <div className="mb-16">
            <AlbumArtTeam teamMembers={teamMembers} />
          </div>

          {/* Our Story Section */}
          <div className="max-w-3xl mx-auto mb-16 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                Built in Nepal. Connected Through the USA.
              </h2>
              <h3 className="text-xl text-gray-700 font-medium">
                Noble Stack’s global model for modern software execution.
              </h3>
            </div>

            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/nepal.jpg"
                alt="Beautiful landscape of Nepal"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6 text-lg text-gray-800 leading-relaxed">
              <p>We combine Nepal’s elite engineering talent with US market access to deliver AI first, end‑to‑end product development.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Two‑Hub Model: Engineering in Nepal, market access in the USA.</li>
                <li>AI First: GPT-5, GPT-4o, Claude 4.5, Langchain v1.1</li>
                <li>Modern Stack: Next.js, React, TypeScript, Tailwind CSS, Vercel.</li>
                <li>Full‑cycle delivery from concept to deployment.</li>
              </ul>

              <hr className="border-gray-200 my-8" />

              <h2 className="text-2xl font-bold text-gray-900">AI First by Default</h2>

              <p>
                We don’t add AI later. We design for it from day one.
              </p>

              <p>At Noble Stack, AI isn’t an integration or an enhancement: it’s the foundation. Every product is architected with an AI-first approach, where intelligence drives the core workflows, decisions, and scale from the start.</p>

              <p>We build systems where automation, learning, and decision-making are primary goals - not secondary features.</p>
              <h3 className="text-xl font-bold text-gray-900 mt-6">Modern Web Infrastructure</h3>

              <p>The frontend is not just a UI layer. It is core infrastructure.</p>

              <p>At Noble Stack, we treat the web stack as a performance-critical system. Every application is built using modern frameworks and deliberate optimizations to ensure speed, reliability, and long-term maintainability from day one.</p>

              <p>We design and engineer interfaces that scale, perform under real-world conditions, and evolve without costly rewrites.</p>

              <h3 className="text-xl font-bold text-gray-900 mt-6">AI Agents & Automation</h3>

              <p>We build autonomous AI agents that take action, not just respond.</p>

              <p>At Noble Stack, automation is designed to continuously operate across systems, handle repetitive and complex workflows, and improve over time through learning and feedback.</p>

              <p>These agents increase efficiency by removing manual work, reduce operational costs by minimizing errors, and enable smarter decisions by analyzing large volumes of data in real time.</p>

              <p>By automating execution across functions like customer support, operations, finance, and internal tooling, teams are freed to focus on strategic and creative work instead of routine tasks.</p>

              <p>Our AI systems are built to scale effortlessly, adapt to changing conditions, and deliver consistent accuracy as organizations grow.</p>

              <p>These systems do not just respond. They execute.</p>

              <hr className="border-gray-200 my-8" />

              <h2 className="text-2xl font-bold text-gray-900">We Build Before We Sell</h2>

              <p><strong>Our credibility comes from shipping.</strong></p>

              <p>Noble Stack builds and launches its own products using the same architecture, constraints, and quality standards we apply to client work.</p>

              <p>Our systems are validated in real markets, under real user load, and real operational pressure.</p>

              <ul>
                <li><strong>Vibe AI Photo Editor</strong> – AI-powered background removal and image enhancement at production scale</li>
                <li><strong>Loopn</strong> – AI-driven professional networking through resume intelligence and smart matching</li>
                <li><strong>Create Profile Pic</strong> – Profile asset generation using Google’s Nano Banana AI</li>
              </ul>

              <p>We do not experiment on client projects. We bring systems that are already built, tested, and shipped.</p>


              <hr className="border-gray-200 my-8" />

              <h2 className="text-2xl font-bold text-gray-900">From Concept to Deployed Software</h2>

              <p>Our role is simple. We turn ideas into reliable, scalable software without unnecessary friction.</p>

              <p>We provide:</p>

              <ol>
                <li>End-to-end product development from concept to production</li>
                <li>Custom AI and modern web platforms built for real-world use</li>
                <li>Automation systems that reduce operational load and manual effort</li>
                <li>Long-term technical partnership focused on outcomes, not short-term delivery</li>
              </ol>


              <hr className="border-gray-200 my-8" />

              <h2 className="text-2xl font-bold text-gray-900">Let&apos;s Build</h2>

              <p>If you&apos;re looking for a team that combines:</p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Nepal&apos;s elite engineering talent</li>
                <li>US access to global technology, partners, and markets</li>
                <li>Clear ownership and execution</li>
              </ul>

              <p>Then Noble Stack is built for you. One team. One standard. Global execution.</p>
            </div>
          </div>

          {/* Values Section */
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h2>}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {companyValues.map((val) => (
              <ServiceCard
                key={val.id}
                name={val.title}
                description={val.description}
                icon={val.icon}
              />
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200 text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Lets get your work done!
            </h3>
            <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let&apos;s collaborate to bring your vision to life. Our team is
              excited to discuss your project and explore how we can help you
              achieve your goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton variant="primary" icon={Rocket} href="/Contact" className="w-full sm:w-auto">
                New Project
              </CTAButton>
              <CTAButton variant="secondary" href="/Portfolio" className="w-full sm:w-auto">
                Our Portfolio
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
