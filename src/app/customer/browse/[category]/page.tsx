'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ItemCard } from '@/components/delivery/ItemCard';
import { useCart } from '@/contexts/CartContext';
import { getItemsByCategory } from '@/lib/api/items';
import { Item, ItemCategory } from '@/types/delivery';
import { motion } from 'framer-motion';

const categoryTitles: Record<ItemCategory, string> = {
  food: 'Food Delivery',
  groceries: 'Groceries',
  packages: 'Package Delivery',
  pharmacy: 'Pharmacy',
  retail: 'Retail',
};

export default function BrowseCategoryPage() {
  const params = useParams();
  const router = useRouter();
  const { addItem } = useCart();
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  const category = params.category as ItemCategory;

  useEffect(() => {
    async function loadItems() {
      setLoading(true);
      try {
        const data = await getItemsByCategory(category);
        setItems(data);
      } catch (error) {
        console.error('Failed to load items:', error);
      } finally {
        setLoading(false);
      }
    }

    loadItems();
  }, [category]);

  const handleAddToCart = (item: Item) => {
    addItem(item);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <button
            onClick={() => router.back()}
            className="text-muted-foreground hover:text-foreground mb-2 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
          <h1 className="text-4xl font-bold text-foreground">
            {categoryTitles[category] || 'Browse Items'}
          </h1>
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-card rounded-xl h-80 animate-pulse" />
          ))}
        </div>
      ) : items.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-muted-foreground">No items available in this category</p>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <ItemCard item={item} onAddToCart={() => handleAddToCart(item)} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
