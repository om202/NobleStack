import {
    Smartphone,
    Tablet,
    Apple,
    ArrowRight,
    Zap,
} from "lucide-react";
import {
    SiReact,
    SiSwift,
    SiKotlin,
    SiFlutter,
    SiFirebase,
    SiApple,
    SiAndroid,
    SiXcode,
    SiReactos,
    SiExpo,
    SiTestinglibrary,
} from "react-icons/si";
import React from "react";
import TechStackCarousel from "../../components/TechStackCarousel";

import ServiceCard from "../../components/ServiceCard";
import SectionHeader from "../../components/SectionHeader";
import CTAButton from "../../components/CTAButton";

export default function MobileDevSection() {

    const mobileServices = [
        {
            name: "iOS App Development",
            icon: Apple,
            status: "Native Expert",
            description: "Swift, SwiftUI, UIKit",
        },
        {
            name: "Android App Development",
            icon: Smartphone,
            status: "Native Expert",
            description: "Kotlin, Jetpack Compose",
        },
        {
            name: "Cross-Platform Apps",
            icon: Tablet,
            status: "Specialized",
            description: "React Native, Flutter",
        },
        {
            name: "Progressive Web Apps",
            icon: Zap,
            status: "Advanced",
            description: "PWA, Offline-First",
        },
    ];

    const mobileTechStack = [
        { name: "React Native", icon: SiReact, color: "#61DAFB" },
        { name: "Swift", icon: SiSwift, color: "#FA7343" },
        { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
        { name: "Flutter", icon: SiFlutter, color: "#02569B" },
        { name: "iOS", icon: SiApple, color: "#000000" },
        { name: "Android", icon: SiAndroid, color: "#3DDC84" },
        { name: "Expo", icon: SiExpo, color: "#000020" },
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
        { name: "Xcode", icon: SiXcode, color: "#147EFB" },
        { name: "React Native Testing", icon: SiTestinglibrary, color: "#E33332" },
    ];

    return (
        <section id="mobile-dev" className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <SectionHeader
                    title="Native & Cross-Platform Mobile App Development"
                    description="Building high-performance mobile applications for iOS and Android. From native Swift and Kotlin apps to cross-platform React Native solutions, we create mobile experiences that users love and businesses rely on."
                    className="animate-fade-in"
                />

                {/* Mobile Tech Stack */}
                <TechStackCarousel
                    technologies={mobileTechStack}
                />

                {/* Mobile Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    {mobileServices.map((service, index) => (
                        <ServiceCard
                            key={index}
                            name={service.name}
                            description={service.description}
                            icon={service.icon}
                        />
                    ))}
                </div>

                {/* CTA Button */}
                <div className="mt-12 text-center">
                    <CTAButton variant="secondary" href="https://calendar.app.google/mWmd6v421Pk66LQ26" icon={ArrowRight}>
                        Schedule a Free Consultation
                    </CTAButton>
                </div>
            </div>
        </section>
    );
}
