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
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300 group cursor-pointer min-h-[180px]">
            <div className="flex items-center mb-4">
                <div
                    className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center"
                >
                    <Icon className="w-6 h-6 text-nobleblue-600" />
                </div>
            </div>
            <h3 className="text-gray-900 font-semibold mb-2">{name}</h3>
            <p className="text-base text-gray-600 mb-4">{description}</p>
        </div>
    );
}
