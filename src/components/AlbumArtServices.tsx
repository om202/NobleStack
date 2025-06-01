"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";

interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
  color: string;
}

interface AlbumArtServicesProps {
  services: Service[];
}

export default function AlbumArtServices({ services }: AlbumArtServicesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextService = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const getCardStyle = (index: number) => {
    const position = (index - currentIndex + services.length) % services.length;

    if (position === 0) {
      // Center card
      return {
        transform: "translateX(0) scale(1)",
        zIndex: 3,
        opacity: 1,
      };
    } else if (position === 1) {
      // Right card
      return {
        transform: "translateX(200px) scale(0.85)",
        zIndex: 2,
        opacity: 0.7,
      };
    } else if (position === services.length - 1) {
      // Left card
      return {
        transform: "translateX(-200px) scale(0.85)",
        zIndex: 2,
        opacity: 0.7,
      };
    } else {
      // Hidden cards
      return {
        transform: `translateX(${
          position > services.length / 2 ? -400 : 400
        }px) scale(0.7)`,
        zIndex: 1,
        opacity: 0.3,
      };
    }
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "from-blue-400 to-blue-600 text-blue-600",
      purple: "from-purple-400 to-purple-600 text-purple-600",
      green: "from-green-400 to-green-600 text-green-600",
      orange: "from-orange-400 to-orange-600 text-orange-600",
      red: "from-red-400 to-red-600 text-red-600",
      indigo: "from-indigo-400 to-indigo-600 text-indigo-600",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white rounded-2xl p-8 shadow-sm border border-gray-200 overflow-hidden">
      <div className="relative h-[500px]">
        <div className="absolute inset-0 flex items-center justify-center">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colors = getColorClasses(service.color);
            const gradientColors = colors.split(' ')[0] + ' ' + colors.split(' ')[1];
            const textColor = colors.split(' ')[2];

            return (
              <div
                key={index}
                className="absolute transition-all duration-700 ease-in-out transform-gpu will-change-transform"
                style={getCardStyle(index)}
              >
                <div className="w-80 h-[450px] bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform-gpu">
                  {/* Header Section */}
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 text-center">
                    <div className={`w-20 h-20 bg-gradient-to-br ${gradientColors} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features Section */}
                  <div className="p-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      Key Features
                    </h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle className={`w-5 h-5 ${textColor} flex-shrink-0`} />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevService}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:shadow-xl transition-all duration-300 z-10 group"
          aria-label="Previous service"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-gray-800" />
        </button>

        <button
          onClick={nextService}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:shadow-xl transition-all duration-300 z-10 group"
          aria-label="Next service"
        >
          <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-gray-800" />
        </button>
      </div>

      {/* Bottom Section */}
      <div className="text-center mt-8">
        <h3 className="text-lg font-medium text-gray-500 mb-2">
          Our Services Portfolio
        </h3>
        <p className="text-base text-gray-400 max-w-2xl mx-auto">
          We offer comprehensive digital solutions tailored to transform your business 
          and drive innovation in today&apos;s competitive landscape.
        </p>
        
        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-blue-500 scale-110"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to service ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 