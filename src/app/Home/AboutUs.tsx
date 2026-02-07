import React from "react";
import { ArrowRight } from "lucide-react";
import CTAButton from "../../components/CTAButton";
import SectionHeader from "../../components/SectionHeader";

export default function AboutUs() {
    return (
        <section id="about" aria-label="About Us" className="max-w-7xl mx-auto px-3 pb-4 sm:px-4 sm:pb-8">
            <div className="bg-card-theme rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm border border-theme">
                <SectionHeader
                    title="About Noble Stack"
                    description="We're an AI-first software company based in Kathmandu, Nepal, building intelligent products with global standards. Our credibility comes from shipping real products, not just promises."
                    imageSrc="/undraw_team-spirit_18vw.svg"
                    imageAlt="About Noble Stack"
                />

                <div className="mt-8 text-center">
                    <CTAButton variant="secondary" href="/About" icon={ArrowRight}>
                        Read More About Us
                    </CTAButton>
                </div>
            </div>
        </section>
    );
}
