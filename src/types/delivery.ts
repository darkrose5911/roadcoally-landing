export type ItemCategory = 'food' | 'groceries' | 'packages' | 'pharmacy' | 'retail';

export type OrderStatus = 'pending' | 'accepted' | 'picked_up' | 'in_transit' | 'delivered' | 'cancelled';

export type DriverStatus = 'offline' | 'available' | 'busy';

export interface Item {
  id: string;
  name: string;
  description: string;
  price: number;
  category: ItemCategory;
  image: string;
  store: string;
  rating: number;
  prepTime: number;
}

export interface CartItem extends Item {
  quantity: number;
}

export interface DeliveryAddress {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  lat: number;
  lng: number;
  instructions?: string;
}

export interface Order {
  id: string;
  customerId: string;
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  tax: number;
  total: number;
  status: OrderStatus;
  pickupAddress: DeliveryAddress;
  deliveryAddress: DeliveryAddress;
  driverId?: string;
  createdAt: Date;
  estimatedDelivery: Date;
  actualDelivery?: Date;
}

export interface Driver {
  id: string;
  name: string;
  phone: string;
  email: string;
  rating: number;
  totalDeliveries: number;
  vehicle: {
    type: string;
    model: string;
    plate: string;
  };
  currentLocation: {
    lat: number;
    lng: number;
  };
  status: DriverStatus;
  earnings: number;
}

export interface Delivery {
  id: string;
  orderId: string;
  driverId: string;
  status: OrderStatus;
  pickupAddress: DeliveryAddress;
  deliveryAddress: DeliveryAddress;
  estimatedEarnings: number;
  distance: number;
  estimatedTime: number;
  items: CartItem[];
  customerName: string;
  customerPhone: string;
}

export interface Location {
  lat: number;
  lng: number;
  timestamp: Date;
}
