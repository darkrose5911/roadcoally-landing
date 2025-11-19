'use client';

import { useOrders } from '@/contexts/OrderContext';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { OrderStatus } from '@/types/delivery';

const statusColors: Record<OrderStatus, string> = {
  pending: 'bg-yellow-100 text-yellow-800',
  accepted: 'bg-blue-100 text-blue-800',
  picked_up: 'bg-purple-100 text-purple-800',
  in_transit: 'bg-indigo-100 text-indigo-800',
  delivered: 'bg-green-100 text-green-800',
  cancelled: 'bg-red-100 text-red-800',
};

export default function OrdersPage() {
  const { orders } = useOrders();
  const router = useRouter();

  if (orders.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-foreground mb-8">Your Orders</h1>
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📦</div>
          <h2 className="text-2xl font-bold text-foreground mb-2">No orders yet</h2>
          <p className="text-muted-foreground mb-6">Start shopping to see your orders here</p>
          <button
            onClick={() => router.push('/customer')}
            className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors"
          >
            Browse Items
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold text-foreground mb-8">Your Orders</h1>

      <div className="space-y-4">
        {orders.map((order, index) => (
          <motion.div
            key={order.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => router.push(`/customer/track/${order.id}`)}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-bold text-foreground mb-1">Order #{order.id.slice(-8)}</h3>
                <p className="text-sm text-muted-foreground">
                  {new Date(order.createdAt).toLocaleDateString()} at{' '}
                  {new Date(order.createdAt).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  statusColors[order.status]
                }`}
              >
                {order.status.replace('_', ' ').toUpperCase()}
              </span>
            </div>

            <div className="mb-4">
              <p className="text-sm text-muted-foreground mb-2">
                {order.items.length} item{order.items.length !== 1 ? 's' : ''}
              </p>
              <div className="flex flex-wrap gap-2">
                {order.items.slice(0, 3).map((item) => (
                  <span
                    key={item.id}
                    className="text-xs bg-muted px-2 py-1 rounded"
                  >
                    {item.name} x {item.quantity}
                  </span>
                ))}
                {order.items.length > 3 && (
                  <span className="text-xs bg-muted px-2 py-1 rounded">
                    +{order.items.length - 3} more
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Delivery to</p>
                <p className="font-medium text-foreground">
                  {order.deliveryAddress.street}, {order.deliveryAddress.city}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Total</p>
                <p className="text-xl font-bold text-foreground">${order.total.toFixed(2)}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
