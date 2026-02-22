"use client";

import * as React from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    // Avoid hydration mismatch
    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <button className="p-2 rounded-full bg-subtle-theme border border-border-theme w-9 h-9 flex items-center justify-center" aria-label="Toggle theme">
                <div className="w-4 h-4 bg-muted-theme/20 rounded-full animate-pulse" />
            </button>
        );
    }

    const cycleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
        } else if (theme === "dark") {
            setTheme("system");
        } else {
            setTheme("light");
        }
    };

    // Determine which icon to show
    const getIcon = () => {
        if (theme === "system") {
            return <Monitor className="h-[1.2rem] w-[1.2rem] transition-all" />;
        } else if (theme === "light" || resolvedTheme === "light") {
            return <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />;
        } else {
            return <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />;
        }
    };

    const getAriaLabel = () => {
        if (theme === "system") {
            return "Theme: System (click for Light)";
        } else if (theme === "light") {
            return "Theme: Light (click for Dark)";
        } else {
            return "Theme: Dark (click for System)";
        }
    };

    return (
        <button
            onClick={cycleTheme}
            className="p-2 rounded-full bg-subtle-theme border border-border-theme hover:bg-subtle-theme/80 transition-colors flex items-center justify-center text-muted-theme hover:text-main-theme"
            aria-label={getAriaLabel()}
            title={getAriaLabel()}
        >
            {getIcon()}
        </button>
    );
}
