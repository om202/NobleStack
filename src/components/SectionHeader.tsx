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
        <header className={`text-center mb-8 ${className}`}>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-main-theme">
                {title}
                {highlightedText && (
                    <span className="text-main-theme"> {highlightedText}</span>
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
        </header>
    );
}
