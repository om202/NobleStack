"use client";

import React from "react";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
    name: string;
    description: string;
    icon: LucideIcon;
}

export default function ServiceCard({
    name,
    description,
    icon: Icon,
}: ServiceCardProps) {
    return (
        <div className="bg-card-theme rounded-2xl p-6 border border-theme hover:bg-subtle-theme transition-all duration-300 group cursor-pointer min-h-[180px]">
            <div className="flex items-center mb-4">
                <div
                    className="w-12 h-12 bg-subtle-theme rounded-xl flex items-center justify-center border border-theme"
                >
                    <Icon className="w-6 h-6 text-nobleblue-400 sm:text-nobleblue-600" />
                </div>
            </div>
            <h3 className="text-main-theme font-semibold mb-2">{name}</h3>
            <p className="text-muted-theme text-base mb-4">{description}</p>
        </div>
    );
}
