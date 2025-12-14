"use client";

import CTAButton from "./CTAButton";
import { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
    title: string;
    highlightedText?: string;
    description: string;
    ctaText?: string;
    ctaIcon?: LucideIcon;
    ctaHref?: string;
    ctaOnClick?: () => void;
    className?: string;
}

export default function SectionHeader({
    title,
    highlightedText,
    description,
    ctaText,
    ctaIcon,
    ctaHref,
    ctaOnClick,
    className = "",
}: SectionHeaderProps) {
    return (
        <div className={`text-center mb-8 ${className}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-main-theme">
                {title}
                {highlightedText && (
                    <span className="text-gradient-nobleblue"> {highlightedText}</span>
                )}
            </h2>
            <p className="text-base sm:text-lg text-muted-theme max-w-3xl mx-auto mb-8">
                {description}
            </p>

            {ctaText && (
                <CTAButton
                    variant="secondary"
                    icon={ctaIcon}
                    href={ctaHref}
                    onClick={ctaOnClick}
                    className="inline-flex"
                >
                    {ctaText}
                </CTAButton>
            )}
        </div>
    );
}
