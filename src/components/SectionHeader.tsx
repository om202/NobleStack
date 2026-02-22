import CTAButton from "./CTAButton";
import { LucideIcon } from "lucide-react";
import Image from "next/image";

interface SectionHeaderProps {
    title: string;
    highlightedText?: string;
    description: string;
    ctaText?: string;
    ctaIcon?: LucideIcon;
    ctaHref?: string;
    ctaOnClick?: () => void;
    className?: string;
    imageSrc?: string;
    imageAlt?: string;
    imageSize?: 'default' | 'small';
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
    imageSrc,
    imageAlt,
    imageSize = 'default',
}: SectionHeaderProps) {
    // Determine sizing based on imageSize prop
    const sizeClasses = imageSize === 'small'
        ? 'max-w-[100px] md:max-w-[140px]'
        : 'max-w-[120px] md:max-w-[180px]';

    const imageWidth = imageSize === 'small' ? 140 : 180;
    const imageHeight = imageSize === 'small' ? 140 : 180;

    return (
        <header className={`text-center mb-8 ${className}`}>
            {/* Image and Text Container */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-6">
                {/* Illustration */}
                {imageSrc && (
                    <div className={`w-full md:w-1/4 flex justify-center ${sizeClasses}`}>
                        <Image
                            src={imageSrc}
                            alt={imageAlt || title}
                            width={imageWidth}
                            height={imageHeight}
                            className="w-full h-auto"
                            style={{ width: '100%', height: 'auto' }}
                            priority
                        />
                    </div>
                )}

                {/* Text Content */}
                <div className={imageSrc ? "md:w-2/3 text-center md:text-left" : "w-full"}>
                    <h2 className="text-2xl md:text-3xl mb-4 text-main-theme font-serif">
                        {title}
                        {highlightedText && (
                            <span className="text-main-theme"> {highlightedText}</span>
                        )}
                    </h2>
                    <p className="text-base sm:text-lg text-subtitle-theme max-w-3xl mx-auto md:mx-0 mb-0">
                        {description}
                    </p>
                </div>
            </div>

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
