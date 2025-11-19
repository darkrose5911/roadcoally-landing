'use client';

import { ItemCategory } from '@/types/delivery';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface CategoryCardProps {
  category: ItemCategory;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export function CategoryCard({ category, title, description, icon, color }: CategoryCardProps) {
  return (
    <Link href={`/customer/browse/${category}`}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow cursor-pointer"
      >
        <div className={`w-16 h-16 rounded-xl ${color} flex items-center justify-center mb-4`}>
          <span className="text-4xl">{icon}</span>
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </motion.div>
    </Link>
  );
}
