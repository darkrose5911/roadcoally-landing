import { Item, Driver, Order, Delivery, DeliveryAddress } from '@/types/delivery';

export const MOCK_ITEMS: Item[] = [
  // Food Items
  {
    id: 'food-1',
    name: 'Margherita Pizza',
    description: 'Classic pizza with fresh mozzarella, tomatoes, and basil',
    price: 14.99,
    category: 'food',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400',
    store: "Mario's Pizzeria",
    rating: 4.8,
    prepTime: 25,
  },
  {
    id: 'food-2',
    name: 'Chicken Burger',
    description: 'Grilled chicken breast with lettuce, tomato, and special sauce',
    price: 12.99,
    category: 'food',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400',
    store: 'Burger Palace',
    rating: 4.6,
    prepTime: 20,
  },
  {
    id: 'food-3',
    name: 'Caesar Salad',
    description: 'Fresh romaine lettuce with parmesan, croutons, and Caesar dressing',
    price: 9.99,
    category: 'food',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400',
    store: 'Green Bowl',
    rating: 4.5,
    prepTime: 15,
  },
  {
    id: 'food-4',
    name: 'Sushi Platter',
    description: 'Assorted sushi rolls with wasabi and ginger',
    price: 24.99,
    category: 'food',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400',
    store: 'Tokyo Sushi',
    rating: 4.9,
    prepTime: 30,
  },
  {
    id: 'food-5',
    name: 'Pad Thai',
    description: 'Traditional Thai noodles with shrimp, peanuts, and lime',
    price: 13.99,
    category: 'food',
    image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400',
    store: 'Thai Spice',
    rating: 4.7,
    prepTime: 25,
  },
  {
    id: 'food-6',
    name: 'Tacos Al Pastor',
    description: 'Three tacos with marinated pork, pineapple, and cilantro',
    price: 11.99,
    category: 'food',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400',
    store: 'El Taco Loco',
    rating: 4.8,
    prepTime: 20,
  },

  // Groceries
  {
    id: 'grocery-1',
    name: 'Fresh Organic Milk',
    description: 'Whole milk from local farms, 1 gallon',
    price: 5.99,
    category: 'groceries',
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400',
    store: 'FreshMart',
    rating: 4.7,
    prepTime: 10,
  },
  {
    id: 'grocery-2',
    name: 'Organic Bananas',
    description: 'Fresh organic bananas, per lb',
    price: 0.79,
    category: 'groceries',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400',
    store: 'FreshMart',
    rating: 4.6,
    prepTime: 10,
  },
  {
    id: 'grocery-3',
    name: 'Whole Wheat Bread',
    description: 'Freshly baked whole wheat bread loaf',
    price: 3.99,
    category: 'groceries',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400',
    store: 'FreshMart',
    rating: 4.5,
    prepTime: 10,
  },
  {
    id: 'grocery-4',
    name: 'Free Range Eggs',
    description: 'Dozen large free-range eggs',
    price: 6.99,
    category: 'groceries',
    image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400',
    store: 'FreshMart',
    rating: 4.8,
    prepTime: 10,
  },

  // Packages
  {
    id: 'package-1',
    name: 'Small Package Delivery',
    description: 'Delivery of small packages up to 5 lbs',
    price: 8.99,
    category: 'packages',
    image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=400',
    store: 'QuickShip',
    rating: 4.7,
    prepTime: 5,
  },
  {
    id: 'package-2',
    name: 'Medium Package Delivery',
    description: 'Delivery of medium packages up to 20 lbs',
    price: 14.99,
    category: 'packages',
    image: 'https://images.unsplash.com/photo-1607166452427-7e4477079cb9?w=400',
    store: 'QuickShip',
    rating: 4.6,
    prepTime: 5,
  },

  // Pharmacy
  {
    id: 'pharmacy-1',
    name: 'Prescription Pickup',
    description: 'Pickup and delivery of prescription medications',
    price: 4.99,
    category: 'pharmacy',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400',
    store: 'HealthPlus Pharmacy',
    rating: 4.9,
    prepTime: 15,
  },
  {
    id: 'pharmacy-2',
    name: 'Over-the-Counter Meds',
    description: 'Common OTC medications and health supplies',
    price: 12.99,
    category: 'pharmacy',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400',
    store: 'HealthPlus Pharmacy',
    rating: 4.8,
    prepTime: 15,
  },

  // Retail
  {
    id: 'retail-1',
    name: 'Electronics Delivery',
    description: 'Small electronics and accessories delivery',
    price: 9.99,
    category: 'retail',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400',
    store: 'TechHub',
    rating: 4.7,
    prepTime: 20,
  },
  {
    id: 'retail-2',
    name: 'Clothing Delivery',
    description: 'Fashion and clothing items delivery',
    price: 7.99,
    category: 'retail',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400',
    store: 'Fashion Forward',
    rating: 4.6,
    prepTime: 20,
  },
];

export const MOCK_DRIVERS: Driver[] = [
  {
    id: 'driver-1',
    name: 'John Smith',
    phone: '+1 (555) 123-4567',
    email: 'john.smith@delivery.com',
    rating: 4.9,
    totalDeliveries: 1247,
    vehicle: {
      type: 'Car',
      model: 'Toyota Camry',
      plate: 'ABC-1234',
    },
    currentLocation: {
      lat: 40.7589,
      lng: -73.9851,
    },
    status: 'available',
    earnings: 15234.50,
  },
  {
    id: 'driver-2',
    name: 'Sarah Johnson',
    phone: '+1 (555) 234-5678',
    email: 'sarah.j@delivery.com',
    rating: 4.8,
    totalDeliveries: 892,
    vehicle: {
      type: 'Scooter',
      model: 'Honda PCX',
      plate: 'XYZ-5678',
    },
    currentLocation: {
      lat: 40.7614,
      lng: -73.9776,
    },
    status: 'busy',
    earnings: 12456.75,
  },
  {
    id: 'driver-3',
    name: 'Mike Chen',
    phone: '+1 (555) 345-6789',
    email: 'mike.chen@delivery.com',
    rating: 4.7,
    totalDeliveries: 654,
    vehicle: {
      type: 'Bike',
      model: 'Trek FX',
      plate: 'N/A',
    },
    currentLocation: {
      lat: 40.7580,
      lng: -73.9855,
    },
    status: 'available',
    earnings: 8932.25,
  },
];

export const MOCK_ADDRESSES: DeliveryAddress[] = [
  {
    street: '123 Main St',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    lat: 40.7589,
    lng: -73.9851,
  },
  {
    street: '456 Park Ave',
    city: 'New York',
    state: 'NY',
    zipCode: '10022',
    lat: 40.7614,
    lng: -73.9776,
  },
  {
    street: '789 Broadway',
    city: 'New York',
    state: 'NY',
    zipCode: '10003',
    lat: 40.7580,
    lng: -73.9855,
  },
  {
    street: '321 5th Ave',
    city: 'New York',
    state: 'NY',
    zipCode: '10016',
    lat: 40.7505,
    lng: -73.9934,
  },
];

export function generateMockOrder(customerId: string, items: any[]): Order {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = 4.99;
  const tax = subtotal * 0.08;
  const total = subtotal + deliveryFee + tax;

  const pickupAddress = MOCK_ADDRESSES[Math.floor(Math.random() * MOCK_ADDRESSES.length)];
  const deliveryAddress = MOCK_ADDRESSES[Math.floor(Math.random() * MOCK_ADDRESSES.length)];

  return {
    id: `order-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    customerId,
    items,
    subtotal,
    deliveryFee,
    tax,
    total,
    status: 'pending',
    pickupAddress,
    deliveryAddress,
    createdAt: new Date(),
    estimatedDelivery: new Date(Date.now() + 45 * 60 * 1000),
  };
}

export function generateMockDelivery(order: Order, driverId: string): Delivery {
  return {
    id: `delivery-${order.id}`,
    orderId: order.id,
    driverId,
    status: order.status,
    pickupAddress: order.pickupAddress,
    deliveryAddress: order.deliveryAddress,
    estimatedEarnings: order.total * 0.15,
    distance: Math.random() * 5 + 1,
    estimatedTime: Math.floor(Math.random() * 20 + 15),
    items: order.items,
    customerName: 'Customer',
    customerPhone: '+1 (555) 000-0000',
  };
}
