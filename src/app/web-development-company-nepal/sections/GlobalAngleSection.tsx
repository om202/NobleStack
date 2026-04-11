import { Globe2, TrendingUp, Clock, Code2 } from "lucide-react";

export default function GlobalAngleSection() {
  return (
    <section className="py-20 relative bg-card-theme border-t border-theme overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-blue-500/5 -skew-x-12 translate-x-12 hidden lg:block" />
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-main-theme mb-6">
              Why Build With a Web Development Company in Nepal?
            </h2>
            <p className="text-lg text-theme mb-8 leading-relaxed">
              Businesses in Singapore, the United States, Australia, and the United Kingdom increasingly partner with Nepal-based web development companies for a straightforward reason: the quality is high and the cost is a fraction of Western rates.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1 bg-green-500/10 p-2 rounded-lg text-green-500 shrink-0">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-main-theme text-lg">Cost Advantage</h4>
                  <p className="text-theme">Web development rates in Nepal range from $25–$99 per hour. Equivalent talent in the US or UK typically costs $100–$250 per hour. Over a 3-month project, this difference often amounts to $20,000–$60,000 in savings — without compromising on quality.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 bg-blue-500/10 p-2 rounded-lg text-blue-500 shrink-0">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-main-theme text-lg">Talent Quality</h4>
                  <p className="text-theme">Nepal produces thousands of engineering graduates annually. Noble Stack recruits from the top tier — developers fluent in modern frameworks, experienced with production deployments, and comfortable with international clients.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 bg-purple-500/10 p-2 rounded-lg text-purple-500 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-main-theme text-lg">Communication & Timezone</h4>
                  <p className="text-theme">Noble Stack operates from UTC+5:45 (Kathmandu). This overlaps well with Singapore (1.25 hrs ahead), UAE (0.75 hrs behind), and provides workable windows with Europe and Australia. All client communication happens in English.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-page-theme border border-theme rounded-3xl p-8 shadow-sm">
             <div className="flex items-center gap-3 mb-6">
                <Globe2 className="w-8 h-8 text-blue-500" />
                <h3 className="text-2xl font-bold text-main-theme">Global Tech Hub</h3>
             </div>
             
             <div className="space-y-6">
                <div className="p-4 bg-card-theme rounded-2xl border border-theme/50">
                   <div className="text-3xl font-extrabold text-main-theme mb-1">NPR 12 Billion+</div>
                   <div className="text-sm font-medium text-blue-500 mb-2">IT Exports (2024-25)</div>
                   <p className="text-sm text-theme leading-relaxed">
                     Nepal's software and BPO exports crossed NPR 12 billion in the first seven months of fiscal year 2024–25 — a growth of over 20% year-on-year.
                   </p>
                </div>
                <div className="p-4 bg-card-theme rounded-2xl border border-theme/50">
                   <p className="text-sm text-theme leading-relaxed italic">
                     "This growth reflects the rising global trust in Nepali technology companies and the exceptional engineering talent available in the region."
                   </p>
                   <div className="mt-3 text-xs text-muted-theme font-medium text-right">— <a href="https://nrb.org.np" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 underline text-theme transition-colors">Nepal Rastra Bank Data</a></div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
