"use client";

import React, { useState, useEffect } from "react";

interface TechItem {
  name: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
}

interface TechStackCarouselProps {
  technologies: TechItem[];
  title: string;
  autoScrollInterval?: number;
}

export default function TechStackCarousel({
  technologies,
  title,
  autoScrollInterval = 2000,
}: TechStackCarouselProps) {
  const [currentTechIndex, setCurrentTechIndex] = useState(0);

  // Auto-scroll through tech stack
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTechIndex((prev) => (prev + 1) % technologies.length);
    }, autoScrollInterval);

    return () => clearInterval(interval);
  }, [technologies.length, autoScrollInterval]);

  return (
    <div className="mb-10 sm:mb-16">
      <h3 className="text-lg sm:text-xl font-bold text-center text-gray-900 mb-6 sm:mb-8">
        {title}
      </h3>
              <div className="relative bg-white rounded-2xl p-4 sm:p-6 border border-gray-200 min-h-[120px] sm:min-h-[140px] flex flex-col justify-center overflow-hidden">
        {/* Currently Featured Technology */}
                  <div className="text-center mb-4 sm:mb-6">
          <div
            key={currentTechIndex}
            className="animate-fade-in flex flex-col items-center"
          >
            <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-3 border border-gray-200">
              {React.createElement(technologies[currentTechIndex].icon, { 
                style: { color: technologies[currentTechIndex].color },
                className: "w-10 h-10 transition-transform duration-300 hover:scale-110"
              })}
            </div>
            <h4 className="text-base sm:text-lg font-bold text-gray-900">
              {technologies[currentTechIndex].name}
            </h4>
          </div>
        </div>

        {/* Tech Stack Preview Grid */}
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
          {(() => {
            // Create a sliding window of 8 technologies around the current one
            const windowSize = Math.min(8, technologies.length);
            const startIndex = Math.max(
              0,
              currentTechIndex - Math.floor(windowSize / 2)
            );
            const endIndex = Math.min(
              technologies.length,
              startIndex + windowSize
            );
            const adjustedStartIndex = Math.max(0, endIndex - windowSize);

            return technologies
              .slice(adjustedStartIndex, endIndex)
              .map((tech, index) => {
                const actualIndex = adjustedStartIndex + index;
                return (
                  <div
                    key={actualIndex}
                    className={`text-center group cursor-pointer transition-all duration-300 ${
                      actualIndex === currentTechIndex
                        ? "scale-110 opacity-100"
                        : "opacity-60 hover:opacity-80"
                    }`}
                    onClick={() => setCurrentTechIndex(actualIndex)}
                  >
                    <div className="bg-gray-50 rounded-xl p-2 border border-gray-200 group-hover:bg-gray-100 transition-colors duration-300">
                      <div className="flex justify-center mb-1">
                        <tech.icon 
                          style={{ color: tech.color }}
                          className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <h5 className="text-gray-900 font-medium text-xs sm:text-base truncate">
                        {tech.name}
                      </h5>
                    </div>
                  </div>
                );
              });
          })()}
        </div>

        {/* Full Width Progress Bar at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 rounded-b-2xl overflow-hidden">
          <div
            className="bg-gradient-to-r from-purple-500 to-pink-500 h-full transition-all duration-300 ease-out"
            style={{
              width: `${((currentTechIndex + 1) / technologies.length) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
