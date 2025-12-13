"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, X } from "lucide-react";

export default function ProductAnnouncement() {
  const [showProductBanner, setShowProductBanner] = useState(true);

  if (!showProductBanner) return null;

  return (
    <section className="py-6 sm:py-8 md:py-10 lg:py-12 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Product Announcement - Ad Banner */}
        <div className="relative bg-gradient-to-r from-nobleblue-50 to-nobleblue-100 rounded-2xl p-6 pr-10 border border-nobleblue-200 shadow-sm hover:shadow-md transition-shadow duration-300">
          {/* Close Button */}
          <button
            onClick={() => setShowProductBanner(false)}
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors z-10 rounded-full hover:bg-white/50"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex flex-col items-center text-center gap-6 pr-6">
            {/* Content - Centered */}
            <div className="flex flex-col items-center gap-4">
              <span className="inline-flex items-center px-3 py-2 rounded-xl bg-nobleblue-100 text-nobleblue-700 text-sm font-semibold border border-nobleblue-200">
                <Sparkles className="w-4 h-4 mr-2" />
                New Product Launch
              </span>

              <div className="flex flex-col items-center gap-2">
                <h3 className="text-lg font-bold text-gray-900">
                  Introducing{" "}
                  <span className="text-nobleblue-600">Vyakaranly</span>
                </h3>
                <p className="text-base text-gray-700 font-medium">
                  First Nepali language AI grammar checker — no more manual edits!
                </p>
              </div>
            </div>

            {/* Buttons - Centered */}
            <div className="flex justify-center">
              <Link
                href="/Products"
                className="group flex items-center justify-center gap-3 px-12 py-3 w-full max-w-xs gradient-nobleblue-up text-white rounded-xl hover:from-nobleblue-700 hover:to-nobleblue-800 transition-all duration-300 transform hover:-translate-y-0.5 font-semibold text-base shadow-md hover:shadow-lg"
              >
                Try Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 