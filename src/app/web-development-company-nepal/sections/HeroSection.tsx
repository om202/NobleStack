import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, CheckCircle2, ChevronLeft } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20 sm:pt-28 bg-page-theme">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-6 lg:mx-0 mx-auto max-w-2xl lg:max-w-none text-center lg:text-left">
           <Link href="/services" className="inline-flex items-center text-sm font-medium text-theme hover:text-main-theme transition-colors">
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back to Services
           </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="flex flex-col items-start space-y-8 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            <div className="inline-flex flex-wrap items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium border border-blue-500/20 shadow-sm mx-auto lg:mx-0">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
              Nepal's Top Web Development Agency
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-main-theme leading-[1.15] tracking-tight">
              Web Development Company in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400">Nepal</span> — Noble Stack
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-theme leading-relaxed">
              We build fast, SEO-optimized websites and web applications using Next.js, React, and TypeScript. Based in Kathmandu — serving Nepal and the world.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mx-auto lg:mx-0">
              <Link 
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2eCq_OaC6B-7nQ7gT38P1B-2gE_oH9S5K_U_Rz-D32f2oWnF20O8h9zK1O"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-lg hover:shadow-blue-600/20 active:scale-95"
              >
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-main-theme bg-card-theme border border-theme hover:bg-subtle-theme rounded-xl transition-all active:scale-95"
              >
                View Our Work
              </Link>
            </div>

            <div className="pt-6 border-t border-theme/50 w-full flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-page-theme bg-subtle-theme flex items-center justify-center overflow-hidden">
                    <Image
                      src={`https://images.unsplash.com/photo-1548142813-c348350df52b?w=100&h=100&fit=crop&q=80&auto=format&ixid=M3wxMjA3fDB8MHxzZWFyY2h8${i}fHxwZW9wbGV8ZW58MHx8MHx8fDA%3D`}
                      alt="Client"
                      width={40}
                      height={40}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-page-theme bg-blue-600 text-white flex items-center justify-center text-xs font-bold">
                  200+
                </div>
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-sm text-theme font-medium mt-1">Trusted by startups & global businesses</p>
              </div>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-theme/50 bg-card-theme aspect-[4/3] group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
              <Image
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200"
                alt="Web Development Company in Nepal"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                priority
              />
              {/* Floating badges */}
              <div className="absolute bottom-6 left-6 z-20 bg-page-theme/90 backdrop-blur-md px-4 py-3 rounded-xl border border-theme/30 shadow-lg flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="bg-indigo-500/20 p-2 rounded-full">
                  <CheckCircle2 className="w-5 h-5 text-indigo-500" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-main-theme">AI-First</span>
                  <span className="text-xs text-muted-theme">Engineering</span>
                </div>
              </div>
              <div className="absolute top-6 right-6 z-20 bg-page-theme/90 backdrop-blur-md px-4 py-3 rounded-xl border border-theme/30 shadow-lg flex items-center gap-2">
                 <span className="relative flex h-3 w-3 mr-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                </span>
                <span className="text-sm font-medium text-main-theme">Built to Rank & Scale</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
