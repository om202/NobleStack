"use client";

import {
  Globe,
  Star,
  ArrowRight,
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
import AnimatedFeatureCarousel from "../../components/AnimatedFeatureCarousel";

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
      name: "Ranjit",
      role: "Full Stack Intern",
      expertise: "Web Development\nModern Frameworks",
      image: "/ranjit.png",
      bio: "",
    },
  ];

  const companyValues = [
    {
      id: "innovation",
      title: "Innovation-Driven",
      description: "We embrace change. We're constantly experimenting with the latest frameworks, APIs, and AI models — not just to stay relevant, but to build what's next.",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      stats: ["Latest Tech", "AI Integration", "Future-Ready", "Cutting-Edge"],
    },
    {
      id: "client-first",
      title: "Client-First Engineering",
      description: "We don't chase trends — we solve real problems. Every line of code, every design choice, is built to serve the client's goals and improve outcomes.",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
      stats: ["Problem Solving", "Goal-Oriented", "Results-Driven", "Client Focus"],
    },
    {
      id: "fast-thoughtful",
      title: "Fast, But Thoughtful",
      description: "We move quickly — like a startup should — but never at the cost of quality. We believe speed and stability can (and must) co-exist.",
      icon: Zap,
      color: "from-green-500 to-emerald-500",
      stats: ["Quick Delivery", "High Quality", "Stable Code", "Startup Speed"],
    },
    {
      id: "clear-communication",
      title: "Clear Communication",
      description: "We explain complex things simply. Whether you're technical or not, we'll keep you in the loop and speak your language — Nepali or English.",
      icon: MessageCircle,
      color: "from-orange-500 to-red-500",
      stats: ["Simple Explanations", "Multilingual", "Regular Updates", "Transparent"],
    },
    {
      id: "build-with-craft",
      title: "Build with Craft",
      description: "Clean code. Reusable components. Scalable infrastructure. We treat every project like it's our own — because your success is our portfolio.",
      icon: Wrench,
      color: "from-indigo-500 to-purple-500",
      stats: ["Clean Code", "Scalable", "Reusable", "Professional"],
    },
    {
      id: "made-for-nepal",
      title: "Made for Nepal, Built to Scale",
      description: "We're proud to be based in Nepal — and we build software that empowers local businesses while meeting global standards.",
      icon: Heart,
      color: "from-red-500 to-pink-500",
      stats: ["Local Pride", "Global Standards", "Nepal-Focused", "World-Class"],
    },
  ];



  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 py-12 px-4 min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-16">
            {/* Noble Stack Brand */}
            <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
              <Image
                src="/nbl.png"
                alt="Noble Stack Logo"
                width={50}
                height={50}
              />
              <div className="flex flex-col justify-center h-16">
                <h2 className="text-xl font-medium text-gray-700 leading-none">
                  Noble
                </h2>
                <h2 className="text-xl font-medium text-gray-700 leading-none">
                  Stack
                </h2>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-gray-900">
              About Noble Stack
            </h1>

            <blockquote className="text-base sm:text-lg text-gray-500 mb-6 sm:mb-8 max-w-3xl mx-auto">
              &ldquo;We&apos;re a group of hardworking smart people working
              diligently to bring the latest technology, which is changing
              rapidly like never before, accessible to people of Nepal.&rdquo;
            </blockquote>
          </div>

          {/* Team Section - iTunes Style */}
          <div className="mb-10 sm:mb-16">
            <AlbumArtTeam teamMembers={teamMembers} />
          </div>

          {/* Our Story Section */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200 mb-10 sm:mb-16">
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Our Story
                </h2>
                <div className="space-y-3 sm:space-y-4 text-md-sm sm:text-base text-gray-600">
                  <p>
                    Founded in 2025, Noble Stack is more than a tech company —
                    we&apos;re a movement to bring global innovation home. While
                    the world races ahead with AI, automation, and smart
                    software, Nepal has too often been left waiting. We&apos;re
                    here to change that.
                  </p>
                  <p>
                    We&apos;re a team of engineers, designers, and dreamers
                    working relentlessly to make cutting-edge technology
                    accessible, practical, and affordable for Nepali businesses
                    and people. Whether you&apos;re running a shop, launching a
                    startup, or modernizing your workflow — we build the tools
                    that help you leap forward, not catch up.
                  </p>
                  <p>
                    At Noble Stack, our mission is simple: empower Nepal with
                    the same digital firepower the world&apos;s leading
                    companies use. No jargon, no hype — just real solutions,
                    made locally, with global standards.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
                  <Link
                    href="/Services"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold"
                  >
                    <Globe className="w-5 h-5" />
                    Our Services
                  </Link>

                  <Link
                    href="/Contact"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-700 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 font-semibold"
                  >
                    <ArrowRight className="w-5 h-5" />
                    Get In Touch
                  </Link>
                </div>
              </div>

              <div className="relative h-full">
                <div className="rounded-2xl overflow-hidden shadow-lg h-full">
                  <Image
                    src="/nepal.jpg"
                    alt="Beautiful landscape of Nepal"
                    width={600}
                    height={800}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <AnimatedFeatureCarousel
            features={companyValues}
            title="Our Values"
            autoScrollInterval={5000}
          />

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
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Let&apos;s collaborate to bring your vision to life. Our team is
              excited to discuss your project and explore how we can help you
              achieve your goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/Contact"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold"
              >
                <Rocket className="w-5 h-5" />
                New Project
              </Link>

              <Link
                href="/Portfolio"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-700 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 font-semibold"
              >
                Our Portfolio
              </Link>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes futureGlow {
            0% {
              background-position: 0% 50%;
            }
            25% {
              background-position: 50% 0%;
            }
            50% {
              background-position: 100% 50%;
            }
            75% {
              background-position: 50% 100%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          .future-text {
            background: linear-gradient(
              135deg,
              #10b981,
              #059669,
              #0d9488,
              #0f766e,
              #0891b2,
              #0e7490,
              #0284c7,
              #0369a1,
              #10b981
            );
            background-size: 400% 400%;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: futureGlow 2.5s ease-in-out infinite;
            font-weight: 800;
            letter-spacing: -0.02em;
          }
        `}</style>
      </section>
    </>
  );
}
