"use client";

import {
  Code,
  Brain,
  Smartphone,
  Globe,
  Database,
  Shield,
  Zap,
  ArrowRight,
  Star,
  Rocket,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AlbumArtServices from "../../components/AlbumArtServices";

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom web applications built with modern technologies like React, Next.js, and Node.js.",
      features: ["Responsive Design", "SEO Optimized", "Performance Focused", "Scalable Architecture"],
      color: "blue"
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by cutting-edge AI technologies and machine learning algorithms.",
      features: ["Custom AI Models", "Data Analytics", "Natural Language Processing", "Computer Vision"],
      color: "purple"
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps for iOS and Android with seamless user experiences.",
      features: ["Cross-Platform", "Native Performance", "Push Notifications", "App Store Optimization"],
      color: "green"
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Robust and scalable backend systems with secure APIs and efficient data management.",
      features: ["RESTful APIs", "Database Design", "Cloud Integration", "Security Best Practices"],
      color: "orange"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and user data.",
      features: ["Security Audits", "Penetration Testing", "Data Encryption", "Compliance"],
      color: "red"
    },
    {
      icon: Zap,
      title: "DevOps & Cloud",
      description: "Streamlined deployment processes and cloud infrastructure for optimal performance.",
      features: ["CI/CD Pipelines", "Cloud Migration", "Infrastructure as Code", "Monitoring"],
      color: "indigo"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We understand your requirements and create a comprehensive project roadmap."
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Our team creates wireframes and prototypes to visualize your solution."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We build your solution using best practices and rigorous testing procedures."
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "We deploy your solution and provide ongoing support and maintenance."
    }
  ];

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

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-gray-900">
              Our Services
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              We deliver cutting-edge digital solutions that transform ideas into reality. 
              From AI-powered applications to robust web platforms, we&apos;ve got you covered.
            </p>
          </div>

          {/* Services Carousel */}
          <div className="mb-16">
            <AlbumArtServices services={services} />
          </div>

          {/* Process Section */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Process
              </h2>
              <p className="text-base text-gray-600 max-w-2xl mx-auto">
                We follow a proven methodology to ensure your project is delivered on time, 
                within budget, and exceeds your expectations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <span className="text-2xl font-bold text-white">{step.step}</span>
                    </div>
                    {index < process.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-full w-full">
                        <ArrowRight className="w-6 h-6 text-gray-300 mx-auto" />
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-base text-gray-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack */}
          <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-8 text-white mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Technology Stack
              </h2>
              <p className="text-base text-gray-300 max-w-2xl mx-auto">
                We work with the latest and most reliable technologies to build robust solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {["React", "Next.js", "TypeScript", "Node.js", "Python", "AWS", "Docker", "MongoDB", "PostgreSQL", "TensorFlow", "PyTorch", "Figma"].map((tech, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300 group"
                >
                  <span className="text-sm font-semibold group-hover:text-blue-300 transition-colors duration-300">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your requirements and create a solution that drives your business forward. 
              Our team is ready to bring your vision to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/Contact"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold"
              >
                <Rocket className="w-5 h-5" />
                Get Started Today
              </Link>
              
              <Link
                href="/Career"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-700 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 font-semibold"
              >
                <Code className="w-5 h-5" />
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