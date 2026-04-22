import React from "react";
import { ArrowRight } from "lucide-react";
import CTAButton from "../../components/CTAButton";
import SectionHeader from "../../components/SectionHeader";

export default function AboutUs() {
    return (
        <section id="about" aria-label="About Us" className="max-w-7xl mx-auto px-3 pb-4 sm:px-4 sm:pb-8">
            <div className="bg-card-theme rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm border border-theme">
                {/* SEO FIX: keyword-rich heading */}
                {/* SEO FIX: keyword alt text added */}
                {/* SEO FIX: keyword density reduced */}
                <SectionHeader
                    title="About Noble Stack — AI-First Software Company in Kathmandu"
                    description="Noble Stack is an AI-first IT company based in Kathmandu, Nepal, delivering intelligent software solutions with global standards. Recognized as an industry leader, we combine deep technical expertise with a relentless focus on shipping real products — not just promises. From full-stack web applications to LLM-powered AI systems, we are the technology partner your business deserves."
                    imageSrc="/undraw_team-spirit_18vw.svg"
                    imageAlt="Noble Stack AI-first IT company team Kathmandu Nepal"
                />

                <div className="mt-8 text-center">
                    {/* SEO FIX: CTA optimized */}
                    <CTAButton variant="secondary" href="/about" icon={ArrowRight}>
                        Learn About Our Kathmandu Team
                    </CTAButton>
                </div>
            </div>
        </section>
    );
}
