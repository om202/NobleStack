import Image from "next/image";
import { Globe, Users, TrendingUp, Lightbulb } from "lucide-react";

export default function WhyNepalSection() {
  const points = [
    { title: "Skilled Engineers", desc: "A rapidly growing pool of highly educated, English-speaking developers and AI experts.", icon: Users },
    { title: "Competitive Pricing", desc: "Offers high-quality engineering at 60–80% lower cost compared to Western markets.", icon: TrendingUp },
    { title: "AI Talent Pool", desc: "A surging number of engineers specializing in machine learning, automation, and Next.js.", icon: Lightbulb },
    { title: "Global Outsourcing Hub", desc: "Strong IT ecosystem trusted by top companies worldwide for scalable tech solutions.", icon: Globe },
  ];

  return (
    <section className="py-16 px-4 sm:py-24 sm:px-6 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-main-theme mb-4">
                Why Global Companies Choose Nepal
              </h2>
              <p className="text-lg text-subtitle-theme">
                Nepal has rapidly evolved into a competitive destination for software development, AI solutions, and global outsourcing.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {points.map((point, idx) => (
                <div key={idx} className="bg-subtle-theme p-6 rounded-2xl border border-theme hover:shadow-lg transition-transform hover:-translate-y-1">
                  <div className="w-10 h-10 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center mb-4">
                    <point.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-main-theme mb-2">{point.title}</h3>
                  <p className="text-subtitle-theme text-sm leading-relaxed text-main-theme/80">{point.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10 hidden md:block">
            <Image
              src="/nepal.webp"
              alt="Nepal software development outsourcing hub"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700 object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
