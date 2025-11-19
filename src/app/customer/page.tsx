'use client';

import { CategoryCard } from '@/components/delivery/CategoryCard';
import { motion } from 'framer-motion';

const categories = [
  {
    category: 'food' as const,
    title: 'Food Delivery',
    description: 'Order from your favorite restaurants',
    icon: '🍔',
    color: 'bg-orange-100',
  },
  {
    category: 'groceries' as const,
    title: 'Groceries',
    description: 'Fresh groceries delivered to your door',
    icon: '🛒',
    color: 'bg-green-100',
  },
  {
    category: 'packages' as const,
    title: 'Package Delivery',
    description: 'Send packages anywhere in the city',
    icon: '📦',
    color: 'bg-blue-100',
  },
  {
    category: 'pharmacy' as const,
    title: 'Pharmacy',
    description: 'Prescription and health products',
    icon: '💊',
    color: 'bg-red-100',
  },
  {
    category: 'retail' as const,
    title: 'Retail',
    description: 'Shop from local stores',
    icon: '🏪',
    color: 'bg-purple-100',
  },
];

export default function CustomerHomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold text-foreground mb-4">
          What do you need delivered?
        </h1>
        <p className="text-xl text-muted-foreground">
          Fast, reliable delivery for everything you need
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {categories.map((category, index) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <CategoryCard {...category} />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8 text-center"
      >
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Track your delivery in real-time
        </h2>
        <p className="text-lg text-muted-foreground mb-6">
          Know exactly where your order is with live GPS tracking
        </p>
        <div className="flex items-center justify-center gap-8">
          <div className="text-center">
            <div className="text-4xl mb-2">⚡</div>
            <p className="text-sm font-medium">Fast Delivery</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">📍</div>
            <p className="text-sm font-medium">Live Tracking</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">✨</div>
            <p className="text-sm font-medium">Quality Service</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
