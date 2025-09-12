"use client";

import { useEffect, useRef } from 'react';
import { Particles } from './Particles';

interface BackgroundPatternProps {
  children: React.ReactNode;
}

export default function BackgroundPattern({ children }: BackgroundPatternProps) {
  return (
    <div 
      className="w-full relative"
      style={{
        backgroundColor: '#00A651',
        minHeight: '100vh',
        // Ensure background covers full scroll height
        minHeight: '100%'
      }}
    >
      <div className="absolute inset-0 w-full" style={{zIndex: 1}}>
        <Particles 
          particleColors={['#ffffff']}
          particleCount={150}
          particleSpread={12}
          speed={0.15}
          particleBaseSize={80}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
      <div className="relative z-10 w-full" style={{ minHeight: 'inherit' }}>
        {children}
      </div>
    </div>
  );
}