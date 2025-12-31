import React from "react";
import { LucideIcon, Copy, Check } from "lucide-react";
import Image from "next/image";

interface ServiceCardProps {
    name: string;
    description: string;
    icon?: LucideIcon;
    imageSrc?: string;
    imageAlt?: string;
    copyable?: boolean;
}

export default function ServiceCard({
    name,
    description,
    icon: Icon,
    imageSrc,
    imageAlt,
    copyable = false,
}: ServiceCardProps) {
    return (
        <article className={`bg-card-theme rounded-2xl p-6 border border-theme hover:bg-subtle-theme transition-[transform,background-color,border-color] duration-300 group cursor-pointer min-h-[180px] flex flex-col`}>
            <div className="flex items-center mb-4">
                {imageSrc ? (
                    <Image
                        src={imageSrc}
                        alt={imageAlt || name}
                        width={55}
                        height={55}
                        className="rounded-xl shadow-sm group-hover:scale-105 transition-transform duration-300"
                        sizes="55px"
                    />
                ) : Icon ? (
                    <div
                        className="w-16 h-16 bg-subtle-theme rounded-xl flex items-center justify-center border border-theme transition-colors duration-300"
                    >
                        <Icon className="w-8 h-8 text-blue-500 dark:text-blue-400" />
                    </div>
                ) : null}
            </div>
            <h3 className="text-main-theme font-semibold mb-2">{name}</h3>
            <div className="flex items-start gap-2">
                <p className="text-muted-theme text-base mb-4 break-words flex-grow">{description}</p>
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
