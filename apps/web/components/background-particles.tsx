"use client";

import { useEffect, useState } from "react";

export function BackgroundParticles() {
    const [particles, setParticles] = useState<{ id: number; style: React.CSSProperties }[]>([]);

    useEffect(() => {
        const particleCount = 50;
        const newParticles = Array.from({ length: particleCount }).map((_, i) => {
            const size = Math.random() * 10 + 2;
            return {
                id: i,
                style: {
                    left: `${Math.random() * 100}vw`,
                    top: `${Math.random() * 100}vh`,
                    width: `${size}px`,
                    height: `${size}px`,
                    backgroundColor: Math.random() > 0.5 ? "var(--color-primary)" : "var(--color-accent)",
                    animationDuration: `${Math.random() * 10 + 5}s`,
                    animationDelay: `${Math.random() * 5}s`,
                },
            };
        });
        setParticles(newParticles);
    }, []);

    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            {particles.map((p) => (
                <div
                    key={p.id}
                    className="absolute rounded-sm animate-float opacity-0"
                    style={p.style}
                />
            ))}
        </div>
    );
}
