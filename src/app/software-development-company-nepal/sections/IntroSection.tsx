import { Code2, Globe2 } from "lucide-react";

export default function IntroSection() {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-card-theme border border-theme p-8 md:p-12 rounded-3xl shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-bl-full -z-0 transition-transform group-hover:scale-110 duration-500" />
          
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-main-theme mb-6 leading-tight">
              What Does a Software Development Company in Nepal Do?
            </h2>
            <div className="space-y-6 text-lg text-theme">
              <p className="flex items-start gap-4">
                <span className="mt-1 bg-blue-500/10 p-2 rounded-lg text-blue-500 shrink-0">
                  <Code2 className="w-6 h-6" />
                </span>
                <span>
                  A software development company in Nepal builds custom software, web applications, mobile apps, and enterprise systems tailored to solve business problems and automate workflows. Services involve design, development, and scalable maintenance.
                </span>
              </p>
              
              <p className="flex items-start gap-4">
                <span className="mt-1 bg-cyan-500/10 p-2 rounded-lg text-cyan-500 shrink-0">
                  <Globe2 className="w-6 h-6" />
                </span>
                <span>
                  Nepal is rapidly becoming a preferred global outsourcing destination. With highly skilled developers, cost-effective services, and a booming tech ecosystem, startups and enterprises are looking towards Nepal for top-tier digital products.
                </span>
              </p>

              <div className="mt-8 pt-6 border-t border-theme/50">
                <p className="text-main-theme font-semibold text-xl">
                  Noble Stack is a Nepal-based software development company delivering scalable, high-quality digital products targeting fast growth for global businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
