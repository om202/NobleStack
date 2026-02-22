'use client';

import React, { useEffect, useRef, useState } from 'react';

interface VantaBackgroundProps {
    className?: string;
}

const VantaBackground: React.FC<VantaBackgroundProps> = ({ className = '' }) => {
    const vantaRef = useRef<HTMLDivElement>(null);
    const vantaEffect = useRef<any>(null);
    const [scriptsLoaded, setScriptsLoaded] = useState(false);

    useEffect(() => {
        // Defer loading until the main thread is idle — prevents TBT hit
        const scheduleLoad = () => {
            if ('requestIdleCallback' in window) {
                (window as any).requestIdleCallback(() => loadScripts(), { timeout: 3000 });
            } else {
                // Fallback: delay 2s after load
                setTimeout(loadScripts, 2000);
            }
        };

        const loadScripts = () => {
            // Check if scripts are already loaded
            if ((window as any).THREE && (window as any).VANTA) {
                setScriptsLoaded(true);
                return;
            }

            // Load Three.js (minified, ~600KB but deferred)
            const threeScript = document.createElement('script');
            threeScript.src = '/vendor/three.min.js';
            threeScript.async = true;

            // Load Vanta GLOBE
            const vantaScript = document.createElement('script');
            vantaScript.src = '/vendor/vanta.globe.min.js';
            vantaScript.async = true;

            // Chain: Three.js first, then Vanta
            threeScript.onload = () => {
                document.head.appendChild(vantaScript);
            };

            vantaScript.onload = () => {
                setScriptsLoaded(true);
            };

            document.head.appendChild(threeScript);
        };

        scheduleLoad();
    }, []);

    useEffect(() => {
        if (!scriptsLoaded || !vantaRef.current) return;

        // Initialize Vanta effect
        if ((window as any).VANTA && !vantaEffect.current) {
            vantaEffect.current = (window as any).VANTA.GLOBE({
                el: vantaRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x007aff,
                backgroundColor: 0x000000,
                backgroundAlpha: 0
            });
        }

        return () => {
            if (vantaEffect.current) {
                vantaEffect.current.destroy();
                vantaEffect.current = null;
            }
        };
    }, [scriptsLoaded]);

    return (
        <div
            ref={vantaRef}
            className={`absolute inset-0 opacity-0 md:opacity-0 transition-opacity duration-1000 ${scriptsLoaded ? 'opacity-20! md:opacity-75!' : ''} ${className}`}
            style={{
                pointerEvents: 'none',
                width: '100%',
                height: '100%',
            }}
        />
    );
};

export default VantaBackground;
