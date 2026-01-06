import React from "react";
import { LucideIcon, Copy, Check } from "lucide-react";
import Image from "next/image";

interface ServiceCardProps {
    name: string;
    description: string;
    icon?: LucideIcon | React.ComponentType<{ className?: string }>;
    imageSrc?: string;
    imageAlt?: string;
    copyable?: boolean;
    backgroundImage?: string;
    gradientOverlay?: string;
}

export default function ServiceCard({
    name,
    description,
    icon: Icon,
    imageSrc,
    imageAlt,
    copyable = false,
    backgroundImage,
    gradientOverlay,
}: ServiceCardProps) {
    return (
        <article className={`relative bg-card-theme rounded-2xl p-6 border border-theme hover:bg-subtle-theme transition-[transform,background-color,border-color] duration-300 group cursor-pointer min-h-[180px] flex flex-col overflow-hidden`}>
            {/* Background Image */}
            {backgroundImage && (
                <>
                    <div className="absolute inset-0 z-0">
                        <Image
                            src={backgroundImage}
                            alt={imageAlt || name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 z-0 ${gradientOverlay || 'bg-gradient-to-br from-black/80 via-black/70 to-black/80'}`} />
                </>
            )}

            <div className="relative z-10 flex items-center mb-4">
                {imageSrc ? (
                    <Image
                        src={imageSrc}
                        alt={imageAlt || name}
                        width={55}
                        height={55}
                        className="rounded-xl shadow-sm group-hover:scale-105 transition-transform duration-300"
                        style={{ height: 'auto' }}
                        sizes="55px"
                    />
                ) : Icon ? (
                    <div
                        className={`w-16 h-16 ${backgroundImage ? 'bg-white/10 backdrop-blur-sm' : 'bg-subtle-theme'} rounded-xl flex items-center justify-center border ${backgroundImage ? 'border-white/20' : 'border-theme'} transition-colors duration-300`}
                    >
                        <Icon className={`w-8 h-8 ${backgroundImage ? 'text-white' : 'text-blue-500 dark:text-blue-400'}`} />
                    </div>
                ) : null}
            </div>
            <h3 className={`font-semibold mb-2 relative z-10 ${backgroundImage ? 'text-white' : 'text-main-theme'}`}>{name}</h3>
            <div className="flex items-start gap-2 relative z-10">
                <p className={`text-base mb-4 break-words flex-grow ${backgroundImage ? 'text-white/90' : 'text-muted-theme'}`}>{description}</p>
                {copyable && (
                    <button
                        type="button"
                        data-copy={description}
                        className="p-1.5 rounded-md bg-subtle-theme border border-theme hover:bg-page-theme hover:text-blue-500 transition-colors duration-200 flex-shrink-0 mt-0.5 copy-button"
                        title="Copy to clipboard"
                    >
                        <Copy className="w-3.5 h-3.5 copy-icon-default" />
                        <Check className="w-3.5 h-3.5 text-green-500 copy-icon-success" style={{ display: 'none' }} />
                    </button>
                )}
            </div>
        </article>
    );

}
