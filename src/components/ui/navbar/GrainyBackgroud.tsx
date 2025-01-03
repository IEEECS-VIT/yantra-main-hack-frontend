import React from 'react'

interface GrainyBackgroundProps {
  children: React.ReactNode
  className?: string
}

export function GrainyBackground({ children, className = '' }: GrainyBackgroundProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-[#321335] via-[#8B6BE5] to-[#40295C]" />
      <div className="absolute inset-0 opacity-50 mix-blend-multiply">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.65" 
              numOctaves="3" 
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}

