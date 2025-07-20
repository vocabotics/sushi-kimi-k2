import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Heart, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Quality',
      description: 'Every dish is prepared with love and attention to detail, using only the finest ingredients.'
    },
    {
      icon: Users,
      title: 'Expert Craftsmanship',
      description: 'Our master chefs bring decades of experience from the finest establishments in Japan.'
    },
    {
      icon: Leaf,
      title: 'Fresh & Sustainable',
      description: 'We source our fish daily and are committed to sustainable fishing practices.'
    },
    {
      icon: Award,
      title: 'Award-Winning Excellence',
      description: 'Recognized for our commitment to authentic Japanese cuisine and exceptional service.'
    }
  ];

  const team = [
    {
      name: 'Chef Hiroshi Tanaka',
      role: 'Head Chef & Owner',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80',
      bio: 'With over 25 years of experience in Tokyo\'s finest sushi restaurants, Chef Tanaka brings authentic Japanese techniques to every dish.'
    },
    {
      name: 'Chef Yuki Sato',
      role: 'Sushi Master',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&q=80',
      bio: 'Trained in the traditional Edomae style, Chef Sato specializes in nigiri and sashimi preparation with meticulous attention to detail.'
    },
    {
      name: 'Maria Rodriguez',
      role: 'Restaurant Manager',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&q=80',
      bio: 'With 15 years in hospitality management, Maria ensures every guest receives exceptional service and a memorable dining experience.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=1920&h=1080&fit=crop&q=80"
            alt="Sushi chef at work"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Story</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            A journey of passion, tradition, and the pursuit of the perfect sushi experience.
          </p>
        </motion.div>
      </section>

      {/* Main Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                From Tokyo to Your Table
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Sakura Sushi was born from a simple dream: to bring the authentic taste and 
                  experience of Tokyo's finest sushi bars to our local community. Founded in 2015 
                  by Chef Hiroshi Tanaka, our restaurant represents a bridge between traditional 
                  Japanese culinary arts and modern dining.
                </p>
                <p>
                  After spending over two decades perfecting his craft in Tokyo's most prestigious 
                  sushi establishments, Chef Tanaka decided to share his passion and expertise with 
                  sushi lovers here. Every piece of fish is hand-selected, every grain of rice is 
                  perfectly seasoned, and every dish is prepared with the same dedication that has 
                  made Japanese cuisine world-renowned.
                </p>
                <p>
                  Today, Sakura Sushi stands as a testament to the beauty of authentic Japanese 
                  cuisine, where tradition meets innovation in every bite.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&h=600&fit=crop&q=80"
                alt="Traditional sushi preparation"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Sakura Sushi.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center h-full hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate individuals who make Sakura Sushi an exceptional dining destination.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-8">
              Recognition & Awards
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-6xl mb-4">🏆</div>
                <h3 className="text-xl font-semibold mb-2">Best Sushi Restaurant</h3>
                <p className="opacity-90">City Food Awards 2022, 2023, 2024</p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">⭐</div>
                <h3 className="text-xl font-semibold mb-2">5-Star Rating</h3>
                <p className="opacity-90">Consistently rated by customers and critics</p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">🌟</div>
                <h3 className="text-xl font-semibold mb-2">Excellence in Service</h3>
                <p className="opacity-90">Hospitality Industry Recognition 2023</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;