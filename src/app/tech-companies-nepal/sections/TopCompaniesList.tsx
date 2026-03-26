import { Building2, Terminal, Code, Users } from "lucide-react";

export default function TopCompaniesList() {
  const tier1Companies = [
    { name: "Noble Stack", desc: "AI-first product development, automation, and modern web systems.", icon: Terminal },
    { name: "Leapfrog Technology", desc: "Global product engineering with strong startup partnerships.", icon: Code },
    { name: "Fusemachines", desc: "Leading AI education and enterprise AI solutions.", icon: Users },
    { name: "Cotiviti Nepal", desc: "Enterprise healthcare analytics and IT services.", icon: Building2 },
    { name: "Logpoint Nepal", desc: "Cybersecurity and SIEM solutions.", icon: Terminal },
    { name: "Deerwalk Inc.", desc: "Healthcare software and analytics.", icon: Users },
    { name: "CloudFactory", desc: "Outsourcing and AI-assisted workforce.", icon: Code },
    { name: "Verisk Nepal", desc: "Data analytics and risk assessment systems.", icon: Building2 },
    { name: "Cedar Gate Technologies", desc: "Healthcare SaaS platforms.", icon: Terminal },
    { name: "F1Soft", desc: "Fintech and digital payment systems.", icon: Users },
  ];

  const highGrowth = ["Braindigit IT Solution", "InfoDevelopers", "Softbenz Infosys", "Grepsr", "EB Pearls Nepal", "Yomari", "Techkraft", "Smart Data Solutions", "Genese Solution"];
  const emerging = ["Code Himalaya", "Gurzu", "YoungInnovations", "Javra Software", "Spiralogics", "Bitsbeat", "Deerhold", "Webtech Nepal"];
  const specialized = ["Softwarica", "Pixel Himalaya", "Asterdio", "HLE Nepal", "IT Glance", "Orbit Informatics"];
  const startups = ["Code Rush", "Stackfusion", "Devfinity", "Cloud Nepal", "TechAxis", "Digital Terai"];

  return (
    <section id="top-companies" className="py-16 px-4 sm:py-24 sm:px-6 bg-page-theme">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-main-theme mb-4">
            Top 50 Tech Companies in Nepal (Ranked)
          </h2>
          <p className="text-lg text-subtitle-theme max-w-2xl mx-auto">
            Ranked based on engineering quality, innovation, global delivery, and real-world execution.
          </p>
        </div>

        {/* Tier 1 */}
        <div className="mb-20">
            <h3 className="text-2xl font-bold text-main-theme mb-8 border-b border-theme pb-4">
                Tier 1: Industry Leaders
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {tier1Companies.map((company, idx) => (
                    <div key={idx} className="group bg-card-theme p-6 rounded-2xl border border-theme hover:border-blue-500/30 transition-all hover:shadow-xl hover:-translate-y-1">
                        <div className="flex items-start gap-4 mb-4">
                            <div className="w-12 h-12 bg-subtle-theme rounded-xl flex items-center justify-center shrink-0 group-hover:bg-blue-500/10 group-hover:text-blue-500 transition-colors">
                                <company.icon className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-main-theme group-hover:text-blue-500 transition-colors">
                                    {idx + 1}. {company.name}
                                </h4>
                            </div>
                        </div>
                        <p className="text-subtitle-theme leading-relaxed">
                            {company.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>

        {/* Other Tiers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card-theme p-6 rounded-2xl border border-theme">
                <h3 className="text-lg font-bold text-main-theme mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    Tier 2: High-Growth
                </h3>
                <ul className="space-y-3">
                    {highGrowth.map((c, i) => (
                        <li key={i} className="text-subtitle-theme text-sm">{c}</li>
                    ))}
                </ul>
            </div>
            <div className="bg-card-theme p-6 rounded-2xl border border-theme">
                <h3 className="text-lg font-bold text-main-theme mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    Tier 3: Emerging
                </h3>
                <ul className="space-y-3">
                    {emerging.map((c, i) => (
                        <li key={i} className="text-subtitle-theme text-sm">{c}</li>
                    ))}
                </ul>
            </div>
            <div className="bg-card-theme p-6 rounded-2xl border border-theme">
                <h3 className="text-lg font-bold text-main-theme mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-500" />
                    Tier 4: Specialized
                </h3>
                <ul className="space-y-3">
                    {specialized.map((c, i) => (
                        <li key={i} className="text-subtitle-theme text-sm">{c}</li>
                    ))}
                </ul>
            </div>
            <div className="bg-card-theme p-6 rounded-2xl border border-theme">
                <h3 className="text-lg font-bold text-main-theme mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-500" />
                    Tier 5: Rising Startups
                </h3>
                <ul className="space-y-3">
                    {startups.map((c, i) => (
                        <li key={i} className="text-subtitle-theme text-sm">{c}</li>
                    ))}
                </ul>
            </div>
        </div>
      </div>
    </section>
  );
}
