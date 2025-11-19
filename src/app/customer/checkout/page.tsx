'use client';

import { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { useOrders } from '@/contexts/OrderContext';
import { useRouter } from 'next/navigation';
import { createOrder } from '@/lib/api/orders';
import { createDeliveryFromOrder } from '@/lib/api/drivers';
import { motion } from 'framer-motion';

export default function CheckoutPage() {
  const { items, getTotal, clearCart } = useCart();
  const { addOrder } = useOrders();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    street: '',
    city: '',
    state: '',
    zipCode: '',
    instructions: '',
  });

  const subtotal = getTotal();
  const deliveryFee = 4.99;
  const tax = subtotal * 0.08;
  const total = subtotal + deliveryFee + tax;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const deliveryAddress = {
        ...formData,
        lat: 40.7589 + Math.random() * 0.01,
        lng: -73.9851 + Math.random() * 0.01,
      };

      const order = await createOrder('customer-1', items, deliveryAddress);
      await createDeliveryFromOrder(order);
      
      addOrder(order);
      clearCart();
      
      router.push(`/customer/track/${order.id}`);
    } catch (error) {
      console.error('Failed to create order:', error);
      alert('Failed to place order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (items.length === 0) {
    router.push('/customer/cart');
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold text-foreground mb-8">Checkout</h1>

      <form onSubmit={handleSubmit} className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card rounded-xl p-6 shadow-sm border border-border"
        >
          <h2 className="text-xl font-bold text-foreground mb-4">Delivery Address</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-foreground mb-2">
                Street Address
              </label>
              <input
                type="text"
                required
                value={formData.street}
                onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="123 Main St"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                City
              </label>
              <input
                type="text"
                required
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="New York"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                State
              </label>
              <input
                type="text"
                required
                value={formData.state}
                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="NY"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-foreground mb-2">
                ZIP Code
              </label>
              <input
                type="text"
                required
                value={formData.zipCode}
                onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="10001"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-foreground mb-2">
                Delivery Instructions (Optional)
              </label>
              <textarea
                value={formData.instructions}
                onChange={(e) => setFormData({ ...formData, instructions: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                rows={3}
                placeholder="Leave at door, ring bell, etc."
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-card rounded-xl p-6 shadow-sm border border-border"
        >
          <h2 className="text-xl font-bold text-foreground mb-4">Order Summary</h2>
          <div className="space-y-2 mb-4">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span className="text-muted-foreground">
                  {item.name} x {item.quantity}
                </span>
                <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-border pt-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-medium">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Delivery Fee</span>
              <span className="font-medium">${deliveryFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Tax</span>
              <span className="font-medium">${tax.toFixed(2)}</span>
            </div>
            <div className="border-t border-border pt-2">
              <div className="flex justify-between">
                <span className="font-bold text-foreground">Total</span>
                <span className="font-bold text-foreground text-xl">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </motion.div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Placing Order...' : 'Place Order'}
        </button>
      </form>
    </div>
  );
}
