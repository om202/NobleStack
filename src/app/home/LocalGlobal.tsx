import Image from "next/image";
import { MapPin, ArrowRight } from "lucide-react";
import CTAButton from "../../components/CTAButton";

const supportItems = [
    "AI Development Services",
    "Web Development",
    "Mobile App Development",
    "SaaS Product Engineering",
    "Workflow Automation",
    "Long-Term Technical Partnerships",
];

export default function LocalGlobal() {
    return (
        <section
            id="local-global"
            aria-label="Software development company based in Kathmandu, Nepal"
            className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme transition-colors"
        >
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-subtle-theme border border-theme text-xs text-main-theme/80 mb-4">
                            <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                            Kathmandu, Nepal · Remote-first delivery worldwide
                        </div>
                        <h2 className="text-2xl md:text-3xl font-serif text-main-theme mb-4">
                            Software Development Company Based in Kathmandu, Nepal
                        </h2>
                        <p className="text-base sm:text-lg text-subtitle-theme leading-relaxed mb-5">
                            Noble Stack works with businesses in Nepal and international clients across remote-first environments. Our team combines local engineering talent with global product development standards to deliver scalable digital solutions for startups, growing businesses, and modern organizations.
                        </p>
                        <p className="text-sm text-muted-theme mb-4">We support companies looking for:</p>
                        <ul className="flex flex-wrap gap-2 mb-6">
                            {supportItems.map((item) => (
                                <li
                                    key={item}
                                    className="px-3 py-1.5 rounded-full bg-subtle-theme border border-theme text-sm text-main-theme/90"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <CTAButton variant="secondary" href="/it-company-in-kathmandu-nepal" icon={ArrowRight}>
                            Learn About Our Nepal Operations
                        </CTAButton>
                    </div>
                    <div className="relative w-full max-w-md mx-auto">
                        <Image
                            src="/undraw_working-at-home_pxaa.svg"
                            alt="Remote software team collaboration"
                            width={520}
                            height={400}
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
