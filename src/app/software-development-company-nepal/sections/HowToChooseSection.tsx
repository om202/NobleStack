import { Briefcase, MessageSquare, Wrench, Scaling, Headset } from "lucide-react";

export default function HowToChooseSection() {
  const factors = [
    {
      icon: Briefcase,
      title: "Review Portfolio and Past Projects",
      desc: "Look for strong case studies in your industry to verify their capability."
    },
    {
      icon: MessageSquare,
      title: "Evaluate Communication",
      desc: "Ensure their team is highly responsive and speaks excellent English."
    },
    {
      icon: Wrench,
      title: "Check Technical Expertise",
      desc: "Verify they use modern stacks (React, Node, Python, AWS) avoiding legacy dead-ends."
    },
    {
      icon: Scaling,
      title: "Ensure Scalability",
      desc: "Your product should be built with growth in mind, handling thousands or millions of users."
    },
    {
      icon: Headset,
      title: "Support & Maintenance",
      desc: "A good partner doesn't vanish after deployment. Look for long-term SLA agreements."
    }
  ];

  return (
    <section className="py-20 bg-page-theme" id="how-to-choose">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-main-theme mb-4">
            How to Choose the Right Software Development Company in Nepal
          </h2>
          <p className="text-lg text-theme">
            Choosing the right partner is critical for your project's success. Here are the key factors you must consider.
          </p>
        </div>

        <div className="space-y-4">
          {factors.map((factor, idx) => (
            <div key={idx} className="flex gap-4 sm:gap-6 p-6 md:p-8 bg-card-theme border border-theme rounded-3xl hover:border-blue-500/30 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-2xl flex items-center justify-center shrink-0">
                <factor.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-main-theme mb-2">{factor.title}</h3>
                <p className="text-theme text-sm sm:text-base">{factor.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
