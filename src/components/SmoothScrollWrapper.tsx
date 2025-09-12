"use client";

import { useEffect, useLayoutEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

interface SmoothScrollWrapperProps {
  children: ReactNode;
}

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function SmoothScrollWrapper({ children }: SmoothScrollWrapperProps) {
  const smoothWrapperRef = useRef<HTMLDivElement>(null);
  const smoothContentRef = useRef<HTMLDivElement>(null);
  const scrollSmootherRef = useRef<ScrollSmoother | null>(null);

  useLayoutEffect(() => {
    if (!smoothWrapperRef.current || !smoothContentRef.current) return;

    // Initialize ScrollSmoother
    scrollSmootherRef.current = ScrollSmoother.create({
      wrapper: smoothWrapperRef.current,
      content: smoothContentRef.current,
      smooth: 1.2, // 1.2 second catch up time for smoother effect
      effects: true, // enable data-speed and data-lag attributes
      smoothTouch: 0.1, // light smoothing on touch devices
      normalizeScroll: true, // better cross-browser consistency
    });

    // Set up reveal animations for common elements
    const revealElements = smoothContentRef.current.querySelectorAll(
      'h1, h2, h3, h4, h5, h6, p, section, .reveal, button, [class*="btn"], [data-reveal]'
    );

    revealElements.forEach((element, index) => {
      gsap.fromTo(
        element,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      // Cleanup ScrollSmoother and ScrollTrigger
      if (scrollSmootherRef.current) {
        scrollSmootherRef.current.kill();
        scrollSmootherRef.current = null;
      }
      ScrollTrigger.killAll();
    };
  }, []);

  useEffect(() => {
    // Refresh ScrollTrigger when children change
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => clearTimeout(timer);
  }, [children]);

  return (
    <div
      ref={smoothWrapperRef}
      id="smooth-wrapper"
      className="relative"
      style={{
        width: '100%',
        height: '100%',
        overflow: 'hidden'
      }}
    >
      <div
        ref={smoothContentRef}
        id="smooth-content"
        className="relative"
        style={{
          width: '100%',
          willChange: 'transform',
        }}
      >
        {children}
      </div>
    </div>
  );
}