'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import { Order } from '@/types/delivery';

interface OrderContextType {
  orders: Order[];
  currentOrder: Order | null;
  addOrder: (order: Order) => void;
  setCurrentOrder: (order: Order | null) => void;
  updateOrder: (orderId: string, updates: Partial<Order>) => void;
  getOrderById: (orderId: string) => Order | undefined;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export function OrderProvider({ children }: { children: React.ReactNode }) {
  const [orders, setOrders] = useState<Order[]>([]);
  const [currentOrder, setCurrentOrder] = useState<Order | null>(null);

  const addOrder = useCallback((order: Order) => {
    setOrders(prevOrders => [order, ...prevOrders]);
    setCurrentOrder(order);
  }, []);

  const updateOrder = useCallback((orderId: string, updates: Partial<Order>) => {
    setOrders(prevOrders =>
      prevOrders.map(order =>
        order.id === orderId ? { ...order, ...updates } : order
      )
    );
    if (currentOrder?.id === orderId) {
      setCurrentOrder(prev => (prev ? { ...prev, ...updates } : null));
    }
  }, [currentOrder]);

  const getOrderById = useCallback((orderId: string) => {
    return orders.find(order => order.id === orderId);
  }, [orders]);

  return (
    <OrderContext.Provider
      value={{
        orders,
        currentOrder,
        addOrder,
        setCurrentOrder,
        updateOrder,
        getOrderById,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export function useOrders() {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error('useOrders must be used within an OrderProvider');
  }
  return context;
}
