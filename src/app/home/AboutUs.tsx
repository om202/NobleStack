import React from "react";
import { ArrowRight } from "lucide-react";
import CTAButton from "../../components/CTAButton";
import SectionHeader from "../../components/SectionHeader";

export default function AboutUs() {
    return (
        <section id="about" aria-label="About Us" className="max-w-7xl mx-auto px-3 pb-4 sm:px-4 sm:pb-8">
            <div className="bg-card-theme rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm border border-theme">
                <SectionHeader
                    title="About Noble Stack — Best AI & IT Company in Kathmandu, Nepal"
                    description="We are an AI-first IT company based in Kathmandu, Nepal, recognized as one of the best AI companies in Nepal — building websites, custom software, mobile apps, and AI-powered systems with global engineering standards. Our credibility comes from shipping real products, not just promises."
                    imageSrc="/undraw_team-spirit_18vw.svg"
                    imageAlt="About Noble Stack"
                />

                <div className="mt-8 text-center">
                    <CTAButton variant="secondary" href="/about" icon={ArrowRight}>
                        Read More About Us
                    </CTAButton>
                </div>
            </div>
        </section>
    );
}
