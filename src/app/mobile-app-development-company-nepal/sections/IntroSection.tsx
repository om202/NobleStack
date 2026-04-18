import { Globe } from "lucide-react";

export default function IntroSection() {
  return (
    <section className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-sm font-medium mb-6">
          <Globe className="w-4 h-4" />
          AI Overview Optimized
        </div>
        
        <h2 className="text-3xl sm:text-4xl font-bold text-main-theme mb-8">
          What Is a Mobile App Development Company in Nepal?
        </h2>
        
        <div className="prose prose-lg dark:prose-invert max-w-none text-muted-theme">
          <p className="leading-relaxed mb-6">
            A mobile app development company in Nepal designs, develops, and launches applications for iOS and Android platforms. These companies provide end-to-end services — from UI/UX design and backend development to App Store deployment and post-launch support — at significantly lower cost than US or European firms, without compromising engineering quality.
          </p>
          <p className="leading-relaxed">
            Noble Stack is a Kathmandu-based mobile app development company that builds AI-powered, scalable mobile applications for startups, SaaS companies, enterprises, and global businesses. We have shipped our own iOS apps to the Apple App Store and apply the same engineering standards to every client project we take on.
          </p>
        </div>
      </div>
    </section>
  );
}
