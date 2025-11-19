'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useOrders } from '@/contexts/OrderContext';
import { MapView } from '@/components/delivery/MapView';
import { getOrder } from '@/lib/api/orders';
import { simulateLocationUpdate } from '@/lib/api/tracking';
import { Order, OrderStatus } from '@/types/delivery';
import { motion } from 'framer-motion';

const statusSteps: OrderStatus[] = ['pending', 'accepted', 'picked_up', 'in_transit', 'delivered'];

const statusLabels: Record<OrderStatus, string> = {
  pending: 'Order Placed',
  accepted: 'Driver Assigned',
  picked_up: 'Picked Up',
  in_transit: 'On the Way',
  delivered: 'Delivered',
  cancelled: 'Cancelled',
};

export default function TrackOrderPage() {
  const params = useParams();
  const { updateOrder } = useOrders();
  const [order, setOrder] = useState<Order | null>(null);
  const [driverLocation, setDriverLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [loading, setLoading] = useState(true);

  const orderId = params.orderId as string;

  useEffect(() => {
    async function loadOrder() {
      try {
        const data = await getOrder(orderId);
        if (data) {
          setOrder(data);
          setDriverLocation(data.pickupAddress);
        }
      } catch (error) {
        console.error('Failed to load order:', error);
      } finally {
        setLoading(false);
      }
    }

    loadOrder();
  }, [orderId]);

  useEffect(() => {
    if (!order || order.status === 'delivered' || order.status === 'cancelled') return;

    const statusInterval = setInterval(() => {
      setOrder((prev) => {
        if (!prev) return prev;
        const currentIndex = statusSteps.indexOf(prev.status);
        if (currentIndex < statusSteps.length - 1) {
          const newStatus = statusSteps[currentIndex + 1];
          updateOrder(prev.id, { status: newStatus });
          return { ...prev, status: newStatus };
        }
        return prev;
      });
    }, 8000);

    return () => clearInterval(statusInterval);
  }, [order, updateOrder]);

  useEffect(() => {
    if (!order || !driverLocation || order.status === 'delivered') return;

    const locationInterval = setInterval(() => {
      setDriverLocation((prev) => {
        if (!prev) return prev;
        const target = order.deliveryAddress;
        const newLocation = simulateLocationUpdate(prev.lat, prev.lng, target.lat, target.lng);
        return { lat: newLocation.lat, lng: newLocation.lng };
      });
    }, 2000);

    return () => clearInterval(locationInterval);
  }, [order, driverLocation]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading order details...</p>
        </div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <p className="text-xl text-muted-foreground">Order not found</p>
        </div>
      </div>
    );
  }

  const currentStepIndex = statusSteps.indexOf(order.status);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold text-foreground mb-2">Track Your Order</h1>
        <p className="text-muted-foreground">Order ID: {order.id}</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-xl p-6 shadow-sm border border-border"
          >
            <h2 className="text-xl font-bold text-foreground mb-4">Live Tracking</h2>
            <div className="bg-muted rounded-lg overflow-hidden" style={{ height: '400px' }}>
              <MapView
                pickupLat={order.pickupAddress.lat}
                pickupLng={order.pickupAddress.lng}
                deliveryLat={order.deliveryAddress.lat}
                deliveryLng={order.deliveryAddress.lng}
                driverLat={driverLocation?.lat}
                driverLng={driverLocation?.lng}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-xl p-6 shadow-sm border border-border"
          >
            <h2 className="text-xl font-bold text-foreground mb-6">Order Status</h2>
            <div className="space-y-4">
              {statusSteps.map((status, index) => {
                const isCompleted = index <= currentStepIndex;
                const isCurrent = index === currentStepIndex;

                return (
                  <div key={status} className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                        isCompleted
                          ? 'bg-accent text-accent-foreground'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {isCompleted ? '✓' : index + 1}
                    </div>
                    <div className="flex-1">
                      <p
                        className={`font-medium ${
                          isCurrent ? 'text-accent' : isCompleted ? 'text-foreground' : 'text-muted-foreground'
                        }`}
                      >
                        {statusLabels[status]}
                      </p>
                      {isCurrent && (
                        <p className="text-sm text-muted-foreground">In progress...</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-1 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card rounded-xl p-6 shadow-sm border border-border"
          >
            <h2 className="text-xl font-bold text-foreground mb-4">Delivery Details</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Delivery Address</p>
                <p className="font-medium text-foreground">
                  {order.deliveryAddress.street}
                </p>
                <p className="text-sm text-muted-foreground">
                  {order.deliveryAddress.city}, {order.deliveryAddress.state} {order.deliveryAddress.zipCode}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Estimated Delivery</p>
                <p className="font-medium text-foreground">
                  {new Date(order.estimatedDelivery).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-card rounded-xl p-6 shadow-sm border border-border"
          >
            <h2 className="text-xl font-bold text-foreground mb-4">Order Items</h2>
            <div className="space-y-3">
              {order.items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">
                    {item.name} x {item.quantity}
                  </span>
                  <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="border-t border-border pt-3">
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>${order.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
