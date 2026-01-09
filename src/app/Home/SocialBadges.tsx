import Image from "next/image";
import { Linkedin, Facebook, Instagram } from "lucide-react";
import { FaXTwitter, FaYoutube, FaTiktok } from "react-icons/fa6";

const badges = [
    {
        name: "Goodfirms",
        logo: "/gf-dark-400x400.svg",
        url: "https://www.goodfirms.co/company/noble-stack",
    },
    {
        name: "Clutch",
        logo: "/clutch.png",
        url: "https://clutch.co/profile/noble-stack",
    },
    {
        name: "Bizdire Nepal",
        logo: "/bizdire.png",
        url: "https://www.bizdirenepal.com/noble-stack-pvt-ltd",
    },
    {
        name: "The Manifest",
        logo: "/The Manifest_idzYxBbVCG_0.png",
        url: "https://themanifest.com/company/noble-stack",
    },
];

const socialMedia = [
    {
        name: "LinkedIn",
        icon: Linkedin,
        url: "https://www.linkedin.com/company/noble-stack-pvt-ltd",
    },
    {
        name: "Facebook",
        icon: Facebook,
        url: "https://www.facebook.com/people/Noble-Stack-Pvt-Ltd/61577564326108/",
    },
    {
        name: "Instagram",
        icon: Instagram,
        url: "https://www.instagram.com/noble_stack_/",
    },
    {
        name: "X (Twitter)",
        icon: FaXTwitter,
        url: "https://x.com/NobleStackNepal",
    },
    {
        name: "YouTube",
        icon: FaYoutube,
        url: "https://www.youtube.com/@NobleStack",
    },
    {
        name: "TikTok",
        icon: FaTiktok,
        url: "https://www.tiktok.com/@noblestack",
    },
];

export default function SocialBadges() {
    return (
        <section className="max-w-6xl mx-auto px-3 pb-8 sm:px-4 sm:pb-12 transition-colors duration-300">
            <div className="bg-card-theme rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm border border-theme">
                <header className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-main-theme mb-6">
                        Find us on
                    </h2>
                    <p className="text-sm sm:text-base text-muted-theme max-w-3xl mx-auto">
                        Connect with Noble Stack across platforms to stay updated on our latest work, insights, and company news.
                    </p>
                </header>

                {/* Platform Badges */}
                <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mb-8">
                    {badges.map((badge) => (
                        <a
                            key={badge.name}
                            href={badge.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group transition-transform duration-300 hover:scale-105"
                        >
                            <div className="bg-subtle-theme border border-theme rounded-2xl p-4 md:p-6 w-[160px] h-[80px] md:w-[200px] md:h-[100px] flex items-center justify-center hover:bg-subtle-hover transition-[background-color,border-color]">
                                <div className={`relative w-full h-full ${badge.name === 'Goodfirms' ? 'scale-150' : ''}`}>
                                    <Image
                                        src={badge.logo}
                                        alt={badge.name}
                                        fill
                                        className="object-contain drop-shadow-[0_2px_3px_rgba(0,0,0,0.4)] dark:drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]"
                                    />
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Social Media Links */}
                <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 pt-6 border-t border-theme">
                    {socialMedia.map((social) => {
                        const Icon = social.icon;
                        return (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-2 px-4 py-2 bg-subtle-theme border border-theme rounded-xl hover:bg-subtle-hover hover:border-blue-500 transition-all duration-200"
                                aria-label={`Visit our ${social.name} page`}
                            >
                                <Icon className="w-5 h-5 text-muted-theme group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200" />
                                <span className="text-sm font-medium text-main-theme hidden sm:inline">
                                    {social.name}
                                </span>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
