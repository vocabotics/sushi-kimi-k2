import React, { useState, useMemo } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Filter } from 'lucide-react';
import MenuItemCard from '@/components/MenuItemCard';
import { menuItems } from '@/data/menuItems';
import { MenuItem } from '@/types';
import { motion } from 'framer-motion';

const MenuPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [showVegetarianOnly, setShowVegetarianOnly] = useState(false);
  const [showSpicyOnly, setShowSpicyOnly] = useState(false);

  const categories = [
    { id: 'all', name: 'All Items', count: menuItems.length },
    { id: 'nigiri', name: 'Nigiri', count: menuItems.filter(item => item.category === 'nigiri').length },
    { id: 'sashimi', name: 'Sashimi', count: menuItems.filter(item => item.category === 'sashimi').length },
    { id: 'rolls', name: 'Rolls', count: menuItems.filter(item => item.category === 'rolls').length },
    { id: 'appetizers', name: 'Appetizers', count: menuItems.filter(item => item.category === 'appetizers').length },
    { id: 'desserts', name: 'Desserts', count: menuItems.filter(item => item.category === 'desserts').length },
    { id: 'beverages', name: 'Beverages', count: menuItems.filter(item => item.category === 'beverages').length }
  ];

  const filteredItems = useMemo(() => {
    return menuItems.filter((item: MenuItem) => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesVegetarian = !showVegetarianOnly || item.isVegetarian;
      const matchesSpicy = !showSpicyOnly || item.isSpicy;
      
      return matchesSearch && matchesCategory && matchesVegetarian && matchesSpicy;
    });
  }, [searchTerm, activeCategory, showVegetarianOnly, showSpicyOnly]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Menu</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully crafted selection of traditional and contemporary sushi dishes.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 space-y-4"
        >
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search menu items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Filter Badges */}
          <div className="flex flex-wrap justify-center gap-2">
            <Badge
              variant={showVegetarianOnly ? 'default' : 'outline'}
              className="cursor-pointer hover:bg-primary/80"
              onClick={() => setShowVegetarianOnly(!showVegetarianOnly)}
            >
              <Filter className="h-3 w-3 mr-1" />
              🌱 Vegetarian Only
            </Badge>
            <Badge
              variant={showSpicyOnly ? 'default' : 'outline'}
              className="cursor-pointer hover:bg-primary/80"
              onClick={() => setShowSpicyOnly(!showSpicyOnly)}
            >
              <Filter className="h-3 w-3 mr-1" />
              🌶️ Spicy Only
            </Badge>
          </div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-7 mb-8">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="text-sm">
                  <span className="hidden sm:inline">{category.name}</span>
                  <span className="sm:hidden">{category.name.split(' ')[0]}</span>
                  <Badge variant="secondary" className="ml-1 text-xs">
                    {category.count}
                  </Badge>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Menu Items Grid */}
            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  {filteredItems.length === 0 ? (
                    <div className="text-center py-12">
                      <div className="text-6xl mb-4">🍣</div>
                      <h3 className="text-xl font-semibold text-gray-600 mb-2">
                        No items found
                      </h3>
                      <p className="text-gray-500">
                        Try adjusting your search or filter criteria.
                      </p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {filteredItems.map((item, index) => (
                        <MenuItemCard key={item.id} item={item} index={index} />
                      ))}
                    </div>
                  )}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        {/* Results Summary */}
        {searchTerm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="mt-8 text-center"
          >
            <p className="text-gray-600">
              Found {filteredItems.length} item{filteredItems.length !== 1 ? 's' : ''} matching "{searchTerm}"
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default MenuPage;