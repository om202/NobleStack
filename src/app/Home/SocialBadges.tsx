"use client";

import Image from "next/image";

const badges = [
    {
        name: "Goodfirms",
        logo: "/gf-dark-400x400.svg",
        url: "https://www.goodfirms.co/company/noble-stack",
    },
    {
        name: "Clutch",
        logo: "/Clutch_idZNs2r9FI_0.png",
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

export default function SocialBadges() {
    return (
        <section className="py-12 bg-noble-dark border-t border-theme">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col items-center gap-8">
                    <h3 className="text-xl font-semibold text-muted-theme uppercase tracking-widest text-center">
                        Find us on
                    </h3>
                    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
                        {badges.map((badge) => (
                            <a
                                key={badge.name}
                                href={badge.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group transition-all duration-300 hover:scale-105"
                            >
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 md:p-6 w-[160px] h-[80px] md:w-[200px] md:h-[100px] flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all">
                                    <div className={`relative w-full h-full ${badge.name === 'Goodfirms' ? 'scale-150' : ''}`}>
                                        <Image
                                            src={badge.logo}
                                            alt={badge.name}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
