import { DollarSign, GraduationCap, TrendingUp, Clock } from "lucide-react";

export default function WhyNepalSection() {
  const points = [
    {
      icon: <DollarSign className="w-6 h-6 text-green-500" />,
      title: "Cost Advantage — Real Numbers",
      description: "Mobile developer hourly rates in Nepal: $25–$80 per hour. Compared to $100–$200 in the US and $80–$180 in the UK. Save $30k–$80k on a 4-month build with matching quality."
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-indigo-500" />,
      title: "Skilled Talent Pool",
      description: "Thousands of engineering graduates yearly. Developers fluent in English, modern mobile frameworks, and experienced with international project delivery standards."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-500" />,
      title: "Proven Track Record",
      description: "Nepal's software and BPO exports crossed NPR 12 billion in early FY2024-25, over 20% YoY growth. Driven by real demand from global businesses returning for quality at scale."
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-500" />,
      title: "Timezone Compatibility",
      description: "Working from UTC+5:45. Excellent alignment for Singapore (UTC+8), UAE (UTC+4), UK (UTC+1), Australia (UTC+10), and async-friendly models for US clients."
    }
  ];

  return (
    <section className="bg-subtle-theme py-20 border-y border-theme">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-main-theme mb-6">
            Why Hire a Mobile App Development Company in Nepal?
          </h2>
          <p className="text-lg text-muted-theme">
            Businesses from Singapore, the United States, Australia, and the United Kingdom increasingly choose Nepal-based companies for mobile app development. The reason is consistent: engineering quality that competes with Western firms at dramatically lower cost.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {points.map((point, index) => (
            <div key={index} className="flex gap-6 items-start bg-card-theme p-6 md:p-8 rounded-2xl border border-theme">
              <div className="shrink-0 w-12 h-12 bg-page-theme rounded-xl flex items-center justify-center border border-theme shadow-sm">
                {point.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-main-theme mb-3">{point.title}</h3>
                <p className="text-muted-theme leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
