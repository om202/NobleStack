"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  Laptop,
  Building,
  Briefcase,
  Mail,
  House,
  Package,
  LucideIcon,
  BookOpen,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { ThemeToggle } from "../theme/ThemeToggle";

// Navigation items configuration
interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
}

const navigationItems: NavItem[] = [
  {
    href: "/",
    label: "Home",
    icon: House,
  },
  {
    href: "/Products",
    label: "Products",
    icon: Package,
  },
  {
    href: "/About",
    label: "About",
    icon: Building,
  },
  {
    href: "/Services",
    label: "Services",
    icon: Laptop,
  },
  {
    href: "/Career",
    label: "Career",
    icon: Briefcase,
  },
  {
    href: "/blogs",
    label: "Blogs",
    icon: BookOpen,
  },
  {
    href: "/Contact",
    label: "Contact",
    icon: Mail,
  },
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-center w-full">
          <div className="w-full sm:w-auto flex items-center justify-between sm:justify-center gap-2 sm:gap-4 py-2 px-3 sm:px-4 bg-nav-bg backdrop-blur-md border border-nav-border rounded-full shadow-2xl pointer-events-auto transition-all duration-300">
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0 group">
              <Image
                src="/nbl.png"
                alt="Noble Stack Logo"
                width={32}
                height={32}
                className="rounded-lg"
                priority
              />
              <span className="text-base sm:text-xl font-bold text-main-theme tracking-tight text-nowrap">Noble Stack</span>
            </Link>

            {/* Separator */}
            <div className="hidden md:block w-px h-6 bg-nav-border" />

            {/* Desktop Navigation Items */}
            <div className="hidden min-[900px]:flex items-center space-x-1">
              {navigationItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${isActive
                      ? "text-main-theme bg-main-theme/10"
                      : "text-muted-theme hover:text-main-theme hover:bg-main-theme/5"
                      }`}
                  >
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Separator */}
            <div className="hidden min-[900px]:block w-px h-6 bg-nav-border" />

            {/* Right Side Actions */}
            <div className="flex items-center gap-2">
              <ThemeToggle />

              {/* Call Now Button */}
              <a
                href="tel:+9779851411602"
                className="flex items-center gap-2 px-3 sm:px-4 py-1.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-200 font-semibold text-sm shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 fill-current" />
                <span className="whitespace-nowrap text-xs sm:text-sm">Talk to Us</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="min-[900px]:hidden inline-flex items-center justify-center p-2 rounded-full text-muted-theme hover:text-main-theme hover:bg-main-theme/5 transition-colors duration-200"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" aria-hidden="true" />
                ) : (
                  <Menu className="w-5 h-5" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          <div
            className="min-[900px]:hidden fixed inset-0 bg-black/40 dark:bg-black/60 z-40 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="min-[900px]:hidden fixed top-20 left-4 right-4 z-50 bg-nav-bg border border-nav-border rounded-3xl shadow-2xl max-h-[calc(100vh-6rem)] overflow-y-auto transform transition-all duration-300 ease-out origin-top">
            <div className="p-4 space-y-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-4 px-5 py-4 rounded-2xl text-base font-medium transition-all duration-150 ${isActive
                      ? "bg-main-theme/10 text-main-theme"
                      : "text-muted-theme hover:text-main-theme hover:bg-main-theme/5"
                      }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon className="w-5 h-5 opacity-70" aria-hidden="true" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
}
