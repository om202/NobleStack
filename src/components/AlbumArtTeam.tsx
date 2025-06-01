"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  expertise: string;
  image: string;
  bio: string;
}

interface AlbumArtTeamProps {
  teamMembers: TeamMember[];
  autoRotateInterval?: number; // in milliseconds, default 3000
}

export default function AlbumArtTeam({
  teamMembers,
  autoRotateInterval = 3000,
}: AlbumArtTeamProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate team members
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
    }, autoRotateInterval);

    return () => clearInterval(interval);
  }, [teamMembers.length, autoRotateInterval]);

  const getCardStyle = (index: number) => {
    const position =
      (index - currentIndex + teamMembers.length) % teamMembers.length;

    if (position === 0) {
      // Center card
      return {
        transform: "translateX(0) scale(1)",
        zIndex: 3,
      };
    } else if (position === 1) {
      // Right card
      return {
        transform: "translateX(120px) scale(0.9)",
        zIndex: 2,
      };
    } else if (position === teamMembers.length - 1) {
      // Left card
      return {
        transform: "translateX(-120px) scale(0.9)",
        zIndex: 2,
      };
    } else {
      // Hidden cards
      return {
        transform: `translateX(${
          position > teamMembers.length / 2 ? -200 : 200
        }px) scale(0.8)`,
        zIndex: 1,
      };
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white rounded-2xl p-4 shadow-sm border border-gray-200 overflow-hidden">
      <div className="relative h-[350px]">
        <div className="absolute inset-0 flex items-center justify-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="absolute transition-all duration-1000 ease-in-out transform-gpu will-change-transform"
              style={getCardStyle(index)}
            >
              <div className="w-50 h-83 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform-gpu">
                {/* Image Section */}
                <div className="h-48 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-6">
                  <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Info Section */}
                <div className="p-6 text-center transform-gpu">
                  <h3 className="text-lg font-bold text-gray-900 mb-1 transform-gpu">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold text-sm mb-3 transform-gpu">
                    {member.role}
                  </p>
                  <p className="text-gray-500 text-xs whitespace-pre-line leading-relaxed mb-4 transform-gpu">
                    {member.expertise}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-8">
        <h3 className="text-lg font-medium text-gray-500 mb-2">
          Meet Our Team
        </h3>
        <p className="text-sm text-gray-400 max-w-xl mx-auto">
          Our diverse team of experts brings together years of experience in
          technology, design, and business strategy.
        </p>
      </div>
    </div>
  );
}
