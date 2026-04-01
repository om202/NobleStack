import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function FinalCTASection() {
  return (
    <section className="py-24 bg-page-theme overflow-hidden relative" id="contact">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="relative bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 rounded-[2rem] p-8 md:p-16 text-center text-white overflow-hidden shadow-2xl">
          
          {/* Decorative background shapes */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm border border-white/20">
              <Sparkles className="w-8 h-8 text-blue-200" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Let's Build Your Software
            </h2>
            
            <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed">
              Looking to build scalable and reliable software? Noble Stack helps startups and businesses turn ideas into powerful digital products with modern technologies and efficient development processes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold text-blue-900 bg-white hover:bg-gray-50 rounded-xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 focus:ring-4 focus:ring-white/30"
              >
                Book Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            
            <p className="mt-6 text-sm text-blue-200/80">
              Discuss your project directly with our technical team. No commitment required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
