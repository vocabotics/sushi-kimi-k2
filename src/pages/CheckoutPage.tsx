import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { CreditCard, Truck, Store, Plus, Minus } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const checkoutSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  address: z.string().min(5, 'Please enter a valid address'),
  city: z.string().min(2, 'Please enter a valid city'),
  zipCode: z.string().min(5, 'Please enter a valid zip code'),
  cardNumber: z.string().min(16, 'Please enter a valid card number'),
  expiryDate: z.string().min(5, 'Please enter expiry date (MM/YY)'),
  cvv: z.string().min(3, 'Please enter a valid CVV'),
  specialInstructions: z.string().optional()
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

const CheckoutPage: React.FC = () => {
  const { items, getTotal, updateQuantity, removeItem, clearCart } = useCartStore();
  const [orderType, setOrderType] = useState<'delivery' | 'pickup'>('delivery');
  const navigate = useNavigate();
  
  const form = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      phone: '',
      address: '',
      city: '',
      zipCode: '',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      specialInstructions: ''
    }
  });

  const subtotal = getTotal();
  const tax = subtotal * 0.08;
  const deliveryFee = orderType === 'delivery' ? 3.99 : 0;
  const total = subtotal + tax + deliveryFee;

  const onSubmit = (data: CheckoutFormData) => {
    console.log('Order data:', { ...data, items, orderType, total });
    toast.success('Order placed successfully! You will receive a confirmation email shortly.');
    clearCart();
    navigate('/');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🍱</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Add some delicious sushi to get started!</p>
          <Button onClick={() => navigate('/menu')}>Browse Menu</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Checkout</h1>
          <p className="text-xl text-gray-600">Complete your order</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Order Details</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Order Type Selection */}
                <Tabs value={orderType} onValueChange={(value) => setOrderType(value as 'delivery' | 'pickup')} className="mb-6">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="delivery" className="flex items-center">
                      <Truck className="h-4 w-4 mr-2" />
                      Delivery
                    </TabsTrigger>
                    <TabsTrigger value="pickup" className="flex items-center">
                      <Store className="h-4 w-4 mr-2" />
                      Pickup
                    </TabsTrigger>
                  </TabsList>
                </Tabs>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Contact Information */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                      <div className="space-y-4">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="your@email.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <div className="grid grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>First Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="First name" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Last Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Last name" {...field} />
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
                                <Input placeholder="(555) 123-4567" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Delivery Address */}
                    {orderType === 'delivery' && (
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Delivery Address</h3>
                        <div className="space-y-4">
                          <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Street Address</FormLabel>
                                <FormControl>
                                  <Input placeholder="123 Main Street, Apt 4B" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <div className="grid grid-cols-2 gap-4">
                            <FormField
                              control={form.control}
                              name="city"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>City</FormLabel>
                                  <FormControl>
                                    <Input placeholder="City" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="zipCode"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Zip Code</FormLabel>
                                  <FormControl>
                                    <Input placeholder="12345" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Payment Information */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <CreditCard className="h-5 w-5 mr-2" />
                        Payment Information
                      </h3>
                      <div className="space-y-4">
                        <FormField
                          control={form.control}
                          name="cardNumber"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Card Number</FormLabel>
                              <FormControl>
                                <Input placeholder="1234 5678 9012 3456" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <div className="grid grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="expiryDate"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Expiry Date</FormLabel>
                                <FormControl>
                                  <Input placeholder="MM/YY" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="cvv"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>CVV</FormLabel>
                                <FormControl>
                                  <Input placeholder="123" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Special Instructions */}
                    <FormField
                      control={form.control}
                      name="specialInstructions"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Special Instructions (Optional)</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Any special requests, dietary restrictions, or delivery instructions..."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full" size="lg">
                      Place Order - ${total.toFixed(2)}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-gray-500">${item.price.toFixed(2)} each</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="my-4" />

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  {orderType === 'delivery' && (
                    <div className="flex justify-between text-sm">
                      <span>Delivery Fee</span>
                      <span>${deliveryFee.toFixed(2)}</span>
                    </div>
                  )}
                  <Separator className="my-2" />
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                {orderType === 'pickup' && (
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-1">Pickup Information</h4>
                    <p className="text-sm text-blue-800">
                      Your order will be ready in 20-25 minutes at:
                    </p>
                    <p className="text-sm text-blue-800 font-medium">
                      123 Sushi Street, Foodie District
                    </p>
                  </div>
                )}

                {orderType === 'delivery' && (
                  <div className="mt-4 p-3 bg-green-50 rounded-lg">
                    <h4 className="font-medium text-green-900 mb-1">Delivery Information</h4>
                    <p className="text-sm text-green-800">
                      Estimated delivery time: 35-45 minutes
                    </p>
                    <p className="text-sm text-green-800">
                      Free delivery on orders over $50
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;