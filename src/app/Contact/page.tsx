"use client";

import {
  Send,
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Building2,
} from "lucide-react";
import Image from "next/image";
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
          <div className="text-center mb-12">
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
              Get In Touch
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Ready to transform your ideas into intelligent digital solutions? 
              Let&apos;s discuss your project and explore how we can help you succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Send us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
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
                      <label className="block text-sm font-medium text-gray-700 mb-2">
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
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Tell us about your project, requirements, or any questions you have..."
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
                    <p className="text-sm text-gray-500 mt-3">
                      We&apos;ll get back to you within 24 hours
                    </p>
                  </div>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 h-fit">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-50 rounded-xl">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <a 
                        href="mailto:hello@noblestack.io" 
                        className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                      >
                        hello@noblestack.io
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-green-50 rounded-xl">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                      <a 
                        href="tel:+15551234567" 
                        className="text-gray-600 hover:text-green-600 transition-colors duration-300"
                      >
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-50 rounded-xl">
                      <MapPin className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                      <p className="text-gray-600">
                        123 Innovation Drive<br />
                        Tech Valley, CA 94025<br />
                        United States
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-orange-50 rounded-xl">
                      <Clock className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                        Saturday: 10:00 AM - 2:00 PM PST<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">Quick Actions</h4>
                  <div className="space-y-3">
                    <a
                      href="/Career"
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 group"
                    >
                      <Building2 className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
                      <span className="text-gray-700 group-hover:text-blue-700">
                        Join Our Team
                      </span>
                    </a>
                    
                    <a
                      href="#support"
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 group"
                    >
                      <MessageSquare className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
                      <span className="text-gray-700 group-hover:text-blue-700">
                        Live Chat Support
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Contact Options */}
          <div className="mt-12">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Prefer a Different Way to Connect?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                We&apos;re flexible! Choose the communication method that works best for you.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:hello@noblestack.io"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-700 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 font-medium group"
                >
                  <Mail className="w-4 h-4 group-hover:text-blue-600" />
                  Email Us Directly
                </a>
                
                <a 
                  href="tel:+15551234567"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-700 rounded-xl border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-all duration-300 font-medium group"
                >
                  <Phone className="w-4 h-4 group-hover:text-green-600" />
                  Schedule a Call
                </a>
                
                <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-700 rounded-xl border border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-300 font-medium group">
                  <MessageSquare className="w-4 h-4 group-hover:text-purple-600" />
                  Live Chat
                </button>
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