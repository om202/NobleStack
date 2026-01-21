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
        // Load Three.js and Vanta.js scripts
        const loadScripts = async () => {
            // Check if scripts are already loaded
            if ((window as any).THREE && (window as any).VANTA) {
                setScriptsLoaded(true);
                return;
            }

            // Load Three.js
            const threeScript = document.createElement('script');
            threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
            threeScript.async = true;

            // Load Vanta GLOBE
            const vantaScript = document.createElement('script');
            vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.globe.min.js';
            vantaScript.async = true;

            // Wait for Three.js to load first
            threeScript.onload = () => {
                document.head.appendChild(vantaScript);
            };

            vantaScript.onload = () => {
                setScriptsLoaded(true);
            };

            document.head.appendChild(threeScript);
        };

        loadScripts();
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
            className={`absolute inset-0 ${className}`}
            style={{
                pointerEvents: 'none',
                width: '100%',
                height: '100%',
            }}
        />
    );
};

export default VantaBackground;
