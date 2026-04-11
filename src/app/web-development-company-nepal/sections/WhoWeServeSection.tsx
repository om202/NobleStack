import { CheckCircle2 } from "lucide-react";

export default function WhoWeServeSection() {
  const clients = [
    {
      title: "Local Businesses in Nepal",
      desc: "Retail stores, trekking and tourism companies, educational institutions, healthcare providers, NGOs, and service businesses that need a professional website to grow their online presence."
    },
    {
      title: "Nepali Startups",
      desc: "Early-stage startups that need to move fast, ship an MVP, and validate their product with real users. Noble Stack has experience shipping SaaS products and knows how to build lean without compromising quality."
    },
    {
      title: "International Companies Outsourcing",
      desc: "Companies in Singapore, Australia, the US, and the UK looking for a reliable, English-speaking web development partner at a fraction of their local agency costs."
    },
    {
      title: "Businesses Upgrading Legacy Sites",
      desc: "Companies running outdated WordPress or PHP sites who need to migrate to a modern, performant Next.js application without losing their existing SEO."
    }
  ];

  return (
    <section className="py-20 relative bg-page-theme">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-main-theme mb-4">
            Who Needs Web Development Services in Nepal?
          </h2>
          <p className="text-lg text-theme max-w-2xl mx-auto">
            Noble Stack works with a wide range of clients — from Kathmandu-based businesses building their first website to international startups outsourcing their full product development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {clients.map((client, idx) => (
            <div key={idx} className="bg-card-theme border border-theme p-8 rounded-3xl shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-indigo-500" />
                <h3 className="text-xl font-bold text-main-theme">{client.title}</h3>
              </div>
              <p className="text-theme leading-relaxed">
                {client.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
