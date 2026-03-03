import {
    SiReact,
    SiFlutter,
    SiSwift,
    SiKotlin,
    SiExpo,
    SiTypescript,
    SiJavascript,
    SiFirebase,
    SiAmazon,
    SiGooglecloud,
} from 'react-icons/si';
import SectionHeader from '../../../../components/SectionHeader';
import TechStackCarousel from '../../../../components/TechStackCarousel';

export default function TechnologiesSection() {
    const technologies = [
        { name: "React Native", icon: SiReact, color: "#61DAFB" },
        { name: "Flutter", icon: SiFlutter, color: "#02569B" },
        { name: "Swift", icon: SiSwift, color: "#FA7343" },
        { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
        { name: "Expo", icon: SiExpo, color: "#000000" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
        { name: "AWS", icon: SiAmazon, color: "#FF9900" },
        { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
    ];

    return (
        <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="Technologies We Use for Mobile"
                    description="Our mobile engineering stack includes modern native and cross-platform technologies that prioritize scalability, security, and long-term maintainability."
                    imageSrc="/undraw_dev-environment_n5by.svg"
                    imageAlt="Mobile Technologies Illustration"
                />

                <TechStackCarousel technologies={technologies} />
            </div>
        </section>
    );
}
