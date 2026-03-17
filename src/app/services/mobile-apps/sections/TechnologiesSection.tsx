import { SiReact, SiFlutter, SiSwift, SiKotlin, SiExpo, SiTypescript, SiJavascript, SiAndroid, SiApple, SiFirebase } from 'react-icons/si';
import SectionHeader from '../../../../components/SectionHeader';
import TechStackCarousel from '../../../../components/TechStackCarousel';

export default function TechnologiesSection() {
    const technologies = [
        { name: "React Native", icon: SiReact, color: "#61DAFB" },
        { name: "Flutter", icon: SiFlutter, color: "#02569B" },
        { name: "Swift", icon: SiSwift, color: "#FA7343" },
        { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
        { name: "Expo", icon: SiExpo, color: "#000020" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "Android", icon: SiAndroid, color: "#3DDC84" },
        { name: "iOS", icon: SiApple, color: "#000000" },
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ];

    return (
        <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="Technologies We Use"
                    description="We use proven, production-ready technologies trusted by modern mobile teams. Our technology decisions prioritize performance, scalability, and maintainability."
                    imageSrc="/undraw_mobile-site_qjby.svg"
                    imageAlt="Technologies Illustration"
                />

                <TechStackCarousel technologies={technologies} />
            </div>
        </section>
    );
}
