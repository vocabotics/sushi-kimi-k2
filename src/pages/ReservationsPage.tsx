import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Calendar, Clock, Users, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

const reservationSchema = z.object({
  customerName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  date: z.string().min(1, 'Please select a date'),
  time: z.string().min(1, 'Please select a time'),
  partySize: z.string().min(1, 'Please select party size'),
  specialRequests: z.string().optional()
});

type ReservationFormData = z.infer<typeof reservationSchema>;

const ReservationsPage: React.FC = () => {
  const form = useForm<ReservationFormData>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      customerName: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      partySize: '',
      specialRequests: ''
    }
  });

  const onSubmit = (data: ReservationFormData) => {
    console.log('Reservation data:', data);
    toast.success('Reservation request submitted! We will confirm your booking shortly.');
    form.reset();
  };

  const timeSlots = [
    '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', 
    '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM'
  ];

  const partySizes = Array.from({ length: 8 }, (_, i) => i + 1);

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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Make a Reservation</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Reserve your table at Sakura Sushi and enjoy an unforgettable dining experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Reservation Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Reservation Details</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="customerName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your full name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="Enter your email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Date</FormLabel>
                            <FormControl>
                              <Input type="date" {...field} min={new Date().toISOString().split('T')[0]} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="time"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Time</FormLabel>
                            <FormControl>
                              <select
                                {...field}
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              >
                                <option value="">Select time</option>
                                {timeSlots.map((time) => (
                                  <option key={time} value={time}>{time}</option>
                                ))}
                              </select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="partySize"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Party Size</FormLabel>
                            <FormControl>
                              <select
                                {...field}
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              >
                                <option value="">Select size</option>
                                {partySizes.map((size) => (
                                  <option key={size} value={size.toString()}>
                                    {size} {size === 1 ? 'person' : 'people'}
                                  </option>
                                ))}
                              </select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="specialRequests"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Special Requests (Optional)</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Any dietary restrictions, special occasions, or other requests..."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full" size="lg">
                      Submit Reservation Request
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Restaurant Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Hours of Operation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Thursday</span>
                    <span>11:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Friday - Saturday</span>
                    <span>11:00 AM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>12:00 PM - 9:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gray-400" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gray-400" />
                  <span>reservations@sakurasushi.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-5 w-5 text-gray-400 mt-0.5" />
                  <div>
                    <p>123 Sushi Street</p>
                    <p>Foodie District, City 12345</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Policies */}
            <Card>
              <CardHeader>
                <CardTitle>Reservation Policies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-medium mb-1">Cancellation Policy</h4>
                  <p className="text-sm text-gray-600">
                    Please cancel at least 2 hours before your reservation time.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Late Arrival</h4>
                  <p className="text-sm text-gray-600">
                    Tables are held for 15 minutes past reservation time.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Large Parties</h4>
                  <p className="text-sm text-gray-600">
                    Parties of 8 or more please call directly to make arrangements.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Image */}
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1563612116625-3012372fccce?w=600&h=400&fit=crop&q=80"
                alt="Restaurant interior"
                className="w-full h-64 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ReservationsPage;