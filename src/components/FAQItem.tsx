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
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <button
                onClick={onToggle}
                className="w-full text-left px-6 py-6 flex items-center justify-between"
            >
                <div className="flex-1">
                    <span className="text-md-sm sm:text-lg font-semibold text-gray-900">
                        {question}
                    </span>
                </div>
                <ChevronDown
                    className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                        }`}
                />
            </button>

            {isOpen && (
                <div className="px-6 pb-6 border-t border-gray-100">
                    <div className="pl-0 sm:pl-16 pt-6">
                        <p className="text-md-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                            {answer}
                        </p>

                        {/* Metrics Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                            {metrics.map((metric, metricIndex) => (
                                <div
                                    key={metricIndex}
                                    className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg border border-gray-200"
                                >
                                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                    <span className="text-md-sm sm:text-base font-medium text-gray-700">
                                        {metric}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
