'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
}

interface NetworkBackgroundProps {
    particleCount?: number;
    particleColor?: string;
    lineColor?: string;
    particleSize?: number;
    lineWidth?: number;
    connectionDistance?: number;
    speed?: number;
    className?: string;
}

const NetworkBackground: React.FC<NetworkBackgroundProps> = ({
    particleCount = 80,
    particleColor = 'rgba(0, 122, 255, 0.6)',
    lineColor = 'rgba(0, 122, 255, 0.15)',
    particleSize = 2,
    lineWidth = 1,
    connectionDistance = 150,
    speed = 0.3,
    className = '',
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const animationRef = useRef<number | undefined>(undefined);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Initialize particles
        const initParticles = () => {
            particlesRef.current = [];
            for (let i = 0; i < particleCount; i++) {
                particlesRef.current.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * speed,
                    vy: (Math.random() - 0.5) * speed,
                });
            }
        };

        // Set canvas size and reinitialize particles on resize
        const resizeCanvas = () => {
            if (!canvas) return;
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            // Reinitialize particles with new canvas dimensions
            initParticles();
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const particles = particlesRef.current;

            // Update and draw particles
            particles.forEach((particle) => {
                // Move particle
                particle.x += particle.vx;
                particle.y += particle.vy;

                // Bounce off edges
                if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

                // Keep particles in bounds
                particle.x = Math.max(0, Math.min(canvas.width, particle.x));
                particle.y = Math.max(0, Math.min(canvas.height, particle.y));

                // Draw particle
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particleSize, 0, Math.PI * 2);
                ctx.fillStyle = particleColor;
                ctx.fill();
            });

            // Draw connections
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        // Fade line opacity based on distance
                        const opacity = (1 - distance / connectionDistance) * 0.15;
                        ctx.strokeStyle = lineColor.replace(/[\d.]+\)$/g, `${opacity})`);
                        ctx.lineWidth = lineWidth;
                        ctx.stroke();
                    }
                }
            }

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [particleCount, particleColor, lineColor, particleSize, lineWidth, connectionDistance, speed]);

    return (
        <canvas
            ref={canvasRef}
            className={`absolute inset-0 ${className}`}
            style={{
                pointerEvents: 'none',
                width: '100%',
                height: '100%',
                display: 'block'
            }}
        />
    );
};

export default NetworkBackground;
