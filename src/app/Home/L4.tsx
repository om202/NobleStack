"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ArrowRight, Code, Star, CheckCircle, X } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="glass rounded-3xl p-12 text-center animate-fade-in">
          {/* Header */}
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-dark text-gray-800 text-sm font-medium mb-6">
              <Code className="w-4 h-4 mr-2 text-orange-500" />
              Ready to Build?
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
              Transform Your Idea Into
              <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                {" "}Digital Reality
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join 100+ businesses who have transformed their operations with our AI-powered solutions and modern web development.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="glass-dark rounded-2xl p-6">
              <div className="text-3xl font-bold text-gray-900 mb-2">100+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div className="glass-dark rounded-2xl p-6">
              <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">AI Solutions Built</div>
            </div>
            <div className="glass-dark rounded-2xl p-6">
              <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button className="inline-flex items-center justify-center gap-2 text-lg px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <Code className="w-5 h-5" />
                  Schedule a Call
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
                <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass rounded-2xl p-8 max-w-md w-[90vw] shadow-xl animate-slide-up">
                  <Dialog.Title className="text-2xl font-bold mb-4 text-gray-900">
                    Let's Discuss Your Project
                  </Dialog.Title>
                  <Dialog.Description className="mb-6 text-gray-600">
                    Tell us about your vision and we'll show you how we can bring it to life.
                  </Dialog.Description>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full px-4 py-3 glass-dark border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 glass-dark border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <textarea
                      placeholder="Tell us about your project..."
                      rows={3}
                      className="w-full px-4 py-3 glass-dark border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    />
                    <button
                      type="submit"
                      className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-300"
                    >
                      Send Message
                    </button>
                  </form>
                  <Dialog.Close asChild>
                    <button className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-300">
                      <X className="w-4 h-4" />
                    </button>
                  </Dialog.Close>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>

            <button className="inline-flex items-center justify-center gap-2 text-lg px-8 py-4 glass text-gray-800 rounded-xl hover:bg-gray-100 transition-all duration-300">
              <Star className="w-5 h-5" />
              View Portfolio
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
              Free consultation
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
              Custom solutions
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
              Ongoing support
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 