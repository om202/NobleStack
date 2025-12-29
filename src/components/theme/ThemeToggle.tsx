"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    // Avoid hydration mismatch
    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <button className="p-2 rounded-full bg-subtle-theme border border-border-theme w-9 h-9 flex items-center justify-center">
                <div className="w-4 h-4 bg-muted-theme/20 rounded-full animate-pulse" />
            </button>
        );
    }

    return (
        <button
            onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
            className="p-2 rounded-full bg-subtle-theme border border-border-theme hover:bg-subtle-theme/80 transition-colors flex items-center justify-center text-muted-theme hover:text-main-theme"
            aria-label="Toggle theme"
        >
            {resolvedTheme === "light" ? (
                <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
            ) : (
                <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
            )}
        </button>
    );
}
