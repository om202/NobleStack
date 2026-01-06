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
    external?: boolean;
}

export default function CTAButton({
    children,
    variant = "primary",
    icon: Icon,
    iconPosition = "right",
    href,
    onClick,
    type = "button",
    className = "",
    disabled = false,
    external = false,
}: CTAButtonProps & { iconPosition?: "left" | "right" }) {
    const baseClasses =
        "group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl transition-[background-color,border-color,box-shadow,color] duration-300 font-semibold whitespace-nowrap cursor-pointer";

    const variantClasses = {
        primary: "gradient-blue-up text-white",
        secondary:
            "bg-card-theme text-main-theme border border-theme shadow-sm hover:bg-subtle-theme transition-colors",
    };

    const disabledClasses = "opacity-50 cursor-not-allowed pointer-events-none hover:transform-none";

    const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${disabled ? disabledClasses : ""} ${className}`;

    const content = (
        <>
            {Icon && iconPosition === "left" && (
                <Icon aria-hidden="true" className={`w-5 h-5 ${!disabled ? "group-hover:-translate-x-1" : ""} transition-transform duration-300`} />
            )}
            {children}
            {Icon && iconPosition === "right" && (
                <Icon aria-hidden="true" className={`w-5 h-5 ${!disabled ? "group-hover:translate-x-1" : ""} transition-transform duration-300`} />
            )}
        </>
    );

    if (href && !disabled) {
        const isExternal = external || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');

        return (
            <Link
                href={href}
                className={combinedClasses}
                {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
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
