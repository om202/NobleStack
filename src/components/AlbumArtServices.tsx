"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";
import {
  SiReact,
  SiOpenai,
  SiZapier,
  SiDocker,
  SiGithubactions,
  SiAuth0,
} from "react-icons/si";

const ICON_MAP: { [key: string]: React.ComponentType<{ className?: string }> } = {
  "React": SiReact,
  "OpenAI": SiOpenai,
  "Zapier": SiZapier,
  "Docker": SiDocker,
  "GitHub Actions": SiGithubactions,
  "Auth0": SiAuth0,
};

interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
  color: string;
}

interface AlbumArtServicesProps {
  services: Service[];
  autoRotateInterval?: number; // in milliseconds, default 5000
}

export default function AlbumArtServices({
  services,
  autoRotateInterval = 5000
}: AlbumArtServicesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate services
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, autoRotateInterval);

    return () => clearInterval(interval);
  }, [services.length, autoRotateInterval]);

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
      // Right card - responsive spacing
      return {
        transform: "translateX(min(280px, 70vw)) scale(0.85)",
        zIndex: 2,
        opacity: 0.7,
      };
    } else if (position === services.length - 1) {
      // Left card - responsive spacing
      return {
        transform: "translateX(max(-280px, -70vw)) scale(0.85)",
        zIndex: 2,
        opacity: 0.7,
      };
    } else {
      // Hidden cards
      return {
        transform: `translateX(${position > services.length / 2 ? -500 : 500
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
    <div className="bg-card-theme rounded-2xl p-6 md:p-8 shadow-sm border border-theme overflow-hidden">
      <div className="relative h-[600px] md:h-[650px] lg:h-[700px]">
        <div className="absolute inset-0 flex items-center justify-center">
          {services.map((service, index) => {
            const Icon = ICON_MAP[service.icon] || SiReact;
            const colors = getColorClasses(service.color);
            const gradientColors = colors.split(' ')[0] + ' ' + colors.split(' ')[1];
            const textColor = colors.split(' ')[2];

            return (
              <div
                key={index}
                className="absolute transition-all duration-700 ease-in-out transform-gpu will-change-transform"
                style={getCardStyle(index)}
              >
                <div className="w-80 sm:w-72 md:w-96 lg:w-[420px] h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px] bg-subtle-theme rounded-2xl shadow-2xl border border-theme overflow-hidden transform-gpu">
                  {/* Header Section */}
                  <div className="relative bg-subtle-hover p-6 sm:p-6 md:p-8 text-center overflow-hidden">
                    {/* Decorative Blur Elements */}
                    <div className="hero-gradient-blur-blue"></div>
                    <div className="hero-gradient-blur-green"></div>
                    <div className="hero-gradient-blur-orange"></div>
                    <div className="hero-gradient-blur-amber"></div>

                    <div className="relative z-10">
                      <div className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br ${gradientColors} rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg`}>
                        <Icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
                      </div>
                      <h3 className="text-base md:text-lg lg:text-xl font-bold text-main-theme mb-2 sm:mb-3 leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-base text-muted-theme leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Features Section */}
                  <div className="p-6 sm:p-6 md:p-8 flex-1">
                    <h4 className="text-base md:text-lg font-semibold text-main-theme mb-3 sm:mb-4 md:mb-6">
                      Key Technologies
                    </h4>
                    <ul className="space-y-2 sm:space-y-3 md:space-y-4">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 sm:gap-3">
                          <CheckCircle className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ${textColor} flex-shrink-0 mt-0.5`} />
                          <span className="text-base text-muted-theme leading-relaxed font-medium">
                            {feature}
                          </span>
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
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-subtle-theme rounded-full shadow-lg border border-theme flex items-center justify-center hover:bg-subtle-hover hover:shadow-xl transition-all duration-300 z-10 group"
          aria-label="Previous service"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-muted-theme group-hover:text-main-theme" />
        </button>

        <button
          onClick={nextService}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-subtle-theme rounded-full shadow-lg border border-theme flex items-center justify-center hover:bg-subtle-hover hover:shadow-xl transition-all duration-300 z-10 group"
          aria-label="Next service"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-muted-theme group-hover:text-main-theme" />
        </button>
      </div>

      {/* Bottom Section */}
      <div className="text-center mt-6 md:mt-8">
        <h3 className="text-lg md:text-xl font-medium text-muted-theme mb-2">
          Our Services Portfolio
        </h3>
        <p className="text-sm md:text-base text-muted-theme max-w-2xl mx-auto px-2">
          We offer comprehensive digital solutions tailored to transform your business
          and drive innovation in today&apos;s competitive landscape.
        </p>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-4 md:mt-6">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${index === currentIndex
                ? "bg-blue-500 scale-110"
                : "bg-subtle-theme hover:bg-subtle-hover"
                }`}
              aria-label={`Go to service ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 