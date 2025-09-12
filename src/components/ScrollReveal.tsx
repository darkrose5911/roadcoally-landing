"use client";

import React, { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BlurText } from "./BlurText";
import "./ScrollReveal.css";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: React.ReactNode;
  scrollContainerRef?: React.RefObject<HTMLElement>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  rotationEnd?: string;
  wordAnimationEnd?: string;
  // BlurText specific props
  blurDelay?: number;
  blurDirection?: "top" | "bottom" | "left" | "right";
  onBlurAnimationComplete?: () => void;
}

export const ScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = "",
  textClassName = "",
  rotationEnd = "bottom bottom",
  wordAnimationEnd = "bottom bottom",
  blurDelay = 150,
  blurDirection = "top",
  onBlurAnimationComplete
}: ScrollRevealProps) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const textContent = useMemo(() => {
    if (typeof children === 'string') {
      return children;
    }
    return '';
  }, [children]);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Set initial states for rotation
    gsap.set(container, {
      rotateX: baseRotation
    });

    // Create rotation animation
    const rotationTL = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: rotationEnd,
        scroller: scrollContainerRef?.current || undefined,
        scrub: 1
      }
    });

    rotationTL.to(container, {
      rotateX: 0,
      duration: 1,
      ease: "none"
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === container) {
          trigger.kill();
        }
      });
    };
  }, [
    scrollContainerRef,
    baseRotation,
    rotationEnd
  ]);

  return (
    <h2
      ref={containerRef}
      className={`scroll-reveal ${containerClassName}`}>
      <div className={`scroll-reveal-text ${textClassName}`}>
        <BlurText
          text={textContent}
          delay={blurDelay}
          animateBy="words"
          direction={blurDirection}
          onAnimationComplete={onBlurAnimationComplete}
          className="!font-normal"
        />
      </div>
    </h2>
  );
};