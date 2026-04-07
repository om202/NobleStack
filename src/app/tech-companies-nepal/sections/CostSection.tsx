import { DollarSign } from "lucide-react";

export default function CostSection() {
  const pricing = [
    { level: "Junior Developer", range: "$500–$1,200", term: "per month", desc: "0-2 years experience, suitable for standard tasks and maintenance." },
    { level: "Mid-Level Developer", range: "$1,200–$2,500", term: "per month", desc: "2-5 years experience, capable of independent feature development.", featured: true },
    { level: "Senior Developer", range: "$2,500–$5,000", term: "per month", desc: "5+ years experience, system architecture & complex AI integrations." },
  ];

  return (
    <section className="py-16 px-4 sm:py-24 sm:px-6 bg-page-theme">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 mb-6 font-medium">
            <DollarSign className="w-4 h-4" />
            Pricing & Structure
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-main-theme mb-4">
            Cost of Hiring Developers in Nepal (2026)
          </h2>
          <p className="text-lg text-subtitle-theme max-w-2xl mx-auto">
            Compared to Western markets, Nepal offers high-quality engineering at 60–80% lower cost without compromising on quality or communication.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricing.map((tier, idx) => (
            <div 
              key={idx} 
              className={`relative bg-card-theme p-8 rounded-3xl border flex flex-col items-center text-center transition-all ${tier.featured ? 'border-blue-500 shadow-xl shadow-blue-500/10 md:scale-105 z-10' : 'border-theme hover:border-gray-400/30'}`}
            >
              {tier.featured && (
                <div className="absolute -top-4 bg-blue-500 text-white px-4 py-1 text-sm font-bold rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold text-main-theme mb-2">{tier.level}</h3>
              <p className="text-subtitle-theme text-sm mb-6">{tier.desc}</p>
              
              <div className="my-6">
                <span className="text-4xl font-extrabold text-main-theme">{tier.range}</span>
                <span className="block text-subtitle-theme mt-1">{tier.term}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
