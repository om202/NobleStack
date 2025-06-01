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
  autoRotateInterval = 3000 
}: AlbumArtTeamProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate team members
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
    }, autoRotateInterval);

    return () => clearInterval(interval);
  }, [teamMembers.length, autoRotateInterval]);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white rounded-2xl p-4 shadow-sm border border-gray-200 overflow-hidden">
      <div className="relative h-[350px] perspective-1000">
        <div className="team-carousel absolute inset-0 flex items-center justify-center">
          {teamMembers.map((member, index) => {
            const offset = (index - currentIndex + teamMembers.length) % teamMembers.length;
            const isCenter = offset === 0;
            const isLeft = offset === teamMembers.length - 1;
            const isRight = offset === 1;
            
            let transform = '';
            let zIndex = 0;
            let opacity = 0.4;
            
            if (isCenter) {
              transform = 'translateX(0) rotateY(0deg) scale(1)';
              zIndex = 3;
              opacity = 1;
            } else if (isLeft) {
              transform = 'translateX(-100px) rotateY(15deg) scale(0.85)';
              zIndex = 2;
              opacity = 0.8;
            } else if (isRight) {
              transform = 'translateX(100px) rotateY(-15deg) scale(0.85)';
              zIndex = 2;
              opacity = 0.8;
            } else {
              transform = `translateX(${offset > teamMembers.length / 2 ? -150 : 150}px) rotateY(${offset > teamMembers.length / 2 ? 25 : -25}deg) scale(0.7)`;
              zIndex = 1;
              opacity = 0.4;
            }

            return (
            <div
              key={index}
              className={`team-card absolute transition-all duration-1000 ease-in-out transform-gpu`}
              style={{
                transform,
                zIndex,
                opacity,
              }}
            >
              {/* Main Card */}
              <div className="relative w-64 h-83 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
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
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold text-sm mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-500 text-xs whitespace-pre-line leading-relaxed mb-4">
                    {member.expertise}
                  </p>
                </div>
              </div>
            </div>
            );
           })}
        </div>
      </div>

      <div className="text-center mt-8">
        <h3 className="text-lg font-medium text-gray-500 mb-2">
          Meet Our Team
        </h3>
        <p className="text-sm text-gray-400 max-w-xl mx-auto">
          Our diverse team of experts brings together years of experience in technology, 
          design, and business strategy.
        </p>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
          perspective-origin: center center;
        }

        .team-carousel {
          transform-style: preserve-3d;
        }

        .team-card {
          transform-style: preserve-3d;
          will-change: transform, opacity;
        }
      `}</style>
    </div>
  );
} 