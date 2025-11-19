import { Driver, DriverStatus, Delivery, Order } from '@/types/delivery';
import { MOCK_DRIVERS, generateMockDelivery } from '@/lib/mock-data';

const drivers: Map<string, Driver> = new Map(
  MOCK_DRIVERS.map(driver => [driver.id, driver])
);

const deliveries: Map<string, Delivery> = new Map();

export async function getDriver(driverId: string): Promise<Driver | null> {
  await new Promise(resolve => setTimeout(resolve, 200));
  return drivers.get(driverId) || null;
}

export async function updateDriverStatus(driverId: string, status: DriverStatus): Promise<Driver | null> {
  await new Promise(resolve => setTimeout(resolve, 200));
  const driver = drivers.get(driverId);
  if (driver) {
    driver.status = status;
    drivers.set(driverId, driver);
    return driver;
  }
  return null;
}

export async function updateDriverLocation(driverId: string, lat: number, lng: number): Promise<Driver | null> {
  await new Promise(resolve => setTimeout(resolve, 100));
  const driver = drivers.get(driverId);
  if (driver) {
    driver.currentLocation = { lat, lng };
    drivers.set(driverId, driver);
    return driver;
  }
  return null;
}

export async function getAvailableDeliveries(): Promise<Delivery[]> {
  await new Promise(resolve => setTimeout(resolve, 300));
  return Array.from(deliveries.values()).filter(delivery => delivery.status === 'pending');
}

export async function getDriverDeliveries(driverId: string): Promise<Delivery[]> {
  await new Promise(resolve => setTimeout(resolve, 300));
  return Array.from(deliveries.values()).filter(delivery => delivery.driverId === driverId);
}

export async function acceptDelivery(deliveryId: string, driverId: string): Promise<Delivery | null> {
  await new Promise(resolve => setTimeout(resolve, 300));
  const delivery = deliveries.get(deliveryId);
  if (delivery) {
    delivery.driverId = driverId;
    delivery.status = 'accepted';
    deliveries.set(deliveryId, delivery);
    return delivery;
  }
  return null;
}

export async function updateDeliveryStatus(deliveryId: string, status: any): Promise<Delivery | null> {
  await new Promise(resolve => setTimeout(resolve, 200));
  const delivery = deliveries.get(deliveryId);
  if (delivery) {
    delivery.status = status;
    deliveries.set(deliveryId, delivery);
    return delivery;
  }
  return null;
}

export async function createDeliveryFromOrder(order: Order): Promise<Delivery> {
  await new Promise(resolve => setTimeout(resolve, 200));
  const availableDriver = Array.from(drivers.values()).find(d => d.status === 'available');
  const delivery = generateMockDelivery(order, availableDriver?.id || 'driver-1');
  deliveries.set(delivery.id, delivery);
  return delivery;
}
