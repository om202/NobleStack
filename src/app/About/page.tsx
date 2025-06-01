"use client";

import {
  Target,
  Users,
  Lightbulb,
  Heart,
  Award,
  Globe,
  Code,
  Brain,
  Rocket,
  Shield,
  Star,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AlbumArtTeam from "../../components/AlbumArtTeam";

export default function About() {
  const teamMembers = [
    {
      name: "Ved Prakash",
      role: "CEO",
      expertise: "Strategic Leadership\nBusiness Development",
      image: "/ved.png",
      bio: ""
    },
    {
      name: "Omprakash",
      role: "CTO",
      expertise: "Technology Strategy\nSystem Architecture",
      image: "/om.png",
      bio: ""
    },
    {
      name: "Ranjit",
      role: "Full Stack Intern",
      expertise: "Web Development\nModern Frameworks",
      image: "/ranjit.png",
      bio: ""
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We constantly push boundaries and embrace cutting-edge technologies to deliver exceptional solutions.",
      color: "blue"
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our success. We prioritize understanding your needs and delivering value.",
      color: "green"
    },
    {
      icon: Lightbulb,
      title: "Creative Excellence",
      description: "We combine technical expertise with creative thinking to solve complex challenges.",
      color: "yellow"
    },
    {
      icon: Heart,
      title: "Passionate Team",
      description: "Our team is driven by passion for technology and commitment to delivering quality work.",
      color: "red"
    },
    {
      icon: Shield,
      title: "Trust & Reliability",
      description: "We build lasting relationships through transparency, reliability, and consistent delivery.",
      color: "purple"
    },
    {
      icon: Rocket,
      title: "Growth Mindset",
      description: "We continuously learn, adapt, and evolve to stay ahead in the fast-paced tech landscape.",
      color: "orange"
    }
  ];

  const stats = [
    { number: "10+", label: "Projects Completed" },
    { number: "5+", label: "Happy Clients" },
    { number: "1+", label: "Years Experience" },
    { number: "3+", label: "Team Members" }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "from-blue-400 to-blue-600 bg-blue-50 text-blue-600",
      green: "from-green-400 to-green-600 bg-green-50 text-green-600",
      yellow: "from-yellow-400 to-yellow-600 bg-yellow-50 text-yellow-600",
      red: "from-red-400 to-red-600 bg-red-50 text-red-600",
      purple: "from-purple-400 to-purple-600 bg-purple-50 text-purple-600",
      orange: "from-orange-400 to-orange-600 bg-orange-50 text-orange-600"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-12 px-4 min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            {/* Noble Stack Brand */}
            <div className="flex items-center justify-center gap-2 mb-6">
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

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight text-gray-900">
              About Noble Stack
            </h1>

            <blockquote className="text-lg text-gray-500 mb-8 max-w-3xl mx-auto">
              &ldquo;We&apos;re a group of hardworking smart people working diligently to bring the latest technology, 
              which is changing rapidly like never before, accessible to people of Nepal.&rdquo;
            </blockquote>
          </div>

                    {/* Team Section - iTunes Style */}
          <div className="mb-16">
            <AlbumArtTeam teamMembers={teamMembers} />
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 text-center group hover:shadow-lg transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Our Story Section */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Founded in 2025, Noble Stack emerged from a simple yet powerful vision: 
                    to bridge the gap between cutting-edge technology and the people of Nepal.
                  </p>
                  <p>
                    We are a group of hardworking smart people working diligently to bring the latest 
                    technology, which is changing rapidly like never before, accessible to everyone in Nepal.
                  </p>
                  <p>
                    Our mission is to democratize technology and ensure that Nepal doesn&apos;t get left behind 
                    in this rapidly evolving digital landscape, empowering local businesses and individuals 
                    with modern digital solutions.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
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
              
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 text-center">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col items-center">
                      <Code className="w-12 h-12 text-blue-600 mb-3" />
                      <span className="text-sm font-semibold text-gray-800">Clean Code</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Brain className="w-12 h-12 text-purple-600 mb-3" />
                      <span className="text-sm font-semibold text-gray-800">AI-Powered</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Rocket className="w-12 h-12 text-green-600 mb-3" />
                      <span className="text-sm font-semibold text-gray-800">Fast Delivery</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Award className="w-12 h-12 text-orange-600 mb-3" />
                      <span className="text-sm font-semibold text-gray-800">Quality First</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                These core values guide everything we do and shape how we work with our clients and each other.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                const colors = getColorClasses(value.color);
                const gradientColors = colors.split(' ')[0] + ' ' + colors.split(' ')[1];
                
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className={`w-14 h-14 bg-gradient-to-br ${gradientColors} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mission & Vision Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700">
                To empower people of Nepal with intelligent, scalable, and innovative digital solutions 
                that make the latest technology accessible and drive digital transformation in our rapidly evolving world.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700">
                To be the leading catalyst for digital transformation in Nepal, where cutting-edge technology 
                meets local innovation to solve tomorrow&apos;s challenges today and ensure Nepal thrives in the digital age.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-8 text-white text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Work With Us?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s collaborate to bring your vision to life. Our team is excited to discuss your project 
              and explore how we can help you achieve your goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/Contact"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold"
              >
                <Users className="w-5 h-5" />
                Start a Project
              </Link>
              
              <Link
                href="/Career"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white rounded-xl border border-white/30 hover:border-white/50 hover:bg-white/10 transition-all duration-300 font-semibold"
              >
                <Heart className="w-5 h-5" />
                Join Our Team
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
            background: linear-gradient(135deg, 
              #10b981, #059669, #0d9488, #0f766e, 
              #0891b2, #0e7490, #0284c7, #0369a1, 
              #10b981);
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