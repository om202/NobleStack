"use client";

import {
  Send,
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
} from "lucide-react";
import { useState } from "react";



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
      <section className="py-12 px-4 min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-16">
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
            <div className="text-center mb-10 sm:mb-12">
              <div className="flex items-center justify-center gap-2 mb-2">
                <MessageSquare className="w-6 h-6 text-gray-500" />
                <h3 className="text-xl font-semibold text-gray-700">
                  Send us a Message
                </h3>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-md-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-nobleblue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-md-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-nobleblue-500 focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-md-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-nobleblue-500 focus:border-transparent transition-all duration-300"
                    placeholder="+977 (XXX) XXX-XXXX"
                  />
                </div>

                <div>
                  <label className="block text-md-sm font-semibold text-gray-700 mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-nobleblue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-md-sm font-semibold text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-nobleblue-500 focus:border-transparent transition-all duration-300"
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
                <label className="block text-md-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-nobleblue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Tell us about your project, requirements, or any questions you have. What excites you about working with Noble Stack?"
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="group flex items-center justify-center gap-3 px-8 py-4 gradient-nobleblue-up text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold mx-auto"
                >
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <p className="text-md-sm text-gray-500 mt-4">
                  We&apos;ll get back to you within 24 hours
                </p>
              </div>
            </form>
          </div>

          {/* Contact Information Cards */}
          <div className="mt-10 sm:mt-16">
            <div className="text-center mb-6 sm:mb-10">
              <h3 className="text-xl font-semibold text-gray-700 mb-3">
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Choose your preferred way to connect with us.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
                <a href="mailto:hello@noblestack.io" className="block">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 bg-gray-50 rounded-lg mb-3">
                      <Mail className="w-6 h-6 text-gray-600" />
                    </div>
                    <h4 className="font-medium text-gray-900 mb-1">Email</h4>
                    <p className="text-sm text-gray-600">hello@noblestack.io</p>
                  </div>
                </a>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
                <a href="tel:+9779876543210" className="block">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 bg-gray-50 rounded-lg mb-3">
                      <Phone className="w-6 h-6 text-gray-600" />
                    </div>
                    <h4 className="font-medium text-gray-900 mb-1">Phone</h4>
                    <p className="text-sm text-gray-600">+977 987-654-3210</p>
                  </div>
                </a>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-gray-50 rounded-lg mb-3">
                    <MapPin className="w-6 h-6 text-gray-600" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-1">Location</h4>
                  <p className="text-sm text-gray-600">Kathmandu, Nepal</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-gray-50 rounded-lg mb-3">
                    <Clock className="w-6 h-6 text-gray-600" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-1">Hours</h4>
                  <p className="text-sm text-gray-600">Sun - Fri: 9AM - 6PM</p>
                </div>
              </div>
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