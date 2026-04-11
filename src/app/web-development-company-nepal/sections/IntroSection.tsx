import { Code2, Globe2, Rocket } from "lucide-react";

export default function IntroSection() {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-card-theme border border-theme p-8 md:p-12 rounded-3xl shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-bl-full -z-0 transition-transform group-hover:scale-110 duration-500" />
          
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-main-theme mb-6 leading-tight">
              Nepal's AI-First Web Development Company
            </h2>
            <div className="space-y-6 text-lg text-theme">
              <p className="flex items-start gap-4">
                <span className="mt-1 bg-indigo-500/10 p-2 rounded-lg text-indigo-500 shrink-0">
                  <Globe2 className="w-6 h-6" />
                </span>
                <span>
                  Noble Stack is a web development company based in Kathmandu, Nepal. We design and build high-performance websites and web applications that are fast, secure, and built to rank — using the modern tech stack that global product teams rely on.
                </span>
              </p>
              
              <p className="flex items-start gap-4">
                <span className="mt-1 bg-blue-500/10 p-2 rounded-lg text-blue-500 shrink-0">
                  <Code2 className="w-6 h-6" />
                </span>
                <span>
                  We are not a generic web agency. Noble Stack operates as an AI-first engineering team. Every website and web application we build is architected with performance, scalability, and intelligent automation in mind from day one — not added as an afterthought.
                </span>
              </p>

              <div className="mt-8 pt-6 border-t border-theme/50 text-main-theme font-medium text-lg leading-relaxed">
                  <div className="flex items-center gap-3 mb-3">
                     <span className="bg-emerald-500/10 text-emerald-500 p-2 rounded-lg">
                        <Rocket className="w-5 h-5"/>
                     </span>
                     <span className="font-semibold text-xl">Our credibility comes from shipping real products.</span>
                  </div>
                We have built and launched our own web platforms — npgo.to (a URL shortener serving Nepali businesses), Loopn (an AI-powered professional networking platform), and Create Profile Pic (a web-based AI image tool with global users). These are not agency portfolio pieces. They are production systems under real-world load.
                <br /><br />
                <span className="text-blue-500 font-semibold">When you hire Noble Stack, you get the same engineering standards we apply to our own products.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
