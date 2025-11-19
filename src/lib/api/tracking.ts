import { Location } from '@/types/delivery';

export function simulateLocationUpdate(
  currentLat: number,
  currentLng: number,
  targetLat: number,
  targetLng: number,
  step: number = 0.0005
): Location {
  const latDiff = targetLat - currentLat;
  const lngDiff = targetLng - currentLng;
  const distance = Math.sqrt(latDiff * latDiff + lngDiff * lngDiff);

  if (distance < step) {
    return {
      lat: targetLat,
      lng: targetLng,
      timestamp: new Date(),
    };
  }

  const ratio = step / distance;
  return {
    lat: currentLat + latDiff * ratio,
    lng: currentLng + lngDiff * ratio,
    timestamp: new Date(),
  };
}

export function calculateDistance(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

export function calculateETA(distanceKm: number, speedKmh: number = 40): number {
  return Math.ceil((distanceKm / speedKmh) * 60);
}
