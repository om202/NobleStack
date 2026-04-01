import { DollarSign, Code, Clock, TrendingUp, MessageSquare } from "lucide-react";

const advantages = [
  {
    icon: DollarSign,
    title: "Cost-Effective Development",
    description: "Save 40–70% on development costs compared to US and European rates without compromising quality."
  },
  {
    icon: Code,
    title: "Highly Skilled Developers",
    description: "Access a massive pool of talented engineers with expertise in modern, scalable technologies."
  },
  {
    icon: Clock,
    title: "Time Zone Flexibility",
    description: "Comfortable overlap for daily syncs, ensuring smooth communication and agile delivery."
  },
  {
    icon: TrendingUp,
    title: "Growing Tech Ecosystem",
    description: "A rapidly maturing IT hub with innovative startups and reliable offshore tech partners."
  },
  {
    icon: MessageSquare,
    title: "Strong Communication",
    description: "Excellent English proficiency ensures seamless collaboration and project understanding."
  }
];

export default function WhyChooseNepalSection() {
  return (
    <section className="py-20 bg-page-theme overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-500/5 to-transparent -z-0" />
      
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 lg:max-w-xl">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-500 text-sm font-semibold mb-6">
              Why Nepal?
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-main-theme mb-6 leading-tight">
              Why Choose a Software Development Company in Nepal?
            </h2>
            <p className="text-lg text-theme mb-8 leading-relaxed">
              Nepal is rapidly gaining recognition as a reliable destination for software outsourcing. It is an ideal choice for startups and enterprises looking for high-quality software at highly competitive pricing.
            </p>
            
            <div className="flex items-center gap-4 p-4 rounded-xl bg-card-theme border border-theme shadow-sm">
              <div className="w-12 h-12 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center shrink-0">
                <DollarSign className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-main-theme">40–70% Lower Costs</h4>
                <p className="text-sm text-theme">Than US/European agencies</p>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="grid gap-4">
              {advantages.map((adv, idx) => (
                <div 
                  key={idx} 
                  className="group flex gap-4 p-5 rounded-2xl bg-card-theme border border-theme hover:border-blue-500/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                    <adv.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-main-theme mb-1 group-hover:text-blue-500 transition-colors">
                      {adv.title}
                    </h3>
                    <p className="text-theme text-sm leading-relaxed">
                      {adv.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
