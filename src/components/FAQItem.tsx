"use client";

import { ChevronDown, CheckCircle } from "lucide-react";

interface FAQItemProps {
    question: string;
    answer: string;
    metrics: string[];
    isOpen: boolean;
    onToggle: () => void;
}

export default function FAQItem({
    question,
    answer,
    metrics,
    isOpen,
    onToggle,
}: FAQItemProps) {
    const contentId = `faq-content-${question.toLowerCase().replace(/\s+/g, '-')}`;
    const headerId = `faq-header-${question.toLowerCase().replace(/\s+/g, '-')}`;

    return (
        <article className="bg-gray-800 rounded-2xl shadow-sm border border-theme overflow-hidden">
            <button
                onClick={onToggle}
                aria-expanded={isOpen}
                aria-controls={contentId}
                className="w-full text-left px-6 py-6 flex items-center justify-between cursor-pointer"
            >
                <div className="flex-1">
                    <h3 id={headerId} className="text-md-sm sm:text-lg font-semibold text-main-theme">
                        {question}
                    </h3>
                </div>
                <ChevronDown
                    className={`w-5 h-5 text-muted-theme transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                        }`}
                />
            </button>

            {isOpen && (
                <div
                    id={contentId}
                    role="region"
                    aria-labelledby={headerId}
                    className="px-6 pb-6 border-t border-theme bg-gray-900"
                >
                    <div className="pl-0 sm:pl-16 pt-6">
                        <p className="text-md-sm sm:text-base text-muted-theme leading-relaxed mb-6">
                            {answer}
                        </p>

                        {/* Metrics Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                            {metrics.map((metric, metricIndex) => (
                                <div
                                    key={metricIndex}
                                    className="flex items-center gap-2 px-3 py-2 bg-gray-800 rounded-lg border border-theme"
                                >
                                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                    <span className="text-md-sm sm:text-base font-medium text-main-theme">
                                        {metric}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </article>
    );
}
