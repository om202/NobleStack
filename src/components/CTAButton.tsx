"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface CTAButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    icon?: LucideIcon;
    href?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    className?: string;
}

export default function CTAButton({
    children,
    variant = "primary",
    icon: Icon,
    href,
    onClick,
    type = "button",
    className = "",
}: CTAButtonProps) {
    const baseClasses =
        "group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 font-semibold whitespace-nowrap";

    const variantClasses = {
        primary: "gradient-nobleblue-up text-white",
        secondary:
            "bg-white text-gray-800 border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 shadow-sm hover:shadow-md",
    };

    const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

    const content = (
        <>
            {children}
            {Icon && (
                <Icon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            )}
        </>
    );

    if (href) {
        return (
            <Link href={href} className={combinedClasses}>
                {content}
            </Link>
        );
    }

    return (
        <button type={type} onClick={onClick} className={combinedClasses}>
            {content}
        </button>
    );
}
