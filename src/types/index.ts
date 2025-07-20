export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'nigiri' | 'sashimi' | 'rolls' | 'appetizers' | 'desserts' | 'beverages';
  image: string;
  isSpicy?: boolean;
  isVegetarian?: boolean;
  ingredients?: string[];
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'preparing' | 'ready' | 'delivered';
  customerInfo: CustomerInfo;
  orderType: 'delivery' | 'pickup';
  createdAt: Date;
}

export interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
  address?: string;
  specialInstructions?: string;
}

export interface Reservation {
  id: string;
  customerName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  partySize: number;
  specialRequests?: string;
  status: 'confirmed' | 'pending' | 'cancelled';
}