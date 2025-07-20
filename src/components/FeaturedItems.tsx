import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Plus } from 'lucide-react';
import { menuItems } from '@/data/menuItems';
import { useCartStore } from '@/store/cartStore';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FeaturedItems: React.FC = () => {
  const { addItem } = useCartStore();
  
  // Get featured items (first 6 items from different categories)
  const featuredItems = menuItems.slice(0, 6);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Dishes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most popular sushi selections, crafted with precision and the finest ingredients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <div className="flex items-center space-x-1 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-medium">
                      <Star className="h-3 w-3 fill-current" />
                      <span>Popular</span>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                    <span className="text-xl font-bold text-primary">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <Button 
                    onClick={() => addItem(item)}
                    className="w-full"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button asChild size="lg" variant="outline">
            <Link to="/menu">View Full Menu</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedItems;