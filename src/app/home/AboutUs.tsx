import React from "react";
import { ArrowRight } from "lucide-react";
import CTAButton from "../../components/CTAButton";
import SectionHeader from "../../components/SectionHeader";

export default function AboutUs() {
    return (
        <section
            id="about"
            aria-label="About Noble Stack"
            className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme transition-colors"
        >
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="Building Software That Solves Real Business Problems"
                    description="Noble Stack is an AI-focused software development company based in Kathmandu, Nepal. We work with startups, founders, local businesses, and global companies to build reliable digital products that improve operations, automate workflows, and support long-term business growth."
                    imageSrc="/undraw_team-spirit_18vw.svg"
                    imageAlt="Noble Stack team building software in Kathmandu, Nepal"
                />

                <div className="grid md:grid-cols-2 gap-6 mt-4 text-base text-subtitle-theme leading-relaxed">
                    <p>
                        Our team specializes in full-stack product development, AI software engineering, mobile app development, automation systems, and scalable cloud infrastructure. Instead of building generic software, we focus on creating products that are practical, maintainable, and aligned with real business needs.
                    </p>
                    <p>
                        From startup MVPs and SaaS platforms to AI-powered systems and enterprise tools, we help businesses move from idea to production with modern engineering practices and user-focused development.
                    </p>
                </div>

                <div className="mt-10 text-center">
                    <CTAButton variant="secondary" href="/about" icon={ArrowRight}>
                        Read More About Us
                    </CTAButton>
                </div>
            </div>
        </section>
    );
}
