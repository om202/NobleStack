'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * SmoothScroll Component
 * 
 * Implements buttery-smooth, momentum-based scrolling using Lenis.
 * This provides a premium, native-feeling scroll experience across the entire website.
 * 
 * Features:
 * - Smooth momentum scrolling
 * - Optimized performance with RAF (requestAnimationFrame)
 * - Respects user's motion preferences (prefers-reduced-motion)
 * - Works seamlessly with anchor links and scroll-to-top
 */
export default function SmoothScroll() {
    useEffect(() => {
        // Check if user prefers reduced motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (prefersReducedMotion) {
            // Respect user's accessibility preferences
            return;
        }

        // Initialize Lenis
        const lenis = new Lenis({
            duration: 0.8,        // Duration of scroll animation (faster: 0.8s instead of 1.2s)
            easing: (t) => 1 - Math.pow(1 - t, 3), // Cubic easing for snappier feel
            orientation: 'vertical', // Scroll direction
            gestureOrientation: 'vertical', // Gesture direction
            smoothWheel: true,    // Enable smooth scrolling for mouse wheel
            wheelMultiplier: 1.2, // Increased mouse wheel sensitivity for faster response
            touchMultiplier: 2,   // Touch scroll sensitivity
            infinite: false,      // Disable infinite scroll
        });

        // Animation frame loop
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Cleanup on unmount
        return () => {
            lenis.destroy();
        };
    }, []);

    return null; // This component doesn't render anything
}
