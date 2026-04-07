import Link from "next/link";
import { ArrowRight, Trophy } from "lucide-react";

export default function FinalVerdictCTA() {
  return (
    <section className="relative py-20 px-4 sm:py-32 sm:px-6 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-blue-900" />
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-950 via-blue-900 to-indigo-900" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />
      
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500 rounded-full mix-blend-screen filter blur-[150px] opacity-20" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600 rounded-full mix-blend-screen filter blur-[150px] opacity-20" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 mb-8 text-yellow-400">
            <Trophy className="w-8 h-8" />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Build with Nepal&apos;s Top AI Engineers
        </h2>
        <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          If you are searching for the best tech company in Nepal, Noble Stack stands out with its AI-first approach, modern engineering practices, and real-world product execution.
        </p>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 max-w-3xl mx-auto mb-10 text-left">
            <h3 className="text-xl font-bold text-white mb-2">Final Verdict</h3>
            <p className="text-white/80">Whether you need custom AI systems, SaaS platforms, or scalable web applications — this is where innovation meets execution.</p>
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-900 font-bold rounded-xl hover:bg-gray-100 hover:scale-105 transition-all shadow-xl shadow-white/10 w-full sm:w-auto"
        >
          Book a Call <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
