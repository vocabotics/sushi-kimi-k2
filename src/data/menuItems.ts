import { MenuItem } from '@/types';

export const menuItems: MenuItem[] = [
  // Nigiri
  {
    id: 'nigiri-1',
    name: 'Salmon Nigiri',
    description: 'Fresh Atlantic salmon over seasoned sushi rice',
    price: 6.50,
    category: 'nigiri',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop'
  },
  {
    id: 'nigiri-2',
    name: 'Tuna Nigiri',
    description: 'Premium bluefin tuna over seasoned sushi rice',
    price: 8.50,
    category: 'nigiri',
    image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=400&h=300&fit=crop'
  },
  {
    id: 'nigiri-3',
    name: 'Yellowtail Nigiri',
    description: 'Buttery yellowtail over seasoned sushi rice',
    price: 7.50,
    category: 'nigiri',
    image: 'https://images.unsplash.com/photo-1563612116625-3012372fccce?w=400&h=300&fit=crop'
  },
  {
    id: 'nigiri-4',
    name: 'Eel Nigiri',
    description: 'Grilled eel with sweet sauce over sushi rice',
    price: 9.00,
    category: 'nigiri',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop'
  },

  // Sashimi
  {
    id: 'sashimi-1',
    name: 'Salmon Sashimi',
    description: 'Fresh sliced Atlantic salmon, 8 pieces',
    price: 16.00,
    category: 'sashimi',
    image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=400&h=300&fit=crop'
  },
  {
    id: 'sashimi-2',
    name: 'Tuna Sashimi',
    description: 'Premium bluefin tuna, 8 pieces',
    price: 22.00,
    category: 'sashimi',
    image: 'https://images.unsplash.com/photo-1563612116625-3012372fccce?w=400&h=300&fit=crop'
  },
  {
    id: 'sashimi-3',
    name: 'Mixed Sashimi',
    description: 'Assorted fresh fish, 12 pieces',
    price: 28.00,
    category: 'sashimi',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop'
  },

  // Rolls
  {
    id: 'rolls-1',
    name: 'California Roll',
    description: 'Crab, avocado, cucumber with sesame seeds',
    price: 12.00,
    category: 'rolls',
    image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=400&h=300&fit=crop'
  },
  {
    id: 'rolls-2',
    name: 'Spicy Tuna Roll',
    description: 'Spicy tuna mix with cucumber and spicy mayo',
    price: 14.00,
    category: 'rolls',
    image: 'https://images.unsplash.com/photo-1563612116625-3012372fccce?w=400&h=300&fit=crop',
    isSpicy: true
  },
  {
    id: 'rolls-3',
    name: 'Dragon Roll',
    description: 'Eel and cucumber topped with avocado and eel sauce',
    price: 18.00,
    category: 'rolls',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop'
  },
  {
    id: 'rolls-4',
    name: 'Rainbow Roll',
    description: 'California roll topped with assorted sashimi',
    price: 20.00,
    category: 'rolls',
    image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=400&h=300&fit=crop'
  },
  {
    id: 'rolls-5',
    name: 'Vegetarian Roll',
    description: 'Cucumber, avocado, carrot, and pickled radish',
    price: 10.00,
    category: 'rolls',
    image: 'https://images.unsplash.com/photo-1563612116625-3012372fccce?w=400&h=300&fit=crop',
    isVegetarian: true
  },

  // Appetizers
  {
    id: 'appetizers-1',
    name: 'Edamame',
    description: 'Steamed young soybeans with sea salt',
    price: 6.00,
    category: 'appetizers',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop',
    isVegetarian: true
  },
  {
    id: 'appetizers-2',
    name: 'Gyoza',
    description: 'Pan-fried pork dumplings with ponzu sauce',
    price: 8.00,
    category: 'appetizers',
    image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=400&h=300&fit=crop'
  },
  {
    id: 'appetizers-3',
    name: 'Tempura Shrimp',
    description: 'Crispy battered shrimp with tempura sauce',
    price: 12.00,
    category: 'appetizers',
    image: 'https://images.unsplash.com/photo-1563612116625-3012372fccce?w=400&h=300&fit=crop'
  },
  {
    id: 'appetizers-4',
    name: 'Miso Soup',
    description: 'Traditional soybean paste soup with tofu and wakame',
    price: 4.00,
    category: 'appetizers',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop',
    isVegetarian: true
  },

  // Desserts
  {
    id: 'desserts-1',
    name: 'Mochi Ice Cream',
    description: 'Sweet rice cake filled with ice cream (3 pieces)',
    price: 8.00,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=400&h=300&fit=crop'
  },
  {
    id: 'desserts-2',
    name: 'Tempura Ice Cream',
    description: 'Vanilla ice cream in crispy tempura batter',
    price: 9.00,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1563612116625-3012372fccce?w=400&h=300&fit=crop'
  },

  // Beverages
  {
    id: 'beverages-1',
    name: 'Green Tea',
    description: 'Traditional Japanese green tea',
    price: 3.00,
    category: 'beverages',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop'
  },
  {
    id: 'beverages-2',
    name: 'Sake',
    description: 'Premium Japanese rice wine',
    price: 12.00,
    category: 'beverages',
    image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=400&h=300&fit=crop'
  },
  {
    id: 'beverages-3',
    name: 'Ramune',
    description: 'Japanese lemon-lime soda',
    price: 4.00,
    category: 'beverages',
    image: 'https://images.unsplash.com/photo-1563612116625-3012372fccce?w=400&h=300&fit=crop'
  }
];