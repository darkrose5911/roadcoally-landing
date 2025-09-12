"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ScrollFloatProps {
  children: React.ReactNode;
  delay?: number;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
  className?: string;
}

export const ScrollFloat: React.FC<ScrollFloatProps> = ({
  children,
  delay = 0,
  animationDuration = 1,
  ease = 'power2.out',
  scrollStart = 'top bottom-=100px',
  scrollEnd = 'bottom bottom',
  stagger = 0.03,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current) return;

    // Set initial state
    gsap.set(containerRef.current, {
      opacity: 0,
      y: 30
    });

    // Create the animation
    const tl = gsap.timeline({
      delay: delay,
      scrollTrigger: {
        trigger: containerRef.current,
        start: scrollStart,
        end: scrollEnd,
        scrub: false,
        once: true,
        toggleActions: "play none none none"
      }
    });

    tl.to(containerRef.current, {
      opacity: 1,
      y: 0,
      duration: animationDuration,
      ease: ease
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === containerRef.current) {
          trigger.kill();
        }
      });
    };
  }, [delay, animationDuration, ease, scrollStart, scrollEnd, stagger]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ willChange: 'transform, opacity' }}>
      {children}
    </div>
  );
};