"use client";

import {
  Smartphone,
  Rocket,
  Zap,
  Globe,
  ChevronRight,
  ArrowRight,
  Monitor,
  Palette,
  BarChart3,
  Network,
  Layers,
  Package,
  Search,
  Shield,
  CheckCircle,
} from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiVercel,
  SiFigma,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiGraphql,
  SiFramer,
  SiRadixui,
  SiJest,
  SiPrettier,
  SiEslint,
  SiPostgresql,
} from "react-icons/si";
import React from "react";
import TechStackCarousel from "../../components/TechStackCarousel";
import AnimatedFeatureCarousel from "../../components/AnimatedFeatureCarousel";

const webFeatures = [
  {
    id: "responsive-design",
    title: "Responsive & Mobile-First Design",
    description:
      "Beautiful designs that work perfectly on every device, from mobile to desktop. Designed for mobile, enhanced for desktop experience.",
    icon: Smartphone,
    color: "from-blue-500 to-cyan-500",
    stats: [
      "Mobile Optimized",
      "Cross-Platform",
      "Touch-Friendly",
      "Responsive Layout",
    ],
    demo: "View Demo",
  },
  {
    id: "performance",
    title: "Lightning-Fast Performance & SEO",
    description:
      "Optimized websites that load in milliseconds and rank high on Google. Built for search engines from day one with optimal performance.",
    icon: Zap,
    color: "from-green-500 to-emerald-500",
    stats: ["Core Web Vitals", "SEO Optimized", "Fast Loading", "Search Ready"],
    demo: "Speed Test",
  },
  {
    id: "modern-design",
    title: "Modern UI/UX & Conversion Focus",
    description:
      "Contemporary designs that capture attention and guide users to conversion. Every element designed to drive real business results.",
    icon: Palette,
    color: "from-purple-500 to-pink-500",
    stats: [
      "User-Centered",
      "Conversion Focused",
      "Brand Aligned",
      "Results-Driven",
    ],
    demo: "See Designs",
  },
  {
    id: "analytics",
    title: "Data-Driven Optimization",
    description:
      "Built-in analytics and optimization tools to track performance and improve conversions with comprehensive user experience insights.",
    icon: BarChart3,
    color: "from-orange-500 to-red-500",
    stats: [
      "Analytics Ready",
      "A/B Testing",
      "Performance Tracking",
      "User Insights",
    ],
    demo: "View Analytics",
  },
];

export default function FeaturesSection() {

  const webServices = [
    {
      name: "Modern Web Development",
      icon: Globe,
      status: "Specialized",
      description: "React, Next.js, TypeScript",
    },
    {
      name: "E-commerce Websites",
      icon: Smartphone,
      status: "Expert",
      description: "Shopify, Custom Solutions",
    },
    {
      name: "SaaS Platforms",
      icon: Monitor,
      status: "Advanced",
      description: "Full-Stack Applications",
    },
    {
      name: "Landing Pages",
      icon: Rocket,
      status: "Conversion Pro",
      description: "High-Converting Pages",
    },
  ];

  const webTechStack = [
    { name: "React.js", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Vercel", icon: SiVercel, color: "#000000" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    { name: "Redux", icon: SiRedux, color: "#764ABC" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Express.js", icon: SiExpress, color: "#000000" },
    { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
    { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
    { name: "REST API", icon: Network, color: "#FF6B35" },
    { name: "WebSockets", icon: Network, color: "#0066CC" },
    { name: "Zustand", icon: Package, color: "#FF8C00" },
    { name: "Radix UI", icon: SiRadixui, color: "#161618" },
    { name: "ShadCN UI", icon: Layers, color: "#000000" },
    { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
    { name: "SWR", icon: Search, color: "#000000" },
    { name: "Zod", icon: Shield, color: "#3E63DD" },
    { name: "Jest", icon: SiJest, color: "#C21325" },
    { name: "Prettier", icon: SiPrettier, color: "#F7B93E" },
    { name: "ESLint", icon: SiEslint, color: "#4B32C3" },
    { name: "Clerk", icon: CheckCircle, color: "#6C47FF" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  ];

  return (
    <section id="features" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-base font-medium mb-4">
            <Globe className="w-4 h-4 mr-2" />
            Modern Web Development Experts
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            We Build Modern
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              {" "}
              Websites That Convert
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Specializing in lightning-fast, SEO-optimized websites that look
            stunning on every device. From landing pages to complex web
            applications, we create digital experiences that drive results.
          </p>

          <button className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-800 rounded-xl border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 font-semibold">
            Start Your Website Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Modern Tech Stack */}
        <TechStackCarousel
          technologies={webTechStack}
          title="Modern Web Technologies We Master"
          autoScrollInterval={2500}
        />

        {/* Web Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {webServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300 group cursor-pointer min-h-[180px] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${webFeatures[index].color} rounded-xl flex items-center justify-center shadow-lg`}
                  >
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-base px-2 py-1 bg-blue-500/20 text-blue-500 rounded-full">
                    {service.status}
                  </span>
                </div>
                <h3 className="text-gray-900 font-semibold mb-2">
                  {service.name}
                </h3>
                <p className="text-base text-gray-600 mb-4">
                  {service.description}
                </p>
              </div>
              <button className="flex items-center text-blue-600 text-base group-hover:text-blue-700 transition-colors">
                Learn More
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* What Makes Our Websites Convert - Animated Carousel */}
        <AnimatedFeatureCarousel
          features={webFeatures}
          title="What Makes Our Websites Convert"
          autoScrollInterval={4000}
        />
      </div>
    </section>
  );
}
