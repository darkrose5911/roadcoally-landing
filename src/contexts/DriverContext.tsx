'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import { Driver, Delivery, DriverStatus } from '@/types/delivery';

interface DriverContextType {
  driver: Driver | null;
  activeDelivery: Delivery | null;
  deliveries: Delivery[];
  setDriver: (driver: Driver | null) => void;
  setActiveDelivery: (delivery: Delivery | null) => void;
  updateDriverStatus: (status: DriverStatus) => void;
  updateDriverLocation: (lat: number, lng: number) => void;
  addDelivery: (delivery: Delivery) => void;
  updateDelivery: (deliveryId: string, updates: Partial<Delivery>) => void;
}

const DriverContext = createContext<DriverContextType | undefined>(undefined);

export function DriverProvider({ children }: { children: React.ReactNode }) {
  const [driver, setDriver] = useState<Driver | null>(null);
  const [activeDelivery, setActiveDelivery] = useState<Delivery | null>(null);
  const [deliveries, setDeliveries] = useState<Delivery[]>([]);

  const updateDriverStatus = useCallback((status: DriverStatus) => {
    setDriver(prev => (prev ? { ...prev, status } : null));
  }, []);

  const updateDriverLocation = useCallback((lat: number, lng: number) => {
    setDriver(prev =>
      prev ? { ...prev, currentLocation: { lat, lng } } : null
    );
  }, []);

  const addDelivery = useCallback((delivery: Delivery) => {
    setDeliveries(prev => [delivery, ...prev]);
  }, []);

  const updateDelivery = useCallback((deliveryId: string, updates: Partial<Delivery>) => {
    setDeliveries(prev =>
      prev.map(delivery =>
        delivery.id === deliveryId ? { ...delivery, ...updates } : delivery
      )
    );
    if (activeDelivery?.id === deliveryId) {
      setActiveDelivery(prev => (prev ? { ...prev, ...updates } : null));
    }
  }, [activeDelivery]);

  return (
    <DriverContext.Provider
      value={{
        driver,
        activeDelivery,
        deliveries,
        setDriver,
        setActiveDelivery,
        updateDriverStatus,
        updateDriverLocation,
        addDelivery,
        updateDelivery,
      }}
    >
      {children}
    </DriverContext.Provider>
  );
}

export function useDriver() {
  const context = useContext(DriverContext);
  if (context === undefined) {
    throw new Error('useDriver must be used within a DriverProvider');
  }
  return context;
}
