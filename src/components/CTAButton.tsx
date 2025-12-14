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
    disabled?: boolean;
}

export default function CTAButton({
    children,
    variant = "primary",
    icon: Icon,
    href,
    onClick,
    type = "button",
    className = "",
    disabled = false,
}: CTAButtonProps) {
    const baseClasses =
        "group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 font-semibold whitespace-nowrap";

    const variantClasses = {
        primary: "gradient-nobleblue-up text-white",
        secondary:
            "bg-white text-gray-800 border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 shadow-sm hover:shadow-md",
    };

    const disabledClasses = "opacity-50 cursor-not-allowed pointer-events-none hover:transform-none";

    const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${disabled ? disabledClasses : ""} ${className}`;

    const content = (
        <>
            {children}
            {Icon && (
                <Icon className={`w-5 h-5 ${!disabled ? "group-hover:translate-x-1" : ""} transition-transform duration-300`} />
            )}
        </>
    );

    if (href && !disabled) {
        return (
            <Link href={href} className={combinedClasses}>
                {content}
            </Link>
        );
    }

    // If disabled and href is provided, render as button (disabled) or just return null?
    // Usually if href is there but disabled, we render a span or a button that does nothing.
    // Given the current logic, if href is present, it returns Link.
    // If I want to support disabled link, I should probably render a button or span with disabled styles.
    // But mostly this is used for form submission buttons.

    return (
        <button type={type} onClick={onClick} className={combinedClasses} disabled={disabled}>
            {content}
        </button>
    );
}
