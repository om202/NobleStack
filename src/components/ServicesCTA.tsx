import { Code, Rocket, Star } from "lucide-react";
import CTAButton from "./CTAButton";

export default function ServicesCTA() {
    return (
        <section id="cta" aria-label="Call to Action" className="bg-card-theme rounded-2xl p-8 shadow-sm border border-theme text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
                <Star className="w-6 h-6 text-yellow-400 fill-current" />
                <Star className="w-6 h-6 text-yellow-400 fill-current" />
                <Star className="w-6 h-6 text-yellow-400 fill-current" />
                <Star className="w-6 h-6 text-yellow-400 fill-current" />
                <Star className="w-6 h-6 text-yellow-400 fill-current" />
            </div>

            <h2 className="text-xl md:text-2xl font-bold mb-4 text-main-theme">
                Ready to Start Your Project?
            </h2>
            <p className="text-base text-subtitle-theme mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss your requirements and create a solution that
                drives your business forward. Our team is ready to bring your
                vision to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CTAButton variant="primary" icon={Rocket} href="https://calendar.app.google/mWmd6v421Pk66LQ26" className="w-full sm:w-auto">
                    Get Started Today
                </CTAButton>
                <CTAButton variant="secondary" icon={Code} href="/Career" className="w-full sm:w-auto">
                    Join Our Team
                </CTAButton>
            </div>
        </section>
    );
}
