import React from 'react';
import HeroSection from '@/components/HeroSection';
import FeaturedItems from '@/components/FeaturedItems';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Clock, Award, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: Star,
      title: 'Premium Quality',
      description: 'Only the freshest fish and finest ingredients make it to your plate.'
    },
    {
      icon: Clock,
      title: 'Fast Service',
      description: 'Quick preparation without compromising on quality or taste.'
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized as the best sushi restaurant in the city for three consecutive years.'
    },
    {
      icon: Users,
      title: 'Expert Chefs',
      description: 'Our master chefs bring decades of experience from Japan.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      text: 'The best sushi I have ever had! The fish is incredibly fresh and the service is outstanding.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      text: 'Authentic Japanese flavors in every bite. This place transports you straight to Tokyo.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      text: 'Amazing atmosphere and the dragon roll is to die for. Highly recommend!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedItems />
      
      {/* Features Section */}
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
              Why Choose Sakura Sushi?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We are committed to delivering an exceptional dining experience with every visit.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
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
                      <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2015 by Chef Hiroshi Tanaka, Sakura Sushi brings the authentic taste 
                of Japan to your neighborhood. With over 20 years of experience in Tokyo's finest 
                sushi establishments, Chef Tanaka ensures every piece is crafted to perfection.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We source our fish daily from the best suppliers and use traditional techniques 
                passed down through generations. Our commitment to quality and authenticity has 
                made us the premier sushi destination in the city.
              </p>
              <Button asChild size="lg">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=800&h=600&fit=crop&q=80"
                alt="Chef preparing sushi"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Dont just take our word for it - hear from our satisfied customers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                    <p className="font-semibold text-gray-900">- {testimonial.name}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Ready to Experience the Best Sushi?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Book your table now or order online for delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/reservations">Make a Reservation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Link to="/menu">Order Online</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;