'use client';

import { CartProvider } from '@/contexts/CartContext';
import { OrderProvider } from '@/contexts/OrderContext';
import { useCart } from '@/contexts/CartContext';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function CartBadge() {
  const { getItemCount } = useCart();
  const count = getItemCount();

  return (
    <Link
      href="/customer/cart"
      className="relative p-2 hover:bg-muted rounded-lg transition-colors"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
      {count > 0 && (
        <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {count}
        </span>
      )}
    </Link>
  );
}

function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/customer" className="flex items-center gap-2">
            <span className="text-2xl">🚚</span>
            <span className="text-xl font-bold text-foreground">QuickDeliver</span>
          </Link>

          <div className="flex items-center gap-6">
            <Link
              href="/customer"
              className={`text-sm font-medium transition-colors ${
                pathname === '/customer'
                  ? 'text-accent'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Home
            </Link>
            <Link
              href="/customer/orders"
              className={`text-sm font-medium transition-colors ${
                pathname === '/customer/orders'
                  ? 'text-accent'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Orders
            </Link>
            <CartBadge />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function CustomerLayout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <OrderProvider>
        <div className="min-h-screen bg-background">
          <Navigation />
          <main>{children}</main>
        </div>
      </OrderProvider>
    </CartProvider>
  );
}
