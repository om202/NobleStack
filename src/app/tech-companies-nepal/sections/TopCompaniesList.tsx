import SectionHeader from "../../../components/SectionHeader";

export default function TopCompaniesList() {
  const tier1 = [
    { name: "Noble Stack", desc: "AI-first product development, automation, and modern web systems." },
    { name: "Leapfrog Technology", desc: "Global product engineering with strong startup partnerships." },
    { name: "Fusemachines", desc: "Leading AI education and enterprise AI solutions." },
    { name: "Cotiviti Nepal", desc: "Enterprise healthcare analytics and IT services." },
    { name: "Logpoint Nepal", desc: "Cybersecurity and SIEM solutions." },
    { name: "Deerwalk Inc.", desc: "Healthcare software and analytics." },
    { name: "CloudFactory", desc: "Outsourcing and AI-assisted workforce." },
    { name: "Verisk Nepal", desc: "Data analytics and risk assessment systems." },
    { name: "Cedar Gate Technologies", desc: "Healthcare SaaS platforms." },
    { name: "F1Soft", desc: "Fintech and digital payment systems." },
  ];

  const groups = [
    {
      label: "Tier 2: High-Growth",
      items: ["Braindigit IT Solution", "InfoDevelopers", "Softbenz Infosys", "Grepsr", "EB Pearls Nepal", "Yomari", "Techkraft", "Smart Data Solutions", "Genese Solution"],
    },
    {
      label: "Tier 3: Emerging",
      items: ["Code Himalaya", "Gurzu", "YoungInnovations", "Javra Software", "Spiralogics", "Bitsbeat", "Deerhold", "Webtech Nepal"],
    },
    {
      label: "Tier 4: Specialized",
      items: ["Softwarica", "Pixel Himalaya", "Asterdio", "HLE Nepal", "IT Glance", "Orbit Informatics"],
    },
    {
      label: "Tier 5: Rising Startups",
      items: ["Code Rush", "Stackfusion", "Devfinity", "Cloud Nepal", "TechAxis", "Digital Terai"],
    },
  ];

  return (
    <section
      id="top-companies"
      className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Top 50 Tech Companies in Nepal"
          description="Ranked by engineering quality, innovation, global delivery, and real-world execution—from established industry leaders to rising startups."
          imageSrc="/undraw_team_85hs.svg"
          imageAlt="Top companies illustration"
        />

        <div className="mb-10">
          <h3 className="text-lg md:text-xl font-semibold text-main-theme mb-6">
            Tier 1: Industry Leaders
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tier1.map((company, idx) => (
              <div
                key={idx}
                className="bg-subtle-theme rounded-2xl p-6 border border-theme"
              >
                <h4 className="text-base md:text-lg font-semibold text-main-theme mb-2">
                  {idx + 1}. {company.name}
                </h4>
                <p className="text-base text-subtitle-theme leading-relaxed">
                  {company.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {groups.map((group, idx) => (
            <div
              key={idx}
              className="bg-subtle-theme rounded-2xl p-6 border border-theme"
            >
              <h3 className="text-base md:text-lg font-semibold text-main-theme mb-4">
                {group.label}
              </h3>
              <ul className="space-y-2 text-sm text-subtitle-theme">
                {group.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
