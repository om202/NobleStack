"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, X } from "lucide-react";

export default function NobleAppointmentsAnnouncement() {
    const [showBanner, setShowBanner] = useState(true);

    if (!showBanner) return null;

    return (
        <section className="px-4">
            <div className="max-w-4xl mx-auto">
                {/* Noble Appointments Announcement Banner */}
                <div className="relative bg-card-theme rounded-xl p-4 pr-8 border border-orange-500/30 shadow-sm hover:shadow-md transition-shadow duration-300">
                    {/* Close Button */}
                    <button
                        onClick={() => setShowBanner(false)}
                        className="absolute top-3 right-3 p-1.5 text-muted-theme hover:text-main-theme transition-colors z-10 rounded-full hover:bg-subtle-theme"
                        aria-label="Close announcement"
                    >
                        <X className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex flex-col md:flex-row items-center gap-4 pr-4">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <div className="relative w-12 h-12 md:w-16 md:h-16">
                                <Image
                                    src="/noble-appointments-logo.png"
                                    alt="Noble Appointments Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-2">
                            <div className="flex flex-col gap-1">
                                <h3 className="text-base md:text-lg font-bold text-main-theme">
                                    Introducing{" "}
                                    <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                                        Noble Appointments
                                    </span>
                                </h3>
                                <p className="text-sm text-muted-theme font-medium">
                                    Fully Nepali Bikram Sambat based calendar — specially built for Nepali businesses!
                                </p>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="flex-shrink-0 w-full md:w-auto">
                            <Link
                                href="https://appointments.noblestack.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center gap-2 px-6 py-2 w-full md:w-auto bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white rounded-lg hover:from-orange-600 hover:via-pink-600 hover:to-purple-600 transition-[transform,background-color,box-shadow] duration-300 transform hover:-translate-y-0.5 font-semibold text-sm shadow-md hover:shadow-lg"
                            >
                                Coming Soon
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
