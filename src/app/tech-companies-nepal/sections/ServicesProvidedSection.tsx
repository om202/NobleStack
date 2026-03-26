import { MonitorSmartphone, BrainCircuit, Cloud, Layout, CheckCircle } from "lucide-react";

export default function ServicesProvidedSection() {
  const services = [
    { title: "Web & Mobile Development", desc: "Custom Next.js, React, and native mobile apps.", icon: MonitorSmartphone },
    { title: "AI & Machine Learning", desc: "Intelligent systems, chatbots, and generative AI integrations.", icon: BrainCircuit },
    { title: "SaaS Platforms", desc: "Scalable B2B and B2C software products from scratch.", icon: Cloud },
    { title: "UI/UX Design", desc: "Modern, user-centric interfaces built for conversions.", icon: Layout },
  ];

  return (
    <section className="py-16 px-4 sm:py-24 sm:px-6 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-main-theme mb-4">
            Types of IT Services Offered in Nepal
          </h2>
          <p className="text-lg text-subtitle-theme max-w-2xl mx-auto">
            Top tech companies in Nepal provide full-cycle engineering across modern stacks and domains.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="bg-subtle-theme p-6 rounded-2xl border border-theme hover:border-blue-500/50 transition-colors">
              <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-main-theme mb-2">{service.title}</h3>
              <p className="text-subtitle-theme text-sm mb-4">{service.desc}</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-xs text-subtitle-theme">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Production Ready
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
