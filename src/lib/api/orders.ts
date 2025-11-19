import { Order, OrderStatus, CartItem } from '@/types/delivery';
import { generateMockOrder } from '@/lib/mock-data';

const orders: Map<string, Order> = new Map();

export async function createOrder(customerId: string, items: CartItem[], deliveryAddress: any): Promise<Order> {
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const order = generateMockOrder(customerId, items);
  order.deliveryAddress = deliveryAddress;
  orders.set(order.id, order);
  
  return order;
}

export async function getOrder(orderId: string): Promise<Order | null> {
  await new Promise(resolve => setTimeout(resolve, 200));
  return orders.get(orderId) || null;
}

export async function getCustomerOrders(customerId: string): Promise<Order[]> {
  await new Promise(resolve => setTimeout(resolve, 300));
  return Array.from(orders.values()).filter(order => order.customerId === customerId);
}

export async function updateOrderStatus(orderId: string, status: OrderStatus): Promise<Order | null> {
  await new Promise(resolve => setTimeout(resolve, 200));
  const order = orders.get(orderId);
  if (order) {
    order.status = status;
    if (status === 'delivered') {
      order.actualDelivery = new Date();
    }
    orders.set(orderId, order);
    return order;
  }
  return null;
}

export async function assignDriver(orderId: string, driverId: string): Promise<Order | null> {
  await new Promise(resolve => setTimeout(resolve, 200));
  const order = orders.get(orderId);
  if (order) {
    order.driverId = driverId;
    order.status = 'accepted';
    orders.set(orderId, order);
    return order;
  }
  return null;
}
