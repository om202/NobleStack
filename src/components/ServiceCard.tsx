"use client";

import React from "react";
import { LucideIcon } from "lucide-react";
import Image from "next/image";

interface ServiceCardProps {
    name: string;
    description: string;
    icon?: LucideIcon;
    imageSrc?: string;
    imageAlt?: string;
}

export default function ServiceCard({
    name,
    description,
    icon: Icon,
    imageSrc,
    imageAlt,
}: ServiceCardProps) {
    return (
        <article className="bg-gray-800 rounded-2xl p-6 border border-theme hover:bg-subtle-theme transition-all duration-300 group cursor-pointer min-h-[180px]">
            <div className="flex items-center mb-4">
                {imageSrc ? (
                    <Image
                        src={imageSrc}
                        alt={imageAlt || name}
                        width={55}
                        height={55}
                        className="rounded-xl shadow-sm group-hover:scale-105 transition-transform duration-300"
                    />
                ) : Icon ? (
                    <div
                        className="w-16 h-16 bg-subtle-theme rounded-xl flex items-center justify-center border border-theme"
                    >
                        <Icon className="w-8 h-8 text-nobleblue-300 sm:text-nobleblue-300" />
                    </div>
                ) : null}
            </div>
            <h3 className="text-main-theme font-semibold mb-2">{name}</h3>
            <p className="text-muted-theme text-base mb-4">{description}</p>
        </article>
    );

}
