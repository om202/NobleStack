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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card-theme/95 backdrop-blur-xl border-b border-theme backdrop-saturate-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <Image
                src="/nbl.png"
                alt="Noble Stack Logo"
                width={40}
                height={40}
                className="rounded-xl"
                priority
              />
              <h3 className="text-xl sm:text-2xl font-bold text-main-theme">Noble Stack</h3>
            </Link>

            {/* Desktop Navigation Items - Centered */}
            <div className="hidden min-[900px]:flex items-center justify-center flex-1 px-8">
              <div className="flex items-center space-x-1">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center gap-2 px-2 min-[1165px]:px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${isActive
                        ? "bg-nobleblue-500/20 text-nobleblue-300"
                        : "text-muted-theme hover:text-nobleblue-300 hover:bg-subtle-theme"
                        }`}
                    >
                      <Icon className="w-4 h-4 hidden min-[1165px]:block" aria-hidden="true" />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              {/* Call Now Button */}
              <div className="flex items-center">
                <a
                  href="tel:+9779851411602"
                  className="flex items-center gap-2 px-4 py-2 bg-subtle-theme text-nobleblue-300 rounded-lg hover:bg-subtle-hover transition-colors duration-200 font-semibold text-sm border border-theme"
                >
                  <Phone className="w-4 h-4" />
                  <span className="whitespace-nowrap">Call Now</span>
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="min-[900px]:hidden inline-flex items-center justify-center p-2 rounded-md text-muted-theme hover:text-nobleblue-300 hover:bg-subtle-theme transition-colors duration-200"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" aria-hidden="true" />
                ) : (
                  <Menu className="w-6 h-6" aria-hidden="true" />
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
            className="min-[900px]:hidden fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="min-[900px]:hidden fixed top-16 left-0 right-0 z-50 bg-card-theme/98 backdrop-blur-xl border-b border-theme backdrop-saturate-150 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="px-4 py-4 space-y-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-150 ${isActive
                      ? "bg-nobleblue-500/20 text-nobleblue-300"
                      : "text-muted-theme hover:text-nobleblue-300 hover:bg-subtle-theme"
                      }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon className="w-5 h-5" aria-hidden="true" />
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


