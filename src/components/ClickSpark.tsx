"use client";

import React, { useRef, useEffect, useCallback, ReactNode } from 'react';

interface ClickSparkProps {
  sparkColor?: string;
  sparkSize?: number;
  sparkRadius?: number;
  sparkCount?: number;
  duration?: number;
  easing?: string;
  extraScale?: number;
  children: ReactNode;
}

interface Spark {
  x: number;
  y: number;
  angle: number;
  startTime: number;
}

export const ClickSpark: React.FC<ClickSparkProps> = ({
  sparkColor = "#fff",
  sparkSize = 10,
  sparkRadius = 15,
  sparkCount = 8,
  duration = 400,
  easing = "ease-out",
  extraScale = 1.0,
  children,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const sparksRef = useRef<Spark[]>([]);
  const animationFrameRef = useRef<number>();

  const easingFunction = useCallback((t: number): number => {
    switch (easing) {
      case "ease-in":
        return t * t;
      case "ease-out":
        return 1 - Math.pow(1 - t, 2);
      case "ease-in-out":
        return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      default:
        return 1 - Math.pow(1 - t, 2); // ease-out
    }
  }, [easing]);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const now = Date.now();
    sparksRef.current = sparksRef.current.filter(spark => {
      const elapsed = now - spark.startTime;
      const progress = Math.min(elapsed / duration, 1);

      if (progress >= 1) return false;

      const easedProgress = easingFunction(progress);
      const distance = sparkRadius * easedProgress * extraScale;
      const opacity = 1 - progress;
      const scale = (1 - progress) * sparkSize;

      const sparkX = spark.x + Math.cos(spark.angle) * distance;
      const sparkY = spark.y + Math.sin(spark.angle) * distance;

      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.fillStyle = sparkColor;
      ctx.beginPath();
      ctx.arc(sparkX, sparkY, scale / 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      return true;
    });

    if (sparksRef.current.length > 0) {
      animationFrameRef.current = requestAnimationFrame(animate);
    }
  }, [sparkColor, sparkSize, sparkRadius, duration, easingFunction, extraScale]);

  const createSparks = useCallback((x: number, y: number) => {
    const newSparks: Spark[] = [];
    for (let i = 0; i < sparkCount; i++) {
      newSparks.push({
        x,
        y,
        angle: (i / sparkCount) * Math.PI * 2,
        startTime: Date.now(),
      });
    }
    sparksRef.current.push(...newSparks);

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    animationFrameRef.current = requestAnimationFrame(animate);
  }, [sparkCount, animate]);

  const handleClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    createSparks(x, y);
  }, [createSparks]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
    });

    resizeObserver.observe(container);
    resizeCanvas();

    return () => {
      resizeObserver.disconnect();
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [resizeCanvas]);

  return (
    <div
      ref={containerRef}
      onClick={handleClick}
      className="relative w-full h-full"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-10"
      />
      {children}
    </div>
  );
};