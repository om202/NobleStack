"use client";

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  SiReact, SiOpenai, SiAmazon, SiTailwindcss, SiPrisma, SiLangchain, 
  SiVercel, SiFirebase, SiZapier, SiStripe, SiAnthropic, SiFigma,
  SiFramer, SiRedux, SiClerk, SiHuggingface, SiStreamlit, SiFastapi, 
  SiN8N, SiMake, SiGithubactions, SiGitlab, SiPrettier, SiEslint,
  SiDatadog, SiSlack, SiGmail, SiGoogle
} from 'react-icons/si';

// Import specific Devicons for better icon coverage
import ReactOriginal from 'devicons-react/icons/ReactOriginal';
import NodejsOriginal from 'devicons-react/icons/NodejsOriginal';
import TypescriptOriginal from 'devicons-react/icons/TypescriptOriginal';
import NextjsOriginal from 'devicons-react/icons/NextjsOriginal';
import DockerOriginal from 'devicons-react/icons/DockerOriginal';
import MongodbOriginal from 'devicons-react/icons/MongodbOriginal';
import PostgresqlOriginal from 'devicons-react/icons/PostgresqlOriginal';
import GraphqlPlain from 'devicons-react/icons/GraphqlPlain';
import JestPlain from 'devicons-react/icons/JestPlain';
import ExpressOriginal from 'devicons-react/icons/ExpressOriginal';

interface Technology {
  name: string;
  color: string;
}

interface TechTickerProps {
  technologies: Technology[];
  interval?: number;
  className?: string;
  auto?: boolean;
}

const TECH_DESCRIPTIONS: { [key: string]: string } = {
  "React.js": "Modern JavaScript UI Library",
  "Next.js": "Full Stack React Framework",
  "TypeScript": "Type Safe JavaScript",
  "Node.js": "Server Side JavaScript Runtime",
  "OpenAI": "Advanced AI Language Models",
  "AWS": "Cloud Computing Services Platform",
  "Docker": "Application Container Platform",
  "GraphQL": "API Query Language",
  "MongoDB": "NoSQL Document Database",
  "PostgreSQL": "Relational Database System",
  "Tailwind CSS": "Utility First CSS Framework",
  "Prisma": "Modern Database ORM",
  "LangChain": "LLM Application Framework",
  "Vercel": "Frontend Deployment Platform",
  "Firebase": "Backend as Service",
  "Zapier": "Workflow Automation Platform",
  "Stripe": "Online Payment Processing",
  "Claude": "Conversational AI Assistant",
  "Figma": "Collaborative Design Tool",
  "Jest": "JavaScript Testing Framework",
  "Framer Motion": "React Animation Library",
  "Radix UI": "Low Level UI Components",
  "ShadCN UI": "React Component Library",
  "Redux": "State Management Library",
  "Zustand": "Lightweight State Manager",
  "SWR": "Data Fetching Library",
  "Zod": "TypeScript Schema Validator",
  "Express.js": "Node.js Web Framework",
  "NestJS": "Progressive Node.js Framework",
  "Clerk": "User Authentication Service",
  "Hugging Face": "Machine Learning Model Hub",
  "Pinecone": "Vector Database Service",
  "Weaviate": "Open Source Vector Database",
  "AWS Bedrock": "Managed AI Service",
  "Vertex AI": "Google Machine Learning Platform",
  "LangGraph": "LLM Application State Management",
  "CrewAI": "Multi Agent AI Framework",
  "Streamlit": "Python Data App Framework",
  "FastAPI": "Modern Python Web Framework",
  "n8n": "Workflow Automation Tool",
  "Make": "Visual Automation Platform",
  "GitHub Actions": "CI CD Automation",
  "GitLab CI": "Integrated DevOps Platform",
  "Prettier": "Code Formatting Tool",
  "ESLint": "JavaScript Code Linter",
  "Datadog": "Application Performance Monitoring",
  "Slack API": "Team Communication Integration",
  "Gmail API": "Email Service Integration"
};

const TECH_ICONS: { [key: string]: React.ComponentType<{ className?: string; style?: React.CSSProperties }> } = {
  "React.js": ReactOriginal,
  "Next.js": NextjsOriginal,
  "TypeScript": TypescriptOriginal,
  "Node.js": NodejsOriginal,
  "OpenAI": SiOpenai,
  "AWS": SiAmazon,
  "Docker": DockerOriginal,
  "GraphQL": GraphqlPlain,
  "MongoDB": MongodbOriginal,
  "PostgreSQL": PostgresqlOriginal,
  "Tailwind CSS": SiTailwindcss,
  "Prisma": SiPrisma,
  "LangChain": SiLangchain,
  "Vercel": SiVercel,
  "Firebase": SiFirebase,
  "Zapier": SiZapier,
  "Stripe": SiStripe,
  "Claude": SiAnthropic,
  "Figma": SiFigma,
  "Jest": JestPlain,
  "Framer Motion": SiFramer,
  "Redux": SiRedux,
  "Express.js": ExpressOriginal,
  "Clerk": SiClerk,
  "Hugging Face": SiHuggingface,
  "AWS Bedrock": SiAmazon,
  "Vertex AI": SiGoogle,
  "LangGraph": SiLangchain, // LangGraph is part of LangChain
  "CrewAI": SiReact, // Use React as fallback
  "Streamlit": SiStreamlit,
  "FastAPI": SiFastapi,
  "n8n": SiN8N,
  "Make": SiMake,
  "GitHub Actions": SiGithubactions,
  "GitLab CI": SiGitlab,
  "Prettier": SiPrettier,
  "ESLint": SiEslint,
  "Datadog": SiDatadog,
  "Slack API": SiSlack,
  "Gmail API": SiGmail
};

const CARD_POSITIONS = [
  { transform: "translateX(0) scale(1)", zIndex: 5, opacity: 1 },           // Center
  { transform: "translateX(140px) scale(0.85)", zIndex: 3, opacity: 0.7 }, // Right
  { transform: "translateX(240px) scale(0.7)", zIndex: 2, opacity: 0.4 },  // Far right
];

export default function TechTicker({ 
  technologies, 
  interval = 2000,
  className = "",
  auto = false
}: TechTickerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll through technologies only if auto is true
  useEffect(() => {
    if (!auto) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % technologies.length);
    }, interval);
    return () => clearInterval(timer);
  }, [technologies.length, interval, auto]);

  // Manual navigation functions
  const goToPrevious = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? technologies.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % technologies.length);
  };

  const getCardStyle = (index: number) => {
    const position = (index - currentIndex + technologies.length) % technologies.length;
    const totalTechs = technologies.length;
    
    // Handle visible positions
    if (position < CARD_POSITIONS.length) return CARD_POSITIONS[position];
    if (position === totalTechs - 1) return { ...CARD_POSITIONS[1], transform: "translateX(-140px) scale(0.85)" }; // Left
    if (position === totalTechs - 2) return { ...CARD_POSITIONS[2], transform: "translateX(-240px) scale(0.7)" };  // Far left
    
    // Hidden cards
    return {
      transform: `translateX(${position > totalTechs / 2 ? 400 : -400}px) scale(0.5)`,
      zIndex: 1,
      opacity: 0,
    };
  };

  const renderIcon = (techName: string) => {
    const IconComponent = TECH_ICONS[techName];
    if (IconComponent) {
      return (
        <IconComponent 
          className="mb-2" 
          style={{ 
            color: '#1F2937',
            width: '32px',
            height: '32px',
            minWidth: '32px',
            minHeight: '32px'
          }} 
        />
      );
    }
    return null;
  };

  return (
    <div className={`overflow-hidden ${className} relative`}>
      {/* Manual Navigation Buttons - only show when auto is false */}
      {!auto && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full p-2 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 shadow-sm"
            aria-label="Previous technology"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full p-2 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 shadow-sm"
            aria-label="Next technology"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </>
      )}

      <div className="relative h-32 flex items-center justify-center">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="absolute transition-all duration-1000 ease-in-out transform-gpu will-change-transform"
            style={getCardStyle(index)}
          >
            <div className="w-56 h-36 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg border border-gray-300 overflow-hidden transform-gpu relative">
              <div className="h-full flex flex-col items-center justify-center p-4 text-center transform-gpu">
                {renderIcon(tech.name)}
                <h3 className="text-lg font-bold text-gray-900 mb-1 transform-gpu">
                  {tech.name}
                </h3>
                <p className="text-gray-600 font-medium text-md-sm transform-gpu">
                  {TECH_DESCRIPTIONS[tech.name] || "Technology Solution"}
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/5 to-transparent pointer-events-none" />
            </div>
          </div>
        ))}
      </div>

      {/* Manual Progress Dots - only show when auto is false */}
      {!auto && (
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
          {technologies.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? "bg-blue-500 scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to technology ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
} 