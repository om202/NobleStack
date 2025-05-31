import { ArrowRight, Star, CheckCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-8">
          <Star className="w-4 h-4 mr-2" />
          Now in Public Beta
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Build Your Next
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {" "}
            Startup{" "}
          </span>
          Faster
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          The all-in-one platform that helps entrepreneurs validate ideas,
          build products, and scale businesses with powerful AI-driven
          insights and automation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="flex items-center justify-center gap-2 text-lg px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Start Building Today
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="text-lg px-8 py-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            Watch Demo
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
          <div className="flex items-center">
            <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
            Free 14-day trial
          </div>
          <div className="flex items-center">
            <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
            No credit card required
          </div>
          <div className="flex items-center">
            <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
            Cancel anytime
          </div>
        </div>
      </div>
    </section>
  );
} 