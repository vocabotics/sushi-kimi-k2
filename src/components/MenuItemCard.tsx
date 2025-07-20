import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus } from 'lucide-react';
import { MenuItem } from '@/types';
import { useCartStore } from '@/store/cartStore';
import { motion } from 'framer-motion';

interface MenuItemCardProps {
  item: MenuItem;
  index: number;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, index }) => {
  const { addItem } = useCartStore();

  const handleAddToCart = () => {
    addItem(item);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="relative">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-48 object-cover"
            loading="lazy"
          />
          <div className="absolute top-2 right-2 flex gap-1">
            {item.isSpicy && (
              <Badge variant="destructive" className="text-xs">
                🌶️ Spicy
              </Badge>
            )}
            {item.isVegetarian && (
              <Badge variant="secondary" className="text-xs">
                🌱 Vegetarian
              </Badge>
            )}
          </div>
        </div>
        
        <CardContent className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-lg">{item.name}</h3>
            <span className="text-lg font-bold text-primary">
              ${item.price.toFixed(2)}
            </span>
          </div>
          <p className="text-gray-600 text-sm mb-3">{item.description}</p>
          {item.ingredients && (
            <div className="text-xs text-gray-500">
              <span className="font-medium">Ingredients: </span>
              {item.ingredients.join(', ')}
            </div>
          )}
        </CardContent>
        
        <CardFooter className="p-4 pt-0">
          <Button 
            onClick={handleAddToCart}
            className="w-full"
            size="sm"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default MenuItemCard;