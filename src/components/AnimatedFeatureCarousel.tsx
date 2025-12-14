"use client";

import React, { useState, useEffect } from "react";

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  stats: string[];
}

interface AnimatedFeatureCarouselProps {
  features: Feature[];
  title: string;
  autoScrollInterval?: number;
  className?: string;
}

export default function AnimatedFeatureCarousel({
  features,
  title,
  autoScrollInterval = 4000,
  className = "",
}: AnimatedFeatureCarouselProps) {
  const [activeFeature, setActiveFeature] = useState(0);

  // Auto-cycle through features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, autoScrollInterval);

    return () => clearInterval(interval);
  }, [features.length, autoScrollInterval]);

  return (
    <div className={`mb-16 ${className}`}>
      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-main-theme mb-8">
        {title}
      </h3>

      {/* Animated Feature Display */}
      <div className="relative overflow-hidden">
        <div className="bg-gray-900 rounded-2xl p-4 sm:p-6 md:p-8 border border-theme shadow-sm h-[260px] sm:h-[240px] flex flex-col justify-center">
          <div
            key={activeFeature}
            className="flex items-start gap-4 sm:gap-6 transition-opacity duration-500"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-800 rounded-2xl flex items-center justify-center flex-shrink-0">
              {React.createElement(features[activeFeature].icon, {
                className: "w-6 h-6 sm:w-8 sm:h-8 text-nobleblue-600",
              })}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-lg sm:text-xl font-bold text-main-theme mb-2 sm:mb-3 line-clamp-2">
                {features[activeFeature].title}
              </h4>
              <p className="text-md-sm sm:text-base text-muted-theme mb-4 sm:mb-6 line-clamp-3">
                {features[activeFeature].description}
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {features[activeFeature].stats.map((stat, statIndex) => (
                  <span
                    key={statIndex}
                    className="text-md-sm sm:text-md-sm px-3 sm:px-4 py-1 sm:py-2 bg-gray-800 text-muted-theme rounded-full font-medium"
                  >
                    {stat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-6 gap-3">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveFeature(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeFeature
                ? "bg-nobleblue-600"
                : "bg-subtle-theme hover:bg-theme-border"
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 