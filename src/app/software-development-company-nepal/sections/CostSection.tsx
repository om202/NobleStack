import { Check, Info } from "lucide-react";
import Link from "next/link";

export default function CostSection() {
  return (
    <section className="py-20 bg-page-theme" id="cost">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold text-blue-500 tracking-wider uppercase mb-2 block">Pricing Overview</span>
          <h2 className="text-3xl md:text-5xl font-bold text-main-theme mb-4">Software Development Cost in Nepal</h2>
          <p className="text-theme text-lg">
            Software development in Nepal offers unparalleled high-quality solutions at incredibly competitive pricing compared to the Western market.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Small Projects */}
          <div className="bg-card-theme border border-theme p-8 rounded-3xl hover:border-blue-500/30 transition-all shadow-sm hover:shadow-xl relative flex flex-col">
            <h3 className="text-xl font-bold text-main-theme mb-2">Small Projects</h3>
            <p className="text-theme text-sm mb-6">MVPs, simple web apps, and basic mobile applications.</p>
            <div className="my-6">
              <span className="text-4xl font-extrabold text-main-theme">$5,000</span>
              <span className="text-theme"> - $20,000</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start gap-3 text-sm text-theme">
                <Check className="w-5 h-5 text-green-500 shrink-0" />
                <span>Basic features and functionalities</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-theme">
                <Check className="w-5 h-5 text-green-500 shrink-0" />
                <span>Standard UI/UX design</span>
              </li>
               <li className="flex items-start gap-3 text-sm text-theme">
                <Check className="w-5 h-5 text-green-500 shrink-0" />
                <span>1-3 months timeline</span>
              </li>
            </ul>
            <Link href="/contact" className="w-full py-3 px-4 bg-subtle-theme hover:bg-theme/10 text-main-theme font-semibold rounded-xl text-center transition-colors">
              Get an Estimate
            </Link>
          </div>

          {/* Medium Projects */}
          <div className="bg-blue-600 border border-blue-500 p-8 rounded-3xl shadow-2xl relative flex flex-col transform lg:-translate-y-4">
            <div className="absolute top-0 right-8 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-b-lg">Most Popular</div>
            <h3 className="text-xl font-bold text-white mb-2">Medium Projects</h3>
            <p className="text-blue-100 text-sm mb-6">Complete SaaS platforms, complex mobile apps, advanced integrations.</p>
            <div className="my-6">
              <span className="text-4xl font-extrabold text-white">$20,000</span>
              <span className="text-blue-200"> - $80,000</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start gap-3 text-sm text-blue-50">
                <Check className="w-5 h-5 text-blue-200 shrink-0" />
                <span>Advanced architecture & custom algorithms</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-blue-50">
                <Check className="w-5 h-5 text-blue-200 shrink-0" />
                <span>Premium UI/UX and animations</span>
              </li>
               <li className="flex items-start gap-3 text-sm text-blue-50">
                <Check className="w-5 h-5 text-blue-200 shrink-0" />
                <span>3-6 months timeline</span>
              </li>
            </ul>
            <Link href="/contact" className="w-full py-3 px-4 bg-white hover:bg-gray-100 text-blue-600 font-bold rounded-xl text-center transition-colors">
              Discuss Your Project
            </Link>
          </div>

          {/* Large Projects */}
          <div className="bg-card-theme border border-theme p-8 rounded-3xl hover:border-blue-500/30 transition-all shadow-sm hover:shadow-xl relative flex flex-col">
            <h3 className="text-xl font-bold text-main-theme mb-2">Enterprise Solutions</h3>
            <p className="text-theme text-sm mb-6">Large-scale ERPs, highly secure fintech systems, custom AI tools.</p>
            <div className="my-6">
              <span className="text-4xl font-extrabold text-main-theme">$80,000+</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start gap-3 text-sm text-theme">
                <Check className="w-5 h-5 text-green-500 shrink-0" />
                <span>Microservices and enterprise architecture</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-theme">
                <Check className="w-5 h-5 text-green-500 shrink-0" />
                <span>Top-tier security and compliance checks</span>
              </li>
               <li className="flex items-start gap-3 text-sm text-theme">
                <Check className="w-5 h-5 text-green-500 shrink-0" />
                <span>6+ months continuous development</span>
              </li>
            </ul>
             <Link href="/contact" className="w-full py-3 px-4 bg-subtle-theme hover:bg-theme/10 text-main-theme font-semibold rounded-xl text-center transition-colors">
              Contact Sales
            </Link>
          </div>
        </div>

        {/* Cost Comparison note */}
        <div className="bg-blue-500/5 border border-blue-500/20 rounded-2xl p-6 flex items-start gap-4">
          <Info className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-main-theme mb-1">Cost Comparison vs US/Europe</h4>
            <p className="text-theme text-sm leading-relaxed">
              With Noble Stack, Nepal offers a massive cost advantage. An $80,000 project built by top talent in Nepal would comfortably cost upwards of $200,000—$300,000 in the USA or Western Europe. Our cost is lower entirely due to regional living cost metrics, maintaining identically high (or higher) technical outputs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
