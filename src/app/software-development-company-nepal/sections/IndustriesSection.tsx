import { Rocket, Cloud, ShoppingCart, Landmark, Stethoscope } from "lucide-react";

export default function IndustriesSection() {
  const industries = [
    {
      title: "Startups & SaaS",
      icon: Rocket,
      desc: "Scalable SaaS product development from MVP to market-ready platforms.",
      bg: "bg-blue-500/10",
      color: "text-blue-500"
    },
    {
      title: "Fintech",
      icon: Landmark,
      desc: "Secure financial services applications with top-grade compliance.",
      bg: "bg-emerald-500/10",
      color: "text-emerald-500"
    },
    {
      title: "E-Commerce",
      icon: ShoppingCart,
      desc: "High-performance online store apps and retail management systems.",
      bg: "bg-orange-500/10",
      color: "text-orange-500"
    },
    {
      title: "Healthcare",
      icon: Stethoscope,
      desc: "HIPAA-compliant telemedicine platforms and healthcare tools.",
      bg: "bg-rose-500/10",
      color: "text-rose-500"
    },
    {
      title: "Business Automation",
      icon: Cloud,
      desc: "Custom ERPs, CRMs, and internal systems to boost productivity.",
      bg: "bg-cyan-500/10",
      color: "text-cyan-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-page-theme overflow-hidden border-t border-b border-theme/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-main-theme mb-4">Industries We Serve</h2>
          <p className="text-theme text-lg">
            Our cross-industry experience allows us to deliver solutions tailored to different cutting-edge business models.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className={`p-8 rounded-3xl bg-card-theme border border-theme group hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 ${index === 3 ? 'md:col-start-1 lg:col-start-2' : ''} ${index === 4 ? 'md:col-start-2 lg:col-start-3' : ''}`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300 ${industry.bg} ${industry.color}`}>
                <industry.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-main-theme mb-3 group-hover:text-blue-500 transition-colors">{industry.title}</h3>
              <p className="text-theme leading-relaxed">
                {industry.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
