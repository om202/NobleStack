"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ArrowRight, Rocket, Star, CheckCircle, X } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="glass rounded-3xl p-12 text-center animate-fade-in">
          {/* Header */}
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-dark text-white text-sm font-medium mb-6">
              <Rocket className="w-4 h-4 mr-2 text-orange-400" />
              Ready to Launch?
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Start Building Your
              <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                {" "}Dream Startup
              </span>
            </h2>
            
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Join 10,000+ entrepreneurs who are already building successful businesses with our AI-powered platform.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="glass-dark rounded-2xl p-6">
              <div className="text-3xl font-bold text-white mb-2">10k+</div>
              <div className="text-gray-300">Active Users</div>
            </div>
            <div className="glass-dark rounded-2xl p-6">
              <div className="text-3xl font-bold text-white mb-2">$2.5M+</div>
              <div className="text-gray-300">Revenue Generated</div>
            </div>
            <div className="glass-dark rounded-2xl p-6">
              <div className="text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-gray-300">Success Rate</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button className="inline-flex items-center justify-center gap-2 text-lg px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <Rocket className="w-5 h-5" />
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
                <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass rounded-2xl p-8 max-w-md w-[90vw] shadow-xl animate-slide-up">
                  <Dialog.Title className="text-2xl font-bold mb-4 text-white">
                    Start Your Free Trial
                  </Dialog.Title>
                  <Dialog.Description className="mb-6 text-gray-300">
                    Get full access to StartupFlow for 14 days. No credit card required.
                  </Dialog.Description>
                  <form className="space-y-4">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 glass-dark border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      type="submit"
                      className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-300"
                    >
                      Start Free Trial
                    </button>
                  </form>
                  <Dialog.Close asChild>
                    <button className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300">
                      <X className="w-4 h-4" />
                    </button>
                  </Dialog.Close>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>

            <button className="inline-flex items-center justify-center gap-2 text-lg px-8 py-4 glass text-white rounded-xl hover:bg-white/20 transition-all duration-300">
              <Star className="w-5 h-5" />
              Watch Demo
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-300">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
              14-day free trial
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
              No setup fees
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
              Cancel anytime
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 