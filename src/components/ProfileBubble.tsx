"use client"

import { useEffect, useRef, useState } from 'react'

export default function ProfileBubble() {
  const [dots, setDots] = useState<Array<{ angle: number; delay: number }>>([])
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Generate animated dots around the bubble
    const newDots = Array.from({ length: 12 }, (_, i) => ({
      angle: (i * 360) / 12,
      delay: i * 0.15,
    }))
    setDots(newDots)
  }, [])

  return (
    <div className="relative w-full max-w-md mx-auto" ref={containerRef}>
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-full bg-linear-to-r from-primary/20 via-cyan-500/20 to-primary/20 animate-pulse blur-xl" aria-hidden="true" />

      {/* Animated border rings */}
      <div className="absolute inset-0 rounded-full border border-primary/30 animate-spin-slow" aria-hidden="true" />
      <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-spin-slow-reverse" aria-hidden="true" />
      <div className="absolute inset-0 rounded-full border border-primary/10 animate-pulse-slow" aria-hidden="true" />

      {/* Floating dots around the bubble */}
      <div className="absolute inset-0" aria-hidden="true">
        {dots.map((dot, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-primary/60 -translate-x-1/2 -translate-y-1/2 animate-orbit"
            style={{
              '--orbit-radius': '120px',
              '--orbit-angle': `${dot.angle}deg`,
              '--orbit-delay': `${dot.delay}s`,
              animationDuration: '20s',
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Profile image in bubble */}
      <div className="relative aspect-square rounded-full overflow-hidden border-4 shadow-2xl bg-linear-to-br from-primary/5 to-cyan-500/5">
        <img
          src="/profile.webp"
          alt="Parsa Rostamzadeh"
          className="w-full h-full object-cover"
          loading="eager"
        />

        {/* Inner shine effect */}
        <div className="absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-transparent animate-shine" aria-hidden="true" />
      </div>
    </div>
  )
}