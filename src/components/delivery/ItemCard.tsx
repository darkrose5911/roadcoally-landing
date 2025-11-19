'use client';

import { Item } from '@/types/delivery';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ItemCardProps {
  item: Item;
  onAddToCart?: () => void;
}

export function ItemCard({ item, onAddToCart }: ItemCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-card rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-shadow"
    >
      <div className="relative h-48 w-full bg-muted">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <h3 className="font-semibold text-foreground mb-1">{item.name}</h3>
            <p className="text-sm text-muted-foreground mb-2">{item.store}</p>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <span className="text-yellow-500">★</span>
            <span className="font-medium">{item.rating}</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {item.description}
        </p>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-foreground">
              ${item.price.toFixed(2)}
            </span>
            <span className="text-xs text-muted-foreground ml-2">
              {item.prepTime} min
            </span>
          </div>
          {onAddToCart && (
            <button
              onClick={onAddToCart}
              className="px-4 py-2 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors"
            >
              Add
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
