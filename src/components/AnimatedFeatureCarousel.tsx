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
      <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
        {title}
      </h3>

      {/* Animated Feature Display */}
      <div className="relative overflow-hidden">
        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm min-h-[200px] flex flex-col justify-center">
          <div
            key={activeFeature}
            className="flex items-start gap-6 animate-fade-in"
          >
            <div
              className={`w-16 h-16 bg-gradient-to-r ${features[activeFeature].color} rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0`}
            >
              {React.createElement(features[activeFeature].icon, {
                className: "w-8 h-8 text-white",
              })}
            </div>
            <div className="flex-1">
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                {features[activeFeature].title}
              </h4>
              <p className="text-base text-gray-600 mb-6">
                {features[activeFeature].description}
              </p>
              <div className="flex flex-wrap gap-3">
                {features[activeFeature].stats.map((stat, statIndex) => (
                  <span
                    key={statIndex}
                    className="text-sm px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-medium"
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
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeFeature
                  ? `bg-gradient-to-r ${features[activeFeature].color}`
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 