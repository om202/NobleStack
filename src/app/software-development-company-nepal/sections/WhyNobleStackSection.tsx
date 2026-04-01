import { ShieldCheck, Target, Zap, Globe2, Quote } from "lucide-react";

export default function WhyNobleStackSection() {
  const trustSignals = [
    {
      icon: Target,
      title: "Scalable Solutions",
      desc: "Robust architecture built for high-growth startups and massive enterprise scale."
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      desc: "Agile methodologies ensuring quick time-to-market without cutting corners."
    },
    {
      icon: ShieldCheck,
      title: "Modern Tech Stack",
      desc: "Laser-focused on performance, security, and adopting the latest web & mobile tech."
    },
    {
      icon: Globe2,
      title: "Global Clients",
      desc: "Proven track record of success with international clients across various time zones."
    }
  ];

  return (
    <section className="py-20 relative bg-page-theme">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-blue-500/5 blur-[120px] rounded-full z-0" />
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold text-main-theme mb-6 leading-tight">
              Why <span className="text-blue-500">Noble Stack</span> is a Trusted Software Company in Nepal
            </h2>
            <p className="text-lg text-theme mb-10 leading-relaxed">
              Noble Stack is focused on delivering reliable, scalable, and modern software solutions. With an experienced team of engineers, we prioritize clean architecture and seamless global delivery.
            </p>

            <div className="relative bg-blue-600 rounded-3xl p-8 md:p-10 shadow-2xl overflow-hidden mt-8 text-white">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-bl-full -z-0" />
              <Quote className="w-12 h-12 text-white/20 mb-6 relative z-10" />
              <p className="relative z-10 text-xl md:text-2xl font-medium italic leading-relaxed">
                "We're a group of hardworking smart people working diligently to bring the latest technology accessible to people of Nepal."
              </p>
              <div className="mt-6 flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full border-2 border-white/20 bg-white/10 flex items-center justify-center font-bold">NS</div>
                <div>
                  <h4 className="font-bold">Noble Stack Team</h4>
                  <p className="text-sm text-white/80">Founders</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
             <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                {trustSignals.map((signal, idx) => (
                  <div key={idx} className="bg-card-theme border border-theme p-6 rounded-2xl hover:border-blue-500/40 hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-5">
                      <signal.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-main-theme mb-2">{signal.title}</h3>
                    <p className="text-theme text-sm leading-relaxed">{signal.desc}</p>
                  </div>
                ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
