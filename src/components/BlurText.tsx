"use client";

import { motion } from "framer-motion";
import React, { useMemo } from "react";

interface BlurTextProps {
  text: string;
  delay?: number;
  animateBy?: "words" | "characters";
  direction?: "top" | "bottom" | "left" | "right";
  onAnimationComplete?: () => void;
  className?: string;
}

export const BlurText: React.FC<BlurTextProps> = ({
  text,
  delay = 150,
  animateBy = "words",
  direction = "top",
  onAnimationComplete,
  className = "",
}) => {
  const segments = useMemo(() => {
    return animateBy === "words" ? text.split(" ") : text.split("");
  }, [text, animateBy]);

  const getTransformValues = (dir: string) => {
    switch (dir) {
      case "top":
        return { x: 0, y: -20 };
      case "bottom":
        return { x: 0, y: 20 };
      case "left":
        return { x: -20, y: 0 };
      case "right":
        return { x: 20, y: 0 };
      default:
        return { x: 0, y: -20 };
    }
  };

  const transform = getTransformValues(direction);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: delay / 1000,
        delayChildren: 0.1,
      },
    },
  };

  const segmentVariants = {
    hidden: {
      opacity: 0,
      filter: "blur(8px)",
      x: transform.x,
      y: transform.y,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1],
        filter: {
          duration: 0.8,
        },
      },
    },
  };

  return (
    <motion.div
      className={`inline-block ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      onAnimationComplete={onAnimationComplete}
      style={{
        willChange: "transform",
        backfaceVisibility: "hidden",
        perspective: 1000,
      }}
    >
      {segments.map((segment, index) => (
        <motion.span
          key={index}
          variants={segmentVariants}
          className="inline-block"
          style={{
            willChange: "transform, filter, opacity",
            transform: "translateZ(0)",
          }}
        >
          {segment}
          {animateBy === "words" && index < segments.length - 1 && (
            <span className="inline-block">&nbsp;</span>
          )}
        </motion.span>
      ))}
    </motion.div>
  );
};