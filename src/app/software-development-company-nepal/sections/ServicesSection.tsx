import Link from "next/link";
import { Monitor, Server, Smartphone, LayoutGrid, Building2, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Custom Software Development",
    description: "Tailored software solutions designed around your business processes ensuring scalability.",
    icon: LayoutGrid,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    link: "/services"
  },
  {
    title: "SaaS Development",
    description: "From MVP to full-scale SaaS platforms, we develop secure and user-friendly products.",
    icon: Server,
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
    link: "/services"
  },
  {
    title: "Web Application Development",
    description: "Fast, responsive, and high-performance web applications using modern frameworks.",
    icon: Monitor,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    link: "/services"
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    icon: Smartphone,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    link: "/services/mobile-apps"
  },
  {
    title: "Enterprise Software",
    description: "Robust systems that streamline operations and integrate with existing workflows.",
    icon: Building2,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    link: "/services"
  }
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-subtle-theme/30" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-main-theme mb-4">Our Software Development Services</h2>
          <p className="text-lg text-theme">
            We provide comprehensive development solutions from concept to deployment, utilizing top modern technologies.
            👉 Check our <Link href="/ai-development-company-in-nepal" className="text-blue-500 hover:underline">AI development services</Link> and <Link href="/services/devops" className="text-blue-500 hover:underline">DevOps expertise</Link>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Link href={service.link} key={index} className={`group block ${index === 4 ? 'lg:col-start-2' : ''}`}>
              <div className="h-full p-8 rounded-2xl bg-card-theme border border-theme hover:border-blue-500/30 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${service.bg} ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-main-theme mb-3 group-hover:text-blue-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-theme mb-6 line-clamp-2">
                  {service.description}
                </p>
                <div className="flex items-center text-sm font-semibold text-blue-500 group-hover:translate-x-1 transition-transform">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
