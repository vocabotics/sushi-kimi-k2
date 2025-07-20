import { create } from 'zustand';
import { CartItem, MenuItem } from '@/types';

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: MenuItem) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
  getItemCount: () => number;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  isOpen: false,
  
  addItem: (item: MenuItem) => {
    const items = get().items;
    const existingItem = items.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
      set({
        items: items.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      });
    } else {
      set({
        items: [...items, { ...item, quantity: 1 }]
      });
    }
  },
  
  removeItem: (itemId: string) => {
    set({
      items: get().items.filter(item => item.id !== itemId)
    });
  },
  
  updateQuantity: (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      get().removeItem(itemId);
      return;
    }
    
    set({
      items: get().items.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      )
    });
  },
  
  clearCart: () => {
    set({ items: [] });
  },
  
  getTotal: () => {
    return get().items.reduce((total, item) => total + (item.price * item.quantity), 0);
  },
  
  getItemCount: () => {
    return get().items.reduce((count, item) => count + item.quantity, 0);
  },
  
  toggleCart: () => {
    set({ isOpen: !get().isOpen });
  },
  
  openCart: () => {
    set({ isOpen: true });
  },
  
  closeCart: () => {
    set({ isOpen: false });
  }
}));