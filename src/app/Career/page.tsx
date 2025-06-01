"use client";

import { Send, Upload } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Career() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    resume: null,
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Application submitted:", formData);
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
              Join Our Team
            </h1>

            <blockquote className="text-base sm:text-lg text-gray-500 mb-6 sm:mb-8 max-w-3xl mx-auto">
              &ldquo;Be part of a movement to bring cutting-edge technology to
              Nepal. Join our team of passionate developers, designers, and
              innovators building the future.&rdquo;
            </blockquote>
          </div>

          {/* Application Form */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200">
                          <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl md:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Submit Your Application
                </h3>
                <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Ready to join our team? Fill out the form below and let&apos;s
                start the conversation.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-4 sm:space-y-6 max-w-4xl mx-auto"
                          >
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
                    Position of Interest *
                  </label>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    required
                  >
                    <option value="">Select a position</option>
                    <option value="frontend-developer">
                      Frontend Developer
                    </option>
                    <option value="backend-developer">Backend Developer</option>
                    <option value="fullstack-developer">
                      Fullstack Developer
                    </option>
                    <option value="ai-engineer">AI/ML Engineer</option>
                    <option value="product-designer">Product Designer</option>
                    <option value="devops-engineer">DevOps Engineer</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Years of Experience
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select experience level</option>
                  <option value="intern">Intern</option>
                  <option value="0-1">0-1 years (Entry Level)</option>
                  <option value="2-3">2-3 years (Junior)</option>
                  <option value="4-6">4-6 years (Mid Level)</option>
                  <option value="7-10">7-10 years (Senior)</option>
                  <option value="10+">10+ years (Expert)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Resume/CV *
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-400 transition-colors duration-300">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-base text-gray-600 mb-2 font-medium">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-sm text-gray-500">
                    PDF, DOC, DOCX (max 5MB)
                  </p>
                  <input
                    type="file"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Cover Letter / Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Tell us about yourself and why you're interested in joining Noble Stack. What excites you about our mission?"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold mx-auto"
                >
                  Submit Application
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <p className="text-sm text-gray-500 mt-4">
                  We&apos;ll review your application and get back to you within
                  48 hours
                </p>
              </div>
            </form>
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
