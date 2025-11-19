'use client';

import { useEffect, useRef } from 'react';

interface MapViewProps {
  pickupLat: number;
  pickupLng: number;
  deliveryLat: number;
  deliveryLng: number;
  driverLat?: number;
  driverLng?: number;
  className?: string;
}

export function MapView({
  pickupLat,
  pickupLng,
  deliveryLat,
  deliveryLng,
  driverLat,
  driverLng,
  className = '',
}: MapViewProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    ctx.fillStyle = '#f0f0f0';
    ctx.fillRect(0, 0, width, height);

    ctx.strokeStyle = '#d0d0d0';
    ctx.lineWidth = 1;
    for (let i = 0; i < width; i += 40) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, height);
      ctx.stroke();
    }
    for (let i = 0; i < height; i += 40) {
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(width, i);
      ctx.stroke();
    }

    const minLat = Math.min(pickupLat, deliveryLat, driverLat || pickupLat);
    const maxLat = Math.max(pickupLat, deliveryLat, driverLat || deliveryLat);
    const minLng = Math.min(pickupLng, deliveryLng, driverLng || pickupLng);
    const maxLng = Math.max(pickupLng, deliveryLng, driverLng || deliveryLng);

    const latRange = maxLat - minLat || 0.01;
    const lngRange = maxLng - minLng || 0.01;

    const padding = 60;
    const mapWidth = width - padding * 2;
    const mapHeight = height - padding * 2;

    const toX = (lng: number) => padding + ((lng - minLng) / lngRange) * mapWidth;
    const toY = (lat: number) => height - padding - ((lat - minLat) / latRange) * mapHeight;

    const pickupX = toX(pickupLng);
    const pickupY = toY(pickupLat);
    const deliveryX = toX(deliveryLng);
    const deliveryY = toY(deliveryLat);

    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 3;
    ctx.setLineDash([10, 5]);
    ctx.beginPath();
    ctx.moveTo(pickupX, pickupY);
    ctx.lineTo(deliveryX, deliveryY);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle = '#10b981';
    ctx.beginPath();
    ctx.arc(pickupX, pickupY, 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.fillStyle = '#ef4444';
    ctx.beginPath();
    ctx.arc(deliveryX, deliveryY, 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 3;
    ctx.stroke();

    if (driverLat !== undefined && driverLng !== undefined) {
      const driverX = toX(driverLng);
      const driverY = toY(driverLat);

      ctx.fillStyle = '#f59e0b';
      ctx.beginPath();
      ctx.arc(driverX, driverY, 14, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 3;
      ctx.stroke();

      ctx.fillStyle = '#fff';
      ctx.font = 'bold 16px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('🚗', driverX, driverY);
    }

    ctx.fillStyle = '#000';
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Pickup', pickupX, pickupY - 20);
    ctx.fillText('Delivery', deliveryX, deliveryY - 20);
  }, [pickupLat, pickupLng, deliveryLat, deliveryLng, driverLat, driverLng]);

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={600}
      className={`w-full h-full rounded-lg ${className}`}
      style={{ maxHeight: '600px' }}
    />
  );
}
