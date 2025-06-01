"use client";

import {
  Send,
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// Contact Card Component
interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  href?: string;
  colorScheme: 'blue' | 'green' | 'purple' | 'orange';
  isClickable?: boolean;
}

const ContactCard: React.FC<ContactCardProps> = ({ 
  icon, 
  title, 
  content, 
  href, 
  colorScheme, 
  isClickable = false 
}) => {
  const colorClasses = {
    blue: {
      bg: 'bg-blue-50',
      hoverBg: 'group-hover:bg-blue-100',
      text: 'text-blue-600',
      hoverText: 'group-hover:text-blue-600',
      contentText: 'text-blue-600 group-hover:text-blue-700',
      border: 'hover:border-blue-300'
    },
    green: {
      bg: 'bg-green-50',
      hoverBg: 'group-hover:bg-green-100',
      text: 'text-green-600',
      hoverText: 'group-hover:text-green-600',
      contentText: 'text-green-600 group-hover:text-green-700',
      border: 'hover:border-green-300'
    },
    purple: {
      bg: 'bg-purple-50',
      hoverBg: '',
      text: 'text-purple-600',
      hoverText: '',
      contentText: 'text-gray-700',
      border: ''
    },
    orange: {
      bg: 'bg-orange-50',
      hoverBg: '',
      text: 'text-orange-600',
      hoverText: '',
      contentText: 'text-gray-700',
      border: ''
    }
  };

  const colors = colorClasses[colorScheme];

  const cardContent = (
    <div className="flex items-start gap-4">
      <div className={`p-4 ${colors.bg} rounded-xl ${colors.hoverBg} transition-colors duration-300`}>
        {icon}
      </div>
      <div className="flex-1">
        <h4 className={`font-bold text-gray-900 mb-2 text-lg ${colors.hoverText} transition-colors duration-300`}>
          {title}
        </h4>
        <p className={`font-semibold ${colors.contentText}`}>
          {content}
        </p>
      </div>
    </div>
  );

  if (isClickable && href) {
    return (
      <a 
        href={href}
        className={`group bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg ${colors.border} transition-all duration-300 transform hover:-translate-y-1`}
      >
        {cardContent}
      </a>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
      {cardContent}
    </div>
  );
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    // Handle form submission here
  };

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
              Get In Touch
            </h1>

            <blockquote className="text-base sm:text-lg text-gray-500 mb-6 sm:mb-8 max-w-3xl mx-auto">
              &ldquo;Ready to transform your ideas into intelligent digital solutions? 
              Let&apos;s discuss your project and explore how we can help you succeed.&rdquo;
            </blockquote>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200">
                          <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl md:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Send us a Message
                </h3>
                <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Have a project in mind? We&apos;d love to hear from you. 
                Fill out the form below and let&apos;s start the conversation.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="+977 (XXX) XXX-XXXX"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your company name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="general-inquiry">General Inquiry</option>
                  <option value="project-quote">Project Quote</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="support">Technical Support</option>
                  <option value="career">Career Opportunities</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Tell us about your project, requirements, or any questions you have. What excites you about working with Noble Stack?"
                  required
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold mx-auto"
                >
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <p className="text-sm text-gray-500 mt-4">
                  We&apos;ll get back to you within 24 hours
                </p>
              </div>
            </form>
          </div>

          {/* Contact Information Cards */}
          <div className="mt-10 sm:mt-16">
            <div className="text-center mb-6 sm:mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Choose your preferred way to connect with us. We&apos;re here to help bring your vision to life.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <ContactCard
                icon={<Mail className="w-8 h-8 text-blue-600" />}
                title="Drop us an Email"
                content="hello@noblestack.io"
                href="mailto:hello@noblestack.io"
                colorScheme="blue"
                isClickable={true}
              />

              <ContactCard
                icon={<Phone className="w-8 h-8 text-green-600" />}
                title="Let's Talk Now"
                content="+977 987-654-3210"
                href="tel:+9779876543210"
                colorScheme="green"
                isClickable={true}
              />
            </div>

            {/* Secondary Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
              <ContactCard
                icon={<MapPin className="w-8 h-8 text-purple-600" />}
                title="Our Location"
                content="Kathmandu, Nepal"
                colorScheme="purple"
                isClickable={false}
              />

              <ContactCard
                icon={<Clock className="w-8 h-8 text-orange-600" />}
                title="We're Available"
                content="Sun - Fri: 9:00 AM - 6:00 PM"
                colorScheme="orange"
                isClickable={false}
              />
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