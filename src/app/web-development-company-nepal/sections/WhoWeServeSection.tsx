import SectionHeader from "../../../components/SectionHeader";

export default function WhoWeServeSection() {
  const clients = [
    {
      title: "Local Businesses in Nepal",
      description:
        "Retail stores, trekking and tourism operators, educational institutions, healthcare providers, NGOs, financial services firms, and professional service businesses that need a professional, high-performance website to grow their online presence and generate leads.",
    },
    {
      title: "Nepali Startups",
      description:
        "Early-stage startups that need to ship an MVP fast and validate with real users before raising capital. Noble Stack has shipped its own startup products and understands how to move lean without building technical debt that slows you down in Series A.",
    },
    {
      title: "International Companies Outsourcing to Nepal",
      description:
        "Companies in Singapore, Australia, the US, and the UK looking for a reliable, English-speaking web development partner at a fraction of local agency costs. Noble Stack has experience working across time zones with structured async communication.",
    },
    {
      title: "Businesses Upgrading Legacy Sites",
      description:
        "Companies running outdated WordPress, PHP, or jQuery sites who need to migrate to a modern, performant Next.js application, without losing existing Google search rankings. We handle migration with SEO continuity as a first-class concern: redirect mapping, metadata preservation, sitemap continuity.",
    },
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Who Needs Web Development Services in Nepal?"
          description="From Kathmandu-based businesses building their first website to international startups outsourcing their full product development, we work across the spectrum."
          imageSrc="/undraw_team_85hs.svg"
          imageAlt="Who we serve illustration"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="bg-subtle-theme rounded-2xl p-6 md:p-7 border border-theme"
            >
              <h3 className="text-lg md:text-xl font-semibold text-main-theme mb-3">
                {client.title}
              </h3>
              <p className="text-base text-subtitle-theme leading-relaxed">
                {client.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
