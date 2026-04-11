import { Monitor, Layers, ShoppingCart, Cpu, Wrench } from "lucide-react";

export default function ServicesSection() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-main-theme mb-4">
            Web Development Services We Offer
          </h2>
          <p className="text-lg text-theme">
            Noble Stack provides end-to-end web development services — from static landing pages to complex, data-intensive web applications. Every project is custom-built for your specific goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="p-8 rounded-2xl bg-card-theme border border-theme shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full">
            <div className="w-14 h-14 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Layers className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-main-theme mb-3">Full-Stack Web Application Development</h3>
            <p className="text-theme mb-6 flex-grow">
              We build complete web applications — frontend to backend to infrastructure — using React, Next.js, Node.js, and PostgreSQL. Whether you need a customer portal, an internal dashboard, or a multi-tenant platform, we design systems that scale without costly rewrites.
            </p>
            <ul className="space-y-2 text-sm text-theme border-t border-theme/50 pt-4">
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full" /> Custom web apps for startups & enterprises</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full" /> Internal tools and admin dashboards</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full" /> B2B portals and customer-facing platforms</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-2xl bg-card-theme border border-theme shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full">
            <div className="w-14 h-14 bg-indigo-500/10 text-indigo-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Monitor className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-main-theme mb-3">Corporate Website Development</h3>
            <p className="text-theme mb-6 flex-grow">
              A well-built corporate website is your most important sales asset. Noble Stack designs and develops high-performance corporate websites with fast load times, strong Core Web Vitals scores, and SEO-optimized architecture — so your business ranks well and converts visitors into clients.
            </p>
            <ul className="space-y-2 text-sm text-theme border-t border-theme/50 pt-4">
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-indigo-500 rounded-full" /> Company websites and service pages</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-indigo-500 rounded-full" /> Product and marketing landing pages</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-indigo-500 rounded-full" /> Brand-aligned design with custom UI</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-2xl bg-card-theme border border-theme shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full">
            <div className="w-14 h-14 bg-purple-500/10 text-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
            </div>
            <h3 className="text-xl font-bold text-main-theme mb-3">SaaS Platform Development</h3>
            <p className="text-theme mb-6 flex-grow">
              Building a SaaS product from Nepal is our specialty. We have shipped our own SaaS products and understand the architecture decisions that matter — multi-tenancy, subscription billing, role-based access, performance at scale.
            </p>
            <ul className="space-y-2 text-sm text-theme border-t border-theme/50 pt-4">
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-purple-500 rounded-full" /> Full SaaS platforms from MVP to production</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-purple-500 rounded-full" /> Subscription integrations (Stripe, eSewa)</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-purple-500 rounded-full" /> SaaS analytics and reporting dashboards</li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className="p-8 rounded-2xl bg-card-theme border border-theme shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full">
            <div className="w-14 h-14 bg-emerald-500/10 text-emerald-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <ShoppingCart className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-main-theme mb-3">E-Commerce Website Development</h3>
            <p className="text-theme mb-6 flex-grow">
              We build e-commerce websites that are fast, mobile-first, and conversion-optimized. From product catalogues to checkout flows, our engineering is focused on turning browsers into buyers.
            </p>
            <ul className="space-y-2 text-sm text-theme border-t border-theme/50 pt-4">
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-emerald-500 rounded-full" /> Custom e-commerce stores</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-emerald-500 rounded-full" /> Local payment gateways (eSewa, Khalti)</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-emerald-500 rounded-full" /> Inventory & multi-vendor platforms</li>
            </ul>
          </div>

          {/* Card 5 */}
          <div className="p-8 rounded-2xl bg-card-theme border border-theme shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full">
            <div className="w-14 h-14 bg-yellow-500/10 text-yellow-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Cpu className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-main-theme mb-3">AI-Powered Web Development</h3>
            <p className="text-theme mb-6 flex-grow">
              Noble Stack is Nepal's only web development company that builds AI into the web stack as standard. We integrate large language models, recommendation engines, intelligent search, and workflows directly into apps.
            </p>
            <ul className="space-y-2 text-sm text-theme border-t border-theme/50 pt-4">
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-yellow-500 rounded-full" /> AI chatbots embedded in platforms</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-yellow-500 rounded-full" /> Intelligent search & recommendation</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-yellow-500 rounded-full" /> Automated content generation tools</li>
            </ul>
          </div>

          {/* Card 6 */}
          <div className="p-8 rounded-2xl bg-card-theme border border-theme shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full">
            <div className="w-14 h-14 bg-rose-500/10 text-rose-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Wrench className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-main-theme mb-3">Maintenance and Support</h3>
            <p className="text-theme mb-6 flex-grow">
               We provide ongoing maintenance, performance monitoring, security patching, and feature development for existing web applications — whether we built them or not. We ensure your digital assets continue to perform.
            </p>
            <ul className="space-y-2 text-sm text-theme border-t border-theme/50 pt-4">
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-rose-500 rounded-full" /> Security updates & patching</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-rose-500 rounded-full" /> Performance monitoring</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-rose-500 rounded-full" /> Feature enhancements</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
