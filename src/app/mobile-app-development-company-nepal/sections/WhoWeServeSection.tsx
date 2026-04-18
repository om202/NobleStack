import { Rocket, MonitorSmartphone, Building2, Globe2, Store } from "lucide-react";

export default function WhoWeServeSection() {
  const segments = [
    {
      icon: <Rocket className="w-8 h-8 text-blue-500" />,
      title: "Startups Building Their First App",
      description: "You have a product idea and need to validate it with real users before committing to full-scale development. Noble Stack helps startups ship a production-quality MVP to the App Store quickly, without building technical debt that prevents future scaling. We know how to move fast without creating problems you will spend the next year fixing."
    },
    {
      icon: <MonitorSmartphone className="w-8 h-8 text-indigo-500" />,
      title: "SaaS Companies Adding a Mobile Client",
      description: "Your web platform is live and your users are asking for a mobile app. Noble Stack builds iOS and Android clients that connect cleanly to your existing backend APIs, match your web product's feature set, and give users the native experience they expect on their phones."
    },
    {
      icon: <Building2 className="w-8 h-8 text-green-500" />,
      title: "Enterprises Building Internal Apps",
      description: "Large organizations need mobile apps that handle complex authentication, integrate with internal systems, meet security compliance requirements, and scale. Noble Stack has experience building enterprise-grade mobile systems with role-based access, SSO, audit logging, and offline functionality."
    },
    {
      icon: <Globe2 className="w-8 h-8 text-blue-400" />,
      title: "International Clients Outsourcing",
      description: "Companies in Singapore, Australia, the US, and UK hire Noble Stack as their Nepal-based mobile engineering partner. We deliver the same engineering quality as a local agency in their market at 60–80% lower cost, with full English communication and structured delivery."
    },
    {
      icon: <Store className="w-8 h-8 text-purple-500" />,
      title: "Nepali Businesses Going Digital",
      description: "Local businesses in tourism, retail, healthcare, education, finance, and logistics that need a professional iOS or Android app to serve their customers and compete in Nepal's rapidly growing digital market."
    }
  ];

  return (
    <section className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-main-theme mb-6">
          Who Noble Stack Builds Mobile Apps For
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {segments.map((segment, index) => (
          <div key={index} className={`bg-card-theme border border-theme rounded-3xl p-8 hover:border-blue-500/50 transition-colors ${index === 3 ? 'lg:col-span-2 lg:flex lg:gap-8 lg:items-center' : ''}`}>
            <div className={`mb-6 shrink-0 ${index === 3 ? 'lg:mb-0' : ''}`}>
               <div className="w-16 h-16 bg-page-theme rounded-2xl flex items-center justify-center shadow-sm border border-theme">
                  {segment.icon}
               </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-main-theme mb-4">{segment.title}</h3>
              <p className="text-muted-theme leading-relaxed text-sm lg:text-base">
                {segment.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
